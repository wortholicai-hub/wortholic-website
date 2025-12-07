import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FiSmartphone, FiCpu, FiUsers } from "react-icons/fi";
import { HiOutlineCloudUpload, HiOutlineShieldCheck } from "react-icons/hi";

const positions = [
  {
    height: 360,
    z: 100,
    rotateY: 30,
    y: 0,
    clip: "polygon(0 0, 100% 8%, 100% 92%, 0 100%)",
  },
  {
    height: 300,
    z: 0,
    rotateY: 30,
    y: 0,
    clip: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
  {
    height: 360,
    z: 100,
    rotateY: -30,
    y: 0,
    clip: "polygon(0 8%, 100% 0, 100% 100%, 0 92%)",
  },
];

export default function CircularSlider({
  descriptionText,
  cardsData,
  sectionType = "apps",
}) {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Define feature cards for each section
  const featuresBySection = {
    apps: [
      {
        icon: FiSmartphone,
        title: "E-learning Platform for All Businesses",
        description:
          "AI-powered learning with live classes and smart analytics.",
      },
      {
        icon: FiCpu,
        title: "AI Chatbot & Virtual Shopping Assistant",
        description:
          "AI shopping assistant for instant support and personalized guidance.",
      },
      {
        icon: FiUsers,
        title: "E-Commerce Multi-Vendor Platform",
        description:
          "AI multi-vendor marketplace with smart inventory and insights.",
      },
    ],
    "ai-products": [
      {
        icon: FiCpu,
        title: "Intelligent Automation",
        description:
          "Automate workflows and enhance decision-making with AI-driven solutions.",
      },
      {
        icon: HiOutlineCloudUpload,
        title: "Machine Learning Integration",
        description:
          "Leverage advanced ML models for predictive analytics and insights.",
      },
      {
        icon: HiOutlineShieldCheck,
        title: "Secure & Reliable",
        description: "Enterprise-grade security with robust AI architecture.",
      },
    ],
    "ai-ml": [
      {
        icon: FiCpu,
        title: "Predictive Analytics",
        description:
          "Transform data into actionable insights with advanced algorithms.",
      },
      {
        icon: HiOutlineCloudUpload,
        title: "Custom ML Models",
        description:
          "Tailored machine learning solutions for your specific needs.",
      },
      {
        icon: FiUsers,
        title: "Continuous Learning",
        description:
          "Adaptive systems that evolve with your business requirements.",
      },
    ],
    automation: [
      {
        icon: FiCpu,
        title: "Process Optimization",
        description:
          "Streamline operations and reduce manual effort with smart automation.",
      },
      {
        icon: HiOutlineShieldCheck,
        title: "RPA Integration",
        description:
          "Robotic Process Automation for enhanced efficiency and accuracy.",
      },
      {
        icon: FiUsers,
        title: "Workflow Management",
        description: "Intelligent workflow tools for seamless collaboration.",
      },
    ],
    educators: [
      {
        icon: FiUsers,
        title: "Personalized Learning",
        description:
          "AI-powered adaptive learning experiences for every student.",
      },
      {
        icon: FiCpu,
        title: "Intelligent Tutoring",
        description:
          "Virtual tutors with natural language processing capabilities.",
      },
      {
        icon: HiOutlineCloudUpload,
        title: "Data-Driven Insights",
        description:
          "Analytics and reporting for improved educational outcomes.",
      },
    ],
    crm: [
      {
        icon: FiUsers,
        title: "Smart Customer Management",
        description: "AI-powered insights for better customer relationships.",
      },
      {
        icon: FiCpu,
        title: "Predictive Lead Scoring",
        description:
          "Intelligent analytics to identify high-value opportunities.",
      },
      {
        icon: HiOutlineShieldCheck,
        title: "Automated Workflows",
        description: "Streamline sales processes with intelligent automation.",
      },
    ],
  };

  const features = featuresBySection[sectionType] || featuresBySection["apps"];

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        const pos = positions[index];
        gsap.to(card, {
          height: pos.height,
          clipPath: pos.clip,
          transform: `translateZ(${pos.z}px) rotateY(${pos.rotateY}deg) translateY(${pos.y}px)`,
        });
      }
    });
  }, [currentIndex]);

  const visibleCards = cardsData.slice(currentIndex, currentIndex + 3);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    startAutoSlide();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, cardsData.length - 1));
    startAutoSlide();
  };

  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < cardsData.length - 3) {
          return prev + 1;
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          return prev;
        }
      });
    }, 9000);
  };

  useEffect(() => {
    const startAutoSlide = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev < cardsData.length - 3) {
            return prev + 1;
          } else {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            return prev;
          }
        });
      }, 9000);
    };

    startAutoSlide();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [cardsData.length]);

  return (
    <div className="flex flex-col items-center justify-center lg:h-[570px] bg-[#DFECEB] dark:bg-gray-900 pb-[100px] lg:pb-[150px] font-Ovo transition-colors duration-300">
      <div className="relative flex flex-col w-full max-w-[1400px] overflow-hidden">
        {/* For mobile view the boxes */}
        <div className="flex flex-col justify-items items-center mt-5 mb-5 w-full font-Ovo text-gray-200 text-[0.8rem] ml-0 block md:hidden">
          <div className="flex flex-col gap-3 mt-0 max-w-sm">
            {features.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 border-2 border-[#0E9F9F] bg-[#0E9F9F] rounded-lg p-3 dark:bg-transparent"
                >
                  <div className="flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-cyan-500" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="font-semibold text-white text-sm">
                      {feature.title}
                    </h2>
                    <p className="text-white text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Only View */}
          <div className="flex md:hidden flex-col items-center justify-center w-full py-3 overflow-hidden">
            {/* <h2 className="text-white text-lg font-semibold mb-4">
              Our Features
            </h2> */}
            {/* Centered Slider with Side Navigation */}
            <div className="relative w-full flex items-center justify-center px-4">
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="absolute left-2 z-10 p-2 bg-white/90 dark:bg-gray-800 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              </button>

              {/* Slider Container */}
              <div className="w-full max-w-sm h-auto overflow-hidden">
                <motion.div
                  className="flex"
                  animate={{ x: -currentIndex * 100 + "%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {cardsData.map((card, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full h-[450px] rounded-xl overflow-hidden relative cursor-pointer border border-gray-700"
                      onClick={() => window.open(card.link)}
                    >
                      {/* Image */}
                      <motion.img
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        src={card.img}
                        alt={card.title}
                        className="object-cover w-full h-[380px] rounded-xl"
                      />
                      {/* Overlay Text */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gray-900/70 backdrop-blur-md p-4 h-[100px]">
                        <h3 className="text-white text-sm font-bold mb-1 text-center">
                          {card.title}
                        </h3>
                        <p className="text-gray-300 text-xs text-center line-clamp-2">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                disabled={currentIndex >= cardsData.length - 1}
                className="absolute right-2 z-10 p-2 bg-white/90 dark:bg-gray-800 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 transition-colors duration-200"
              >
                <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              </button>
            </div>

            {/* Page Indicator */}
            {/* <div className="flex justify-center items-center mt-4">
              <span className="text-black text-sm">
                {currentIndex + 1} / {cardsData.length}
              </span>
            </div> */}
          </div>
        </div>

        <div className="hidden md:flex gap-1 justify-center items-center preserve-3d">
          <div className="flex flex-col justifiy-items items-center h-[400px] w-[600px] font-Ovo text-gray-200 text-[0.8rem] ml-5">
            <div className="flex flex-col gap-3 mt-0 lg:mt-20 max-w-sm">
              {features.map((feature, idx) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3 border-2 border-[#0E9F9F] bg-[#0E9F9F] rounded-lg p-3 dark:bg-transparent"
                  >
                    <div className="flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-cyan-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="font-semibold text-white text-sm">
                        {feature.title}
                      </h2>
                      <p className="text-white text-xs leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2 bg-white dark:bg-gray-800 ml-2 cursor-pointer rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-black dark:text-gray-200" />
          </button>

          {visibleCards.map((card, index) => (
            <div
              key={currentIndex + index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative rounded-lg bg-gray-800/50 border border-gray-800/50 border-2 dark:bg-gray-800 w-[400px] lg:mt-0 sm:mt-[100px] overflow-hidden cursor-pointer transition-colors duration-200"
              onClick={() => window.open(card.link)}
            >
              <motion.img
                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                src={card.img}
                alt={`Card ${index + 1}`}
                className="w-full bg-cover lg:h-[300px] md:h-[420px] sm:h-[420px] xs:h-[360px] z-[1] rounded-lg overflow-hidden"
              />

              <div className="absolute inset-0 backdrop-blur-[1px] bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity z-[2] rounded-lg">
                <span className="text-black dark:text-gray-100 text-xs font-bold uppercase bg-white dark:bg-gray-900 rounded-full px-2 z-[1002]">
                  🔗 Click to see our sites
                </span>
              </div>

              <motion.div
                initial={{ y: 0, borderBottomLeftRadius: 0 }}
                whileHover={{
                  y: -120,
                  scale: 1.15,
                  borderBottomLeftRadius: 30,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute top-0 left-[0px] right-0 mt-[280px] backdrop-blur-md pb-[130px] p-6 max-w-[300px] min-w-[100px] z-[1001] text-center bg-gray-800/50"
              >
                <h2 className="text-[16px] font-black text-gray-100 mb-6">
                  {card.title}
                </h2>
                <p className="text-[12px] text-gray-100 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            </div>
          ))}

          <button
            onClick={handleNext}
            disabled={currentIndex >= cardsData.length - 3}
            className="p-2 mr-2 cursor-pointer bg-white/90 dark:bg-gray-800 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-500 dark:text-gray-200" />
          </button>
        </div>
      </div>
      <div className="flex flex-row text-[12px] justify-items items-center gap-2 ml-0 lg:ml-[23rem]">
        <button className="border-2 border-[#0E9F9F] rounded-[6px] px-6 py-1.5 dark:bg-transparent">
          Learn More
        </button>
        <button className="border-2 border-[#0E9F9F] rounded-[6px] px-6 py-1.5 bg-[#0E9F9F] text-white dark:bg-transparent">
          Get Started
        </button>
      </div>
    </div>
  );
}
