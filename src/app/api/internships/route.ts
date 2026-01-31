import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

// Configure Supabase
const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

const getAuthClient = () => {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    throw new Error("Missing Google service account credentials.");
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

    if (!fullName || !email || !address || !internship || !level || !skills) {
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

    // Upload file to Supabase Storage
    let fileUrl = "";
    const attachmentName = attachment.name || "document";
    
    // Get file extension from original filename
    const fileExtension = attachmentName.includes('.') 
      ? attachmentName.substring(attachmentName.lastIndexOf('.'))
      : '';

    try {
      const fileBuffer = Buffer.from(await attachment.arrayBuffer());
      
      // Create unique filename
      const fileName = `${fullName.replace(/\s+/g, "_")}-${Date.now()}${fileExtension}`;
      
      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from("internship-applications")
        .upload(fileName, fileBuffer, {
          contentType: attachment.type,
          upsert: false,
        });

      if (error) {
        console.error("Supabase upload error:", error);
        throw new Error(error.message);
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from("internship-applications")
        .getPublicUrl(fileName);

      fileUrl = urlData.publicUrl;
      console.log("File uploaded to Supabase:", fileUrl);
    } catch (uploadError) {
      console.error("File upload failed:", uploadError);
      return NextResponse.json(
        { message: "Failed to upload file. Please try again." },
        { status: 500 }
      );
    }

    // Save to Google Sheets
    const auth = getAuthClient();
    const sheets = google.sheets({ version: "v4", auth });

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
            fileUrl,
          ],
        ],
      },
    });

    // Try to send email notification (optional)
    try {
      const emailUser = process.env.EMAIL_USER;
      const emailPass = process.env.EMAIL_PASS;

      if (emailUser && emailPass && emailPass.length > 10) {
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
            <p><strong>CV/Resume:</strong> <a href="${fileUrl}">${attachmentName}</a></p>
          `,
        });
      }
    } catch (emailError) {
      console.error("Email notification failed:", emailError);
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
