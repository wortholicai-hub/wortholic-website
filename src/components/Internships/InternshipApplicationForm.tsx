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
      payload.append("attachment", attachment);

      const response = await fetch("/api/internships", {
        method: "POST",
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Failed to submit application.");
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
      });
      setAttachment(null);
    } catch (error) {
      setStatus({
        type: "error",
        message: "Submission failed. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white/90 p-6 shadow-three dark:border-gray-700 dark:bg-[#111827]">
      <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
        Apply for this Internship
      </h3>
      <p className="mb-6 text-sm text-gray-600 dark:text-gray-300">
        Submit your details and we will reach out with next steps.
      </p>

      {status && (
        <div
          className={`mb-4 rounded-md border px-4 py-3 text-sm ${
            status.type === "success"
              ? "border-green-200 bg-green-50 text-green-800 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-300"
              : "border-red-200 bg-red-50 text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300"
          }`}
          role="status"
        >
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
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
            Attachment (CV/Resume) *
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
            Relevant Skills or Experience *
          </label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
            rows={4}
            className="w-full resize-none rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-[#0E9F9F] focus:outline-none dark:border-gray-700 dark:bg-black dark:text-white"
            placeholder="List relevant skills, tools, or project experience"
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
