import { Menu } from "@/types/menu";

export type Internship = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  skills: string[];
  duration: string;
  type: string;
  outcomes: string[];
};

export const internships: Internship[] = [
  {
    slug: "software-engineering",
    title: "Software Engineering Internship",
    summary: "Build real-world software features with modern engineering practices.",
    description:
      "Join our software engineering team to design, build, and improve production-grade applications. You will collaborate with mentors, follow code reviews, and learn how to deliver reliable features end-to-end.",
    skills: [
      "Programming fundamentals (any language)",
      "Data structures and algorithms basics",
      "Version control with Git",
      "Problem solving and debugging",
    ],
    duration: "3 months",
    type: "Unpaid",
    outcomes: [
      "Hands-on experience with agile workflows",
      "Confidence in building and shipping features",
      "Understanding of engineering best practices",
      "Portfolio-ready project contributions",
    ],
  },
  {
    slug: "full-stack-developer",
    title: "Full Stack Developer Internship",
    summary: "Work across frontend and backend to deliver complete solutions.",
    description:
      "This internship focuses on full stack development, including UI creation, API development, and database integration. You will learn how to connect the entire product flow and deploy features that users can use.",
    skills: [
      "HTML, CSS, and JavaScript fundamentals",
      "Basic understanding of APIs",
      "Familiarity with databases",
      "Willingness to learn both frontend and backend",
    ],
    duration: "2-3 months",
    type: "Unpaid",
    outcomes: [
      "Experience building full stack features",
      "Exposure to deployment workflows",
      "Ability to debug across the stack",
      "Confidence in product-level development",
    ],
  },
  {
    slug: "front-end-developer",
    title: "Front-End Developer Internship",
    summary: "Craft responsive, accessible, and beautiful user interfaces.",
    description:
      "Focus on building user-facing experiences with modern frontend frameworks. You will work on UI components, animations, performance, and accessibility best practices.",
    skills: [
      "HTML, CSS, and JavaScript",
      "Responsive design principles",
      "Basic knowledge of React or similar frameworks",
      "Attention to detail in UI/UX",
    ],
    duration: "2-3 months",
    type: "Unpaid",
    outcomes: [
      "Ability to build polished UI components",
      "Improved knowledge of frontend tooling",
      "Experience with design systems",
      "A strong UI portfolio contribution",
    ],
  },
  {
    slug: "back-end-developer",
    title: "Back-End Developer Internship",
    summary: "Build secure, scalable APIs and services.",
    description:
      "Work on server-side logic, API design, and database management. You will learn how to write secure, scalable services and support front-end applications.",
    skills: [
      "Any backend language (Node.js, Python, Java, or similar)",
      "Understanding of REST APIs",
      "Database basics (SQL or NoSQL)",
      "Security and performance awareness",
    ],
    duration: "3 months",
    type: "Unpaid",
    outcomes: [
      "Experience designing APIs",
      "Knowledge of server-side best practices",
      "Exposure to database optimization",
      "Improved backend debugging skills",
    ],
  },
  {
    slug: "3d-designing-animation",
    title: "3D Designing & Animation Internship",
    summary: "Create 3D models and motion graphics for digital experiences.",
    description:
      "Collaborate with creative teams to design 3D assets, animations, and visual concepts. You will work on storytelling, branding visuals, and product-ready assets.",
    skills: [
      "3D modeling basics (Blender, Maya, or similar)",
      "Understanding of animation principles",
      "Creativity and visual storytelling",
      "Attention to detail in design",
    ],
    duration: "2-3 months",
    type: "Unpaid",
    outcomes: [
      "Experience delivering production-ready visuals",
      "Improved animation workflow",
      "Stronger creative collaboration skills",
      "Portfolio-ready 3D assets",
    ],
  },
  {
    slug: "social-media-marketing-advertising",
    title: "Social Media Marketing / Advertising Internship",
    summary: "Plan and execute campaigns that grow brand awareness.",
    description:
      "Work with the marketing team to create social content, manage campaigns, and analyze performance. You will learn how to build strategies that drive engagement.",
    skills: [
      "Content creation and copywriting",
      "Basic marketing analytics",
      "Social media platform familiarity",
      "Creative thinking",
    ],
    duration: "2-3 months",
    type: "Unpaid",
    outcomes: [
      "Campaign planning and execution experience",
      "Improved understanding of marketing funnels",
      "Ability to analyze content performance",
      "Experience with brand storytelling",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design Internship",
    summary: "Design intuitive user experiences and modern interfaces.",
    description:
      "Collaborate with product and engineering teams to design user-centered interfaces. You will work on wireframes, prototypes, and usability improvements.",
    skills: [
      "Design tools (Figma, Adobe XD, or similar)",
      "UX research basics",
      "Information architecture",
      "Visual design principles",
    ],
    duration: "3 months",
    type: "Unpaid",
    outcomes: [
      "Experience with real-world product design",
      "Understanding of design handoff processes",
      "Improved usability evaluation skills",
      "Portfolio-ready UX case studies",
    ],
  },
  {
    slug: "qa-testing",
    title: "QA & Testing Internship",
    summary: "Ensure product quality through testing and process improvements.",
    description:
      "Learn software testing methodologies and collaborate with engineers to maintain high-quality releases. You will write test cases and report issues effectively.",
    skills: [
      "Attention to detail and analytical thinking",
      "Basic understanding of software development",
      "Manual testing techniques",
      "Clear documentation and reporting",
    ],
    duration: "2-3 months",
    type: "Unpaid",
    outcomes: [
      "Experience with QA workflows",
      "Improved bug reporting and tracking skills",
      "Understanding of release readiness",
      "Stronger analytical problem solving",
    ],
  },
  {
    slug: "devops-cloud",
    title: "DevOps & Cloud Internship",
    summary: "Support deployment, infrastructure, and automation workflows.",
    description:
      "Work on CI/CD pipelines, cloud configurations, and infrastructure monitoring. You will learn how to keep systems reliable, scalable, and secure.",
    skills: [
      "Basic Linux and command line knowledge",
      "Understanding of cloud services",
      "Interest in automation and tooling",
      "Problem solving mindset",
    ],
    duration: "3 months",
    type: "Unpaid",
    outcomes: [
      "Experience with DevOps workflows",
      "Exposure to cloud deployment practices",
      "Understanding of monitoring and uptime",
      "Improved automation skills",
    ],
  },
  {
    slug: "data-science-ml",
    title: "Data Science / ML Internship",
    summary: "Work with data, build models, and drive insights.",
    description:
      "Contribute to data preparation, analysis, and machine learning experimentation. You will work with datasets, build models, and communicate insights clearly.",
    skills: [
      "Python basics",
      "Data analysis fundamentals",
      "Statistics and probability basics",
      "Curiosity about data-driven decisions",
    ],
    duration: "3 months",
    type: "Unpaid",
    outcomes: [
      "Hands-on experience with data workflows",
      "Practical understanding of ML pipelines",
      "Improved analytical storytelling",
      "Portfolio-ready data project work",
    ],
  },
];

export const internshipMenuItems: Menu[] = [
  {
    id: 259,
    title: "All Types",
    path: "/internships",
    newTab: false,
  },
  ...internships.map((internship, index) => ({
    id: 260 + index,
    title: internship.title,
    path: `/internships/${internship.slug}`,
    newTab: false,
  })),
];
