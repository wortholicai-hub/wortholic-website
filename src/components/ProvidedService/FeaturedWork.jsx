"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FiCpu, FiSmartphone, FiUsers } from "react-icons/fi";
import { HiOutlineCloudUpload, HiOutlineShieldCheck } from "react-icons/hi";

const featuresBySection = {
  apps: [
    {
      icon: FiSmartphone,
      title: "Web & Mobile Apps",
      description: "Responsive, fast, and scalable products for every screen.",
    },
    {
      icon: FiCpu,
      title: "Optimized to Scale",
      description: "Flexible engineering designed to grow with your business.",
    },
    {
      icon: FiUsers,
      title: "Smooth UX",
      description: "Clear journeys and polished interactions that feel reliable.",
    },
  ],
  "ai-products": [
    {
      icon: FiCpu,
      title: "Intelligent Automation",
      description: "AI workflows that reduce manual effort and speed up output.",
    },
    {
      icon: HiOutlineCloudUpload,
      title: "Model Integration",
      description: "Production-ready pipelines for prediction, ranking, and search.",
    },
    {
      icon: HiOutlineShieldCheck,
      title: "Reliable by Design",
      description: "Secure, observable systems built for real customer usage.",
    },
  ],
  "ai-ml": [
    {
      icon: FiCpu,
      title: "Predictive Analytics",
      description: "Turn operational data into forecasts, signals, and decisions.",
    },
    {
      icon: HiOutlineCloudUpload,
      title: "Custom ML Models",
      description: "Models tuned around your data, workflows, and business goals.",
    },
    {
      icon: FiUsers,
      title: "Continuous Learning",
      description: "Adaptive systems that improve as usage and data evolve.",
    },
  ],
  automation: [
    {
      icon: FiCpu,
      title: "Process Optimization",
      description: "Automate repetitive work and tighten operational bottlenecks.",
    },
    {
      icon: HiOutlineShieldCheck,
      title: "RPA Integration",
      description: "Reliable robotic workflows for repeatable business tasks.",
    },
    {
      icon: FiUsers,
      title: "Workflow Visibility",
      description: "Clear orchestration, approvals, and handoffs across teams.",
    },
  ],
  educators: [
    {
      icon: FiUsers,
      title: "Personalized Learning",
      description: "Adaptive experiences tuned for learner pace and context.",
    },
    {
      icon: FiCpu,
      title: "Intelligent Tutoring",
      description: "Natural language support for guided, interactive learning.",
    },
    {
      icon: HiOutlineCloudUpload,
      title: "Outcome Insights",
      description: "Reporting and analytics that help improve teaching results.",
    },
  ],
  crm: [
    {
      icon: FiUsers,
      title: "Customer Intelligence",
      description: "Smarter account context and stronger relationship tracking.",
    },
    {
      icon: FiCpu,
      title: "Lead Scoring",
      description: "Prioritize the best opportunities with predictive insight.",
    },
    {
      icon: HiOutlineShieldCheck,
      title: "Sales Automation",
      description: "Automate outreach, follow-ups, and pipeline busywork.",
    },
  ],
};

const compactText = (text = "", maxLength = 260) => {
  const cleanText = text.replace(/\s+/g, " ").trim();

  if (cleanText.length <= maxLength) {
    return cleanText;
  }

  return `${cleanText.slice(0, maxLength).trimEnd()}...`;
};

const FeaturedWork = ({
  topBgColor = "bg-transparent",
  titleText,
  descriptionText,
  additionalClass = "",
  cardsData = [],
  sectionType = "apps",
}) => {
  const features = featuresBySection[sectionType] || featuresBySection.apps;
  const showcaseCards = cardsData.slice(0, 4);

  return (
    <section className={`w-full ${topBgColor} ${additionalClass}`}>
      <div className="h-full w-full bg-white dark:bg-[#0f0f0f]">
        <div className="mx-auto flex h-full max-w-[1500px] items-center px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid h-full w-full gap-6 rounded-[18px] border border-[#0f4043]/12 bg-white p-5 shadow-[0_24px_90px_rgba(15,64,67,0.08)] dark:border-white/10 dark:bg-[#101818] md:p-7 xl:grid-cols-[0.9fr_1.1fr] xl:gap-8">
            <div className="flex h-full flex-col">
              <div className="max-w-xl">
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#101828] sm:text-4xl xl:text-[3rem] xl:leading-[1.02] dark:text-white">
                  {titleText}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#475467] dark:text-[#9aa8aa]">
                  {compactText(descriptionText, 360)}
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                {features.map((feature) => {
                  const IconComponent = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="grid grid-cols-[44px_1fr] gap-3 rounded-[12px] border border-[#0f4043]/10 bg-white px-4 py-4 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#101828] text-white dark:bg-white dark:text-[#101828]">
                        <IconComponent className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-[#101828] dark:text-white">
                          {feature.title}
                        </h3>
                        <p className="mt-1 text-xs leading-6 text-[#667085] dark:text-[#98a2b3]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-auto grid gap-3 border-t border-[#0f4043]/12 pt-6 dark:border-white/10 sm:grid-cols-2 sm:items-center">
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 justify-self-start rounded-[8px] border border-[#101828] px-4 py-2 text-sm font-medium text-[#101828] transition-colors hover:bg-[#101828] hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#101828]"
                  >
                    View portfolio
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/support"
                    className="inline-flex items-center gap-2 justify-self-start rounded-[8px] border border-[#0E9F9F] bg-[#0E9F9F] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0f4043] hover:border-[#0f4043] sm:justify-self-end"
                  >
                    Start a project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
              </div>
            </div>

            <div className="flex h-full flex-col">
              <div className="mb-4 flex justify-end">
                {cardsData.length > 4 ? (
                  <Link
                    href="/portfolio"
                    className="hidden text-sm font-medium text-[#101828] transition-colors hover:text-[#0E9F9F] dark:text-white dark:hover:text-[#8bd7d1] md:inline-flex"
                  >
                    +{cardsData.length - 4} more
                  </Link>
                ) : null}
              </div>

              <div className="grid flex-1 gap-4 md:grid-cols-2">
                {showcaseCards.map((card, index) => {
                  const isLeadCard = showcaseCards.length === 3 && index === 0;

                  return (
                    <a
                      key={`${card.title}-${index}`}
                      href={card.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`group overflow-hidden rounded-[14px] border border-[#101828]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-[2px] hover:border-[#0E9F9F]/30 hover:shadow-md dark:border-white/10 dark:bg-white/[0.04] ${
                        isLeadCard ? "md:col-span-2 md:grid md:grid-cols-[1.12fr_0.88fr]" : "flex flex-col"
                      }`}
                    >
                      <div
                        className={`relative overflow-hidden bg-[#dbe7e6] ${
                          isLeadCard ? "h-52 md:h-full" : "h-36"
                        }`}
                      >
                        <Image
                          src={card.img}
                          alt={card.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </div>

                      <div className="flex flex-1 flex-col p-4">
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <span className="inline-flex items-center rounded-[6px] bg-[#101828] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white dark:bg-white dark:text-[#101828]">
                            Live project
                          </span>

                          <span className="inline-flex items-center gap-1 text-xs font-medium text-[#0f4043] dark:text-[#8bd7d1]">
                            Visit site
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </span>
                        </div>

                        <h4 className="text-xl font-semibold tracking-[-0.02em] text-[#101828] dark:text-white">
                          {card.title}
                        </h4>

                        <p className="mt-3 text-sm leading-6 text-[#475467] dark:text-[#98a2b3]">
                          {compactText(card.desc, isLeadCard ? 170 : 110)}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
