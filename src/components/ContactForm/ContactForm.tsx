"use client";
import React, { useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMessageSquare,
  FiX,
} from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDetails: "",
    company: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => null);

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectDetails: "",
          company: "",
        });
      } else {
        setError(result?.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 pb-20">
        <div id="contact-form" className="mb-3 flex h-auto flex-col md:flex-row rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100 dark:border-gray-800">
          {/* Left Banner Section */}
          <div className="relative flex w-full flex-col items-center justify-center bg-gradient-to-br from-[#0E9F9F] to-[#086363] p-10 md:w-5/12 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md shadow-inner border border-white/20 transform rotate-3">
                <FiMessageSquare className="h-10 w-10 text-white transform -rotate-3" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#eefdfa] mb-3">
                Talk To Us
              </p>
              <h1 className="mt-2 text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
                About Your <br /> Project
              </h1>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="flex w-full items-center justify-center bg-white p-8 md:w-7/12 lg:p-14 dark:bg-[#0b1120]">
            <div className="w-full max-w-lg">
              <h2 className="mb-8 text-center text-base leading-relaxed text-gray-600 dark:text-gray-300">
                We are here to build your software project and help you succeed
                &amp; grow your business.
              </h2>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r-md">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />
                
                {/* Name Input */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <FiUser className="text-gray-400 group-focus-within:text-[#0E9F9F] transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name*"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 p-4 pl-12 text-base text-gray-800 placeholder-gray-400 transition-all focus:border-[#0E9F9F] focus:bg-white focus:ring-2 focus:ring-[#0E9F9F]/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800/50 dark:text-white dark:focus:bg-gray-800"
                  />
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <FiMail className="text-gray-400 group-focus-within:text-[#0E9F9F] transition-colors" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email*"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 p-4 pl-12 text-base text-gray-800 placeholder-gray-400 transition-all focus:border-[#0E9F9F] focus:bg-white focus:ring-2 focus:ring-[#0E9F9F]/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800/50 dark:text-white dark:focus:bg-gray-800"
                  />
                </div>

                {/* Phone Input */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <FiPhone className="text-gray-400 group-focus-within:text-[#0E9F9F] transition-colors" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 p-4 pl-12 text-base text-gray-800 placeholder-gray-400 transition-all focus:border-[#0E9F9F] focus:bg-white focus:ring-2 focus:ring-[#0E9F9F]/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800/50 dark:text-white dark:focus:bg-gray-800"
                  />
                </div>

                {/* Textarea */}
                <div className="relative group">
                  <textarea
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    placeholder="Write something about your project in detail."
                    rows={4}
                    required
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/50 p-4 text-base text-gray-800 placeholder-gray-400 transition-all focus:border-[#0E9F9F] focus:bg-white focus:ring-2 focus:ring-[#0E9F9F]/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800/50 dark:text-white dark:focus:bg-gray-800"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-6 w-full flex items-center justify-center rounded-xl bg-[#0E9F9F] px-8 py-4 font-semibold text-white shadow-lg shadow-[#0E9F9F]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0c8a8a] hover:shadow-[#0E9F9F]/40 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4 relative dark:bg-gray-800">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <FiX size={20} />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 dark:text-white">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-600 mb-6 dark:text-gray-300">
                Thank you for contacting us. We&apos;ve received your message
                and will get back to you soon.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="flex items-center justify-center rounded-[8px] border-1 border-[#0E9F9F] bg-[#0E9F9F] px-6 py-2 font-medium text-white shadow-md transition duration-300 hover:bg-white hover:text-[#0E9F9F] dark:hover:bg-black"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
