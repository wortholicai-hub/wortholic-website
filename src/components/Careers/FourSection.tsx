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
    title: "A Truly Global\nWorkforce",
    imageSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=900&fit=crop",
    imageAlt:
      "Diverse group of people smiling together, representing a global workforce.",
  },
  {
    id: 2,
    title: "Diverse\nPerspectives",
    imageSrc:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=900&fit=crop",
    imageAlt:
      "A mixed group of people laughing, symbolizing diverse perspectives.",
  },
  {
    id: 3,
    title: "Seamless\nCollaboration",
    imageSrc:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=900&fit=crop",
    imageAlt:
      "People collaborating on a couch with laptops, symbolizing teamwork.",
  },
  {
    id: 4,
    title: "Opportunities\nWithout Limits",
    imageSrc:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=900&fit=crop",
    imageAlt:
      "Person standing on a mountain peak with arms outstretched, looking at the horizon.",
  },
];

const FourSection: React.FC = () => {
  const tealColor = "#00BFA6";

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

        <h2 className="text-5xl sm:text-6xl font-black text-black dark:text-white leading-tight mb-4 transition-none">
          Connecting Talent Across the World
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-16 max-w-5xl mx-auto transition-none">
          At Wortholic, we take pride in our global presence, bringing together
          talented individuals from diverse cultures and regions to create
          impactful solutions. Here's what makes our global team exceptional.
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
