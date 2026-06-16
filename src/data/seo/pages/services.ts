import { PageIntelligenceObject } from "../types";

export const servicePages: PageIntelligenceObject[] = [
  {
    page_id: "srv-001",
    page_family: "core",
    target_keyword: "AI automation agency",
    secondary_keywords: ["business automation", "workflow automation", "AI consulting", "process automation company"],
    slug: "ai-automation-agency",
    intent_summary: "AI Automation Services",
    meta_title: "Top AI Automation Agency | Wortholic",
    meta_description: "Transform your business with expert AI automation services. We build custom workflows, AI agents, and integrations to scale your operations without adding headcount.",
    h1: "AI Automation Agency for Modern Enterprises",
    short_value_proposition: "Stop doing manual work. We build production-grade AI workflows that save your team thousands of hours and significantly increase revenue.",
    buyer_persona: "Operations Managers, Founders, COOs",
    business_problem: "High manual workload, missed leads, siloed data, and escalating human capital costs are slowing down your company's growth. Your team is spending 40% of their week on repetitive administrative tasks instead of high-leverage strategic work.",
    operational_impact: "Losing 20+ hours a week per employee on repetitive data entry. Revenue leaks due to delayed follow-ups. Inability to scale operations without hiring more expensive staff.",
    service_solution: "We build tailored AI automations that connect your CRM, communications, and data. Our autonomous AI agents handle customer inquiries, internal data routing, and complex logic 24/7.",
    technical_solution: "Utilizing n8n, Python, OpenAI fine-tuning, LangChain, and custom webhooks. We deploy secure, scalable infrastructure on AWS or Vercel that integrates seamlessly with your existing tech stack.",
    workflow_before: "Manual data entry across spreadsheets, missed follow-ups due to human error, fragmented software systems that don't talk to each other, and slow customer response times.",
    workflow_after: "Instant lead qualification, automated data syncing across all platforms, zero manual entry, and intelligent AI agents handling Level 1 support inquiries instantly.",
    implementation_process: ["Process Discovery & Audit", "Architecture Design", "Custom Development & API Integration", "Testing & Deployment", "Monitoring & Scaling"],
    realistic_timeline: "2-4 Weeks for core workflows",
    relevant_tools: ["n8n", "OpenAI", "HubSpot", "Make", "Zapier"],
    integrations: ["CRM", "Slack", "Email", "ERP Systems"],
    industry_specific_examples: [
      {
        title: "Real Estate Lead Routing",
        description: "Automatically parsing Zillow leads, scoring them via AI, and routing them to the correct agent's phone within 30 seconds."
      },
      {
        title: "E-Commerce Customer Support",
        description: "An AI agent trained on historical support tickets that resolves 70% of WISMO (Where Is My Order) queries without human intervention."
      }
    ],
    objections_and_answers: [
      {
        objection: "Will AI replace my team?",
        answer: "No. Our AI automations handle the repetitive, boring tasks so your team can focus on creative, high-value work that requires human empathy and strategy."
      }
    ],
    faqs: [
      {
        question: "How long does it take to implement AI automation?",
        answer: "Most core workflows are deployed within 2 to 4 weeks depending on the complexity of your legacy systems and API availability."
      },
      {
        question: "Is my business data secure with AI?",
        answer: "Yes. We use enterprise-grade LLM deployments (like Azure OpenAI) which guarantee your data is not used to train public models. We adhere to SOC2 and GDPR compliance standards."
      },
      {
        question: "What is the ROI of working with an AI automation agency?",
        answer: "Clients typically see a full return on investment within 3 to 6 months through reduced operational costs and increased sales velocity."
      }
    ],
    cta_angle: {
      headline: "Ready to automate your operations?",
      subheadline: "Let's discuss your workflow bottlenecks.",
      button_text: "Get a Free Automation Audit"
    },
    related_pages: [],
    schema_type: ["WebPage", "ProfessionalService", "FAQPage"]
  },
  {
    page_id: "srv-002",
    page_family: "core",
    target_keyword: "Custom Web Application Development",
    secondary_keywords: ["React Native development", "Next.js development", "custom SaaS development"],
    slug: "custom-web-application-development",
    intent_summary: "Custom Web App Development",
    meta_title: "Custom Web Application Development Services | Wortholic",
    meta_description: "Expert custom web application development services. We build scalable, high-performance SaaS platforms and internal tools using React, Next.js, and Node.",
    h1: "Custom Web Application Development Services",
    short_value_proposition: "We build blazing-fast, scalable web applications that solve complex business problems. From SaaS MVPs to enterprise internal tools.",
    buyer_persona: "CTOs, Product Managers, Founders",
    business_problem: "Off-the-shelf software no longer fits your unique business processes. You need a custom platform to scale, but lack the elite engineering talent to build it quickly and securely.",
    operational_impact: "Forced to use clunky workarounds in existing software. High technical debt from previous rushed development. Inability to launch new features fast enough to beat competitors.",
    service_solution: "Full-stack custom web application development. We handle UI/UX design, frontend architecture, backend API development, and secure cloud deployment.",
    technical_solution: "We specialize in the modern JavaScript ecosystem: React, Next.js, TypeScript, Node.js, PostgreSQL, and Vercel. This ensures enterprise-grade performance and SEO out of the box.",
    workflow_before: "Struggling with slow, buggy legacy applications. Development cycles taking months for minor features. Poor user experience leading to customer churn.",
    workflow_after: "A beautifully designed, lightning-fast web application. Rapid feature deployment, zero downtime, and a modern tech stack that attracts top developer talent.",
    implementation_process: ["Requirements Gathering", "UI/UX Prototyping", "Sprint-based Agile Development", "QA & Automated Testing", "Launch & DevOps Maintenance"],
    realistic_timeline: "8-16 Weeks for an MVP",
    relevant_tools: ["Next.js", "React", "PostgreSQL", "Tailwind CSS"],
    integrations: ["Stripe API", "AWS", "Auth0"],
    industry_specific_examples: [
      {
        title: "B2B SaaS Platforms",
        description: "Building multi-tenant architecture with complex role-based access controls and billing integrations."
      },
      {
        title: "Internal Dashboards",
        description: "Consolidating data from 5 different APIs into a single, lightning-fast React dashboard for executives."
      }
    ],
    objections_and_answers: [
      {
        objection: "Is custom software too expensive?",
        answer: "While the initial investment is higher than off-the-shelf SaaS, custom software becomes a proprietary asset that adds valuation to your company and eliminates expensive monthly per-user licensing fees."
      }
    ],
    faqs: [
      {
        question: "Do you use modern frameworks like Next.js?",
        answer: "Yes, we are experts in the modern React ecosystem. We heavily utilize Next.js for its performance, SEO benefits, and edge-computing capabilities."
      },
      {
        question: "Who owns the code after development?",
        answer: "You do. Upon project completion and final payment, the intellectual property and full source code are transferred entirely to your organization."
      },
      {
        question: "Do you provide ongoing support after launch?",
        answer: "Yes, we offer flexible SLA-based maintenance and retainer packages to ensure your web application remains secure, updated, and continues to evolve."
      }
    ],
    cta_angle: {
      headline: "Have a software project in mind?",
      subheadline: "Let's turn your vision into production-ready code.",
      button_text: "Discuss Your Project"
    },
    related_pages: [],
    schema_type: ["WebPage", "Service", "FAQPage"]
  },
  {
    page_id: "srv-003",
    page_family: "core",
    target_keyword: "Enterprise RAG Development Services",
    secondary_keywords: ["Retrieval-Augmented Generation", "Custom LLM development", "vector database integration"],
    slug: "enterprise-rag-development-services",
    intent_summary: "RAG & Custom LLM Solutions",
    meta_title: "Enterprise RAG Development Services | Custom AI | Wortholic",
    meta_description: "Secure, private Enterprise RAG (Retrieval-Augmented Generation) development. We build custom AI models that chat with your proprietary company data securely.",
    h1: "Enterprise RAG Development Services",
    short_value_proposition: "Unlock the power of your proprietary data. We build secure RAG systems that allow your team to query thousands of internal documents instantly.",
    buyer_persona: "CIOs, Head of Innovation, Enterprise IT",
    business_problem: "Your company sits on terabytes of valuable data (PDFs, Confluence, Jira, historical emails), but employees can't find answers quickly. Public LLMs like ChatGPT hallucinate and pose severe security risks for your confidential data.",
    operational_impact: "Employees waste 2+ hours daily searching for internal information. Compliance risks from employees pasting sensitive data into public AI tools.",
    service_solution: "We build secure Retrieval-Augmented Generation (RAG) pipelines. This connects an advanced LLM directly to your secure databases, ensuring the AI only answers based on your actual data.",
    technical_solution: "We implement Pinecone/Milvus for vector search, LangChain/LlamaIndex for orchestration, and deploy open-source models (Llama 3) or secure Azure OpenAI instances to guarantee data privacy.",
    workflow_before: "Keyword searching through hundreds of folders, asking colleagues on Slack, and reading through 50-page PDFs to find a single policy answer.",
    workflow_after: "Typing a natural language question into a secure company portal and receiving an instant, cited answer directly from your internal documents.",
    implementation_process: ["Data Ingestion & Cleaning", "Vector Embeddings Setup", "LLM Orchestration", "Security & RBAC Implementation", "UI Deployment"],
    realistic_timeline: "4-8 Weeks",
    relevant_tools: ["Pinecone", "LangChain", "Azure OpenAI", "LlamaIndex"],
    integrations: ["SharePoint", "Confluence", "Google Drive", "AWS S3"],
    industry_specific_examples: [
      {
        title: "Legal Document Analysis",
        description: "Allowing paralegals to instantly cross-reference new contracts against a database of 10,000 historical case files."
      },
      {
        title: "Engineering Technical Support",
        description: "An AI that reads massive engineering schematics and hardware manuals to assist field technicians in real-time."
      }
    ],
    objections_and_answers: [
      {
        objection: "Will the AI leak our secure data?",
        answer: "No. Our enterprise RAG architecture respects your existing Role-Based Access Controls (RBAC). An employee can only query data they already have permission to view."
      }
    ],
    faqs: [
      {
        question: "What is Retrieval-Augmented Generation (RAG)?",
        answer: "RAG is an AI framework that connects a Large Language Model (like GPT-4) to your private database. Instead of guessing, the AI retrieves the exact document and generates an answer based strictly on that document."
      },
      {
        question: "Can RAG eliminate AI hallucinations?",
        answer: "While no AI is perfect, RAG drastically reduces hallucinations by forcing the model to cite specific sources from your database. If the answer isn't in your data, it is programmed to say 'I don't know'."
      },
      {
        question: "Do we need to train a custom model from scratch?",
        answer: "Rarely. RAG is much more cost-effective than fine-tuning or training from scratch because it uses a pre-trained model and gives it access to a dynamic search engine of your data."
      }
    ],
    cta_angle: {
      headline: "Want to chat with your company data?",
      subheadline: "Let's build a secure RAG prototype.",
      button_text: "Schedule an AI Consultation"
    },
    related_pages: [],
    schema_type: ["WebPage", "Service", "FAQPage"]
  },
  {
    page_id: "srv-004",
    page_family: "core",
    target_keyword: "Legacy System Modernization Company",
    secondary_keywords: ["software migration", "monolith to microservices", "cloud migration services"],
    slug: "legacy-system-modernization-company",
    intent_summary: "Legacy Modernization",
    meta_title: "Legacy System Modernization Company | Secure Software Migration",
    meta_description: "Upgrade your outdated software safely. We are a legacy system modernization company specializing in migrating monoliths to modern microservices and cloud infrastructure.",
    h1: "Legacy System Modernization Company",
    short_value_proposition: "De-risk your business by modernizing outdated software. We safely migrate legacy monoliths to scalable, secure, cloud-native architectures.",
    buyer_persona: "CTOs, IT Directors, Enterprise Architects",
    business_problem: "Your core business relies on software built 10+ years ago. It's becoming impossible to maintain, security vulnerabilities are mounting, and finding developers who know the old language is increasingly expensive.",
    operational_impact: "System outages costing thousands per minute. Inability to integrate with modern APIs (like Stripe or modern CRMs). Technical debt paralyzing new feature development.",
    service_solution: "Strategic legacy software modernization. We don't just 'lift and shift'. We refactor and rebuild your applications using the Strangler Fig pattern to ensure zero downtime during migration.",
    technical_solution: "Migrating from on-premise monoliths (PHP, older .NET, Java) to containerized microservices (Docker, Kubernetes, Node.js, Go) hosted on AWS or GCP.",
    workflow_before: "Fear of deploying updates because the system might break. Huge server costs. Slow load times. Security compliance failures.",
    workflow_after: "Automated CI/CD pipelines, elastic cloud scaling, modern security compliance, and an architecture that attracts top-tier engineering talent.",
    implementation_process: ["Codebase Audit & Risk Assessment", "Architecture Blueprinting", "Incremental Migration (Strangler Pattern)", "Data Migration & Testing", "Sunsetting Legacy System"],
    realistic_timeline: "3-12 Months depending on scale",
    relevant_tools: ["Docker", "Kubernetes", "AWS", "Terraform"],
    integrations: ["Legacy SQL Databases", "Modern Cloud APIs"],
    industry_specific_examples: [
      {
        title: "Banking Mainframe Migration",
        description: "Slowly strangling an old financial monolith by routing new payment APIs through a modern Node.js microservice layer."
      },
      {
        title: "Healthcare EHR Upgrades",
        description: "Moving outdated on-premise patient records to a HIPAA-compliant, cloud-native Next.js application."
      }
    ],
    objections_and_answers: [
      {
        objection: "Will we experience downtime during the migration?",
        answer: "We utilize incremental migration patterns (like the Strangler Pattern) where the new system slowly takes over routes from the old system. This ensures virtually zero downtime."
      }
    ],
    faqs: [
      {
        question: "What is the Strangler Fig pattern in software modernization?",
        answer: "It is a strategy where you build a new system around the edges of the old legacy system. Gradually, functionality is redirected to the new system until the old system can be safely 'strangled' and turned off."
      },
      {
        question: "Should we rewrite from scratch or refactor?",
        answer: "A 'Big Bang' rewrite from scratch is extremely risky and often fails. We strongly recommend incremental refactoring, replacing the most painful bottlenecks first while keeping the system running."
      },
      {
        question: "How do you handle legacy database migration?",
        answer: "We use data replication techniques to keep the legacy database and the new modern database (like PostgreSQL) in sync during the transition period, ensuring no data loss."
      }
    ],
    cta_angle: {
      headline: "Is your legacy software holding you back?",
      subheadline: "Let's plan a safe migration strategy.",
      button_text: "Request a Technical Audit"
    },
    related_pages: [],
    schema_type: ["WebPage", "Service", "FAQPage"]
  },
  {
    page_id: "srv-005",
    page_family: "core",
    target_keyword: "Custom CRM Development",
    secondary_keywords: ["bespoke CRM software", "custom ERP development", "salesforce alternative"],
    slug: "custom-crm-development",
    intent_summary: "Custom CRM Development",
    meta_title: "Custom CRM Development Services | Build Your Own CRM",
    meta_description: "Stop paying massive per-user licensing fees. We offer custom CRM development services to build tailored, scalable software that perfectly matches your sales process.",
    h1: "Custom CRM Development Services",
    short_value_proposition: "Build a CRM that actually fits your workflow. Eliminate per-user subscription fees and own your proprietary data architecture.",
    buyer_persona: "VP of Sales, Operations Directors, Scale-up Founders",
    business_problem: "You are paying tens of thousands of dollars a month for Salesforce or HubSpot, but only using 10% of their features. Worse, you have to change your unique sales process to fit how their software works.",
    operational_impact: "Bleeding cash on SaaS licensing. Low adoption rates from sales reps because the system is too complicated. Poor reporting because the data model doesn't match your business.",
    service_solution: "We build fully bespoke Customer Relationship Management (CRM) and Enterprise Resource Planning (ERP) systems tailored to your exact operational requirements.",
    technical_solution: "Built with high-performance React/Next.js frontends and robust PostgreSQL databases. Features include custom role-based access, real-time analytics dashboards, and seamless API integrations.",
    workflow_before: "Sales reps fighting with clunky interfaces, multiple spreadsheets required to supplement the CRM, and paying $150/user/month for features you don't need.",
    workflow_after: "A streamlined, lightning-fast CRM designed specifically for your sales cycle. 100% user adoption. Zero monthly per-user licensing fees. Total data ownership.",
    implementation_process: ["Workflow & Sales Cycle Mapping", "Database Architecture", "Frontend Dashboard Development", "Legacy Data Import", "Team Training & Handoff"],
    realistic_timeline: "10-16 Weeks",
    relevant_tools: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    integrations: ["Email/Gmail API", "Twilio (SMS)", "Stripe", "VoIP"],
    industry_specific_examples: [
      {
        title: "Logistics Broker CRM",
        description: "A custom CRM built for freight brokers that integrates live load-board APIs directly into the sales pipeline."
      },
      {
        title: "Real Estate Portfolio CRM",
        description: "A specialized system for property managers to track tenant communications, lease renewals, and maintenance requests in one dashboard."
      }
    ],
    objections_and_answers: [
      {
        objection: "Isn't it safer to just use Salesforce?",
        answer: "Salesforce is powerful but incredibly bloated. If your business has a unique workflow, you will end up spending hundreds of thousands of dollars on Salesforce consultants just to customize it. Building custom gives you a leaner, faster system that you actually own."
      }
    ],
    faqs: [
      {
        question: "Can we migrate our existing data from HubSpot or Salesforce?",
        answer: "Absolutely. Data migration is a core part of our custom CRM development process. We map your old data structures to the new, optimized database via secure API exports."
      },
      {
        question: "Will our custom CRM integrate with our email and phones?",
        answer: "Yes, we integrate with the Google Workspace / Microsoft 365 APIs for email tracking, and tools like Twilio or Aircall for SMS and VoIP logging directly inside the CRM."
      },
      {
        question: "How much does a custom CRM save in the long run?",
        answer: "For a team of 50 users paying $150/month for Enterprise SaaS, you spend $90,000 annually just on licenses. A custom CRM pays for itself in savings, usually within the first 12 to 18 months."
      }
    ],
    cta_angle: {
      headline: "Tired of bloated SaaS CRMs?",
      subheadline: "Let's build a system that works for your team.",
      button_text: "Discuss Custom CRM Options"
    },
    related_pages: [],
    schema_type: ["WebPage", "Service", "FAQPage"]
  }
];
