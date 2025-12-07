"use client";

import ProjectsGrid from "@/components/Achievments/ProjectsGrid";
import ClientsSection from "@/components/Achievments/ClientsSection";
import ResearchSection from "@/components/Achievments/ResearchSection";
import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <main className="bg-white text-gray-800 dark:bg-[#0b0f14] dark:text-gray-200 transition-colors duration-300 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#0E9F9F]/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E9F9F] to-cyan-500">Achievements</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A showcase of our impactful projects, valued partnerships, and
              groundbreaking research in AI and automation.
            </p>
          </motion.div>
        </div>
      </section>

      <ProjectsGrid />
      <ResearchSection />
      <ClientsSection />
    </main>
  );
};

export default Achievements;
