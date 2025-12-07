import React from "react";

// Data for the benefits list with corresponding images
const benefitsList = [
  {
    text: "Competitive Salary",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800",
  },
  {
    text: "Health & Wellness",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
  },
  {
    text: "Remote-First Options",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f78536788c6?auto=format&fit=crop&q=80&w=800",
  },
  {
    text: "Learning Budget",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
  },
  {
    text: "Latest Hardware",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
  },
  {
    text: "Flexible Hours",
    image:
      "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&q=80&w=800",
  },
  {
    text: "Paid Time Off",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800",
  },
  {
    text: "Team Retreats",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    text: "Performance Bonuses",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
  },
  {
    text: "Home Office Stipend",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
  },
  {
    text: "Diverse Culture",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
  },
  {
    text: "Mentorship Programs",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
  },
];

const SixSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [activeImage, setActiveImage] = React.useState<string>(
    benefitsList[0].image
  );

  const tealColor = "#0E9F9F";

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-none overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-600 dark:text-gray-300 mb-2 transition-none">
          BENEFITS
        </p>

        <h2 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white transition-none">
          Why Join Us: Unlock Growth, Impact, and Opportunities
        </h2>

        {/* --- Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column: Benefits List */}
          <div className="text-2xl space-y-5">
            {benefitsList.map((benefit, index) => (
              <p
                key={index}
                className={`cursor-pointer transition-all duration-300 text-gray-900 dark:text-gray-200 ${hoveredIndex === index
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
