import React from "react";
import Link from "next/link";
import { PageIntelligenceObject } from "@/data/seo/types";
import { FiCheckCircle, FiShield, FiLock, FiServer } from "react-icons/fi";
import ContactForm from "@/components/ContactForm/ContactForm";
import JsonLd from "@/components/StructuredData/JsonLd";
import { absoluteUrl } from "@/lib/site";

interface Props {
  pageData: PageIntelligenceObject;
}

export default function ProgrammaticPageTemplate({ pageData }: Props) {
  // Generate appropriate schemas
  const schemas = pageData.schema_type.map((type) => {
    switch (type) {
      case "WebPage":
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": pageData.meta_title,
          "description": pageData.meta_description,
          "url": absoluteUrl(`/${pageData.page_family === 'core' ? 'services' : pageData.page_family}s/${pageData.slug}`)
        };
      case "FAQPage":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": pageData.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        };
      default:
        return null;
    }
  }).filter(Boolean);

  return (
    <>
      {schemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0E9F9F] to-[#086363] py-20 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0)_34%,rgba(0,0,0,0.2)_100%)]" />
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#eefdfa] mb-4">
              {pageData.intent_summary}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              {pageData.h1}
            </h1>
            <p className="text-lg text-[#b9d8d4] mb-8 leading-relaxed">
              {pageData.short_value_proposition}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-[#0E9F9F] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50"
              >
                {pageData.cta_angle.button_text}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR Featured Snippet Box (Zero-Click Optimization) */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <FiCheckCircle className="text-[#0E9F9F]" /> TL;DR: Executive Summary
            </h2>
            <ul className="space-y-3">
              <li className="flex gap-3 text-slate-700">
                <span className="font-semibold min-w-[120px]">The Goal:</span>
                <span>{pageData.meta_description}</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <span className="font-semibold min-w-[120px]">Timeline:</span>
                <span>{pageData.realistic_timeline}</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <span className="font-semibold min-w-[120px]">Tech Stack:</span>
                <span>{pageData.relevant_tools.join(", ")}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-950 mb-6">
                The Problem
              </h2>
              <p className="text-base leading-relaxed text-slate-600 mb-6">
                {pageData.business_problem}
              </p>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-2">Impact</p>
                <p className="text-slate-800">{pageData.operational_impact}</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-950 mb-6">
                Our Solution
              </h2>
              <p className="text-base leading-relaxed text-slate-600 mb-6">
                {pageData.service_solution}
              </p>
              <div className="bg-[#0E9F9F]/5 p-6 rounded-2xl border border-[#0E9F9F]/10">
                <p className="text-sm font-semibold text-[#0E9F9F] uppercase tracking-wider mb-2">Technical Approach</p>
                <p className="text-slate-800">{pageData.technical_solution}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Transformation */}
      <section className="py-20 bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tight text-slate-950">Workflow Transformation</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-[2rem] border border-gray-200 bg-gray-50 p-8">
              <h3 className="text-xl font-bold text-slate-600 mb-4">Before</h3>
              <p className="text-slate-600 leading-relaxed">{pageData.workflow_before}</p>
            </div>
            <div className="rounded-[2rem] border border-[#d8ecec] bg-[linear-gradient(135deg,#f5fbfb_0%,#ffffff_55%,#eef8f8_100%)] p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#0E9F9F] mb-4">After Wortholic</h3>
              <p className="text-slate-800 leading-relaxed">{pageData.workflow_after}</p>
            </div>
          </div>
        </div>
      </section>

      {/* E-E-A-T & Enterprise Trust Signals */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-slate-800 flex items-center justify-center mb-4">
                <FiLock className="text-[#0E9F9F] text-2xl" />
              </div>
              <h3 className="text-lg font-bold mb-2">Data Privacy (GDPR/CCPA)</h3>
              <p className="text-sm text-slate-400">Strict adherence to global data privacy laws. We never train public AI models on your proprietary data.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-slate-800 flex items-center justify-center mb-4">
                <FiShield className="text-[#0E9F9F] text-2xl" />
              </div>
              <h3 className="text-lg font-bold mb-2">HIPAA & SOC2 Ready</h3>
              <p className="text-sm text-slate-400">Architecture designed to meet rigorous healthcare and enterprise security compliance standards natively.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-slate-800 flex items-center justify-center mb-4">
                <FiServer className="text-[#0E9F9F] text-2xl" />
              </div>
              <h3 className="text-lg font-bold mb-2">Enterprise Infrastructure</h3>
              <p className="text-sm text-slate-400">Scalable cloud-native deployments via AWS and Vercel Edge networks ensuring 99.99% uptime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs (Featured Snippet Optimized) */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto w-full max-w-[800px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tight text-slate-950">Frequently Asked Questions</h2>
            <p className="text-slate-600 mt-4">Everything you need to know about our {pageData.intent_summary} process.</p>
          </div>
          <div className="space-y-8">
            {pageData.faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic CTA / Contact Section */}
      <div id="contact" className="bg-white py-20 border-t border-gray-200">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl font-black tracking-tight text-slate-950 mb-4">
            {pageData.cta_angle.headline}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {pageData.cta_angle.subheadline}
          </p>
        </div>
        <ContactForm />
      </div>
    </>
  );
}
