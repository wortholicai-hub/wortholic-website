import { PageIntelligenceObject } from "../types";

export const industryIntegrationsPages: PageIntelligenceObject[] = [
  {
    page_id: "indint-001",
    page_family: "industry",
    target_keyword: "EHR/EMR integration for healthcare",
    secondary_keywords: ["Epic API integration", "Cerner HL7 interface", "custom healthcare software"],
    slug: "ehr-emr-integration-for-healthcare",
    intent_summary: "EHR/EMR Integrations",
    meta_title: "EHR/EMR Integration for Healthcare | Epic & Cerner APIs",
    meta_description: "Expert EHR/EMR integration services. We build secure, HIPAA-compliant middleware to connect your custom healthcare software with Epic, Cerner, and AthenaHealth.",
    h1: "EHR & EMR Integration Services",
    short_value_proposition: "Bridge the gap between your custom healthcare software and legacy medical records. We build secure, HIPAA-compliant EHR/EMR integrations.",
    buyer_persona: "HealthTech Founders, Hospital CIOs",
    business_problem: "You built an amazing patient engagement app, but doctors won't use it because it doesn't sync with their existing Electronic Health Records (EHR). Manually double-entering patient data is dangerous and inefficient.",
    operational_impact: "Your HealthTech product is rejected by hospital procurement teams due to lack of interoperability. Clinical staff face extreme burnout from managing fragmented systems.",
    service_solution: "We build secure middleware that connects your modern application directly to legacy EHR systems (Epic, Cerner, AthenaHealth) via FHIR APIs and HL7v2 messaging.",
    technical_solution: "HL7 FHIR, SMART on FHIR, Mirth Connect, and secure AWS enclaves. We handle the complex mapping of medical data models (like ICD-10 and SNOMED CT).",
    workflow_before: "A patient fills out a digital intake form on an iPad. The receptionist prints it out and manually types the information into Epic.",
    workflow_after: "The patient submits the digital form. Our integration maps the data via FHIR API, instantly updating the patient's secure chart in Epic without human intervention.",
    implementation_process: ["HIPAA Compliance & Security Audit", "EHR Vendor API Approval", "Data Mapping & Middleware Architecture", "Sandbox Testing", "Production Deployment"],
    realistic_timeline: "12-20 Weeks depending on EHR vendor",
    relevant_tools: ["HL7 FHIR", "Epic App Orchard", "Mirth Connect"],
    integrations: ["Epic", "Cerner", "AthenaHealth", "Allscripts"],
    industry_specific_examples: [
      {
        title: "Remote Patient Monitoring (RPM)",
        description: "Connecting wearable IoT heart monitors directly to a hospital's EHR so cardiologists receive real-time alerts within their native software."
      }
    ],
    objections_and_answers: [
      {
        objection: "Is it difficult to get approved by Epic or Cerner?",
        answer: "Yes, EHR vendors have notoriously strict security and app store approval processes. We guide you through the Epic App Orchard or Cerner code-approval process, handling the technical documentation required to pass."
      }
    ],
    faqs: [
      {
        question: "What is FHIR?",
        answer: "Fast Healthcare Interoperability Resources (FHIR) is the modern standard for exchanging healthcare information electronically. It uses modern RESTful APIs rather than the clunky, outdated HL7v2 text pipelines."
      },
      {
        question: "Do you sign Business Associate Agreements (BAAs)?",
        answer: "Yes, as a compliant software development agency, we execute BAAs to legally ensure we handle your PHI (Protected Health Information) according to strict HIPAA regulations."
      }
    ],
    cta_angle: {
      headline: "Need your app to talk to Epic?",
      subheadline: "Let's architect your EHR integration.",
      button_text: "Discuss Healthcare Interoperability"
    },
    related_pages: [],
    schema_type: ["WebPage", "Service", "FAQPage"]
  },
  {
    page_id: "indint-002",
    page_family: "industry",
    target_keyword: "Plaid integration for fintech",
    secondary_keywords: ["bank API integration", "fintech software development", "custom Plaid developer"],
    slug: "plaid-integration-for-fintech",
    intent_summary: "Plaid & Banking Integrations",
    meta_title: "Plaid Integration for Fintech | Custom Bank APIs",
    meta_description: "Hire Plaid integration experts. We build secure, custom fintech software that connects directly to thousands of banks for instant verification and transaction syncing.",
    h1: "Plaid Integration for Fintech",
    short_value_proposition: "Connect your app to the financial system. We build secure, reliable Plaid API integrations for seamless bank verification and transaction tracking.",
    buyer_persona: "Fintech Founders, Product Managers",
    business_problem: "You are building a lending, budgeting, or investing app, but securely asking users for their bank routing numbers is high-friction and prone to fraud. You need a way to instantly read their bank balance.",
    operational_impact: "High user drop-off during onboarding, massive risk of ACH fraud, and zero visibility into a user's real-time financial health.",
    service_solution: "End-to-end Plaid API integration. We build the secure OAuth flow that allows users to securely connect their bank accounts to your app in seconds without you ever touching their passwords.",
    technical_solution: "Plaid Link (React), Node.js secure backend webhooks, and heavily encrypted PostgreSQL databases to store access tokens.",
    workflow_before: "Users manually typing routing and account numbers, waiting 3 days for micro-deposits to clear before they can use your app.",
    workflow_after: "Users click 'Connect Bank', log into Chase via the secure Plaid popup, and your app instantly receives their verified account number and 2 years of transaction history.",
    implementation_process: ["Plaid Developer Account Setup", "OAuth & Plaid Link Implementation", "Webhook Listener Development", "Data Parsing & Database Architecture", "Go-Live"],
    realistic_timeline: "4-8 Weeks",
    relevant_tools: ["Plaid API", "Node.js", "React"],
    integrations: ["Stripe ACH", "Dwolla", "Custom Fintech CRMs"],
    industry_specific_examples: [
      {
        title: "Automated Lending Decisions",
        description: "Pulling 12 months of Plaid transaction history to instantly calculate an applicant's real-time cash flow and approve them for a micro-loan."
      }
    ],
    objections_and_answers: [
      {
        objection: "Does our server store the user's bank password?",
        answer: "Never. Plaid handles the authentication directly with the bank. Your application only receives a secure 'Access Token' which allows you to query data, completely insulating you from massive security liabilities."
      }
    ],
    faqs: [
      {
        question: "Can Plaid be used to move money?",
        answer: "Plaid primarily reads data (balances, transactions, identity verification). However, we frequently integrate Plaid with Stripe ACH or Dwolla to actually facilitate the transfer of funds securely."
      },
      {
        question: "How do you handle disconnected accounts?",
        answer: "Users occasionally change bank passwords, breaking the connection. We build automated webhook listeners that detect this and immediately trigger an email or in-app notification asking the user to re-authenticate."
      }
    ],
    cta_angle: {
      headline: "Building the next big Fintech app?",
      subheadline: "Let's integrate your banking infrastructure.",
      button_text: "Consult a Plaid Developer"
    },
    related_pages: [],
    schema_type: ["WebPage", "Service", "FAQPage"]
  },
  {
    page_id: "indint-003",
    page_family: "tool",
    target_keyword: "Salesforce custom development agency",
    secondary_keywords: ["Apex developer", "Salesforce Lightning development", "custom Salesforce integrations"],
    slug: "salesforce-custom-development-agency",
    intent_summary: "Salesforce Customization",
    meta_title: "Salesforce Custom Development Agency | Apex & Lightning",
    meta_description: "Push Salesforce to its limits. We are a Salesforce custom development agency specializing in complex Apex coding, Lightning Web Components, and third-party API integrations.",
    h1: "Salesforce Custom Development Agency",
    short_value_proposition: "Make Salesforce work for you, not the other way around. We build complex, programmatic customizations that out-of-the-box Salesforce cannot handle.",
    buyer_persona: "VP of Sales, RevOps Directors, Enterprise CIOs",
    business_problem: "You have invested heavily in Salesforce, but the native drag-and-drop tools are failing to support your highly complex quoting process or integrate with your proprietary ERP.",
    operational_impact: "Sales reps are abandoning the CRM because it's too difficult to use. Millions in revenue are bottlenecked by manual data entry across disconnected systems.",
    service_solution: "Deep technical Salesforce engineering. We go beyond basic 'admin' configuration and write custom Apex code to build enterprise-grade automation and unique user interfaces.",
    technical_solution: "Apex programming, Lightning Web Components (LWC), SOQL optimization, and secure REST/SOAP API integrations with external databases.",
    workflow_before: "Sales reps manually copying pricing data from an Excel spreadsheet into a generic Salesforce Opportunity page, taking 20 minutes per quote.",
    workflow_after: "A custom Lightning Web Component that pulls live inventory data from your ERP, runs complex pricing algorithms via Apex, and generates the quote in 10 seconds.",
    implementation_process: ["Salesforce Architecture Audit", "Apex Logic Design", "LWC Frontend Development", "Sandbox Testing & Code Review", "Production Deployment"],
    realistic_timeline: "6-12 Weeks depending on complexity",
    relevant_tools: ["Apex", "Lightning Web Components", "SOQL"],
    integrations: ["MuleSoft", "Custom ERPs", "AWS"],
    industry_specific_examples: [
      {
        title: "Complex CPQ (Configure, Price, Quote)",
        description: "Writing custom Apex triggers to automatically calculate volume discounts based on historical purchasing data located in an external SQL database."
      }
    ],
    objections_and_answers: [
      {
        objection: "Why not just use a Salesforce Admin?",
        answer: "Admins are great for setting up basic workflows and page layouts. But when you need to integrate Salesforce with a proprietary database or build a complex UI that standard tools don't support, you need specialized software engineers."
      }
    ],
    faqs: [
      {
        question: "Can you integrate Salesforce with our legacy system?",
        answer: "Yes. We frequently build custom REST APIs in Node.js or Python that act as middleware, allowing Salesforce to securely talk to older, on-premise legacy systems."
      },
      {
        question: "Do you follow Salesforce best practices?",
        answer: "Absolutely. We employ strict bulkification in our Apex code to ensure we never hit Salesforce governor limits, even when processing massive amounts of data."
      }
    ],
    cta_angle: {
      headline: "Is Salesforce frustrating your team?",
      subheadline: "Let's engineer a custom solution.",
      button_text: "Talk to a Salesforce Architect"
    },
    related_pages: [],
    schema_type: ["WebPage", "Service", "FAQPage"]
  }
];
