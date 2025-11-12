import React from "react";

// Data for each career pathway card
interface CareerPathway {
  id: number;
  title: string;
  imageSrc: string;
  imageAlt: string;
}

const careerPathways: CareerPathway[] = [
  {
    id: 1,
    title: "Associate\nSoftware Engineer",
    imageSrc:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop",
    imageAlt: "Associate Software Engineer",
  },
  {
    id: 2,
    title: "Software Engineer",
    imageSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop",
    imageAlt: "Software Engineer",
  },
  {
    id: 3,
    title: "Senior Software\nEngineer",
    imageSrc:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=800&fit=crop",
    imageAlt: "Senior Software Engineer",
  },
  {
    id: 4,
    title: "Associate Team\nLead",
    imageSrc:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop",
    imageAlt: "Associate Team Lead",
  },
  {
    id: 5,
    title: "Team Lead",
    imageSrc:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=800&fit=crop",
    imageAlt: "Team Lead",
  },
];

const ThreeSection: React.FC = () => {
  const tealColor = "#00BFA6";

  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <div className="mb-12">
          <p
            className="text-sm font-bold uppercase tracking-wider mb-3"
            style={{ color: tealColor }}
          >
            CAREER PATHWAYS
          </p>
          <h2 className="text-5xl sm:text-6xl font-black text-black leading-tight mb-4">
            Your Growth, Our Priority
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl">
            At Wortholic, we provide a clear and rewarding path to help you
            achieve your professional aspirations.
          </p>
        </div>

        {/* --- Career Cards Section --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 lg:gap-4 justify-items-center">
          {careerPathways.map((pathway) => (
            <div
              key={pathway.id}
              className="relative w-full max-w-[240px] h-[320px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={pathway.imageSrc}
                alt={pathway.imageAlt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Title Text - Positioned at top left */}
              <div className="absolute top-6 left-6 text-white z-20">
                <h3 className="text-xl font-bold leading-tight">
                  {pathway.title.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < pathway.title.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* --- Call to Action Button --- */}
        <div className="mt-12 text-center">
          <button
            className="inline-flex justify-center py-4 px-10 border-none rounded-full shadow-lg text-base font-bold text-white transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2"
            style={{ backgroundColor: tealColor }}
          >
            Explore Opportunities
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreeSection;
