"use client";

import Link from "next/link";
import { SITE } from "@/content/site";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";
import CalendlyButton from "@/components/CalendlyButton";

type SiteSettings = {
  ctas?: {
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
};

const nav = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Header({ site }: { site?: SiteSettings }) {
  const primary = {
    label: site?.ctas?.primaryLabel ?? SITE.ctas.primary.label,
    href: site?.ctas?.primaryHref ?? SITE.ctas.primary.href,
  };
  const secondary = {
    label: site?.ctas?.secondaryLabel ?? SITE.ctas.secondary.label,
    href: site?.ctas?.secondaryHref ?? SITE.ctas.secondary.href,
  };
  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur border-b dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
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
          {/* {SITE.name} */}
        </Link>
        <nav className="hidden md:flex gap-6">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:opacity-80">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button asChild variant="ghost" size="sm" className="hidden sm:flex">
            <Link href={secondary.href}>{secondary.label || "Request a Quote"}</Link>
          </Button>
          <CalendlyButton label={SITE.ctas.primary.label} variant="primary" size="sm" withRipple />
        </div>
      </div>
    </header>
  );
}
