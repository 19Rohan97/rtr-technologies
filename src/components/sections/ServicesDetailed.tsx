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
      "We create bespoke WordPress websites that are not just visually stunning but also technically robust. Our development process focuses on scalability, security, and performance optimization.",
    features: [
      "Custom theme development from scratch",
      "Plugin development and customization",
      "Performance optimization and caching",
      "Security hardening and maintenance",
      "Mobile-responsive design",
      "SEO-friendly code structure",
    ],
    illustration: "🎨",
    price: "Starting from $2,500",
    cta: { label: "Get a Quote", href: "/contact" },
  },
  {
    title: "SEO-Driven Web Design",
    description:
      "Our design approach prioritizes both aesthetics and search engine visibility. Every design decision is made with user experience and SEO performance in mind.",
    features: [
      "SEO-optimized site architecture",
      "Core Web Vitals optimization",
      "Schema markup implementation",
      "Local SEO setup",
      "Content strategy development",
      "Conversion rate optimization",
    ],
    illustration: "🚀",
    price: "Starting from $1,800",
    cta: { label: "Learn More", href: "/contact" },
  },
  {
    title: "Google Analytics Setup & Tracking",
    description:
      "Comprehensive analytics implementation that provides actionable insights into your website performance, user behavior, and business growth opportunities.",
    features: [
      "GA4 setup and configuration",
      "Custom event tracking",
      "E-commerce tracking setup",
      "Goal and conversion tracking",
      "Custom dashboard creation",
      "Monthly performance reports",
    ],
    illustration: "📊",
    price: "Starting from $800",
    cta: { label: "Book Consultation", href: "/contact" },
  },
  {
    title: "Ongoing Support & Growth Plans",
    description:
      "Continuous website maintenance, security updates, and growth-focused optimizations to ensure your website evolves with your business needs.",
    features: [
      "Regular security updates",
      "Performance monitoring",
      "Content updates and additions",
      "SEO improvements and audits",
      "Technical support and troubleshooting",
      "Growth strategy consultations",
    ],
    illustration: "🛡️",
    price: "Starting from $300/month",
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
          {detailedServices.map((service, index) => (
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
