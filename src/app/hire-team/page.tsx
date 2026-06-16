import ServiceForm from "@/components/ServiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire a Dedicated Software Development Team | Wortholic",
  description: "Hire a complete, pre-assembled dedicated software development team. Get instant access to product managers, senior engineers, and UX designers to build your product faster.",
  alternates: {
    canonical: "https://wortholic.com/hire-team",
  }
};

export default function HireTeam() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0E9F9F] to-[#086363] py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Hire a Dedicated Development Team
          </h1>
          <p className="text-xl text-[#b9d8d4] max-w-3xl mx-auto leading-relaxed">
            Don't build an engineering department from scratch. Hire a fully-managed, pre-assembled product team ready to start coding on day one.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <ServiceForm
            serviceType="hire-team"
            title="Assemble Your Dream Team"
            description="Tell us about your product roadmap. We will deploy a complete pod of engineers, designers, and project managers perfectly scaled to your needs."
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-950 mb-6">
                Why Hire an Entire Team?
              </h2>
              <p className="text-base leading-relaxed text-slate-600 mb-6">
                Building a complex software product requires more than just one developer. It requires seamless collaboration between UI/UX designers, frontend specialists, backend architects, and QA testers.
              </p>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0E9F9F]"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
                  <span><strong>Immediate Velocity:</strong> Our teams have already worked together on multiple projects, meaning zero friction and instant velocity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0E9F9F]"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
                  <span><strong>Fully Managed:</strong> We provide a dedicated Technical Product Manager to oversee sprints, so you can focus on the business.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0E9F9F]"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
                  <span><strong>Flexible Scaling:</strong> Need an extra DevOps engineer for a month? We can scale the pod up or down instantly.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-[#d8ecec] bg-[linear-gradient(135deg,#f5fbfb_0%,#ffffff_55%,#eef8f8_100%)] p-8 shadow-[0_24px_80px_rgba(8,42,42,0.08)]">
              <h3 className="text-xl font-bold text-[#0E9F9F] mb-4">A Standard Agile Pod Includes:</h3>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 font-medium text-slate-700 flex justify-between"><span>Technical Product Manager</span><span className="text-[#0E9F9F]">x1</span></div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 font-medium text-slate-700 flex justify-between"><span>Senior Backend Architect</span><span className="text-[#0E9F9F]">x1</span></div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 font-medium text-slate-700 flex justify-between"><span>Frontend React Engineers</span><span className="text-[#0E9F9F]">x2</span></div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 font-medium text-slate-700 flex justify-between"><span>UI/UX Designer</span><span className="text-[#0E9F9F]">x1</span></div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 font-medium text-slate-700 flex justify-between"><span>QA Tester</span><span className="text-[#0E9F9F]">x1</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}