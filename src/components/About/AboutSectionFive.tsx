"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
} from "react-icons/fa";

// Types for props
type ReviewCardProps = {
  stars: number;
  text: string;
  reviewer: string;
  company: string;
};

type AwardBadgeProps = {
  topText: string;
  mainText: string;
  bottomText: string;
};

const AboutSectionFive: React.FC = () => {
  const reviews: ReviewCardProps[] = [
    {
      stars: 5,
      text: "Wortholic is a very good partner. They do their work perfectly.",
      reviewer: "Technical Leader & System Engineer",
      company: "MycoWorks",
    },
    {
      stars: 5,
      text: "They&apos;re very knowledgeable about technology solutions.",
      reviewer: "Project Manager",
      company: "NEC Financial Services",
    },
    {
      stars: 5,
      text: "We achieved great results, we&apos;re happy with those outcomes, and now have an ongoing relationship with Wortholic.",
      reviewer: "COO & CTO",
      company: "Elite Athlete Service Inc",
    },
    {
      stars: 5,
      text: "The Wortholic team was responsive, proactive, and consistently delivered high-quality solutions.",
      reviewer: "Head of Product Development",
      company: "TechWave Solutions",
    },
    {
      stars: 5,
      text: "They quickly understood our needs and provided scalable solutions that exceeded expectations.",
      reviewer: "Operations Director",
      company: "Greenfield Logistics",
    },
    {
      stars: 5,
      text: "Communication was excellent, and the project was delivered ahead of schedule.",
      reviewer: "CEO",
      company: "BrightPath Digital",
    },
    {
      stars: 5,
      text: "Wortholic&apos;s expertise transformed our processes, making them more efficient and effective.",
      reviewer: "Innovation Manager",
      company: "FutureEdge Technologies",
    },
    {
      stars: 5,
      text: "Professional, detail-oriented, and highly skilled — they&apos;re a trusted partner for our long-term goals.",
      reviewer: "CTO",
      company: "NextGen Healthcare",
    },
  ];

  const awards: AwardBadgeProps[] = [
    {
      topText: "TOP APP MODERNIZATION SERVICE",
      mainText: "Wortholic",
      bottomText: "",
    },
    {
      topText: "TOP ERP CONSULTING COMPANY",
      mainText: "Wortholic",
      bottomText: "",
    },
    {
      topText: "TOP AI-Powered SaaS Applications",
      mainText: "Wortholic",
      bottomText: "",
    },
    {
      topText: "TOP AI, Web, and apps",
      mainText: "Wortholic",
      bottomText: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  }, [reviews.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  }, [reviews.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const ReviewCard: React.FC<ReviewCardProps> = ({
    stars,
    text,
    reviewer,
    company,
  }) => (
    <div className="flex w-full max-w-md flex-col rounded-xl bg-white p-8 text-left shadow-lg transition-transform duration-700 ease-in-out dark:bg-gray-800 dark:shadow-gray-900">
      <div className="mb-4 flex text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={
              i < stars ? "text-yellow-500" : "text-gray-300 dark:text-gray-500"
            }
          />
        ))}
      </div>
      <p className="text-lg leading-relaxed text-gray-700 italic dark:text-gray-200">
        {`"${text}"`}
      </p>
      <div className="mt-6 border-t border-gray-200 pt-4 dark:border-gray-700">
        <p className="font-semibold text-gray-800 dark:text-gray-100">
          {reviewer}
        </p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {company}
        </p>
      </div>
      <div className="mt-4 flex items-center text-sm text-green-600 dark:text-green-400">
        <FaCheckCircle className="mr-2" />
        <span>Verified Review</span>
      </div>
    </div>
  );

  const AwardBadge: React.FC<AwardBadgeProps> = ({
    topText,
    mainText,
    bottomText,
  }) => (
    <div className="relative flex h-56 w-48 items-center justify-center">
      <div className="absolute inset-0 rotate-12 transform rounded-xl bg-white shadow-md dark:bg-gray-700 dark:shadow-gray-900"></div>
      <div className="absolute inset-0 -rotate-12 transform rounded-xl bg-white shadow-md dark:bg-gray-700 dark:shadow-gray-900"></div>
      <div className="relative z-10 flex flex-col items-center justify-center rounded-xl bg-white p-6 text-center shadow-lg dark:bg-gray-800 dark:shadow-gray-900">
        <p className="text-sm leading-tight font-bold text-gray-800 uppercase dark:text-gray-200">
          {topText}
        </p>
        <div className="mt-2 text-3xl font-extrabold text-[#0E9F9F] dark:text-orange-400">
          {mainText}
        </div>
        <p className="mt-2 text-xs text-gray-500 uppercase dark:text-gray-400">
          {bottomText}
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 px-4 py-6 font-sans dark:bg-black">
      <h1 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white text-center">
        What People Are Saying
      </h1>

      {/* Review Section */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center justify-between text-gray-800 md:flex-row dark:text-gray-200">
          <h2 className="text-3xl font-bold">
            Client&apos;s Reviews
          </h2>
          <div className="mt-4 flex items-center md:mt-0">
            <span className="mr-2 text-xl font-semibold">5.0</span>
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="ml-2 text-base text-gray-500 dark:text-gray-400">
              22 reviews
            </span>
          </div>
        </div>

        {/* Slider */}
        <div className="relative mx-auto w-full max-w-3xl">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-md transition-transform duration-300 hover:scale-110 dark:bg-gray-800 dark:shadow-gray-900"
          >
            <FaChevronLeft
              className="text-gray-600 dark:text-gray-300"
              size={24}
            />
          </button>

          {/* Slider Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex w-full flex-none justify-center px-2"
                >
                  <ReviewCard {...review} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-md transition-transform duration-300 hover:scale-110 dark:bg-gray-800 dark:shadow-gray-900"
          >
            <FaChevronRight
              className="text-gray-600 dark:text-gray-300"
              size={24}
            />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center space-x-2">
          {reviews.map((_, i) => (
            <span
              key={i}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${i === currentIndex
                ? "bg-gray-900 dark:bg-gray-100"
                : "bg-gray-300 dark:bg-gray-500"
                }`}
            />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto my-6 max-w-6xl border-t border-gray-300 dark:border-gray-700"></div>

      {/* Awards */}
      {/* <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 py-12">
          {awards.map((award, index) => (
            <AwardBadge key={index} {...award} />
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default AboutSectionFive;
