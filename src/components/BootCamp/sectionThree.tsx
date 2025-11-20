"use client";
import React, { useEffect, useRef, useState } from "react";

function TechCareerPath() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // To animate only once, uncomment the next line:
          // observer.unobserve(entry.target);
        } else {
          setVisible(false);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const steps = [
    {
      number: "01",
      title: "Choose a course",
      description: "Select the course that fits your career goals.",
      icon: "🔍",
      bgColor: "bg-green-200 text-green-800 dark:bg-green-400 dark:text-white",
    },
    {
      number: "02",
      title: "Learn with Interactive Sessions",
      description: "Engage in hands-on learning with expert guidance.",
      icon: "💻",
      bgColor:
        "bg-gray-100 border-2 border-gray-300 text-gray-800 dark:bg-black dark:border-white dark:text-white",
    },
    {
      number: "03",
      title: "Build real-world projects",
      description: "Apply your skills to practical projects.",
      icon: "🖨️",
      bgColor:
        "bg-gray-100 border-2 border-gray-300 text-gray-800 dark:bg-black dark:border-white dark:text-white",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-white text-gray-900 dark:bg-black dark:text-white py-20 px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div
            className={`relative rounded-3xl overflow-hidden shadow-lg dark:shadow-none
              transform transition-transform duration-[1200ms] ease-in-out
              ${visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
            `}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=900&fit=crop"
              alt="Students collaborating"
              className="w-full h-[600px] object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div
            className={`space-y-8
              transform transition-transform duration-[1200ms] ease-in-out
              ${visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
            `}
          >
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-base mb-3">
                How It Works?
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Your Path to a Tech Career Starts Here
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Follow our structured learning process from selecting your
                course to landing your dream job with expert guidance and
                hands-on experience.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6 mt-12">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  {/* Icon Box with Dotted Line */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className={`${step.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center text-3xl relative z-10 font-semibold`}
                    >
                      {step.icon}
                      <span className="absolute -top-2 -right-2 bg-gray-900 text-white dark:bg-white dark:text-black text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-20 border-l-2 border-dotted border-gray-300 dark:border-gray-600 mt-2"></div>
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechCareerPath;
