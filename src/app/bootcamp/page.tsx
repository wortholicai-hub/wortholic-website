import SectionOne from "@/components/BootCamp/sectionOne";
import BootcampBenefits from "@/components/BootCamp/sectionTwo";
import TechCareerPath from "@/components/BootCamp/sectionThree";
import BootcampsSection from "@/components/BootCamp/sectionFour";
import CareerSupportSection from "@/components/BootCamp/sectionFive";
import BootcampLocations from "@/components/BootCamp/sectionSix";
import AlumniSuccessStories from "@/components/BootCamp/sectionSeven";
import MeetMentorsSection from "@/components/BootCamp/sectionEight";
import PricingSection from "@/components/BootCamp/sectionNine";
import OurCodingBootcamps from "@/components/BootCamp/sectionTen";
import NewsAndInsightsSection from "@/components/BootCamp/sectionEleven";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Bootcamp",
  description:
    "Explore Wortholic's coding bootcamp experience, mentorship model, career support, and software development learning tracks.",
  path: "/bootcamp",
});

function BootcampPage() {
  return (
    <div>
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

export default BootcampPage;
