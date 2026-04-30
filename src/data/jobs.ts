export type JobSeniority = "Senior" | "Lead" | "Staff" | "Principal";

export type Job = {
  id: string;
  slug: string;
  title: string;
  team: string;
  seniority: JobSeniority;
  location: string;
  region: string;
  workplace: "Remote" | "Hybrid";
  employmentType: "Full-time" | "Contract";
  summary: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
  requirements: string[];
  yearsExperience: string;
  compensation: string;
  featured: boolean;
  postedAt: string;
  validThrough: string;
};

type RoleTemplate = {
  slug: string;
  title: string;
  team: string;
  seniority: JobSeniority;
  employmentType: "Full-time" | "Contract";
  yearsExperience: string;
  focus: string;
  technologies: string[];
};

type HiringPod = {
  slug: string;
  location: string;
  region: string;
  workplace: "Remote" | "Hybrid";
  deliveryFocus: string;
};

const roleTemplates: RoleTemplate[] = [
  { slug: "llm-platform-engineer", title: "Senior LLM Platform Engineer", team: "AI Engineering", seniority: "Senior", employmentType: "Full-time", yearsExperience: "5+ years", focus: "LLM orchestration, RAG delivery, and evaluation systems", technologies: ["Python", "TypeScript", "OpenAI", "LangChain", "PostgreSQL", "Docker"] },
  { slug: "ai-product-engineer", title: "Senior AI Product Engineer", team: "AI Engineering", seniority: "Senior", employmentType: "Full-time", yearsExperience: "5+ years", focus: "customer-facing AI features and AI-native product delivery", technologies: ["Next.js", "Node.js", "OpenAI", "Supabase", "Tailwind CSS", "TypeScript"] },
  { slug: "machine-learning-engineer", title: "Lead Machine Learning Engineer", team: "AI Engineering", seniority: "Lead", employmentType: "Full-time", yearsExperience: "7+ years", focus: "applied machine learning systems and production model delivery", technologies: ["Python", "PyTorch", "TensorFlow", "MLflow", "AWS", "Feature Stores"] },
  { slug: "computer-vision-engineer", title: "Staff Computer Vision Engineer", team: "AI Engineering", seniority: "Staff", employmentType: "Full-time", yearsExperience: "8+ years", focus: "vision pipelines, inference quality, and deployment strategy", technologies: ["Python", "OpenCV", "PyTorch", "ONNX", "CUDA", "FastAPI"] },
  { slug: "mlops-engineer", title: "Senior MLOps Engineer", team: "AI Engineering", seniority: "Senior", employmentType: "Full-time", yearsExperience: "5+ years", focus: "model delivery tooling, observability, and repeatable release automation", technologies: ["Docker", "Kubernetes", "MLflow", "Terraform", "Python", "GitHub Actions"] },
  { slug: "full-stack-product-engineer", title: "Senior Full-Stack Product Engineer", team: "Product Engineering", seniority: "Senior", employmentType: "Full-time", yearsExperience: "5+ years", focus: "shipping SaaS features end to end with strong product judgment", technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "TypeScript", "REST APIs"] },
  { slug: "backend-platform-engineer", title: "Staff Backend Platform Engineer", team: "Platform Engineering", seniority: "Staff", employmentType: "Full-time", yearsExperience: "8+ years", focus: "backend architecture, shared services, and integration-heavy delivery", technologies: ["Node.js", "TypeScript", "Go", "PostgreSQL", "Redis", "Kafka"] },
  { slug: "frontend-engineer", title: "Senior Frontend Engineer", team: "Product Engineering", seniority: "Senior", employmentType: "Full-time", yearsExperience: "5+ years", focus: "high-quality interfaces for SaaS, dashboards, and AI products", technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GraphQL"] },
  { slug: "nextjs-commerce-engineer", title: "Lead Next.js Commerce Engineer", team: "Product Engineering", seniority: "Lead", employmentType: "Full-time", yearsExperience: "7+ years", focus: "SEO-safe commerce delivery and conversion-critical customer flows", technologies: ["Next.js", "TypeScript", "Stripe", "Shopify", "PostgreSQL", "Vercel"] },
  { slug: "mobile-engineer", title: "Senior Mobile Engineer", team: "Mobile Engineering", seniority: "Senior", employmentType: "Full-time", yearsExperience: "5+ years", focus: "mobile product quality, release discipline, and app performance", technologies: ["React Native", "TypeScript", "Expo", "Firebase", "REST APIs", "Mobile CI"] },
  { slug: "react-native-engineer", title: "Senior React Native Engineer", team: "Mobile Engineering", seniority: "Senior", employmentType: "Contract", yearsExperience: "5+ years", focus: "high-velocity React Native delivery and release recovery", technologies: ["React Native", "TypeScript", "Expo", "Native Modules", "Firebase", "App Store Connect"] },
  { slug: "cloud-architect", title: "Principal Cloud Architect", team: "Cloud & DevOps", seniority: "Principal", employmentType: "Full-time", yearsExperience: "10+ years", focus: "cloud architecture, cost control, and secure delivery standards", technologies: ["AWS", "GCP", "Terraform", "Kubernetes", "Cloudflare", "Observability"] },
  { slug: "devops-automation-engineer", title: "Senior DevOps Automation Engineer", team: "Cloud & DevOps", seniority: "Senior", employmentType: "Full-time", yearsExperience: "5+ years", focus: "CI/CD automation, infrastructure workflows, and release tooling", technologies: ["GitHub Actions", "Terraform", "Docker", "AWS", "Bash", "Node.js"] },
  { slug: "site-reliability-engineer", title: "Staff Site Reliability Engineer", team: "Cloud & DevOps", seniority: "Staff", employmentType: "Full-time", yearsExperience: "8+ years", focus: "service reliability, incident readiness, and operational standards", technologies: ["Kubernetes", "Prometheus", "Grafana", "OpenTelemetry", "Go", "AWS"] },
  { slug: "data-platform-engineer", title: "Senior Data Platform Engineer", team: "Data Engineering", seniority: "Senior", employmentType: "Full-time", yearsExperience: "5+ years", focus: "data pipelines, warehousing, and analytics-ready data products", technologies: ["Python", "SQL", "dbt", "Airflow", "BigQuery", "PostgreSQL"] },
  { slug: "analytics-engineer", title: "Lead Analytics Engineer", team: "Data Engineering", seniority: "Lead", employmentType: "Full-time", yearsExperience: "7+ years", focus: "metrics design, reporting strategy, and stakeholder-ready analytics", technologies: ["SQL", "dbt", "Looker", "BigQuery", "Amplitude", "Python"] },
  { slug: "application-security-engineer", title: "Senior Application Security Engineer", team: "Security Engineering", seniority: "Senior", employmentType: "Full-time", yearsExperience: "5+ years", focus: "practical appsec review, secure defaults, and delivery hardening", technologies: ["OWASP", "SAST", "DAST", "Node.js", "Cloudflare", "Terraform"] },
  { slug: "qa-automation-engineer", title: "Senior QA Automation Engineer", team: "Quality Engineering", seniority: "Senior", employmentType: "Full-time", yearsExperience: "5+ years", focus: "test automation, release confidence, and regression coverage", technologies: ["Playwright", "Cypress", "TypeScript", "API Testing", "CI Pipelines", "Postman"] },
  { slug: "product-designer", title: "Staff Product Designer", team: "Product Design", seniority: "Staff", employmentType: "Full-time", yearsExperience: "8+ years", focus: "product design systems and complex workflow clarity", technologies: ["Figma", "Design Systems", "Prototyping", "UX Writing", "Workshops", "User Research"] },
  { slug: "solutions-architect", title: "Senior Solutions Architect", team: "Solution Architecture", seniority: "Senior", employmentType: "Contract", yearsExperience: "6+ years", focus: "client discovery, phased roadmaps, and system architecture planning", technologies: ["System Design", "Cloud Platforms", "Integrations", "Architecture Reviews", "Workshops", "Documentation"] },
];

const hiringPods: HiringPod[] = [
  { slug: "us-remote", location: "Remote - United States", region: "United States", workplace: "Remote", deliveryFocus: "North American SaaS and AI product delivery" },
  { slug: "canada-remote", location: "Remote - Canada", region: "Canada", workplace: "Remote", deliveryFocus: "distributed engineering pods for growth-stage software teams" },
  { slug: "europe-remote", location: "Remote - Europe", region: "Europe", workplace: "Remote", deliveryFocus: "B2B software platforms and product modernization work" },
  { slug: "gcc-remote", location: "Remote - GCC", region: "GCC", workplace: "Remote", deliveryFocus: "automation-heavy digital transformation programs" },
  { slug: "pakistan-remote", location: "Remote - Pakistan", region: "Pakistan", workplace: "Remote", deliveryFocus: "high-velocity client delivery and engineering scale-up" },
  { slug: "dubai-hybrid", location: "Hybrid - Dubai, UAE", region: "Dubai", workplace: "Hybrid", deliveryFocus: "regional delivery with hybrid planning workshops and stakeholder sessions" },
];

function dateDaysFromNow(days: number) {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString();
}

function teamSummary(role: RoleTemplate, pod: HiringPod) {
  return `${role.title} for ${pod.deliveryFocus}, focused on ${role.focus}.`;
}

function teamDescription(role: RoleTemplate, pod: HiringPod) {
  return `Join Wortholic's ${role.team} team to lead ${role.focus}. This role supports ${pod.deliveryFocus} and works closely with product, design, and delivery leads to turn ambitious requirements into reliable software outcomes.`;
}

function buildResponsibilities(role: RoleTemplate, pod: HiringPod) {
  return [
    `Own senior-level delivery for ${role.focus} across active client engagements.`,
    `Partner with ${pod.region.toLowerCase()} stakeholders and internal delivery leads to keep execution commercially grounded.`,
    "Document technical decisions so distributed teams can move quickly without losing alignment.",
    `Raise engineering quality around ${role.team.toLowerCase()} through review, mentoring, and pragmatic architecture choices.`,
  ];
}

function buildRequirements(role: RoleTemplate, pod: HiringPod) {
  return [
    `${role.yearsExperience} of relevant experience with strong hands-on ownership in ${role.team.toLowerCase()}.`,
    `Proven ability to ship work tied to ${role.focus}.`,
    `Comfort collaborating across distributed teams supporting ${pod.deliveryFocus}.`,
    "Clear written communication and a bias toward practical delivery decisions.",
  ];
}

export const jobs: Job[] = roleTemplates.flatMap((role, roleIndex) =>
  hiringPods.map((pod, podIndex) => {
    const seed = roleIndex * 2 + podIndex;
    const slug = `${role.slug}-${pod.slug}`;

    return {
      id: slug,
      slug,
      title: role.title,
      team: role.team,
      seniority: role.seniority,
      location: pod.location,
      region: pod.region,
      workplace: pod.workplace,
      employmentType: role.employmentType,
      summary: teamSummary(role, pod),
      description: teamDescription(role, pod),
      technologies: role.technologies,
      responsibilities: buildResponsibilities(role, pod),
      requirements: buildRequirements(role, pod),
      yearsExperience: role.yearsExperience,
      compensation:
        role.employmentType === "Contract"
          ? "Competitive contract rate based on scope and delivery velocity."
          : "Competitive package based on market, seniority, and role scope.",
      featured: podIndex === 0,
      postedAt: dateDaysFromNow(-((seed % 18) + 1)),
      validThrough: dateDaysFromNow(45 + (seed % 25)),
    };
  })
);

export const jobsTotal = jobs.length;
export const seniorJobCount = jobs.filter((job) =>
  ["Senior", "Lead", "Staff", "Principal"].includes(job.seniority)
).length;
export const featuredJobs = jobs.filter((job) => job.featured).slice(0, 8);
export const jobTeams = Array.from(new Set(jobs.map((job) => job.team))).sort();
export const jobSeniorities = Array.from(new Set(jobs.map((job) => job.seniority)));
export const jobLocations = Array.from(new Set(jobs.map((job) => job.location))).sort();

export function getJobBySlug(slug: string) {
  return jobs.find((job) => job.slug === slug);
}

export function buildJobPostingSchema(job: Job, siteUrl: string) {
  const baseUrl = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
  const isRemote = job.workplace === "Remote";

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: `${job.description}\n\nResponsibilities:\n- ${job.responsibilities.join("\n- ")}\n\nRequirements:\n- ${job.requirements.join("\n- ")}`,
    datePosted: job.postedAt,
    validThrough: job.validThrough,
    employmentType: job.employmentType.toUpperCase().replace("-", "_"),
    hiringOrganization: {
      "@type": "Organization",
      name: "Wortholic",
      sameAs: baseUrl,
      logo: `${baseUrl}/images/logo/Wortholic.png`,
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: job.region,
    },
    jobLocationType: isRemote ? "TELECOMMUTE" : undefined,
    jobLocation: isRemote
      ? undefined
      : {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: job.location.replace("Hybrid - ", ""),
          },
        },
    industry: "Software Development",
    skills: job.technologies.join(", "),
    experienceRequirements: job.yearsExperience,
    directApply: true,
    url: `${baseUrl}/careers/${job.slug}`,
  };
}

export function buildCareersCollectionSchema(siteUrl: string) {
  const baseUrl = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Wortholic Careers",
    description:
      "Search senior-heavy software development, AI, cloud, security, design, and product roles at Wortholic.",
    url: `${baseUrl}/careers`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: jobs.length,
      itemListElement: jobs.slice(0, 24).map((job, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${baseUrl}/careers/${job.slug}`,
        name: `${job.title} - ${job.location}`,
      })),
    },
  };
}
