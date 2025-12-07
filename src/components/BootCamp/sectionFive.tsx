"use client";
import React, { useEffect, useState, useRef } from "react";
import { ShieldCheck, Globe, Search, FileText } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Company Network",
    description:
      "Connect with partner companies and organizations that support our free learning initiative and help students get visibility.",
    borderEffect: "top-left",
  },
  {
    icon: Globe,
    title: "Alumni Community",
    description:
      "Join a friendly, helpful community of graduates who collaborate, share knowledge, and guide new learners — all for free.",
    borderEffect: "bottom-right",
  },
  {
    icon: Search,
    title: "Access to Project Opportunities",
    description:
      "Explore our project board with free access to curated opportunities where you can apply your skills directly.",
    borderEffect: "bottom-left",
  },
  {
    icon: FileText,
    title: "Free Technical Mentorship",
    description:
      "Receive one-on-one guidance from volunteer industry mentors who help you master concepts and grow your skills — at no cost.",
    borderEffect: "bottom-right",
  },
];

const LogoSpiral = () => (
  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      <path d="M9 12a3 3 0 1 1 3 3" />
    </svg>
    <span className="font-bold text-lg tracking-tight text-gray-700 dark:text-gray-300">
      Logoipsum
    </span>
  </div>
);

const LogoBars = () => (
  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v18" />
      <path d="M16 8v8" />
      <path d="M8 8v8" />
      <path d="M20 10v4" />
      <path d="M4 10v4" />
    </svg>
    <span className="font-bold text-lg tracking-widest uppercase text-gray-700 dark:text-gray-300">
      LOGOIPSUM
    </span>
  </div>
);

const LogoTarget = () => (
  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
    <span className="font-bold text-lg tracking-tight text-gray-700 dark:text-gray-300">
      logoipsum
    </span>
  </div>
);

const LogoMolecule = () => (
  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
    <span className="font-bold text-lg tracking-tight text-gray-700 dark:text-gray-300">
      logoipsum
    </span>
  </div>
);

const LogoWheat = () => (
  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22v-8" />
      <path d="M5 8a7 7 0 1 1 14 0" />
      <path d="M8 11l4 3" />
      <path d="M16 11l-4 3" />
      <path d="M12 5v9" />
    </svg>
    <span className="font-bold text-lg tracking-widest uppercase text-gray-700 dark:text-gray-300">
      LOGOIPSUM
    </span>
  </div>
);

const logos = [LogoSpiral, LogoBars, LogoTarget, LogoMolecule, LogoWheat];

const CareerSupportSection = () => {
  const leftSideRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!leftSideRef.current) return;

      const rect = leftSideRef.current.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Run once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-white dark:bg-black min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 overflow-hidden font-sans transition-none">
      {/* Background Ambient Light */}
      <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none opacity-60"
        style={{ backgroundColor: "#0E9F9F", filter: "blur(120px)" }}
      />

      <div className="max-w-7xl w-full mx-auto z-10 flex flex-col">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start mb-24">
          {/* Left Side */}
          <div
            ref={leftSideRef}
            className={`lg:w-[35%] flex flex-col space-y-8 pt-8 sticky top-10
              transition-transform duration-700 ease-out
              ${isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
              }
            `}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="space-y-4">
              <span className="text-[#0E9F9F] dark:text-[#0E9F9F] text-sm font-medium tracking-wide">
                Learning Support
              </span>
              <h2 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white">
                Recode Bootcamp <br />
                Learning Support
              </h2>
            </div>

            <div>
              <button
                className="flex items-center justify-center rounded-[8px] border-1 border-[#0E9F9F] bg-[#0E9F9F] px-4 py-2 font-medium text-white shadow-md transition duration-300 hover:bg-white hover:text-[#0E9F9F] dark:hover:bg-black group"
              >
                <span className="relative z-10 text-sm font-medium">
                  Get Learning Support
                </span>
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl p-8
                transition-none hover:border-[#0E9F9F] overflow-hidden min-h-[260px] flex flex-col"
              >
                {/* Gradient borders */}
                {feature.borderEffect === "top-left" && (
                  <>
                    <div
                      className="absolute top-0 left-0 w-32 h-[1px] opacity-80"
                      style={{
                        background:
                          "linear-gradient(to right, #0E9F9F, transparent)",
                      }}
                    />
                    <div
                      className="absolute top-0 left-0 w-[1px] h-32 opacity-80"
                      style={{
                        background:
                          "linear-gradient(to bottom, #0E9F9F, transparent)",
                      }}
                    />
                  </>
                )}
                {feature.borderEffect === "bottom-right" && (
                  <>
                    <div
                      className="absolute bottom-0 right-0 w-32 h-[1px] opacity-80"
                      style={{
                        background:
                          "linear-gradient(to left, #0E9F9F, transparent)",
                      }}
                    />
                    <div
                      className="absolute bottom-0 right-0 w-[1px] h-32 opacity-80"
                      style={{
                        background:
                          "linear-gradient(to top, #0E9F9F, transparent)",
                      }}
                    />
                  </>
                )}
                {feature.borderEffect === "bottom-left" && (
                  <>
                    <div
                      className="absolute bottom-0 left-0 w-32 h-[1px] opacity-80"
                      style={{
                        background:
                          "linear-gradient(to right, #0E9F9F, transparent)",
                      }}
                    />
                    <div
                      className="absolute bottom-0 left-0 w-[1px] h-32 opacity-80"
                      style={{
                        background:
                          "linear-gradient(to top, #0E9F9F, transparent)",
                      }}
                    />
                  </>
                )}

                <div className="mb-6">
                  <feature.icon
                    className="w-9 h-9 stroke-[1.5]"
                    style={{ color: "#0E9F9F" }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Strip */}
        <div className="w-full flex flex-wrap justify-between items-center gap-8 border-t border-gray-200 dark:border-gray-700 pt-4 opacity-70 hover:opacity-100 transition-opacity duration-500">
          {logos.map((LogoComponent, idx) => (
            <LogoComponent key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSupportSection;
