import { PageIntelligenceObject } from "./types";
import { servicePages } from "./pages/services";
import { toolPages } from "./pages/tools";
import { industryPages } from "./pages/industries";
import { useCasePages } from "./pages/use-cases";
import { advancedAIPages } from "./pages/advanced-ai";
import { appDevPages } from "./pages/app-dev";
import { industryIntegrationsPages } from "./pages/industry-integrations";

export const programmaticPages: PageIntelligenceObject[] = [
  ...servicePages,
  ...toolPages,
  ...industryPages,
  ...useCasePages,
  ...advancedAIPages,
  ...appDevPages,
  ...industryIntegrationsPages,
];

export const getPageDataBySlug = (slug: string, family: string) => {
  return programmaticPages.find(p => p.slug === slug && p.page_family === family);
};
