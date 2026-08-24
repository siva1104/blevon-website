import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const allowedOrigin =
    process.env.FRONTEND_URL || "http://localhost:5173";

  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  try {
    const {
      name,
      email,
      phone,
      company,
      projectType,
      message,
      details,
    } = req.body || {};

    const clientName = String(name || "").trim();
    const clientEmail = String(email || "").trim();
    const clientPhone = String(phone || "").trim() || "Not provided";
    const clientCompany =
      String(company || "").trim() || "Not provided";

    const serviceType =
      String(projectType || "Website Development").trim();

    const projectMessage =
      String(message || details || "").trim();

    const submissionTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // -------------------------
    // Validation
    // -------------------------

    if (!clientName) {
      return res.status(400).json({
        success: false,
        error: "Name is required.",
      });
    }

    if (
      !clientEmail ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail)
    ) {
      return res.status(400).json({
        success: false,
        error: "A valid email address is required.",
      });
    }

    if (!projectMessage) {
      return res.status(400).json({
        success: false,
        error: "Project details / message is required.",
      });
    }

    // -------------------------
    // SMTP configuration
    // -------------------------

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD;

    const businessEmail =
      process.env.BUSINESS_EMAIL || user;

    const secure =
      process.env.SMTP_SECURE === "true" || port === 465;

    if (!host || !user || !pass || !businessEmail) {
      console.error(
        "[ENQUIRY] SMTP environment variables are missing."
      );

      return res.status(500).json({
        success: false,
        error:
          "Email service is currently unavailable. Please contact us directly.",
      });
    }

    // Gmail App Passwords sometimes contain spaces.
    const smtpPassword =
      host.includes("gmail")
        ? pass.replace(/\s+/g, "")
        : pass;

    // -------------------------
    // Nodemailer
    // -------------------------

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user: user.trim(),
        pass: smtpPassword,
      },
    });

    // -------------------------
    // WhatsApp link
    // -------------------------

    const whatsappPhone = clientPhone.replace(/\D/g, "");

    // -------------------------
    // Email
    // -------------------------

    const mailOptions = {
      from: `"BLEVON Studio" <${user.trim()}>`,
      to: businessEmail,
      replyTo: `"${clientName}" <${clientEmail}>`,

      subject:
        `New BLEVON Project Enquiry — ${clientName}`,

      text: `
New BLEVON Project Enquiry

Client Details

Name: ${clientName}
Email: ${clientEmail}
Phone / WhatsApp: ${clientPhone}
Company: ${clientCompany}
Service: ${serviceType}

Submitted:
${submissionTime} IST

Project Description:

${projectMessage}

WhatsApp:
https://wa.me/${whatsappPhone}
      `.trim(),

      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;
          max-width: 600px;
          margin: 0 auto;
          padding: 24px;
          border: 1px solid #E4E7EC;
          border-radius: 16px;
          background: #ffffff;
        ">

          <div style="
            border-bottom: 2px solid #2563EB;
            padding-bottom: 12px;
            margin-bottom: 20px;
          ">
            <h2 style="
              color: #0E2A6D;
              margin: 0;
              font-size: 20px;
            ">
              New BLEVON Project Enquiry
            </h2>

            <p style="
              color: #667085;
              font-size: 13px;
              margin: 6px 0 0;
            ">
              Received on ${submissionTime} IST
            </p>
          </div>

          <table style="
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          ">

            <tr>
              <td style="
                padding: 8px 0;
                color: #667085;
                font-size: 14px;
                font-weight: 600;
                width: 150px;
              ">
                Client Name
              </td>

              <td style="
                padding: 8px 0;
                color: #101828;
                font-size: 15px;
                font-weight: 600;
              ">
                ${clientName}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 8px 0;
                color: #667085;
                font-size: 14px;
                font-weight: 600;
              ">
                Email
              </td>

              <td style="
                padding: 8px 0;
                font-size: 15px;
              ">
                <a
                  href="mailto:${clientEmail}"
                  style="
                    color: #2563EB;
                    text-decoration: none;
                  "
                >
                  ${clientEmail}
                </a>
              </td>
            </tr>

            <tr>
              <td style="
                padding: 8px 0;
                color: #667085;
                font-size: 14px;
                font-weight: 600;
              ">
                Phone / WhatsApp
              </td>

              <td style="
                padding: 8px 0;
                font-size: 15px;
              ">
                <a
                  href="https://wa.me/${whatsappPhone}"
                  style="
                    color: #101828;
                    text-decoration: none;
                  "
                >
                  ${clientPhone}
                </a>
              </td>
            </tr>

            <tr>
              <td style="
                padding: 8px 0;
                color: #667085;
                font-size: 14px;
                font-weight: 600;
              ">
                Company / Brand
              </td>

              <td style="
                padding: 8px 0;
                color: #101828;
                font-size: 15px;
              ">
                ${clientCompany}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 8px 0;
                color: #667085;
                font-size: 14px;
                font-weight: 600;
              ">
                Service Required
              </td>

              <td style="
                padding: 8px 0;
                color: #101828;
                font-size: 15px;
              ">
                ${serviceType}
              </td>
            </tr>

          </table>

          <div style="
            background: #F7F8F6;
            border: 1px solid #E4E7EC;
            border-radius: 12px;
            padding: 16px;
            margin-bottom: 20px;
          ">

            <h4 style="
              margin: 0 0 8px;
              color: #0E2A6D;
              font-size: 13px;
              text-transform: uppercase;
            ">
              Project Description
            </h4>

            <p style="
              margin: 0;
              color: #344054;
              font-size: 14px;
              line-height: 1.6;
              white-space: pre-wrap;
            ">
              ${projectMessage}
            </p>

          </div>

          <div style="
            border-top: 1px solid #E4E7EC;
            padding-top: 12px;
            text-align: center;
            color: #98A2B3;
            font-size: 12px;
          ">
            BLEVON Digital Studio
          </div>

        </div>
      `,
    };

    // -------------------------
    // Send email
    // -------------------------

    const info = await transporter.sendMail(mailOptions);

    console.log(
      "[ENQUIRY] Email sent successfully:",
      info.messageId
    );

    return res.status(200).json({
      success: true,
      message:
        "Your enquiry has been received. We will get back to you shortly.",
    });

  } catch (error) {
    console.error(
      "[ENQUIRY] Email delivery failed:",
      error
    );

    return res.status(500).json({
      success: false,
      error:
        "We couldn't send your enquiry right now. Please try again or contact us directly.",
    });
  }
}