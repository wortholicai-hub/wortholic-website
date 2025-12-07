"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
    { label: "Projects Delivered", value: "100+", suffix: "" },
    { label: "Happy Clients", value: "50+", suffix: "" },
    { label: "Client Satisfaction", value: "98", suffix: "%" },
    { label: "Years Experience", value: "5+", suffix: "" },
];

const StatsSection: React.FC = () => {
    return (
        <section className="py-10 bg-gray-50 dark:bg-[#0b0f14] border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                                {stat.value}
                                <span className="text-[#0E9F9F]">{stat.suffix}</span>
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
