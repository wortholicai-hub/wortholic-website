"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question:
      "What is the purpose of an achievements system in a loyalty program?",
    answer:
      "An achievements system gamifies the customer experience by setting specific goals and challenges that encourage desired behaviors. It increases engagement, drives repeat purchases, and creates a sense of accomplishment that strengthens customer loyalty and emotional connection to your brand.",
  },
  {
    question: "How does the achievements feature in Open Loyalty work?",
    answer:
      "Open Loyalty's achievements feature allows you to create customizable goals based on customer behavior, transactions, and activity streaks. You can set up simple milestones or complex multi-dimensional achievements with multiple rules, and reward customers automatically when they complete these challenges.",
  },
  {
    question:
      "What types of achievements can I create for my customers with Open Loyalty?",
    answer:
      "You can create various types of achievements including purchase-based goals (spend thresholds, specific products), behavioral challenges (app logins, reviews), activity streaks (consecutive actions), referral milestones, and multi-step achievements that combine different criteria to drive specific business outcomes.",
  },
  {
    question: "What rewards can I offer for completed achievements?",
    answer:
      "You can offer diverse rewards such as loyalty points, exclusive discounts, free products or services, tier upgrades, special badges, cashback, free delivery codes, early access to sales, or unique experiences. The flexibility allows you to align rewards with your business goals and customer preferences.",
  },
  {
    question:
      "What industries can benefit from using an achievements-based loyalty system?",
    answer:
      "Achievements-based loyalty systems benefit virtually any industry including retail, e-commerce, fitness and wellness, gaming, food and beverage, travel and hospitality, financial services, and subscription services. Any business looking to increase customer engagement and repeat behavior can leverage this approach.",
  },
  {
    question:
      "Can I integrate Open Loyalty's achievements with my existing CRM and marketing systems?",
    answer:
      "Yes, Open Loyalty is designed with integration in mind. It offers APIs and connectors that allow seamless integration with popular CRM platforms, marketing automation tools, e-commerce systems, and other business software to ensure your achievements data flows across your entire tech stack.",
  },
];

const SectionFive: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0b0f14]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">
            FAQ
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Loyalty achievement software
            <br />
            frequently asked questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 dark:border-gray-800"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-0 py-6 flex items-center justify-between text-left hover:opacity-80 transition-opacity duration-200"
              >
                <span className="text-lg sm:text-xl font-normal text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full border-2 border-purple-600 flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-purple-600" />
                    ) : (
                      <Plus className="w-4 h-4 text-purple-600" />
                    )}
                  </div>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <div className="pr-12">
                  <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
