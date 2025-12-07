import React from "react";
import { FaCode, FaRocket, FaCogs, FaBuilding } from "react-icons/fa";

const AboutSectionSix: React.FC = () => {
  return (
    <section className="bg-gray-100 py-6 transition-colors duration-300 dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white text-center">
          Our Core Competencies
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 text-center">
          {/* Card 1 */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-white/20 p-8 text-gray-900 shadow-lg backdrop-blur-md transition-colors duration-300 dark:bg-gray-800 dark:text-gray-100">
            <div className="mb-4 text-5xl text-gray-900 dark:text-white flex justify-center">
              <FaCode />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-center">
              Vocation
            </h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
              Our company is pedestal on proposal, inspiration and acquaintance.
              We are pleased with what we do and pompous to incorporate an
              organization that compliments values.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-white/20 p-8 text-gray-900 shadow-lg backdrop-blur-md transition-colors duration-300 dark:bg-gray-800 dark:text-gray-100">
            <div className="mb-4 text-5xl text-gray-900 dark:text-white flex justify-center">
              <FaRocket />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-center">
              Experience and Know-How
            </h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
              We always learn something new in every project we take and we
              never forget to use that skill in every new project. In the end,
              learning is experience, everything else is just information.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-white/20 p-8 text-gray-900 shadow-lg backdrop-blur-md transition-colors duration-300 dark:bg-gray-800 dark:text-gray-100">
            <div className="mb-4 text-5xl text-gray-900 dark:text-white flex justify-center">
              <FaCogs />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-center">
              Operational Expertise
            </h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
              We have always kept client satisfaction in the forefront and this
              has resulted in implementation of Quality Management Program,
              governing all our activities and processes.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-white/20 p-8 text-gray-900 shadow-lg backdrop-blur-md transition-colors duration-300 dark:bg-gray-800 dark:text-gray-100">
            <div className="mb-4 text-5xl text-gray-900 dark:text-white flex justify-center">
              <FaBuilding />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-center">
              Cost Effectiveness
            </h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
              Not only do we provide competitive rates but our resources are
              smart enough to stay one step ahead, thereby saving your money in
              the long run.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionSix;
// six section
