import AboutSectionFive from "@/components/About/AboutSectionFive";
import AboutSectionFour from "@/components/About/AboutSectionFour";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionSeven from "@/components/About/AboutSectionSeven";
import AboutSectionSix from "@/components/About/AboutSectionSix";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Wortholic | Premium Software Services & AI Solutions",
  description:
    "Learn about Wortholic's team of 100+ experienced developers, engineers, and AI researchers providing cutting-edge software solutions.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageName="" description="" />
      <AboutSectionOne />
      <AboutSectionThree />
      <AboutSectionFour />
      <AboutSectionFive />
      <AboutSectionSix />
      <AboutSectionSeven />
    </>
  );
};

export default AboutPage;
