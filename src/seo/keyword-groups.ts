/**
 * Strategic keyword clusters derived from the competitive positioning audit.
 * Reference: internal RTR Technologies competitor analysis doc (2025).
 */
export const keywordGroups = {
  foundational: [
    "WordPress development company",
    "WordPress agency",
    "Custom WordPress development",
    "SEO-driven web design",
    "Technical SEO & on-page optimization",
    "Website performance optimization",
    "Google Analytics (GA4) setup",
    "WordPress maintenance & support",
  ],
  expansion: [
    "Digital marketing agency",
    "Search engine optimization (SEO) services",
    "Generative AI SEO",
    "AI search optimization",
    "Generative engine optimization",
    "AI SEO",
    "Pay-per-click (PPC) management",
    "Google Ads management",
    "Conversion rate optimization (CRO)",
    "Content marketing services",
    "Social media management",
    "Marketing automation",
    "Lead generation & sales funnels",
    "Local SEO for Toronto businesses",
    "E-commerce WordPress development",
    "Landing page design",
  ],
  vertical: [
    "WordPress development for law firms",
    "Legal marketing websites",
    "SEO for healthcare websites",
    "Digital marketing for home-service businesses",
    "PPC for dentists",
    "PPC for medical clinics",
  ],
};

export const allKeywords = Array.from(
  new Set([
    ...keywordGroups.foundational,
    ...keywordGroups.expansion,
    ...keywordGroups.vertical,
  ])
);

