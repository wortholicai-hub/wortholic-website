"use client";
import React, { useEffect, useState, useRef } from "react";

function BootcampBenefits() {
  const benefits = [
    {
      title: "Job Guarantee or Money Back",
      description:
        "Get 100% job placement support with our hiring partners or your money back, guaranteed!",
    },
    {
      title: "Flexible Payment Options",
      description:
        "Choose a payment plan that works for you and start learning without financial worries.",
    },
    {
      title: "High-Quality Coding Bootcamp",
      description:
        "Master in-demand coding skills with expert training and hands-on projects for tech careers.",
    },
    {
      title: "Exclusive Access to Events",
      description:
        "Get free access to workshops, events, and extra courses for students and alumni.",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-5 px-8 transition-colors duration-0">
      <style>{`
        /* Keyframes for slide down + fade in */
        @keyframes slideDownFadeIn {
          0% {
            opacity: 0;
            transform: translateY(-40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Apply animation when .visible */
        .slide-animate {
          animation: slideDownFadeIn 0.8s ease forwards;
        }

        /* Border color using #0E9F9F */
        .animated-border-light {
          position: relative;
          border-radius: 1.5rem;
          border: 1px solid transparent;
          overflow: visible;
          background-clip: padding-box;
          transition: color 0.3s ease;
        }
        .animated-border-light::before {
          content: '';
          pointer-events: none;
          position: absolute;
          top: -1px; bottom: -1px; left: -1px; right: -1px;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(270deg, #0E9F9F, #66B2B2, #0E9F9F);
          background-size: 600% 600%;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          animation: flow 3s linear infinite;
          z-index: 0;
        }

        .dark .animated-border-dark {
          position: relative;
          border-radius: 1.5rem;
          border: 1px solid transparent;
          overflow: visible;
          background-clip: padding-box;
          transition: color 0.3s ease;
        }
        .dark .animated-border-dark::before {
          content: '';
          pointer-events: none;
          position: absolute;
          top: -1px; bottom: -1px; left: -1px; right: -1px;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(270deg, #0E9F9F, #66B2B2, #0E9F9F);
          background-size: 600% 600%;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          animation: flow 3s linear infinite;
          z-index: 0;
        }

        /* Hover: gradient background animates from right to left */
        .animated-border-light:hover,
        .dark .animated-border-dark:hover {
          background: linear-gradient(90deg, #0E9F9F, #66B2B2, #0E9F9F);
          background-size: 200% 100%;
          animation: hoverFlow 3s linear infinite;
          color: black !important;
          transition: color 0.3s ease;
        }

        .animated-border-light:hover h3,
        .dark .animated-border-dark:hover h3,
        .animated-border-light:hover p,
        .dark .animated-border-dark:hover p {
          color: black !important;
          transition: color 0.3s ease;
        }

        @keyframes flow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        @keyframes hoverFlow {
          0% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-16 transition-colors duration-0"
          style={{ color: "#0E9F9F" }}
        >
          <p className={`text-lg mb-4 ${isVisible ? "slide-animate" : ""}`}>
            Why Choose Bootcamp?
          </p>
          <h2
            className={`text-5xl font-bold ${isVisible ? "slide-animate" : ""}`}
          >
            Benefits from this bootcamp
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="
                p-8 rounded-3xl
                bg-white dark:bg-black
                text-black dark:text-white
                transition-colors duration-0
                animated-border-light dark:animated-border-dark
                relative
              "
            >
              <h3 className="text-2xl font-bold mb-6 leading-tight transition-colors duration-0">
                {benefit.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed transition-colors duration-0">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BootcampBenefits;
