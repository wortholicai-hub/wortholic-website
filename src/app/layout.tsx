import type { Metadata, Viewport } from "next";
import SiteShell from "@/components/Layout/SiteShell";
import JsonLd from "@/components/StructuredData/JsonLd";
import { absoluteUrl, siteConfig } from "@/lib/site";
import "../styles/index.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  category: "technology",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E9F9F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": absoluteUrl("/#organization"),
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: absoluteUrl("/images/logo/Wortholic.png"),
        email: siteConfig.email,
        sameAs: siteConfig.socialLinks,
      },
      {
        "@type": "ProfessionalService",
        "@id": absoluteUrl("/#professional-service"),
        name: siteConfig.name,
        url: siteConfig.url,
        image: absoluteUrl(siteConfig.ogImage),
        description: siteConfig.description,
        areaServed: "Worldwide",
        serviceType: [...siteConfig.serviceAreas],
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        name: siteConfig.name,
        url: siteConfig.url,
        publisher: {
          "@id": absoluteUrl("/#organization"),
        },
      },
    ],
  };

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <meta name="cf-2fa-verify" content="ca1f0382d7cba52" />
        <JsonLd data={organizationSchema} />
      </head>

      <body suppressHydrationWarning className="bg-white">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
