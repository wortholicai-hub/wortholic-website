import Link from "next/link";
import { Metadata } from "next";
import { internships } from "@/data/internships";

export const metadata: Metadata = {
  title: "Open Positions | Wortholic",
  description: "Explore internship opportunities at Wortholic. Join our team of talented engineers and creators.",
};

const cardIcons = [
  // Full-Stack Engineer Icon
  <svg key="fullstack" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  // AI Engineer Icon
  <svg key="ai" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>,
  // 3D Designer Icon (Blender/Cube style)
  <svg key="3d" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>,
];

const cardGradients = [
  "from-[#0E9F9F] to-[#0b7c7c]",
  "from-purple-600 to-purple-800",
  "from-amber-500 to-orange-600",
];

const InternshipsPage = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-4 pb-20 pt-32 dark:from-black dark:to-[#0b0f14]">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0E9F9F]">
            Join Our Team
          </p>
          <h1 className="mb-4 text-4xl font-bold text-black md:text-5xl dark:text-white">
            Open Positions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We&apos;re looking for talented individuals who are passionate about building 
            cutting-edge technology. Work remotely with a world-class team.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {internships.map((internship, index) => (
            <Link
              key={internship.slug}
              href={`/internships/${internship.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-700 dark:bg-[#111827]"
            >
              {/* Icon */}
              <div
                className={`mb-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${cardGradients[index]} p-3 text-white shadow-lg`}
              >
                {cardIcons[index]}
              </div>

              {/* Content */}
              <h2 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-[#0E9F9F] dark:text-white">
                {internship.title}
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {internship.summary}
              </p>

              {/* Tags */}
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600 dark:text-amber-400">
                  Internship
                </span>
                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400">
                  {internship.location}
                </span>
              </div>

              {/* Tech Stack */}
              {internship.techStack && (
                <div className="mb-6 flex flex-wrap gap-1.5">
                  {internship.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {internship.techStack.length > 4 && (
                    <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                      +{internship.techStack.length - 4}
                    </span>
                  )}
                </div>
              )}

              {/* CTA */}
              <div className="flex items-center gap-2 font-semibold text-[#0E9F9F]">
                <span>Apply Now</span>
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipsPage;
