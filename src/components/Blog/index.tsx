import type { Blog as BlogEntry } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import blogData from "./blogData";

function SlidingBlogCard({
  blog,
  decorative = false,
}: {
  blog: BlogEntry;
  decorative?: boolean;
}) {
  const { title, image, paragraph, author, publishDate, tags } = blog;

  return (
    <article
      aria-hidden={decorative}
      className="group flex w-[280px] shrink-0 flex-col overflow-hidden rounded-[20px] border border-[#d9e2ec] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.07)] transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-[#111111]"
    >
      <Link
        href="/blog-details"
        tabIndex={decorative ? -1 : 0}
        className="relative block aspect-[1.24/1] overflow-hidden"
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 78vw, 280px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/92 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#101828]"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0E9F9F]">
          <span>{publishDate}</span>
          <span className="h-1 w-1 rounded-full bg-[#0E9F9F]" />
          <span className="truncate">{author.designation}</span>
        </div>

        <h3 className="mt-3 min-h-[3rem] text-base font-semibold leading-6 text-[#101828] dark:text-white">
          <Link
            href="/blog-details"
            tabIndex={decorative ? -1 : 0}
            className="transition-colors hover:text-[#0E9F9F]"
          >
            {title}
          </Link>
        </h3>

        <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-[#475467] dark:text-[#98a2b3]">
          {paragraph}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#e8edf3] pt-3 dark:border-white/10">
          <div className="flex min-w-0 items-center gap-2.5">
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#d9e2ec] dark:border-white/10">
              <Image
                src={author.image}
                alt={author.name}
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>

            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-[#101828] dark:text-white">
                {author.name}
              </p>
              <p className="truncate text-[11px] text-[#667085] dark:text-[#98a2b3]">
                {author.designation}
              </p>
            </div>
          </div>

          <Link
            href="/blog-details"
            tabIndex={decorative ? -1 : 0}
            className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-[#0E9F9F] transition-colors hover:text-[#0f4043] dark:hover:text-[#5eead4]"
          >
            Read
          </Link>
        </div>
      </div>
    </article>
  );
}

const Blog = () => {
  const animationDuration = `${Math.max(42, blogData.length * 7)}s`;

  return (
    <section
      id="blog"
      className="overflow-hidden bg-white px-4 py-24 transition-colors dark:bg-black sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#101828] sm:text-5xl lg:text-[3.3rem] dark:text-white">
            Our Latest Blogs
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#4b5563] dark:text-[#9ca3af]">
            Stay updated with fresh insights, stories, and tips in our latest
            blogs.
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-white via-white/88 to-transparent dark:from-black dark:via-black/88 sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-24 bg-gradient-to-l from-white via-white/88 to-transparent dark:from-black dark:via-black/88 sm:block" />

          <div className="overflow-hidden py-2">
            <div
              className="animate-scroll-right flex w-max items-stretch gap-5"
              style={{ animationDuration }}
            >
              <div className="flex items-stretch gap-5">
                {blogData.map((blog) => (
                  <SlidingBlogCard key={`primary-${blog.id}`} blog={blog} />
                ))}
              </div>

              <div aria-hidden="true" className="flex items-stretch gap-5">
                {blogData.map((blog) => (
                  <SlidingBlogCard
                    key={`duplicate-${blog.id}`}
                    blog={blog}
                    decorative
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
