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
      details,
      selectedDate,
      selectedTime,
    } = req.body || {};

    const clientName = String(name || "").trim();
    const clientEmail = String(email || "").trim();
    const clientPhone = String(phone || "").trim();
    const clientCompany =
      String(company || "").trim() || "Not specified";

    const serviceType =
      String(projectType || "Website Development").trim();

    const projectRequirement =
      String(details || "").trim() || "None provided";

    const callDate = String(selectedDate || "").trim();
    const callTime = String(selectedTime || "").trim();

    const submissionTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // Validation
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

    if (!clientPhone) {
      return res.status(400).json({
        success: false,
        error: "Phone / WhatsApp number is required.",
      });
    }

    if (!callDate || !callTime) {
      return res.status(400).json({
        success: false,
        error: "Selected date and time slot are required.",
      });
    }

    // SMTP configuration
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
        "[BOOKING] SMTP environment variables are missing."
      );

      return res.status(500).json({
        success: false,
        error:
          "Email service is currently unavailable. Please contact us directly.",
      });
    }

    const smtpPassword = host.includes("gmail")
      ? pass.replace(/\s+/g, "")
      : pass;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user: user.trim(),
        pass: smtpPassword,
      },
    });

    // WhatsApp number for email link
    const whatsappPhone = clientPhone.replace(/\D/g, "");

    const mailOptions = {
      from: `"BLEVON Studio" <${user.trim()}>`,
      to: businessEmail,
      replyTo: `"${clientName}" <${clientEmail}>`,

      subject:
        `New BLEVON Call Booking Request — ${clientName}`,

      text: `
New BLEVON Call Booking Request

REQUESTED SLOT

Date: ${callDate}
Time: ${callTime} (IST)
Submitted: ${submissionTime} (IST)

CLIENT INFORMATION

Name: ${clientName}
Email: ${clientEmail}
Phone / WhatsApp: ${clientPhone}
Company: ${clientCompany}
Project Scope: ${serviceType}

PROJECT REQUIREMENT

${projectRequirement}

ACTION REQUIRED

Review the requested slot, confirm manually, and reply to the client with the Google Meet link.

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
              New BLEVON Call Booking Request
            </h2>

            <p style="
              color: #667085;
              font-size: 13px;
              margin: 6px 0 0;
            ">
              Received on ${submissionTime} IST
            </p>
          </div>

          <div style="
            background: #EAF1FF;
            border: 1px solid #BFDBFE;
            border-radius: 12px;
            padding: 16px;
            margin-bottom: 20px;
            text-align: center;
          ">

            <div style="
              color: #2563EB;
              font-size: 11px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.1em;
            ">
              Requested Discovery Session
            </div>

            <div style="
              color: #0E2A6D;
              font-size: 18px;
              font-weight: 700;
              margin-top: 6px;
            ">
              ${callDate}
            </div>

            <div style="
              color: #2563EB;
              font-size: 15px;
              font-weight: 600;
              margin-top: 3px;
            ">
              ${callTime} (IST)
            </div>

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
                Project Scope
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
              letter-spacing: 0.05em;
            ">
              Project Requirement Notes
            </h4>

            <p style="
              margin: 0;
              color: #344054;
              font-size: 14px;
              line-height: 1.6;
              white-space: pre-wrap;
            ">
              ${projectRequirement}
            </p>

          </div>

          <div style="
            color: #667085;
            font-size: 13px;
            line-height: 1.5;
            background: #FEF3C7;
            padding: 12px;
            border-radius: 8px;
            border: 1px solid #FDE68A;
            margin-bottom: 20px;
          ">
            <strong>Action Required:</strong>
            Review the requested slot, confirm manually,
            and reply to the client with the Google Meet link.
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

    const info = await transporter.sendMail(mailOptions);

    console.log(
      "[BOOKING] Email sent successfully:",
      info.messageId
    );

    return res.status(200).json({
      success: true,
      message:
        "Your call booking request has been received. We will confirm your session shortly.",
    });

  } catch (error) {
    console.error(
      "[BOOKING] Email delivery failed:",
      error
    );

    return res.status(500).json({
      success: false,
      error:
        "We couldn't send your booking request right now. Please try again or contact us directly.",
    });
  }
}