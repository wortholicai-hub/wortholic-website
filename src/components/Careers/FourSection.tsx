import React from "react";

// Data for each global career feature card
interface GlobalFeature {
  id: number;
  title: string;
  imageSrc: string;
  imageAlt: string;
}

const globalFeatures: GlobalFeature[] = [
  {
    id: 1,
    title: "Remote-First\nCulture",
    imageSrc: "/images/careers/remote-work-culture.png",
    imageAlt:
      "Person working remotely from a home office.",
  },
  {
    id: 2,
    title: "Global\nCollaboration",
    imageSrc:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800&h=900",
    imageAlt:
      "Team collaborating across different time zones.",
  },
  {
    id: 3,
    title: "Asynchronous\nCommunication",
    imageSrc:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800&h=900",
    imageAlt:
      "Efficient communication tools on a laptop screen.",
  },
  {
    id: 4,
    title: "Work From\nAnywhere",
    imageSrc:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800&h=900",
    imageAlt:
      "Working from a beautiful location.",
  },
];

const FourSection: React.FC = () => {
  const tealColor = "#0E9F9F";

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-none overflow-x-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <p
          className="text-sm font-bold uppercase tracking-wider mb-3"
          style={{ color: tealColor }}
        >
          GLOBAL CAREERS
        </p>

        <h2 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white transition-none">
          Connecting Talent Across the World
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-16 max-w-5xl mx-auto transition-none">
          At Wortholic, we embrace a borderless world. Our remote-first approach allows us to bring together the best minds in AI and software development, regardless of where they are located.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {globalFeatures.map((feature) => (
            <div
              key={feature.id}
              className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-none"
            >
              <img
                src={feature.imageSrc}
                alt={feature.imageAlt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* Title */}
              <div className="absolute top-8 left-8 text-white text-left z-20 transition-none">
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                  {feature.title.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < feature.title.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FourSection;
