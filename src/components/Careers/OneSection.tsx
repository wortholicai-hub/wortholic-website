import React from "react";
import Image from "next/image";
import Link from "next/link";

const OneSection: React.FC = () => {
  return (
    <div className="mt-20 relative w-full h-[600px]">
      {/* --- Background Image --- */}
      <Image
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
        alt="Modern tech office with people working"
        fill
        quality={100}
        priority
        className="z-0 object-cover"
      />

      {/* --- Dark Overlay for better text visibility --- */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* --- Content Overlay --- */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div
          className="w-full max-w-[1100px] backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-12 text-left
          bg-white/90 dark:bg-black/80 text-black dark:text-white border border-gray-200 dark:border-gray-700 shadow-2xl"
        >
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 text-[#0E9F9F]">
            CAREERS AT WORTHOLIC
          </p>

          <h1 className="mb-4 text-3xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
            Building the Future with <span className="text-[#0E9F9F]">Artificial Intelligence</span>
          </h1>

          <p className="text-base sm:text-lg font-normal text-gray-700 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Join a team of visionaries, engineers, and creators dedicated to pushing the boundaries of what&apos;s possible with AI and software.
          </p>

          <Link
            href="#open-positions"
            className="inline-flex items-center justify-center rounded-lg bg-[#0E9F9F] px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:bg-[#0b7c7c] hover:shadow-xl"
          >
            View Open Positions
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* --- "Let's Talk, Business" Tab (FIXED POSITION) --- */}
      <div
        className="fixed right-0 top-1/2 -translate-y-1/2 -rotate-90 origin-bottom-right transform px-4 py-2 text-white text-sm font-semibold rounded-t-md cursor-pointer hover:bg-[#0b7f7f] transition-colors duration-300 z-20"
        style={{ backgroundColor: "#0E9F9F" }}
      >
        Let&apos;s Talk, Business
      </div>
    </div>
  );
};

export default OneSection;
