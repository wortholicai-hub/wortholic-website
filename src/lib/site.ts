export const siteConfig = {
  name: "Wortholic",
  legalName: "Wortholic",
  title: "Wortholic | AI Product Engineering & Custom Software Development",
  description:
    "Wortholic builds AI products, custom software platforms, automation systems, and dedicated engineering teams for startups and growth-stage companies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://wortholic.com",
  ogImage: "/images/general/image.png",
  email: "wortholicai@gmail.com",
  linkedInJobsUrl: process.env.LINKEDIN_JOBS_URL || "https://www.linkedin.com/company/wortholic/jobs/",
  socialLinks: [
    "https://www.linkedin.com/company/wortholic",
    "https://www.instagram.com/wortholicai/",
    "https://www.facebook.com/profile.php?id=61580509365459",
    "https://x.com/wotholic",
  ],
  serviceAreas: [
    "AI product development",
    "Custom software development",
    "Web application engineering",
    "Mobile application development",
    "Cloud engineering",
    "Workflow automation",
    "Dedicated development teams",
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
