import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

// Create Supabase client only when needed (at runtime, not build time)
const getSupabaseClient = () => {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(`Missing Supabase credentials. URL: ${supabaseUrl ? "SET" : "MISSING"}, KEY: ${supabaseKey ? "SET" : "MISSING"}`);
  }

  return createClient(supabaseUrl, supabaseKey);
};

const getAuthClient = () => {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    throw new Error(`Missing Google service account credentials. EMAIL: ${clientEmail ? "SET" : "MISSING"}, KEY: ${privateKey ? "SET" : "MISSING"}`);
  }

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
};

// Health check endpoint to diagnose issues
export async function GET() {
  const checks = {
    supabase_url: process.env.SUPABASE_URL ? "SET" : "MISSING",
    supabase_key: process.env.SUPABASE_ANON_KEY ? "SET" : "MISSING",
    google_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL ? "SET" : "MISSING",
    google_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY ? "SET" : "MISSING",
    google_sheet_id: process.env.GOOGLE_SHEET_ID ? "SET" : "MISSING",
    email_user: process.env.EMAIL_USER ? "SET" : "MISSING",
    supabase_connection: "UNTESTED",
    google_sheets_connection: "UNTESTED",
  };

  // Test Supabase connection
  if (checks.supabase_url === "SET" && checks.supabase_key === "SET") {
    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase.storage.listBuckets();
      if (error) {
        checks.supabase_connection = `ERROR: ${error.message}`;
      } else {
        const bucketNames = data.map((b: { name: string }) => b.name);
        const hasBucket = bucketNames.includes("internship-applications");
        checks.supabase_connection = hasBucket
          ? "OK - bucket exists"
          : `WARNING - bucket 'internship-applications' not found. Available: ${bucketNames.join(", ")}`;
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      checks.supabase_connection = `FAILED: ${message}`;
    }
  }

  // Test Google Sheets connection
  if (checks.google_email === "SET" && checks.google_key === "SET" && checks.google_sheet_id === "SET") {
    try {
      const auth = getAuthClient();
      const sheets = google.sheets({ version: "v4", auth });
      const spreadsheetId = process.env.GOOGLE_SHEET_ID;
      const sheetName = process.env.GOOGLE_SHEET_NAME || "Sheet1";

      await sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId!,
        range: `${sheetName}!A1:A1`,
      });
      checks.google_sheets_connection = "OK";
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      checks.google_sheets_connection = `FAILED: ${message}`;
    }
  }

  const allOk = checks.supabase_connection.startsWith("OK") && checks.google_sheets_connection === "OK";

  return NextResponse.json(
    {
      status: allOk ? "healthy" : "unhealthy",
      checks,
      timestamp: new Date().toISOString(),
    },
    { status: allOk ? 200 : 503 }
  );
}

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
      console.error("DIAGNOSTIC: Missing Google Sheet ID env var");
      throw new Error("Missing Google Sheet ID.");
    }

    // Upload file to Supabase Storage
    let fileUrl = "";
    const attachmentName = attachment.name || "document";
    const fileExtension = attachmentName.includes(".")
      ? attachmentName.substring(attachmentName.lastIndexOf("."))
      : "";

    try {
      console.log("STEP 1: Starting Supabase file upload...");
      const fileBuffer = Buffer.from(await attachment.arrayBuffer());
      const sanitizedName = fullName.replace(/[^a-zA-Z0-9]/g, "_");
      const timestamp = Date.now();
      const fileName = `${internship.replace(/[^a-zA-Z0-9]/g, "_")}-${sanitizedName}-${timestamp}${fileExtension}`;

      const supabase = getSupabaseClient();

      const { data, error } = await supabase.storage
        .from("internship-applications")
        .upload(fileName, fileBuffer, {
          contentType: attachment.type || "application/octet-stream",
          upsert: false,
        });

      if (error) {
        console.error("STEP 1 FAILED - Supabase upload error:", JSON.stringify(error));
        throw new Error(`Supabase upload: ${error.message}`);
      }

      const { data: urlData } = supabase.storage
        .from("internship-applications")
        .getPublicUrl(fileName);

      fileUrl = urlData.publicUrl;
      console.log("STEP 1 SUCCESS: File uploaded to Supabase:", fileUrl);
    } catch (uploadError) {
      console.error("STEP 1 FAILED - File upload exception:", uploadError);
      return NextResponse.json(
        { message: "Failed to upload file. Please try again." },
        { status: 500 }
      );
    }

    // Save to Google Sheets
    try {
      console.log("STEP 2: Saving to Google Sheets...");
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
      console.log("STEP 2 SUCCESS: Saved to Google Sheets");
    } catch (sheetsError) {
      console.error("STEP 2 FAILED - Google Sheets error:", sheetsError);
      return NextResponse.json(
        { message: "Failed to save application data. Please try again." },
        { status: 500 }
      );
    }

    // Try to send email notification (optional)
    try {
      const emailUser = process.env.EMAIL_USER;
      const emailPass = process.env.EMAIL_PASS;

      if (emailUser && emailPass && emailPass.length > 10) {
        console.log("STEP 3: Sending email notification...");
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
        console.log("STEP 3 SUCCESS: Email sent");
      } else {
        console.log("STEP 3 SKIPPED: Email credentials not configured");
      }
    } catch (emailError) {
      console.error("STEP 3 FAILED (non-critical) - Email notification failed:", emailError);
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
