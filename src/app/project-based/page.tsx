import ServiceForm from "@/components/ServiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project-Based Software Development | Wortholic",
  description: "End-to-end custom software development on a project basis. Get a fixed timeline, clear deliverables, and a dedicated team to build your MVP or enterprise app.",
  alternates: {
    canonical: "https://wortholic.com/project-based",
  }
};

export default function ProjectBased() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0E9F9F] to-[#086363] py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Project-Based Software Development
          </h1>
          <p className="text-xl text-[#b9d8d4] max-w-3xl mx-auto leading-relaxed">
            From concept to launch. We deliver custom software projects on time and on budget with a clearly defined scope of work.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <ServiceForm
            serviceType="project-based"
            title="Tell Us About Your Project"
            description="Have a clear vision for your software? Submit your project details below and we will provide a comprehensive technical proposal and cost estimate."
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-950 mb-6">
                Why Choose a Project-Based Model?
              </h2>
              <p className="text-base leading-relaxed text-slate-600 mb-6">
                If you have a clearly defined scope of work, a project-based engagement provides predictability. We take full responsibility for delivering the final product.
              </p>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0E9F9F]"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
                  <span><strong>Fixed Deliverables:</strong> You know exactly what features you are getting before we write a single line of code.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0E9F9F]"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
                  <span><strong>Clear Timelines:</strong> We operate on strict agile sprints, ensuring predictable launch dates.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0E9F9F]"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
                  <span><strong>Full Lifecycle:</strong> We handle UI/UX design, architecture, frontend/backend development, and DevOps deployment.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-[#d8ecec] bg-[linear-gradient(135deg,#f5fbfb_0%,#ffffff_55%,#eef8f8_100%)] p-8 shadow-[0_24px_80px_rgba(8,42,42,0.08)]">
              <h3 className="text-xl font-bold text-[#0E9F9F] mb-4">The Delivery Process</h3>
              <div className="space-y-3 relative before:absolute before:inset-y-2 before:left-3 before:w-0.5 before:bg-[#0E9F9F]/20">
                <div className="relative pl-8">
                  <div className="absolute left-2 top-2 w-2.5 h-2.5 rounded-full bg-[#0E9F9F]"></div>
                  <h4 className="font-bold text-slate-800">1. Discovery & Scoping</h4>
                  <p className="text-sm text-slate-600">Defining requirements and architecture.</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-2 top-2 w-2.5 h-2.5 rounded-full bg-[#0E9F9F]"></div>
                  <h4 className="font-bold text-slate-800">2. UI/UX Prototyping</h4>
                  <p className="text-sm text-slate-600">Visualizing the product before coding.</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-2 top-2 w-2.5 h-2.5 rounded-full bg-[#0E9F9F]"></div>
                  <h4 className="font-bold text-slate-800">3. Sprint Development</h4>
                  <p className="text-sm text-slate-600">Bi-weekly code deliveries and reviews.</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-2 top-2 w-2.5 h-2.5 rounded-full bg-[#0E9F9F]"></div>
                  <h4 className="font-bold text-slate-800">4. QA & Launch</h4>
                  <p className="text-sm text-slate-600">Rigorous testing and production deployment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}