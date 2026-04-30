"use client";

import type { NewsArticle, ProviderStatus } from "@/lib/news";
import { useDeferredValue, useMemo, useState } from "react";

type NewsExplorerProps = {
  articles: NewsArticle[];
  providerStatus: ProviderStatus[];
  lastUpdated: string;
  rotationDate: string;
  scheduledProvider: string | null;
  activeProvider: string | null;
  usedFailover: boolean;
};

const articleDateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
});

const feedDateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
});

const providerStateCopy: Record<ProviderStatus["state"], { label: string; className: string }> = {
  active: {
    label: "Live today",
    className: "bg-[#0E9F9F]/10 text-[#0E9F9F]",
  },
  standby: {
    label: "Standby",
    className: "bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300",
  },
  missing: {
    label: "Missing key",
    className: "bg-slate-100 text-slate-500 dark:bg-white/5 dark:text-slate-400",
  },
  failed: {
    label: "Tried today",
    className: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
  },
};

function formatDate(value: string, formatter: Intl.DateTimeFormat) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : formatter.format(date);
}

function describeProvider(item: ProviderStatus) {
  if (item.error) {
    return item.error;
  }

  if (item.state === "active") {
    return "This provider supplied the currently visible feed.";
  }

  if (item.state === "standby") {
    return "Configured and ready for its turn in the rotation.";
  }

  if (item.state === "missing") {
    return "Add the server-side key to include this provider.";
  }

  return "The provider returned no usable articles today.";
}

function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-[#d8ecec] bg-white shadow-[0_24px_80px_rgba(8,42,42,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(14,159,159,0.14)] dark:border-white/10 dark:bg-[#0f1720]">
      {article.image ? (
        <img src={article.image} alt={article.title} className="h-52 w-full object-cover" />
      ) : (
        <div className="flex h-52 items-end bg-[linear-gradient(135deg,#dff7f7_0%,#f6fdfd_55%,#d8ecec_100%)] p-6 dark:bg-[linear-gradient(135deg,#10202a_0%,#0f1720_55%,#16303a_100%)]">
          <span className="rounded-full bg-[#0E9F9F]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#0E9F9F]">
            {article.topic}
          </span>
        </div>
      )}

      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-[#0E9F9F]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0E9F9F]">
            {article.topic}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-600 dark:bg-white/5 dark:text-slate-300">
            {article.provider}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-black leading-8 text-slate-950 dark:text-white">
          {article.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {article.description || "Open the original source for the full article."}
        </p>
        <div className="mt-5 flex items-center justify-between gap-4 text-sm">
          <div>
            <p className="font-semibold text-slate-800 dark:text-slate-100">{article.source}</p>
            <p className="text-slate-500 dark:text-slate-400">
              {formatDate(article.publishedAt, articleDateFormatter)}
            </p>
          </div>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-slate-900 px-4 py-2 font-semibold text-white transition hover:bg-[#0E9F9F] dark:bg-white dark:text-slate-900"
          >
            Read source
          </a>
        </div>
      </div>
    </article>
  );
}

export default function NewsExplorer({
  articles,
  providerStatus,
  lastUpdated,
  rotationDate,
  scheduledProvider,
  activeProvider,
  usedFailover,
}: NewsExplorerProps) {
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("All topics");
  const [provider, setProvider] = useState("All providers");
  const deferredSearch = useDeferredValue(search);
  const topics = Array.from(new Set(articles.map((article) => article.topic))).sort();
  const providers = Array.from(new Set(articles.map((article) => article.provider))).sort();

  const filteredArticles = useMemo(() => {
    const query = deferredSearch.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesSearch =
        !query ||
        [article.title, article.description, article.source, article.topic]
          .join(" ")
          .toLowerCase()
          .includes(query);

      const matchesTopic = topic === "All topics" || article.topic === topic;
      const matchesProvider = provider === "All providers" || article.provider === provider;

      return matchesSearch && matchesTopic && matchesProvider;
    });
  }, [articles, deferredSearch, provider, topic]);

  const hasActiveFilters =
    Boolean(deferredSearch.trim()) || topic !== "All topics" || provider !== "All providers";
  const [featuredArticle, ...remainingArticles] = filteredArticles;
  const highlightedArticles = remainingArticles.slice(0, 4);
  const gridArticles = remainingArticles.slice(4);

  return (
    <div className="space-y-10">
      <section className="grid gap-4 xl:grid-cols-[1.3fr,1fr]">
        <div className="rounded-[2rem] border border-[#d8ecec] bg-[linear-gradient(135deg,#ffffff_0%,#edf9f9_50%,#e4f5f5_100%)] p-7 shadow-[0_24px_80px_rgba(8,42,42,0.08)] dark:border-white/10 dark:bg-[linear-gradient(135deg,#0f1720_0%,#12222a_50%,#13303a_100%)]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#0E9F9F]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0E9F9F]">
              Rotation day {formatDate(rotationDate, feedDateFormatter)}
            </span>
            {activeProvider ? (
              <span className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white dark:bg-white dark:text-slate-900">
                Showing {activeProvider}
              </span>
            ) : null}
          </div>

          <h2 className="mt-4 text-3xl font-black text-slate-950 dark:text-white">
            News feed with daily API rotation
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            {activeProvider
              ? usedFailover
                ? `${scheduledProvider} was scheduled first, but the page automatically failed over to ${activeProvider} so the news board did not go empty.`
                : `${activeProvider} is serving today's feed. The other configured providers stay on standby to preserve API quota.`
              : scheduledProvider
              ? `The page tried ${scheduledProvider} for today's rotation, but no provider returned usable stories yet.`
              : "No server-side news provider keys are configured yet, so the rotation cannot start."}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              label: "Stories loaded",
              value: `${articles.length}`,
              note: activeProvider
                ? `Fetched from ${activeProvider}.`
                : "No live stories available yet.",
            },
            {
              label: "Scheduled source",
              value: scheduledProvider || "Not configured",
              note: "One provider is selected per UTC day.",
            },
            {
              label: "Last server check",
              value: formatDate(lastUpdated, articleDateFormatter),
              note: "The board refreshes server-side before rendering.",
            },
            {
              label: "Failover",
              value: usedFailover ? "Enabled" : "Not needed",
              note: "Only used when the scheduled provider returns nothing.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-[#d8ecec] bg-white px-6 py-5 shadow-[0_20px_70px_rgba(8,42,42,0.08)] dark:border-white/10 dark:bg-[#0f1720]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0E9F9F]">
                {item.label}
              </p>
              <p className="mt-3 text-2xl font-black text-slate-950 dark:text-white">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {providerStatus.map((item) => (
          <div
            key={item.name}
            className="rounded-3xl border border-[#d8ecec] bg-white p-5 shadow-[0_20px_70px_rgba(8,42,42,0.08)] dark:border-white/10 dark:bg-[#0f1720]"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.name}</p>
              <span
                className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] ${providerStateCopy[item.state].className}`}
              >
                {providerStateCopy[item.state].label}
              </span>
            </div>
            <p className="mt-4 text-3xl font-black text-slate-950 dark:text-white">
              {item.count}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {describeProvider(item)}
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-[2rem] border border-[#d8ecec] bg-white p-6 shadow-[0_24px_80px_rgba(8,42,42,0.08)] dark:border-white/10 dark:bg-[#0f1720]">
        <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0E9F9F]">
              Filter the feed
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-900 dark:text-white">
              Relevant news for a software house
            </h2>
          </div>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
            Rotation day: {formatDate(rotationDate, feedDateFormatter)}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <label className="xl:col-span-2">
            <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Search titles and summaries
            </span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="AI agents, cloud, startup funding, security..."
              className="w-full rounded-2xl border border-[#cfe8e8] bg-[#f8fdfd] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0E9F9F] dark:border-white/10 dark:bg-[#111b26] dark:text-white"
            />
          </label>
          {[
            { label: "Topic", value: topic, setValue: setTopic, options: ["All topics", ...topics] },
            {
              label: "Provider",
              value: provider,
              setValue: setProvider,
              options: ["All providers", ...providers],
            },
          ].map((filter) => (
            <label key={filter.label}>
              <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                {filter.label}
              </span>
              <select
                value={filter.value}
                onChange={(event) => filter.setValue(event.target.value)}
                className="w-full rounded-2xl border border-[#cfe8e8] bg-[#f8fdfd] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0E9F9F] dark:border-white/10 dark:bg-[#111b26] dark:text-white"
              >
                {filter.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
      </section>

      {featuredArticle ? (
        <section className="space-y-5">
          <article className="overflow-hidden rounded-[2rem] border border-[#d8ecec] bg-white shadow-[0_24px_80px_rgba(8,42,42,0.08)] dark:border-white/10 dark:bg-[#0f1720]">
            <div className="grid xl:grid-cols-[1.1fr,1fr]">
              {featuredArticle.image ? (
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="h-full min-h-[280px] w-full object-cover"
                />
              ) : (
                <div className="flex min-h-[280px] items-end bg-[linear-gradient(135deg,#dff7f7_0%,#f6fdfd_55%,#d8ecec_100%)] p-8 dark:bg-[linear-gradient(135deg,#10202a_0%,#0f1720_55%,#16303a_100%)]">
                  <span className="rounded-full bg-[#0E9F9F]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0E9F9F]">
                    {featuredArticle.topic}
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#0E9F9F]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0E9F9F]">
                    Featured story
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-600 dark:bg-white/5 dark:text-slate-300">
                    {featuredArticle.provider}
                  </span>
                </div>
                <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950 dark:text-white">
                  {featuredArticle.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                  {featuredArticle.description || "Open the source article to read the full report."}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {featuredArticle.source}
                  </span>
                  <span>{formatDate(featuredArticle.publishedAt, articleDateFormatter)}</span>
                  <span>{featuredArticle.topic}</span>
                </div>
                <a
                  href={featuredArticle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0E9F9F] dark:bg-white dark:text-slate-900"
                >
                  Open featured story
                </a>
              </div>
            </div>
          </article>

          {highlightedArticles.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {highlightedArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : null}
        </section>
      ) : null}

      {gridArticles.length > 0 ? (
        <section className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {gridArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </section>
      ) : null}

      {filteredArticles.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-[#badede] bg-[#f5fbfb] p-8 text-center dark:border-white/10 dark:bg-[#0f1720]">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {articles.length === 0 ? "No live news available yet" : "No articles match those filters"}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {articles.length === 0
              ? scheduledProvider
                ? `Today's scheduled provider is ${scheduledProvider}. If it keeps returning no stories, check the key and provider quota.`
                : "Add at least one server-side news API key to start showing articles on this page."
              : hasActiveFilters
              ? "Broaden the topic or provider filters to see more results."
              : "The current provider returned no stories for this rotation window."}
          </p>
        </div>
      ) : null}
    </div>
  );
}
