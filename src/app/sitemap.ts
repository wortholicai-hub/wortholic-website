import type { MetadataRoute } from "next";
import { jobs } from "@/data/jobs";
import { internships } from "@/data/internships";
import { siteConfig } from "@/lib/site";

const staticRoutes = [
  "/",
  "/about",
  "/achievements",
  "/blog",
  "/blog-details",
  "/blog-sidebar",
  "/bootcamp",
  "/careers",
  "/hire-developer",
  "/hire-team",
  "/hourly-developer",
  "/internships",
  "/news",
  "/open-support-ticket",
  "/portfolio",
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

  const staticEntries = staticRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/" || path === "/news" || path === "/careers" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/careers" || path === "/news" ? 0.9 : 0.7,
  })) satisfies MetadataRoute.Sitemap;

  const careerEntries = jobs.map((job) => ({
    url: `${siteConfig.url}/careers/${job.slug}`,
    lastModified: new Date(job.postedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const internshipEntries = internships.map((internship) => ({
    url: `${siteConfig.url}/internships/${internship.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticEntries, ...careerEntries, ...internshipEntries];
}
