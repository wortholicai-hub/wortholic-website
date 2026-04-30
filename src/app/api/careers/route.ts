import { NextRequest, NextResponse } from "next/server";
import {
  appendHiringSheetRow,
  sendHiringNotification,
  uploadHiringAttachment,
} from "@/lib/hiring";
import {
  checkRateLimit,
  cleanTextarea,
  cleanText,
  escapeHtml,
  getClientKey,
  isAllowedResumeFile,
  isValidEmail,
} from "@/lib/security";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const limit = checkRateLimit(getClientKey(request, "careers"), {
      windowMs: 15 * 60 * 1000,
      maxRequests: 5,
    });

    if (!limit.allowed) {
      return NextResponse.json(
        { message: "Too many submissions. Try again later." },
        { status: 429 }
      );
    }

    const formData = await request.formData();
    const jobTitle = cleanText(formData.get("jobTitle"), 160);
    const jobLocation = cleanText(formData.get("jobLocation"), 120);
    const fullName = cleanText(formData.get("fullName"), 120);
    const email = cleanText(formData.get("email"), 160).toLowerCase();
    const phone = cleanText(formData.get("phone"), 40);
    const address = cleanText(formData.get("address"), 160);
    const yearsOfExperience = cleanText(formData.get("yearsOfExperience"), 40);
    const linkedinUrl = cleanText(formData.get("linkedinUrl"), 240);
    const portfolioUrl = cleanText(formData.get("portfolioUrl"), 240);
    const summary = cleanTextarea(formData.get("summary"), 2200);
    const company = cleanText(formData.get("company"), 120);
    const attachment = formData.get("attachment");

    if (company) {
      return NextResponse.json(
        { message: "Application submitted successfully." },
        { status: 200 }
      );
    }

    if (
      !jobTitle ||
      !fullName ||
      !email ||
      !address ||
      !yearsOfExperience ||
      !summary
    ) {
      return NextResponse.json(
        { message: "Complete all required fields before submitting." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: "Enter a valid email address." },
        { status: 400 }
      );
    }

    if (!(attachment instanceof File)) {
      return NextResponse.json(
        { message: "A resume or CV file is required." },
        { status: 400 }
      );
    }

    if (attachment.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { message: "Resume file must be under 10MB." },
        { status: 400 }
      );
    }

    if (!isAllowedResumeFile(attachment)) {
      return NextResponse.json(
        { message: "Unsupported file type. Upload PDF, DOC, DOCX, JPG, or PNG." },
        { status: 400 }
      );
    }

    const upload = await uploadHiringAttachment({
      bucket: "internship-applications",
      folder: "careers",
      attachment,
      applicantName: fullName,
      roleSlug: `${jobTitle}-${jobLocation}`,
    });

    await appendHiringSheetRow({
      sheetName:
        process.env.GOOGLE_CAREERS_SHEET_NAME ||
        process.env.GOOGLE_SHEET_NAME ||
        "Careers",
      values: [
        new Date().toISOString(),
        "Career",
        jobTitle,
        jobLocation,
        fullName,
        email,
        phone,
        address,
        yearsOfExperience,
        linkedinUrl,
        portfolioUrl,
        summary,
        attachment.name,
        upload.publicUrl,
      ],
    });

    await sendHiringNotification({
      subject: `New Career Application - ${jobTitle}`,
      html: `
        <h2>New Career Application</h2>
        <p><strong>Role:</strong> ${escapeHtml(jobTitle)}</p>
        <p><strong>Location:</strong> ${escapeHtml(jobLocation || "Not specified")}</p>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Current location:</strong> ${escapeHtml(address)}</p>
        <p><strong>Experience:</strong> ${escapeHtml(yearsOfExperience)}</p>
        <p><strong>LinkedIn:</strong> ${escapeHtml(linkedinUrl || "Not provided")}</p>
        <p><strong>Portfolio:</strong> ${escapeHtml(portfolioUrl || "Not provided")}</p>
        <p><strong>Summary:</strong><br />${escapeHtml(summary).replace(/\n/g, "<br />")}</p>
        <p><strong>Resume:</strong> <a href="${upload.publicUrl}">${escapeHtml(
        attachment.name
      )}</a></p>
      `,
    });

    return NextResponse.json(
      { message: "Application submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Career application error:", error);
    return NextResponse.json(
      { message: "Failed to submit application." },
      { status: 500 }
    );
  }
}
