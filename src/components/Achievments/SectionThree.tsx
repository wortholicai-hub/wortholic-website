"use client";
import React from "react";
import {
  ShoppingCart,
  CreditCard,
  List,
  Trophy,
  LogIn,
  UserPlus,
  BarChart,
  Flag,
} from "lucide-react";

const useCases = [
  {
    icon: <ShoppingCart className="w-6 h-6 text-white" />,
    text: "Do 2 transactions of at least $100 each",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-white" />,
    text: "Spend $150 on the product with a given SKU",
  },
  {
    icon: <List className="w-6 h-6 text-white" />,
    text: "Finalize a transaction 4 months in a row",
  },
  {
    icon: <Trophy className="w-6 h-6 text-white" />,
    text: "Track a workout of at least 30 minutes 5 days in a row",
  },
  {
    icon: <LogIn className="w-6 h-6 text-white" />,
    text: "Log in to the mobile app 7 days in a row",
  },
  {
    icon: <UserPlus className="w-6 h-6 text-white" />,
    text: "Refer 5x new customers",
  },
  {
    icon: <BarChart className="w-6 h-6 text-white" />,
    text: "Purchase 3 ACME products in December",
  },
  {
    icon: <Flag className="w-6 h-6 text-white" />,
    text: "Leave 3+ product reviews this year",
  },
];

const SectionThree: React.FC = () => {
  return (
    <section className="py-6 bg-gray-50 dark:bg-[#0b0f14]">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h4 className="text-sm font-semibold text-[#0E9F9F] mb-2">Use cases</h4>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Drive results with achievements
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 px-6">
        {useCases.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white dark:bg-gray-900 shadow-sm rounded-2xl p-3 hover:shadow-md transition-all duration-300"
          >
            <div
              className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
              style={{ backgroundColor: "#0E9F9F" }}
            >
              {item.icon}
            </div>
            <p className="text-gray-800 dark:text-gray-100 text-base font-medium">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionThree;
