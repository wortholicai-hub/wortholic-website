"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Code2,
  Palette,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

type TechnologyCard = {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
};

const technologyCards: TechnologyCard[] = [
  {
    title: "Front-End Development",
    description:
      "Build polished interfaces with fast interactions, resilient state, and responsive layouts across devices.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    icon: Code2,
  },
  {
    title: "Back-End Development",
    description:
      "Develop secure backend systems, clean APIs, and scalable services that hold up under real production load.",
    tags: ["Node.js", "Python", "Go", "PostgreSQL"],
    icon: Server,
  },
  {
    title: "AI and Machine Learning",
    description:
      "Ship practical AI features with modern model orchestration, evaluation loops, and production-ready pipelines.",
    tags: ["OpenAI", "LangChain", "PyTorch", "Vector DBs"],
    icon: Sparkles,
  },
  {
    title: "Mobile Development",
    description:
      "Launch mobile experiences with stable performance, shared business logic, and native-quality user flows.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    icon: Smartphone,
  },
  {
    title: "UX/UI Design",
    description:
      "Translate ideas into wireframes, design systems, and product interfaces that stay consistent as teams scale.",
    tags: ["Figma", "Prototyping", "Design Systems", "Accessibility"],
    icon: Palette,
  },
  {
    title: "QA and Testing",
    description:
      "Validate releases with automated coverage, critical-path testing, and tooling that catches regressions early.",
    tags: ["Playwright", "Jest", "Cypress", "Postman"],
    icon: ShieldCheck,
  },
];

export default function ToolsAndTechnologies() {
  return (
    <section className="bg-white px-4 py-24 transition-colors dark:bg-[#0f0f0f] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#0E9F9F] dark:text-[#5eead4]">
              Tools & Technologies
            </p>
            <h2 className="max-w-5xl text-4xl font-semibold tracking-[-0.04em] text-[#101828] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.02] dark:text-white">
              Get full-stack coverage.
              <br className="hidden sm:block" />
              Unblock execution across the SDLC.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#4b5563] dark:text-[#9ca3af]">
              The stack behind Wortholic covers product design, application
              engineering, AI delivery, testing, and launch support so projects
              move without handoff friction.
            </p>
          </div>

          <Link
            href="/#services"
            className="group inline-flex items-center gap-2 self-start border-b border-[#101828] pb-2 text-sm font-medium text-[#101828] transition-colors hover:text-[#2563eb] hover:border-[#2563eb] dark:border-white dark:text-white dark:hover:border-[#60a5fa] dark:hover:text-[#60a5fa]"
          >
            Everything we do
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {technologyCards.map(({ title, description, tags, icon: Icon }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-[14px] border border-[#e7ebf3] bg-white p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-[2px] hover:scale-[1.02] hover:border-black hover:shadow-md dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent dark:from-white/5" />

              <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#101828] text-white shadow-sm dark:bg-white dark:text-[#101828]">
                <Icon className="h-7 w-7" strokeWidth={2.15} />
              </div>

              <h3 className="relative text-[1.85rem] font-semibold leading-tight tracking-[-0.03em] text-[#101828] dark:text-white">
                {title}
              </h3>

              <p className="relative mt-4 max-w-[34ch] text-sm leading-7 text-[#475467] dark:text-[#98a2b3]">
                {description}
              </p>

              <div className="relative mt-6 flex flex-wrap gap-2.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-[6px] border border-[#101828] bg-white px-3 py-1 text-xs font-medium text-[#101828] transition-colors hover:border-[#0E9F9F] hover:bg-[#0E9F9F] hover:text-white dark:border-white dark:bg-[#101828] dark:text-white dark:hover:border-[#0E9F9F] dark:hover:bg-[#0E9F9F] dark:hover:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
