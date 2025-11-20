import SectionOne from "@/components/BootCamp/sectionOne";
import SecOne from "@/components/BootCamp/sectionOne";
import MeetMentorsSection from "@/components/BootCamp/sectionEight";
import NewsAndInsightsSection from "@/components/BootCamp/sectionEleven";
import CareerSupportSection from "@/components/BootCamp/sectionFive";
import BootcampsSection from "@/components/BootCamp/sectionFour";
import PricingSection from "@/components/BootCamp/sectionNine";
import AlumniSuccessStories from "@/components/BootCamp/sectionSeven";
import BootcampLocations from "@/components/BootCamp/sectionSix";
import OurCodingBootcamps from "@/components/BootCamp/sectionTen";
import TechCareerPath from "@/components/BootCamp/sectionThree";
import BootcampBenefits from "@/components/BootCamp/sectionTwo";
import React from "react";

function page() {
  return (
    <div>
      page
      <SectionOne />
      <BootcampBenefits />
      <TechCareerPath />
      <BootcampsSection />
      <CareerSupportSection />
      <BootcampLocations />
      <AlumniSuccessStories />
      <MeetMentorsSection />
      <PricingSection />
      <OurCodingBootcamps />
      <NewsAndInsightsSection />
    </div>
  );
}

export default page;
