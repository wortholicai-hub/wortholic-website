import { Metadata } from "next";
import { notFound } from "next/navigation";
import InternshipDetail from "@/components/Internships/InternshipDetail";
import { internships } from "@/data/internships";

type InternshipPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = async () =>
  internships.map((internship) => ({ slug: internship.slug }));

export const generateMetadata = async ({
  params,
}: InternshipPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const internship = internships.find((item) => item.slug === slug);

  if (!internship) {
    return {
      title: "Internship Not Found | Wortholic",
    };
  }

  return {
    title: `${internship.title} | Wortholic`,
    description: internship.summary,
  };
};

const InternshipPage = async ({ params }: InternshipPageProps) => {
  const { slug } = await params;
  const internship = internships.find((item) => item.slug === slug);

  if (!internship) {
    notFound();
  }

  return <InternshipDetail internship={internship} />;
};

export default InternshipPage;
