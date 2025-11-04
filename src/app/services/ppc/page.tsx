import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/page-banner";
import JsonLd from "@/components/JsonLd";
import { breadcrumbsSchema } from "@/seo/breadcrumbs";
import { absUrl } from "@/seo/utils";
import { Button } from "@/components/ui/button";
import { Megaphone, BarChart3, GaugeCircle, Target, LineChart } from "lucide-react";
import Link from "next/link";
import { buildMetadata, combineKeywords } from "@/seo/meta";
import { keywordGroups } from "@/seo/keyword-groups";

const ppcKeywords = combineKeywords(
  [
    "Pay-per-click (PPC) management",
    "Google Ads management",
    "Digital marketing agency",
    "Conversion rate optimization (CRO)",
    "Lead generation & sales funnels",
    "Landing page design",
  ],
  keywordGroups.expansion
);

export const metadata = buildMetadata({
  title: "Paid Media & PPC Management | RTR Technologies",
  description:
    "Launch and scale profitable PPC campaigns across Google Ads and paid social with conversion tracking, CRO, and reporting built in.",
  path: "/services/ppc",
  keywords: ppcKeywords,
});

export const revalidate = 60;

const pillars = [
  {
    title: "Audience intelligence",
    description:
      "Leverage CRM data, search intent, and lookalike modeling to target buyers across the funnel.",
    icon: Target,
  },
  {
    title: "Creative experimentation",
    description:
      "Continuously test headlines, visuals, and offers to improve click-through and conversion rates.",
    icon: Megaphone,
  },
  {
    title: "Conversion tracking",
    description:
      "Implement GA4, offline conversions, and revenue reporting so decisions align with true ROI.",
    icon: BarChart3,
  },
  {
    title: "Optimization cadence",
    description:
      "Weekly sprints prioritize budget shifts, bid strategies, and landing page refinements.",
    icon: LineChart,
  },
];

const programs = [
  {
    name: "Launch + Learn",
    summary:
      "Perfect for new campaigns or product launches. We validate messaging, funnels, and budgets within the first 60 days.",
    deliverables: [
      "Account structure design and setup",
      "Keyword and audience research",
      "Ad copywriting and creative briefs",
      "Conversion tracking and dashboard setup",
    ],
  },
  {
    name: "Scale Up Retainer",
    summary:
      "Ongoing optimization and experimentation to improve CAC, build retargeting pools, and expand coverage.",
    deliverables: [
      "Weekly optimization and budget management",
      "Landing page CRO and multivariate testing",
      "Creative refresh roadmap",
      "Revenue-focused reporting and analysis",
    ],
  },
  {
    name: "Full-Funnel Performance",
    summary:
      "Integrated SEO + PPC + CRO strategy for teams ready to dominate competitive categories with coordinated messaging.",
    deliverables: [
      "Shared testing backlog across channels",
      "Attribution modeling and forecasting",
      "Lifecycle nurture and remarketing journeys",
      "Quarterly growth reviews with executive stakeholders",
    ],
  },
];

const faqs = [
  {
    question: "Do you manage both Google Ads and paid social?",
    answer:
      "Yes. We specialize in Google Ads, Microsoft Ads, LinkedIn, and Meta. Engagements can include one or multiple platforms depending on your goals and audience.",
  },
  {
    question: "What budget do you recommend?",
    answer:
      "Most mid-market programs start with $3k–$10k monthly media spend. We calibrate investment based on your CAC targets, sales cycle, and conversion rates.",
  },
  {
    question: "Can you work with in-house creative teams?",
    answer:
      "Absolutely. We provide testing roadmaps, creative briefs, and performance insights so your team produces assets that convert. We can also collaborate with partner studios when needed.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paid Media & PPC Management",
  serviceType: "Pay-Per-Click Advertising",
  provider: {
    "@type": "Organization",
    name: "RTR Technologies",
    url: absUrl("/"),
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Canada",
  },
  description:
    "Paid media management covering Google Ads, Microsoft Ads, and paid social with conversion tracking and CRO support.",
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      price: 1500,
    },
    url: absUrl("/services/ppc"),
  },
};

export default function PPCPage() {
  return (
    <>
      <JsonLd id="ld-ppc-service" data={schema} />
      <JsonLd
        id="ld-ppc-breadcrumbs"
        data={breadcrumbsSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Paid Media & PPC", url: "/services/ppc" },
        ])}
      />
      <Header />
      <PageBanner
        title="Paid Media & PPC Management"
        description="Scale paid acquisition with confidence. Our PPC programs pair smart targeting, creative experimentation, and bulletproof analytics to deliver pipeline faster."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Paid Media & PPC" },
        ]}
      />

      <section className="bg-gradient-to-b from-white via-white to-yellow-50/40 py-16 dark:from-gray-950 dark:via-gray-950 dark:to-yellow-900/10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                Performance marketing built for profitable growth
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We eliminate wasted spend, align budgets with revenue targets, and keep experiments shipping quickly. Expect a partner that sweats the full funnel—from ad impression to closed-won.
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
                <GaugeCircle className="h-4 w-4" aria-hidden="true" />
                KPIs we own
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-yellow-100">
                Focused on revenue, not vanity metrics
              </h3>
              <ul className="mt-6 space-y-4 text-gray-700 dark:text-gray-200">
                <li>• Qualified lead volume and cost per opportunity</li>
                <li>• Multi-touch attribution and assisted conversions</li>
                <li>• Landing page performance and CRO velocity</li>
                <li>• Lifetime value insights to refine targeting</li>
              </ul>
              <Button
                asChild
                variant="primary"
                size="lg"
                className="mt-8 w-full"
                withRipple
              >
                <Link href="/contact">Schedule a paid media consult</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
              Engagement options
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-gray-900 dark:text-white">
              Choose the program that fits your growth stage
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              From launch validation to integrated full-funnel orchestration, each engagement emphasizes speed, clarity, and ROI accountability.
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
                  <Link href="/contact">Discuss pricing</Link>
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
