"use client";

import React from "react";
import { FaUsers, FaDollarSign, FaClock } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BiBadgeCheck } from "react-icons/bi";
import { RiGlobalLine } from "react-icons/ri";
import { FaComments } from "react-icons/fa6";
import { GiGearStickPattern } from "react-icons/gi";

const AboutSectionFour = () => {
  const features = [
    {
      icon: <FaUsers className="text-3xl text-black dark:text-white" />,
      title: "Unparalleled Leadership Team with Years of Experience",
    },
    {
      icon: <MdWork className="text-3xl text-black dark:text-white" />,
      title: "Established Work Processes and Documented Workflow",
    },
    {
      icon: <BiBadgeCheck className="text-3xl text-black dark:text-white" />,
      title: "Focus on Quality and promoting Efficiency",
    },
    {
      icon: <RiGlobalLine className="text-3xl text-black dark:text-white" />,
      title: "Global Standard Ethics and Conventions",
    },
    {
      icon: <FaDollarSign className="text-3xl text-black dark:text-white" />,
      title: "Cost Effective Rates and Above Standard Resources",
    },
    {
      icon: <FaClock className="text-3xl text-black dark:text-white" />,
      title: "Timely Delivery without Loosing on Quality",
    },
    {
      icon: <FaComments className="text-3xl text-black dark:text-white" />,
      title: "Seamless Communication and All-Round Interaction",
    },
    {
      icon: (
        <GiGearStickPattern className="text-3xl text-black dark:text-white" />
      ),
      title: "Expert Team of Engineers and Professionals",
    },
  ];

  return (
    <section className="bg-white flex flex-col justify-items items-center text-center px-6 py-8 md:px-16 dark:bg-black">
      {/* Heading */}
      <h2 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white">
        Why Wortholic?
      </h2>

      {/* Paragraph */}
      <p className="mb-10 max-w-5xl text-gray-800 dark:text-gray-300">
        Want to grow your business or launch your startup? Wortholic provides
        complete IT solutions including web, database, and mobile app
        development. We help businesses streamline operations and stay
        competitive. With clients across the USA, UK, Europe, and beyond,
        Wortholic is trusted worldwide for reliable results.
      </p>

      {/* Features Grid */}
      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg border border-gray-200 bg-transparent p-6 text-center shadow-sm transition hover:shadow-md dark:bg-gray-800"
          >
            {item.icon}
            <p className="mt-3 text-sm text-black dark:text-gray-200">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="flex justify-center">
        <div className="flex w-full max-w-2xl flex-col items-center rounded-lg border border-gray-200 bg-transparent p-6 text-center shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
          <p className="mb-4 text-lg font-semibold text-black dark:text-white">
            Start now with a pre-vetted SaaS Developers.
          </p>
          <button className="flex items-center justify-center rounded border-1 border-[#0E9F9F] bg-[#0E9F9F] px-4 py-1 font-medium text-white shadow-md transition duration-300 hover:bg-white hover:text-[#0E9F9F] dark:hover:bg-black">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionFour;
// Done section
