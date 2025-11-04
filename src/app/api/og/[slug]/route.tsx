import { ImageResponse } from "next/og";
import { blogPosts } from "@/content/blog/posts";

export const runtime = "edge";

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

type OgThemeConfig = {
  title: string;
  description: string;
  accent?: string;
};

const baseThemes: Record<string, OgThemeConfig> = {
  home: {
    title: "RTR Technologies",
    description: "WordPress growth partner for SEO, performance, and analytics.",
  },
  services: {
    title: "Services",
    description: "WordPress development, SEO, PPC, content, CRO, AI search.",
  },
  seo: {
    title: "SEO Services",
    description: "Technical SEO, content strategy, and measurement for growth.",
  },
  "ai-seo": {
    title: "AI & Generative SEO",
    description: "Optimise for Google SGE, ChatGPT, and Perplexity.",
    accent: "#FACC15",
  },
  ppc: {
    title: "Paid Media & PPC",
    description: "Google Ads programs engineered for pipeline velocity.",
  },
  "content-marketing": {
    title: "Content Marketing",
    description: "Editorial engines that earn authority and nurture demand.",
  },
  "social-media": {
    title: "Social Media",
    description: "Campaigns that build community and amplify launches.",
  },
  "conversion-rate-optimization": {
    title: "CRO Programs",
    description: "Experimentation and analytics that convert more revenue.",
  },
  portfolio: {
    title: "Portfolio",
    description: "Growth-driven WordPress builds and marketing outcomes.",
  },
  contact: {
    title: "Let’s Talk",
    description: "Book your WordPress growth consultation with RTR Technologies.",
  },
  blog: {
    title: "Insights & Playbooks",
    description: "WordPress, SEO, PPC, and CRO guidance for growth teams.",
  },
  sitemap: {
    title: "Sitemap",
    description: "All RTR Technologies pages in one place — plus XML access.",
  },
};

const postThemes = blogPosts.reduce<Record<string, OgThemeConfig>>((acc, post) => {
  acc[post.slug] = {
    title: post.title,
    description: post.description,
  };
  return acc;
}, {});

const themes: Record<string, OgThemeConfig> = {
  ...baseThemes,
  ...postThemes,
};

function getTheme(slug: string): OgThemeConfig {
  return (
    themes[slug] ?? {
      title: "RTR Technologies",
      description: "WordPress development and growth marketing services.",
    }
  );
}

export async function GET(_req: Request, context: any) {
  const slug = context?.params?.slug ?? "home";
  const theme = getTheme(slug);

  const accent = theme.accent ?? "#FCD34D";
  const gradient = "linear-gradient(135deg, rgba(17, 24, 39, 0.95), rgba(17, 24, 39, 0.8))";

  return new ImageResponse(
    (
      <div
        style={{
          width: OG_WIDTH,
          height: OG_HEIGHT,
          display: "flex",
          flexDirection: "column",
          background: gradient,
          color: "#F9FAFB",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(252, 211, 77, 0.25), transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "32px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: "32px",
            padding: "48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "24px",
                fontWeight: 600,
              }}
            >
              <div
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  backgroundColor: accent,
                }}
              />
              RTR Technologies
            </div>
            <div style={{ fontSize: "18px", color: "rgba(249, 250, 251, 0.7)" }}>
              WordPress Growth Partner
            </div>
          </div>

          <div style={{ marginTop: "40px" }}>
            <div
              style={{
                display: "inline-flex",
                padding: "8px 16px",
                borderRadius: "999px",
                backgroundColor: "rgba(252, 211, 77, 0.15)",
                color: accent,
                fontSize: "20px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "4px",
              }}
            >
              {theme.title}
            </div>

            <h1
              style={{
                marginTop: "24px",
                fontSize: "64px",
                lineHeight: "1.05",
                maxWidth: "800px",
                fontWeight: 700,
              }}
            >
              {theme.description}
            </h1>

            <p
              style={{
                marginTop: "24px",
                fontSize: "24px",
                lineHeight: "1.5",
                maxWidth: "680px",
                color: "rgba(249, 250, 251, 0.7)",
              }}
            >
              Bespoke WordPress development, search optimization, and analytics programs engineered
              for measurable growth.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "20px",
              color: "rgba(249, 250, 251, 0.7)",
            }}
          >
            <span>rtr-technologies.com</span>
            <span>Strategy • Performance • Analytics</span>
          </div>
        </div>
      </div>
    ),
    {
      width: OG_WIDTH,
      height: OG_HEIGHT,
      headers: {
        "Cache-Control": "public, max-age=120, stale-while-revalidate=600",
      },
    }
  );
}
