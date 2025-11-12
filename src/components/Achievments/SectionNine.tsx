import React from "react";
import Image from "next/image";

// Define the structure for a success story
interface SuccessStory {
  title: string;
  logo: string; // Path to the company logo image
  description: string;
  logoAlt: string;
}

// Data for the three success stories
const stories: SuccessStory[] = [
  {
    title: "limango",
    logo: "/images/limango-logo-white.svg", // Placeholder path
    description:
      "limango used gamification to drive user engagement and triple buying frequency",
    logoAlt: "Limango Logo",
  },
  {
    title: "EQUIVA",
    logo: "/images/equiva-logo-white.svg", // Placeholder path
    description:
      "EQUIVA doubled purchase frequency and saved EUR 68,000 with loyalty app–powered referrals",
    logoAlt: "EQUIVA Logo",
  },
  {
    title: "dacadOO",
    logo: "/images/dacadOO-logo-white.svg", // Placeholder path
    description:
      "dacadOO's digital health app boosted user activation by 62% with gamification",
    logoAlt: "dacadOO Logo",
  },
];

const SectionNine: React.FC = () => {
  return (
    // Main container with light background color
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* --- Header Section --- */}
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-2">
          Success stories
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-16">
          See how Open Loyalty helps brands grow their business
        </h2>

        {/* --- Success Stories Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {stories.map((story, index) => (
            <div key={index} className="flex flex-col">
              {/* Card Top: Logo and Background */}
              <div className="bg-[#5939A5] rounded-xl p-8 h-48 flex justify-center items-center overflow-hidden relative">
                {/* Background image effect (simulating the faint people in the background) */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{
                    backgroundImage: "url(/images/card-background-pattern.jpg)",
                  }}
                ></div>

                {/* Logo */}
                <Image
                  src={story.logo}
                  alt={story.logoAlt}
                  width={200}
                  height={80}
                  className="object-contain max-h-full max-w-full z-10"
                />
              </div>

              {/* Card Bottom: Text Content */}
              <div className="mt-4 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {story.title}
                </h3>
                <p className="text-base text-gray-600">{story.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- Call to Action Button --- */}
        <button className="inline-flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-purple-600 hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
          See all success stories
        </button>
      </div>
    </div>
  );
};

export default SectionNine;
