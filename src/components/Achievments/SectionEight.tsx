import React from "react";
import Image from "next/image";
import { Star } from "lucide-react"; // Using Lucide for the rating stars

const SectionEight: React.FC = () => {
  // Static data for the testimonial and logos
  const testimonialData = {
    quote:
      "The Open Loyalty customer loyalty program software allows us a lot of flexibility in building these dynamics and delivering a strong experience for our consumers.",
    authorName: "Thomas Archer Bata",
    authorTitle: "ALDO Group",
    authorImage: "/images/thomas-archer-bata-dark.jpg", // Adjust path
  };

  // Paths for partner logos (assuming they are SVGs or PNGs in your public folder)
  const partnerLogos = [
    { name: "ALDO", src: "/images/aldo-logo-white.svg" },
    { name: "limango", src: "/images/limango-logo-white.svg" },
    { name: "Heineken", src: "/images/heineken-logo-white.svg" },
    { name: "us-logo", src: "/images/us-logo-white.svg" }, // Placeholder for the shield logo
    { name: "Equiva", src: "/images/equiva-logo-white.svg" },
    { name: "JTI", src: "/images/jti-logo-white.svg" },
  ];

  return (
    <div className="flex justify-center items-center py-16 px-4 sm:px-6 lg:px-8">
      {/* --- Main Container (Dark background with rounded corners) --- */}
      <div className="max-w-6xl w-full bg-[#110526] rounded-3xl p-6 sm:p-10 lg:p-16 flex flex-col lg:flex-row shadow-2xl relative overflow-hidden">
        {/* --- Background Hex Pattern (Visual detail from the image) --- */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
          {/* This is a simple representation of the hexagon pattern */}
          <svg
            width="300"
            height="300"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M50 0L100 25V75L50 100L0 75V25L50 0ZM50 10L91.34 32.5L91.34 67.5L50 90L8.66 67.5L8.66 32.5L50 10Z"
              fill="#7C3AED"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M75 12.5L100 25V75L75 87.5L50 75L25 87.5L0 75V25L25 12.5L50 0L75 12.5ZM50 10L71.65 21.25V78.75L50 90L28.35 78.75V21.25L50 10Z"
              fill="#7C3AED"
            />
          </svg>
        </div>

        {/* --- Left Column: Testimonial and Logos --- */}
        <div className="lg:w-1/2 pr-0 lg:pr-12 text-white z-10 mb-10 lg:mb-0">
          <p className="text-sm uppercase font-medium mb-12 opacity-80">
            Trusted by great companies
          </p>

          {/* Logos Grid */}
          <div className="grid grid-cols-3 gap-x-8 gap-y-12 mb-16 max-w-sm">
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-8 opacity-70 hover:opacity-100 transition-opacity"
              >
                {/* Note: You must provide actual paths for these images */}
                <span className="text-white text-lg font-bold">
                  {logo.name.toUpperCase()}
                </span>
                {/* If using Image component, uncomment and adjust width/height: */}
                {/* <Image
                  src={logo.src}
                  alt={logo.name}
                  width={80} 
                  height={24}
                  className="object-contain"
                />
                */}
              </div>
            ))}
          </div>

          {/* Rating Stars */}
          <div className="flex justify-center sm:justify-start space-x-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Quote */}
          <p className="text-3xl font-semibold leading-normal mb-8 max-w-md mx-auto sm:mx-0">
            &quot;{testimonialData.quote}&quot;
          </p>

          {/* Author */}
          <div className="flex items-center space-x-3 justify-center sm:justify-start">
            {/* Author Image */}
            <Image
              src={testimonialData.authorImage}
              alt={testimonialData.authorName}
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-md font-semibold">
                {testimonialData.authorName}
              </p>
              <p className="text-sm opacity-70">
                {testimonialData.authorTitle}
              </p>
            </div>
          </div>
        </div>

        {/* --- Right Column: Contact Form --- */}
        <div className="lg:w-1/2 bg-white rounded-xl p-6 sm:p-10 z-10">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name*
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="e.g. Joe"
                  className="mt-1 block w-full border-b border-gray-300 focus:border-purple-600 focus:ring-0 p-2"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name*
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="e.g. Smith"
                  className="mt-1 block w-full border-b border-gray-300 focus:border-purple-600 focus:ring-0 p-2"
                  required
                />
              </div>

              {/* Business Email */}
              <div>
                <label
                  htmlFor="business-email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business email*
                </label>
                <input
                  type="email"
                  name="business-email"
                  id="business-email"
                  placeholder="e.g. joe@company.com"
                  className="mt-1 block w-full border-b border-gray-300 focus:border-purple-600 focus:ring-0 p-2"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  placeholder="e.g. +48 570 999 200"
                  className="mt-1 block w-full border-b border-gray-300 focus:border-purple-600 focus:ring-0 p-2"
                />
              </div>
            </div>

            {/* Details about your project */}
            <div>
              <label
                htmlFor="project-details"
                className="block text-sm font-medium text-gray-700"
              >
                Details about your project*
              </label>
              <textarea
                id="project-details"
                name="project-details"
                rows={3}
                placeholder="What are you working on?"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-purple-600 focus:ring-purple-600 p-3"
                required
              ></textarea>
            </div>

            {/* How did you hear about us? */}
            <div>
              <label
                htmlFor="hear-about-us"
                className="block text-sm font-medium text-gray-700"
              >
                How did you hear about us?*
              </label>
              <textarea
                id="hear-about-us"
                name="hear-about-us"
                rows={2}
                placeholder="How did you hear about us?"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-purple-600 focus:ring-purple-600 p-3"
                required
              ></textarea>
            </div>

            {/* Checkbox and Privacy Policy */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="i-want-to-be-contacted"
                  name="i-want-to-be-contacted"
                  type="checkbox"
                  className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="i-want-to-be-contacted"
                  className="font-medium text-gray-700"
                >
                  I want to be contacted*
                </label>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                  I agree that Open Loyalty Sp. z o.o. may collect and process
                  my data to answer my inquiries and provide me with product and
                  service information. For details see our{" "}
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-700 underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
              >
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
