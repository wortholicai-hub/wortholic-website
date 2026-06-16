import { PageIntelligenceObject } from "../types";

export const useCasePages: PageIntelligenceObject[] = [
  {
    page_id: "uc-001",
    page_family: "use-case",
    target_keyword: "Automated Lead Qualification Systems",
    secondary_keywords: ["AI lead scoring", "automated lead routing", "sales funnel automation"],
    slug: "automated-lead-qualification-systems",
    intent_summary: "Lead Qualification Automation",
    meta_title: "Automated Lead Qualification Systems | AI Sales Routing",
    meta_description: "Stop wasting sales time on unqualified leads. We build automated lead qualification systems using AI to score, route, and book meetings instantly.",
    h1: "Automated Lead Qualification Systems",
    short_value_proposition: "Ensure your sales team only speaks to high-intent buyers. We automate the qualification, scoring, and routing of inbound leads.",
    buyer_persona: "VP of Sales, Revenue Operations Directors",
    business_problem: "Marketing is generating hundreds of leads, but 70% are unqualified. Your expensive sales reps are wasting hours calling people who have no budget or intent.",
    operational_impact: "Low conversion rates, burned-out sales reps, and high-intent leads turning to competitors because it took too long to get a callback.",
    service_solution: "We build AI-powered lead qualification pipelines. Leads are instantly scored against your ideal customer profile and routed to the correct rep in seconds.",
    technical_solution: "n8n webhooks, OpenAI analysis for intent scoring, and deep integrations with Salesforce or HubSpot.",
    workflow_before: "A lead fills out a form. A day later, a junior SDR calls them to ask basic qualifying questions.",
    workflow_after: "A lead submits a form. Within 10 seconds, AI analyzes their company size, determines high intent, and instantly sends them a Calendly link to book with an Account Executive.",
    implementation_process: ["Sales Funnel Mapping", "Lead Scoring Logic Design", "CRM & Webhook Integration", "AI Intent Engine Setup", "Go-Live"],
    realistic_timeline: "2-4 Weeks",
    relevant_tools: ["n8n", "OpenAI", "HubSpot", "Salesforce"],
    integrations: ["Typeform/Web Forms", "Calendly", "Slack"],
    industry_specific_examples: [
      {
        title: "B2B SaaS Lead Routing",
        description: "Automatically cross-referencing inbound emails against the Clearbit API to route enterprise leads to Senior AEs and small business leads to a self-serve portal."
      }
    ],
    objections_and_answers: [
      {
        objection: "Will the AI mistakenly reject good leads?",
        answer: "We configure the AI with strict confidence thresholds. If a lead falls into a 'grey area', it is flagged for manual human review rather than being rejected."
      }
    ],
    faqs: [
      {
        question: "How fast does the system qualify a lead?",
        answer: "Near instantly. Most of our systems process, score, and route a lead in under 5 seconds."
      }
    ],
    cta_angle: {
      headline: "Are your sales reps wasting time?",
      subheadline: "Let's automate your lead qualification.",
      button_text: "Get a Workflow Audit"
    },
    related_pages: [],
    schema_type: ["WebPage", "Service"]
  },
  {
    page_id: "uc-002",
    page_family: "use-case",
    target_keyword: "AI Voice Receptionist Development",
    secondary_keywords: ["AI phone answering service", "custom AI voice agent", "Twilio AI receptionist"],
    slug: "ai-voice-receptionist-development",
    intent_summary: "AI Voice Receptionists",
    meta_title: "AI Voice Receptionist Development | Custom Voice Bots",
    meta_description: "Never miss a customer call. We build highly conversational AI Voice Receptionists using Twilio and ElevenLabs that book appointments and answer FAQs 24/7.",
    h1: "AI Voice Receptionist Development",
    short_value_proposition: "Deploy an AI receptionist that never sleeps. We build conversational voice agents that answer calls, book appointments, and sound remarkably human.",
    buyer_persona: "Clinic Owners, Service Business Founders, Customer Success Directors",
    business_problem: "High call volumes mean your front desk is constantly putting customers on hold, or sending them to voicemail after hours.",
    operational_impact: "Losing revenue from missed calls and providing a poor customer experience with long hold times.",
    service_solution: "A custom AI Voice Agent that handles inbound calls, answers common questions, and integrates with your booking calendar.",
    technical_solution: "Twilio Programmable Voice, ElevenLabs for ultra-realistic Text-to-Speech, and OpenAI for conversational logic.",
    workflow_before: "Customer calls at 7 PM, hits voicemail, and calls a competitor instead.",
    workflow_after: "Customer calls at 7 PM, the AI receptionist answers immediately, confirms availability, and books the appointment in your CRM.",
    implementation_process: ["Telephony Setup", "Scripting & Prompt Engineering", "Voice Cloning/Selection", "CRM API Integration", "Test Calls"],
    realistic_timeline: "4-6 Weeks",
    relevant_tools: ["Twilio", "ElevenLabs", "Vapi"],
    integrations: ["Calendly", "Custom CRMs"],
    industry_specific_examples: [
      {
        title: "Home Services Dispatch",
        description: "An AI voice agent that takes emergency plumbing calls at 2 AM, categorizes the severity, and immediately texts the on-call technician."
      }
    ],
    objections_and_answers: [
      {
        objection: "Will the AI get confused by accents or background noise?",
        answer: "We use state-of-the-art Speech-to-Text models (like Deepgram) that are highly resilient to background noise and varying accents."
      }
    ],
    faqs: [
      {
        question: "Can the AI transfer the call to a real human?",
        answer: "Yes. If the AI detects frustration or a complex question it cannot answer, it seamlessly transfers the call to a human agent's phone."
      }
    ],
    cta_angle: {
      headline: "Stop missing phone calls.",
      subheadline: "Deploy your AI Voice Receptionist.",
      button_text: "Listen to a Demo Call"
    },
    related_pages: [],
    schema_type: ["WebPage", "Service"]
  },
  {
    page_id: "uc-003",
    page_family: "use-case",
    target_keyword: "Automated Customer Onboarding Portals",
    secondary_keywords: ["client onboarding automation", "custom onboarding portal", "SaaS user onboarding"],
    slug: "automated-customer-onboarding-portals",
    intent_summary: "Client Onboarding Portals",
    meta_title: "Automated Customer Onboarding Portals | Custom Development",
    meta_description: "Deliver a premium first impression. We build automated customer onboarding portals that collect data, trigger welcome flows, and provision accounts instantly.",
    h1: "Automated Customer Onboarding Portals",
    short_value_proposition: "Turn tedious paperwork into a seamless digital experience. We build custom onboarding portals that WOW new clients.",
    buyer_persona: "Customer Success Managers, Agency Owners",
    business_problem: "When a new client signs up, your team manually sends 5 different emails for document collection, Stripe billing, and scheduling kickoff calls.",
    operational_impact: "Clients get confused by the disjointed process, slowing down time-to-value and creating early churn risk.",
    service_solution: "A single, white-labeled web portal where clients securely upload documents, sign contracts, and complete their profile in one sitting.",
    technical_solution: "Next.js frontend, secure AWS S3 document storage, DocuSign API, and automated background triggers.",
    workflow_before: "Messy email threads chasing clients for their logo files and signed contracts.",
    workflow_after: "Client logs into a beautiful portal, completes a progress bar of tasks, and the system automatically notifies your team when it's done.",
    implementation_process: ["Onboarding Process Mapping", "Portal UI/UX Design", "API Integrations (Stripe/DocuSign)", "Secure Authentication Setup"],
    realistic_timeline: "6-10 Weeks",
    relevant_tools: ["Next.js", "Auth0", "Tailwind CSS"],
    integrations: ["DocuSign", "Stripe", "HubSpot"],
    industry_specific_examples: [
      {
        title: "Wealth Management Onboarding",
        description: "A highly secure portal for new high-net-worth clients to upload tax documents and complete KYC compliance forms."
      }
    ],
    objections_and_answers: [
      {
        objection: "Can't we just use Typeform?",
        answer: "Typeform is great for simple surveys, but it doesn't support complex, multi-day saved sessions, secure document uploads, or deep two-way syncing with your proprietary database."
      }
    ],
    faqs: [
      {
        question: "Is the portal white-labeled to our brand?",
        answer: "Absolutely. We build the portal to perfectly match your brand's domain, colors, and typography, ensuring a premium user experience."
      }
    ],
    cta_angle: {
      headline: "Is your onboarding process messy?",
      subheadline: "Let's build a seamless client portal.",
      button_text: "Discuss Custom Portals"
    },
    related_pages: [],
    schema_type: ["WebPage", "Service"]
  },
  {
    page_id: "uc-004",
    page_family: "use-case",
    target_keyword: "Predictive Inventory Management",
    secondary_keywords: ["AI inventory forecasting", "custom warehouse software", "supply chain automation"],
    slug: "predictive-inventory-management",
    intent_summary: "Predictive Inventory Solutions",
    meta_title: "Predictive Inventory Management Software | AI Forecasting",
    meta_description: "Stop running out of stock. We build custom predictive inventory management software using AI to forecast demand and automate purchasing.",
    h1: "Predictive Inventory Management Systems",
    short_value_proposition: "Never overstock or stock-out again. We use AI to forecast demand and automate your supply chain purchasing.",
    buyer_persona: "Supply Chain Directors, E-commerce Founders",
    business_problem: "You are relying on gut feelings or basic spreadsheet averages to order inventory, leading to massive capital tied up in dead stock.",
    operational_impact: "Losing sales because top-performing products are sold out, while paying expensive warehousing fees for products that aren't moving.",
    service_solution: "Custom inventory dashboards powered by Machine Learning models that analyze historical sales, seasonality, and external factors to predict exactly what you need to order.",
    technical_solution: "Python data models (Prophet/XGBoost), integrated with a React/Next.js dashboard connected directly to your Shopify or ERP database.",
    workflow_before: "Spending hours in Excel trying to guess how many units to order for Q4.",
    workflow_after: "A dashboard alerts you: 'Reorder 500 units of Product X today to avoid a stock-out on November 15th', with a 1-click purchase order button.",
    implementation_process: ["Historical Data Cleaning", "Predictive Model Training", "ERP Integration", "Dashboard UI Development"],
    realistic_timeline: "10-14 Weeks",
    relevant_tools: ["Python", "Next.js", "PostgreSQL"],
    integrations: ["Shopify", "NetSuite", "ShipStation"],
    industry_specific_examples: [
      {
        title: "Perishable Goods Forecasting",
        description: "An AI model for a food distributor that predicts demand based on local weather forecasts and historical restaurant ordering patterns."
      }
    ],
    objections_and_answers: [
      {
        objection: "Is AI really better than our experienced buyer?",
        answer: "The AI doesn't replace the buyer; it gives them superpower insights. The AI can instantly analyze millions of data points across thousands of SKUs, catching trends a human might miss."
      }
    ],
    faqs: [
      {
        question: "Can the system automatically generate Purchase Orders?",
        answer: "Yes, we can set up automated workflows where the system drafts POs and sends them to your suppliers, only requiring a single human click to approve."
      }
    ],
    cta_angle: {
      headline: "Tired of guessing your inventory?",
      subheadline: "Let's build a predictive demand engine.",
      button_text: "Talk to a Data Expert"
    },
    related_pages: [],
    schema_type: ["WebPage", "Service"]
  },
  {
    page_id: "uc-005",
    page_family: "use-case",
    target_keyword: "Custom Employee Management Dashboards",
    secondary_keywords: ["HR automation software", "custom intranet portal", "employee performance tracking software"],
    slug: "custom-employee-management-dashboards",
    intent_summary: "HR & Employee Dashboards",
    meta_title: "Custom Employee Management Dashboards | HR Software",
    meta_description: "Centralize your workforce data. We build custom employee management dashboards, company intranets, and performance tracking software.",
    h1: "Custom Employee Management Dashboards",
    short_value_proposition: "Get your entire company on the same page. We build custom employee portals that centralize HR, KPIs, and internal communications.",
    buyer_persona: "HR Directors, COOs",
    business_problem: "Employee data is scattered across payroll systems, Slack, Google Drive, and performance review spreadsheets.",
    operational_impact: "Managers lack visibility into team performance, and employees feel disconnected from company goals and resources.",
    service_solution: "A centralized, custom-built company intranet and employee dashboard that connects to all your existing tools.",
    technical_solution: "Next.js, secure JWT authentication, and API integrations with your HRIS (e.g., Gusto, Workday).",
    workflow_before: "Employees asking HR where to find the PTO policy or the Q3 goal sheet.",
    workflow_after: "Employees log into a beautiful dashboard that shows their remaining PTO, current KPI progress, and important company announcements.",
    implementation_process: ["Data Silo Discovery", "UI Dashboard Design", "HRIS API Integrations", "Secure Deployment"],
    realistic_timeline: "8-12 Weeks",
    relevant_tools: ["Next.js", "Tailwind CSS"],
    integrations: ["Gusto", "BambooHR", "Slack"],
    industry_specific_examples: [
      {
        title: "Sales Gamification Leaderboard",
        description: "A custom TV dashboard in the sales bullpen that pulls real-time data from Salesforce to display rep performance and trigger celebrations."
      }
    ],
    objections_and_answers: [
      {
        objection: "Can't we just use SharePoint?",
        answer: "SharePoint is notoriously clunky and difficult to customize. We build bespoke React portals that employees actually enjoy using, with integrations SharePoint can't handle out-of-the-box."
      }
    ],
    faqs: [
      {
        question: "Is employee data kept secure?",
        answer: "Absolutely. We implement enterprise-grade security protocols, including OAuth SSO (Single Sign-On) so access is tightly controlled via your existing Azure or Google Workspace directories."
      }
    ],
    cta_angle: {
      headline: "Is your company data scattered?",
      subheadline: "Let's build your custom employee hub.",
      button_text: "Discuss Custom Dashboards"
    },
    related_pages: [],
    schema_type: ["WebPage", "Service"]
  }
];
