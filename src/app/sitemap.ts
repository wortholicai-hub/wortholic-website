import type { MetadataRoute } from "next";
import { internships } from "@/data/internships";
import { siteConfig } from "@/lib/site";
import { programmaticPages } from "@/data/seo/pages";
import { validateSeoPage } from "@/lib/seoValidator";

const staticRoutes = [
  "/",
  "/about",
  "/achievements",
  "/bootcamp",
  "/hire-developer",
  "/hire-team",
  "/hourly-developer",
  "/internships",
  "/open-support-ticket",
  "/privacy-policy",
  "/project-based",
  "/refund-policy",
  "/support",
  "/support-help",
  "/terms",
  "/terms-of-use",
  "/tos",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static Entries
  const staticEntries = staticRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  })) satisfies MetadataRoute.Sitemap;

  // Internship Entries
  const internshipEntries = internships.map((internship) => ({
    url: `${siteConfig.url}/internships/${internship.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  })) satisfies MetadataRoute.Sitemap;

  // Programmatic SEO Entries
  const programmaticEntries = programmaticPages
    // Filter out pages that have a noindex reason or fail validation
    .filter(page => !page.noindex_reason_if_any && validateSeoPage(page).isValid)
    .map((page) => {
      // Determine base path based on family
      let basePath = "";
      if (page.page_family === "core") basePath = "/services";
      else if (page.page_family === "industry") basePath = "/industries";
      else if (page.page_family === "location") basePath = "/locations";
      else if (page.page_family === "use-case") basePath = "/use-cases";
      else if (page.page_family === "tool") basePath = "/tools";
      else basePath = `/${page.page_family}s`;

      return {
        url: `${siteConfig.url}${basePath}/${page.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      };
    }) satisfies MetadataRoute.Sitemap;

  return [...staticEntries, ...internshipEntries, ...programmaticEntries];
}
