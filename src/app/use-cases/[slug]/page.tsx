import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProgrammaticPageTemplate from "@/components/SEO/ProgrammaticPageTemplate";
import { programmaticPages, getPageDataBySlug } from "@/data/seo/pages";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const pageData = getPageDataBySlug(resolvedParams.slug, "use-case");
  
  if (!pageData) {
    return {};
  }

  return {
    title: pageData.meta_title,
    description: pageData.meta_description,
    alternates: {
      canonical: pageData.canonical_target || undefined,
    },
    robots: {
      index: !pageData.noindex_reason_if_any,
      follow: !pageData.noindex_reason_if_any,
    }
  };
}

export async function generateStaticParams() {
  const pages = programmaticPages.filter(p => p.page_family === "use-case");
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function UseCasePage({ params }: Props) {
  const resolvedParams = await params;
  const pageData = getPageDataBySlug(resolvedParams.slug, "use-case");

  if (!pageData) {
    notFound();
  }

  return <ProgrammaticPageTemplate pageData={pageData} />;
}
