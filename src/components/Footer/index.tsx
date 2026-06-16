"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, ShieldCheck } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiX } from "react-icons/si";

import { siteConfig } from "@/lib/site";

const linkGroups = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Hire Developer", href: "/hire-developer" },
      { label: "Hire Team", href: "/hire-team" },
      { label: "Hourly Developer", href: "/hourly-developer" },
      { label: "Project Based", href: "/project-based" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Help Center", href: "/support-help" },
      { label: "Open Ticket", href: "/open-support-ticket" },
    ],
  },
] as const;

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61580509365459",
    icon: FaFacebookF,
  },
  {
    label: "X",
    href: "https://x.com/wotholic",
    icon: SiX,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/wortholicai/",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/wortholic",
    icon: FaLinkedinIn,
  },
] as const;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 overflow-hidden border-t border-[#16c7b7]/25 bg-[#031817] text-[#eefdfa] shadow-[0_-24px_80px_rgba(3,24,23,0.2)] dark:border-[#16c7b7]/25 dark:bg-[#031817] dark:text-[#eefdfa]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#43f0de]/70 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(22,199,183,0.12)_0%,rgba(3,24,23,0)_34%,rgba(9,77,72,0.42)_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#010d0c] to-transparent" />

      <div className="container relative">
        <div className="grid gap-10 border-b border-white/10 py-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-14">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#7ee8de]">
              Build with Wortholic
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Software teams, AI products, and cloud platforms delivered with
              care.
            </h2>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#4df2df] px-6 text-sm font-semibold text-[#021211] shadow-[0_14px_38px_rgba(77,242,223,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#4df2df] focus:ring-offset-2 focus:ring-offset-[#031817]"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/[0.14] bg-white/[0.06] px-6 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#4df2df]/70 hover:bg-[#4df2df]/10 focus:outline-none focus:ring-2 focus:ring-[#4df2df] focus:ring-offset-2 focus:ring-offset-[#031817]"
            >
              Contact Us
              <Mail className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid gap-10 py-12 lg:grid-cols-[1.1fr_1.5fr] lg:gap-14 lg:py-14">
          <div className="max-w-xl">
            <Link href="/" className="inline-flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-lg border border-white/[0.12] bg-white p-2 shadow-[0_16px_48px_rgba(0,0,0,0.22)]">
                <Image
                  src="/images/logo/Wortholic.png"
                  alt="Wortholic"
                  width={120}
                  height={120}
                  className="h-full w-full object-contain"
                  priority={false}
                />
              </span>
              <span>
                <span className="block text-2xl font-semibold tracking-normal text-white">
                  {siteConfig.name}
                </span>
                <span className="mt-1 block text-sm font-medium text-[#8feee5]">
                  AI product engineering
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-md text-base leading-7 text-[#b9d8d4]">
              Professional software development for companies that need reliable
              systems, polished products, and delivery teams that stay close to
              the work.
            </p>

            <div className="mt-7 grid gap-3 text-sm text-[#d7f4f0]">
              <Link
                href="/contact"
                className="group inline-flex w-fit items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 transition hover:border-[#4df2df]/60 hover:bg-[#4df2df]/10"
              >
                <Mail className="h-4 w-4 text-[#63efe0]" aria-hidden="true" />
                <span className="group-hover:text-white">
                  {siteConfig.email}
                </span>
              </Link>
              <div className="inline-flex w-fit items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
                <MapPin className="h-4 w-4 text-[#63efe0]" aria-hidden="true" />
                <span>Serving clients worldwide</span>
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#7ee8de]">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-sm font-medium text-[#c8e2df] transition hover:text-white"
                      >
                        <span className="h-px w-0 bg-[#4df2df] transition-all duration-300 group-hover:w-4" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col border-t border-white/10 py-7 text-center md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-[#b9d8d4] md:justify-start w-full">
            <span>
              &copy; {year} {siteConfig.legalName}. All rights reserved.
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-[#4df2df]/70 md:block" />
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#63efe0]" aria-hidden="true" />
              AI products / Web platforms / Cloud delivery
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
