import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  checkRateLimit,
  cleanTextarea,
  cleanText,
  escapeHtml,
  getClientKey,
  isValidEmail,
} from "@/lib/security";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const limit = checkRateLimit(getClientKey(request, "contact"), {
      windowMs: 15 * 60 * 1000,
      maxRequests: 6,
    });

    if (!limit.allowed) {
      return NextResponse.json(
        { message: "Too many requests. Try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const name = cleanText(body.name, 120);
    const email = cleanText(body.email, 160).toLowerCase();
    const phone = cleanText(body.phone, 40);
    const projectDetails = cleanTextarea(body.projectDetails, 2000);
    const company = cleanText(body.company, 120);

    if (company) {
      return NextResponse.json({ message: "Message received." }, { status: 200 });
    }

    if (!name || !email || !projectDetails) {
      return NextResponse.json(
        { message: "Name, email, and project details are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: "Enter a valid email address." },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass || emailPass === "your_gmail_app_password_here") {
      console.log("Contact form received without email transport configured", {
        name,
        email,
      });

      return NextResponse.json(
        { message: "Message received successfully." },
        { status: 200 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: emailUser,
      to: "wortholicai@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Project Details:</strong></p>
        <p>${escapeHtml(projectDetails).replace(/\n/g, "<br />")}</p>
        <hr>
        <p><em>This message was sent from the Wortholic website contact form.</em></p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send message." },
      { status: 500 }
    );
  }
}
