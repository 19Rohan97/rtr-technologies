"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SITE } from "@/content/site";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CalendlyButton from "@/components/CalendlyButton";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  ExternalLink,
  Zap,
  Code,
  TrendingUp,
  Shield,
} from "lucide-react";

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

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

const features = [
  { icon: Code, text: "Custom Development" },
  { icon: TrendingUp, text: "Growth Focused" },
  { icon: Shield, text: "Secure & Reliable" },
  { icon: Zap, text: "Lightning Fast" },
];

type SiteSettings = {
  email?: string;
  phone?: string;
  name?: string;
  social?: {
    linkedin?: string;
    instagram?: string;
    behance?: string;
    dribbble?: string;
  };
};

export default function Footer({ site }: { site?: SiteSettings }) {
  const social = site?.social ?? SITE.social;
  const siteName = site?.name ?? SITE.name;
  const socialLinks = [
    { href: social.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: social.instagram, label: "Instagram", Icon: Instagram },
    { href: social.behance, label: "Behance", Icon: ExternalLink },
    { href: social.dribbble, label: "Dribbble", Icon: ExternalLink },
  ].filter((item) => Boolean(item.href));
  return (
    <footer className="relative mt-[160px]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-yellow-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-yellow-900/10" />
      <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-200/20 dark:bg-yellow-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-3xl" />

      {/* CTA Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative mx-auto max-w-7xl px-4 pt-4 pb-8"
      >
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden text-center -mt-[180px] mb-16"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10" />
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent" />

          {/* Floating Elements */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400/40 rounded-full animate-pulse" />
          <div
            className="absolute top-8 right-8 w-1 h-1 bg-yellow-400/60 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-yellow-400/50 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          />

          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 text-yellow-300 rounded-full text-sm font-medium mb-6"
            >
              <Zap className="w-4 h-4" />
              Ready to Get Started?
            </motion.div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Let&apos;s Build Your
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Growth Engine
              </span>
            </h3>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to start your project? Get in touch and let&apos;s make it
              happen. We&apos;re here to turn your vision into a powerful
              digital reality that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyButton
                label="Start Your Project"
                variant="primary"
                size="xl"
                withRipple
                className="text-lg px-10 py-4"
              />
              <Button
                asChild
                variant="outline"
                size="xl"
                className="text-lg px-10 py-4 border-gray-400 text-gray-300 hover:bg-gray-700"
                withRipple
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/" className="font-semibold">
                <Image
                  src="/rtr-logo.png"
                  alt="RTR Technologies - WordPress Development"
                  width={120}
                  height={80}
                  className="object-cover"
                  priority
                  sizes="(max-width: 100px)"
                />
              </Link>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-w-md">
              Your digital growth partner specializing in WordPress development,
              SEO optimization, and analytics integration. We build websites
              that drive real business results.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div key={feature.text} className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-3 h-3 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <a
                    href={`mailto:${site?.email ?? SITE.email}`}
                    className="text-gray-900 dark:text-white hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
                  >
                    {site?.email ?? SITE.email}
                  </a>
                </div>
              </div>

              {site?.phone && (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <a
                      href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                      className="text-gray-900 dark:text-white hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
                    >
                      {site.phone}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Location
                  </p>
                  <p className="text-gray-900 dark:text-white">
                    Remote Worldwide
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 border-t border-gray-200/50 dark:border-gray-700/50"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} {siteName}. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Follow us:
            </span>
            {socialLinks.length > 0 && (
              <div className="flex gap-3">
                {socialLinks.map(({ href, label, Icon }) => (
                  <Button
                    key={label}
                    asChild
                    variant="ghost"
                    size="icon-sm"
                    className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:border-yellow-200 dark:hover:border-yellow-800"
                  >
                    <Link href={href!} aria-label={label}>
                      <Icon className="w-4 h-4" />
                    </Link>
                  </Button>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
