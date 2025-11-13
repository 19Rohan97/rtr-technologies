# Changelog

## 2025-11-13

- Swapped header/hero primary CTAs to respect Sanity-configured labels + URLs instead of always opening Calendly, ensuring marketing teams control both copy and destination (`src/components/layout/Header.tsx`, `src/components/sections/Hero.tsx`).
- Adjusted Sanity queries to pull the most recently updated `siteSettings` doc so new edits override stale entries, and added social-link guarding so empty fields no longer render placeholder icons (`src/sanity/queries.ts`, `src/components/layout/Footer.tsx`).
- Created `SANITY.md` with Studio setup, schema walkthroughs, and editorial workflows to onboard content teams.
- Refined dynamic blog route typing to align with Next.js 15’s promised `params`, resolving build-time type errors (`src/app/blog/[slug]/page.tsx`).
- Updated SEO metadata helper to follow the latest Open Graph and Twitter typings, removing deprecated fields and ensuring defaults merge cleanly (`src/seo/meta.ts`).
- Cleaned unused variables, icons, and manual font links flagged by ESLint across layout and marketing sections to keep builds warning-free (files under `src/app/layout.tsx`, `src/components/layout`, and `src/components/sections`).
- Reworked the 404 experience so the App Router page remains a server component while the animated UI lives in a client component, unblocking prerendering (`src/app/not-found.tsx`, `src/components/NotFoundContent.tsx`).
- Integrated Sanity CMS with full schema modelling for site settings, services, FAQs, testimonials, projects, and blog posts (`sanity/schemaTypes/*`, `sanity.config.ts`).
- Added Sanity client helpers and GROQ queries with graceful fallbacks, replacing hardcoded content across the homepage, services, portfolio, blog, and contact flows (files under `src/sanity`, `src/app/*`, and `src/components/sections/*`).
- Updated SEO utilities and JSON-LD builders to accept dynamic content sourced from Sanity (`src/seo/contact.ts`, `src/seo/portfolio.ts`).
- Expanded environment template and dependency set with Sanity tooling, plus new build instructions (`package.json`, `.env.example`).
- Documented Sanity deployment steps and confirmed Studio hostname provisioning (see Sanity section above) so the CMS is production-ready.
