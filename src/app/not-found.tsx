"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Compass, Home, LifeBuoy, Sparkles } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/seo/meta";

export const metadata = buildMetadata({
  title: "Page Not Found | RTR Technologies",
  description:
    "The page you’re looking for doesn’t exist. Explore RTR Technologies’ services, portfolio, or contact our team.",
  path: "/404",
  image: {
    url: "/api/og/services",
  },
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />

      <main className="relative flex-1 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-yellow-400/40 via-yellow-500/30 to-yellow-300/40 blur-[120px]" />
          <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-gradient-to-tr from-gray-900/60 via-black/40 to-gray-700/20 blur-[100px]" />
          <div className="absolute top-1/3 left-4 h-40 w-40 rounded-full bg-gradient-to-br from-yellow-500/20 to-transparent blur-3xl" />
        </div>

        <section className="relative mx-auto flex max-w-5xl flex-1 flex-col items-center px-4 py-24 text-center md:py-32">
          <motion.span
            aria-hidden="true"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Lost in the flow
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl"
          >
            404 — Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300"
          >
            The page you were looking for doesn&apos;t exist or may have been
            moved. Let&apos;s get you back on track with the sections that
            matter most to your growth journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 flex flex-col gap-4 sm:flex-row"
          >
            <Button asChild variant="primary" size="lg" withRipple>
              <Link href="/">
                <Home className="h-5 w-5" />
                Back to homepage
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-yellow-500/50 text-gray-900 transition hover:bg-yellow-500/10 hover:text-gray-900 dark:border-yellow-400/40 dark:text-gray-100 dark:hover:bg-yellow-400/10"
              withRipple
            >
              <Link href="/contact">
                <LifeBuoy className="h-5 w-5" />
                Talk to our team
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-20 grid w-full gap-6 sm:grid-cols-3"
          >
            <Link
              href="/services"
              className="group relative overflow-hidden rounded-3xl border border-gray-200/70 bg-white/80 p-6 text-left shadow-lg backdrop-blur transition hover:-translate-y-2 hover:shadow-xl dark:border-white/10 dark:bg-gray-900/80"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 via-transparent to-yellow-500/20 opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex flex-col gap-4">
                <div className="inline-flex size-12 items-center justify-center rounded-full bg-yellow-500/15 text-yellow-500">
                  <Compass className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Explore our services
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Strategy-first WordPress solutions tailored for growth-driven
                  teams.
                </p>
                <span className="text-sm font-medium text-yellow-600 transition group-hover:text-yellow-500 dark:text-yellow-400">
                  Discover how we build
                </span>
              </div>
            </Link>

            <Link
              href="/portfolio"
              className="group relative overflow-hidden rounded-3xl border border-gray-200/70 bg-white/80 p-6 text-left shadow-lg backdrop-blur transition hover:-translate-y-2 hover:shadow-xl dark:border-white/10 dark:bg-gray-900/80"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 via-transparent to-yellow-500/20 opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex flex-col gap-4">
                <div className="inline-flex size-12 items-center justify-center rounded-full bg-yellow-500/15 text-yellow-500">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  See recent launches
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Browse case studies and the results we&apos;ve driven for
                  partners.
                </p>
                <span className="text-sm font-medium text-yellow-600 transition group-hover:text-yellow-500 dark:text-yellow-400">
                  View our portfolio
                </span>
              </div>
            </Link>

            <Link
              href="/contact"
              className="group relative overflow-hidden rounded-3xl border border-gray-200/70 bg-white/80 p-6 text-left shadow-lg backdrop-blur transition hover:-translate-y-2 hover:shadow-xl dark:border-white/10 dark:bg-gray-900/80"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 via-transparent to-yellow-500/20 opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex flex-col gap-4">
                <div className="inline-flex size-12 items-center justify-center rounded-full bg-yellow-500/15 text-yellow-500">
                  <LifeBuoy className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Book a discovery call
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Connect with our strategists and map the next sprint together.
                </p>
                <span className="text-sm font-medium text-yellow-600 transition group-hover:text-yellow-500 dark:text-yellow-400">
                  Schedule time
                </span>
              </div>
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
