import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/page-banner";
import JsonLd from "@/components/JsonLd";
import { breadcrumbsSchema } from "@/seo/breadcrumbs";
import { absUrl } from "@/seo/utils";
import { Button } from "@/components/ui/button";
import { Search, Target, BarChart3, Layers } from "lucide-react";
import Link from "next/link";
import { buildMetadata, combineKeywords } from "@/seo/meta";
import { keywordGroups } from "@/seo/keyword-groups";

const seoKeywords = combineKeywords(
  [
    "Search engine optimization (SEO) services",
    "Technical SEO & on-page optimization",
    "Generative AI SEO",
    "AI search optimization",
    "Generative engine optimization",
    "SEO-driven web design",
    "Website performance optimization",
  ],
  keywordGroups.foundational
);

export const metadata = buildMetadata({
  title: "SEO Services | RTR Technologies",
  description:
    "Win sustainable search visibility with technical SEO, content strategy, and conversion-focused measurement designed for ambitious WordPress brands.",
  path: "/services/seo",
  keywords: seoKeywords,
});

export const revalidate = 60;

const seoPillars = [
  {
    title: "Technical foundation",
    description:
      "Stabilize your WordPress stack with crawlable architecture, fast performance, and clean data layers.",
    icon: Search,
  },
  {
    title: "Content strategy",
    description:
      "Map keyword intent to high-converting experiences, build topical authority, and ship briefs writers love.",
    icon: Layers,
  },
  {
    title: "Authority growth",
    description:
      "Earn trust with digital PR, thought leadership, and partner campaigns that attract the right backlinks.",
    icon: Target,
  },
  {
    title: "Measurement & iteration",
    description:
      "Instrument GA4, Looker Studio, and dashboards so every sprint is guided by real conversions—not vanity metrics.",
    icon: BarChart3,
  },
];

const seoPackages = [
  {
    name: "Visibility Accelerator",
    summary:
      "Technical audit, quick-win roadmap, and launch support to stabilize performance and unlock new traffic within 90 days.",
    deliverables: [
      "Full technical SEO audit with prioritized fixes",
      "Keyword and intent mapping by funnel stage",
      "Schema, Core Web Vitals, and accessibility updates",
      "Launch-ready content briefs for priority pages",
    ],
  },
  {
    name: "Sustained Growth Retainer",
    summary:
      "Monthly experimentation across content, authority, and conversion, anchored in KPI dashboards and quarterly planning.",
    deliverables: [
      "Editorial calendar and brief production",
      "Digital PR and partnership campaigns",
      "CRO testing roadmap tied to organic traffic",
      "Monthly reporting and experiment retrospectives",
    ],
  },
  {
    name: "Enterprise Authority Programs",
    summary:
      "Cross-functional enablement for in-house teams with governance, enablement, and shared analytics for multi-market rollouts.",
    deliverables: [
      "Governance and workflow documentation",
      "Playbooks for internal stakeholders",
      "Training sessions and co-working labs",
      "Advanced dashboards and integration support",
    ],
  },
];

const faqs = [
  {
    question: "How quickly can we expect results from SEO campaigns?",
    answer:
      "Technical fixes and content refreshes can surface gains within the first 60–90 days. Compounding growth typically appears within 4–6 months, accelerated by CRO and paid activation.",
  },
  {
    question: "Do you work with internal marketing teams?",
    answer:
      "Yes. We plug into your existing team, supplying strategy, specialized execution, or enablement. Every engagement includes shared dashboards and clear owners for each deliverable.",
  },
  {
    question: "Can you migrate us from another CMS to WordPress without losing rankings?",
    answer:
      "We run detailed migration plans covering redirects, content parity, structured data, and monitoring. Pre- and post-launch checklists protect authority while unlocking performance enhancements.",
  },
];

const seoSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services",
  serviceType: "Search Engine Optimization",
  provider: {
    "@type": "Organization",
    name: "RTR Technologies",
    url: absUrl("/"),
  },
  areaServed: {
    "@type": "City",
    name: "Toronto",
  },
  description:
    "Technical SEO, content strategy, and analytics programs that grow qualified traffic for WordPress brands.",
};

export default function SEOServicePage() {
  return (
    <>
      <JsonLd id="ld-seo-service" data={seoSchema} />
      <JsonLd
        id="ld-seo-breadcrumbs"
        data={breadcrumbsSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "SEO Services", url: "/services/seo" },
        ])}
      />
      <Header />
      <PageBanner
        title="SEO Services Built for Sustainable Growth"
        description="Engineer a search program that compounds. We blend technical SEO, content operations, and conversion strategy so your WordPress site outranks competitors and generates revenue—not just traffic."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "SEO" },
        ]}
      />

      <section className="bg-gradient-to-b from-white via-white to-yellow-50/40 py-16 dark:from-gray-950 dark:via-gray-950 dark:to-yellow-900/10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                Search programs engineered around revenue outcomes
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                From the first audit to the latest content sprint, every tactic is grounded in clear intent, clean analytics, and ruthless prioritization. We partner with founders and in-house teams who expect SEO to drive measurable pipeline.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {seoPillars.map((pillar) => (
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
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-yellow-100">
                Where we focus first
              </h3>
              <ul className="mt-6 space-y-4 text-gray-700 dark:text-gray-200">
                <li>• High-impact technical fixes tied to crawl budget and speed</li>
                <li>• Keyword clusters aligned to revenue-generating journeys</li>
                <li>• Dashboards surfacing ROI across SEO, PPC, and CRO</li>
                <li>• Enablement to keep internal teams shipping confidently</li>
              </ul>
              <Button
                asChild
                variant="primary"
                size="lg"
                className="mt-8 w-full"
                withRipple
              >
                <Link href="/contact">Book an SEO discovery call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
              Proven roadmaps
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-gray-900 dark:text-white">
              Engagement models tailored to your growth stage
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Whether you need a technical reset, ongoing momentum, or enterprise coordination, each program prioritizes clarity, speed, and measurable gains.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {seoPackages.map((pkg) => (
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
                  <Link href="/contact">Request pricing</Link>
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
