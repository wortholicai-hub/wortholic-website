import { Internship } from "@/data/internships";
import InternshipApplicationForm from "./InternshipApplicationForm";

type InternshipDetailProps = {
  internship: Internship;
};

const InternshipDetail = ({ internship }: InternshipDetailProps) => {
  return (
    <section className="bg-white px-4 pb-16 pt-28 dark:bg-black">
      <div className="container">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0E9F9F]">
            Career Opportunity
          </p>
          <h1 className="mt-3 text-3xl font-bold text-black md:text-4xl dark:text-white">
            {internship.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0E9F9F]/10 px-4 py-1.5 text-sm font-medium text-[#0E9F9F]">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {internship.type}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-600 dark:text-purple-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {internship.location}
            </span>
          </div>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-600 dark:text-gray-300">
            {internship.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            {/* Tech Stack */}
            {internship.techStack && internship.techStack.length > 0 && (
              <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg dark:border-gray-700 dark:from-[#0b0f14] dark:to-[#111827]">
                <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {internship.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-[#0E9F9F]/10 px-3 py-1.5 text-sm font-medium text-[#0E9F9F] dark:bg-[#0E9F9F]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Responsibilities */}
            <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg dark:border-gray-700 dark:from-[#0b0f14] dark:to-[#111827]">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">
                Responsibilities
              </h2>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                {internship.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0E9F9F]/20 text-[#0E9F9F]">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg dark:border-gray-700 dark:from-[#0b0f14] dark:to-[#111827]">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">
                Requirements
              </h2>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                {internship.requirements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Nice to Have */}
            {internship.niceToHave && internship.niceToHave.length > 0 && (
              <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg dark:border-gray-700 dark:from-[#0b0f14] dark:to-[#111827]">
                <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  Nice to Have
                </h2>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  {internship.niceToHave.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-500">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {/* Position Details Card */}
            <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg dark:border-gray-700 dark:from-[#0b0f14] dark:to-[#111827]">
              <h2 className="mb-4 text-lg font-semibold text-black dark:text-white">
                Position Details
              </h2>
              <dl className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3 dark:border-gray-700">
                  <dt className="font-medium text-gray-700 dark:text-gray-200">
                    Type
                  </dt>
                  <dd className="font-semibold text-[#0E9F9F]">{internship.type}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="font-medium text-gray-700 dark:text-gray-200">
                    Location
                  </dt>
                  <dd className="font-semibold text-purple-600 dark:text-purple-400">{internship.location}</dd>
                </div>
              </dl>
            </div>

            <InternshipApplicationForm internshipTitle={internship.title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipDetail;
