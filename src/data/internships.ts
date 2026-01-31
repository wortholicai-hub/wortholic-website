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
    slug: "3d-2d-designer",
    title: "3D & 2D Designer",
    summary: "Create stunning 3D models, 2D graphics, and animations. Blender expertise is required.",
    description:
      "Join our creative team as a 3D & 2D Designer. You will create eye-catching visuals, 3D models, characters, animations, and graphics for websites, marketing, and product showcases. This is a design-focused role for creative artists passionate about visual storytelling.",
    type: "Full-Time",
    location: "Remote",
    responsibilities: [
      "Create 3D models, characters, environments, and product visualizations",
      "Design 2D graphics, illustrations, and marketing visuals",
      "Develop animations and motion graphics for videos and web",
      "Create visual content for social media and advertising campaigns",
      "Design UI elements, icons, and branding assets",
      "Collaborate with marketing and product teams on creative projects",
      "Export assets in various formats for web, print, and video",
    ],
    requirements: [
      "Blender expertise is REQUIRED - must be proficient in 3D modeling, texturing, and animation",
      "Experience with 2D design tools (Photoshop, Illustrator, Figma)",
      "Understanding of design principles (composition, color, typography)",
      "Ability to create animations and motion graphics",
      "Creative eye and attention to detail",
      "Portfolio showcasing 3D and 2D work (Blender projects required)",
    ],
    niceToHave: [
      "Experience with After Effects or Premiere Pro",
      "Character design and rigging skills",
      "Experience with Maya, Cinema 4D, or 3ds Max",
      "Knowledge of video editing and VFX",
      "AR/VR content creation experience",
    ],
    techStack: ["Blender", "Photoshop", "Illustrator", "Figma", "After Effects", "Premiere Pro", "Maya"],
  },
];

export const internshipMenuItems: Menu[] = internships.map((internship, index) => ({
  id: 260 + index,
  title: internship.title,
  path: `/internships/${internship.slug}`,
  newTab: false,
}));
