import React from "react";
import { FaLaptopCode, FaIndustry, FaUsers, FaCogs } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { BiFileFind, BiPaperclip } from "react-icons/bi";
import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlinePhone,
} from "react-icons/hi2";

const AboutSectionSeven = () => {
  return (
    <section className="bg-white px-4 py-12 transition-colors duration-300 md:px-8 lg:px-16 dark:bg-black">
      <div className="container mx-auto">
        {/* Success Story Title */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white">
            Success story{" "}
            <span className="text-[#0E9F9F] dark:text-[#0E9F9F]">
              Our Achievements
            </span>
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <MdOutlineAccessTimeFilled />,
              title: "5 Years of experience",
              text: "Watched technologies change leaps and bounds during these years and always focused on staying ahead in this transition.",
            },
            {
              icon: <FaLaptopCode />,
              title: "150+ Solutions delivered to clients",
              text: "The satisfaction of the clients using our solutions has always encouraged us to excel our benchmarks.",
            },
            {
              icon: <FaIndustry />,
              title: "20+ Industries Covered till now",
              text: "Dynamic range of industries covered with wide knowledge of each and solving critical problems.",
            },
            {
              icon: <BiFileFind />,
              title: "Flexible engagement models",
              text: "Customizable engagement models allowing clients to tailor-make their own models, end-result being the same: Success.",
            },
            {
              icon: <FaCogs />,
              title: "Custom solutions for any workflow",
              text: "Business-focused software solutions aiming to solve the important workflow problems of your business.",
            },
            {
              icon: <FaUsers />,
              title: "150+ Satisfied & Happy clients",
              text: "It&apos;s not the numbers but the smiles of our customers that matters when they see our software solving their problems.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg transition-colors duration-300 dark:bg-gray-800"
            >
              {/* Icon: black in light, white in dark */}
              <div className="mb-4 text-4xl text-black dark:text-white">
                {item.icon}
              </div>

              <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Talk to Us Section */}
        <div className="rounded-lg bg-gray-100 p-8 shadow-xl transition-colors duration-300 md:p-12 dark:bg-gray-800">
          <div className="mb-6 text-center">
            <h3 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white">
              Talk to Us About Your Project
            </h3>
            <p className="mt-2 text-sm text-gray-700 md:text-base dark:text-gray-300">
              We are here to build your software project and help you succeed &
              grow your business.
            </p>
          </div>

          <form className="space-y-6">
            {/* Name, Email, Phone */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Name */}
              <div className="flex items-center rounded-lg border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700">
                <span className="px-3 text-gray-900 dark:text-gray-100">
                  <HiOutlineUser className="h-5 w-5" />
                </span>
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full bg-transparent p-3 text-gray-900 placeholder-gray-500 focus:outline-none dark:text-gray-100 dark:placeholder-gray-300"
                />
              </div>

              {/* Email */}
              <div className="flex items-center rounded-lg border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700">
                <span className="px-3 text-gray-900 dark:text-gray-100">
                  <HiOutlineEnvelope className="h-5 w-5" />
                </span>
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full bg-transparent p-3 text-gray-900 placeholder-gray-500 focus:outline-none dark:text-gray-100 dark:placeholder-gray-300"
                />
              </div>

              {/* Phone */}
              <div className="flex items-center rounded-lg border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700">
                <span className="px-3 text-gray-900 dark:text-gray-100">
                  <HiOutlinePhone className="h-5 w-5" />
                </span>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full bg-transparent p-3 text-gray-900 placeholder-gray-500 focus:outline-none dark:text-gray-100 dark:placeholder-gray-300"
                />
              </div>
            </div>

            {/* File Upload */}
            <div>
              <label
                htmlFor="file-upload"
                className="mb-1 block text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Upload Files
              </label>
              <div className="flex items-center rounded-lg border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700">
                <span className="px-3 text-gray-900 dark:text-gray-100">
                  <BiPaperclip className="h-5 w-5" />
                </span>
                <input
                  id="file-upload"
                  type="file"
                  className="w-full cursor-pointer bg-transparent p-3 text-gray-900 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 focus:outline-none dark:text-gray-100 dark:file:bg-blue-900 dark:file:text-blue-400 dark:hover:file:bg-blue-800"
                />
              </div>
            </div>

            {/* Textarea */}
            <div>
              <label
                htmlFor="project-details"
                className="mb-1 block text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Write something about your project in detail
              </label>
              <textarea
                id="project-details"
                rows={5}
                className="w-full rounded-lg bg-white p-3 text-gray-900 placeholder-gray-500 transition-colors duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-300"
              ></textarea>
            </div>

            <div className="flex items-center justify-between">
              {/* Send Button */}
              <button
                type="submit"
                className="flex cursor-pointer items-center justify-center rounded border-2 border-[#0E9F9F] bg-[#0E9F9F] px-4 py-1 font-medium text-white shadow-md transition duration-300 hover:bg-white hover:text-[#0E9F9F] dark:hover:bg-black"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionSeven;
