export interface PageIntelligenceObject {
  page_id: string;
  page_family: "core" | "industry" | "location" | "use-case" | "tool" | "comparison" | "expansion";
  target_keyword: string;
  secondary_keywords: string[];
  slug: string;
  intent_summary: string;
  
  // Page Content
  meta_title: string;
  meta_description: string;
  h1: string;
  short_value_proposition: string;
  
  // Buyer Persona & Context
  buyer_persona: string;
  business_problem: string;
  operational_impact: string;
  
  // Solutions
  service_solution: string;
  technical_solution: string;
  workflow_before: string;
  workflow_after: string;
  
  // Proof & Tech
  implementation_process: string[];
  realistic_timeline: string;
  relevant_tools: string[];
  integrations: string[];
  
  // Use cases / Examples
  industry_specific_examples: {
    title: string;
    description: string;
  }[];
  
  // Objections & FAQs
  objections_and_answers: {
    objection: string;
    answer: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  
  // CTA & Routing
  cta_angle: {
    headline: string;
    subheadline: string;
    button_text: string;
  };
  related_pages: {
    title: string;
    slug: string;
  }[];
  
  // SEO Technicals
  schema_type: ("WebPage" | "Service" | "ProfessionalService" | "FAQPage" | "Organization" | "BreadcrumbList")[];
  canonical_target?: string; // Optional if pointing elsewhere
  noindex_reason_if_any?: string; // If populated, add meta noindex
}
