"use client";

import { motion } from "framer-motion";
import { FolderOpen } from "lucide-react";
import { projects as fallbackProjects } from "@/content/projects";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

type ProjectItem = {
  _id?: string;
  title: string;
  blurb?: string;
  tags?: string[];
  comingSoon?: boolean;
  image?: string | null;
  linkUrl?: string | null;
};

export default function Portfolio({ projects }: { projects?: ProjectItem[] }) {
  const data: ProjectItem[] = projects?.length ? projects : (fallbackProjects as ProjectItem[]);
  return (
    <section id="portfolio" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-transparent to-blue-50/30 dark:from-yellow-900/10 dark:via-transparent dark:to-blue-900/10" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200/20 dark:bg-yellow-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 relative">
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
            <FolderOpen className="w-4 h-4" />
            Portfolio Highlights
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Our Work
            </span>
            <br />
            Speaks For Itself
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Here&apos;s a glimpse of projects we&apos;ve crafted with passion
            and precision. Each project represents our commitment to delivering
            exceptional digital experiences that drive real business results.
            More case studies launching soon!
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {data.map((p, index) => (
            <motion.div
              key={p.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-yellow-100 via-gray-100 to-yellow-50 dark:from-yellow-900/20 dark:via-gray-800 dark:to-yellow-900/10">
                {p.image && (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    unoptimized
                  />
                )}
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                {p.title}
              </h3>
              {p.blurb && (
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {p.blurb}
                </p>
              )}

              {p.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {p.comingSoon && (
                <div className="inline-flex items-center rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 py-1 text-xs font-medium">
                  Coming Soon
                </div>
              )}

              {p.linkUrl && (
                <div className="mt-4">
                  <Button asChild variant="outline" size="sm" withRipple>
                    <Link href={p.linkUrl} target="_blank" rel="noopener noreferrer">
                      Visit
                    </Link>
                  </Button>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
