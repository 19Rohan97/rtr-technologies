"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const detailedServices = [
  {
    title: "Custom WordPress Development",
    description:
      "Bespoke WordPress ecosystems engineered for performance, security, and growth. We translate complex requirements into modular builds that scale with your roadmap.",
    features: [
      "Custom theme architecture and headless builds",
      "Advanced plugin development and integrations",
      "Speed optimization and Core Web Vitals compliance",
      "Hardened security and uptime monitoring",
      "UX research and conversion-minded design",
      "Migration support from legacy platforms",
    ],
    illustration: "🎨",
    price: "Starting from $2,500",
    cta: { label: "Get a Quote", href: "/contact" },
  },
  {
    title: "AI & Generative SEO",
    description:
      "Stay visible inside Google SGE, ChatGPT answers, and Perplexity snapshots with content engineered for AI surfaces. We combine schema, topical depth, and experimentation to future-proof rankings.",
    features: [
      "Generative engine optimization (GEO) roadmaps",
      "Entity mapping and topical authority clusters",
      "Structured data and content enrichment",
      "AI results monitoring and reporting",
      "Content refresh plans for SGE snippets",
      "Training for in-house teams on AI prompts",
    ],
    illustration: "✨",
    price: "Custom programs",
    cta: { label: "See AI SEO Playbook", href: "/services/ai-seo" },
  },
  {
    title: "SEO-Driven Web Design",
    description:
      "Design systems that balance aesthetics with sustainable organic growth. Every component ships with strategic content hierarchy, accessibility, and measurement baked in.",
    features: [
      "SEO architecture and internal linking plans",
      "Wireframes aligned to keyword intent",
      "Component libraries for rapid growth",
      "On-page optimization at launch",
      "Conversion-focused copywriting",
      "Launch checklists and QA",
    ],
    illustration: "🚀",
    price: "Starting from $1,800",
    cta: { label: "Explore SEO Services", href: "/services/seo" },
  },
  {
    title: "Paid Media & PPC Management",
    description:
      "High-intent campaigns across Google Ads and paid social that accelerate pipeline while SEO compounds. We obsess over CPC efficiency and real revenue metrics.",
    features: [
      "Keyword research and audience planning",
      "Landing page design and testing",
      "Full-funnel conversion tracking",
      "Bid strategy and budget optimization",
      "Creative and copy experimentation",
      "Weekly reporting with actionable next steps",
    ],
    illustration: "💡",
    price: "Budgets from $1,500+/month",
    cta: { label: "View PPC Programs", href: "/services/ppc" },
  },
  {
    title: "Content Marketing Studio",
    description:
      "Editorial engines that earn rankings, trust, and nurture sequences. We plan, produce, and repurpose across blogs, guides, email, and video.",
    features: [
      "Editorial calendars tied to buyer stages",
      "Thought leadership and ghostwriting",
      "SEO briefs and optimization frameworks",
      "Long-form assets and gated resources",
      "Content repurposing across channels",
      "Enablement for sales and customer success",
    ],
    illustration: "📝",
    price: "Retainers from $2,000/month",
    cta: { label: "Plan Your Content", href: "/services/content-marketing" },
  },
  {
    title: "Social Media Acceleration",
    description:
      "Community-first social strategies that amplify launches and generate demand. We blend storytelling with data to keep engagement climbing.",
    features: [
      "Channel strategy and playbooks",
      "Content pillars and asset creation",
      "Paid amplification and retargeting",
      "Influencer and partner activations",
      "Social listening and sentiment analysis",
      "Monthly performance retrospectives",
    ],
    illustration: "📣",
    price: "Custom monthly engagements",
    cta: { label: "Scale Social Reach", href: "/services/social-media" },
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "Marry analytics with testing to unlock revenue from existing traffic. CRO sprints prioritize fast wins without sacrificing long-term learnings.",
    features: [
      "Quantitative and qualitative research",
      "Journey and funnel diagnostics",
      "Experiment roadmaps and execution",
      "Heatmaps, session recordings, polling",
      "Rigorous experiment analysis",
      "Knowledge base for future iterations",
    ],
    illustration: "🎯",
    price: "Project or retainer-based",
    cta: { label: "Optimize Funnels", href: "/services/conversion-rate-optimization" },
  },
  {
    title: "Google Analytics Setup & Tracking",
    description:
      "Actionable analytics frameworks built on GA4, Looker, and marketing automation. We connect data points so you can iterate with confidence.",
    features: [
      "GA4 property setup and audit",
      "Conversion and event tracking plans",
      "Data layer and tag implementation",
      "Attribution modeling and reporting",
      "Custom dashboards and alerts",
      "Team training and documentation",
    ],
    illustration: "📊",
    price: "Projects from $800",
    cta: { label: "Book Consultation", href: "/contact" },
  },
  {
    title: "Ongoing Support & Growth Plans",
    description:
      "Embedded partnership ensuring your WordPress stack and marketing engine evolve every sprint. We become your proactive digital growth team.",
    features: [
      "Monthly technical maintenance",
      "Growth experiment backlog",
      "SEO and content performance reviews",
      "Security monitoring and remediation",
      "Dedicated success manager",
      "Quarterly roadmap workshops",
    ],
    illustration: "🛡️",
    price: "Retainers from $300/month",
    cta: { label: "View Plans", href: "/contact" },
  },
];

export default function ServicesDetailed() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2"
        >
          {detailedServices.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    What&apos;s Included:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  variant="primary"
                  size="lg"
                  className="w-full group-hover:scale-105 transition-transform duration-300"
                  withRipple
                >
                  <Link
                    href={service.cta.href}
                    className="flex items-center justify-center gap-2"
                  >
                    {service.cta.label}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
