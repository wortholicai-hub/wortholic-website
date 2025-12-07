import React from "react";
import Image from "next/image";
import Link from "next/link";

const featuredArticle = {
  id: 1,
  category: "Coding Tips",
  date: "January 17, 2025",
  title: "Master JavaScript in 30 Days: A Complete Guide",
  description:
    "Discover effective strategies to learn JavaScript in just 30 days! Our step-by-step guide provides resources.",
  image:
    "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const smallArticles = [
  {
    id: 1,
    category: "Bootcamp Updates",
    date: "Jan 04, 2025",
    title: "Recode Bootcamp Launches New React Course!",
    image:
      "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    category: "Tech Trends",
    date: "Jan 05, 2025",
    title: "Top 5 Programming Languages to Learn in 2025",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    category: "Career Support",
    date: "Jan 03, 2025",
    title: "How Recode Bootcamp Helps You Land Your Dream Job",
    image:
      "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const NewsAndInsightsSection = () => {
  return (
    <section
      className="
        bg-white dark:bg-black 
        text-black dark:text-white
        transition-none
        py-24 px-4 md:px-8 font-sans
      "
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="space-y-4 mb-8 md:mb-0 max-w-lg">
            <span className="text-[#0E9F9F] font-medium text-sm tracking-wide uppercase">
              Blog & News
            </span>
            <h2 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white">
              Recode Bootcamp News <br />& Insights
            </h2>
          </div>

          <div className="text-right flex flex-col items-end space-y-6">
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs md:max-w-none">
              Stay updated with coding tips, success stories, and bootcamp news!
            </p>
            <Link
              href="#"
              className="inline-block border border-black dark:border-white text-black dark:text-white px-6 py-3.5 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 transition-none text-sm font-medium"
            >
              View All Post
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-[#080808] rounded-xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-[#4ade80]/50 transition-none">
            <div className="relative w-full h-64 md:h-80 overflow-hidden">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="object-cover"
              />
              <span className="absolute top-4 left-4 bg-[#0E9F9F] text-white text-xs font-bold px-3 py-1 rounded-full">
                {featuredArticle.category}
              </span>
            </div>

            <div className="p-6 md:p-8">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                {featuredArticle.date}
              </p>
              <h3 className="text-2xl font-semibold mb-3">
                {featuredArticle.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                {featuredArticle.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            {smallArticles.map((article) => (
              <div
                key={article.id}
                className="flex items-center gap-4 bg-gray-50 dark:bg-[#080808] rounded-xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-[#4ade80]/50 transition-none p-4"
              >
                <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <p className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                    <span className="font-semibold">{article.category}</span>{" "}
                    {article.date}
                  </p>
                  <h4 className="text-base font-semibold leading-snug">
                    {article.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndInsightsSection;
