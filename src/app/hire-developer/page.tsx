import ServiceForm from "@/components/ServiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Dedicated Software Developers | React, Node.js, AI Experts | Wortholic",
  description: "Hire elite, pre-vetted dedicated software developers. Our React, Node.js, Python, and AI/ML experts integrate seamlessly into your team to accelerate product delivery.",
  alternates: {
    canonical: "https://wortholic.com/hire-developer",
  }
};

export default function HireDeveloper() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0E9F9F] to-[#086363] py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Hire Dedicated Software Developers
          </h1>
          <p className="text-xl text-[#b9d8d4] max-w-3xl mx-auto leading-relaxed">
            Scale your engineering team overnight. Hire elite, pre-vetted React, Node.js, and AI developers that integrate seamlessly into your workflow.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <ServiceForm
            serviceType="hire-developer"
            title="Tell us about your project requirements"
            description="Looking for a skilled developer to join your team? Share your tech stack requirements, and we will match you with the perfect senior engineer within 48 hours."
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-950 mb-6">
                Why Hire Dedicated Developers from Wortholic?
              </h2>
              <p className="text-base leading-relaxed text-slate-600 mb-6">
                Finding top-tier engineering talent is difficult, expensive, and time-consuming. When you hire dedicated developers through Wortholic, you bypass the massive recruiting delays and instantly onboard senior talent perfectly matched to your stack.
              </p>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0E9F9F]"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
                  <span><strong>Zero Recruiting Fees:</strong> Stop paying headhunters 20% of first-year salaries.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0E9F9F]"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
                  <span><strong>Pre-Vetted Talent:</strong> Every developer passes rigorous algorithmic and architectural testing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0E9F9F]"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
                  <span><strong>Seamless Integration:</strong> Our developers work in your timezone, attend your daily standups, and push code to your repositories.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-[#d8ecec] bg-[linear-gradient(135deg,#f5fbfb_0%,#ffffff_55%,#eef8f8_100%)] p-8 shadow-[0_24px_80px_rgba(8,42,42,0.08)]">
              <h3 className="text-xl font-bold text-[#0E9F9F] mb-4">Our Tech Stack Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 font-medium text-slate-700">React & Next.js</div>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 font-medium text-slate-700">Node.js & Python</div>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 font-medium text-slate-700">AWS & Docker</div>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 font-medium text-slate-700">OpenAI & LLMs</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}