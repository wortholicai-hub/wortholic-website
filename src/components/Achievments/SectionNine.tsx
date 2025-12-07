// Updated SectionNine with instant theme transition and dark mode text adjustments
import React from "react";
import Image from "next/image";

interface SuccessStory {
  title: string;
  logo: string;
  description: string;
  logoAlt: string;
}

const stories: SuccessStory[] = [
  {
    title: "limango",
    logo: "/images/limango-logo-white.svg",
    description:
      "limango used gamification to drive user engagement and triple buying frequency",
    logoAlt: "Limango Logo",
  },
  {
    title: "EQUIVA",
    logo: "/images/equiva-logo-white.svg",
    description:
      "EQUIVA doubled purchase frequency and saved EUR 68,000 with loyalty app–powered referrals",
    logoAlt: "EQUIVA Logo",
  },
  {
    title: "dacadOO",
    logo: "/images/dacadOO-logo-white.svg",
    description:
      "dacadOO's digital health app boosted user activation by 62% with gamification",
    logoAlt: "dacadOO Logo",
  },
];

const SectionNine: React.FC = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-none">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-semibold text-[#0E9F9F] uppercase tracking-widest mb-2 dark:text-[#0E9F9F] transition-none">
          Success stories
        </p>
        <h2 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white transition-none">
          See how Open Loyalty helps brands grow their business
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {stories.map((story, index) => (
            <div key={index} className="flex flex-col">
              <div className="bg-gray-900 dark:bg-gray-800 rounded-xl p-8 h-48 flex justify-center items-center overflow-hidden relative transition-none">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{
                    backgroundImage: "url(/images/card-background-pattern.jpg)",
                  }}
                ></div>
                <Image
                  src={story.logo}
                  alt={story.logoAlt}
                  width={200}
                  height={80}
                  className="object-contain max-h-full max-w-full z-10"
                />
              </div>

              <div className="mt-4 text-left">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-none mb-1">
                  {story.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300 transition-none">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="inline-flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-[#0E9F9F] hover:bg-[#0a7a7a] transition-colors dark:bg-[#0E9F9F] dark:hover:bg-[#0a7a7a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0E9F9F] transition-none">
          See all success stories
        </button>
      </div>
    </div>
  );
};

export default SectionNine;
