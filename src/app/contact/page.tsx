import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Wortholic | Get in Touch for Software Services",
  description:
    "Contact Wortholic for premium software services, AI solutions, and web development. Let&apos;s discuss your project with our expert team.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Ready to transform your business with cutting-edge software solutions? Get in touch with our team of 100+ experienced professionals."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
