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
    title: "Full Stack Developer (Internship)",
    summary: "Build and scale full-stack web applications with modern technologies.",
    description:
      "Launch your career as a Full Stack Developer by joining our engineering team. This internship is designed for recent graduates ready to apply their academic knowledge to real-world challenges. You will work directly on production code, contributing to scalable web applications using Next.js and FastAPI, while collaborating with senior mentors to bridge the gap between theory and professional practice.",
    type: "Full-Time",
    location: "Remote",
    responsibilities: [
      "Build and scale full-stack web applications in a live production environment",
      "Apply React.js and Next.js skills to develop modern, responsive user interfaces",
      "Support the design and maintenance of backend services using FastAPI",
      "Integrate third-party services via APIs and webhooks into real products",
      "Leverage AI coding tools to enhance productivity and solve complex problems",
      "Contribute to the codebase with a focus on scalability and maintainability",
      "Collaborate daily with senior mentors, product, AI, and design teams to deliver features",
    ],
    requirements: [
      "Recent graduate (CS or related field) eager to start a professional career",
      "Strong understanding of API design principles and RESTful standards",
      "Demonstrated hands-on experience in React and Next.js (projects/portfolio)",
      "Functional knowledge of backend development with Python (FastAPI is a plus)",
      "Familiarity with AI coding assistants (ChatGPT, Copilot) in development workflows",
      "Solid grasp of core concepts: authentication, async flows, and databases",
      "Commitment to writing clean, effective code and learning industry standards",
    ],
    niceToHave: [
      "Experience with automation tools or workflows",
      "Cloud deployment or DevOps exposure",
    ],
    techStack: ["React.js", "Next.js", "FastAPI", "Python", "PostgreSQL", "REST APIs", "TypeScript"],
  },
  {
    slug: "ai-automation-engineer",
    title: "AI Automation Engineer (Internship)",
    summary: "Design and build automated workflows using AI and low-code tools.",
    description:
      "Join us as an AI Automation Engineer to revolutionize how we work. This internship is perfect for problem-solvers who love connecting tools and automating repetitive tasks. You will design, build, and deploy intelligent workflows using low-code platforms and custom scripts, collaborating with senior mentors to integrate the latest AI models and boost efficiency across the organization.",
    type: "Full-Time",
    location: "Remote",
    responsibilities: [
      "Design and implement automated workflows using tools like n8n, Zapier, or Make",
      "Develop custom automation scripts using Python or JavaScript where low-code falls short",
      "Integrate LLMs (GPT-4, Claude) into business processes for intelligent decision making",
      "Connect disparate software systems via REST APIs and webhooks",
      "Monitor and optimize existing automation pipelines for reliability",
      "Collaborate with senior mentors and product teams to identify automation opportunities",
      "Document workflows and provide training on new automated tools",
    ],
    requirements: [
      "Recent graduate with a background in CS, Engineering, or relevant technical field",
      "Hands-on experience with Python or JavaScript for scripting",
      "Familiarity with automation platforms (n8n, Zapier, Make)",
      "Strong understanding of API integrations (REST, Webhooks)",
      "Exposure to prompting and integrating LLMs in workflows",
      "Analytical mindset for breaking down complex processes",
      "Driven to create efficiency and eliminate manual toil",
    ],
    niceToHave: [
      "Experience with cloud functions (AWS Lambda, Google Cloud Functions)",
      "Knowledge of database basics (SQL, NoSQL)",
    ],
    techStack: ["n8n", "Zapier", "Python", "JavaScript", "REST APIs", "OpenAI API", "Make"],
  },
  {
    slug: "ai-ml-engineer",
    title: "AI/ML Engineer (Internship)",
    summary: "Build RAG pipelines, fine-tune models, and deploy AI agents.",
    description:
      "Dive deep into the world of Artificial Intelligence as an AI/ML Engineer intern. This role is designed for those passionate about Large Language Models and cutting-edge AI applications. You will work on building RAG pipelines, fine-tuning models, and deploying AI agents that solve real-world user problems, continuously collaborating with senior mentors to refine your approach.",
    type: "Full-Time",
    location: "Remote",
    responsibilities: [
      "Build and optimize RAG (Retrieval-Augmented Generation) pipelines for domain-specific knowledge",
      "Experiment with and fine-tune open-source LLMs (Llama, Mistral) for specific tasks",
      "Develop AI agents using frameworks like LangChain or AutoGen",
      "Collaborate with senior mentors and backend engineers to serve AI models via APIs",
      "Evaluate model performance and implement improvements",
      "Stay updated with the latest research in Generative AI and propose new applications",
      "Contribute to the ethical and safe deployment of AI systems",
    ],
    requirements: [
      "Recent graduate (CS, Data Science, or AI focus) with a strong theoretical foundation",
      "Hands-on experience with Python and ML libraries (PyTorch, TensorFlow, Hugging Face)",
      "Understanding of Transformer architectures and LLM fundamentals",
      "Experience building RAG systems or working with vector databases (Pinecone, Weaver, etc.)",
      "Familiarity with LangChain, LlamaIndex, or similar frameworks",
      "Ability to read and implement concepts from research papers",
      "Passion for building intelligent, user-facing AI products",
    ],
    niceToHave: [
      "Experience with Docker and model deployment",
      "Knowledge of CUDA and GPU optimization",
    ],
    techStack: ["Python", "PyTorch", "Hugging Face", "LangChain", "Pinecone", "Docker", "FastAPI"],
  },
  {
    slug: "3d-2d-designer",
    title: "2D/3D Designer (Internship)",
    summary: "Create stunning 3D models, 2D graphics, and animations. Blender expertise is required.",
    description:
      "Start your journey as a 2D/3D Designer by working on live creative projects. This role is ideal for creative graduates looking to make a tangible impact with their art. You will collaborate with senior mentors and product teams to produce stunning visuals, 3D assets, and animations that define our brand and products. This is a practical, immersion-based role where you will refine your skills through real-world application.",
    type: "Full-Time",
    location: "Remote",
    responsibilities: [
      "Create high-quality 3D models, characters, and environments for actual product use",
      "Design compelling 2D graphics and marketing visuals for campaigns",
      "Produce engaging animations and motion graphics for web and promotional video",
      "Manage the end-to-end design pipeline, from initial concept to final export",
      "Collaborate with marketing and product stakeholders to visualize ideas",
      "Apply industry-standard tools (Blender, Adobe Suite) to professional deliverables",
      "Build a track record of shipped creative work",
    ],
    requirements: [
      "Recent graduate (Design, Arts, or related field) with a polished portfolio",
      "Hands-on experience in Blender for 3D modeling and animation (mandatory)",
      "Hands-on experience with 2D design tools like Photoshop, Illustrator, or Figma",
      "Practical knowledge of animation principles and motion graphics",
      "A sharp eye for composition, color, and typography in commercial contexts",
      "Ability to adapt to project requirements and incorporate team feedback",
      "Driven to create professional-grade visual storytelling",
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
