"use client";
import React from "react";
import { motion } from "framer-motion";

function SectionOne() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex items-center px-8 lg:px-10 mt-0  relative overflow-hidden">
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 max-w-4xl z-10"
      >
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Become a Professional
          <br />
          <span className="text-[#0E9F9F]">Programmer in 2 Months</span>
          <br />
          with Job Guarantee
        </h1>

        <p className="text-sm lg:text-sm text-gray-400 mb-4 font-light">
          Boost your skills and land your dream tech career with our expert-led
          coding bootcamp.
        </p>

        <button
          className="
  inline-flex items-center gap-2
  bg-white border border-black text-black
  dark:bg-transparent dark:border-white dark:text-white
  px-5 py-1 rounded-full text-lg lg:text-[16px] font-semibold
  hover:bg-gray-100 dark:hover:bg-white/10
  transition-all hover:translate-x-1 group
"
        >
          Browse our Bootcamp
          <span className="text-2xl group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mt-2 lg:mt-8">
          <div className="stat">
            <div className="text-2xl lg:text-3xl font-bold text-[#0E9F9F] leading-none mb-2">
              20K<sup className="text-xl">+</sup>
            </div>
            <div className="text-xl lg:text-xl text-gray-400 font-light">
              Amazing graduates
            </div>
          </div>

          <div className="stat">
            <div className="text-2xl lg:text-3xl font-bold text-[#0E9F9F] leading-none mb-2">
              97<sup className="text-xl">%</sup>
            </div>
            <div className="text-xl lg:text-xl text-gray-400 font-light">
              Hiring rate
            </div>
          </div>

          <div className="stat">
            <div className="text-2xl lg:text-3xl font-bold text-[#0E9F9F] leading-none mb-2">
              195<sup className="text-xl">+</sup>
            </div>
            <div className="text-xl lg:text-xl text-gray-400 font-light">
              Corporate Partners
            </div>
          </div>
        </div>
      </motion.div>

      {/* Visual Elements */}
      <div className="hidden xl:block absolute right-20 top-1/2 -translate-y-1/2 w-[300px] h-[300px]">
        {/* Monitor */}
        <div className="absolute bottom-20 right-24 w-44 h-40 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border-3 border-gray-700 shadow-2xl">
          <div className="absolute inset-2 bg-black rounded-lg"></div>
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-28 h-14 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-lg"></div>
        </div>

        {/* Tablet */}
        <div className="absolute top-12 -right-4 w-56 h-32 bg-white rounded-lg border-8 border-gray-800 shadow-2xl -rotate-6 p-5">
          <div className="h-1 bg-gray-300 mb-3 rounded w-3/5"></div>
          <div className="h-1 bg-gray-300 mb-3 rounded w-4/5"></div>
          <div className="h-1 bg-gray-300 mb-3 rounded w-3/4"></div>
          <div className="h-1 bg-gray-300 mb-3 rounded w-11/12"></div>
          <div className="h-1 bg-gray-300 mb-3 rounded w-2/3"></div>
          <div className="h-1 bg-gray-300 rounded w-4/5"></div>
        </div>

        {/* Phone */}
        <div className="absolute top-20 right-80 w-32 h-44 bg-white rounded-3xl border-6 border-gray-800 shadow-2xl rotate-12 p-4">
          <div className="w-12 h-16 bg-gray-300 rounded-full mx-auto mb-3"></div>
          <div className="h-0.5 bg-gray-300 mb-2 rounded w-4/5 mx-auto"></div>
          <div className="h-0.5 bg-gray-300 mb-2 rounded w-3/5 mx-auto"></div>
          <div className="h-0.5 bg-gray-300 mb-2 rounded w-11/12 mx-auto"></div>
          <div className="h-0.5 bg-gray-300 rounded w-3/4 mx-auto"></div>
        </div>

        {/* Code Window */}
        <div className="absolute bottom-52 right-62 w-60 h-40 bg-gray-900 rounded-lg border-2 border-gray-700 shadow-2xl -rotate-3 p-4">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="h-0.5 bg-gray-700 mb-2 rounded w-3/5"></div>
          <div className="h-0.5 bg-yellow-400 mb-2 rounded w-4/5"></div>
          <div className="h-0.5 bg-gray-700 mb-2 rounded w-3/4"></div>
          <div className="h-0.5 bg-gray-700 mb-2 rounded w-1/2"></div>
          <div className="h-0.5 bg-gray-700 mb-2 rounded w-11/12"></div>
          <div className="h-0.5 bg-gray-700 rounded w-2/3"></div>
        </div>

        {/* Keyboard */}
        <div className="absolute bottom-10 right-96 w-40 h-16 bg-gray-200 rounded-lg border-4 border-gray-400 shadow-xl p-3 grid grid-cols-5 gap-1.5">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="bg-white border border-gray-300 rounded shadow-sm"
            ></div>
          ))}
        </div>

        {/* Mouse */}
        <div className="absolute bottom-12 right-32 w-16 h-24 bg-gray-200 rounded-t-full rounded-b-3xl border-3 border-gray-400 shadow-xl">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-gray-500 rounded"></div>
        </div>

        {/* Sketch/Wireframe */}
        <div className="absolute bottom-32 -right-14 w-56 h-52 bg-white rounded-lg border-3 border-green-400 shadow-2xl rotate-12 p-5">
          <div className="grid grid-cols-3 gap-4 mb-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="aspect-square border-2 border-gray-300 relative"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 h-2/5 bg-gray-300"></div>
                <div className="absolute bottom-1 left-1 right-1 h-0.5 bg-gray-300"></div>
              </div>
            ))}
          </div>
          <div className="h-1 bg-gray-300 mb-2 rounded w-3/5"></div>
          <div className="h-1 bg-gray-300 mb-2 rounded w-4/5"></div>
          <div className="h-1 bg-gray-300 rounded w-1/2"></div>
        </div>

        {/* Accent Triangle */}
        <div className="absolute bottom-44 right-5 w-0 h-0 border-t-0 border-r-[80px] border-b-[80px] border-l-0 border-transparent border-r-green-400 opacity-80"></div>
      </div>
    </section>
  );
}

export default SectionOne;
