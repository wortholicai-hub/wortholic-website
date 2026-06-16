import ServiceForm from "@/components/ServiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Hourly Software Developers | Flexible Engineering | Wortholic",
  description: "Hire elite hourly software developers for flexible, on-demand engineering. Scale your team up or down instantly without long-term commitments.",
  alternates: {
    canonical: "https://wortholic.com/hourly-developer",
  }
};

export default function HourlyDeveloper() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0E9F9F] to-[#086363] py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Hire Hourly Software Developers
          </h1>
          <p className="text-xl text-[#b9d8d4] max-w-3xl mx-auto leading-relaxed">
            Flexible, on-demand engineering talent. Hire senior developers by the hour to tackle your backlog without long-term commitments.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <ServiceForm
            serviceType="hourly-developer"
            title="Request Hourly Support"
            description="Need help with a specific feature, bug fix, or codebase audit? Tell us what you need and we will assign a senior engineer immediately."
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-950 mb-6">
                Why Choose Hourly Development?
              </h2>
              <p className="text-base leading-relaxed text-slate-600 mb-6">
                Not every project requires a full-time hire. Sometimes you just need an expert to unblock your team, audit an architecture, or build a specific integration.
              </p>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0E9F9F]"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
                  <span><strong>Zero Commitment:</strong> Pay only for the hours you need. No retainers, no severance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0E9F9F]"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
                  <span><strong>Senior Expertise:</strong> Access elite architects for specific problems that your junior team cannot solve.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-[#0E9F9F]"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
                  <span><strong>Transparent Billing:</strong> Detailed timesheets and progress reports for every hour billed.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-[#d8ecec] bg-[linear-gradient(135deg,#f5fbfb_0%,#ffffff_55%,#eef8f8_100%)] p-8 shadow-[0_24px_80px_rgba(8,42,42,0.08)]">
              <h3 className="text-xl font-bold text-[#0E9F9F] mb-4">Perfect For:</h3>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 font-medium text-slate-700">Clearing backlog tickets</div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 font-medium text-slate-700">Codebase refactoring</div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 font-medium text-slate-700">Third-party API integrations</div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 font-medium text-slate-700">Emergency bug fixes</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}