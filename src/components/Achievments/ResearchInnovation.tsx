"use client";
import React from "react";
import {
    Mic,
    Calendar,
    Scale,
    Image as ImageIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const researchItems = [
    {
        icon: <Mic className="w-6 h-6 text-white" />,
        title: "Naturalflow.ai — Low-Latency Voice AI Platform",
        text: "Designed a voice AI system for SMEs, achieving ultra-low latency, model orchestration, and scalable audio pipelines.",
    },
    {
        icon: <Calendar className="w-6 h-6 text-white" />,
        title: "Calendar Booking Rotation Optimization",
        text: "Researched algorithms for fair and efficient scheduling automation.",
    },
    {
        icon: <Scale className="w-6 h-6 text-white" />,
        title: "RAG for Legal Research",
        text: "Developed retrieval-augmented systems for legal case summarization and document analysis.",
    },
    {
        icon: <ImageIcon className="w-6 h-6 text-white" />,
        title: "Government Image Processing Project (Italy)",
        text: "Applied machine learning for automated garbage classification and evaluation.",
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const ResearchInnovation: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-[#0b0f14] overflow-hidden">
            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h4 className="text-sm font-bold text-[#0E9F9F] uppercase tracking-wider mb-3">
                    Innovation
                </h4>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    Research & Innovation
                </h2>
            </motion.div>

            {/* Cards Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6"
            >
                {researchItems.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="group relative bg-white dark:bg-[#151b24] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 overflow-hidden"
                    >
                        {/* Hover Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0E9F9F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0E9F9F] to-[#087f7f] flex items-center justify-center shadow-lg shadow-[#0E9F9F]/20 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#0E9F9F] transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default ResearchInnovation;
