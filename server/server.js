import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from server/.env and root .env
dotenv.config({ path: path.resolve(__dirname, ".env") });
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || "contact@blevon.in";

// -------------------------------------------------------------
// CORS CONFIGURATION
// -------------------------------------------------------------
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174",
  "https://blevon.in",
  "https://www.blevon.in",
  "https://blevon.vercel.app",
];

if (process.env.FRONTEND_URL) {
  allowedOrigins.push(process.env.FRONTEND_URL.replace(/\/$/, ""));
}

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, server-to-server)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, true); // Permissive in dev, logged below
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json({ limit: "1mb" }));

// Rate limiter: max 40 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 40,
  message: {
    success: false,
    error: "Too many requests from this IP. Please try again in a few minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use("/api/", limiter);

// -------------------------------------------------------------
// NODEMAILER TRANSPORTER CREATION & VERIFICATION
// -------------------------------------------------------------
function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  if (!host || !user || !pass) {
    return {
      transporter: null,
      error: "SMTP configuration incomplete. Missing SMTP_HOST, SMTP_USER, or SMTP_PASSWORD in backend environment.",
    };
  }

  const sanitizedUser = (user || "").trim();
  const sanitizedPass = host.includes("gmail") ? pass.replace(/\s+/g, "") : pass.trim();

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user: sanitizedUser, pass: sanitizedPass },
    tls: {
      rejectUnauthorized: process.env.NODE_ENV === "production",
    },
  });

  return { transporter, error: null };
}

// Verify transporter on startup
async function verifySmtpConnection() {
  const { transporter, error } = getTransporter();

  console.log("\n==============================================");
  console.log("⚙️  BLEVON SMTP Configuration Check:");
  console.log(`   • SMTP Host:       ${process.env.SMTP_HOST || "NOT SET"}`);
  console.log(`   • SMTP Port:       ${process.env.SMTP_PORT || "587"}`);
  console.log(`   • SMTP Secure:     ${process.env.SMTP_SECURE === "true" || process.env.SMTP_PORT === "465"}`);
  console.log(`   • SMTP User:       ${process.env.SMTP_USER ? process.env.SMTP_USER.replace(/(.{3}).*@/, "$1***@") : "NOT SET"}`);
  console.log(`   • SMTP Password:   ${process.env.SMTP_PASSWORD ? "[CONFIGURED]" : "NOT SET"}`);
  console.log(`   • Business Email:  ${BUSINESS_EMAIL}`);

  if (error) {
    console.warn(`⚠️  SMTP Warning: ${error}`);
    console.warn("   Emails cannot be sent until valid SMTP credentials are set in server/.env");
    console.log("==============================================\n");
    return;
  }

  try {
    await transporter.verify();
    console.log("✅ SMTP Server Connection Verified Successfully! Transporter is ready.");
  } catch (verifyErr) {
    console.error("❌ SMTP Verification Failed:");
    console.error(`   Code:    ${verifyErr.code || "UNKNOWN"}`);
    console.error(`   Message: ${verifyErr.message}`);
    console.error("   Please check your SMTP host, port, username, or App Password.");
  }
  console.log("==============================================\n");
}

// -------------------------------------------------------------
// 1. HEALTH CHECK ENDPOINT
// -------------------------------------------------------------
app.get("/api/health", (req, res) => {
  const { transporter } = getTransporter();
  res.json({
    status: "ok",
    service: "BLEVON Backend API",
    smtpConfigured: Boolean(transporter),
    businessEmail: BUSINESS_EMAIL,
    time: new Date().toISOString(),
  });
});

// -------------------------------------------------------------
// 2. SEND AN ENQUIRY ENDPOINT
// -------------------------------------------------------------
app.post("/api/enquiries", async (req, res) => {
  const startTime = Date.now();
  try {
    const { name, email, phone, company, projectType, message, details } = req.body || {};

    const clientName = (name || "").trim();
    const clientEmail = (email || "").trim();
    const clientPhone = (phone || "").trim() || "Not provided";
    const clientCompany = (company || "").trim() || "Not provided";
    const serviceType = (projectType || "Website Development").trim();
    const projectMessage = (message || details || "").trim();
    const submissionTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    console.log(`\n[ENQUIRY REQUEST] Received from: "${clientName}" <${clientEmail}>`);

    // Strict validation
    if (!clientName) {
      return res.status(400).json({ success: false, error: "Name is required." });
    }
    if (!clientEmail || !/^\S+@\S+\.\S+$/.test(clientEmail)) {
      return res.status(400).json({ success: false, error: "A valid email address is required." });
    }
    if (!projectMessage) {
      return res.status(400).json({ success: false, error: "Project details / message is required." });
    }

    const { transporter, error: smtpConfigError } = getTransporter();
    if (smtpConfigError || !transporter) {
      console.error(`[ENQUIRY ERROR] ${smtpConfigError}`);
      return res.status(500).json({
        success: false,
        error: "Email delivery service is currently not configured on the server. Please contact us directly via WhatsApp (+91 9491229471) or email (contact@blevon.in).",
      });
    }

    const senderEmail = process.env.SMTP_USER || BUSINESS_EMAIL;

    const mailOptions = {
      from: `"BLEVON Studio" <${senderEmail}>`,
      to: BUSINESS_EMAIL,
      replyTo: `"${clientName}" <${clientEmail}>`,
      subject: `New BLEVON Project Enquiry — ${clientName}`,
      text: `
New BLEVON Project Enquiry

Client Details:
• Name:             ${clientName}
• Email:            ${clientEmail}
• Phone / WhatsApp: ${clientPhone}
• Company:          ${clientCompany}
• Service:          ${serviceType}
• Date/Time:        ${submissionTime} (IST)

Project Message:
${projectMessage}
      `.trim(),
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E4E7EC; border-radius: 16px; background-color: #ffffff;">
          <div style="border-bottom: 2px solid #2563EB; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #0E2A6D; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 0.05em;">New BLEVON Project Enquiry</h2>
            <p style="color: #667085; font-size: 13px; margin: 4px 0 0 0;">Received on ${submissionTime} IST</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #667085; font-size: 14px; width: 140px; font-weight: 600;">Client Name:</td>
              <td style="padding: 8px 0; color: #101828; font-size: 15px; font-weight: 600;">${clientName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #667085; font-size: 14px; font-weight: 600;">Email:</td>
              <td style="padding: 8px 0; color: #2563EB; font-size: 15px;"><a href="mailto:${clientEmail}" style="color: #2563EB; text-decoration: none;">${clientEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #667085; font-size: 14px; font-weight: 600;">Phone / WhatsApp:</td>
              <td style="padding: 8px 0; color: #101828; font-size: 15px;"><a href="https://wa.me/${clientPhone.replace(/[^0-9]/g, "")}" style="color: #101828; text-decoration: none;">${clientPhone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #667085; font-size: 14px; font-weight: 600;">Company / Brand:</td>
              <td style="padding: 8px 0; color: #101828; font-size: 15px;">${clientCompany}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #667085; font-size: 14px; font-weight: 600;">Service Required:</td>
              <td style="padding: 8px 0; color: #101828; font-size: 15px;"><span style="background-color: #EAF1FF; color: #2563EB; padding: 3px 10px; border-radius: 9999px; font-weight: 600; font-size: 12px;">${serviceType}</span></td>
            </tr>
          </table>

          <div style="background-color: #F7F8F6; border: 1px solid #E4E7EC; border-radius: 12px; padding: 16px; margin-bottom: 20px;">
            <h4 style="margin: 0 0 8px 0; color: #0E2A6D; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Project Description:</h4>
            <p style="margin: 0; color: #344054; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${projectMessage}</p>
          </div>

          <div style="border-top: 1px solid #E4E7EC; padding-top: 12px; text-align: center; color: #98A2B3; font-size: 12px;">
            BLEVON Digital Studio • <a href="https://blevon.in" style="color: #98A2B3; text-decoration: none;">blevon.in</a>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    const duration = Date.now() - startTime;
    console.log(`[ENQUIRY SUCCESS] Email sent in ${duration}ms. MessageId: ${info.messageId}`);

    return res.status(200).json({
      success: true,
      message: "Your enquiry has been received. We will get back to you shortly.",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("[ENQUIRY FAILURE] Error sending enquiry email:", error);
    return res.status(500).json({
      success: false,
      error: `Failed to deliver email: ${error.message || "SMTP error"}. Please reach out directly to contact@blevon.in or WhatsApp +91 9491229471.`,
    });
  }
});

// -------------------------------------------------------------
// 3. BOOK A CALL ENDPOINT
// -------------------------------------------------------------
app.post("/api/bookings", async (req, res) => {
  const startTime = Date.now();
  try {
    const {
      name,
      email,
      phone,
      company,
      projectType,
      details,
      selectedDate,
      selectedTime,
    } = req.body || {};

    const clientName = (name || "").trim();
    const clientEmail = (email || "").trim();
    const clientPhone = (phone || "").trim();
    const clientCompany = (company || "").trim() || "Not specified";
    const serviceType = (projectType || "Website Development").trim();
    const projectRequirement = (details || "").trim() || "None provided";
    const callDate = (selectedDate || "").trim();
    const callTime = (selectedTime || "").trim();
    const submissionTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    console.log(`\n[BOOKING REQUEST] Received from: "${clientName}" <${clientEmail}> for ${callDate} at ${callTime}`);

    // Strict validation
    if (!clientName) {
      return res.status(400).json({ success: false, error: "Name is required." });
    }
    if (!clientEmail || !/^\S+@\S+\.\S+$/.test(clientEmail)) {
      return res.status(400).json({ success: false, error: "A valid email address is required." });
    }
    if (!clientPhone) {
      return res.status(400).json({ success: false, error: "Phone / WhatsApp number is required." });
    }
    if (!callDate || !callTime) {
      return res.status(400).json({ success: false, error: "Selected date and time slot are required." });
    }

    const { transporter, error: smtpConfigError } = getTransporter();
    if (smtpConfigError || !transporter) {
      console.error(`[BOOKING ERROR] ${smtpConfigError}`);
      return res.status(500).json({
        success: false,
        error: "Email delivery service is currently not configured on the server. Please contact us directly via WhatsApp (+91 9491229471) or email (contact@blevon.in).",
      });
    }

    const senderEmail = process.env.SMTP_USER || BUSINESS_EMAIL;

    const mailOptions = {
      from: `"BLEVON Studio" <${senderEmail}>`,
      to: BUSINESS_EMAIL,
      replyTo: `"${clientName}" <${clientEmail}>`,
      subject: `New BLEVON Call Booking Request — ${clientName}`,
      text: `
New BLEVON Call Booking Request

Requested Slot:
• Date:             ${callDate}
• Time:             ${callTime} (IST)
• Submission Time:  ${submissionTime} (IST)

Client Information:
• Name:             ${clientName}
• Email:            ${clientEmail}
• Phone / WhatsApp: ${clientPhone}
• Company:          ${clientCompany}
• Project Scope:    ${serviceType}

Project Requirement Notes:
${projectRequirement}

Action Required:
Review the slot above, confirm manually, and reply to the client with the Google Meet link.
      `.trim(),
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E4E7EC; border-radius: 16px; background-color: #ffffff;">
          <div style="border-bottom: 2px solid #2563EB; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #0E2A6D; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 0.05em;">New BLEVON Call Booking Request</h2>
            <p style="color: #667085; font-size: 13px; margin: 4px 0 0 0;">Received on ${submissionTime} IST</p>
          </div>

          <!-- Highlighted Schedule Banner -->
          <div style="background-color: #EAF1FF; border: 1px solid #BFDBFE; border-radius: 12px; padding: 16px; margin-bottom: 20px; text-align: center;">
            <span style="color: #2563EB; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;">Requested Discovery Session</span>
            <div style="color: #0E2A6D; font-size: 18px; font-weight: 700; margin-top: 4px;">${callDate}</div>
            <div style="color: #2563EB; font-size: 15px; font-weight: 600; margin-top: 2px;">${callTime} (IST)</div>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #667085; font-size: 14px; width: 150px; font-weight: 600;">Client Name:</td>
              <td style="padding: 8px 0; color: #101828; font-size: 15px; font-weight: 600;">${clientName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #667085; font-size: 14px; font-weight: 600;">Email:</td>
              <td style="padding: 8px 0; color: #2563EB; font-size: 15px;"><a href="mailto:${clientEmail}" style="color: #2563EB; text-decoration: none;">${clientEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #667085; font-size: 14px; font-weight: 600;">Phone / WhatsApp:</td>
              <td style="padding: 8px 0; color: #101828; font-size: 15px;"><a href="https://wa.me/${clientPhone.replace(/[^0-9]/g, "")}" style="color: #101828; text-decoration: none;">${clientPhone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #667085; font-size: 14px; font-weight: 600;">Company / Brand:</td>
              <td style="padding: 8px 0; color: #101828; font-size: 15px;">${clientCompany}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #667085; font-size: 14px; font-weight: 600;">Project Scope:</td>
              <td style="padding: 8px 0; color: #101828; font-size: 15px;"><span style="background-color: #F2F4F7; color: #344054; padding: 3px 10px; border-radius: 9999px; font-weight: 600; font-size: 12px;">${serviceType}</span></td>
            </tr>
          </table>

          <div style="background-color: #F7F8F6; border: 1px solid #E4E7EC; border-radius: 12px; padding: 16px; margin-bottom: 20px;">
            <h4 style="margin: 0 0 8px 0; color: #0E2A6D; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Project Requirement Notes:</h4>
            <p style="margin: 0; color: #344054; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${projectRequirement}</p>
          </div>

          <p style="color: #667085; font-size: 13px; line-height: 1.5; margin: 0 0 16px 0; background-color: #FEF3C7; padding: 10px; border-radius: 8px; border: 1px solid #FDE68A;">
            <strong>Action Required:</strong> Review the slot above, confirm manually, and reply to the client with the Google Meet link.
          </p>

          <div style="border-top: 1px solid #E4E7EC; padding-top: 12px; text-align: center; color: #98A2B3; font-size: 12px;">
            BLEVON Digital Studio • <a href="https://blevon.in" style="color: #98A2B3; text-decoration: none;">blevon.in</a>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    const duration = Date.now() - startTime;
    console.log(`[BOOKING SUCCESS] Email sent in ${duration}ms. MessageId: ${info.messageId}`);

    return res.status(200).json({
      success: true,
      message: "Your call booking request has been received. We will confirm your session shortly.",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("[BOOKING FAILURE] Error sending booking email:", error);
    return res.status(500).json({
      success: false,
      error: `Failed to deliver booking request: ${error.message || "SMTP error"}. Please reach out directly to contact@blevon.in or WhatsApp +91 9491229471.`,
    });
  }
});

// -------------------------------------------------------------
// START SERVER
// -------------------------------------------------------------
app.listen(PORT, async () => {
  console.log(`\n==============================================`);
  console.log(`🚀 BLEVON Express API Server running on port ${PORT}`);
  console.log(`📡 Endpoints:`);
  console.log(`   • POST /api/enquiries (Project Enquiries)`);
  console.log(`   • POST /api/bookings  (Call Booking Requests)`);
  console.log(`   • GET  /api/health    (Server Health Check)`);
  console.log(`==============================================`);
  await verifySmtpConnection();
});
