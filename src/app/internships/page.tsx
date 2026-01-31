import Link from "next/link";
import { Metadata } from "next";
import { internships } from "@/data/internships";

export const metadata: Metadata = {
  title: "Internships | Wortholic",
  description: "Explore internship opportunities at Wortholic.",
};

const InternshipsPage = () => {
  return (
    <section className="bg-white px-4 pb-16 pt-28 dark:bg-black">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0E9F9F]">
            Start Your Career
          </p>
          <h1 className="mt-3 text-3xl font-bold text-black md:text-4xl dark:text-white">
            Internship Opportunities
          </h1>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
            Choose an internship track that fits your goals. Each opportunity
            includes structured learning, mentorship, and real project
            experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {internships.map((internship) => (
            <Link
              key={internship.slug}
              href={`/internships/${internship.slug}`}
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-two transition duration-200 hover:-translate-y-1 hover:border-[#0E9F9F] dark:border-gray-700 dark:bg-[#0b0f14]"
            >
              <h2 className="text-lg font-semibold text-black group-hover:text-[#0E9F9F] dark:text-white">
                {internship.title}
              </h2>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                {internship.summary}
              </p>
              <span className="mt-5 inline-flex text-sm font-semibold text-[#0E9F9F]">
                View details
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipsPage;
