import React from "react";
import { Check } from "lucide-react";

// --- Data Configuration ---
const pricingPlans = [
  {
    title: "Beginner Plan",
    price: 199,
    description:
      "Perfect for beginners who want to learn the fundamentals of programming.",
    features: [
      "Basic Web Development (HTML, CSS, JavaScript)",
      "Weekly Live Classes (2x per week)",
      "Recorded Lessons Access",
      "Small Project Assignments",
      "Community Support",
      "Coding Challenges",
      "Career Guidance Sessions",
    ],
  },
  {
    title: "Ultimate Plan",
    price: 899,
    description:
      "Best for those who want an immersive bootcamp experience with career support.",
    features: [
      "Everything in Pro Plan +",
      "Personalized Career Coaching",
      "Exclusive Tech Industry Networking",
      "Certificate of Completion",
      "Priority Access to Workshops",
      "Professional Portfolio Review",
      "Job Referral Assistance",
    ],
  },
  {
    title: "Pro Plan",
    price: 499,
    description:
      "Ideal for those who want a complete curriculum and an intensive learning experience.",
    features: [
      "Everything in Beginner Plan +",
      "Full-Stack Development (React, Node.js, Database)",
      "Live Mentorship & 1-on-1 Code Review",
      "Real-World Projects & Portfolio Building",
      "Resume & Job Interview Training",
      "Job Placement Assistance",
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
    <div className="bg-[#080808] border border-white/5 rounded-2xl p-8 flex flex-col transition-all duration-300 hover:border-[#4ade80]/50 shadow-xl">
      {/* Price Block */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm max-w-[200px] mb-6">
          {description}
        </p>

        <div className="flex items-end">
          <span className="text-6xl font-bold text-white leading-none tracking-tight">
            ${price}
          </span>
          <span className="text-xl text-gray-400 font-medium ml-1 mb-1">
            /month
          </span>
        </div>
      </div>

      {/* CTA Button */}
      <button className="w-full border border-white/30 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:bg-white/10 mb-8 text-sm font-medium">
        Choose Plan
      </button>

      {/* Feature List */}
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-white text-sm">
            <div className="flex-shrink-0 mt-0.5">
              {/* Custom green bullet point using Lucide Check */}
              <Check className="w-4 h-4 text-[#4ade80] mr-2" strokeWidth={3} />
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
    <section className="bg-black py-24 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* --- Header Section --- */}
        <div className="mb-16">
          <span className="text-[#4ade80] font-medium text-sm tracking-wide uppercase">
            Pricing Plan
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-3 mb-5">
            Flexible Pricing Plans for Every Learner
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Choose a plan that fits your goals! Whether you're looking for a
            full-time immersive experience or a self-paced option, we offer
            flexible pricing to help you invest in your tech career with ease.
          </p>
        </div>

        {/* --- Pricing Grid --- */}
        {/* Note: The structure is set to match the visual order: Beginner, Ultimate, Pro */}
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
