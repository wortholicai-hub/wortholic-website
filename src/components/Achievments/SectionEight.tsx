import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const SectionEight: React.FC = () => {
  const testimonialData = {
    quote:
      "The Open Loyalty customer loyalty program software allows us a lot of flexibility in building these dynamics and delivering a strong experience for our consumers.",
    authorName: "Thomas Archer Bata",
    authorTitle: "ALDO Group",
    authorImage: "/images/thomas-archer-bata-dark.jpg",
  };

  const partnerLogos = [
    { name: "ALDO", src: "/images/aldo-logo-white.svg" },
    { name: "limango", src: "/images/limango-logo-white.svg" },
    { name: "Heineken", src: "/images/heineken-logo-white.svg" },
    { name: "us-logo", src: "/images/us-logo-white.svg" },
    { name: "Equiva", src: "/images/equiva-logo-white.svg" },
    { name: "JTI", src: "/images/jti-logo-white.svg" },
  ];

  return (
    <div
      className="
        flex justify-center items-center py-16 px-4 sm:px-6 lg:px-8
        bg-white dark:bg-black transition-colors duration-0
      "
    >
      <div
        className="
          max-w-6xl w-full rounded-3xl p-6 sm:p-10 lg:p-16 flex flex-col lg:flex-row shadow-2xl relative overflow-hidden
          bg-[#0E9F9F] dark:bg-[#0a7a7a] transition-colors duration-0
        "
      >
        {/* Background Pattern */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
          <svg width="300" height="300" viewBox="0 0 100 100" fill="none">
            <path
              d="M50 0L100 25V75L50 100L0 75V25L50 0Z"
              className="fill-purple-500"
            />
            <path
              d="M75 12.5L100 25V75L75 87.5L50 75L25 87.5L0 75V25L25 12.5L50 0L75 12.5Z"
              className="fill-purple-500"
            />
          </svg>
        </div>

        {/* LEFT SIDE */}
        <div className="lg:w-1/2 pr-0 lg:pr-12 text-white z-10 mb-10 lg:mb-0">
          <p className="text-sm uppercase font-medium mb-12 opacity-80">
            Trusted by great companies
          </p>

          <div className="grid grid-cols-3 gap-x-8 gap-y-12 mb-16 max-w-sm">
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-8 opacity-70 hover:opacity-100 transition-opacity duration-0"
              >
                <span className="text-white dark:text-white text-lg font-bold transition-colors duration-0">
                  {logo.name.toUpperCase()}
                </span>
              </div>
            ))}
          </div>

          {/* Stars */}
          <div className="flex justify-center sm:justify-start space-x-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Quote */}
          <p className="text-3xl font-semibold leading-normal mb-8 max-w-md">
            &quot;{testimonialData.quote}&quot;
          </p>

          {/* Author */}
          <div className="flex items-center space-x-3">
            <Image
              src={testimonialData.authorImage}
              alt={testimonialData.authorName}
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-md font-semibold text-white dark:text-white">
                {testimonialData.authorName}
              </p>
              <p className="text-sm opacity-70">
                {testimonialData.authorTitle}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div
          className="
            lg:w-1/2 rounded-xl p-6 sm:p-10 z-10
            bg-white dark:bg-[#111111] 
            text-black dark:text-white
            transition-colors duration-0
          "
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  First name*
                </label>
                <input
                  type="text"
                  placeholder="e.g. Joe"
                  className="
                    mt-1 block w-full p-2 border-b
                    border-gray-300 dark:border-gray-600
                    bg-transparent text-black dark:text-white
                    placeholder-gray-500 dark:placeholder-gray-400
                    focus:border-[#0E9F9F] focus:ring-0
                    transition-colors duration-0
                  "
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Last name*
                </label>
                <input
                  type="text"
                  placeholder="e.g. Smith"
                  className="
                    mt-1 block w-full p-2 border-b
                    border-gray-300 dark:border-gray-600
                    bg-transparent text-black dark:text-white
                    placeholder-gray-500 dark:placeholder-gray-400
                    focus:border-purple-600 focus:ring-0
                    transition-colors duration-0
                  "
                  required
                />
              </div>

              {/* Business Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Business email*
                </label>
                <input
                  type="email"
                  placeholder="e.g. joe@company.com"
                  className="
                    mt-1 block w-full p-2 border-b
                    border-gray-300 dark:border-gray-600
                    bg-transparent text-black dark:text-white
                    placeholder-gray-500 dark:placeholder-gray-400
                    focus:border-purple-600 focus:ring-0
                    transition-colors duration-0
                  "
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +48 570 999 200"
                  className="
                    mt-1 block w-full p-2 border-b
                    border-gray-300 dark:border-gray-600
                    bg-transparent text-black dark:text-white
                    placeholder-gray-500 dark:placeholder-gray-400
                    focus:border-purple-600 focus:ring-0
                    transition-colors duration-0
                  "
                />
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Details about your project*
              </label>
              <textarea
                rows={3}
                placeholder="What are you working on?"
                className="
                  mt-1 block w-full p-3 rounded-md shadow-sm
                  border border-gray-300 dark:border-gray-600
                  bg-white dark:bg-[#1a1a1a]
                  text-black dark:text-white
                  placeholder-gray-500 dark:placeholder-gray-400
                  focus:border-[#0E9F9F] focus:ring-[#0E9F9F]
                  transition-colors duration-0
                "
                required
              />
            </div>

            {/* Hear about us */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                How did you hear about us?*
              </label>
              <textarea
                rows={2}
                placeholder="How did you hear about us?"
                className="
                  mt-1 block w-full p-3 rounded-md shadow-sm
                  border border-gray-300 dark:border-gray-600
                  bg-white dark:bg-[#1a1a1a]
                  text-black dark:text-white
                  placeholder-gray-500 dark:placeholder-gray-400
                  focus:border-purple-600 focus:ring-purple-600
                  transition-colors duration-0
                "
                required
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start">
              <input
                type="checkbox"
                className="
                  h-4 w-4 rounded text-[#0E9F9F]
                  border-gray-300 dark:border-gray-600
                  bg-white dark:bg-[#1a1a1a]
                  focus:ring-[#0E9F9F]
                  transition-colors duration-0
                "
              />
              <div className="ml-3 text-sm">
                <p className="font-medium text-gray-700 dark:text-gray-200">
                  I want to be contacted*
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                  I agree that Open Loyalty Sp. z o.o. may process my data…
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="
                w-full py-3 px-4 rounded-lg text-lg font-medium
                text-white bg-[#0E9F9F] hover:bg-[#0a7a7a]
                focus:ring-2 focus:ring-[#0E9F9F]
                transition-colors duration-0
              "
            >
              Let&apos;s talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
