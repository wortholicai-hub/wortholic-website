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
            Internship Opportunity
          </p>
          <h1 className="mt-3 text-3xl font-bold text-black md:text-4xl dark:text-white">
            {internship.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base text-gray-600 dark:text-gray-300">
            {internship.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-two dark:border-gray-700 dark:bg-[#0b0f14]">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">
                Required Skills
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-sm text-gray-600 dark:text-gray-300">
                {internship.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-two dark:border-gray-700 dark:bg-[#0b0f14]">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">
                Learning Outcomes & Experience
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-sm text-gray-600 dark:text-gray-300">
                {internship.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-two dark:border-gray-700 dark:bg-[#0b0f14]">
              <h2 className="mb-4 text-lg font-semibold text-black dark:text-white">
                Internship Details
              </h2>
              <dl className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center justify-between">
                  <dt className="font-medium text-gray-700 dark:text-gray-200">
                    Duration
                  </dt>
                  <dd>{internship.duration}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="font-medium text-gray-700 dark:text-gray-200">
                    Type
                  </dt>
                  <dd>{internship.type}</dd>
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
