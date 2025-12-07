"use client";
import React from "react";
import {
    FileText,
    FileSpreadsheet,
    MessageSquare,
    RefreshCw,
    HardHat,
    Video,
} from "lucide-react";
import { motion } from "framer-motion";

const projectItems = [
    {
        icon: <FileText className="w-6 h-6 text-white" />,
        title: "Immigration Form Automation (Legal Tech)",
        text: "AI-driven form extraction, validation, and autofill workflows.",
    },
    {
        icon: <FileSpreadsheet className="w-6 h-6 text-white" />,
        title: "PDF Bank Statement Parser (Fintech/Accounting)",
        text: "Converted unstructured PDF data into structured financial records.",
    },
    {
        icon: <MessageSquare className="w-6 h-6 text-white" />,
        title: "Google Review Auto-Responder (Local SEO)",
        text: "Automated sentiment-aware responses for business reviews.",
    },
    {
        icon: <RefreshCw className="w-6 h-6 text-white" />,
        title: "Notion–Calendar Sync Engine (Productivity)",
        text: "Synced tasks and events between Notion and calendar apps.",
    },
    {
        icon: <HardHat className="w-6 h-6 text-white" />,
        title: "Construction Daily Log Automation (Blue Collar)",
        text: "AI assistant for materials, schedules, and incident logging.",
    },
    {
        icon: <Video className="w-6 h-6 text-white" />,
        title: "Influencer Clip Maker (Social Media)",
        text: "Auto-generated short-form highlight clips for creators.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
        },
    },
};

const MajorProjects: React.FC = () => {
    return (
        <section className="py-20 bg-white dark:bg-[#0b0f14] overflow-hidden">
            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h4 className="text-sm font-bold text-[#0E9F9F] uppercase tracking-wider mb-3">
                    Portfolio
                </h4>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    Major Projects
                </h2>
            </motion.div>

            {/* Cards Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6"
            >
                {projectItems.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        className="group relative bg-gray-50 dark:bg-[#151b24] rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                            {React.cloneElement(item.icon as React.ReactElement, {
                                className: "w-24 h-24 text-[#0E9F9F]",
                            } as any)}
                        </div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-[#0E9F9F] flex items-center justify-center shadow-lg shadow-[#0E9F9F]/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#0E9F9F] transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default MajorProjects;
