"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Settings, Shield, Heart, Globe, Cpu, Sun, Moon } from "lucide-react";

export default function WhoWeAre() {
  const [darkMode, setDarkMode] = useState(false);

  // Persist mode between reloads
  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDarkMode(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  // Card types
  interface ImageCard {
    id: number;
    type: "imageCard";
    title: string;
    link: string;
    img: string;
    plusIcon: string;
  }

  interface StackedCard {
    id: number;
    type: "stacked";
    top: {
      bg: string;
      content: React.ReactNode;
      link: string;
      plusIcon: string;
    };
    bottom: {
      bg: string;
      title: string;
      img: string;
    };
  }

  interface ImageOnlyCard {
    id: number;
    type: "imageOnly";
    img: string;
  }

  interface DepartmentsCard {
    id: number;
    type: "departments";
  }

  type Card = ImageCard | StackedCard | ImageOnlyCard | DepartmentsCard;

  const cards: Card[] = [
    {
      id: 1,
      type: "imageCard",
      title: "AI driving real innovation",
      link: "#",
      img: "/images/who-we-are/500+.png",
      plusIcon: "/icons/plus-black.svg",
    },
    {
      id: 2,
      type: "stacked",
      top: {
        bg: "bg-gray-900 text-white dark:bg-gray-800",
        content: (
          <div className="flex flex-col justify-items items-center gap-4">
            <Shield className="h-10 w-10 text-white" />
            <h3 className="text-xl md:text-2xl text-white font-semibold max-w-[250px]">
              Secure Solutions
            </h3>
            <p>Systems that grow with your business and stay safe.</p>
          </div>
        ),
        link: "/positions",
        plusIcon: "/icons/plus-white.svg",
      },
      bottom: {
        bg: "bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100",
        title: "80% Less Overhead",
        img: "/images/who-we-are/house.png",
      },
    },
    {
      id: 3,
      type: "imageOnly",
      img: "/images/who-we-are/150+.png",
    },
    {
      id: 4,
      type: "departments",
    },
  ];

  return (
    <section className="bg-white py-10 transition-colors duration-300 dark:bg-black dark:text-gray-100">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
      {/* Theme Toggle */}

      {/* Section Title */}
      <div className="flex flex-col justify-items items-center gap-2 mb-10">
        <h2 className="text-center mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white">
          Who we are
        </h2>
        <p className="text-gray-600 text-center dark:text-gray-300">
          We build AI agents, AI-powered SaaS, and advanced digital solutions
          that go beyond traditional apps.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="mx-auto mb-16 grid max-w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => {
          // Image Card
          if (card.type === "imageCard") {
            return (
              <motion.div
                key={card.id}
                whileHover={{ y: -6 }}
                className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8 flex flex-col justify-items gap-4 items-center text-center flex-grow border border-gray-200 dark:border-gray-700">
                  <Settings className="h-10 w-10 text-black dark:text-white" />
                  <h3 className="text-xl md:text-2xl text-black dark:text-white font-semibold max-w-[250px]">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Transforming bold ideas into real impact with AI-driven
                    solutions.
                  </p>
                </div>
                <Image
                  src={card.img}
                  alt={card.title}
                  className="w-full h-52 object-cover"
                  width={400}
                  height={208}
                />
              </motion.div>
            );
          }

          // Stacked Card
          if (card.type === "stacked") {
            return (
              <div key={card.id} className="flex flex-col gap-6">
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`relative p-8 rounded-2xl shadow-sm text-center hover:shadow-xl transition-all duration-300 h-[260px] ${card.top.bg}`}
                >
                  {card.top.content}
                </motion.div>

                <motion.div
                  whileHover={{ y: -6 }}
                  className={`flex flex-col justify-items items-center p-8 rounded-2xl shadow-sm hover:shadow-xl text-center transition-all duration-300 flex flex-col justify-between h-[260px] ${card.bottom.bg}`}
                >
                  <Heart className="h-10 w-10 text-black dark:text-white" />
                  <h3 className="text-xl md:text-2xl text-black dark:text-white font-semibold max-w-[250px]">
                    {card.bottom.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Smarter tools automate reporting and help teams scale with
                    ease.
                  </p>
                </motion.div>
              </div>
            );
          }

          // Image Only
          if (card.type === "imageOnly") {
            return (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden w-full h-[540px]"
              >
                <Image
                  src={card.img}
                  alt="Departments"
                  className="rounded-2xl object-cover"
                  fill
                />
              </motion.div>
            );
          }

          // Departments Card
          if (card.type === "departments") {
            return (
              <div key={card.id} className="flex flex-col gap-4">
                <motion.div className="p-8 bg-gray-900 text-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer dark:bg-gray-800">
                  <div className="flex flex-col justify-items items-center text-center gap-4">
                    <Globe className="h-10 w-10 text-white" />
                    <h3 className="text-xl md:text-2xl text-white font-semibold max-w-[250px]">
                      Web & API-First
                    </h3>
                    <p>Responsive apps and APIs built to scale.</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -6 }}
                  className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-8 flex flex-col justify-between items-center text-center flex-grow border border-gray-200 dark:border-gray-700">
                    <Cpu className="h-10 w-10 text-black dark:text-white" />
                    <h3 className="text-xl md:text-2xl text-black dark:text-white font-semibold max-w-[250px]">
                      AI Assistants
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Smart suggestions, reviews, and debugging.
                    </p>
                  </div>
                  <Image
                    src="/images/who-we-are/5+.png"
                    alt="5+"
                    className="w-full h-52 object-cover"
                    width={400}
                    height={208}
                  />
                </motion.div>
              </div>
            );
          }

          return null;
        })}
      </div>
      </div>
    </section>
  );
}
