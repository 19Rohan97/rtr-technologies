"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/content/site";
import { Button } from "@/components/ui/button";

type SiteSettings = {
  name?: string;
  tagline?: string;
  description?: string;
  ctas?: {
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
};

export default function Hero({ site }: { site?: SiteSettings }) {
  const primary = {
    label: site?.ctas?.primaryLabel ?? SITE.ctas.primary.label,
    href: site?.ctas?.primaryHref ?? SITE.ctas.primary.href,
  };
  const secondary = {
    label: site?.ctas?.secondaryLabel ?? SITE.ctas.secondary.label,
    href: site?.ctas?.secondaryHref ?? SITE.ctas.secondary.href,
  };
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        {/* Left Column - Content */}
        <div className="flex items-center py-20 lg:py-0">
          <div className="w-full px-4 md:pl-[max(1rem,calc((100vw-80rem)/2+0rem))]">
            <div className="max-w-xl">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {site?.tagline || site?.name || SITE.tagline}
              </motion.h1>

              <motion.p
                className="mt-6 text-lg lg:text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {site?.description ?? SITE.description}
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button
                  asChild
                  variant="primary"
                  size="lg"
                  className="text-base px-8 py-3"
                  withRipple
                >
                  <Link href={primary.href}>{primary.label}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base px-8 py-3"
                  withRipple
                >
                  <Link href={secondary.href}>{secondary.label}</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <motion.div
          className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative h-64 lg:h-full w-full">
            <Image
              src="/hero-image.webp"
              alt="RTR Technologies - WordPress Development"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient overlay for better text contrast on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
