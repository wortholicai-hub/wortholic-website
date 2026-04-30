export type NewsArticle = {
  id: string;
  provider: string;
  title: string;
  description: string;
  url: string;
  image: string | null;
  source: string;
  publishedAt: string;
  topic: string;
};

export type ProviderStatus = {
  name: string;
  enabled: boolean;
  count: number;
  state: "active" | "standby" | "missing" | "failed";
  error?: string;
};

type NewsDigest = {
  articles: NewsArticle[];
  providerStatus: ProviderStatus[];
  lastUpdated: string;
  rotationDate: string;
  scheduledProvider: string | null;
  activeProvider: string | null;
  usedFailover: boolean;
};

type ProviderKey =
  | "NEWS_API_KEY"
  | "GNEWS_API_KEY"
  | "NEWSDATA_API_KEY"
  | "THENEWSAPI_TOKEN"
  | "WORLDNEWS_API_KEY";

type ProviderFetchResult = {
  name: string;
  enabled: boolean;
  articles: NewsArticle[];
  error?: string;
};

type ProviderConfig = {
  name: string;
  envKey: ProviderKey;
  fetchArticles: (credential: string) => Promise<NewsArticle[]>;
};

const NEWS_REVALIDATE_SECONDS = 60 * 60 * 24;
const NEWS_QUERY_OR =
  '"artificial intelligence" OR cybersecurity OR cloud OR startup OR "developer tools"';
const NEWS_QUERY_LOOSE =
  'artificial intelligence cybersecurity cloud startup "developer tools"';

const TOPICS = [
  {
    key: "AI & Agents",
    matches: ["ai", "llm", "agent", "machine learning", "openai", "anthropic", "copilot"],
  },
  {
    key: "Security",
    matches: ["security", "cyber", "vulnerability", "breach", "threat", "zero-day"],
  },
  {
    key: "Cloud & Platform",
    matches: ["cloud", "devops", "kubernetes", "aws", "gcp", "azure", "platform", "infra"],
  },
  {
    key: "Startups & Product",
    matches: ["startup", "funding", "saas", "product", "growth", "founder"],
  },
];

function classifyTopic(title: string, description: string) {
  const haystack = `${title} ${description}`.toLowerCase();
  const match = TOPICS.find((topic) =>
    topic.matches.some((keyword) => haystack.includes(keyword))
  );

  return match?.key || "Software Engineering";
}

function normalizeUrl(value: string) {
  try {
    const url = new URL(value);
    [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "ref",
      "ref_src",
    ].forEach((key) => url.searchParams.delete(key));
    return url.toString();
  } catch {
    return value;
  }
}

function normalizeArticle(input: {
  provider: string;
  title?: string | null;
  description?: string | null;
  url?: string | null;
  image?: string | null;
  source?: string | null;
  publishedAt?: string | null;
}) {
  const title = String(input.title || "").trim();
  const url = String(input.url || "").trim();

  if (!title || !url) {
    return null;
  }

  const normalizedUrl = normalizeUrl(url);
  const description = String(input.description || "").trim();

  return {
    id: `${input.provider}:${normalizedUrl}`,
    provider: input.provider,
    title,
    description,
    url: normalizedUrl,
    image: input.image ? String(input.image).trim() : null,
    source: String(input.source || input.provider),
    publishedAt: input.publishedAt || new Date().toISOString(),
    topic: classifyTopic(title, description),
  } satisfies NewsArticle;
}

async function getJson(url: URL | string, init?: RequestInit) {
  const response = await fetch(url, {
    ...init,
    headers: {
      Accept: "application/json",
      ...(init?.headers || {}),
    },
    signal: init?.signal ?? AbortSignal.timeout(15000),
    next: { revalidate: NEWS_REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}

function getPublishedTimestamp(value: string) {
  const timestamp = new Date(value).getTime();
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

function dedupeArticles(articles: NewsArticle[]) {
  const seen = new Set<string>();

  return articles
    .sort(
      (left, right) =>
        getPublishedTimestamp(right.publishedAt) - getPublishedTimestamp(left.publishedAt)
    )
    .filter((article) => {
      const key = article.url.toLowerCase();
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
}

async function fetchNewsApiArticles(apiKey: string) {
  const url = new URL("https://newsapi.org/v2/everything");
  url.searchParams.set("apiKey", apiKey);
  url.searchParams.set("q", NEWS_QUERY_OR);
  url.searchParams.set("searchIn", "title,description");
  url.searchParams.set("language", "en");
  url.searchParams.set("sortBy", "publishedAt");
  url.searchParams.set("pageSize", "18");

  const data = await getJson(url, {
    headers: {
      "x-api-key": apiKey,
    },
  });

  return (data.articles || [])
    .map((article: Record<string, unknown>) =>
      normalizeArticle({
        provider: "NewsAPI",
        title: article.title as string,
        description: article.description as string,
        url: article.url as string,
        image: article.urlToImage as string,
        source: (article.source as { name?: string })?.name,
        publishedAt: article.publishedAt as string,
      })
    )
    .filter(Boolean) as NewsArticle[];
}

async function fetchGNewsArticles(apiKey: string) {
  const url = new URL("https://gnews.io/api/v4/search");
  url.searchParams.set("q", NEWS_QUERY_OR);
  url.searchParams.set("lang", "en");
  url.searchParams.set("max", "18");
  url.searchParams.set("token", apiKey);

  const data = await getJson(url);

  return (data.articles || [])
    .map((article: Record<string, unknown>) =>
      normalizeArticle({
        provider: "GNews",
        title: article.title as string,
        description: article.description as string,
        url: article.url as string,
        image: article.image as string,
        source: (article.source as { name?: string })?.name,
        publishedAt: article.publishedAt as string,
      })
    )
    .filter(Boolean) as NewsArticle[];
}

async function fetchNewsDataArticles(apiKey: string) {
  const url = new URL("https://newsdata.io/api/1/latest");
  url.searchParams.set("apikey", apiKey);
  url.searchParams.set("q", NEWS_QUERY_LOOSE);
  url.searchParams.set("language", "en");
  url.searchParams.set("category", "technology,business");
  url.searchParams.set("size", "18");

  const data = await getJson(url);

  return (data.results || [])
    .map((article: Record<string, unknown>) =>
      normalizeArticle({
        provider: "NewsData.io",
        title: article.title as string,
        description: (article.description as string) || (article.content as string),
        url: (article.link as string) || (article.url as string),
        image: article.image_url as string,
        source: (article.source_name as string) || (article.source_id as string),
        publishedAt: article.pubDate as string,
      })
    )
    .filter(Boolean) as NewsArticle[];
}

async function fetchTheNewsApiArticles(apiToken: string) {
  const url = new URL("https://api.thenewsapi.com/v1/news/all");
  url.searchParams.set("api_token", apiToken);
  url.searchParams.set("search", NEWS_QUERY_LOOSE);
  url.searchParams.set("language", "en");
  url.searchParams.set("categories", "business,tech");
  url.searchParams.set("limit", "18");

  const data = await getJson(url);

  return (data.data || [])
    .map((article: Record<string, unknown>) =>
      normalizeArticle({
        provider: "TheNewsAPI",
        title: article.title as string,
        description: (article.description as string) || (article.snippet as string),
        url: article.url as string,
        image: article.image_url as string,
        source: article.source as string,
        publishedAt: article.published_at as string,
      })
    )
    .filter(Boolean) as NewsArticle[];
}

async function fetchWorldNewsApiArticles(apiKey: string) {
  const url = new URL("https://api.worldnewsapi.com/search-news");
  url.searchParams.set("api-key", apiKey);
  url.searchParams.set("text", NEWS_QUERY_LOOSE);
  url.searchParams.set("language", "en");
  url.searchParams.set("number", "18");
  url.searchParams.set(
    "earliest-publish-date",
    new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString().slice(0, 10)
  );

  const data = await getJson(url);

  return (data.news || [])
    .map((article: Record<string, unknown>) =>
      normalizeArticle({
        provider: "World News API",
        title: article.title as string,
        description: (article.summary as string) || (article.text as string),
        url: article.url as string,
        image: article.image as string,
        source: article.source_country as string,
        publishedAt: article.publish_date as string,
      })
    )
    .filter(Boolean) as NewsArticle[];
}

const NEWS_PROVIDERS: ProviderConfig[] = [
  {
    name: "NewsAPI",
    envKey: "NEWS_API_KEY",
    fetchArticles: fetchNewsApiArticles,
  },
  {
    name: "GNews",
    envKey: "GNEWS_API_KEY",
    fetchArticles: fetchGNewsArticles,
  },
  {
    name: "NewsData.io",
    envKey: "NEWSDATA_API_KEY",
    fetchArticles: fetchNewsDataArticles,
  },
  {
    name: "TheNewsAPI",
    envKey: "THENEWSAPI_TOKEN",
    fetchArticles: fetchTheNewsApiArticles,
  },
  {
    name: "World News API",
    envKey: "WORLDNEWS_API_KEY",
    fetchArticles: fetchWorldNewsApiArticles,
  },
];

function hasCredential(provider: ProviderConfig) {
  return Boolean(process.env[provider.envKey]);
}

async function runProvider(provider: ProviderConfig): Promise<ProviderFetchResult> {
  const credential = process.env[provider.envKey];

  if (!credential) {
    return {
      name: provider.name,
      enabled: false,
      articles: [],
    };
  }

  try {
    const articles = dedupeArticles(await provider.fetchArticles(credential)).slice(0, 18);

    return {
      name: provider.name,
      enabled: true,
      articles,
    };
  } catch (error) {
    return {
      name: provider.name,
      enabled: true,
      articles: [],
      error: error instanceof Error ? error.message : "Request failed",
    };
  }
}

function getRotationDate() {
  return new Date().toISOString().slice(0, 10);
}

function getRotationOrder(providers: ProviderConfig[], rotationDate: string) {
  if (!providers.length) {
    return providers;
  }

  const dayNumber = Math.floor(Date.parse(`${rotationDate}T00:00:00.000Z`) / 86400000);
  const primaryIndex = ((dayNumber % providers.length) + providers.length) % providers.length;

  return providers.map((_, offset) => providers[(primaryIndex + offset) % providers.length]);
}

export async function getNewsDigest(): Promise<NewsDigest> {
  const rotationDate = getRotationDate();
  const providerStatus = new Map<string, ProviderStatus>(
    NEWS_PROVIDERS.map((provider) => [
      provider.name,
      {
        name: provider.name,
        enabled: hasCredential(provider),
        count: 0,
        state: hasCredential(provider) ? "standby" : "missing",
      },
    ])
  );

  const configuredProviders = NEWS_PROVIDERS.filter(hasCredential);
  const rotationOrder = getRotationOrder(configuredProviders, rotationDate);
  const scheduledProvider = rotationOrder[0]?.name || null;

  let activeProvider: string | null = null;
  let articles: NewsArticle[] = [];

  for (const provider of rotationOrder) {
    const result = await runProvider(provider);
    const succeeded = result.articles.length > 0;

    providerStatus.set(provider.name, {
      name: provider.name,
      enabled: result.enabled,
      count: result.articles.length,
      state: succeeded ? "active" : "failed",
      error: result.error || (!succeeded ? "No articles returned from this provider." : undefined),
    });

    if (succeeded) {
      activeProvider = provider.name;
      articles = result.articles;
      break;
    }
  }

  return {
    articles,
    providerStatus: Array.from(providerStatus.values()),
    lastUpdated: new Date().toISOString(),
    rotationDate,
    scheduledProvider,
    activeProvider,
    usedFailover:
      Boolean(activeProvider) &&
      Boolean(scheduledProvider) &&
      activeProvider !== scheduledProvider,
  };
}
