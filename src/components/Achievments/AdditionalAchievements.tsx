"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
    "Delivered automation and AI systems across legal tech, fintech, government, SEO, construction, and creator economy.",
    "Experience with RAG systems, model orchestration, and voice AI infrastructure.",
    "Worked with SMEs, creators, agencies, and government-related projects.",
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const AdditionalAchievements: React.FC = () => {
    return (
        <section className="py-20 bg-white dark:bg-[#0b0f14] overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h4 className="text-sm font-bold text-[#0E9F9F] uppercase tracking-wider mb-3">
                        Highlights
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                        Additional Achievements
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-50 dark:bg-[#151b24] rounded-3xl p-10 shadow-sm border border-gray-100 dark:border-gray-800"
                >
                    <motion.ul
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {achievements.map((item, index) => (
                            <motion.li
                                key={index}
                                variants={itemVariants}
                                className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white dark:hover:bg-gray-800/50 transition-colors duration-300"
                            >
                                <div className="mt-1 bg-[#0E9F9F]/10 p-2 rounded-full flex-shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-[#0E9F9F]" />
                                </div>
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                                    {item}
                                </p>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </div>
        </section>
    );
};

export default AdditionalAchievements;
