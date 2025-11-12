"use client";
import FiveSection from "@/components/Careers/FiveSection";
import FourSection from "@/components/Careers/FourSection";
import OneSection from "@/components/Careers/OneSection";
import SixSection from "@/components/Careers/SixSection";
import ThreeSection from "@/components/Careers/ThreeSection";
import TwoSection from "@/components/Careers/TwoSection";
import { Briefcase, Users, Lightbulb, Rocket, ArrowRight } from "lucide-react";

export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-[#0b0f14] dark:text-gray-200 transition-colors duration-300">
      <OneSection />
      <TwoSection />
      <ThreeSection />
      <FourSection />
      <FiveSection />
      <SixSection />
    </div>
  );
}
