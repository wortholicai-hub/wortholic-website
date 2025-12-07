"use client";
import React from "react";
import { Search, Clock, BrainCircuit, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const researchItems = [
    {
        title: "RAG Firms & Legal Research",
        category: "AI Research",
        description:
            "Advanced research into Retrieval-Augmented Generation (RAG) for legal firms to enhance document analysis and case research.",
        icon: <Search className="w-5 h-5 text-white" />,
    },
    {
        title: "Waited Rotation of Calendar Booking",
        category: "Algorithm Optimization",
        description:
            "Developing optimized algorithms for fair and efficient calendar booking rotations in high-demand environments.",
        icon: <Clock className="w-5 h-5 text-white" />,
    },
];

const ResearchSection: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
            {/* Abstract Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0E9F9F] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0E9F9F] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-4 h-4 text-[#0E9F9F]" />
                            <span className="text-[#0E9F9F] font-bold tracking-wider text-xs">INNOVATION LAB</span>
                        </div>

                        <h2 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white">
                            Pushing the boundaries of <span className="text-[#0E9F9F]">Possibility</span>
                        </h2>

                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            Our dedicated research initiatives focus on solving complex algorithmic challenges and applying cutting-edge AI to traditional industries.
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-[#0E9F9F]/10 dark:bg-white/10 backdrop-blur-sm rounded-xl border border-[#0E9F9F]/20 dark:border-white/10">
                                <BrainCircuit className="w-8 h-8 text-[#0E9F9F]" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-base">
                                    Continuous Improvement
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Always learning, always evolving.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="lg:w-1/2 grid gap-4 w-full">
                        {researchItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group bg-white dark:bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-gray-200 dark:border-white/10 hover:shadow-lg dark:hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="p-3 rounded-xl bg-[#0E9F9F] shadow-lg group-hover:scale-105 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <span className="text-[10px] font-bold text-[#0E9F9F] uppercase tracking-wider mb-1 block">
                                                {item.category}
                                            </span>
                                            <ArrowRight className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-[#0E9F9F] dark:group-hover:text-white group-hover:translate-x-1 transition-all" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResearchSection;
