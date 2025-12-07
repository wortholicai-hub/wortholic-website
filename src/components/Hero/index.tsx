"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const features = [
    {
      src: "/images/hero/home-hero-feature-1.png",
      text: "Custom ERP & CRM Development",
    },
    {
      src: "/images/hero/home-hero-feature-2.svg",
      text: "AI-Powered SaaS Applications",
    },
    {
      src: "/images/hero/home-hero-feature-3.png",
      text: "API-First & Microservices Architecture",
    },
    {
      src: "/images/hero/home-hero-feature-4.svg",
      text: "MVP Development for Startups",
    },
    {
      src: "/images/hero/home-hero-feature-5.svg",
      text: "Generative AI Integration",
    },
    {
      src: "/images/hero/home-hero-feature-6.svg",
      text: "Legacy System Maintenance & Modernization",
    },
  ];

  // Smooth scroll handler
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative z-10 flex items-center overflow-hidden bg-white mt-10 pt-[80px] pb-2 md:pt-[90px] xl:pt-[100px] 2xl:pt-[110px] dark:bg-black"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-contain bg-no-repeat"
        style={{
          backgroundImage: "url('/images/logo/Wortholic.png')",
          opacity: 0.14,
          width: "660px",
          height: "550px",
          top: "20px",
          left: "756px",
          zIndex: -1,
        }}
      ></div>

      <div className="relative z-10 container mx-auto flex h-full items-center px-4">
        <div className="mx-auto w-full max-w-full text-center">
          {/* Heading */}
          <h1 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white">
            <span className="text-[#0E9F9F]">AI-Powered Automation &</span>{" "}
            Business<span className="block">Software Solutions</span>
          </h1>

          {/* Logos + Paragraph + Buttons */}
          <div className="relative mb-4 flex items-center justify-center gap-2 xl:mb-8">
            {/* Left Logos */}
            <div className="mr-10 hidden animate-[float_4s_ease-in-out_infinite] flex-col items-center gap-8 md:flex xl:gap-12">
              <div className="flex h-[35px] w-[160px] items-center justify-center overflow-hidden rounded-[60px] border border-gray-300 bg-white/10 pt-1 pr-3 shadow-md backdrop-blur-md dark:border-gray-700 dark:bg-white/5">
                <Image
                  src="/images/hero/3.png"
                  alt="Consistency"
                  width={140}
                  height={25}
                  priority
                  className="scale-150 bg-transparent object-contain dark:brightness-200 dark:invert"
                />
              </div>

              <div className="mr-20 flex h-[35px] items-center justify-center overflow-hidden rounded-[60px] border border-gray-300 bg-white/10 p-1 shadow-md backdrop-blur-md dark:border-gray-700 dark:bg-white/5">
                <Image
                  src="/images/hero/1.png"
                  alt="Quality"
                  width={140}
                  height={40}
                  priority
                  className="scale-150 bg-transparent object-contain dark:brightness-200 dark:invert"
                />
              </div>
            </div>

            {/* Middle Content */}
            <div className="max-w-full text-center">
              {/* For mobile view only */}
              <div className="w-full flex flex-items items-center text-center block md:hidden">
                <p className="mb-4 text-[12px] text-gray-700 xl:mb-6 dark:text-gray-300">
                  At Wortholic, we build smart and secure AI-powered solutions
                  from web & mobile apps to business automation, CRM
                  integrations, and custom AI products. Our mission is simple:
                  help businesses work faster, smarter, and scale with
                  confidence.
                </p>
              </div>

              {/* For Desktop/tablet view only */}
              <div className="w-[620px] flex flex-items items-center text-center hidden md:block">
                <p className="mb-4 text-[15px] text-gray-700 xl:mb-6 dark:text-gray-300">
                  At Wortholic, we build smart and secure AI-powered solutions
                  from <br /> web & mobile apps to business automation, CRM
                  integrations, and custom AI products. <br /> Our mission is
                  simple: help businesses work faster, smarter, and scale with
                  confidence.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={handleScrollToContact}
                  className="flex cursor-pointer items-center justify-center rounded-[8px] border-1 border-[#0E9F9F] bg-[#0E9F9F] px-4 py-2 font-medium text-white shadow-md transition duration-300 hover:bg-white hover:text-[#0E9F9F] dark:hover:bg-black"
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </button>

                <a
                  href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Meeting%20with%20Wortholic&details=Let's%20discuss%20your%20project%20requirements%20and%20how%20we%20can%20help%20with%20AI-powered%20solutions&add=wortholicai@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-[8px] border-1 border-[#0E9F9F] bg-[#0E9F9F] px-4 py-2 font-medium text-white shadow-md transition duration-300 hover:bg-white hover:text-[#0E9F9F] dark:hover:bg-black"
                >
                  Schedule a Meeting
                </a>
              </div>
            </div>

            {/* Right Logos */}
            <div className="ml-10 hidden animate-[float_4s_ease-in-out_infinite] flex-col items-center gap-8 md:flex xl:gap-12">
              <div className="flex h-[35px] items-center justify-center overflow-hidden rounded-[60px] border border-gray-300 bg-white/10 pt-1 pr-4 shadow-md backdrop-blur-md dark:border-gray-700 dark:bg-white/5">
                <Image
                  src="/images/hero/2.png"
                  alt="Reliability"
                  width={140}
                  height={40}
                  className="scale-150 bg-transparent object-contain dark:brightness-200 dark:invert"
                />
              </div>

              <div className="ml-20 flex h-[35px] items-center justify-center overflow-hidden rounded-[60px] border border-gray-300 bg-white/10 pr-2 pb-2 shadow-md backdrop-blur-md dark:border-gray-700 dark:bg-white/5">
                <Image
                  src="/images/hero/4.png"
                  alt="Transparency"
                  width={140}
                  height={40}
                  className="scale-135 bg-transparent object-contain dark:brightness-200 dark:invert"
                />
              </div>
            </div>
          </div>

          {/* Features / Cards */}
          <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-6">
            {features.map((item, i) => (
              <li
                key={i}
                className="cursor-pointer rounded-lg border border-transparent bg-white/20 p-2 text-center backdrop-blur-md transition-transform duration-300 ease-out hover:translate-y-[-5px] hover:scale-105 hover:border-black hover:shadow-lg md:p-3 dark:bg-white/5 dark:hover:border-white"
              >
                <Image
                  src={item.src}
                  alt={item.text}
                  width={32}
                  height={32}
                  className="mx-auto md:h-10 md:w-10 lg:h-12 lg:w-12 dark:brightness-200 dark:invert"
                />
                <p className="mt-2 text-xs leading-tight font-medium text-gray-800 md:text-sm dark:text-gray-200">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// Done section
