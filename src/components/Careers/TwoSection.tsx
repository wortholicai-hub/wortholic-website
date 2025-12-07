import React from "react";

// Data for each step in the joining path
interface Step {
  id: number;
  title: string;
  imageSrc: string;
  imageAlt: string;
}

const joiningSteps: Step[] = [
  {
    id: 1,
    title: "Application & Review",
    imageSrc:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=400&h=400",
    imageAlt:
      "Resume review and application processing.",
  },
  {
    id: 2,
    title: "Technical Assessment",
    imageSrc:
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=400&h=400",
    imageAlt:
      "Code on a screen, representing technical skills evaluation.",
  },
  {
    id: 3,
    title: "Culture Fit Interview",
    imageSrc:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400&h=400",
    imageAlt:
      "Two people talking in a relaxed office setting.",
  },
  {
    id: 4,
    title: "Offer & Onboarding",
    imageSrc:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=400&h=400",
    imageAlt:
      "Shaking hands and welcoming a new team member.",
  },
];

const TwoSection: React.FC = () => {
  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black overflow-x-hidden transition-colors duration-0">
      <div className="max-w-7xl mx-auto text-center">
        {/* --- Header --- */}
        <h2 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white">
          Your Path to Joining Wortholic
        </h2>

        {/* --- Steps Container --- */}
        <div className="relative flex flex-col md:flex-row justify-center items-center md:items-start space-y-16 md:space-y-0 md:gap-2 lg:gap-4 xl:gap-8">
          {joiningSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="relative flex flex-col items-center text-center w-full md:flex-1 md:max-w-[200px] lg:max-w-[240px] z-10">
                {/* Circular Image Container */}
                <div className="relative w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 sm:border-[5px] lg:border-[6px] shadow-lg mb-6 border-black dark:border-white">
                  <img
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Step Number and Title */}
                <p className="text-xl sm:text-2xl font-bold px-2 text-black dark:text-white">
                  {step.id}. {step.title}
                </p>
              </div>

              {/* Dotted connector line */}
              {index < joiningSteps.length - 1 && (
                <div
                  className="hidden md:flex items-center justify-center flex-shrink-0"
                  style={{ marginTop: "80px" }}
                >
                  <div className="w-8 lg:w-12 xl:w-16 border-t-2 border-dotted border-gray-400 dark:border-gray-600"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwoSection;
