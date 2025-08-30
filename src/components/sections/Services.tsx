"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Zap,
  Code,
  Search,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import { services as fallbackServices } from "@/content/services";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Icon mapping
const iconMap = {
  Code,
  Search,
  BarChart3,
  TrendingUp,
};

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

type ServiceItem = {
  _id?: string;
  title: string;
  desc: string;
  icon: string;
  cta?: { label: string; href: string };
  ctaLabel?: string;
  ctaHref?: string;
};

export default function Services({ services }: { services?: ServiceItem[] }) {
  const data: ServiceItem[] = services?.length
    ? services.map((s) => ({
        ...s,
        cta: { label: s.ctaLabel ?? "Request a Quote", href: s.ctaHref ?? "/contact" },
      }))
    : (fallbackServices as ServiceItem[]);
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium mb-6"
          >
            <Briefcase className="w-4 h-4" />
            Our Services
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Expert Solutions
            </span>
            <br />
            For Your Digital Growth
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            From custom WordPress development to SEO optimization and analytics
            setup, we provide comprehensive digital solutions designed to
            accelerate your business growth and maximize your online potential.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {data.map((s, index) => {
            const IconComponent = iconMap[s.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={s.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-black" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {s.desc}
                  </p>
                </div>

                {/* Button aligned to bottom */}
                <div className="mt-auto">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full"
                    withRipple
                  >
                    <Link href={(s as any).cta?.href || s.ctaHref || "/contact"}>
                      {(s as any).cta?.label || s.ctaLabel || "Request a Quote"}
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
