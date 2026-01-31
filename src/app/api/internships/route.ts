import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

export const runtime = "nodejs";

const getSheetsClient = () => {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    throw new Error("Missing Google Sheets service account credentials.");
  }

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const fullName = String(formData.get("fullName") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const address = String(formData.get("address") || "");
    const internship = String(formData.get("internship") || "");
    const level = String(formData.get("level") || "");
    const skills = String(formData.get("skills") || "");
    const attachment = formData.get("attachment");

    if (
      !fullName ||
      !email ||
      !address ||
      !internship ||
      !level ||
      !skills
    ) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!(attachment instanceof File)) {
      return NextResponse.json(
        { message: "Attachment is required." },
        { status: 400 }
      );
    }

    if (attachment.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { message: "Attachment must be under 10MB." },
        { status: 400 }
      );
    }

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const sheetName = process.env.GOOGLE_SHEET_NAME || "Sheet1";

    if (!spreadsheetId) {
      throw new Error("Missing Google Sheet ID.");
    }

    const auth = getSheetsClient();
    const sheets = google.sheets({ version: "v4", auth });

    // Store attachment filename (Drive upload skipped due to service account limitations)
    const attachmentName = attachment.name || "No attachment";

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A1`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            internship,
            fullName,
            email,
            phone || "",
            address,
            level,
            skills,
            attachmentName,
          ],
        ],
      },
    });

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (emailUser && emailPass && emailPass !== "your_gmail_app_password_here") {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      });

      await transporter.sendMail({
        from: emailUser,
        to: "wortholicai@gmail.com",
        subject: `New Internship Application - ${internship}`,
        html: `
          <h2>New Internship Application</h2>
          <p><strong>Internship:</strong> ${internship}</p>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Skill Level:</strong> ${level}</p>
          <p><strong>Relevant Skills:</strong></p>
          <p>${skills}</p>
          <p><strong>Attachment:</strong> ${attachmentName}</p>
        `,
      });
    }

    return NextResponse.json(
      { message: "Application submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Internship application error:", error);
    return NextResponse.json(
      { message: "Failed to submit application." },
      { status: 500 }
    );
  }
}
