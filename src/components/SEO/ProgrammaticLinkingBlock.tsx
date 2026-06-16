import React from "react";
import Link from "next/link";
import { programmaticPages } from "@/data/seo/pages";

export default function ProgrammaticLinkingBlock() {
  const services = programmaticPages.filter(p => p.page_family === "core");
  const industries = programmaticPages.filter(p => p.page_family === "industry");
  const tools = programmaticPages.filter(p => p.page_family === "tool");
  const useCases = programmaticPages.filter(p => p.page_family === "use-case");

  const SectionList = ({ title, items, basePath }: { title: string, items: typeof programmaticPages, basePath: string }) => {
    if (items.length === 0) return null;
    return (
      <div className="flex flex-col space-y-4">
        <h3 className="text-xl font-bold text-slate-900 border-b border-gray-200 pb-2">{title}</h3>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.page_id}>
              <Link 
                href={`${basePath}/${item.slug}`}
                className="text-slate-600 hover:text-[#0E9F9F] transition-colors text-sm font-medium"
              >
                {item.intent_summary}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-black tracking-tight text-slate-950 mb-4">
            Explore Our Solutions
          </h2>
          <p className="text-slate-600 text-lg">
            We build custom software and AI automations tailored exactly to your industry, tools, and business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <SectionList title="Core Services" items={services} basePath="/services" />
          <SectionList title="Industries" items={industries} basePath="/industries" />
          <SectionList title="Tools & Integrations" items={tools} basePath="/tools" />
          <SectionList title="Use Cases" items={useCases} basePath="/use-cases" />
        </div>
      </div>
    </section>
  );
}
