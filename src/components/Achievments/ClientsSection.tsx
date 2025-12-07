"use client";
import React from "react";
import { User, ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";

const clients = [
    {
        name: "Shariann Carlo",
        role: "Writer, Director, and Producer",
        description: "Collaborated on creative projects and digital presence.",
        link: "#",
    },
    {
        name: "Nathan Bentley",
        role: "Steal My Agency",
        description: "Strategic partnership and development for agency growth.",
        link: "https://www.stealmyagency.com/",
    },
    {
        name: "NAMI Navigator Charlotte",
        role: "Organization",
        description: "Supporting mental health initiatives through digital solutions.",
        link: "https://www.naminavigatorcharlotte.org/",
    },
];

const ClientsSection: React.FC = () => {
    return (
        <section className="py-16 bg-white dark:bg-[#0b0f14] relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-[#0E9F9F]/10 text-[#0E9F9F] text-xs font-semibold mb-3">
                        PARTNERSHIPS
                    </span>
                    <h2 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white">
                        VIP Clients & <span className="text-[#0E9F9F]">Partners</span>
                    </h2>
                    <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                        Trusted by visionaries and organizations to build the future.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-gray-50 dark:bg-[#18222e] rounded-xl p-6 text-center hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:shadow-lg"
                        >
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Star className="w-4 h-4 text-[#0E9F9F] fill-[#0E9F9F]" />
                            </div>

                            <div className="mx-auto w-16 h-16 bg-[#0E9F9F]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0E9F9F] transition-colors duration-300">
                                <User className="w-8 h-8 text-[#0E9F9F] group-hover:text-white transition-colors duration-300" />
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                {client.name}
                            </h3>
                            <p className="text-[#0E9F9F] font-medium mb-3 uppercase text-[10px] tracking-wide">{client.role}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                                {client.description}
                            </p>

                            {client.link !== "#" && (
                                <a
                                    href={client.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-xs font-semibold shadow-sm hover:shadow hover:text-[#0E9F9F] dark:hover:text-[#0E9F9F] transition-all duration-300 border border-gray-200 dark:border-gray-700"
                                >
                                    Visit Website <ExternalLink className="ml-2 w-3 h-3" />
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
