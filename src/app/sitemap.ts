import type { MetadataRoute } from "next";
import { internships } from "@/data/internships";
import { siteConfig } from "@/lib/site";

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

  const staticEntries = staticRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  })) satisfies MetadataRoute.Sitemap;

  const internshipEntries = internships.map((internship) => ({
    url: `${siteConfig.url}/internships/${internship.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticEntries, ...internshipEntries];
}
