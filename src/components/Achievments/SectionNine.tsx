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
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-2 dark:text-indigo-400 transition-none">
          Success stories
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight mb-16 transition-none">
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

        <button className="inline-flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-purple-600 hover:bg-purple-700 transition-colors dark:bg-purple-700 dark:hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-none">
          See all success stories
        </button>
      </div>
    </div>
  );
};

export default SectionNine;
