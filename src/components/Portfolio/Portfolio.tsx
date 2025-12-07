"use client";
import React, { useState, useEffect } from "react";
import CoreExpertise from "../CoreExpertise/CoreExpertise";
import Image from "next/image";
import HeroParallax from "../HeroParallax/HeroParallax";
import Awards from "../Awards/Awards";

import { cardsDataByPage } from "./featurepage1";
import {
  featuredWork1,
  featuredWork2,
  featuredWork3,
  featuredWork4,
  featuredWork5,
  featuredWork6,
  featuredWork7,
} from "./featurepage1";
import FeaturedWork from "./FeaturedWork";

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "E-learning Platform for All Businesses",
      description:
        "Features: multi-tenant learning, AI (STT, TTS, LLM), live/video classes, personalized recommendations, analytics dashboards, secure payments, parent/business tracking. Infra: Docker + Kubernetes orchestration, Redis caching, Kafka event streaming, Elasticsearch search, Prometheus/Grafana monitoring.",
      technologies: [
        "Next.js",
        "React",
        "Node",
        "Python (AI REST APIs)",
        "PostgreSQL",
        "Stripe/PayPal",
        "VideoCipher",
        "GraphQL/REST",
      ],
      image: "/images/portfolio/e-learning.jpg", // 🔹 replace with your upload
    },
    {
      title: "AI Chatbot & Virtual Shopping Assistant",
      description:
        "An AI-powered chatbot and virtual shopping assistant that guides customers with personalized recommendations, answers queries instantly, manages carts, tracks orders, and enhances the online journey through smart, real-time interactions.",
      technologies: [
        "Vue.js",
        "Laravel",
        "MySQL",
        "Socket.io",
        "Redis",
        "AWS",
        "Docker",
      ],
      image: "/images/portfolio/ai-chat.jpg", // 🔹 replace with your upload
    },
    {
      title: "E-Commerce Multi-Vendor Platform",
      description:
        "A robust multi-vendor marketplace with advanced inventory management, real-time analytics, and AI-powered product recommendations. Includes vendor dashboards, payment processing, and comprehensive order management.",
      technologies: [
        "Next.js",
        "Django",
        "PostgreSQL",
        "Elasticsearch",
        "Stripe",
        "AWS S3",
        "Redis",
      ],
      image: "/images/portfolio/ecommerce.webp", // 🔹 replace with your upload
    },
    {
      title: "Real Estate CRM & Property Management",
      description:
        "Complete real estate management solution with property listings, client relationship management, virtual tours, and automated lead generation. Features advanced search filters and integrated communication tools.",
      technologies: [
        "Angular",
        "Spring Boot",
        "MongoDB",
        "Twilio",
        "AWS",
        "Elasticsearch",
        "Docker",
      ],
      image: "/images/portfolio/real-estate.png", // 🔹 replace with your upload
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="mt-20 min-h-screen">
      {/* Header */}
      {/* <HeroParallax /> */}
      <div className="mt-30 py-1 text-center">
        <h1 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white">
          Portfolio
        </h1>
        {/* <p className="mx-auto max-w-6xl px-4 pb-2 text-gray-600 dark:text-gray-300">
          How we turn complex ideas into powerful, custom-built software and
          apps that drive real business results.
        </p> */}
      </div>

      {/* Hero Section */}
      <div className="relative h-[120vh]">
        <FeaturedWork
          {...featuredWork1}
          cardsData={cardsDataByPage[0]}
          sectionType="apps"
          additionalClass="sticky top-15 h-screen w-full overflow-hidden"
        />
      </div>

      {/* Core Expertise */}
      <CoreExpertise />
      <Awards />
    </div>
  );
};

export default Portfolio;
