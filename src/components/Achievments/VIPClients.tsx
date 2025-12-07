"use client";
import React from "react";
import { Building2, User } from "lucide-react";
import { motion } from "framer-motion";

const companies = [
    "Naturalflow.ai",
    "NAMI Navigator Charlotte",
    "StealMyAgency.com (Built solutions for their client Nathan Bentley)",
];

const individuals = ["Shariann Carlo — Writer, Director, Producer"];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
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

const VIPClients: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-[#0b0f14] overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h4 className="text-sm font-bold text-[#0E9F9F] uppercase tracking-wider mb-3">
                        Partnerships
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                        VIP Clients & Collaborations
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Companies Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-[#151b24] rounded-3xl p-10 shadow-sm border border-gray-100 dark:border-gray-800 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-10 opacity-5">
                            <Building2 className="w-40 h-40 text-[#0E9F9F]" />
                        </div>

                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="p-4 bg-[#0E9F9F]/10 dark:bg-[#0E9F9F]/20 rounded-2xl">
                                <Building2 className="w-8 h-8 text-[#0E9F9F] dark:text-[#0E9F9F]" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Companies / Organizations
                            </h3>
                        </div>

                        <motion.ul
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-4 relative z-10"
                        >
                            {companies.map((company, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                                >
                                    <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0E9F9F] flex-shrink-0 shadow-[0_0_10px_#0E9F9F]" />
                                    <span className="text-gray-700 dark:text-gray-300 text-lg font-medium">
                                        {company}
                                    </span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Individuals Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-[#151b24] rounded-3xl p-10 shadow-sm border border-gray-100 dark:border-gray-800 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-10 opacity-5">
                            <User className="w-40 h-40 text-[#0E9F9F]" />
                        </div>

                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="p-4 bg-[#0E9F9F]/10 dark:bg-[#0E9F9F]/20 rounded-2xl">
                                <User className="w-8 h-8 text-[#0E9F9F] dark:text-[#0E9F9F]" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Individuals
                            </h3>
                        </div>

                        <motion.ul
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-4 relative z-10"
                        >
                            {individuals.map((individual, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                                >
                                    <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0E9F9F] flex-shrink-0 shadow-[0_0_10px_#0E9F9F]" />
                                    <span className="text-gray-700 dark:text-gray-300 text-lg font-medium">
                                        {individual}
                                    </span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VIPClients;
