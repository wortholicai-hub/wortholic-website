import React from "react";
import Image from "next/image";
import Link from "next/link";

// --- Data Configuration with Mentor Details ---
const mentors = [
  {
    id: 1,
    name: "John Harden",
    role: "Full-Stack Web Development",
    avatar:
      "https://images.pexels.com/photos/3762804/pexels-photo-3762804.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    name: "Emily Johnson",
    role: "Front-End Web Development",
    avatar:
      "https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    name: "Michael Davis",
    role: "Mobile App Development",
    avatar:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    name: "Sarah Lee",
    role: "Backend Development and Databases",
    avatar:
      "https://images.pexels.com/photos/3771801/pexels-photo-3771801.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

// --- Main Component ---
const MeetMentorsSection = () => {
  return (
    <section className="bg-white dark:bg-black py-20 px-4 md:px-8 font-sans text-black dark:text-white">
      <div className="max-w-7xl mx-auto">
        {/* --- Header & CTA Row --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          {/* Left: Heading Block */}
          <div className="space-y-4 mb-8 md:mb-0">
            <span className="text-[#0E9F9F] font-medium text-sm tracking-wide uppercase">
              Meet Professional Mentors
            </span>

            <h2 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white">
              Learn from the Experts <br />
              Behind Your Success
            </h2>
          </div>

          {/* Right: CTA Button */}
          <div>
            <Link
              href="#"
              className="inline-block border border-black dark:border-white hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white px-6 py-3.5 rounded-xl text-sm font-medium"
            >
              View All Mentors
            </Link>
          </div>
        </div>

        {/* --- Mentors Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl mb-4">
                <Image
                  src={mentor.avatar}
                  alt={mentor.name}
                  fill
                  className="object-cover group-hover:scale-[1.03] duration-200"
                />
              </div>

              {/* Text Content */}
              <div className="text-center md:text-left space-y-1">
                <h4 className="text-black dark:text-white font-medium text-lg">
                  {mentor.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                  {mentor.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetMentorsSection;
