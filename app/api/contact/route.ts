import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

/**
 * Next.js API Route Handler for Contact Form Submissions
 * Location: /app/api/contact/route.ts
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message content cannot be empty." },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject ? subject.trim() : `New Message from ${cleanName}`;
    const cleanMessage = message.trim();

    // Check for SMTP / Email credentials in environment variables
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "mdshardulrahmanturjoofficial@gmail.com";

    // 1. If Web3Forms Access Key is provided in env
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (web3Key) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3Key,
          name: cleanName,
          email: cleanEmail,
          subject: cleanSubject,
          message: cleanMessage,
        }),
      });
      const data = await res.json();
      if (data.success) {
        return NextResponse.json({
          success: true,
          message: "Your message has been sent successfully!",
        });
      }
    }

    // 2. If Formspree Endpoint is provided in env
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    if (formspreeEndpoint) {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          subject: cleanSubject,
          message: cleanMessage,
        }),
      });
      if (res.ok) {
        return NextResponse.json({
          success: true,
          message: "Your message has been sent successfully!",
        });
      }
    }

    // 3. If SMTP / Gmail App Password is configured in environment variables
    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // true for 465, false for other ports
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"${cleanName} via Portfolio" <${smtpUser}>`,
        replyTo: cleanEmail,
        to: recipientEmail,
        subject: `[Portfolio] ${cleanSubject}`,
        text: `Name: ${cleanName}\nEmail: ${cleanEmail}\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h2 style="color: #ef4444; border-bottom: 2px solid #ef4444; padding-bottom: 8px;">New Portfolio Message</h2>
            <p><strong>From:</strong> ${cleanName} (&lt;${cleanEmail}&gt;)</p>
            <p><strong>Subject:</strong> ${cleanSubject}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="white-space: pre-wrap; font-size: 15px; color: #333; line-height: 1.6;">${cleanMessage}</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json({
        success: true,
        message: "Message delivered directly to inbox!",
      });
    }

    // 4. Default / Fallback Mode (No credentials set up yet in .env.local):
    // Log message to server console for developer verification and return success response
    console.log("==========================================");
    console.log("📩 NEW PORTFOLIO CONTACT MESSAGE RECEIVED");
    console.log(`From: ${cleanName} (${cleanEmail})`);
    console.log(`Subject: ${cleanSubject}`);
    console.log(`Message: ${cleanMessage}`);
    console.log("==========================================");
    console.log("ℹ️  To receive real email deliveries in your inbox:");
    console.log("Add your Gmail App Password to .env.local (SMTP_USER & SMTP_PASS)");
    console.log("or add WEB3FORMS_ACCESS_KEY or FORMSPREE_ENDPOINT.");
    console.log("==========================================");

    return NextResponse.json({
      success: true,
      message: "Message received successfully! (Logged to server)",
      demoMode: true,
    });
  } catch (error: any) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to process message." },
      { status: 500 }
    );
  }
}
