"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface BootcampProps {
  id: number;
  weeks: string;
  sessions: string;
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

const bootcamps: BootcampProps[] = [
  {
    id: 1,
    weeks: "8 Weeks",
    sessions: "36 Sessions",
    title: "Web Development Fundamentals",
    description:
      "Learn the basics of web development from scratch! This course covers HTML, CSS, and JavaScript, helping you understand how websites are built and function. Perfect for beginners looking to start their coding journey.",
    imageSrc:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
  },
  {
    id: 2,
    weeks: "12 Weeks",
    sessions: "48 Sessions",
    title: "Front-End Web Development",
    description:
      "Learn how to create stunning, interactive websites using HTML, CSS, and JavaScript. This course covers modern front-end frameworks like React to help you build user-friendly web applications.",
    imageSrc:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
  },
  {
    id: 3,
    weeks: "12 Weeks",
    sessions: "60 Sessions",
    title: "Back-End Development",
    description:
      "Master back-end programming with Node.js, Express, and SQL databases. Learn to build robust APIs, implement user authentication, and create scalable web applications that can handle complex tasks.",
    imageSrc:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
  },
];

const BootcampCard: React.FC<
  BootcampProps & { isVisible: boolean; index: number }
> = ({
  weeks,
  sessions,
  title,
  description,
  imageSrc,
  link,
  isVisible,
  index,
}) => {
  const slideFromLeftTitles = [
    "Web Development Fundamentals",
    "Back-End Development",
  ];
  const fromLeft = slideFromLeftTitles.includes(title);

  const baseClasses =
    "flex flex-col md:flex-row bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden w-full max-w-5xl mx-auto group";

  const transformClasses = isVisible
    ? "translate-x-0 opacity-100"
    : fromLeft
      ? "translate-x-[-100vw] opacity-0"
      : "translate-x-[100vw] opacity-0";

  return (
    <div
      className={`${baseClasses} transform transition-all duration-[1800ms] ease-out ${transformClasses}`}
      style={{ transitionDelay: isVisible ? `${index * 600}ms` : "0ms" }}
    >
      <div className="relative w-full md:w-[45%] h-64 md:h-auto min-h-[300px]">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex-1 p-8 flex flex-col justify-center">
        <div className="flex gap-3 mb-5">
          <span className="px-4 py-1.5 text-xs font-medium text-black dark:text-white border border-gray-400 dark:border-gray-700 rounded-lg">
            {weeks}
          </span>
          <span className="px-4 py-1.5 text-xs font-medium text-black dark:text-white border border-gray-400 dark:border-gray-700 rounded-lg">
            {sessions}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
          {title}
        </h3>

        <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed mb-8 pr-4">
          {description}
        </p>

        <div>
          <Link
            href={link}
            className="inline-block text-black dark:text-white font-semibold text-sm border-b border-black dark:border-white pb-1 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-700 dark:hover:border-gray-300 transition-none"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

const BootcampsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white dark:bg-black min-h-screen py-20 px-4 md:px-8 font-sans transition-colors duration-0 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-20 space-y-4 transform transition-all duration-[1200ms] ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-40 opacity-0"
          }`}
        >
          <span className="text-green-500 dark:text-green-400 font-semibold text-sm tracking-wide uppercase">
            What You'll Learn?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tight">
            Our Coding Bootcamps
          </h2>
          <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed pt-2">
            Explore our intensive coding bootcamps designed to equip you with
            in-demand skills. Choose the right program, learn from experts, and
            kickstart your tech career.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-8 mb-15">
          {bootcamps.map((bootcamp, index) => (
            <BootcampCard
              key={bootcamp.id}
              {...bootcamp}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-green-300 dark:bg-green-700 text-black dark:text-white font-bold text-sm py-4 px-10 rounded-full shadow-[0_0_20px_rgba(197,242,136,0.3)] hover:bg-green-400 dark:hover:bg-green-600 transition-none">
            View All Bootcamps
          </button>
        </div>
      </div>
    </section>
  );
};

export default BootcampsSection;
