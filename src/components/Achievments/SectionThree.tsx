"use client";
import React from "react";

const campaigns = [
  {
    text: "Spend $100 in February and earn 100 points",
    completed: true,
  },
  {
    text: "Run 10 km & get discount on sport shoes",
    completed: true,
  },
  {
    text: "Refer 5 friends and get $50 cashback",
    completed: true,
  },
  {
    text: "Place 5 products and get free delivery code",
    completed: false,
  },
  {
    text: "Buy 10 ACME products and get special reward",
    completed: true,
  },
];

const SectionThree: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#0b0f14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h4 className="text-sm font-semibold text-purple-600 mb-4">
              Configuration
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Configure any shape of achievements, challenges or milestones
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
              Use Open Loyalty's{" "}
              <span className="underline">gamification software</span> to create
              achievements that drive your business goals, such as purchase
              frequency or increasing customer lifetime value.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Set challenges with goals based on transactional data, customer
              behavior or activity streaks. Create simple milestones or
              multi-dimensional achievements composed of several rules.
            </p>
          </div>

          {/* Right Content - Achievement Card */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Achievement-based campaigns
            </h3>
            <div className="space-y-4">
              {campaigns.map((campaign, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className={`w-5 h-5 rounded-full flex-shrink-0 mt-0.5 ${
                      campaign.completed
                        ? "bg-green-500"
                        : "bg-red-400 opacity-40"
                    }`}
                  />
                  <p
                    className={`text-base ${
                      campaign.completed
                        ? "text-gray-900 dark:text-gray-100"
                        : "text-gray-400 dark:text-gray-500"
                    }`}
                  >
                    {campaign.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
