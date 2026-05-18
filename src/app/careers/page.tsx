import CareersExplorer from "@/components/Careers/CareersExplorer";
import JsonLd from "@/components/StructuredData/JsonLd";
import {
  buildCareersCollectionSchema,
  experiencedJobCount,
  featuredJobs,
  jobLocations,
  jobSeniorities,
  jobTeams,
  jobs,
  jobsTotal,
} from "@/data/jobs";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import {
  ArrowDown,
  BadgeCheck,
  Gem,
  MapPinned,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Careers",
  description:
    "Explore refined Pakistan-based AI, product engineering, cloud, security, design, and architecture roles at Wortholic.",
  path: "/careers",
});

export default function CareersPage() {
  const remoteJobs = jobs.filter((job) => job.workplace === "Remote").length;
  const pakistanJobs = jobs.filter((job) => job.region === "Pakistan").length;

  return (
    <main className="bg-[#f2faf7] text-[#052725] dark:bg-[#020908] dark:text-[#eefdf9]">
      <JsonLd data={buildCareersCollectionSchema(siteConfig.url)} />

      <section className="relative isolate overflow-hidden bg-[#f2faf7] px-4 pt-32 text-[#052725] dark:bg-[#020908] dark:text-white">
        <Image
          src="/images/careers/bg-1.png"
          alt="Wortholic team in a warm modern workspace"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-30 object-cover opacity-18 saturate-[0.78] dark:opacity-28"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(100deg,rgba(242,250,247,0.98)_0%,rgba(242,250,247,0.93)_48%,rgba(219,243,238,0.72)_100%)] dark:bg-[linear-gradient(100deg,#031817_0%,rgba(4,47,46,0.96)_38%,rgba(5,66,62,0.74)_68%,rgba(2,9,8,0.56)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#f2faf7] via-[#f2faf7]/72 to-transparent dark:from-[#020908] dark:via-[#020908]/58" />

        <div className="container relative z-10">
          <div className="grid min-h-[calc(100vh-7rem)] items-end gap-12 pb-16 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-3 border border-[#0b5c59]/18 bg-white/78 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#0b5c59] shadow-[0_16px_50px_rgba(4,47,46,0.08)] backdrop-blur dark:border-[#13b8a6]/45 dark:bg-[#062826]/80 dark:text-[#9df5e9] dark:shadow-[0_0_40px_rgba(18,184,166,0.18)]">
                <Gem className="h-4 w-4 text-[#0b5c59] dark:text-[#d7bd73]" aria-hidden="true" />
                Wortholic careers
              </div>

              <h1 className="mt-7 max-w-5xl font-serif text-5xl font-semibold leading-[0.96] tracking-normal text-[#042f2e] md:text-7xl dark:text-[#f9f3df]">
                Build sharp AI products from Pakistan with a global delivery studio.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#315f5b] md:text-lg dark:text-[#d8eee7]">
                A focused careers board for builders who want polished product
                work, serious engineering rhythm, and remote roles scoped only
                to Pakistan.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#job-search"
                  className="inline-flex items-center justify-center gap-2 bg-[#0b5c59] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_48px_rgba(11,92,89,0.22)] transition hover:bg-[#13b8a6] dark:bg-[#13b8a6] dark:text-[#021211] dark:hover:bg-[#9df5e9]"
                >
                  View openings
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/internships"
                  className="inline-flex items-center justify-center border border-[#0b5c59]/20 bg-white/70 px-6 py-3 text-sm font-semibold text-[#0b5c59] shadow-[0_16px_46px_rgba(4,47,46,0.06)] transition hover:border-[#0b5c59] hover:bg-white dark:border-[#d7bd73]/45 dark:bg-[#041f1e]/35 dark:text-[#f9f3df] dark:hover:border-[#13b8a6] dark:hover:text-[#9df5e9]"
                >
                  Explore internships
                </Link>
              </div>

              <div className="mt-12 grid border-y border-[#0b5c59]/14 md:grid-cols-3 dark:border-[#9df5e9]/18">
                {[
                  { label: "Open roles", value: `${jobsTotal}` },
                  { label: "Experienced roles", value: `${experiencedJobCount}` },
                  { label: "Pakistan roles", value: `${pakistanJobs}` },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border-[#0b5c59]/14 py-5 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0 dark:border-[#9df5e9]/18"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0b5c59] dark:text-[#9df5e9]">
                      {item.label}
                    </p>
                    <p className="mt-2 font-serif text-5xl text-[#042f2e] dark:text-[#f9f3df]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden self-end pb-8 lg:block">
              <div className="relative ml-auto max-w-md overflow-hidden border border-[#0b5c59]/14 bg-white/82 p-7 shadow-[0_28px_100px_rgba(4,47,46,0.12)] backdrop-blur dark:border-[#13b8a6]/30 dark:bg-[#031817]/76 dark:shadow-[0_28px_100px_rgba(0,0,0,0.35)]">
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#0b5c59,#13b8a6,#d7bd73)] dark:bg-[linear-gradient(90deg,#13b8a6,#d7bd73,#13b8a6)]" />
                <Sparkles className="h-6 w-6 text-[#0b5c59] dark:text-[#d7bd73]" aria-hidden="true" />
                <p className="mt-5 font-serif text-3xl leading-tight text-[#042f2e] dark:text-[#f9f3df]">
                  Clean product taste. Calm execution. Real ownership.
                </p>
                <div className="mt-7 space-y-4">
                  {[
                    "Focused remote hiring",
                    "AI, cloud, product, QA, and security tracks",
                    "Portfolio-led evaluation",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <BadgeCheck
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#0b5c59] dark:text-[#13b8a6]"
                        aria-hidden="true"
                      />
                      <p className="text-sm leading-6 text-[#315f5b] dark:text-[#d8eee7]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(19,184,166,0.12),transparent_32%),radial-gradient(circle_at_86%_18%,rgba(11,92,89,0.08),transparent_28%)] dark:bg-[radial-gradient(circle_at_18%_8%,rgba(19,184,166,0.16),transparent_32%),radial-gradient(circle_at_86%_18%,rgba(215,189,115,0.09),transparent_28%)]" />
        <div className="container">
          <div className="relative grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div className="border-l border-[#0b5c59] pl-6 dark:border-[#13b8a6]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0b5c59] dark:text-[#9df5e9]">
                Pakistan talent studio
              </p>
              <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-[#042f2e] md:text-5xl dark:text-[#f9f3df]">
                A cleaner, sharper board for people who care how the work feels.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: MapPinned,
                  label: "Pakistan",
                  value: pakistanJobs,
                  text: "Every opening is scoped to Pakistan-based remote hiring.",
                },
                {
                  icon: BadgeCheck,
                  label: "Remote",
                  value: remoteJobs,
                  text: "Distributed work with clear ownership and delivery rituals.",
                },
                {
                  icon: Sparkles,
                  label: "Tracks",
                  value: jobTeams.length,
                  text: "Focused paths across AI, product, cloud, data, security, and QA.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="group overflow-hidden border border-[#0b5c59]/14 bg-white p-5 shadow-[0_24px_80px_rgba(4,47,46,0.08)] transition hover:-translate-y-1 hover:border-[#0b5c59] dark:border-[#13b8a6]/22 dark:bg-[#062826] dark:hover:border-[#13b8a6] dark:hover:bg-[#073b3a]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0b5c59] dark:text-[#9df5e9]">
                        {item.label}
                      </p>
                      <span className="grid h-10 w-10 place-items-center bg-[#0b5c59] text-white dark:bg-[#13b8a6] dark:text-[#021211]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </div>
                    <p className="mt-5 font-serif text-5xl text-[#042f2e] dark:text-[#f9f3df]">
                      {item.value}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#315f5b] dark:text-[#bceee6]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative mt-14 grid gap-4 md:grid-cols-3">
            {[
              "Product work with AI systems, automation, and modern web stacks.",
              "Hiring shaped around evidence, taste, communication, and delivery.",
              "Remote roles for builders who want ownership without noise.",
            ].map((item, index) => (
              <div
                key={item}
                className={`border p-6 shadow-[0_24px_80px_rgba(4,47,46,0.08)] ${
                  index === 1
                    ? "border-[#0b5c59]/20 bg-[#0b5c59] text-white dark:border-[#13b8a6]/45 dark:bg-[#0b5c59] dark:text-[#f9f3df]"
                    : "border-[#0b5c59]/14 bg-white text-[#315f5b] dark:border-[#13b8a6]/22 dark:bg-[#031817] dark:text-[#d8eee7]"
                }`}
              >
                <p className="text-sm leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <CareersExplorer
              jobs={jobs}
              teams={jobTeams}
              seniorities={jobSeniorities}
              locations={jobLocations}
              featuredJobs={featuredJobs}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
