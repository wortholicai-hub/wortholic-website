"use client";
import React from "react";
import {
  Award,
  Brain,
  Globe,
  Users,
  Briefcase,
  CheckCircle2,
  Star,
} from "lucide-react";
import SectionOne from "@/components/Achievments/SectionOne";
import SectionTwo from "@/components/Achievments/SectionTwo";
import SectionThree from "@/components/Achievments/SectionThree";
import SectionFour from "@/components/Achievments/SectionFour";
import SectionFive from "@/components/Achievments/SectionFive";
import SectionSix from "@/components/Achievments/SectionSix";
import SectionSeven from "@/components/Achievments/SectionSeven";
import SectionEight from "@/components/Achievments/SectionEight";
import SectionNine from "@/components/Achievments/SectionNine";

const Achievements = () => {
  return (
    <main className="bg-white text-gray-800 dark:bg-[#0b0f14] dark:text-gray-200 transition-colors duration-300 min-h-screen py-20">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-40">
          <h1 className="text-4xl md:text-4xl font-bold text-black dark:text-gray-300 mb-4">
            Milestones of Excellence
          </h1>
          {/* <p className="text-gray-600 dark:text-gray-400 italic">
            This slide shows some business achievements over a period like Most
            Respected Company, Increased Global Sales, New Stores Opened etc.
          </p> */}
        </div>

        {/* Trophy Achievement Section */}
        <div
          className="relative max-w-5xl mx-auto"
          style={{ minHeight: "700px" }}
        >
          {/* Center Trophy */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              {/* Trophy SVG */}
              <svg className="w-56 h-56" viewBox="0 0 200 200" fill="none">
                {/* Trophy Cup Body */}
                <path
                  d="M70 60 L70 40 L130 40 L130 60 Q130 95 100 105 Q70 95 70 60 Z"
                  fill="#FDB913"
                  stroke="#D4920B"
                  strokeWidth="2"
                />
                {/* Left Handle */}
                <path
                  d="M70 50 Q50 50 50 62 Q50 74 70 74"
                  fill="none"
                  stroke="#FDB913"
                  strokeWidth="6"
                />
                {/* Right Handle */}
                <path
                  d="M130 50 Q150 50 150 62 Q150 74 130 74"
                  fill="none"
                  stroke="#FDB913"
                  strokeWidth="6"
                />
                {/* Trophy Base - Stem */}
                <rect
                  x="90"
                  y="105"
                  width="20"
                  height="20"
                  fill="#FDB913"
                  stroke="#D4920B"
                  strokeWidth="2"
                />
                {/* Trophy Base - Bottom */}
                <rect
                  x="75"
                  y="125"
                  width="50"
                  height="8"
                  fill="#FDB913"
                  stroke="#D4920B"
                  strokeWidth="2"
                  rx="2"
                />
                <rect
                  x="65"
                  y="133"
                  width="70"
                  height="12"
                  fill="#FDB913"
                  stroke="#D4920B"
                  strokeWidth="2"
                  rx="2"
                />
              </svg>

              {/* Stars around trophy */}
              <Star className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-10 text-yellow-400 fill-yellow-400" />
              <Star className="absolute top-16 -left-6 w-7 h-7 text-pink-500 fill-pink-500" />
              <Star className="absolute top-16 -right-6 w-7 h-7 text-pink-500 fill-pink-500" />
              <Star className="absolute bottom-20 -left-8 w-7 h-7 text-gray-500 fill-gray-500" />
              <Star className="absolute bottom-20 -right-8 w-7 h-7 text-gray-500 fill-gray-500" />
            </div>
          </div>
          {/* Decorative Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[470px] h-[470px] border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-full pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[455px] h-[455px] border border-[#A1E4E4] dark:border-gray-600 rounded-full pointer-events-none bg-[#A1E4E4] dark:bg-gray-600"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-full pointer-events-none"></div>

          {/* Top Achievement */}
          <div className="absolute -top-30 left-1/2 -translate-x-1/2 w-80">
            <div className="bg-white dark:bg-[#18222e] p-6 rounded-xl shadow-lg border-2 border-gray-100 dark:border-gray-700">
              <div className="flex justify-center mb-3">
                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full">
                  <Briefcase className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                </div>
              </div>
              <h3 className="text-center text-yellow-600 dark:text-yellow-400 font-bold text-base mb-2">
                Rapid Expansion
              </h3>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                Expanded globally with AI-powered business solutions
              </p>
            </div>
            {/* Connecting Line */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-18 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600"></div>
          </div>

          {/* Right Top Achievement */}
          <div className="absolute top-24 right-0 w-80">
            <div className="flex items-center gap-0">
              <div className="h-0.5 w-28 bg-gradient-to-l from-gray-300 to-transparent dark:from-gray-600"></div>
              <div className="bg-white dark:bg-[#18222e] p-6 rounded-xl shadow-lg border-2 border-gray-100 dark:border-gray-700 flex-1">
                <div className="flex justify-center mb-3">
                  <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full">
                    <Award className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                  </div>
                </div>
                <h3 className="text-center text-pink-600 dark:text-pink-400 font-bold text-base mb-2">
                  Trusted by Leading Brands
                </h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Partnered with top companies worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Right Bottom Achievement */}
          <div className="absolute bottom-24 right-0 w-80">
            <div className="flex items-center gap-0">
              <div className="h-0.5 w-28 bg-gradient-to-l from-gray-300 to-transparent dark:from-gray-600"></div>
              <div className="bg-white dark:bg-[#18222e] p-6 rounded-xl shadow-lg border-2 border-gray-100 dark:border-gray-700 flex-1">
                <div className="flex justify-center mb-3">
                  <div className="bg-gray-100 dark:bg-gray-800/30 p-3 rounded-full">
                    <Brain className="h-8 w-8 text-gray-600 dark:text-gray-300" />
                  </div>
                </div>
                <h3 className="text-center text-gray-700 dark:text-gray-300 font-bold text-base mb-2">
                  Excellence in AI Innovation
                </h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Pioneered next-gen AI and automation tools
                </p>
              </div>
            </div>
          </div>

          {/* Left Top Achievement */}
          <div className="absolute top-23 left-0 w-80">
            <div className="flex items-center gap-0">
              <div className="bg-white dark:bg-[#18222e] p-6 rounded-xl shadow-lg border-2 border-gray-100 dark:border-gray-700 flex-1">
                <div className="flex justify-center mb-3">
                  <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full">
                    <Globe className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                  </div>
                </div>
                <h3 className="text-center text-pink-600 dark:text-pink-400 font-bold text-base mb-2">
                  Global Sales increased
                </h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Boosted international client base through innovation
                </p>
              </div>
              <div className="h-0.5 w-28 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600"></div>
            </div>
          </div>

          {/* Left Bottom Achievement */}
          <div className="absolute bottom-25 left-0 w-80">
            <div className="flex items-center gap-0">
              <div className="bg-white dark:bg-[#18222e] p-6 rounded-xl shadow-lg border-2 border-gray-100 dark:border-gray-700 flex-1">
                <div className="flex justify-center mb-3">
                  <div className="bg-gray-100 dark:bg-gray-800/30 p-3 rounded-full">
                    <CheckCircle2 className="h-8 w-8 text-gray-600 dark:text-gray-300" />
                  </div>
                </div>
                <h3 className="text-center text-gray-700 dark:text-gray-300 font-bold text-base mb-2">
                  Awarded the Most
                </h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Recognized for excellence in AI and automation
                </p>
              </div>
              <div className="h-0.5 w-28 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <section className="mt-0 py-5">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 text-center">
            {[
              {
                icon: Briefcase,
                num: "150+",
                text: "Solutions delivered to clients",
              },
              { icon: Users, num: "150+", text: "Satisfied & Happy clients" },
              { icon: Globe, num: "20+", text: "Countries Served" },
              { icon: CheckCircle2, num: "95%", text: "Client Retention Rate" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#18222e] p-6 rounded-xl shadow-lg border-2 border-gray-100 dark:border-gray-700"
              >
                <item.icon className="mx-auto mb-4 h-10 w-10 text-[#2E4864] dark:text-gray-300" />
                <h2 className="text-4xl font-extrabold text-[#2E4864] dark:text-gray-300">
                  {item.num}
                </h2>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Achievements;
