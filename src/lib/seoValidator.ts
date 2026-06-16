import { PageIntelligenceObject } from "@/data/seo/types";

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export function validateSeoPage(page: PageIntelligenceObject): ValidationResult {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: []
  };

  // 1. Unique URL / Slug
  if (!page.slug || page.slug.trim() === "") {
    result.errors.push("Missing slug.");
  }

  // 2. Metadata Limits
  if (!page.meta_title || page.meta_title.length < 10) {
    result.errors.push("Meta title is missing or too short.");
  } else if (page.meta_title.length > 70) {
    result.warnings.push("Meta title exceeds 70 characters. It may be truncated in search results.");
  }

  if (!page.meta_description || page.meta_description.length < 50) {
    result.errors.push("Meta description is missing or too short.");
  } else if (page.meta_description.length > 160) {
    result.warnings.push("Meta description exceeds 160 characters.");
  }

  // 3. H1 uniqueness
  if (!page.h1 || page.h1.trim() === "") {
    result.errors.push("Missing H1 heading.");
  }

  // 4. Content depth (Thin Content Check)
  const estimatedWordCount = [
    page.h1,
    page.short_value_proposition,
    page.business_problem,
    page.operational_impact,
    page.service_solution,
    page.technical_solution,
    page.workflow_before,
    page.workflow_after,
    ...page.faqs.map(f => f.question + " " + f.answer),
    ...page.industry_specific_examples.map(e => e.title + " " + e.description)
  ].join(" ").split(" ").length;

  if (estimatedWordCount < 300) {
    result.errors.push(`Thin content risk. Estimated word count is ${estimatedWordCount} (minimum recommended 300).`);
  }

  // 5. Schema Validation
  if (page.schema_type.includes("FAQPage") && page.faqs.length === 0) {
    result.errors.push("FAQPage schema defined but no FAQs exist on the page.");
  }

  if (result.errors.length > 0) {
    result.isValid = false;
  }

  return result;
}
