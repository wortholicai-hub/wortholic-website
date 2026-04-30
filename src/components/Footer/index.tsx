"use client";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si"; // X icon
import React from "react";

const Footer = () => {
  const socials = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/profile.php?id=61580509365459",
      color: "#3b5999",
      hoverIcon: "#ffffff",
      beforeHover: "#2d4373",
      afterHover: "#253961",
    },
    {
      icon: <SiX />,
      url: "https://x.com/wotholic",
      color: "#000000",
      hoverIcon: "#ffffff",
      beforeHover: "#000000",
      afterHover: "#000000",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/wortholicai/",
      color: "#E1306C",
      hoverIcon: "#ffffff",
      beforeHover: "#C2185B",
      afterHover: "#9C1B4D",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/company/wortholic",
      color: "#0077B5",
      hoverIcon: "#ffffff",
      beforeHover: "#005f91",
      afterHover: "#004d75",
    },
  ];

  return (
    <footer className="relative z-10 bg-[#e6fcfcff] pt-12 text-black md:pt-20 lg:pt-15 dark:bg-gray-900 dark:text-gray-200">
      {/* Background Logo Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: "url('/images/logo/Wortholic.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      />

      {/* Content */}
      <div className="relative z-20 container">
        <div className="-mx-4 flex flex-wrap md:flex-nowrap md:justify-between">
          {/* About + Social */}
          <div className="mb-10 w-full px-4 text-center md:mb-0 md:w-1/2 md:text-left lg:w-4/12 xl:w-5/12">
            <p className="mx-auto mb-6 max-w-md text-base leading-relaxed md:mx-0 md:mb-9">
              Professional software development services specializing in AI
              products, web development, mobile applications, and cloud
              solutions.
            </p>

            <ul className="flex justify-center gap-6 md:justify-start md:gap-8">
              {socials.map((s, i) => (
                <li key={i} className="group relative">
                  <style jsx>{`
                    .social-${i}::before {
                      background-color: #e6fcfcff !important;
                      transition: background-color 0.5s ease !important;
                    }
                    .social-${i}::after {
                      background-color: #e6fcfcff !important;
                      transition: background-color 0.5s ease !important;
                    }
                    .group:hover .social-${i}::before {
                      background-color: ${s.beforeHover} !important;
                    }
                    .group:hover .social-${i}::after {
                      background-color: ${s.afterHover} !important;
                    }
                    .group:hover .social-${i} {
                      background-color: ${s.color} !important;
                    }
                    .group:hover .social-${i} .icon {
                      color: ${s.hoverIcon} !important;
                    }
                    :global(.dark) .social-${i}::before {
                      background-color: #e6fcfcff !important;
                    }
                    :global(.dark) .social-${i}::after {
                      background-color: #e6fcfcff !important;
                    }
                    :global(.dark) .group:hover .social-${i}::before {
                      background-color: ${s.beforeHover} !important;
                    }
                    :global(.dark) .group:hover .social-${i}::after {
                      background-color: ${s.afterHover} !important;
                    }
                  `}</style>

                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-${i} relative flex h-8 w-8 [transform:perspective(1000px)_rotate(-30deg)_skew(25deg)_translate(0,0)] items-center justify-center bg-[#e6fcfcff] text-black shadow-[-8px_8px_6px_rgba(0,0,0,0.25)] transition-all duration-500 group-hover:[transform:perspective(1000px)_rotate(-30deg)_skew(25deg)_translate(6px,-6px)] group-hover:shadow-[-14px_14px_25px_rgba(0,0,0,0.35)] before:absolute before:top-[4px] before:left-[-7px] before:h-full before:w-2 before:[transform:rotate(0deg)_skewY(-45deg)] before:transition-all before:duration-500 before:content-[''] after:absolute after:bottom-[-7px] after:left-[-3px] after:h-2 after:w-full after:[transform:rotate(0deg)_skewX(-45deg)] after:transition-all after:duration-500 after:content-[''] dark:bg-[#e6fcfcff] dark:text-white`}
                  >
                    <span
                      className="icon relative z-10 text-[16px] transition-all duration-500 group-hover:scale-110"
                      style={{
                        color: s.color,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {s.icon}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Sections */}
          <div className="w-full px-4 md:w-1/2 lg:w-7/12 xl:w-7/12">
            <div className="grid grid-cols-2 gap-8 text-center sm:text-left lg:flex lg:justify-between">
              {/* Useful Links */}
              <div>
                <h2 className="mb-6 text-lg font-bold md:mb-10 md:text-xl">
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/news"
                      className="mb-3 inline-block text-base duration-300 hover:text-[#4fc3f7] md:mb-4 dark:hover:text-[#80deea]"
                    >
                      News
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="mb-3 inline-block text-base duration-300 hover:text-[#4fc3f7] md:mb-4 dark:hover:text-[#80deea]"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="mb-3 inline-block text-base duration-300 hover:text-[#4fc3f7] md:mb-4 dark:hover:text-[#80deea]"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mb-3 inline-block text-base duration-300 hover:text-[#4fc3f7] md:mb-4 dark:hover:text-[#80deea]"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Terms */}
              <div>
                <h2 className="mb-6 text-lg font-bold md:mb-10 md:text-xl">
                  Terms
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/terms"
                      className="mb-3 inline-block text-base duration-300 hover:text-[#4fc3f7] md:mb-4 dark:hover:text-[#80deea]"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tos"
                      className="mb-3 inline-block text-base duration-300 hover:text-[#4fc3f7] md:mb-4 dark:hover:text-[#80deea]"
                    >
                      TOS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="mb-3 inline-block text-base duration-300 hover:text-[#4fc3f7] md:mb-4 dark:hover:text-[#80deea]"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/refund-policy"
                      className="mb-3 inline-block text-base duration-300 hover:text-[#4fc3f7] md:mb-4 dark:hover:text-[#80deea]"
                    >
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h2 className="mb-6 text-lg font-bold md:mb-10 md:text-xl">
                  Support & Help
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/support-help"
                      className="mb-3 inline-block text-base duration-300 hover:text-[#4fc3f7] md:mb-4 dark:hover:text-[#80deea]"
                    >
                      Support & Help
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/open-support-ticket"
                      className="mb-3 inline-block text-base duration-300 hover:text-[#4fc3f7] md:mb-4 dark:hover:text-[#80deea]"
                    >
                      Open Support Ticket
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-of-use"
                      className="mb-3 inline-block text-base duration-300 hover:text-[#4fc3f7] md:mb-4 dark:hover:text-[#80deea]"
                    >
                      Terms of Use
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
