import React from "react";

// Data for the culture and lifestyle images
const cultureImagesRow1 = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop",
    alt: "Group photo at an event",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=400&fit=crop",
    alt: "Two women smiling at event",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    alt: "Outdoor event with many people",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=400&fit=crop",
    alt: "Group celebration with balloons",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
    alt: "Outdoor sports activity",
  },
];

const cultureImagesRow2 = [
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
    alt: "Women at indoor event",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&h=400&fit=crop",
    alt: "Interior event space",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
    alt: "Men in traditional attire at event",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
    alt: "Women in colorful traditional clothing",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
    alt: "Group of professionals smiling",
  },
];

const FiveSection: React.FC = () => {
  const tealColor = "#00BFA6";

  return (
    <div className="relative py-20 px-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 mb-12">
        {/* --- Header Section --- */}
        <h2 className="text-5xl sm:text-6xl font-black text-black leading-tight mb-4">
          Culture & Lifestyle
        </h2>
        <p className="text-lg text-gray-700 max-w-5xl mx-auto">
          Experience a vibrant work culture that celebrates creativity,
          collaboration, and milestones through unforgettable moments.
        </p>
      </div>

      {/* --- First Row: Scrolling Right to Left --- */}
      <div className="relative mb-4 overflow-hidden">
        <div className="flex animate-scroll-left">
          {/* Duplicate images for seamless loop */}
          {[
            ...cultureImagesRow1,
            ...cultureImagesRow1,
            ...cultureImagesRow1,
          ].map((image, index) => (
            <div
              key={`row1-${index}`}
              className="flex-none w-[400px] h-[280px] mx-2"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- Second Row: Scrolling Left to Right --- */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-right">
          {/* Duplicate images for seamless loop */}
          {[
            ...cultureImagesRow2,
            ...cultureImagesRow2,
            ...cultureImagesRow2,
          ].map((image, index) => (
            <div
              key={`row2-${index}`}
              className="flex-none w-[400px] h-[280px] mx-2"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default FiveSection;
