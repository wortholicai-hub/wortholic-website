"use client";

import React, { useState } from "react";
import Link from "next/link";

// --- Data Configuration ---
const locations = [
  {
    id: 1,
    type: "Offline",
    location: "Jakarta",
    title: "Class A",
    description:
      "Join our Jakarta campus for hands-on learning in a structured classroom environment. Get direct mentorship, collaborate with peers, and build real projects with expert guidance.",
    // Image: Classroom setting
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
    // Image: Collaborative workspace
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
    // Image: Person working remotely
    image:
      "https://images.pexels.com/photos/4064230/pexels-photo-4064230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const BootcampLocations = () => {
  // State to track which card is currently expanded (Default: 1 / Class A)
  const [activeId, setActiveId] = useState<number>(1);

  // Helper to get the active image based on selection
  const activeImage =
    locations.find((l) => l.id === activeId)?.image || locations[0].image;

  return (
    <section className="bg-black min-h-screen flex items-center justify-center py-20 px-4 md:px-8 font-sans text-white">
      <div className="max-w-7xl w-full mx-auto">
        {/* --- Header Section --- */}
        <div className="mb-12">
          <h4 className="text-[#4ade80] font-medium text-sm tracking-wide mb-3">
            Bootcamp Locations
          </h4>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Join Us at Our Convenient <br />
            Locations or Online
          </h2>
        </div>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT COLUMN: Accordion List */}
          <div className="flex flex-col gap-4">
            {locations.map((item) => {
              const isActive = activeId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`
                    relative overflow-hidden rounded-3xl border transition-all duration-300 cursor-pointer
                    ${
                      isActive
                        ? "bg-[#050505] border-gray-800 py-8 px-8"
                        : "bg-black border-gray-800 py-6 px-8 hover:border-gray-600"
                    }
                  `}
                >
                  {/* Badge Pill */}
                  <div className="inline-flex items-center border border-[#4ade80] rounded-full p-[3px] mb-6">
                    <span
                      className={`
                      px-4 py-1 rounded-full text-xs font-bold transition-colors text-black bg-[#4ade80]
                    `}
                    >
                      {item.type}
                    </span>
                    <span className="px-4 text-xs font-medium text-white">
                      {item.location}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>

                  {/* Expandable Content (Description + Link) */}
                  <div
                    className={`
                      transition-all duration-500 ease-in-out overflow-hidden
                      ${isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                    `}
                  >
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
                      {item.description}
                    </p>

                    <Link
                      href="#"
                      className="inline-block text-white font-medium text-sm border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors"
                    >
                      View Location Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Image Display */}
          <div className="relative w-full h-[400px] lg:h-auto min-h-[500px] rounded-3xl overflow-hidden">
            {/* Using standard img tag for reliable rendering */}
            <img
              src={activeImage}
              alt="Bootcamp Location"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BootcampLocations;
