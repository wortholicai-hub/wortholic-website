"use client";

import type { Job } from "@/data/jobs";
import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";

type CareersExplorerProps = {
  jobs: Job[];
  teams: string[];
  seniorities: string[];
  locations: string[];
  featuredJobs: Job[];
};

export default function CareersExplorer({
  jobs,
  teams,
  seniorities,
  locations,
  featuredJobs,
}: CareersExplorerProps) {
  const [search, setSearch] = useState("");
  const [team, setTeam] = useState("All teams");
  const [seniority, setSeniority] = useState("All levels");
  const [workplace, setWorkplace] = useState("All workplaces");
  const [location, setLocation] = useState("All locations");
  const deferredSearch = useDeferredValue(search);

  const filteredJobs = useMemo(() => {
    const query = deferredSearch.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        !query ||
        [
          job.title,
          job.team,
          job.location,
          job.summary,
          job.technologies.join(" "),
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      const matchesTeam = team === "All teams" || job.team === team;
      const matchesSeniority =
        seniority === "All levels" || job.seniority === seniority;
      const matchesWorkplace =
        workplace === "All workplaces" || job.workplace === workplace;
      const matchesLocation =
        location === "All locations" || job.location === location;

      return (
        matchesSearch &&
        matchesTeam &&
        matchesSeniority &&
        matchesWorkplace &&
        matchesLocation
      );
    });
  }, [deferredSearch, jobs, location, seniority, team, workplace]);

  return (
    <div className="space-y-10">
      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            label: "Live openings",
            value: jobs.length,
            text: "Senior-heavy roles across AI, product, cloud, security, design, and data.",
          },
          {
            label: "Remote-first",
            value: jobs.filter((job) => job.workplace === "Remote").length,
            text: "Distributed delivery pods with clear ownership and async execution discipline.",
          },
          {
            label: "Hybrid roles",
            value: jobs.filter((job) => job.workplace === "Hybrid").length,
            text: "Regional hiring for high-touch client work and planning-intensive engagements.",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-[#d8ecec] bg-white p-6 shadow-[0_24px_80px_rgba(8,42,42,0.08)] dark:border-white/10 dark:bg-[#0f1720]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0E9F9F]">
              {stat.label}
            </p>
            <p className="mt-4 text-4xl font-black text-slate-900 dark:text-white">
              {stat.value}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {stat.text}
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-[2rem] border border-[#d8ecec] bg-white p-6 shadow-[0_24px_80px_rgba(8,42,42,0.08)] dark:border-white/10 dark:bg-[#0f1720]">
        <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0E9F9F]">
              Featured roles
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-900 dark:text-white">
              Priority senior openings
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
            These roles are tied to active delivery demand across AI product
            engineering, platform architecture, cloud reliability, and design-heavy
            product work.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {featuredJobs.map((job) => (
            <Link
              key={job.slug}
              href={`/careers/${job.slug}`}
              className="group rounded-3xl border border-[#d8ecec] bg-[#f5fbfb] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#0E9F9F] hover:shadow-[0_20px_60px_rgba(14,159,159,0.16)] dark:border-white/10 dark:bg-[#111b26]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-[#0E9F9F]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E9F9F]">
                  {job.seniority}
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {job.workplace}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900 transition-colors group-hover:text-[#0E9F9F] dark:text-white">
                {job.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                {job.team}
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {job.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {job.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#cfe8e8] px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="job-search"
        className="rounded-[2rem] border border-[#d8ecec] bg-white p-6 shadow-[0_24px_80px_rgba(8,42,42,0.08)] dark:border-white/10 dark:bg-[#0f1720]"
      >
        <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0E9F9F]">
              Search openings
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-900 dark:text-white">
              Filter 100+ software roles
            </h2>
          </div>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
            {filteredJobs.length} roles match the current filters.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <label className="xl:col-span-2">
            <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Search by title, stack, or location
            </span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Senior AI, platform, cloud, React, Dubai..."
              className="w-full rounded-2xl border border-[#cfe8e8] bg-[#f8fdfd] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0E9F9F] dark:border-white/10 dark:bg-[#111b26] dark:text-white"
            />
          </label>

          {[
            {
              label: "Team",
              value: team,
              setValue: setTeam,
              options: ["All teams", ...teams],
            },
            {
              label: "Level",
              value: seniority,
              setValue: setSeniority,
              options: ["All levels", ...seniorities],
            },
            {
              label: "Workplace",
              value: workplace,
              setValue: setWorkplace,
              options: ["All workplaces", "Remote", "Hybrid"],
            },
            {
              label: "Location",
              value: location,
              setValue: setLocation,
              options: ["All locations", ...locations],
            },
          ].map((filter) => (
            <label key={filter.label}>
              <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                {filter.label}
              </span>
              <select
                value={filter.value}
                onChange={(event) => filter.setValue(event.target.value)}
                className="w-full rounded-2xl border border-[#cfe8e8] bg-[#f8fdfd] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0E9F9F] dark:border-white/10 dark:bg-[#111b26] dark:text-white"
              >
                {filter.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setTeam("All teams");
              setSeniority("All levels");
              setWorkplace("All workplaces");
              setLocation("All locations");
            }}
            className="rounded-full border border-[#0E9F9F] px-4 py-2 text-sm font-semibold text-[#0E9F9F] transition hover:bg-[#0E9F9F] hover:text-white"
          >
            Reset filters
          </button>
          <a
            href="#job-listings"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0E9F9F] dark:bg-white dark:text-slate-900"
          >
            Jump to listings
          </a>
        </div>
      </section>

      <section id="job-listings" className="grid gap-5 lg:grid-cols-2">
        {filteredJobs.map((job) => (
          <Link
            key={job.slug}
            href={`/careers/${job.slug}`}
            className="group rounded-3xl border border-[#d8ecec] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-[#0E9F9F] hover:shadow-[0_24px_80px_rgba(14,159,159,0.16)] dark:border-white/10 dark:bg-[#0f1720]"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#0E9F9F]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E9F9F]">
                {job.seniority}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 dark:bg-white/5 dark:text-slate-300">
                {job.workplace}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 dark:bg-white/5 dark:text-slate-300">
                {job.employmentType}
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-black text-slate-900 transition-colors group-hover:text-[#0E9F9F] dark:text-white">
              {job.title}
            </h3>
            <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
              {job.team} • {job.location}
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {job.summary}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {job.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#cfe8e8] px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </section>

      {filteredJobs.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-[#badede] bg-[#f5fbfb] p-8 text-center dark:border-white/10 dark:bg-[#0f1720]">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            No roles match those filters
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Widen the search, switch location filters, or review another team.
            The board is optimized for senior-level software delivery roles.
          </p>
        </div>
      ) : null}
    </div>
  );
}
