import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/page-banner";
import { buildMetadata, combineKeywords } from "@/seo/meta";
import { keywordGroups } from "@/seo/keyword-groups";
import JsonLd from "@/components/JsonLd";
import { breadcrumbsSchema } from "@/seo/breadcrumbs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { fetchBlogPosts, fetchSiteSettings } from "@/sanity/queries";

const blogKeywords = combineKeywords(
  [
    "WordPress SEO insights",
    "Digital marketing agency blog",
    "AI search optimization tips",
    "Growth marketing resources",
  ],
  keywordGroups.foundational,
  keywordGroups.expansion
);

export const metadata = buildMetadata({
  title: "Insights & Resources | RTR Technologies Blog",
  description:
    "Actionable guides on WordPress development, AI SEO, PPC strategy, and conversion optimization from the RTR Technologies team.",
  path: "/blog",
  keywords: blogKeywords,
});

export const revalidate = 60;

export default async function BlogIndexPage() {
  const [siteSettings, posts] = await Promise.all([
    fetchSiteSettings(),
    fetchBlogPosts(),
  ]);

  return (
    <>
      <JsonLd
        id="ld-blog-breadcrumbs"
        data={breadcrumbsSchema([
          { name: "Home", url: "/" },
          { name: "Insights", url: "/blog" },
        ])}
      />
      <Header site={siteSettings} />
      <PageBanner
        title="Insights & Playbooks"
        description="Stay ahead of the growth curve with practical guides on WordPress development, SEO, AI search, paid media, and conversion optimization."
        breadcrumbs={[{ label: "Insights" }]}
      />

      <section className="bg-gradient-to-b from-white via-white to-yellow-50/40 dark:from-gray-950 dark:via-gray-950 dark:to-yellow-900/10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post._id}
                className="group flex h-full flex-col rounded-3xl border border-gray-200/60 bg-white/80 p-8 shadow-lg backdrop-blur transition hover:-translate-y-2 hover:shadow-2xl dark:border-gray-700/60 dark:bg-gray-900/70"
              >
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{new Date(post.publishedAt).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-gray-900 transition-colors group-hover:text-yellow-600 dark:text-white dark:group-hover:text-yellow-400">
                  {post.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {post.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {(post.tags ?? []).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-yellow-500/40 bg-yellow-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  asChild
                  variant="primary"
                  size="lg"
                  className="mt-auto w-fit"
                  withRipple
                >
                  <Link href={`/blog/${post.slug.current}`}>Read the guide</Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer site={siteSettings} />
    </>
  );
}
