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
    title: "AI Engineer",
    imageSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600&h=800",
    imageAlt: "AI Engineer working on code",
  },
  {
    id: 2,
    title: "Full Stack\nDeveloper",
    imageSrc:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=600&h=800",
    imageAlt: "Full Stack Developer coding",
  },
  {
    id: 3,
    title: "UI/UX\nDesigner",
    imageSrc: "/images/careers/ui-ux-designer.png",
    imageAlt: "Designer working on wireframes",
  },
  {
    id: 4,
    title: "Project\nManager",
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=800",
    imageAlt: "Project Manager planning",
  },
  {
    id: 5,
    title: "QA\nEngineer",
    imageSrc:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=600&h=800",
    imageAlt: "QA Engineer testing software",
  },
];

const ThreeSection: React.FC = () => {
  const tealColor = "#0E9F9F";

  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black overflow-x-hidden transition-colors duration-0">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <div className="mb-12">
          <p
            className="text-sm font-bold uppercase tracking-wider mb-3"
            style={{ color: tealColor }}
          >
            CAREER PATHWAYS
          </p>

          <h2 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white">
            Your Growth, Our Priority
          </h2>

          <p className="text-lg max-w-4xl text-gray-700 dark:text-gray-300">
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

              {/* Title Text */}
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
            className="flex items-center justify-center rounded-[8px] border-1 border-[#0E9F9F] bg-[#0E9F9F] px-4 py-2 font-medium text-white shadow-md transition duration-300 hover:bg-white hover:text-[#0E9F9F] dark:hover:bg-black"
          >
            Explore Opportunities
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreeSection;
