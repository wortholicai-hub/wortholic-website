"use client";

import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import FeaturedWork from "../components/ProvidedService/FeaturedWork";
import CareersSection from "@/components/CareersSection/CareersSection";
import ToolsAndTechnologies from "@/components/ToolsAndTechnologies/ToolsAndTechnologies";
import IndustriesPage from "@/components/IndustriesPage/IndustriesPage";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm/ContactForm";
import { cardsDataByPage } from "../components/ProvidedService/featurepage1";
import {
  featuredWork1,
  featuredWork2,
  featuredWork3,
  featuredWork4,
  featuredWork5,
  featuredWork6,
} from "../components/ProvidedService/featurepage1";

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
      <Blog />
      <ContactForm />
    </>
  );
}
