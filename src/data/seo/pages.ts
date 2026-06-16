import { PageIntelligenceObject } from "./types";
import { servicePages } from "./pages/services";
import { toolPages } from "./pages/tools";
import { industryPages } from "./pages/industries";
import { useCasePages } from "./pages/use-cases";

export const programmaticPages: PageIntelligenceObject[] = [
  ...servicePages,
  ...toolPages,
  ...industryPages,
  ...useCasePages,
];

export const getPageDataBySlug = (slug: string, family: string) => {
  return programmaticPages.find(p => p.slug === slug && p.page_family === family);
};
