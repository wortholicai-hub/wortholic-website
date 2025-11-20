import React from "react";
import Image from "next/image";
import Link from "next/link";

// --- Data Configuration ---
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

// --- Main Component ---
const NewsAndInsightsSection = () => {
  return (
    <section className="bg-black py-24 px-4 md:px-8 font-sans text-white">
      <div className="max-w-7xl mx-auto">
        {/* --- Top Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          {/* Left: Title Block */}
          <div className="space-y-4 mb-8 md:mb-0 max-w-lg">
            <span className="text-[#4ade80] font-medium text-sm tracking-wide uppercase">
              Blog & News
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
              Recode Bootcamp News <br />& Insights
            </h2>
          </div>

          {/* Right: Description & Button */}
          <div className="text-right flex flex-col items-end space-y-6">
            <p className="text-gray-400 text-sm max-w-xs md:max-w-none">
              Stay updated with coding tips, success stories, and bootcamp news!
            </p>
            <Link
              href="#"
              className="inline-block border border-white hover:bg-white/10 text-white px-6 py-3.5 rounded-xl transition-all duration-300 text-sm font-medium"
            >
              View All Post
            </Link>
          </div>
        </div>

        {/* --- Main Articles Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT COLUMN: Featured Article */}
          <div className="bg-[#080808] rounded-xl overflow-hidden border border-white/5 transition-all duration-300 hover:border-[#4ade80]/20">
            {/* Image */}
            <div className="relative w-full h-64 md:h-80 overflow-hidden">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
              {/* Category Badge over image */}
              <span className="absolute top-4 left-4 bg-[#4ade80] text-black text-xs font-bold px-3 py-1 rounded-full">
                {featuredArticle.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <p className="text-gray-400 text-sm mb-2">
                {featuredArticle.date}
              </p>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {featuredArticle.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {featuredArticle.description}
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: List of Smaller Articles */}
          <div className="flex flex-col space-y-6">
            {smallArticles.map((article) => (
              <div
                key={article.id}
                className="flex items-center gap-4 bg-[#080808] rounded-xl overflow-hidden border border-white/5 transition-all duration-300 hover:border-[#4ade80]/20 p-4"
              >
                {/* Small Image */}
                <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-grow">
                  <p className="text-gray-400 text-xs mb-1">
                    <span className="font-semibold text-white">
                      {article.category}
                    </span>{" "}
                    {article.date}
                  </p>
                  <h4 className="text-base font-semibold text-white leading-snug">
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
