import React from "react";

// Data for the culture and lifestyle images
const cultureImagesRow1 = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600&h=400",
    alt: "Team collaboration",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=400",
    alt: "Office meeting",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600&h=400",
    alt: "Coding session",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600&h=400",
    alt: "Brainstorming",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600&h=400",
    alt: "Team strategy",
  },
];

const cultureImagesRow2 = [
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600&h=400",
    alt: "Remote work setup",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400",
    alt: "Tech workshop",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=600&h=400",
    alt: "Design review",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=400",
    alt: "Team lunch",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600&h=400",
    alt: "Hackathon",
  },
];

const FiveSection: React.FC = () => {
  return (
    <div className="relative py-20 px-0 bg-white dark:bg-black transition-none overflow-hidden">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 mb-12">
        {/* --- Header Section --- */}
        <h2 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white transition-none">
          Culture & Lifestyle
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-5xl mx-auto transition-none">
          Experience a vibrant work culture that celebrates creativity,
          collaboration, and milestones through unforgettable moments.
        </p>
      </div>

      {/* --- First Row: Scrolling Right to Left --- */}
      <div className="relative mb-4 overflow-hidden">
        <div className="flex animate-scroll-left">
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
