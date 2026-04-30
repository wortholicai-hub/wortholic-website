import CareersExplorer from "@/components/Careers/CareersExplorer";
import JsonLd from "@/components/StructuredData/JsonLd";
import {
  buildCareersCollectionSchema,
  featuredJobs,
  jobLocations,
  jobSeniorities,
  jobTeams,
  jobs,
  jobsTotal,
  seniorJobCount,
} from "@/data/jobs";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Careers",
  description:
    "Search 100+ senior-heavy software development, AI, cloud, security, design, and architecture roles at Wortholic.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <div className="bg-[radial-gradient(circle_at_top,_rgba(14,159,159,0.14),_transparent_44%),linear-gradient(180deg,#f4fcfc_0%,#ffffff_44%,#f8fbfd_100%)] px-4 pb-20 pt-32 dark:bg-[radial-gradient(circle_at_top,_rgba(14,159,159,0.16),_transparent_36%),linear-gradient(180deg,#050a0f_0%,#081019_45%,#09111a_100%)]">
      <JsonLd data={buildCareersCollectionSchema(siteConfig.url)} />

      <section className="container">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0E9F9F]">
            Wortholic careers
          </p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 md:text-6xl dark:text-white">
            Senior software jobs built for people who ship
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg dark:text-slate-300">
            This is a real jobs surface, not a brochure page. Search live openings
            across AI engineering, product delivery, cloud architecture, data,
            QA, design, and solution architecture. Most roles target senior,
            lead, staff, or principal-level builders.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
          {[
            { label: "Open roles", value: `${jobsTotal}+` },
            { label: "Senior and above", value: `${seniorJobCount}+` },
            { label: "Hiring tracks", value: `${jobTeams.length}` },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-[#cfe8e8] bg-white px-6 py-5 text-left shadow-[0_20px_70px_rgba(8,42,42,0.08)] dark:border-white/10 dark:bg-[#0f1720]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0E9F9F]">
                {item.label}
              </p>
              <p className="mt-3 text-3xl font-black text-slate-950 dark:text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <CareersExplorer
            jobs={jobs}
            teams={jobTeams}
            seniorities={jobSeniorities}
            locations={jobLocations}
            featuredJobs={featuredJobs}
          />
        </div>
      </section>
    </div>
  );
}
