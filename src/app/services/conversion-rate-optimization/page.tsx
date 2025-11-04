import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/page-banner";
import JsonLd from "@/components/JsonLd";
import { breadcrumbsSchema } from "@/seo/breadcrumbs";
import { absUrl } from "@/seo/utils";
import { Button } from "@/components/ui/button";
import { GaugeCircle, ClipboardList, FlaskRound, BrainCircuit, Sparkles } from "lucide-react";
import Link from "next/link";
import { buildMetadata, combineKeywords } from "@/seo/meta";
import { keywordGroups } from "@/seo/keyword-groups";

const croKeywords = combineKeywords(
  [
    "Conversion rate optimization (CRO)",
    "Landing page design",
    "Lead generation & sales funnels",
    "Website performance optimization",
    "Marketing automation",
  ],
  keywordGroups.expansion,
  keywordGroups.foundational
);

export const metadata = buildMetadata({
  title: "Conversion Rate Optimization | RTR Technologies",
  description:
    "Increase revenue from existing traffic with research-driven CRO programs, experimentation, and analytics.",
  path: "/services/conversion-rate-optimization",
  keywords: croKeywords,
  image: {
    url: "/api/og/conversion-rate-optimization",
  },
});

export const revalidate = 60;

const pillars = [
  {
    title: "Quantitative + qualitative research",
    description:
      "Pair analytics, heatmaps, and surveys to uncover friction points and revenue opportunities across journeys.",
    icon: ClipboardList,
  },
  {
    title: "Experimentation roadmaps",
    description:
      "Prioritize A/B tests using impact vs. effort modeling, giving stakeholders clarity on what ships next.",
    icon: FlaskRound,
  },
  {
    title: "Full-funnel optimization",
    description:
      "Improve landing pages, onboarding flows, and nurture campaigns so learnings compound across the funnel.",
    icon: GaugeCircle,
  },
  {
    title: "Knowledge systems",
    description:
      "Document hypotheses, outcomes, and insights so your team makes faster, smarter decisions every sprint.",
    icon: BrainCircuit,
  },
];

const programs = [
  {
    name: "CRO Sprint",
    summary:
      "A focused eight-week engagement to audit funnels, launch priority tests, and hand back a roadmap for continued optimization.",
    deliverables: [
      "Analytics and UX research sprint",
      "Experiment backlog with projected uplift",
      "Design and development for priority tests",
      "Enablement workshop and next-steps plan",
    ],
  },
  {
    name: "Growth Optimization Retainer",
    summary:
      "Ongoing testing cadence combining CRO, product analytics, and personalization for sustained revenue lift.",
    deliverables: [
      "Monthly testing cycles with dedicated team",
      "UX copywriting and design collaboration",
      "Experiment analysis and storytelling",
      "Cross-channel insights for marketing and product",
    ],
  },
  {
    name: "Analytics & Enablement",
    summary:
      "For teams seeking better measurement. We implement tracking, dashboards, and training to empower DIY optimization.",
    deliverables: [
      "GA4 and tag governance framework",
      "Dashboard suite for marketing and leadership",
      "Experimentation playbooks and templates",
      "Quarterly reviews and support",
    ],
  },
];

const faqs = [
  {
    question: "Do you handle development for experiments?",
    answer:
      "Yes. We provide design and development support or collaborate with your in-house teams, ensuring handoffs are smooth and experiments launch on time.",
  },
  {
    question: "How long before we see results?",
    answer:
      "Some wins surface within the first test cycle, usually 4–6 weeks. Sustained improvements come from a consistent cadence of research and testing.",
  },
  {
    question: "Can CRO integrate with our paid and SEO efforts?",
    answer:
      "Absolutely. We coordinate with acquisition teams so landing pages, funnel messaging, and conversion tracking amplify the campaigns driving traffic.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Conversion Rate Optimization",
  serviceType: "CRO Service",
  provider: {
    "@type": "Organization",
    name: "RTR Technologies",
    url: absUrl("/"),
  },
  description:
    "Conversion rate optimization services covering research, experimentation, and analytics for revenue-focused teams.",
};

export default function CROPage() {
  return (
    <>
      <JsonLd id="ld-cro-service" data={schema} />
      <JsonLd
        id="ld-cro-breadcrumbs"
        data={breadcrumbsSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Conversion Rate Optimization", url: "/services/conversion-rate-optimization" },
        ])}
      />
      <Header />
      <PageBanner
        title="Conversion Rate Optimization"
        description="Unlock incremental revenue from the traffic you already have. Our CRO programs combine research, experimentation, and storytelling to keep learnings compounding."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Conversion Rate Optimization" },
        ]}
      />

      <section className="bg-gradient-to-b from-white via-white to-yellow-50/30 py-16 dark:from-gray-950 dark:via-gray-950 dark:to-yellow-900/10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                Systematic experimentation that drives clarity and revenue
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We dig into analytics, customer behavior, and funnel data to pinpoint bottlenecks. Every test is designed to teach as much as it converts, so you stack wins quarter after quarter.
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
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Highlights
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-yellow-100">
                What sets our CRO apart
              </h3>
              <ul className="mt-6 space-y-4 text-gray-700 dark:text-gray-200">
                <li>• Research methods tailored to your funnel and ICP</li>
                <li>• Design + dev partners to implement tests quickly</li>
                <li>• Story-driven reporting that aligns leadership and GTM</li>
                <li>• Learnings library to inform SEO, paid, and product teams</li>
              </ul>
              <Button
                asChild
                variant="primary"
                size="lg"
                className="mt-8 w-full"
                withRipple
              >
                <Link href="/contact">Request a CRO audit</Link>
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
              Options that match your team’s velocity
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Whether you need a research sprint or embedded experimentation partner, we plug in seamlessly with marketing, product, and RevOps.
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
