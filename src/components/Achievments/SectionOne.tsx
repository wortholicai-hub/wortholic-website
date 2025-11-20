"use client";
import React from "react";

const SectionOne: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-6 px-6 bg-white dark:bg-[#0b0f14]">
      {/* Title */}
      {/* <h4 className="text-sm font-semibold text-[#0E9F9F] mb-4">
        Achievements
      </h4> */}

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight max-w-4xl">
        Engage customers with fun and rewarding achievements
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-3xl">
        Configure campaigns based on achievements, challenges or milestones and
        reward customers for completing them
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <button
          className="bg-[#0E9F9F] text-white px-5 py-2 rounded-full text-base font-medium 
transition-all duration-300 border-1 border-[#0E9F9F]
hover:bg-white hover:text-[#0E9F9F]"
        >
          Book a demo
        </button>

        <button className="border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 px-5 py-2 rounded-full text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
          Get product sheet
        </button>
      </div>
    </section>
  );
};

export default SectionOne;
