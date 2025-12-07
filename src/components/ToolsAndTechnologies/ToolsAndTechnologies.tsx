"use client";

import React from "react";
import styles from "../../styles/SalesBenefits.module.css";
import Image from "next/image";

// Font Awesome Icons
// ====================== FRONTEND DEVELOPMENT ======================
import { FaReact, FaAngular, FaVuejs } from "react-icons/fa";
import { SiNextdotjs, SiSvelte } from "react-icons/si";

// ====================== BACKEND DEVELOPMENT ======================
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiDjango, SiFlask, SiLaravel } from "react-icons/si";

// ====================== DATABASE TECHNOLOGIES ======================
import {
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiRedis,
} from "react-icons/si";

// ====================== CLOUD COMPUTING ======================
import { FaAws } from "react-icons/fa";
import {
  SiGooglecloud,
  SiHeroku,
  SiDigitalocean,
  SiCloudflare,
} from "react-icons/si";

// ====================== AI & MACHINE LEARNING ======================
import {
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpenai,
  SiKeras,
} from "react-icons/si";

// ====================== DEVOPS ======================
import { FaDocker } from "react-icons/fa";
import {
  SiKubernetes,
  SiJenkins,
  SiGithubactions,
  SiTerraform,
} from "react-icons/si";

// ====================== MOBILE APP DEVELOPMENT ======================
import { FaSwift } from "react-icons/fa";
import { SiFlutter, SiAndroidstudio, SiKotlin, SiIonic } from "react-icons/si";

// ====================== CYBERSECURITY ======================
import {
  SiKalilinux,
  SiMetasploit,
  SiWireshark,
  SiHackthebox,
  SiBurpsuite,
} from "react-icons/si";

// ====================== DATA SCIENCE & ANALYTICS ======================
import {
  SiPandas,
  SiNumpy,
  SiApachespark,
  SiTableau,
  SiLooker,
} from "react-icons/si";

// ====================== DEVELOPMENT TOOLS & VERSION CONTROL ======================
import { FaGitAlt } from "react-icons/fa";
import { SiGithub, SiJetbrains, SiPostman, SiDocker } from "react-icons/si";

export default function SalesBenefits() {
  return (
    <section className={styles.salesBenefitsSection}>
      <div
        className={`${styles.container} flex flex-col justify-items items-center`}
      >
        <div className="mb-0 text-center">
          <h1 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white">
            Tools & Technologies
          </h1>
          <p className="mx-auto max-w-5xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            We combine advanced AI with a modern tech stack to build
            intelligent, future-ready applications. From smart automation to
            cloud solutions, we choose the right tools to make your ideas
            smarter and more scalable.
          </p>
        </div>

        <div className={styles.orbContainer}>
          <div className={styles.orb}>
            <Image
              src="/images/stack/center.gif"
              alt=""
              width={200}
              height={200}
              className="w-full h-full object-cover"
              unoptimized // Add this for GIFs to prevent optimization issues
            />
          </div>
        </div>

        <div className={styles.imgWrapper}>
          <Image
            src="/images/stack/up-image3.png"
            alt=""
            width={230}
            height={50}
            className="w-100 h-40 lg:w-230 lg:h-50"
          />
        </div>

        <div className={`${styles.grid} gap-1.5 px-5 z-1`}>
          <div
            className={`${styles.card} flex flex-col justify-items  items-center p-0.5 rounded-sm shadow-sm hover:shadow-md transition-all`}
          >
            <div className={`${styles.iconWrapper} w-7 h-7 mb-0.5`}>
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="14" rx="2"></rect>
                <line x1="8" y1="20" x2="16" y2="20"></line>
                <line x1="12" y1="18" x2="12" y2="20"></line>
              </svg>
            </div>
            <h1>Front-end</h1>
            <div className="icons-card">
              <div
                className={`${styles.hoverIcons} flex flex-row justify-center items-center gap-0.25`}
              >
                <FaReact className="w-4 h-4" />
                <FaAngular className="w-4 h-4" />
                <FaVuejs className="w-4 h-4" />
                <SiNextdotjs className="w-4 h-4" />
                <SiSvelte className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div
            className={`${styles.card} flex flex-col justify-items items-center p-0.5 rounded-sm shadow-sm hover:shadow-md transition-all`}
          >
            <div className={`${styles.iconWrapper} w-7 h-7 mb-0.5`}>
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="6" rx="1"></rect>
                <line x1="7" y1="6" x2="7" y2="6"></line>
                <line x1="11" y1="6" x2="11" y2="6"></line>
                <rect x="3" y="12" width="18" height="6" rx="1"></rect>
                <line x1="7" y1="15" x2="7" y2="15"></line>
                <line x1="11" y1="15" x2="11" y2="15"></line>
              </svg>
            </div>

            <h1>Back-end</h1>

            <div
              className={`${styles.hoverIcons} flex flex-row justify-center items-center gap-0.25`}
            >
              <FaNodeJs className="w-4 h-4" />
              <SiExpress className="w-4 h-4" />
              <SiDjango className="w-4 h-4" />
              <SiFlask className="w-4 h-4" />
              <SiLaravel className="w-4 h-4" />
            </div>
          </div>

          <div
            className={`${styles.card} flex flex-col justify-items items-center p-0.5 rounded-sm shadow-sm hover:shadow-md transition-all`}
          >
            <div className={`${styles.iconWrapper} w-7 h-7 mb-0.5`}>
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <ellipse cx="12" cy="5" rx="8" ry="3"></ellipse>
                <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"></path>
                <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"></path>
                <path d="M4 19c0 1.66 3.58 3 8 3s8-1.34 8-3"></path>
              </svg>
            </div>
            <h1>Database</h1>
            <div
              className={`${styles.hoverIcons} flex flex-row justify-center items-center gap-0.25`}
            >
              <SiMongodb className="w-4 h-4" />
              <SiMysql className="w-4 h-4" />
              <SiPostgresql className="w-4 h-4" />
              <SiFirebase className="w-4 h-4" />
              <SiRedis className="w-4 h-4" />
            </div>
          </div>

          <div
            className={`${styles.card} flex flex-col justify-items items-center p-0.5 rounded-sm shadow-sm hover:shadow-md transition-all`}
          >
            <div className={`${styles.iconWrapper} w-7 h-7 mb-0.5`}>
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 17.58A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 4 16.25"></path>
                <path d="M16 16h2a4 4 0 0 0 0-8 4.5 4.5 0 0 0-4.5 4.5"></path>
              </svg>
            </div>
            <h1>Cloud Computing</h1>
            <div
              className={`${styles.hoverIcons} flex flex-row justify-center items-center gap-0.25`}
            >
              <FaAws className="w-4 h-4" />
              <SiGooglecloud className="w-4 h-4" />
              <SiHeroku className="w-4 h-4" />
              <SiDigitalocean className="w-4 h-4" />
              <SiCloudflare className="w-4 h-4" />
            </div>
          </div>

          <div
            className={`${styles.card} flex flex-col justify-items items-center p-0.5 rounded-sm shadow-sm hover:shadow-md transition-all`}
          >
            <div className={`${styles.iconWrapper} w-7 h-7 mb-0.5`}>
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="6" cy="6" r="1.5"></circle>
                <circle cx="18" cy="6" r="1.5"></circle>
                <circle cx="6" cy="18" r="1.5"></circle>
                <circle cx="18" cy="18" r="1.5"></circle>
                <circle cx="12" cy="12" r="1.5"></circle>

                <line x1="6" y1="6" x2="12" y2="12"></line>
                <line x1="18" y1="6" x2="12" y2="12"></line>
                <line x1="6" y1="18" x2="12" y2="12"></line>
                <line x1="18" y1="18" x2="12" y2="12"></line>
              </svg>
            </div>
            <h1>AI & ML</h1>
            <div
              className={`${styles.hoverIcons} flex flex-row justify-center items-center gap-0.25`}
            >
              <SiTensorflow className="w-4 h-4" />
              <SiPytorch className="w-4 h-4" />
              <SiScikitlearn className="w-4 h-4" />
              <SiOpenai className="w-4 h-4" />
              <SiKeras className="w-4 h-4" />
            </div>
          </div>

          <div
            className={`${styles.card} flex md:hidden flex-col justify-items items-center p-0.5 rounded-sm shadow-sm hover:shadow-md transition-all`}
          >
            <div className={`${styles.iconWrapper} w-7 h-7 mb-0.5`}>
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                <path d="M12 12l-4 4 4 4"></path>
                <path d="M12 12l4-4-4-4"></path>
              </svg>
            </div>
            <h1>Tools & Version Control</h1>
            <div
              className={`${styles.hoverIcons} flex flex-row justify-center items-center gap-0.25`}
            >
              <FaGitAlt className="w-4 h-4" />
              <SiGithub className="w-4 h-4" />
              <SiJetbrains className="w-4 h-4" />
              <SiPostman className="w-4 h-4" />
              <SiDocker className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className={`${styles.gridBottom} gap-1.5 mt-2`}>
          <div
            className={`${styles.card} flex flex-col justify-items items-center p-0.5 rounded-sm shadow-sm hover:shadow-md transition-all`}
          >
            <div className={`${styles.iconWrapper} w-7 h-7 mb-0.5`}>
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </div>
            <h1>DevOps Tools</h1>
            <div
              className={`${styles.hoverIcons} flex flex-row justify-center items-center gap-0.25`}
            >
              <FaDocker className="w-4 h-4" />
              <SiKubernetes className="w-4 h-4" />
              <SiJenkins className="w-4 h-4" />
              <SiGithubactions className="w-4 h-4" />
              <SiTerraform className="w-4 h-4" />
            </div>
          </div>

          <div
            className={`${styles.card} flex flex-col justify-items items-center p-0.5 rounded-sm shadow-sm hover:shadow-md transition-all`}
          >
            <div className={`${styles.iconWrapper} w-7 h-7 mb-0.5`}>
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="7" y="2" width="10" height="20" rx="2"></rect>

                <circle cx="12" cy="18" r="1"></circle>
              </svg>
            </div>
            <h1>Mobile Applications</h1>
            <div
              className={`${styles.hoverIcons} flex flex-row justify-center items-center gap-0.25`}
            >
              <FaSwift className="w-4 h-4" />
              <SiFlutter className="w-4 h-4" />
              <SiAndroidstudio className="w-4 h-4" />
              <SiKotlin className="w-4 h-4" />
              <SiIonic className="w-4 h-4" />
            </div>
          </div>

          <div
            className={`${styles.card} flex flex-col justify-items items-center p-0.5 rounded-sm shadow-sm hover:shadow-md transition-all`}
          >
            <div className={`${styles.iconWrapper} w-7 h-7 mb-0.5`}>
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L4 5v6c0 5 4 9 8 9s8-4 8-9V5l-8-3z"></path>

                <rect x="9" y="10" width="6" height="5" rx="1"></rect>
                <path d="M12 10v-2"></path>
              </svg>
            </div>
            <h1>Cybersecurity</h1>
            <div
              className={`${styles.hoverIcons} flex flex-row justify-center items-center gap-0.25`}
            >
              <SiKalilinux className="w-4 h-4" />
              <SiMetasploit className="w-4 h-4" />
              <SiWireshark className="w-4 h-4" />
              <SiHackthebox className="w-4 h-4" />
              <SiBurpsuite className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className={`${styles.gridBottom1} gap-1.5 mt-2`}>
          <div
            className={`${styles.card} flex flex-col justify-items items-center p-0.5 rounded-sm shadow-sm hover:shadow-md transition-all`}
          >
            <div className={`${styles.iconWrapper} w-7 h-7 mb-0.5`}>
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="21" x2="21" y2="21"></line>
                <line x1="3" y1="21" x2="3" y2="3"></line>

                <polyline points="3,17 7,13 11,16 15,9 19,12"></polyline>

                <circle cx="3" cy="17" r="1.5"></circle>
                <circle cx="7" cy="13" r="1.5"></circle>
                <circle cx="11" cy="16" r="1.5"></circle>
                <circle cx="15" cy="9" r="1.5"></circle>
                <circle cx="19" cy="12" r="1.5"></circle>
              </svg>
            </div>
            <h1>Data Science & Analytics</h1>
            <div
              className={`${styles.hoverIcons} flex flex-row justify-center items-center gap-0.25`}
            >
              <SiPandas className="w-4 h-4" />
              <SiNumpy className="w-4 h-4" />
              <SiApachespark className="w-4 h-4" />
              <SiTableau className="w-4 h-4" />
              <SiLooker className="w-4 h-4" />
            </div>
          </div>

          {/* 👇 Wrapper controls visibility */}
          <div className="hidden md:block">
            <div
              className={`${styles.card} flex flex-col justify-items items-center p-0.5 rounded-sm shadow-sm hover:shadow-md transition-all`}
            >
              <div className={`${styles.iconWrapper} w-7 h-7 mb-0.5`}>
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  <path d="M12 12l-4 4 4 4"></path>
                  <path d="M12 12l4-4-4-4"></path>
                </svg>
              </div>
              <h1>Tools & Version Control</h1>
              <div
                className={`${styles.hoverIcons} flex flex-row justify-center items-center gap-0.25`}
              >
                <FaGitAlt className="w-4 h-4" />
                <SiGithub className="w-4 h-4" />
                <SiJetbrains className="w-4 h-4" />
                <SiPostman className="w-4 h-4" />
                <SiDocker className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
