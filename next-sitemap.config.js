const siteUrl = process.env.SITE_URL || "http://localhost:3000";

const coreRoutes = [
  "/",
  "/services",
  "/portfolio",
  "/contact",
  "/blog",
  "/sitemap",
];

const serviceRoutes = [
  "/services/seo",
  "/services/ai-seo",
  "/services/ppc",
  "/services/content-marketing",
  "/services/social-media",
  "/services/conversion-rate-optimization",
];

const blogRoutes = [
  "/blog/wordpress-seo-growth-playbook",
  "/blog/ai-seo-roadmap-for-sge",
  "/blog/aligning-ppc-and-seo-for-full-funnel-growth",
];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  autoLastmod: true,
  transform: async (config, path) => {
    const priorityMap = {
      "/": 1,
      "/services": 0.9,
    };

    return {
      loc: path,
      changefreq: "weekly",
      priority: priorityMap[path] ?? 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    const customRoutes = [...coreRoutes, ...serviceRoutes, ...blogRoutes];
    const entries = [];

    for (const route of customRoutes) {
      entries.push(await config.transform(config, route));
    }

    return entries;
  },
};
