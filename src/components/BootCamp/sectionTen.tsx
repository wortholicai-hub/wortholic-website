"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

// --- Data Configuration ---
const faqData = [
  {
    id: 1,
    question: "Do I need prior coding experience to join the bootcamp?",
    answer:
      "No, our Beginner Plan starts with the absolute fundamentals. Our curriculum is designed to accommodate total beginners, guiding you through core concepts to advanced application development.",
  },
  {
    id: 2,
    question: "Do I need to bring my own laptop for the bootcamp?",
    // This is the expanded answer shown in the image
    answer:
      "Yes, you will need a laptop to complete assignments and projects. We recommend using a laptop with at least 8GB of RAM and a modern processor for the best experience.",
  },
  {
    id: 3,
    question: "How long does the bootcamp program take?",
    answer:
      "Program duration varies by plan. Our Beginner Plan is 8 weeks, the Pro Plan is 12 weeks, and the Ultimate Plan is 16 weeks, all requiring dedicated daily effort for success.",
  },
  {
    id: 4,
    question: "Can I get a refund if I'm not satisfied with the program?",
    answer:
      "We offer a 7-day money-back guarantee for all plans starting from the first day of class. Please review our full terms and conditions for details.",
  },
  {
    id: 5,
    question: "Do you offer job placement support after I graduate?",
    answer:
      "Yes, the Pro and Ultimate plans include extensive job placement assistance, including resume reviews, interview training, and job referral support to our partner network.",
  },
];

// --- Main Component ---
const FAQsSection = () => {
  // State: Default active item is ID 2, matching the screenshot's open state
  const [activeId, setActiveId] = useState<number>(2);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? 0 : id);
  };

  return (
    <section className="bg-black py-24 px-4 md:px-8 font-sans text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
        {/* LEFT COLUMN: Header Block (takes 2/5 width) */}
        <div className="lg:col-span-2 space-y-6 lg:sticky lg:top-20 h-fit">
          <span className="text-[#4ade80] font-medium text-sm tracking-wide uppercase">
            FAQs
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
            Got Questions? We Have Answers!
          </h2>
          <p className="text-gray-400 max-w-sm text-base leading-relaxed">
            Get answers to common questions before starting your learning
            journey.
          </p>
        </div>

        {/* RIGHT COLUMN: Accordion List (takes 3/5 width) */}
        <div className="lg:col-span-3 space-y-4">
          {faqData.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                className="bg-black border border-white/10 rounded-xl transition-all duration-300 hover:border-white/20 overflow-hidden"
              >
                {/* Question Row (Clickable) */}
                <div
                  onClick={() => toggleFAQ(item.id)}
                  className={`
                    flex justify-between items-start py-4 md:py-5 px-6 cursor-pointer
                    ${isActive ? "text-[#4ade80] font-medium" : "text-white font-normal"}
                  `}
                >
                  <h3
                    className={`
                    text-base md:text-lg transition-colors duration-300 pr-4
                    ${isActive ? "text-[#4ade80]" : "text-white"}
                  `}
                  >
                    {item.question}
                  </h3>

                  {/* Icon */}
                  <div className="flex-shrink-0 pt-1">
                    {isActive ? (
                      <Minus
                        className="w-5 h-5 text-[#4ade80]"
                        strokeWidth={2.5}
                      />
                    ) : (
                      <Plus
                        className="w-5 h-5 text-white/80"
                        strokeWidth={2.5}
                      />
                    )}
                  </div>
                </div>

                {/* Answer Content (Expanded/Collapsed) */}
                <div
                  className={`
                    transition-all duration-500 ease-in-out overflow-hidden
                    ${isActive ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"}
                  `}
                >
                  <p className="text-gray-400 text-sm leading-relaxed px-6">
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
