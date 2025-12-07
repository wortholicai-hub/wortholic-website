"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTASection: React.FC = () => {
    return (
        <section className="py-24 bg-white dark:bg-[#0b0f14] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0E9F9F]/5 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                >
                    Ready to Build the Future?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
                >
                    Let&apos;s collaborate to turn your innovative ideas into reality with our expert team of developers and AI researchers.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#0E9F9F] rounded-full hover:bg-[#087f7f] transition-all duration-300 shadow-lg shadow-[#0E9F9F]/25 hover:shadow-[#0E9F9F]/40 hover:-translate-y-1"
                    >
                        Get in Touch
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
