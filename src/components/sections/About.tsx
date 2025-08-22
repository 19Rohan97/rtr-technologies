"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Users,
  Zap,
  Target,
  TrendingUp,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const stats = [
  { number: "50+", label: "Projects Delivered", icon: CheckCircle },
  { number: "25+", label: "Happy Clients", icon: Users },
  { number: "3+", label: "Years Experience", icon: Award },
  { number: "100%", label: "Growth Focused", icon: TrendingUp },
];

const values = [
  {
    icon: Zap,
    title: "Performance First",
    description: "Lightning-fast websites that convert visitors into customers",
  },
  {
    icon: Target,
    title: "SEO Driven",
    description: "Every line of code optimized for search engine visibility",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "We don't just build websites, we build growth engines",
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

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
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
          {/* Left Column - Values Section */}
          <motion.div
            variants={containerVariants}
            className="space-y-6 lg:pr-8"
          >
            {values.map((value, index) => {
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

          {/* Right Column - Main Content */}
          <motion.div variants={containerVariants}>
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
              RTR Technologies is your digital growth partner, specializing in
              WordPress development, SEO optimization, and analytics
              integration. We combine technical expertise with strategic
              thinking to create websites that don&apos;t just look great—they
              drive real business results.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Our approach goes beyond traditional web development. We focus on
              creating digital experiences that not only represent your brand
              beautifully but also serve as powerful tools for business growth,
              customer engagement, and long-term success in the digital
              landscape.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
