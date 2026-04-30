"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useEffect, useState } from "react";

type InternshipApplicationFormProps = {
  internshipTitle: string;
};

type FormStatus = {
  type: "success" | "error";
  message: string;
};

const InternshipApplicationForm = ({
  internshipTitle,
}: InternshipApplicationFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    internship: internshipTitle,
    level: "",
    skills: "",
    company: "",
  });
  const [attachment, setAttachment] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus | null>(null);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, internship: internshipTitle }));
  }, [internshipTitle]);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, files } = event.target as HTMLInputElement;
    if (name === "attachment" && files?.[0]) {
      setAttachment(files[0]);
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      if (!attachment) {
        setStatus({
          type: "error",
          message: "Please attach your CV or relevant document.",
        });
        setIsSubmitting(false);
        return;
      }

      const payload = new FormData();
      payload.append("fullName", formData.fullName);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("address", formData.address);
      payload.append("internship", formData.internship);
      payload.append("level", formData.level);
      payload.append("skills", formData.skills);
      payload.append("company", formData.company);
      payload.append("attachment", attachment);

      const response = await fetch("/api/internships", {
        method: "POST",
        body: payload,
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || "Failed to submit application.");
      }

      setStatus({
        type: "success",
        message: "Application submitted successfully. We will contact you soon.",
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        internship: internshipTitle,
        level: "",
        skills: "",
        company: "",
      });
      setAttachment(null);

      // Reset file input
      const fileInput = document.querySelector('input[name="attachment"]') as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Submission failed. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show success screen after submission
  if (status?.type === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-8 shadow-lg dark:border-green-500/30 dark:from-green-900/20 dark:to-emerald-900/20">
        <div className="text-center">
          {/* Success Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-500/20">
            <svg
              className="h-10 w-10 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h3 className="mb-3 text-2xl font-bold text-green-800 dark:text-green-300">
            Application Submitted Successfully!
          </h3>

          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Thank you for applying to the <strong>{internshipTitle}</strong> position at Wortholic.
          </p>

          {/* Confirmation Details */}
          <div className="mb-6 rounded-lg bg-white/80 p-5 text-left dark:bg-black/30">
            <h4 className="mb-3 font-semibold text-gray-800 dark:text-white">
              What happens next?
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-green-500">✓</span>
                <span>Your CV/Resume has been received and saved securely.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-green-500">✓</span>
                <span>Our team will review your application within 3-5 business days.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-green-500">✓</span>
                <span>If shortlisted, we will contact you via email for the next steps.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-green-500">✓</span>
                <span>Keep an eye on your inbox (and spam folder) for updates.</span>
              </li>
            </ul>
          </div>

          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Have questions? Contact us at{" "}
            <a
              href="mailto:wortholicai@gmail.com"
              className="font-medium text-[#0E9F9F] hover:underline"
            >
              wortholicai@gmail.com
            </a>
          </p>

          <button
            onClick={() => setStatus(null)}
            className="rounded-md bg-[#0E9F9F] px-6 py-2 text-sm font-semibold text-white shadow-md transition duration-200 hover:bg-[#0b7c7c]"
          >
            Apply for Another Position
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white/90 p-6 shadow-three dark:border-gray-700 dark:bg-[#111827]">
      <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
        Apply for this Internship
      </h3>
      <p className="mb-6 text-sm text-gray-600 dark:text-gray-300">
        Submit your details and we will reach out with next steps.
      </p>

      {status?.type === "error" && (
        <div
          className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300"
          role="status"
        >
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-[#0E9F9F] focus:outline-none dark:border-gray-700 dark:bg-black dark:text-white"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-[#0E9F9F] focus:outline-none dark:border-gray-700 dark:bg-black dark:text-white"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-[#0E9F9F] focus:outline-none dark:border-gray-700 dark:bg-black dark:text-white"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
            Address *
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-[#0E9F9F] focus:outline-none dark:border-gray-700 dark:bg-black dark:text-white"
            placeholder="City, State, Country"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
            Selected Internship
          </label>
          <input
            type="text"
            name="internship"
            value={formData.internship}
            readOnly
            className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700 dark:border-gray-700 dark:bg-[#0b0f14] dark:text-gray-200"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
            CV / Resume *
          </label>
          <input
            type="file"
            name="attachment"
            required
            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 file:mr-3 file:rounded-md file:border-0 file:bg-[#0E9F9F] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[#0b7c7c] dark:border-gray-700 dark:bg-black dark:text-gray-200"
          />
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Accepted formats: PDF, DOC, DOCX, JPG, PNG (max 10MB).
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
            Skill / Expertise Level *
          </label>
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-[#0E9F9F] focus:outline-none dark:border-gray-700 dark:bg-black dark:text-white"
          >
            <option value="">Select level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
            Tell us a bit about yourself and your achievements *
          </label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
            rows={4}
            className="w-full resize-none rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-[#0E9F9F] focus:outline-none dark:border-gray-700 dark:bg-black dark:text-white"
            placeholder="Share your background, key projects, and what makes you a great fit..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-[#0E9F9F] px-4 py-2 text-sm font-semibold text-white shadow-md transition duration-200 hover:bg-[#0b7c7c] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default InternshipApplicationForm;
