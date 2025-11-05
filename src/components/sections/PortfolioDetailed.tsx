"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, TrendingUp } from "lucide-react";

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

const detailedProjects = [
  {
    title: "E-commerce Starter Platform",
    description:
      "A comprehensive e-commerce solution built with WordPress and WooCommerce. Features advanced product filtering, custom checkout flow, and integrated analytics tracking for maximum conversion optimization.",
    image: "/hero-image.webp",
    category: "E-commerce",
    duration: "8 weeks",
    teamSize: "3 developers",
    results: [
      "150% increase in conversion rate",
      "40% faster page load times",
      "SEO ranking improved to top 3",
      "Mobile traffic increased by 200%",
    ],
    technologies: [
      "WordPress",
      "WooCommerce",
      "Custom PHP",
      "JavaScript",
      "MySQL",
    ],
    features: [
      "Custom product catalog design",
      "Advanced filtering and search",
      "Secure payment gateway integration",
      "Inventory management system",
      "Customer account portal",
      "Analytics and reporting dashboard",
    ],
    status: "Coming Soon",
    cta: { label: "View Case Study", href: "/contact" },
  },
  {
    title: "Service Business Website",
    description:
      "A professional service business website with focus on lead generation and local SEO. Includes appointment booking system, service area mapping, and comprehensive analytics tracking.",
    image: "/hero-image.webp",
    category: "Service Business",
    duration: "6 weeks",
    teamSize: "2 developers",
    results: [
      "300% increase in online inquiries",
      "Top 5 local search rankings",
      "50% reduction in bounce rate",
      "25% increase in phone calls",
    ],
    technologies: [
      "WordPress",
      "Custom Theme",
      "Google Maps API",
      "GA4",
      "Schema.org",
    ],
    features: [
      "Online appointment booking",
      "Service area mapping",
      "Customer testimonials system",
      "Blog and content management",
      "Contact form optimization",
      "Local SEO implementation",
    ],
    status: "Coming Soon",
    cta: { label: "View Case Study", href: "/contact" },
  },
  {
    title: "Corporate Portfolio Website",
    description:
      "A sophisticated corporate website showcasing company portfolio, team members, and services. Built with performance and professional presentation in mind.",
    image: "/hero-image.webp",
    category: "Corporate",
    duration: "10 weeks",
    teamSize: "4 developers",
    results: [
      "Professional brand presence established",
      "90+ PageSpeed Insights score",
      "Increased client inquiries by 180%",
      "Enhanced credibility and trust",
    ],
    technologies: [
      "WordPress",
      "Custom Design",
      "Advanced ACF",
      "GSAP",
      "Optimization",
    ],
    features: [
      "Interactive portfolio showcase",
      "Team member profiles",
      "Case study presentations",
      "Client testimonials carousel",
      "Multi-language support",
      "Advanced contact forms",
    ],
    status: "Coming Soon",
    cta: { label: "View Case Study", href: "/contact" },
  },
];

export default function PortfolioDetailed() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-12 md:grid-cols-2"
        >
          {detailedProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Header */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200">
                    {project.category}
                  </span>
                  {project.status && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-yellow-500 text-black">
                      {project.status}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-yellow-500" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Duration
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {project.duration}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-yellow-500" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Team
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {project.teamSize}
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Results */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-yellow-500" />
                  Key Results:
                </h4>
                <ul className="space-y-2">
                  {project.results.slice(0, 3).map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {result}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full group-hover:scale-105 transition-transform duration-300"
                withRipple
              >
                <Link
                  href={project.cta.href}
                  className="flex items-center justify-center gap-2"
                >
                  {project.cta.label}
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
