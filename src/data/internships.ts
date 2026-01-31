import { Menu } from "@/types/menu";

export type Internship = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  type: string;
  location: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  techStack?: string[];
};

export const internships: Internship[] = [
  {
    slug: "full-stack-engineer",
    title: "Full-Stack Engineer",
    summary: "Build and scale full-stack web applications with modern technologies.",
    description:
      "Join our engineering team to build and scale full-stack web applications. You will work across frontend and backend, integrate third-party services, and collaborate with AI, product, and design teams to deliver automation-friendly and scalable systems.",
    type: "Full-Time",
    location: "Remote",
    responsibilities: [
      "Build and scale full-stack web applications",
      "Develop frontend using React.js and Next.js",
      "Design and maintain backend services using FastAPI",
      "Integrate third-party services via APIs and webhooks",
      "Work with AI coding tools to speed up development",
      "Build automation-friendly and scalable systems",
      "Collaborate with product, AI, and design teams",
    ],
    requirements: [
      "Strong experience with API design and integration (mandatory)",
      "Proficiency in React, Next.js",
      "Backend experience with FastAPI and Python",
      "Experience using AI coding tools (ChatGPT, Copilot, etc.)",
      "Understanding of authentication, async flows, and databases",
      "Clean, maintainable coding practices",
    ],
    niceToHave: [
      "Experience with automation tools or workflows",
      "Cloud deployment or DevOps exposure",
    ],
    techStack: ["React.js", "Next.js", "FastAPI", "Python", "PostgreSQL", "REST APIs", "TypeScript"],
  },
  {
    slug: "ai-engineer",
    title: "AI Engineer",
    summary: "Design and build AI-powered applications with LLMs and automation.",
    description:
      "Work on cutting-edge AI applications, integrating LLMs, building AI backends, and optimizing AI performance. You will collaborate with frontend teams and build automation-ready AI systems that power intelligent products.",
    type: "Full-Time",
    location: "Remote",
    responsibilities: [
      "Design and build AI-powered applications",
      "Develop AI backends using FastAPI",
      "Work on prompt engineering and AI workflows",
      "Integrate LLMs and AI services via APIs",
      "Collaborate with frontend teams (React / Next.js)",
      "Optimize AI performance, reliability, and cost",
      "Build automation-ready AI systems",
    ],
    requirements: [
      "Strong API integration skills (mandatory)",
      "Advanced Python and FastAPI",
      "Hands-on experience with AI coding and LLMs",
      "Prompt engineering experience",
      "Understanding of async systems and data pipelines",
    ],
    niceToHave: [
      "RAG pipelines, agents, embeddings",
      "Experience with AI automation tools",
    ],
    techStack: ["Python", "FastAPI", "OpenAI", "LangChain", "Vector Databases", "React", "Next.js"],
  },
  {
    slug: "3d-developer",
    title: "3D Developer",
    summary: "Build interactive 3D experiences for web applications.",
    description:
      "Create stunning interactive 3D experiences for web applications. You will integrate 3D assets into React/Next.js projects, optimize performance for real-time rendering, and implement animations and interactions that captivate users.",
    type: "Full-Time",
    location: "Remote",
    responsibilities: [
      "Build interactive 3D experiences for web applications",
      "Integrate 3D assets into React / Next.js projects",
      "Optimize 3D scenes for performance and real-time rendering",
      "Work closely with designers and product teams",
      "Implement animations, interactions, and transitions",
    ],
    requirements: [
      "Strong experience with Three.js and WebGL (mandatory)",
      "Solid JavaScript / TypeScript skills",
      "Experience integrating 3D with modern frontend frameworks",
      "Understanding of performance optimization for 3D",
      "Ability to collaborate across design and engineering teams",
    ],
    niceToHave: [
      "WebXR / AR / VR experience",
      "Shader programming (GLSL)",
    ],
    techStack: ["Three.js", "WebGL", "React Three Fiber", "TypeScript", "Blender", "GLTF", "Draco"],
  },
];

export const internshipMenuItems: Menu[] = internships.map((internship, index) => ({
  id: 260 + index,
  title: internship.title,
  path: `/internships/${internship.slug}`,
  newTab: false,
}));
