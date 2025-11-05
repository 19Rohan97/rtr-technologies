import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageBanner from "@/components/ui/page-banner";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, combineKeywords } from "@/seo/meta";
import { keywordGroups } from "@/seo/keyword-groups";
import { articleSchema } from "@/seo/article";
import { breadcrumbsSchema } from "@/seo/breadcrumbs";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  fetchBlogPostBySlug,
  fetchBlogPosts,
  fetchSiteSettings,
} from "@/sanity/queries";
import { PortableText, type PortableTextComponents } from "@portabletext/react";

type PageParams = Promise<{ slug: string }>;

type PageProps = {
  params: PageParams;
};

export async function generateStaticParams() {
  const posts = await fetchBlogPosts();
  return posts.map((post) => ({ slug: post.slug.current }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(slug);
  if (!post) return {};

  const keywords = combineKeywords(
    post.keywords ?? [],
    keywordGroups.foundational,
    keywordGroups.expansion
  );

  return buildMetadata({
    title: `${post.title} | RTR Technologies Insights`,
    description: post.description,
    path: `/blog/${post.slug.current}`,
    keywords,
  });
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="leading-7 text-gray-700 dark:text-gray-200">{children}</p>
    ),
    h2: ({ children }) => (
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {children}
      </h3>
    ),
    h3: ({ children }) => (
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-gray-700 dark:text-gray-200">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-200">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal space-y-2 pl-6 text-gray-700 dark:text-gray-200">
        {children}
      </ol>
    ),
  },
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const [post, siteSettings] = await Promise.all([
    fetchBlogPostBySlug(slug),
    fetchSiteSettings(),
  ]);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd
        id={`ld-blog-${post.slug.current}`}
        data={articleSchema({
          title: post.title,
          description: post.description,
          slug: post.slug.current,
          date: post.publishedAt,
          image: "/og-default.png",
        })}
      />
      <JsonLd
        id={`ld-breadcrumbs-${post.slug.current}`}
        data={breadcrumbsSchema([
          { name: "Home", url: "/" },
          { name: "Insights", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug.current}` },
        ])}
      />
      <Header site={siteSettings} />
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
            <span>
              {new Date(post.publishedAt).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            {post.readingTime && (
              <>
                <span>•</span>
                <span>{post.readingTime}</span>
              </>
            )}
            {!!post.tags?.length && (
              <>
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
              </>
            )}
          </div>

          <div className="space-y-10 text-gray-700 dark:text-gray-200">
            {(post.sections ?? []).map((section, index) => {
              const highlighted = section.highlight ? "highlighted" : "normal";
              return (
                <section
                  key={section.heading ?? index}
                  className={
                    highlighted === "highlighted"
                      ? "rounded-3xl border border-yellow-500/30 bg-yellow-500/10 p-8 text-gray-900 dark:text-yellow-100 dark:border-yellow-400/40 dark:bg-yellow-400/10"
                      : ""
                  }
                >
                  {section.heading && (
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {section.heading}
                    </h2>
                  )}
                  <div
                    className={
                      section.heading ? "mt-4 space-y-4" : "space-y-4"
                    }
                  >
                    {section.body?.length ? (
                      <PortableText
                        value={section.body}
                        components={portableTextComponents}
                      />
                    ) : null}
                  </div>
                </section>
              );
            })}
          </div>

          {post.cta?.href && post.cta?.label && (
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
      <Footer site={siteSettings} />
    </>
  );
}
