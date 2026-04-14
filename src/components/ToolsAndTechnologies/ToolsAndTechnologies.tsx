"use client";

import type { LucideIcon } from "lucide-react";
import {
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
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Framer Motion",
      "Redux Toolkit",
      "shadcn/ui",
      "Responsive UI",
      "REST APIs",
    ],
    icon: Code2,
  },
  {
    title: "Back-End Development",
    description:
      "Develop secure backend systems, clean APIs, and scalable services that hold up under real production load.",
    tags: [
      "Node.js",
      "Express",
      "NestJS",
      "Python",
      "FastAPI",
      "Django",
      "Go",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "GraphQL",
      "REST APIs",
      "Docker",
    ],
    icon: Server,
  },
  {
    title: "AI and Machine Learning",
    description:
      "Ship practical AI features with modern model orchestration, evaluation loops, and production-ready pipelines.",
    tags: [
      "OpenAI",
      "Python",
      "LangChain",
      "LangGraph",
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "RAG",
      "Prompt Engineering",
      "Pinecone",
      "Vector DBs",
      "Model Evaluation",
    ],
    icon: Sparkles,
  },
  {
    title: "Mobile Development",
    description:
      "Launch mobile experiences with stable performance, shared business logic, and native-quality user flows.",
    tags: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Expo",
      "iOS",
      "Android",
      "Firebase",
      "Push Notifications",
      "App Store",
      "Play Store",
      "Mobile UI",
    ],
    icon: Smartphone,
  },
  {
    title: "UX/UI Design",
    description:
      "Translate ideas into wireframes, design systems, and product interfaces that stay consistent as teams scale.",
    tags: [
      "Figma",
      "Wireframing",
      "User Flows",
      "Prototyping",
      "Design Systems",
      "Accessibility",
      "Interaction Design",
      "Usability Testing",
      "Visual Design",
      "Component Libraries",
    ],
    icon: Palette,
  },
  {
    title: "QA and Testing",
    description:
      "Validate releases with automated coverage, critical-path testing, and tooling that catches regressions early.",
    tags: [
      "Playwright",
      "Cypress",
      "Jest",
      "Vitest",
      "Postman",
      "API Testing",
      "Regression Testing",
      "Cross-Browser QA",
      "E2E Testing",
      "Automation Suites",
      "CI Checks",
      "Bug Tracking",
    ],
    icon: ShieldCheck,
  },
];

function ScrollingTags({
  title,
  tags,
}: {
  title: string;
  tags: string[];
}) {
  const duplicatedTags = [...tags, ...tags];
  const animationDuration = `${Math.max(22, tags.length * 3)}s`;

  return (
    <div className="relative mt-6 overflow-hidden py-2">
      <p className="sr-only">{`${title} stack: ${tags.join(", ")}`}</p>
      <div
        aria-hidden="true"
        className="animate-scroll-right flex w-max items-center gap-2.5 whitespace-nowrap pr-2"
        style={{ animationDuration }}
      >
        {duplicatedTags.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="inline-flex shrink-0 items-center rounded-full border border-[#101828]/12 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#101828] dark:border-white/12 dark:bg-white/8 dark:text-white"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ToolsAndTechnologies() {
  return (
    <section className="bg-white px-4 py-24 transition-colors dark:bg-[#0f0f0f] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto mb-12 flex max-w-5xl flex-col items-center gap-6 text-center lg:mb-16">
          <div className="max-w-4xl">
            <h2 className="mx-auto max-w-5xl text-4xl font-semibold tracking-[-0.04em] text-[#101828] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.02] dark:text-white">
              Get full-stack coverage.
              <br className="hidden sm:block" />
              Unblock execution across the SDLC.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#4b5563] dark:text-[#9ca3af]">
              The stack behind Wortholic covers product design, application
              engineering, AI delivery, testing, and launch support so projects
              move without handoff friction.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {technologyCards.map(({ title, description, tags, icon: Icon }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-[14px] border border-[#e7ebf3] bg-white p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-[2px] hover:scale-[1.02] hover:border-black hover:shadow-md dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent dark:from-white/5" />

              <div className="relative flex items-start justify-between gap-4">
                <h3 className="text-[1.85rem] font-semibold leading-tight tracking-[-0.03em] text-[#101828] dark:text-white">
                  {title}
                </h3>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[10px] bg-[#101828] text-white shadow-sm dark:bg-white dark:text-[#101828]">
                  <Icon className="h-7 w-7" strokeWidth={2.15} />
                </div>
              </div>

              <p className="relative mt-4 max-w-[34ch] text-sm leading-7 text-[#475467] dark:text-[#98a2b3]">
                {description}
              </p>

              <ScrollingTags title={title} tags={tags} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
