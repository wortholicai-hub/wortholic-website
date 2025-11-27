import React from "react";
import Image from "next/image";

const OneSection: React.FC = () => {
  return (
    <div className="mt-5 relative w-full h-[600px]">
      {/* --- Background Image --- */}
      <Image
        src="/images/careers/bg-1.png"
        alt="Diverse group of smiling people in an office environment"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="z-0"
      />

      {/* --- Content Overlay --- */}
      <div className="absolute inset-0 flex top-60 items-center justify-center z-10">
        <div
          className="w-11/12 max-w-[1100px] backdrop-blur-xl rounded-xl p-3 sm:p-4 lg:p-10 text-left transition-colors duration-0
          bg-white/40 dark:bg-black/40 text-black dark:text-white"
          style={{ height: "fit-content" }}
        >
          <p
            className="text-xs sm:text-sm font-semibold uppercase tracking-widest opacity-80 mb-1.5
          text-black dark:text-white"
          >
            CAREERS
          </p>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug mb-3">
            Where People Drive Innovation
          </h1>

          <p className="text-base sm:text-lg font-normal opacity-90 mb-4 max-w-2xl leading-tight">
            We're more than a workplace we're a people-first community that
            grows stronger together.
          </p>

          <button
            className="inline-flex justify-center py-2 px-6 border border-transparent rounded-lg shadow-lg text-base font-bold text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-0"
            style={{ backgroundColor: "#20C9AD" }}
          >
            Apply at Wortholic
          </button>
        </div>
      </div>

      {/* --- "Let's Talk, Business" Tab (FIXED POSITION) --- */}
      <div
        className="fixed right-0 top-50 -translate-y-1/2 -rotate-90 origin-bottom-right transform px-4 py-2 text-white text-sm font-semibold rounded-t-md cursor-pointer hover:bg-teal-600 transition-colors duration-0 z-20"
        style={{ backgroundColor: "#20C9AD" }}
      >
        Let&apos;s Talk, Business
      </div>
    </div>
  );
};

export default OneSection;
