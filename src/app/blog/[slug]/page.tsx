import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageBanner from "@/components/ui/page-banner";
import JsonLd from "@/components/JsonLd";
import { blogPosts, getBlogPostBySlug } from "@/content/blog/posts";
import { buildMetadata, combineKeywords } from "@/seo/meta";
import { keywordGroups } from "@/seo/keyword-groups";
import { articleSchema } from "@/seo/article";
import { breadcrumbsSchema } from "@/seo/breadcrumbs";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  const keywords = combineKeywords(post.keywords, keywordGroups.foundational, keywordGroups.expansion);
  return buildMetadata({
    title: `${post.title} | RTR Technologies Insights`,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords,
    image: {
      url: `/api/og/${post.slug}`,
    },
  });
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd
        id={`ld-blog-${post.slug}`}
        data={articleSchema({
          title: post.title,
          description: post.description,
          slug: post.slug,
          date: post.date,
          image: `/api/og/${post.slug}`,
        })}
      />
      <JsonLd
        id={`ld-breadcrumbs-${post.slug}`}
        data={breadcrumbsSchema([
          { name: "Home", url: "/" },
          { name: "Insights", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ])}
      />
      <Header />
      <PageBanner
        title={post.title}
        description={post.description}
        breadcrumbs={[
          { label: "Insights", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="py-16 md:py-24">
        <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <span>{new Date(post.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
            <span>•</span>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-yellow-500/40 bg-yellow-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-10 text-gray-700 dark:text-gray-200">
            {post.sections.map((section, index) => (
              <section
                key={section.heading ?? index}
                className={section.highlight ? "rounded-3xl border border-yellow-500/30 bg-yellow-500/10 p-8 text-gray-900 dark:text-yellow-100 dark:border-yellow-400/40 dark:bg-yellow-400/10" : ""}
              >
                {section.heading && (
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {section.heading}
                  </h2>
                )}
                <div className={section.heading ? "mt-4 space-y-4" : "space-y-4"}>
                  {section.body.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="leading-7 text-gray-700 dark:text-gray-200"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {post.cta && (
            <div className="flex items-center justify-between rounded-3xl border border-gray-200/60 bg-white/80 p-8 shadow-lg dark:border-gray-700/60 dark:bg-gray-900/70">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Ready to keep momentum going?
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Book time with our team and turn these insights into action.
                </p>
              </div>
              <Button asChild variant="primary" size="lg" withRipple>
                <Link href={post.cta.href}>{post.cta.label}</Link>
              </Button>
            </div>
          )}
        </div>
      </article>
      <Footer />
    </>
  );
}
