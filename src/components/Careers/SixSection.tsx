import React from "react";

// Data for the benefits list with corresponding images
const benefitsList = [
  {
    text: "Fuel Allowance",
    image:
      "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=800&q=80",
  },
  {
    text: "Outpatient (OPD) & Inpatient (IPD) Benefits",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
  },
  {
    text: "Workation Opportunities",
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
  },
  {
    text: "World-Class Gyms",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
  {
    text: "Exclusive Salons",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
  },
  {
    text: "Work from Home Options",
    image:
      "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?w=800&q=80",
  },
  {
    text: "Paid Leaves",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    text: "Skill Development Programs",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
  },
  {
    text: "Performance Bonuses",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
  },
  {
    text: "Tech Allowances",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
  },
  {
    text: "Diverse Work Culture",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    text: "Health and Wellness Programs",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
  },
];

const SixSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [activeImage, setActiveImage] = React.useState<string>(
    benefitsList[0].image
  );

  const tealColor = "#20C9AD";

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-none overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-600 dark:text-gray-300 mb-2 transition-none">
          BENEFITS
        </p>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-16 max-w-4xl transition-none">
          Why Join Us: Unlock Growth, Impact, and Opportunities
        </h2>

        {/* --- Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column: Benefits List */}
          <div className="text-2xl space-y-5">
            {benefitsList.map((benefit, index) => (
              <p
                key={index}
                className={`cursor-pointer transition-all duration-300 text-gray-900 dark:text-gray-200 ${
                  hoveredIndex === index
                    ? "flex items-center text-teal-600 dark:text-teal-400 font-semibold"
                    : ""
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  setActiveImage(benefit.image);
                }}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {hoveredIndex === index && (
                  <span className="w-2 h-2 bg-teal-600 dark:bg-teal-400 rounded-full inline-block mr-3 flex-shrink-0"></span>
                )}
                {benefit.text}
              </p>
            ))}
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src={activeImage}
              alt="Benefit illustration"
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixSection;
