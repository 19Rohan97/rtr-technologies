"use client";

import { motion } from "framer-motion";
import { Zap, Target, TrendingUp, BarChart3 } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "AI & Technical SEO",
    description:
      "Structured data, Core Web Vitals, and SGE-ready content that keep you visible in generative and traditional search.",
  },
  {
    icon: Target,
    title: "Custom WordPress Engineering",
    description:
      "Headless architecture, reusable design systems, and performance tuning tailored to your funnel.",
  },
  {
    icon: TrendingUp,
    title: "Full-Funnel Growth Programs",
    description:
      "Integrated SEO, PPC management, and conversion rate optimization aligned to revenue targets.",
  },
  {
    icon: BarChart3,
    title: "Measurement That Matters",
    description:
      "GA4 dashboards, event tracking, and marketing automation that translate traffic into insights and action.",
  },
];

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

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-transparent to-blue-50/30 dark:from-yellow-900/10 dark:via-transparent dark:to-blue-900/10" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200/20 dark:bg-yellow-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 relative">
        {/* 2-Column Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Main Content */}
          <motion.div
            variants={containerVariants}
            className="lg:order-2 lg:pl-8"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium mb-6"
            >
              <Zap className="w-4 h-4" />
              About RTR Technologies
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              We Don&apos;t Just Build Websites
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                We Build Growth Engines
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
            >
              RTR Technologies is a WordPress development company built for
              growth-minded teams. We blend custom WordPress engineering with
              technical SEO, generative AI visibility, paid media strategy, and
              content operations so your site attracts qualified traffic and
              turns it into pipeline.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Every engagement includes CRO experimentation, GA4 analytics
              instrumentation, and proactive WordPress maintenance. The result:
              a scalable digital ecosystem that keeps performance, storytelling,
              and lead generation in lockstep as your goals evolve.
            </motion.p>
          </motion.div>

          {/* Values Section */}
          <motion.div
            variants={containerVariants}
            className="space-y-6 lg:order-1 lg:pr-8"
          >
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
