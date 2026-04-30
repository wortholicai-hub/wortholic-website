"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type CareerApplicationFormProps = {
  jobTitle: string;
  jobLocation: string;
};

type Status =
  | { type: "success"; message: string }
  | { type: "error"; message: string }
  | null;

export default function CareerApplicationForm({
  jobTitle,
  jobLocation,
}: CareerApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    yearsOfExperience: "",
    linkedinUrl: "",
    portfolioUrl: "",
    summary: "",
    company: "",
  });
  const [attachment, setAttachment] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, files } = event.target as HTMLInputElement;

    if (name === "attachment" && files?.[0]) {
      setAttachment(files[0]);
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      if (!attachment) {
        setStatus({
          type: "error",
          message: "Attach a resume before submitting the application.",
        });
        setIsSubmitting(false);
        return;
      }

      const payload = new FormData();
      payload.append("jobTitle", jobTitle);
      payload.append("jobLocation", jobLocation);
      payload.append("fullName", formData.fullName);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("address", formData.address);
      payload.append("yearsOfExperience", formData.yearsOfExperience);
      payload.append("linkedinUrl", formData.linkedinUrl);
      payload.append("portfolioUrl", formData.portfolioUrl);
      payload.append("summary", formData.summary);
      payload.append("company", formData.company);
      payload.append("attachment", attachment);

      const response = await fetch("/api/careers", {
        method: "POST",
        body: payload,
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || "Failed to submit application.");
      }

      setStatus({
        type: "success",
        message:
          "Application received. The hiring team will review it and follow up by email if there is a fit.",
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        yearsOfExperience: "",
        linkedinUrl: "",
        portfolioUrl: "",
        summary: "",
        company: "",
      });
      setAttachment(null);
      const input = document.querySelector(
        'input[name="attachment"]'
      ) as HTMLInputElement | null;
      if (input) input.value = "";
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to submit application.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-[2rem] border border-[#d8ecec] bg-white p-6 shadow-[0_24px_80px_rgba(8,42,42,0.08)] dark:border-white/10 dark:bg-[#0f1720]">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0E9F9F]">
        Apply now
      </p>
      <h2 className="mt-2 text-2xl font-black text-slate-900 dark:text-white">
        Submit your application
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
        Applications route into the hiring sheet and resume storage flow already
        connected to the site. Keep the summary concise and role-specific.
      </p>

      {status ? (
        <div
          className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
            status.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300"
              : "border-red-200 bg-red-50 text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300"
          }`}
          role="status"
        >
          {status.message}
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />

        <div className="grid gap-4 md:grid-cols-2">
          {[
            { label: "Full name", name: "fullName", type: "text", required: true },
            { label: "Email", name: "email", type: "email", required: true },
            { label: "Phone", name: "phone", type: "tel", required: false },
            { label: "Location", name: "address", type: "text", required: true },
            {
              label: "Years of experience",
              name: "yearsOfExperience",
              type: "text",
              required: true,
            },
            {
              label: "LinkedIn URL",
              name: "linkedinUrl",
              type: "url",
              required: false,
            },
            {
              label: "Portfolio URL",
              name: "portfolioUrl",
              type: "url",
              required: false,
            },
          ].map((field) => (
            <label key={field.name}>
              <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                {field.label}
                {field.required ? " *" : ""}
              </span>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                required={field.required}
                className="w-full rounded-2xl border border-[#cfe8e8] bg-[#f8fdfd] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0E9F9F] dark:border-white/10 dark:bg-[#111b26] dark:text-white"
              />
            </label>
          ))}

          <label className="md:col-span-2">
            <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Resume *
            </span>
            <input
              type="file"
              name="attachment"
              required
              accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
              onChange={handleChange}
              className="w-full rounded-2xl border border-[#cfe8e8] bg-[#f8fdfd] px-4 py-3 text-sm text-slate-700 file:mr-4 file:rounded-full file:border-0 file:bg-[#0E9F9F] file:px-4 file:py-2 file:font-semibold file:text-white dark:border-white/10 dark:bg-[#111b26] dark:text-slate-300"
            />
          </label>
        </div>

        <label>
          <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
            Why are you a fit for this role? *
          </span>
          <textarea
            name="summary"
            rows={5}
            value={formData.summary}
            onChange={handleChange}
            required
            className="w-full resize-none rounded-2xl border border-[#cfe8e8] bg-[#f8fdfd] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0E9F9F] dark:border-white/10 dark:bg-[#111b26] dark:text-white"
            placeholder="Summarize your fit, relevant delivery work, and strongest technologies."
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-[#0E9F9F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0b7c7c] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Submitting application..." : "Submit application"}
        </button>
      </form>
    </div>
  );
}
