import React from "react";
import Image from "next/image";

const OneSection: React.FC = () => {
  return (
    <div className="mt-5 relative w-full h-[600px]">
      {/* --- Background Image --- */}
      <Image
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
        alt="Modern tech office with people working"
        fill
        quality={100}
        priority
        className="z-0 object-cover"
      />

      {/* --- Content Overlay --- */}
      <div className="absolute inset-0 flex top-60 items-center justify-center z-10">
        <div
          className="w-11/12 max-w-[1100px] backdrop-blur-xl rounded-xl p-3 sm:p-4 lg:p-10 text-left transition-colors duration-0
          bg-white/60 dark:bg-black/60 text-black dark:text-white border border-white/20"
          style={{ height: "fit-content" }}
        >
          <p
            className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-1.5 text-[#0E9F9F]"
          >
            CAREERS AT WORTHOLIC
          </p>

          <h1 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white">
            Building the Future with <span className="text-[#0E9F9F]">Artificial Intelligence</span>
          </h1>

          <p className="text-base sm:text-lg font-normal opacity-90 mb-6 max-w-2xl leading-relaxed">
            Join a team of visionaries, engineers, and creators dedicated to pushing the boundaries of what's possible with AI and software.
          </p>

          <button
            className="flex items-center justify-center rounded-[8px] border-1 border-[#0E9F9F] bg-[#0E9F9F] px-4 py-2 font-medium text-white shadow-md transition duration-300 hover:bg-white hover:text-[#0E9F9F] dark:hover:bg-black"
          >
            View Open Positions
          </button>
        </div>
      </div>

      {/* --- "Let's Talk, Business" Tab (FIXED POSITION) --- */}
      <div
        className="fixed right-0 top-50 -translate-y-1/2 -rotate-90 origin-bottom-right transform px-4 py-2 text-white text-sm font-semibold rounded-t-md cursor-pointer hover:bg-[#0b7f7f] transition-colors duration-300 z-20"
        style={{ backgroundColor: "#0E9F9F" }}
      >
        Let&apos;s Talk, Business
      </div>
    </div>
  );
};

export default OneSection;
