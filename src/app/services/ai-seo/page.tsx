import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/page-banner";
import JsonLd from "@/components/JsonLd";
import { breadcrumbsSchema } from "@/seo/breadcrumbs";
import { absUrl } from "@/seo/utils";
import { Button } from "@/components/ui/button";
import { Sparkles, Brain, Network, Radar, BarChart3 } from "lucide-react";
import Link from "next/link";
import { buildMetadata, combineKeywords } from "@/seo/meta";
import { keywordGroups } from "@/seo/keyword-groups";

const aiSeoKeywords = combineKeywords(
  [
    "Generative AI SEO",
    "AI search optimization",
    "Generative engine optimization",
    "AI SEO",
    "Search engine optimization (SEO) services",
    "Technical SEO & on-page optimization",
  ],
  keywordGroups.expansion
);

export const metadata = buildMetadata({
  title: "AI & Generative SEO | RTR Technologies",
  description:
    "Optimize for Google SGE, ChatGPT, and Perplexity with generative engine optimization, entity management, and experimentation programs.",
  path: "/services/ai-seo",
  keywords: aiSeoKeywords,
  image: {
    url: "/api/og/ai-seo",
  },
});

export const revalidate = 60;

const pillars = [
  {
    title: "SGE readiness audits",
    description:
      "Evaluate how your brand appears in Google’s Search Generative Experience and prioritize fixes that improve inclusion and prominence.",
    icon: Radar,
  },
  {
    title: "Entity optimization",
    description:
      "Structure content around entities, relationships, and topical maps so AI assistants understand—and recommend—your expertise.",
    icon: Network,
  },
  {
    title: "Generative content lab",
    description:
      "Design content that answers complex queries across AI chat experiences using hybrid human + AI workflows with rigorous QA.",
    icon: Brain,
  },
  {
    title: "Measurement & monitoring",
    description:
      "Deploy dashboards that track impressions across AI results, adjust prompts, and iterate based on voice of customer signals.",
    icon: BarChart3,
  },
];

const programs = [
  {
    name: "AI Visibility Audit",
    summary:
      "A 360° review of your current footprint in SGE, Bing Copilot, ChatGPT browsing, and Perplexity, complete with prioritized roadmap.",
    deliverables: [
      "AI SERP capture and assessment across priority keywords",
      "Entity and schema gap analysis",
      "Content and UX recommendations for generative contexts",
      "Stakeholder workshop with roadmap hand-off",
    ],
  },
  {
    name: "Generative Content Accelerator",
    summary:
      "Monthly lab focused on designing, testing, and iterating content assets tuned for conversational and multimodal AI platforms.",
    deliverables: [
      "Topic cluster and prompt library development",
      "Content briefs blending expert voice & AI augmentation",
      "Evaluation rubrics covering accuracy and helpfulness",
      "Performance dashboards for AI impressions and citations",
    ],
  },
  {
    name: "Enterprise Enablement",
    summary:
      "Integrate AI search optimization into marketing operations with governance, enablement, and experimentation frameworks.",
    deliverables: [
      "Playbooks for marketing, product, and support teams",
      "Compliance and brand guardrails for AI content",
      "Cross-functional workshop series and training",
      "Quarterly innovation sprints aligned to business objectives",
    ],
  },
];

const faqs = [
  {
    question: "Is AI SEO replacing traditional SEO?",
    answer:
      "No—technical, on-page, and authority efforts remain essential. AI SEO layers on entity optimization, structured data, and experimentation so your existing strengths translate into AI-generated answers.",
  },
  {
    question: "How do you measure success in AI search?",
    answer:
      "We track coverage in SGE and other AI surfaces, monitor brand mentions, and tie those impressions back to site traffic, conversions, and assisted revenue using custom dashboards.",
  },
  {
    question: "Can you work with regulated industries?",
    answer:
      "Yes. Our process includes legal and compliance review, content governance, and documentation so teams in legal, medical, or financial sectors can leverage AI safely.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI & Generative SEO",
  serviceType: "Generative Engine Optimization",
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
    "Generative engine optimization services aligning content, entities, and analytics to improve visibility within AI-driven search results.",
};

export default function AISEOPage() {
  return (
    <>
      <JsonLd id="ld-ai-seo-service" data={schema} />
      <JsonLd
        id="ld-ai-seo-breadcrumbs"
        data={breadcrumbsSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "AI & Generative SEO", url: "/services/ai-seo" },
        ])}
      />
      <Header />
      <PageBanner
        title="AI & Generative SEO Programs"
        description="Equip your team to win in AI-driven search. Our generative engine optimization programs ensure your expertise surfaces inside Google SGE, Bing Copilot, ChatGPT browsing, and Perplexity responses."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "AI & Generative SEO" },
        ]}
      />

      <section className="bg-gradient-to-b from-white via-white to-yellow-50/30 py-16 dark:from-gray-950 dark:via-gray-950 dark:to-yellow-900/10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                Future-proof your visibility across AI assistants
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Generative search is reshaping how prospects discover and evaluate solutions. We combine structured data, topical depth, and experimentation workflows so you stay recommended—even as algorithms evolve.
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
                What’s included
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-yellow-100">
                AI search readiness toolkit
              </h3>
              <ul className="mt-6 space-y-4 text-gray-700 dark:text-gray-200">
                <li>• Snapshot dashboards for AI results across key themes</li>
                <li>• Prompt libraries for research, ideation, and QA</li>
                <li>• Entity and schema templates for content teams</li>
                <li>• Governance guardrails covering attribution and accuracy</li>
              </ul>
              <Button
                asChild
                variant="primary"
                size="lg"
                className="mt-8 w-full"
                withRipple
              >
                <Link href="/contact">Request an AI SEO audit</Link>
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
              Programs designed for experimentation and scale
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Choose the partnership model that unlocks velocity for your team—from a readiness audit to fully embedded enablement across markets.
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
                  <Link href="/contact">Talk to our strategists</Link>
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
