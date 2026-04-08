"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/index.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        {/* Cloudflare 2FA verification - remove after verification is complete */}
        <meta name="cf-2fa-verify" content="ca1f0382d7cba52" />
      </head>

      <body suppressHydrationWarning className="bg-white dark:bg-[#0f0f0f]">
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
