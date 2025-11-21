"use client";
import React, { useEffect, useRef, useState } from "react";

// --- Data Configuration with Placeholder Avatars ---
const testimonials = [
  {
    id: 1,
    quote:
      "Recode offers high-quality training that significantly enhanced my skills. The knowledge I gained was invaluable, and the conducive classroom atmosphere truly supported my learning process.",
    name: "Lucas Moore",
    role: "Web Developer",
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
  },
  {
    id: 2,
    quote:
      "I am very happy with my learning experience at Recode. I gained a lot of programming and soft skills from the experienced trainers. The comfortable classroom environment really supported my learning process.",
    name: "Amanda Smith",
    role: "Software Engineer",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
  },
  {
    id: 3,
    quote:
      "Recode offers excellent programming training. I also learned many soft skills from the professional trainers. The comfortable classroom environment really supported my learning process. Knowledge I gained was invaluable.",
    name: "Daniel Johnson",
    role: "Frontend Developer",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
  },
  {
    id: 4,
    quote:
      "My learning experience at Recode was truly amazing. I not only gained programming knowledge but also valuable soft skills from expert trainers. The conducive classroom environment made learning more enjoyable.",
    name: "Daniel Martinez",
    role: "Full Stack Developer",
    avatar:
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
  },
  {
    id: 5,
    quote:
      "At Recode, I can learn both programming and soft skills at the same time. The professional trainers and comfortable classroom atmosphere really motivated me to keep learning and growing.",
    name: "Michael Brown",
    role: "Backend Developer",
    avatar:
      "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
  },
  {
    id: 6,
    quote:
      "The learning process at Recode was truly outstanding. I felt supported by the lessons provided by the expert trainers. The comfortable classroom atmosphere made me even more motivated to continue developing.",
    name: "Olivia Garcia",
    role: "Mobile App Developer",
    avatar:
      "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
  },
];

// --- Sub-Component: Testimonial Card ---
const TestimonialCard: React.FC<(typeof testimonials)[0]> = ({
  quote,
  name,
  role,
  avatar,
}) => {
  return (
    <div
      className="relative bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:border-[#0E9F9F] transition-all duration-300 min-h-[300px]
      dark:bg-black dark:border-gray-700 dark:hover:border-[#0E9F9F]
    "
    >
      {/* --- Quote Bubble Icon --- */}
      <div
        className="absolute -top-4 -left-4 w-10 h-10 bg-[#0E9F9F] rounded-full flex items-center justify-center border-2 border-white
        dark:border-black
      "
      >
        {/* Simple white quote mark inside the green bubble */}
        <span className="text-white text-2xl font-bold leading-none select-none">
          ”
        </span>
      </div>

      {/* Testimonial Quote */}
      <p className="text-gray-800 text-sm leading-relaxed mb-6 italic dark:text-gray-300">
        {quote}
      </p>

      {/* Author/Profile Section */}
      <div className="flex items-center gap-4 mt-auto">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          {/* Using standard img tag for reliable rendering */}
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="text-gray-900 font-semibold text-base dark:text-gray-100">
            {name}
          </h4>
          <p className="text-gray-500 text-sm dark:text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
};

// --- Main Component with slower smooth animation from top ---
const AlumniSuccessStories = () => {
  const headerRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (!headerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(headerRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  return (
    <section className="bg-gray-50 py-24 px-4 md:px-8 font-sans dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section with scroll animation --- */}
        <div
          ref={headerRef}
          className={`text-center mb-16 space-y-4 transform transition-all duration-[2500ms] ease-in-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-24"}`}
        >
          <span className="text-[#0E9F9F] font-medium text-sm tracking-wide uppercase">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight dark:text-gray-100">
            Our Alumni's Success Stories
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed pt-2 dark:text-gray-300">
            Discover how our bootcamp has empowered students to achieve their
            career goals through real-life success stories and testimonials.
          </p>
        </div>

        {/* --- Testimonials Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniSuccessStories;
