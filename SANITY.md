# RTR Technologies – Sanity Studio Guide

A companion reference for configuring and operating the Sanity CMS that powers the RTR Technologies marketing site.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PNPM (or npm)
- Sanity CLI (`pnpm dlx sanity@latest --help` to verify)

### Environment Variables
Create `.env.local` (or export in your shell):

```env
SANITY_PROJECT_ID=1qb3o4q1        # override if using another project
SANITY_DATASET=production         # e.g., staging, dev, etc.
SANITY_API_VERSION=2025-01-01     # optional; defaults to this value
SANITY_READ_TOKEN=sk-your-token   # optional, only for preview/tokenClient
```

> These settings are re-used by the Next.js app (`sanity/env.ts`) and Studio (`sanity.config.ts`), so keep them consistent.

### Running the Studio

```bash
pnpm dlx sanity@latest dev
# or, if you have the CLI installed globally:
sanity dev
```

- Serves on `http://localhost:3333` by default.
- Use `sanity deploy` to host the Studio on Sanity-managed infrastructure.

---

## 🗂️ Content Model Overview

`sanity/schemaTypes/index.ts` registers six document types. Publishing any entry instantly updates the live site (ISR revalidates every 60 s).

| Document | Purpose | Key Fields |
| --- | --- | --- |
| `siteSettings` | Global brand/contact data consumed by header, hero, and contact page. | `name`, `tagline`, `description`, `email`, `phone`, `social.*`, `ctas.primary/secondary` |
| `service` | Service cards for homepage and detail modules. | `title`, `description`, `icon` (Lucide name), `ctaLabel`, `ctaHref`, `order` |
| `faq` | FAQ accordion on home/services pages & FAQ schema. | `question`, `answer`, `order` |
| `testimonial` | Testimonials carousel content. | `quote`, `author`, `order` |
| `project` | Portfolio cards and detailed case study data. | `title`, `blurb`, `category`, `duration`, `teamSize`, `tags`, `results`, `features`, `status`, `cta.*`, `linkUrl`, `image`, `order` |
| `blogPost` | Long-form articles for `/blog` and `/blog/[slug]`. | `title`, `slug`, `description`, `publishedAt`, `readingTime`, `keywords`, `tags`, `sections[]`, `cta.*`, `image` |

### Ordering & Drafts
- `order` fields let you reorder without touching code; lower numbers appear first.
- Drafts are invisible to the Next.js site (queries use the `published` perspective). Click **Publish** to ship changes.

---

## ✍️ Editing Walkthrough

### 1. Site Settings
- Update `name`, `tagline`, and `description` to change hero copy defaults.
- Email/phone feed the contact cards on `/contact`.
- `social` URL fields surface in the contact “Follow Us” buttons and structured data.
- `ctas.primary/secondary` override header + hero button labels/links (fallbacks live in `src/content/site.ts`).

### 2. Services
- Each service becomes an item in the homepage “Services” grid and other sections via `fetchServices`.
- `icon` must match a Lucide icon identifier referenced in the UI layer (e.g., `Code`, `TrendingUp`).
- Leave `cta` blank to fall back to static defaults.

### 3. FAQs
- Provide question/answer pairs; use `order` for sequencing.
- These entries also drive the JSON-LD FAQ schema (`faqSchema`) for better SERP snippets.

### 4. Testimonials
- Short quote + author formats only; keep them concise for the carousel layout.
- If Sanity has no testimonials, the site reverts to `src/content/testimonials.ts`.

### 5. Projects
- Richest schema in the Studio:
  - **Hero**: title, blurb, hero image (16:9 recommended), category, status badge.
  - **Meta**: duration, team size, tags/technologies arrays.
  - **Proof**: `results` (bullet list), `features`, optional CTA and external link.
- Homepage cards only consume a subset (title, blurb, tags, image, CTA/link), while `/portfolio` renders the extended data.

### 6. Blog Posts
- `sections[]` is an ordered array of editor-friendly objects:
  - `heading` (optional)
  - `body` – PortableText blocks (paragraphs, lists, blockquotes, etc.)
  - `highlight` – toggles the styled callout background on the article page.
- `keywords` and `tags` feed SEO metadata and badge UI respectively.
- CTA label/href renders the closing “Ready to keep momentum going?” panel.

---

## 🔍 Using the Vision Tool
1. Open the **Vision** plugin inside Studio.
2. Run GROQ queries like:
   ```groq
   *[_type == "project"] | order(order asc) {
     title,
     category,
     status,
     "imageUrl": image.asset->url
   }
   ```
3. Use the output to sanity-check data before publishing or to debug what the Next.js app receives (`src/sanity/queries.ts` mirrors these GROQ strings).

---

## 🧰 Troubleshooting & Tips
- **No Sanity data?** The app logs a warning and falls back to `src/content/*`. Confirm env vars and that the Studio project/dataset exist.
- **Broken images?** Ensure each `project`/`blogPost` entry has an image and that the asset is published. The site resizes via `urlForImage`; missing assets return `null`.
- **Icon mismatch?** If a service’s `icon` doesn’t correspond to a Lucide component, the frontend will likely fall back to a default or break. Stick to documented names (see `lucide.dev/icons`).
- **Preview needs?** You already have a `SANITY_READ_TOKEN` hook in `tokenClient`; wire this into Next.js preview routes if editorial previewing becomes required.
- **Sitemap discrepancies?** Keep Sanity slugs (especially for blog posts) aligned with the `next-sitemap` config if you expect deterministic static paths.

---

## 📦 Deployment Checklist
1. Add/confirm Sanity env vars in Vercel (or the hosting platform).
2. Run `pnpm build` to ensure ISR/GROQ queries compile with the current schema.
3. If the Studio itself is deployed, run `sanity deploy` after schema changes so editors see the latest fields.

Happy publishing! Let the team know in Slack (#web) if you add new document types so we can extend the frontend queries accordingly.
