import NewsExplorer from "@/components/News/NewsExplorer";
import JsonLd from "@/components/StructuredData/JsonLd";
import { getNewsDigest } from "@/lib/news";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata = createMetadata({
  title: "News",
  description:
    "Track live AI, software engineering, cloud, security, and startup headlines aggregated from multiple news APIs for Wortholic's delivery teams and clients.",
  path: "/news",
});

function buildNewsCollectionSchema(url: string, articles: Awaited<ReturnType<typeof getNewsDigest>>["articles"]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Wortholic News",
    description:
      "Multi-source software industry news covering AI, software engineering, cloud, security, and startups.",
    url,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: articles.length,
      itemListElement: articles.slice(0, 24).map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: article.url,
        name: article.title,
      })),
    },
  };
}

export default async function NewsPage() {
  const digest = await getNewsDigest();
  const configuredProviders = digest.providerStatus.filter((item) => item.enabled).length;

  return (
    <div className="bg-[radial-gradient(circle_at_top,_rgba(14,159,159,0.15),_transparent_38%),linear-gradient(180deg,#f4fcfc_0%,#ffffff_45%,#f8fbfd_100%)] px-4 pb-20 pt-32 dark:bg-[radial-gradient(circle_at_top,_rgba(14,159,159,0.16),_transparent_32%),linear-gradient(180deg,#050a0f_0%,#081019_45%,#09111a_100%)]">
      <section className="container">
        <JsonLd
          data={buildNewsCollectionSchema(absoluteUrl("/news"), digest.articles)}
        />

        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0E9F9F]">
            Wortholic news desk
          </p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 md:text-6xl dark:text-white">
            Daily-rotated software, AI, security, and cloud news
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg dark:text-slate-300">
            This page pulls live headlines relevant to a software house: AI launches,
            engineering tooling, cloud platform shifts, security incidents, and
            startup movement. One configured provider is scheduled per UTC day to
            protect API quotas, and the page only fails over if that source returns
            no usable stories.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
          {[
            {
              label: "Sources in rotation",
              value: `${configuredProviders}/${digest.providerStatus.length}`,
            },
            {
              label: "Scheduled today",
              value: digest.scheduledProvider || "No source",
            },
            {
              label: "Showing now",
              value: digest.activeProvider || "Waiting for data",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-[#cfe8e8] bg-white px-6 py-5 text-left shadow-[0_20px_70px_rgba(8,42,42,0.08)] dark:border-white/10 dark:bg-[#0f1720]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0E9F9F]">
                {item.label}
              </p>
              <p className="mt-3 text-3xl font-black text-slate-950 dark:text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <NewsExplorer
            articles={digest.articles}
            providerStatus={digest.providerStatus}
            lastUpdated={digest.lastUpdated}
            rotationDate={digest.rotationDate}
            scheduledProvider={digest.scheduledProvider}
            activeProvider={digest.activeProvider}
            usedFailover={digest.usedFailover}
          />
        </div>
      </section>
    </div>
  );
}
