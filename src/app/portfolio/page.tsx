import Portfolio from "@/components/Portfolio/Portfolio";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Portfolio",
  description:
    "Browse Wortholic's portfolio of AI products, custom software platforms, automation systems, and digital product delivery work.",
  path: "/portfolio",
});

const PortfolioPage = () => {
  return <Portfolio />;
};

export default PortfolioPage;
