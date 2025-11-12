"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Testimonial data structure
interface Testimonial {
  id: number;
  logoText: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
}

// Testimonial data (3 testimonials)
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

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <div className="flex justify-center items-center py-20 px-4 bg-gray-50">
      <div className="relative bg-[#F9F7F5] rounded-3xl shadow-sm px-8 sm:px-16 lg:px-24 py-12 max-w-5xl w-full mx-auto text-center overflow-hidden">
        {/* Slides Container */}
        <div className="relative min-h-[400px] flex items-center justify-center">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Company Logo Text */}
              <div className="mb-8">
                <h3 className="text-2xl font-normal tracking-[0.3em] text-gray-800">
                  {item.logoText}
                </h3>
              </div>

              {/* Quote */}
              <p className="text-xl sm:text-2xl lg:text-3xl font-normal text-gray-900 leading-relaxed mb-8 px-4 sm:px-8">
                {item.quote}
              </p>

              {/* Author Image */}
              <div className="mb-4">
                <img
                  src={item.authorImage}
                  alt={item.authorName}
                  className="w-14 h-14 rounded-full mx-auto object-cover"
                />
              </div>

              {/* Author Name and Title */}
              <p className="text-base font-semibold text-gray-900 mb-1">
                {item.authorName}
              </p>
              <p className="text-sm text-gray-600">{item.authorTitle}</p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === currentIndex ? "bg-gray-700" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-sm text-purple-600 hover:bg-gray-50 focus:outline-none transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-sm text-purple-600 hover:bg-gray-50 focus:outline-none transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SectionSix;
