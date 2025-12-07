"use client";
import React from "react";
import {
    Brain,
    FileText,
    MessageSquare,
    Calendar,
    Hammer,
    Video,
    Database,
    Bot,
    ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Naturalflow.ai",
        category: "Voice AI Platform",
        description:
            "A voice AI platform for small to medium businesses to achieve low latency and efficient model orchestration.",
        icon: <Bot className="w-5 h-5" />,
    },
    {
        title: "Garbage System AI",
        category: "Machine Learning",
        description:
            "Image processing with Machine Learning for the Italian government's garbage management system.",
        icon: <Database className="w-5 h-5" />,
    },
    {
        title: "Immigration Form Bottleneck",
        category: "Legal Tech",
        description:
            "Streamlining complex immigration forms to reduce processing time and errors.",
        icon: <FileText className="w-5 h-5" />,
    },
    {
        title: "PDF Bank Statement Parser",
        category: "Fintech / Accounting",
        description:
            "Automated parsing of bank statements from PDFs for seamless accounting integration.",
        icon: <FileText className="w-5 h-5" />,
    },
    {
        title: "Google Review Auto-Responder",
        category: "Local SEO",
        description:
            "Intelligent auto-responder for Google Reviews to enhance local SEO and customer engagement.",
        icon: <MessageSquare className="w-5 h-5" />,
    },
    {
        title: "Notion-Calendar Sync",
        category: "Productivity",
        description:
            "Bridging the gap between Notion and Calendar apps for unified schedule management.",
        icon: <Calendar className="w-5 h-5" />,
    },
    {
        title: "Construction Daily Log",
        category: "Blue Collar Tech",
        description:
            "Digital daily logging system tailored for the construction industry.",
        icon: <Hammer className="w-5 h-5" />,
    },
    {
        title: "Influencer Clip Maker",
        category: "Social Media",
        description:
            "Automated tool for creating engaging clips for influencers from longer content.",
        icon: <Video className="w-5 h-5" />,
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
};

const ProjectsGrid: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50 dark:bg-[#0b0f14] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[30%] bg-[#0E9F9F]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#0E9F9F]/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-[#0E9F9F]/10 text-[#0E9F9F] text-xs font-semibold mb-3">
                        PORTFOLIO
                    </span>
                    <h2 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white tracking-tight">
                        Featured <span className="text-[#0E9F9F]">Projects</span>
                    </h2>
                    <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
                        Innovative solutions delivering real-world impact across industries.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group relative bg-white dark:bg-[#18222e] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-[#0E9F9F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2.5 rounded-lg bg-[#0E9F9F]/10 text-[#0E9F9F] group-hover:bg-[#0E9F9F] group-hover:text-white transition-colors duration-300">
                                    {project.icon}
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#0E9F9F] transition-colors duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </div>

                            <div className="mb-3">
                                <span className="text-[10px] font-bold text-[#0E9F9F] uppercase tracking-wider opacity-80">
                                    {project.category}
                                </span>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1 group-hover:text-[#0E9F9F] transition-colors duration-300">
                                    {project.title}
                                </h3>
                            </div>

                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                {project.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsGrid;
