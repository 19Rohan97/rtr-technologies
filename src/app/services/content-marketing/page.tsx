import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/page-banner";
import JsonLd from "@/components/JsonLd";
import { breadcrumbsSchema } from "@/seo/breadcrumbs";
import { absUrl } from "@/seo/utils";
import { Button } from "@/components/ui/button";
import { PenSquare, FileText, Layers, Share2, BarChart3 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Content Marketing Services | RTR Technologies",
  description:
    "Build a content engine that attracts, nurtures, and converts. Strategy, production, and distribution tailored to growth-focused teams.",
  alternates: { canonical: "/services/content-marketing" },
  openGraph: {
    title: "Content Marketing Services | RTR Technologies",
    description:
      "Editorial strategy, SEO content, and multimedia assets crafted to earn authority and accelerate demand.",
    url: absUrl("/services/content-marketing"),
    type: "website",
    images: [{ url: "/rtr-logo.png", width: 1200, height: 630, alt: "RTR Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Marketing Services | RTR Technologies",
    description:
      "Strategy, storytelling, and distribution frameworks that fuel pipeline and retention.",
    images: ["/rtr-logo.png"],
  },
};

export const revalidate = 60;

const pillars = [
  {
    title: "Strategic storytelling",
    description:
      "Unearth customer pain points, positioning, and differentiators to craft narratives that convert.",
    icon: PenSquare,
  },
  {
    title: "SEO alignment",
    description:
      "Translate keyword and intent research into briefs, outlines, and optimization checklists.",
    icon: Layers,
  },
  {
    title: "Multi-format production",
    description:
      "Publish across blogs, emails, video, and gated assets with efficient repurposing workflows.",
    icon: Share2,
  },
  {
    title: "Performance insights",
    description:
      "Dashboard attribution, engagement, and assisted revenue to continually refine the funnel.",
    icon: BarChart3,
  },
];

const programs = [
  {
    name: "Editorial Foundation",
    summary:
      "Clarify messaging, audience personas, and pillar themes with a 90-day plan ready for execution.",
    deliverables: [
      "Workshop and positioning audit",
      "Audience personas and messaging matrix",
      "Topic cluster roadmap and content calendar",
      "Brand voice guide and governance framework",
    ],
  },
  {
    name: "Content Production Retainer",
    summary:
      "Weekly or bi-weekly content production covering blogs, landing pages, newsletters, and social snippets.",
    deliverables: [
      "Keyword-backed briefs and outlines",
      "Editorial reviews and optimization passes",
      "CMS publishing support and QA",
      "Asset repurposing across email and social",
    ],
  },
  {
    name: "Thought Leadership Lab",
    summary:
      "Executive ghostwriting, research-heavy assets, and distribution strategies for brand authority.",
    deliverables: [
      "Interview-driven long-form articles",
      "Original research, whitepapers, or reports",
      "Executive LinkedIn and bylined content",
      "Launch campaigns with nurture sequences",
    ],
  },
];

const faqs = [
  {
    question: "Do you offer content strategy without production?",
    answer:
      "Yes. We can deliver strategy, playbooks, and enablement for your internal team, then provide periodic audits to keep momentum.",
  },
  {
    question: "Can you work with subject matter experts?",
    answer:
      "Absolutely. We run interviews, extract insights, and maintain feedback loops so your experts stay in the loop without slowing production.",
  },
  {
    question: "How do you measure content performance?",
    answer:
      "We connect GA4, CRM, and marketing automation data to track engagement, assisted revenue, and pipeline influence. Dashboards are shared with your team monthly.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Content Marketing Services",
  serviceType: "Content Marketing",
  provider: {
    "@type": "Organization",
    name: "RTR Technologies",
    url: absUrl("/"),
  },
  description:
    "Content marketing strategy and production services including SEO content, thought leadership, and multi-channel distribution.",
};

export default function ContentMarketingPage() {
  return (
    <>
      <JsonLd id="ld-content-service" data={schema} />
      <JsonLd
        id="ld-content-breadcrumbs"
        data={breadcrumbsSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Content Marketing", url: "/services/content-marketing" },
        ])}
      />
      <Header />
      <PageBanner
        title="Content Marketing Engine"
        description="Build a consistent flow of authority-building content that moves prospects from discovery to decision. We deliver strategy, production, and performance insights under one roof."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Content Marketing" },
        ]}
      />

      <section className="bg-gradient-to-b from-white via-white to-yellow-50/30 py-16 dark:from-gray-950 dark:via-gray-950 dark:to-yellow-900/10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                Content that earns trust and drives action
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We combine research, storytelling, and SEO to publish assets your buyers actually want. Every deliverable supports your funnel—from first touch to ongoing retention.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-3xl border border-gray-200/60 bg-white/70 p-6 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl dark:border-gray-700/60 dark:bg-gray-900/70"
                  >
                    <pillar.icon
                      className="h-8 w-8 text-yellow-500"
                      aria-hidden="true"
                    />
                    <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-500/10 p-8 text-left shadow-2xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-yellow-400/40 dark:bg-yellow-400/10">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-600">
                <FileText className="h-4 w-4" aria-hidden="true" />
                Deliverable snapshot
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-yellow-100">
                What you can expect every month
              </h3>
              <ul className="mt-6 space-y-4 text-gray-700 dark:text-gray-200">
                <li>• Editorial calendar aligned to business priorities</li>
                <li>• SEO-optimized content ready for publishing</li>
                <li>• Repurposing kits for email, social, and sales enablement</li>
                <li>• Reporting on traffic, engagement, and conversions</li>
              </ul>
              <Button
                asChild
                variant="primary"
                size="lg"
                className="mt-8 w-full"
                withRipple
              >
                <Link href="/contact">Plan your content roadmap</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
              Engagement models
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-gray-900 dark:text-white">
              Choose the partnership that fits your bandwidth
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              From foundational strategy to a fully managed content engine, we tailor support to your team and timelines.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {programs.map((pkg) => (
              <div
                key={pkg.name}
                className="group flex h-full flex-col rounded-3xl border border-gray-200/60 bg-white/80 p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl dark:border-gray-700/60 dark:bg-gray-900/70"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {pkg.name}
                </h3>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {pkg.summary}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  {pkg.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 size-2 rounded-full bg-yellow-500" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="primary"
                  size="lg"
                  className="mt-auto w-full"
                  withRipple
                >
                  <Link href="/contact">Request proposal</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 dark:bg-gray-950">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            FAQ
          </h2>
          <div className="mt-8 space-y-6">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-gray-200/70 bg-white/70 p-6 shadow-sm transition dark:border-gray-700/60 dark:bg-gray-900/70"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-medium text-gray-900 marker:content-none dark:text-white">
                  {item.question}
                  <span
                    className="text-yellow-500 transition group-open:rotate-90"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
