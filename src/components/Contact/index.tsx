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
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#0E9F9F]/10 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#086363]/10 blur-[120px]"></div>
      </div>

      <div className="container">
        <div className="-mx-4 flex flex-wrap items-stretch gap-y-8">
          {/* Left Premium Box */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="h-full rounded-3xl border border-gray-200/50 bg-white/60 px-8 py-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl sm:p-[55px] lg:px-8 xl:p-[60px] dark:border-gray-800/50 dark:bg-[#081019]/60"
              data-wow-delay=".15s"
            >
              <h2 className="mb-4 text-3xl lg:text-5xl font-black tracking-tight text-slate-900 md:text-4xl dark:text-white">
                Get A Free Quote
              </h2>
              <p className="mb-12 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                Tell us about your project and our technical architects will get back to you within
                24 hours with a detailed, no-obligation proposal.
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
                      className="mb-2 block text-sm font-bold text-slate-800 dark:text-slate-200"
                    >
                      Your Name
                    </label>
                    <div className="relative mb-8 group">
                      <span className="absolute inset-y-0 left-4 flex items-center text-slate-400 group-focus-within:text-[#0E9F9F] transition-colors">
                        <FaUser />
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-gray-200 bg-white/80 py-4 pr-4 pl-12 text-base text-slate-800 outline-none transition-all duration-300 focus:border-[#0E9F9F] focus:ring-4 focus:ring-[#0E9F9F]/10 dark:border-gray-700 dark:bg-[#111b26]/80 dark:text-white dark:focus:border-[#0E9F9F]"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="w-full px-4 md:w-1/2">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-slate-800 dark:text-slate-200"
                    >
                      Your Email
                    </label>
                    <div className="relative mb-8 group">
                      <span className="absolute inset-y-0 left-4 flex items-center text-slate-400 group-focus-within:text-[#0E9F9F] transition-colors">
                        <FaEnvelope />
                      </span>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@company.com"
                        className="w-full rounded-xl border border-gray-200 bg-white/80 py-4 pr-4 pl-12 text-base text-slate-800 outline-none transition-all duration-300 focus:border-[#0E9F9F] focus:ring-4 focus:ring-[#0E9F9F]/10 dark:border-gray-700 dark:bg-[#111b26]/80 dark:text-white dark:focus:border-[#0E9F9F]"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="w-full px-4 md:w-1/2">
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-slate-800 dark:text-slate-200"
                    >
                      Your Phone
                    </label>
                    <div className="relative mb-8 group">
                      <span className="absolute inset-y-0 left-4 flex items-center text-slate-400 group-focus-within:text-[#0E9F9F] transition-colors">
                        <FaPhone />
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-xl border border-gray-200 bg-white/80 py-4 pr-4 pl-12 text-base text-slate-800 outline-none transition-all duration-300 focus:border-[#0E9F9F] focus:ring-4 focus:ring-[#0E9F9F]/10 dark:border-gray-700 dark:bg-[#111b26]/80 dark:text-white dark:focus:border-[#0E9F9F]"
                        required
                      />
                    </div>
                  </div>

                  {/* File Upload */}
                  <div className="w-full px-4 md:w-1/2">
                    <label
                      htmlFor="file"
                      className="mb-2 block text-sm font-bold text-slate-800 dark:text-slate-200"
                    >
                      Attach File (Optional)
                    </label>
                    <div className="relative mb-8 group">
                      <span className="absolute inset-y-0 left-4 flex items-center text-slate-400 group-focus-within:text-[#0E9F9F] transition-colors">
                        <FaFileUpload />
                      </span>
                      <input
                        type="file"
                        name="file"
                        className="w-full rounded-xl border border-gray-200 bg-white/80 py-3 pr-4 pl-12 text-sm text-slate-800 outline-none transition-all duration-300 focus:border-[#0E9F9F] focus:ring-4 focus:ring-[#0E9F9F]/10 file:mr-4 file:rounded-lg file:border-0 file:bg-[#0E9F9F]/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#0E9F9F] hover:file:bg-[#0E9F9F]/20 dark:border-gray-700 dark:bg-[#111b26]/80 dark:text-white dark:focus:border-[#0E9F9F]"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div className="w-full px-4">
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-bold text-slate-800 dark:text-slate-200"
                    >
                      Service Required
                    </label>
                    <div className="relative mb-8 group">
                      <span className="absolute inset-y-0 left-4 flex items-center text-slate-400 group-focus-within:text-[#0E9F9F] transition-colors">
                        <FaList />
                      </span>
                      <select
                        name="service"
                        className="w-full appearance-none rounded-xl border border-gray-200 bg-white/80 py-4 pr-10 pl-12 text-base text-slate-800 outline-none transition-all duration-300 focus:border-[#0E9F9F] focus:ring-4 focus:ring-[#0E9F9F]/10 dark:border-gray-700 dark:bg-[#111b26]/80 dark:text-white dark:focus:border-[#0E9F9F]"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="ai-automation">AI &amp; Automation Workflows</option>
                        <option value="custom-software">Custom Software &amp; Web Apps</option>
                        <option value="enterprise-rag">Enterprise RAG / Custom LLMs</option>
                        <option value="mobile-app">Mobile App Development</option>
                        <option value="crm-integration">Custom CRM / ERP Integration</option>
                        <option value="hire-developer">Hire Dedicated Developer</option>
                        <option value="other">Other / General Inquiry</option>
                      </select>
                      {/* Custom dropdown arrow */}
                      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="w-full px-4">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-bold text-slate-800 dark:text-slate-200"
                    >
                      Project Details
                    </label>
                    <div className="relative mb-8">
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Describe your current bottlenecks, tools you use, and what you want to achieve..."
                        className="w-full resize-none rounded-xl border border-gray-200 bg-white/80 p-4 text-base text-slate-800 outline-none transition-all duration-300 focus:border-[#0E9F9F] focus:ring-4 focus:ring-[#0E9F9F]/10 dark:border-gray-700 dark:bg-[#111b26]/80 dark:text-white dark:focus:border-[#0E9F9F]"
                        required
                      ></textarea>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="w-full px-4 mt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center rounded-xl bg-[linear-gradient(135deg,#0E9F9F_0%,#086363_100%)] px-8 py-4 text-lg font-bold text-white shadow-[0_8px_20px_rgba(14,159,159,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(14,159,159,0.4)]"
                    >
                      Submit Project Request
                    </button>
                    <p className="text-center text-sm text-slate-500 mt-4">
                      100% Secure & Confidential. We never share your data.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Transparent Box */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="flex h-full items-center justify-center rounded-3xl border border-gray-200/50 bg-white/60 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl dark:border-gray-800/50 dark:bg-[#081019]/60">
              <NewsLatterBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
