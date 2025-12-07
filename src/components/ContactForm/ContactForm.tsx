"use client";
import React, { useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiPaperclip,
  FiMessageSquare,
  FiX,
} from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDetails: "",
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

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", phone: "", projectDetails: "" });
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (error) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div id="contact-form" className="mb-3 flex h-auto flex-col md:flex-row">
        {/* Left Banner Section */}
        <div className="relative flex w-full items-center border justify-center bg-gray-50 p-8 md:flex md:w-1/2 dark:bg-gray-800 overflow-hidden">
          {/* Background Logo */}
          <div
            className="absolute bg-contain bg-no-repeat opacity-8"
            style={{
              backgroundImage: "url('/images/logo/Wortholic.png')",
              width: "660px",
              height: "550px",
              top: "70px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 0,
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <FiMessageSquare className="mb-6 h-16 w-16 text-black md:h-20 md:w-20 dark:text-white" />
            <p className="text-lg font-normal text-black md:text-xl dark:text-gray-300">
              Talk To Us
            </p>
            <h1 className="mt-2 text-4xl leading-tight font-extrabold text-black md:text-6xl dark:text-white">
              About Your <br /> Project
            </h1>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="flex w-full items-center justify-center border border-gray-300 bg-white p-6 md:w-1/2 md:p-8 dark:border-0 dark:bg-gray-900">
          <div className="w-full max-w-lg">
            <h2 className="mb-6 text-sm text-center leading-relaxed font-normal text-[#333] md:mb-8 md:text-base dark:text-gray-300">
              We are here to build your software project and help you succeed
              &amp; grow your business.
            </h2>

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div className="relative">
                <FiUser className="absolute top-1/2 left-3 -translate-y-1/2 text-black dark:text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name*"
                  required
                  className="w-full rounded-md border border-black bg-transparent p-3 pl-10 text-base text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:outline-none dark:border-gray-500 dark:text-white"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <FiMail className="absolute top-1/2 left-3 -translate-y-1/2 text-black dark:text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email*"
                  required
                  className="w-full rounded-md border border-black bg-transparent p-3 pl-10 text-base text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:outline-none dark:border-gray-500 dark:text-white"
                />
              </div>

              {/* Phone Input */}
              <div className="relative">
                <FiPhone className="absolute top-1/2 left-3 -translate-y-1/2 text-black dark:text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  className="w-full rounded-md border border-black bg-transparent p-3 pl-10 text-base text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:outline-none dark:border-gray-500 dark:text-white"
                />
              </div>

              {/* File Upload */}
              <div className="relative w-full">
                <FiPaperclip className="absolute top-1/2 left-3 -translate-y-1/2 text-black dark:text-gray-400" />
                <label
                  htmlFor="file-upload"
                  className="flex w-full cursor-pointer items-center rounded-md border border-black bg-transparent p-3 pl-10 text-base text-black focus-within:ring-2 focus-within:ring-black dark:border-gray-500 dark:text-white"
                >
                  Choose file
                </label>
                <input id="file-upload" type="file" className="hidden" />
              </div>

              {/* Textarea */}
              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleInputChange}
                placeholder="Write something about your project in detail."
                rows={4}
                className="w-full resize-none rounded-md border border-black bg-transparent p-3 text-base text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:outline-none dark:border-gray-500 dark:text-white"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="mt-4 w-full flex items-center justify-center rounded-[8px] border-1 border-[#0E9F9F] bg-[#0E9F9F] px-4 py-2 font-medium text-white shadow-md transition duration-300 hover:bg-white hover:text-[#0E9F9F] disabled:opacity-50 disabled:cursor-not-allowed dark:hover:bg-black"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
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
