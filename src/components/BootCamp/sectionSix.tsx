"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const locations = [
  {
    id: 1,
    type: "Offline",
    location: "Jakarta",
    title: "Class A",
    description:
      "Join our Jakarta campus for hands-on learning in a structured classroom environment. Get direct mentorship, collaborate with peers, and build real projects with expert guidance.",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    type: "Offline",
    location: "Bandung",
    title: "Class B",
    description:
      "Experience our intensive bootcamp in the heart of Bandung. Enjoy a creative atmosphere, dedicated workspace, and the same high-quality curriculum and mentorship as our capital campus.",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    type: "Online",
    location: "Zoom Meeting",
    title: "Class Remote",
    description:
      "Learn from anywhere in the world with our fully remote option. Live interactive sessions, virtual breakout rooms, and digital community support ensure you never learn alone.",
    image:
      "https://images.pexels.com/photos/4064230/pexels-photo-4064230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const BootcampLocations = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const [isVisible, setIsVisible] = useState(false);

  const leftRef = useRef<HTMLDivElement>(null);

  const activeImage =
    locations.find((l) => l.id === activeId)?.image || locations[0].image;

  useEffect(() => {
    const onScroll = () => {
      if (!leftRef.current) return;
      const rect = leftRef.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8 font-sans
      bg-white text-gray-900
      dark:bg-black dark:text-white
      "
    >
      <div className="max-w-7xl w-full mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Animated container for header + accordion */}
          <div
            ref={leftRef}
            className={`flex flex-col gap-12
              transform transition-transform duration-[1500ms] ease-out
              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }
            `}
          >
            {/* Header */}
            <div>
              <h4 className="text-[#0E9F9F] font-medium text-sm tracking-wide mb-3 dark:text-[#0E9F9F]">
                Bootcamp Locations
              </h4>
              <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                Join Us at Our Convenient <br />
                Locations or Online
              </h2>
            </div>

            {/* Accordion */}
            <div className="flex flex-col gap-4">
              {locations.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`relative overflow-hidden rounded-3xl border cursor-pointer py-6 px-8 hover:border-gray-400
                      ${
                        isActive
                          ? "bg-gray-50 border-gray-300 shadow-md dark:bg-transparent dark:border-gray-700"
                          : "bg-white border-gray-200 dark:bg-transparent dark:border-gray-700 dark:hover:border-gray-600"
                      }
                    `}
                  >
                    {/* Badge Pill */}
                    <div className="inline-flex items-center border border-[#0E9F9F] rounded-full p-[3px] mb-6">
                      <span className="px-4 py-1 rounded-full text-xs font-bold text-white bg-[#0E9F9F]">
                        {item.type}
                      </span>
                      <span className="px-4 text-xs font-medium text-gray-700 dark:text-gray-300">
                        {item.location}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold mb-4">
                      {item.title}
                    </h3>

                    {/* Expandable Content */}
                    <div
                      className={`
                        transition-all duration-500 ease-in-out overflow-hidden
                        ${isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                      `}
                    >
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
                        {item.description}
                      </p>
                      <Link
                        href="#"
                        className="inline-block text-[#0E9F9F] font-medium text-sm border-b border-[#0E9F9F] pb-1 hover:text-[#0E9F9F] hover:border-[#0E9F9F] dark:text-[#0E9F9F] dark:border-[#0E9F9F] dark:hover:text-[#0E9F9F] dark:hover:border-[#0E9F9F]"
                      >
                        View Location Details
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative w-full h-[400px] lg:h-auto min-h-[500px] rounded-3xl overflow-hidden shadow-lg">
            <img
              src={activeImage}
              alt="Bootcamp Location"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            />
            {/* Overlay for light/dark */}
            <div className="absolute inset-0 bg-white/20 dark:bg-black/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BootcampLocations;
