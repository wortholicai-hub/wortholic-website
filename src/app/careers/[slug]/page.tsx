import CareerApplicationForm from "@/components/Careers/CareerApplicationForm";
import JsonLd from "@/components/StructuredData/JsonLd";
import { buildJobPostingSchema, getJobBySlug, jobs } from "@/data/jobs";
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { notFound } from "next/navigation";

type CareerDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = async () =>
  jobs.map((job) => ({ slug: job.slug }));

export async function generateMetadata({ params }: CareerDetailPageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return createMetadata({
      title: "Career role not found",
      description: "The requested Wortholic career role could not be found.",
      path: "/careers",
      noIndex: true,
    });
  }

  return createMetadata({
    title: `${job.title} - ${job.location}`,
    description: job.summary,
    path: `/careers/${job.slug}`,
  });
}

export default async function CareerDetailPage({
  params,
}: CareerDetailPageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="bg-[radial-gradient(circle_at_top,_rgba(14,159,159,0.14),_transparent_40%),linear-gradient(180deg,#f6fdfd_0%,#ffffff_45%,#f8fbfd_100%)] px-4 pb-20 pt-32 dark:bg-[radial-gradient(circle_at_top,_rgba(14,159,159,0.16),_transparent_34%),linear-gradient(180deg,#050a0f_0%,#081019_45%,#09111a_100%)]">
      <section className="container">
        <JsonLd data={buildJobPostingSchema(job, siteConfig.url)} />
        <JsonLd
          data={createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Careers", path: "/careers" },
            { name: job.title, path: `/careers/${job.slug}` },
          ])}
        />

        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-[#cfe8e8] bg-white p-8 shadow-[0_24px_80px_rgba(8,42,42,0.08)] dark:border-white/10 dark:bg-[#0f1720]">
            <div className="flex flex-wrap items-center gap-3">
              {[
                job.seniority,
                job.team,
                job.location,
                job.workplace,
                job.employmentType,
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#0E9F9F]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E9F9F]"
                >
                  {item}
                </span>
              ))}
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl dark:text-white">
              {job.title}
            </h1>
            <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 md:text-lg dark:text-slate-300">
              {job.description}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                { label: "Experience", value: job.yearsExperience },
                { label: "Compensation", value: job.compensation },
                { label: "Posted", value: new Date(job.postedAt).toLocaleDateString() },
                { label: "Apply", value: "Direct through Wortholic" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-[#d8ecec] bg-[#f5fbfb] p-5 dark:border-white/10 dark:bg-[#111b26]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0E9F9F]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-800 dark:text-slate-100">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.95fr]">
            <div className="space-y-8">
              <div className="rounded-[2rem] border border-[#cfe8e8] bg-white p-7 shadow-[0_24px_80px_rgba(8,42,42,0.08)] dark:border-white/10 dark:bg-[#0f1720]">
                <h2 className="text-2xl font-black text-slate-950 dark:text-white">
                  Core technologies
                </h2>
                <div className="mt-5 flex flex-wrap gap-3">
                  {job.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[#cfe8e8] px-4 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:text-slate-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#cfe8e8] bg-white p-7 shadow-[0_24px_80px_rgba(8,42,42,0.08)] dark:border-white/10 dark:bg-[#0f1720]">
                <h2 className="text-2xl font-black text-slate-950 dark:text-white">
                  What you will own
                </h2>
                <ul className="mt-5 space-y-4">
                  {job.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300"
                    >
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#0E9F9F]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-[#cfe8e8] bg-white p-7 shadow-[0_24px_80px_rgba(8,42,42,0.08)] dark:border-white/10 dark:bg-[#0f1720]">
                <h2 className="text-2xl font-black text-slate-950 dark:text-white">
                  What we need from you
                </h2>
                <ul className="mt-5 space-y-4">
                  {job.requirements.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300"
                    >
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-slate-900 dark:bg-white" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <CareerApplicationForm
              jobTitle={job.title}
              jobLocation={job.location}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
