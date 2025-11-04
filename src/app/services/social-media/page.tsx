import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/page-banner";
import JsonLd from "@/components/JsonLd";
import { breadcrumbsSchema } from "@/seo/breadcrumbs";
import { absUrl } from "@/seo/utils";
import { Button } from "@/components/ui/button";
import { Share2, Users, MessageCircle, Sparkles, BarChart3 } from "lucide-react";
import Link from "next/link";
import { buildMetadata, combineKeywords } from "@/seo/meta";
import { keywordGroups } from "@/seo/keyword-groups";

const socialKeywords = combineKeywords(
  [
    "Social media management",
    "Content marketing services",
    "Digital marketing agency",
    "Lead generation & sales funnels",
    "Marketing automation",
  ],
  keywordGroups.expansion
);

export const metadata = buildMetadata({
  title: "Social Media Management | RTR Technologies",
  description:
    "Grow community, launch campaigns, and turn followers into customers with strategic social media programs.",
  path: "/services/social-media",
  keywords: socialKeywords,
});

export const revalidate = 60;

const pillars = [
  {
    title: "Channel-specific strategy",
    description:
      "Build differentiated approaches for LinkedIn, Instagram, TikTok, and YouTube based on audience behavior.",
    icon: Share2,
  },
  {
    title: "Community management",
    description:
      "Engage, respond, and nurture conversations with systems that reflect your brand voice.",
    icon: MessageCircle,
  },
  {
    title: "Campaign amplification",
    description:
      "Coordinate launches, product updates, and events with paid boosts, influencers, and partners.",
    icon: Sparkles,
  },
  {
    title: "Performance analytics",
    description:
      "Track reach, engagement, and attributed conversions with dashboards your leadership team trusts.",
    icon: BarChart3,
  },
];

const programs = [
  {
    name: "Social Launch Kit",
    summary:
      "Ideal for product drops or rebrands—develop messaging, creative, and cross-channel launch plans in 30 days.",
    deliverables: [
      "Channel strategy and positioning refresh",
      "Content calendar and asset checklist",
      "Influencer/partner outreach plan",
      "Launch dashboard and KPI alignment",
    ],
  },
  {
    name: "Managed Social Retainer",
    summary:
      "Full-service content creation, scheduling, community engagement, and reporting across prioritized channels.",
    deliverables: [
      "Weekly content production and scheduling",
      "Community monitoring and response management",
      "Paid social coordination and testing",
      "Monthly reporting and insights",
    ],
  },
  {
    name: "Exec Thought Leadership",
    summary:
      "Ghostwritten posts, video briefs, and speaking amplification that elevate your founder or leadership brand.",
    deliverables: [
      "Interview-driven content creation",
      "Video and podcast briefing kits",
      "LinkedIn and Twitter publishing cadence",
      "Audience growth experiments and networking support",
    ],
  },
];

const faqs = [
  {
    question: "Which social media platforms do you manage?",
    answer:
      "We support LinkedIn, Instagram, TikTok, YouTube, Facebook, and X. We select channels based on where your buyers make decisions.",
  },
  {
    question: "Can you collaborate with our internal marketing team?",
    answer:
      "Yes. We integrate with internal teams for approvals, creative production, and paid budgets. Shared dashboards keep everyone aligned.",
  },
  {
    question: "Do you offer social media advertising?",
    answer:
      "We manage paid social campaigns or collaborate with your paid media leads to ensure creative, audiences, and reporting work together.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media Management",
  serviceType: "Social Media Marketing",
  provider: {
    "@type": "Organization",
    name: "RTR Technologies",
    url: absUrl("/"),
  },
  description:
    "Social media strategy, content production, community management, and analytics for growth-focused brands.",
};

export default function SocialMediaPage() {
  return (
    <>
      <JsonLd id="ld-social-service" data={schema} />
      <JsonLd
        id="ld-social-breadcrumbs"
        data={breadcrumbsSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Social Media", url: "/services/social-media" },
        ])}
      />
      <Header />
      <PageBanner
        title="Social Media Acceleration"
        description="Turn scrolls into conversations and conversions. We build social media programs that blend storytelling, community management, and performance insights."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Social Media" },
        ]}
      />

      <section className="bg-gradient-to-b from-white via-white to-yellow-50/30 py-16 dark:from-gray-950 dark:via-gray-950 dark:to-yellow-900/10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                Social presence with purpose and measurable outcomes
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We architect content pillars, cadence, and creative that reinforce your positioning while driving meaningful engagements. Expect messaging that reflects your brand—not templated trends.
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
                <Users className="h-4 w-4" aria-hidden="true" />
                Partnership approach
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-yellow-100">
                Embedded with your marketing team
              </h3>
              <ul className="mt-6 space-y-4 text-gray-700 dark:text-gray-200">
                <li>• Quarterly content planning workshops</li>
                <li>• Collaborative approval flows in your tools</li>
                <li>• Rapid-response playbooks for social listening</li>
                <li>• Reporting tailored to leadership and sales enablement</li>
              </ul>
              <Button
                asChild
                variant="primary"
                size="lg"
                className="mt-8 w-full"
                withRipple
              >
                <Link href="/contact">Start a social momentum call</Link>
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
              Flexible programs for launches and long-term growth
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Select support for specific campaigns or embed us as an extension of your brand team.
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
                  <Link href="/contact">Book a discovery call</Link>
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
