import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/page-banner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbsSchema } from "@/seo/breadcrumbs";
import { buildMetadata, combineKeywords } from "@/seo/meta";
import { keywordGroups } from "@/seo/keyword-groups";
import { blogPosts } from "@/content/blog/posts";

const sitemapKeywords = combineKeywords(
  [
    "WordPress development sitemap",
    "SEO services sitemap",
    "Digital marketing agency pages",
  ],
  keywordGroups.foundational,
  keywordGroups.expansion
);

export const metadata = buildMetadata({
  title: "Sitemap | RTR Technologies",
  description:
    "Explore every RTR Technologies page including WordPress services, portfolio projects, insights, and contact routes. XML feed available for Google Search Console.",
  path: "/sitemap",
  keywords: sitemapKeywords,
});

const corePages = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services Overview" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Insights & Resources" },
  { href: "/contact", label: "Contact" },
];

const servicePages = [
  { href: "/services/seo", label: "SEO Services" },
  { href: "/services/ai-seo", label: "AI & Generative SEO" },
  { href: "/services/ppc", label: "Paid Media & PPC Management" },
  { href: "/services/content-marketing", label: "Content Marketing" },
  { href: "/services/social-media", label: "Social Media Management" },
  {
    href: "/services/conversion-rate-optimization",
    label: "Conversion Rate Optimization",
  },
  { href: "/services", label: "WordPress Development & Support" },
];

const resourcePages = [
  { href: "/sitemap.xml", label: "XML Sitemap (for Google Search Console)" },
  { href: "/robots.txt", label: "Robots.txt" },
];

const sortedPosts = [...blogPosts].sort((a, b) =>
  a.date < b.date ? 1 : -1
);

export default function SitemapPage() {
  return (
    <>
      <JsonLd
        id="ld-sitemap-breadcrumbs"
        data={breadcrumbsSchema([
          { name: "Home", url: "/" },
          { name: "Sitemap", url: "/sitemap" },
        ])}
      />
      <Header />
      <PageBanner
        title="Sitemap"
        description="A human-friendly view of every RTR Technologies page—plus direct access to the XML sitemap that keeps search engines in sync."
        breadcrumbs={[{ label: "Sitemap" }]}
      />

      <main className="bg-gradient-to-b from-white via-white to-yellow-50/40 py-16 dark:from-gray-950 dark:via-gray-950 dark:to-yellow-900/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4">
          <section className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-gray-200/70 bg-white/80 p-8 shadow-md transition dark:border-gray-700/60 dark:bg-gray-900/70">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Core Pages
              </h2>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                Anchor destinations for prospects evaluating our WordPress and growth programs.
              </p>
              <ul className="mt-6 space-y-4">
                {corePages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="text-yellow-600 transition hover:text-yellow-500 dark:text-yellow-400 dark:hover:text-yellow-300"
                    >
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-gray-200/70 bg-white/80 p-8 shadow-md transition dark:border-gray-700/60 dark:bg-gray-900/70">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Service Deep Dives
              </h2>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                Detailed explainers for each WordPress growth service, optimized for search and conversions.
              </p>
              <ul className="mt-6 space-y-4">
                {servicePages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="text-yellow-600 transition hover:text-yellow-500 dark:text-yellow-400 dark:hover:text-yellow-300"
                    >
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-gray-200/70 bg-white/80 p-8 shadow-md transition dark:border-gray-700/60 dark:bg-gray-900/70">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Insights & Playbooks
            </h2>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              Guides covering SEO, AI search optimization, PPC, and conversion strategy.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {sortedPosts.map((post) => (
                <article key={post.slug} className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-yellow-600 dark:text-yellow-400">
                    {new Date(post.date).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-lg font-semibold text-gray-900 transition hover:text-yellow-600 dark:text-white dark:hover:text-yellow-400"
                  >
                    {post.title}
                  </Link>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {post.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-gray-200/70 bg-white/80 p-8 shadow-md transition dark:border-gray-700/60 dark:bg-gray-900/70">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Search Console Resources
            </h2>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              Submit the XML sitemap to Google Search Console for indexing. Use the human-friendly links above for quick reviews.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild variant="primary" size="lg" withRipple>
                <Link href="/sitemap.xml">Open XML Sitemap</Link>
              </Button>
              <Button asChild variant="outline" size="lg" withRipple>
                <Link href="/robots.txt">View robots.txt</Link>
              </Button>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-gray-600 dark:text-gray-300">
              {resourcePages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-yellow-600 transition hover:text-yellow-500 dark:text-yellow-400 dark:hover:text-yellow-300"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
