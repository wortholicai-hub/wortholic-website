"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

// --- FAQ Data ---
const faqData = [
  {
    id: 1,
    question: "Is this bootcamp completely free to join?",
    answer:
      "Yes. All classes, materials, projects, and sessions are provided at no cost. You only need your time, dedication, and a willingness to learn.",
  },
  {
    id: 2,
    question: "Do I need any previous coding experience?",
    answer:
      "No experience is required. The program starts from absolute basics, making it beginner-friendly for anyone who wants to start learning.",
  },
  {
    id: 3,
    question: "What do I need to participate in the bootcamp?",
    answer:
      "A laptop or computer with internet access is enough. All tools and resources used in the program are free and open-source.",
  },
  {
    id: 4,
    question: "How long does the free bootcamp take?",
    answer:
      "The free bootcamp is self-paced. On average, learners finish within 6–10 weeks depending on how much time they dedicate each day.",
  },
  {
    id: 5,
    question: "Will I receive a certificate after completing the bootcamp?",
    answer:
      "Yes. A free completion certificate is provided after finishing the final project and required modules.",
  },
  {
    id: 6,
    question: "Are live classes included or is it self-study only?",
    answer:
      "Both options exist. You can join free weekly live sessions or follow the step-by-step recorded lessons at your own speed.",
  },
  {
    id: 7,
    question: "Do you provide community or mentorship support?",
    answer:
      "Yes. We have a free learning community, discussion groups, and mentors who help guide students throughout their journey.",
  },
  {
    id: 8,
    question: "Are the projects and assignments also free?",
    answer:
      "Absolutely. All project templates, code examples, tasks, and learning exercises are completely free to access.",
  },
  {
    id: 9,
    question: "Can I join from any country?",
    answer:
      "Yes. The bootcamp is fully online and available globally with no restrictions.",
  },
];

const FAQsSection = () => {
  const [activeId, setActiveId] = useState(2); // Default open FAQ

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? 0 : id);
  };

  return (
    <section className="bg-white dark:bg-black py-24 px-4 md:px-8 font-sans text-black dark:text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-6 lg:sticky lg:top-20 h-fit">
          <span className="text-[#0E9F9F] font-medium text-sm tracking-wide">
            FAQs
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-black dark:text-white">
            Got Questions? We Have Answers!
          </h2>

          <p className="text-gray-700 dark:text-gray-400 max-w-sm text-base leading-relaxed">
            Get answers to common questions before starting your learning
            journey.
          </p>
        </div>

        {/* RIGHT COLUMN — Accordion */}
        <div className="lg:col-span-3 space-y-4">
          {faqData.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-xl hover:border-black/30 dark:hover:border-white/20 overflow-hidden"
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className={`w-full flex justify-between items-start text-left py-4 md:py-5 px-6 cursor-pointer ${
                    isActive
                      ? "text-[#0E9F9F] font-medium"
                      : "text-black dark:text-white"
                  }`}
                >
                  <span
                    className={`text-base md:text-lg pr-4 ${
                      isActive ? "text-[#0E9F9F]" : "text-black dark:text-white"
                    }`}
                  >
                    {item.question}
                  </span>

                  <span className="flex-shrink-0 pt-1">
                    {isActive ? (
                      <Minus
                        className="w-5 h-5 text-emerald-400"
                        strokeWidth={2.5}
                      />
                    ) : (
                      <Plus
                        className="w-5 h-5 text-black dark:text-white/80"
                        strokeWidth={2.5}
                      />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isActive
                      ? "max-h-[300px] opacity-100 pb-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed px-6">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
