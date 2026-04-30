import { createClient } from "@supabase/supabase-js";
import { google } from "googleapis";
import nodemailer from "nodemailer";

export function getSupabaseClient() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase credentials.");
  }

  return createClient(supabaseUrl, supabaseKey);
}

export function getSheetsClient() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    throw new Error("Missing Google Sheets credentials.");
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

export function sanitizeFileName(value: string) {
  return value.replace(/[^a-zA-Z0-9-_]/g, "_");
}

export async function uploadHiringAttachment({
  bucket,
  folder,
  attachment,
  applicantName,
  roleSlug,
}: {
  bucket: string;
  folder: string;
  attachment: File;
  applicantName: string;
  roleSlug: string;
}) {
  const supabase = getSupabaseClient();
  const fileBuffer = Buffer.from(await attachment.arrayBuffer());
  const extension = attachment.name.includes(".")
    ? attachment.name.slice(attachment.name.lastIndexOf("."))
    : "";
  const fileName = `${folder}/${sanitizeFileName(roleSlug)}-${sanitizeFileName(
    applicantName
  )}-${Date.now()}${extension}`;

  const { error } = await supabase.storage.from(bucket).upload(fileName, fileBuffer, {
    contentType: attachment.type || "application/octet-stream",
    upsert: false,
  });

  if (error) {
    throw new Error(`Supabase upload failed: ${error.message}`);
  }

  const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
  return {
    fileName,
    publicUrl: data.publicUrl,
  };
}

export async function appendHiringSheetRow({
  sheetName,
  values,
}: {
  sheetName: string;
  values: string[];
}) {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!spreadsheetId) {
    throw new Error("Missing Google Sheet ID.");
  }

  const sheets = getSheetsClient();
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A1`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [values],
    },
  });
}

export async function sendHiringNotification({
  subject,
  html,
}: {
  subject: string;
  html: string;
}) {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass || emailPass.length < 10) {
    return;
  }

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
    subject,
    html,
  });
}
