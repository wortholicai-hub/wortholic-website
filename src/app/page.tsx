import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import FeaturedWork from "../components/ProvidedService/FeaturedWork";
import CareersSection from "@/components/CareersSection/CareersSection";
import ToolsAndTechnologies from "@/components/ToolsAndTechnologies/ToolsAndTechnologies";
import IndustriesPage from "@/components/IndustriesPage/IndustriesPage";


import { cardsDataByPage } from "../components/ProvidedService/featurepage1";
import {
  featuredWork1,
  featuredWork2,
  featuredWork3,
  featuredWork4,
  featuredWork5,
  featuredWork6,
} from "../components/ProvidedService/featurepage1";
import { createMetadata } from "@/lib/seo";


export const metadata = createMetadata({
  title: "AI Product Engineering & Custom Software Development",
  description:
    "Wortholic builds AI products, custom software, automation workflows, and dedicated engineering teams for companies that need senior execution.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <OurServices />

      {/* Sticky Featured Works Container - 600vh for 6x full-screen scroll */}
      <div className="relative h-[600vh] mt-10">
        <FeaturedWork
          {...featuredWork1}
          cardsData={cardsDataByPage[0]}
          sectionType="apps"
          additionalClass="sticky top-15 h-screen w-full overflow-hidden"
        />
        <FeaturedWork
          {...featuredWork2}
          cardsData={cardsDataByPage[1]}
          sectionType="ai-products"
          additionalClass="sticky top-15 h-screen w-full overflow-hidden"
        />
        <FeaturedWork
          {...featuredWork3}
          cardsData={cardsDataByPage[2]}
          sectionType="ai-ml"
          additionalClass="sticky top-15 h-screen w-full overflow-hidden"
        />
        <FeaturedWork
          {...featuredWork4}
          cardsData={cardsDataByPage[3]}
          sectionType="automation"
          additionalClass="sticky top-15 h-screen w-full overflow-hidden"
        />
        <FeaturedWork
          {...featuredWork5}
          cardsData={cardsDataByPage[4]}
          sectionType="educators"
          additionalClass="sticky top-15 h-screen w-full overflow-hidden"
        />
        <FeaturedWork
          {...featuredWork6}
          cardsData={cardsDataByPage[5]}
          sectionType="crm"
          additionalClass="sticky top-15 h-screen w-full overflow-hidden"
        />
      </div>

      <CareersSection />
      <ToolsAndTechnologies />
      <IndustriesPage />
      <section className="bg-white px-4 py-20 dark:bg-[#081019]">
        <div className="container">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#d8ecec] bg-[linear-gradient(135deg,#f5fbfb_0%,#ffffff_55%,#eef8f8_100%)] p-8 shadow-[0_24px_80px_rgba(8,42,42,0.08)] dark:border-white/10 dark:bg-[linear-gradient(135deg,#0f1720_0%,#111b26_55%,#0b1420_100%)] md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#0E9F9F]">
              Wortholic delivery model
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-4xl dark:text-white">
              Senior software execution across AI, web, cloud, security, and automation
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
                Wortholic works with startups and growth-stage teams that need more
                than generic outsourcing. We build production-grade AI products,
                web applications, internal tools, automation systems, and dedicated
                engineering pods that can move quickly without sacrificing delivery quality.
              </p>

            </div>
          </div>
        </div>
      </section>

    </>
  );
}
