"use client";

import { Zap, TrendingUp, Code, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Custom WordPress Expertise",
    desc: "Tailored, scalable builds using best practices for performance and security.",
    icon: Code,
  },
  {
    title: "SEO-First Approach",
    desc: "Technical SEO, structured data, and speed optimizations baked in.",
    icon: BarChart3,
  },
  {
    title: "Growth-Focused",
    desc: "Data-driven decisions with GA4 tracking and measurable outcomes.",
    icon: TrendingUp,
  },
  {
    title: "Fast Delivery",
    desc: "Efficient, transparent workflow to launch on time and iterate quickly.",
    icon: Zap,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function FeatureCard({
  title,
  desc,
  Icon,
}: {
  title: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all"
    >
      <motion.div
        whileHover={{ rotate: -6, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 250, damping: 15 }}
        className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl mb-4 shadow"
      >
        <Icon className="w-6 h-6 text-black" />
      </motion.div>

      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements (match About) */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-transparent to-blue-50/30 dark:from-yellow-900/10 dark:via-transparent dark:to-blue-900/10" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200/20 dark:bg-yellow-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium mb-6">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Your Growth Partner
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We combine modern engineering with an SEO-driven mindset to build
            sites that look great and drive results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((r) => (
            <FeatureCard
              key={r.title}
              title={r.title}
              desc={r.desc}
              Icon={r.icon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
