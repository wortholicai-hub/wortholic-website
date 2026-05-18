"use client";

import type { Job } from "@/data/jobs";
import {
  ArrowRight,
  Briefcase,
  Layers3,
  MapPin,
  RotateCcw,
  Search,
  SlidersHorizontal,
} from "lucide-react";
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

  const workplaces = useMemo(
    () => Array.from(new Set(jobs.map((job) => job.workplace))).sort(),
    [jobs]
  );

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

  const filters: Array<{
    label: string;
    value: string;
    setValue: (value: string) => void;
    options: string[];
  }> = [
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
      options: ["All workplaces", ...workplaces],
    },
    {
      label: "Location",
      value: location,
      setValue: setLocation,
      options: ["All locations", ...locations],
    },
  ];

  function resetFilters() {
    setSearch("");
    setTeam("All teams");
    setSeniority("All levels");
    setWorkplace("All workplaces");
    setLocation("All locations");
  }

  return (
    <div className="space-y-10">
      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            icon: Briefcase,
            label: "Live openings",
            value: jobs.length,
            text: "Focused roles across AI, product, cloud, security, design, and data.",
          },
          {
            icon: MapPin,
            label: "Pakistan remote",
            value: jobs.filter((job) => job.location === "Remote - Pakistan").length,
            text: "A clean board with every active opening scoped to Pakistan.",
          },
          {
            icon: Layers3,
            label: "Delivery tracks",
            value: teams.length,
            text: "Separate paths for product builders, AI engineers, QA, cloud, and security.",
          },
        ].map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="group relative overflow-hidden border border-[#0b5c59]/14 bg-white p-6 shadow-[0_24px_80px_rgba(4,47,46,0.08)] transition hover:-translate-y-1 hover:border-[#0b5c59] dark:border-[#13b8a6]/22 dark:bg-[#062826] dark:hover:border-[#13b8a6] dark:hover:bg-[#073b3a]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#0b5c59,#13b8a6)] opacity-0 transition group-hover:opacity-100 dark:bg-[linear-gradient(90deg,#13b8a6,#d7bd73)]" />
              <div className="flex items-start justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0b5c59] dark:text-[#9df5e9]">
                  {stat.label}
                </p>
                <span className="grid h-10 w-10 place-items-center bg-[#0b5c59] text-white dark:bg-[#13b8a6] dark:text-[#021211]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <p className="mt-5 font-serif text-5xl text-[#042f2e] dark:text-[#f9f3df]">
                {stat.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#315f5b] dark:text-[#bceee6]">
                {stat.text}
              </p>
            </div>
          );
        })}
      </section>

      <section className="overflow-hidden border border-[#0b5c59]/14 bg-white text-[#052725] shadow-[0_28px_100px_rgba(4,47,46,0.1)] dark:border-[#13b8a6]/20 dark:bg-[#031817] dark:text-[#eefdf9] dark:shadow-[0_28px_100px_rgba(4,47,46,0.18)]">
        <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="flex flex-col justify-between gap-8 border-[#0b5c59]/12 lg:border-r lg:pr-8 dark:border-[#13b8a6]/18">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0b5c59] dark:text-[#9df5e9]">
                Signature openings
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#042f2e] dark:text-[#f9f3df]">
                Selected roles with immediate delivery demand.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#315f5b] dark:text-[#bceee6]">
              A tighter set of Pakistan-based roles, presented with enough
              signal to compare quickly and apply with intent.
            </p>
          </div>

          <div className="grid gap-4 xl:grid-cols-2">
            {featuredJobs.map((job) => (
              <Link
                key={job.slug}
                href={`/careers/${job.slug}`}
                className="group flex min-h-[260px] flex-col border border-[#0b5c59]/12 bg-[#f7fcfa] p-5 shadow-[0_18px_54px_rgba(4,47,46,0.07)] transition duration-200 hover:-translate-y-1 hover:border-[#0b5c59] hover:bg-white dark:border-[#13b8a6]/22 dark:bg-[#062826] dark:shadow-[0_18px_54px_rgba(0,0,0,0.22)] dark:hover:border-[#d7bd73] dark:hover:bg-[#073b3a]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="border border-[#0b5c59]/18 bg-[#0b5c59]/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0b5c59] dark:border-[#13b8a6]/35 dark:bg-[#13b8a6]/10 dark:text-[#9df5e9]">
                    {job.seniority}
                  </span>
                  <ArrowRight
                    className="h-5 w-5 text-[#0b5c59] transition group-hover:translate-x-1 dark:text-[#d7bd73]"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 font-serif text-2xl leading-tight text-[#042f2e] dark:text-[#f9f3df]">
                  {job.title}
                </h3>
                <p className="mt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0b5c59] dark:text-[#9df5e9]">
                  <Briefcase className="h-4 w-4" aria-hidden="true" />
                  {job.team}
                </p>
                <p className="mt-5 line-clamp-4 text-sm leading-7 text-[#315f5b] dark:text-[#d8eee7]">
                  {job.summary}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {job.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="border border-[#0b5c59]/12 bg-white px-3 py-1 text-xs text-[#315f5b] dark:border-[#13b8a6]/18 dark:bg-[#13b8a6]/8 dark:text-[#d8eee7]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="job-search"
        className="border border-[#0b5c59]/14 bg-white p-5 shadow-[0_24px_80px_rgba(4,47,46,0.08)] dark:border-[#13b8a6]/22 dark:bg-[#062826] dark:shadow-[0_24px_80px_rgba(0,0,0,0.2)]"
      >
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#0b5c59] dark:text-[#9df5e9]">
              <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
              Search openings
            </p>
            <h2 className="mt-3 font-serif text-4xl text-[#042f2e] dark:text-[#f9f3df]">
              Find the right seat.
            </h2>
          </div>
          <p className="text-sm leading-6 text-[#315f5b] dark:text-[#bceee6]">
            {filteredJobs.length} roles match the current filters.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <label className="xl:col-span-2">
            <span className="mb-2 block text-sm font-semibold text-[#063d3b] dark:text-[#d8eee7]">
              Search by title, stack, or location
            </span>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0b5c59] dark:text-[#9df5e9]"
                aria-hidden="true"
              />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="AI, platform, cloud, React, Pakistan..."
                className="w-full border border-[#0b5c59]/18 bg-[#f7fcfa] px-4 py-3 pl-11 text-sm text-[#041f1e] outline-none transition placeholder:text-[#5a7f7a] focus:border-[#0b5c59] focus:ring-2 focus:ring-[#13b8a6]/20 dark:border-[#13b8a6]/22 dark:bg-[#031817] dark:text-[#eefdf9] dark:placeholder:text-[#8bb9b2]"
              />
            </div>
          </label>

          {filters.map((filter) => (
            <label key={filter.label}>
              <span className="mb-2 block text-sm font-semibold text-[#063d3b] dark:text-[#d8eee7]">
                {filter.label}
              </span>
              <select
                value={filter.value}
                onChange={(event) => filter.setValue(event.target.value)}
                className="w-full border border-[#0b5c59]/18 bg-[#f7fcfa] px-4 py-3 text-sm text-[#041f1e] outline-none transition focus:border-[#0b5c59] focus:ring-2 focus:ring-[#13b8a6]/20 dark:border-[#13b8a6]/22 dark:bg-[#031817] dark:text-[#eefdf9]"
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

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex items-center gap-2 border border-[#0b5c59] px-4 py-2 text-sm font-semibold text-[#0b5c59] transition hover:bg-[#0b5c59] hover:text-white dark:border-[#13b8a6] dark:text-[#9df5e9] dark:hover:bg-[#13b8a6] dark:hover:text-[#021211]"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Reset filters
          </button>
          <a
            href="#job-listings"
            className="inline-flex items-center gap-2 bg-[#0b5c59] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#13b8a6] dark:bg-[#13b8a6] dark:text-[#021211] dark:hover:bg-[#9df5e9]"
          >
            Jump to listings
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="job-listings" className="grid gap-4 lg:grid-cols-2">
        {filteredJobs.map((job) => (
          <Link
            key={job.slug}
            href={`/careers/${job.slug}`}
            className="group relative grid min-h-[300px] overflow-hidden border border-[#0b5c59]/12 bg-white p-6 shadow-[0_24px_80px_rgba(4,47,46,0.08)] transition duration-200 hover:-translate-y-1 hover:border-[#0b5c59] dark:border-[#13b8a6]/22 dark:bg-[#062826] dark:shadow-[0_24px_80px_rgba(0,0,0,0.2)] dark:hover:border-[#13b8a6] dark:hover:bg-[#073b3a]"
          >
            <div className="absolute inset-y-0 left-0 w-1 bg-[#0b5c59] transition group-hover:bg-[#13b8a6] dark:bg-[#13b8a6] dark:group-hover:bg-[#d7bd73]" />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="border border-[#0b5c59]/18 bg-[#0b5c59]/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0b5c59] dark:border-[#13b8a6]/28 dark:bg-[#13b8a6]/10 dark:text-[#9df5e9]">
                  {job.seniority}
                </span>
                <span className="border border-[#0b5c59]/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#315f5b] dark:border-[#13b8a6]/16 dark:text-[#bceee6]">
                  {job.workplace}
                </span>
                <span className="border border-[#0b5c59]/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#315f5b] dark:border-[#13b8a6]/16 dark:text-[#bceee6]">
                  {job.employmentType}
                </span>
              </div>

              <h3 className="mt-5 font-serif text-3xl leading-tight text-[#042f2e] transition-colors group-hover:text-[#0b5c59] dark:text-[#f9f3df] dark:group-hover:text-[#9df5e9]">
                {job.title}
              </h3>
              <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-[#315f5b] dark:text-[#bceee6]">
                <MapPin className="h-4 w-4 text-[#0b5c59] dark:text-[#13b8a6]" aria-hidden="true" />
                {job.team} / {job.location}
              </p>
              <p className="mt-5 text-sm leading-7 text-[#315f5b] dark:text-[#bceee6]">
                {job.summary}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 self-end">
              {job.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="border border-[#0b5c59]/12 px-3 py-1 text-xs font-medium text-[#315f5b] dark:border-[#13b8a6]/16 dark:text-[#bceee6]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </section>

      {filteredJobs.length === 0 ? (
        <div className="border border-dashed border-[#0b5c59]/28 bg-white p-8 text-center dark:border-[#13b8a6]/35 dark:bg-[#062826]">
          <h3 className="font-serif text-2xl text-[#042f2e] dark:text-[#f9f3df]">
            No roles match those filters
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#315f5b] dark:text-[#bceee6]">
            Widen the search, switch location filters, or review another
            delivery track.
          </p>
        </div>
      ) : null}
    </div>
  );
}
