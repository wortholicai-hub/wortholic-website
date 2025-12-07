"use client";
import React from "react";
import { motion } from "framer-motion";

function SectionOne() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex flex-col items-center justify-center px-8 lg:px-10 pt-32 pb-16 relative overflow-hidden text-center">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#0E9F9F] opacity-5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500 opacity-5 blur-[100px] rounded-full"></div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center max-w-4xl z-10"
      >
        <h1 className="mb-6 text-3xl lg:text-6xl leading-tight font-bold text-gray-900 sm:text-5xl md:text-6xl dark:text-white max-w-5xl">
          Master Programming <span className="text-[#0E9F9F]">in 2 Months</span>
        </h1>

        <p className="text-base lg:text-lg text-gray-500 mb-8 font-light max-w-2xl mx-auto">
          Master in-demand tech skills with our expert-led bootcamp.
        </p>

        <button
          className="flex items-center justify-center rounded-[8px] border-1 border-[#0E9F9F] bg-[#0E9F9F] px-8 py-3 font-medium text-white shadow-lg transition duration-300 hover:bg-white hover:text-[#0E9F9F] dark:hover:bg-black group text-lg"
        >
          Browse our Bootcamp
          <span className="text-2xl ml-2 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>

        <div className="flex flex-wrap justify-center gap-12 lg:gap-24 mt-16">
          <div className="stat flex flex-col items-center">
            <div className="text-3xl lg:text-4xl font-bold text-[#0E9F9F] leading-none mb-2">
              20K<sup className="text-xl">+</sup>
            </div>
            <div className="text-lg lg:text-xl text-gray-400 font-light">
              Amazing graduates
            </div>
          </div>

          <div className="stat flex flex-col items-center">
            <div className="text-3xl lg:text-4xl font-bold text-[#0E9F9F] leading-none mb-2">
              97<sup className="text-xl">%</sup>
            </div>
            <div className="text-lg lg:text-xl text-gray-400 font-light">
              Completion Rate
            </div>
          </div>

          <div className="stat flex flex-col items-center">
            <div className="text-3xl lg:text-4xl font-bold text-[#0E9F9F] leading-none mb-2">
              195<sup className="text-xl">+</sup>
            </div>
            <div className="text-lg lg:text-xl text-gray-400 font-light">
              Industry Partners
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default SectionOne;
