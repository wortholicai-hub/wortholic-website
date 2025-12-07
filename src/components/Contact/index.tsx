"use client";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaFileUpload,
  FaList,
} from "react-icons/fa";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-2">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-stretch">
          {/* Left Transparent Box */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="h-full rounded-lg border border-gray-300 bg-white/30 px-8 py-1 shadow-lg backdrop-blur-md sm:p-[55px] lg:px-8 xl:p-[55px] dark:border-gray-700 dark:bg-black/30"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white">
                Get A Free Quote
              </h2>
              <p className="text-body-color mb-12 text-base font-medium dark:text-gray-300">
                Tell us about your project and we&apos;ll get back to you within
                24 hours with a detailed proposal.
              </p>

              <form
                action="mailto:wortholicai@gmail.com"
                method="post"
                encType="text/plain"
              >
                <div className="-mx-4 flex flex-wrap">
                  {/* Name */}
                  <div className="w-full px-4 md:w-1/2">
                    <label
                      htmlFor="name"
                      className="text-dark mb-3 block text-sm font-medium dark:text-white"
                    >
                      Your Name
                    </label>
                    <div className="relative mb-8">
                      <span className="absolute inset-y-0 left-3 flex items-center">
                        <FaUser className="text-black dark:text-white" />
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="focus:border-primary w-full rounded-md border border-gray-300 bg-transparent py-3 pr-4 pl-10 text-base text-black outline-none dark:border-gray-600 dark:text-white"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="w-full px-4 md:w-1/2">
                    <label
                      htmlFor="email"
                      className="text-dark mb-3 block text-sm font-medium dark:text-white"
                    >
                      Your Email
                    </label>
                    <div className="relative mb-8">
                      <span className="absolute inset-y-0 left-3 flex items-center">
                        <FaEnvelope className="text-black dark:text-white" />
                      </span>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="focus:border-primary w-full rounded-md border border-gray-300 bg-transparent py-3 pr-4 pl-10 text-base text-black outline-none dark:border-gray-600 dark:text-white"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="w-full px-4 md:w-1/2">
                    <label
                      htmlFor="phone"
                      className="text-dark mb-3 block text-sm font-medium dark:text-white"
                    >
                      Your Phone
                    </label>
                    <div className="relative mb-8">
                      <span className="absolute inset-y-0 left-3 flex items-center">
                        <FaPhone className="text-black dark:text-white" />
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        className="focus:border-primary w-full rounded-md border border-gray-300 bg-transparent py-3 pr-4 pl-10 text-base text-black outline-none dark:border-gray-600 dark:text-white"
                        required
                      />
                    </div>
                  </div>

                  {/* File Upload */}
                  <div className="w-full px-4 md:w-1/2">
                    <label
                      htmlFor="file"
                      className="text-dark mb-3 block text-sm font-medium dark:text-white"
                    >
                      Attach File
                    </label>
                    <div className="relative mb-8">
                      <span className="absolute inset-y-0 left-3 flex items-center">
                        <FaFileUpload className="text-black dark:text-white" />
                      </span>
                      <input
                        type="file"
                        name="file"
                        className="focus:border-primary w-full rounded-md border border-gray-300 bg-transparent py-2 pr-4 pl-10 text-base text-black outline-none file:mr-4 file:rounded-md file:border file:border-gray-400 file:bg-gray-100 file:px-3 file:py-2 file:text-sm file:font-medium file:text-black hover:file:bg-gray-200 dark:border-gray-600 dark:text-white dark:file:bg-gray-800 dark:file:text-white dark:hover:file:bg-gray-700"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div className="w-full px-4">
                    <label
                      htmlFor="service"
                      className="text-dark mb-3 block text-sm font-medium dark:text-white"
                    >
                      Service Required
                    </label>
                    <div className="relative mb-8">
                      <span className="absolute inset-y-0 left-3 flex items-center">
                        <FaList className="text-black dark:text-white" />
                      </span>
                      <select
                        name="service"
                        className="focus:border-primary w-full rounded-md border border-gray-300 bg-transparent py-3 pr-4 pl-10 text-base text-black outline-none dark:border-gray-600 dark:bg-black dark:text-white"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">
                          Mobile App Development
                        </option>
                        <option value="ai-automation">
                          AI &amp; Automation
                        </option>
                        <option value="crm-integration">CRM Integration</option>
                        <option value="chatbot">AI Chatbot Development</option>
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="cloud-solutions">Cloud Solutions</option>
                        <option value="hire-developer">Hire Developer</option>
                        <option value="consultation">
                          Technical Consultation
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="w-full px-4">
                    <label
                      htmlFor="message"
                      className="text-dark mb-3 block text-sm font-medium dark:text-white"
                    >
                      Your Message
                    </label>
                    <div className="relative mb-8">
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Describe your project requirements in detail..."
                        className="focus:border-primary w-full resize-none rounded-md border border-gray-300 bg-transparent py-3 pr-4 pl-3 text-base text-black outline-none dark:border-gray-600 dark:text-white"
                        required
                      ></textarea>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="flex cursor-pointer items-center justify-center rounded-[8px] border-1 border-[#0E9F9F] bg-[#0E9F9F] px-4 py-2 font-medium text-white shadow-md transition duration-300 hover:bg-white hover:text-[#0E9F9F] dark:hover:bg-black"
                    >
                      Get Free Quote
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Transparent Box */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="flex h-full items-center justify-center rounded-lg border border-gray-300 bg-white/30 p-6 shadow-lg backdrop-blur-md dark:border-gray-700 dark:bg-black/30">
              <NewsLatterBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
