"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  logoText: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    logoText: "ALDO",
    quote:
      "The Open Loyalty customer loyalty program software allows us a lot of flexibility in building these dynamics and delivering a strong experience for our consumers",
    authorName: "Thomas Archer Bata",
    authorTitle: "ALDO Group",
    authorImage: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    logoText: "BRAND CO",
    quote:
      "Open Loyalty has transformed how we engage with our customers. The platform's flexibility and robust features have helped us create truly personalized loyalty experiences",
    authorName: "Sarah Johnson",
    authorTitle: "Brand Co",
    authorImage: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    logoText: "TECH CORP",
    quote:
      "The gamification features and achievement system have significantly increased our customer engagement. We've seen a 40% increase in repeat purchases since implementation",
    authorName: "Michael Chen",
    authorTitle: "Tech Corp",
    authorImage: "https://i.pravatar.cc/150?img=8",
  },
];

const SectionSix: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const itv = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(itv);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (i: number) => setCurrentIndex(i);

  return (
    <div className="flex justify-center items-center py-20 px-4 bg-gray-50 dark:bg-[#0b0f14] transition-colors">
      <div className="relative bg-[#F9F7F5] dark:bg-[#11161d] rounded-3xl shadow-sm px-8 sm:px-16 lg:px-24 py-12 max-w-5xl w-full mx-auto text-center overflow-hidden transition-colors">
        {/* Slides */}
        <div className="relative min-h-[400px] flex items-center justify-center">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
            >
              {/* Logo */}
              <h3 className="text-2xl font-normal tracking-[0.3em] text-gray-800 dark:text-gray-200 mb-8 transition-colors">
                {item.logoText}
              </h3>

              {/* Quote */}
              <p className="text-xl sm:text-2xl lg:text-3xl font-normal text-gray-900 dark:text-white leading-relaxed mb-8 px-4 sm:px-8 transition-colors">
                {item.quote}
              </p>

              {/* Author Image */}
              <Image
                src={item.authorImage}
                alt={item.authorName}
                width={56}
                height={56}
                className="rounded-full mx-auto object-cover mb-4"
              />

              {/* Author Name */}
              <p className="text-base font-semibold text-gray-900 dark:text-white transition-colors">
                {item.authorName}
              </p>

              {/* Author Title */}
              <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
                {item.authorTitle}
              </p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${index === currentIndex
                ? "bg-gray-700 dark:bg-white"
                : "bg-gray-300 dark:bg-gray-600"
                }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-gray-800 text-[#0E9F9F] dark:text-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-gray-800 text-[#0E9F9F] dark:text-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SectionSix;
