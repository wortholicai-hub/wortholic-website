import React from "react";
import { Check } from "lucide-react";

// --- Data Configuration (FREE Bootcamp Version) ---
const pricingPlans = [
  {
    title: "Beginner Track",
    price: 0,
    description:
      "A perfect starting point for absolute beginners who want to learn the fundamentals of programming — completely free.",
    features: [
      "Basic Web Development (HTML, CSS, JavaScript)",
      "Weekly Live Classes (2x per week)",
      "Lifetime Access to Recorded Lessons",
      "Beginner-Friendly Projects",
      "Community Support & Discussion Groups",
      "Coding Challenges for Practice",
      "Introductory Learning Path",
    ],
  },
  {
    title: "Ultimate Track",
    price: 0,
    description:
      "Our most in-depth and supportive free learning experience with advanced guidance and career growth help.",
    features: [
      "All Features in Pro Track +",
      "Free Personalized Technical Mentorship",
      "Tech Industry Networking Opportunities",
      "Certificate of Completion",
      "Free Access to Exclusive Workshops",
      "Advanced Portfolio Building",
      "Portfolio Review & Guidance",
    ],
  },
  {
    title: "Pro Track",
    price: 0,
    description:
      "A complete and intensive full-stack learning path designed for students ready to level up — without paying anything.",
    features: [
      "All Features in Beginner Track +",
      "Full-Stack Development (React, Node.js, Database)",
      "Live Mentorship & 1-on-1 Code Reviews",
      "Real-World Project Experience",
      "Resume & Interview Preparation",
      "Advanced Project Review",
    ],
  },
];

// --- Sub-Component: Pricing Card ---
const PricingCard: React.FC<(typeof pricingPlans)[0]> = ({
  title,
  price,
  description,
  features,
}) => {
  return (
    <div className="bg-white dark:bg-[#080808] border border-black/10 dark:border-white/10 rounded-2xl p-8 flex flex-col hover:border-emerald-400/50 shadow-xl">
      {/* Price Block */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-black dark:text-white mb-2">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm max-w-[200px] mb-6">
          {description}
        </p>

        <div className="flex items-end">
          <span className="text-6xl font-bold text-black dark:text-white leading-none tracking-tight">
            ${price}
          </span>
          <span className="text-xl text-gray-600 dark:text-gray-400 font-medium ml-1 mb-1">
            /month
          </span>
        </div>
      </div>

      {/* CTA Button */}
      <button className="w-full flex items-center justify-center rounded-[8px] border-1 border-[#0E9F9F] bg-[#0E9F9F] px-4 py-2 font-medium text-white shadow-md transition duration-300 hover:bg-white hover:text-[#0E9F9F] dark:hover:bg-black mb-8">
        Join Track
      </button>

      {/* Feature List */}
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start text-black dark:text-white text-sm"
          >
            <div className="flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-[#0E9F9F] mr-2" strokeWidth={3} />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- Main Component ---
const PricingSection = () => {
  return (
    <section className="bg-white dark:bg-black py-24 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* --- Header Section --- */}
        <div className="mb-16">
          <span className="text-[#0E9F9F] font-medium text-sm tracking-wide uppercase">
            Learning Tracks
          </span>

          <h2 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white tracking-tight mt-3 mb-5">
            Three Free Learning Tracks for Every Student
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Choose a track that matches your learning level. Whether you're a
            beginner or aiming for advanced skills, every path is completely
            free with no fees or hidden costs.
          </p>
        </div>

        {/* --- Pricing Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
