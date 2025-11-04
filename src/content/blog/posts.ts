export type BlogSection = {
  heading?: string;
  body: string[];
  highlight?: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  keywords: string[];
  tags: string[];
  sections: BlogSection[];
  cta?: {
    label: string;
    href: string;
  };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "wordpress-seo-growth-playbook",
    title: "WordPress SEO Growth Playbook for 2025",
    description:
      "A practical roadmap for scaling organic visibility on WordPress using technical SEO, content velocity, and conversion insights.",
    date: "2025-02-18",
    readingTime: "7 min read",
    keywords: [
      "WordPress development company",
      "Technical SEO & on-page optimization",
      "SEO-driven web design",
      "Website performance optimization",
    ],
    tags: ["SEO", "WordPress", "Growth"],
    sections: [
      {
        body: [
          "Organic acquisition is still the most reliable growth lever for WordPress businesses, but the playbook has changed. Google’s SGE rollout, AI snapshots, and heightened Core Web Vitals expectations mean the days of shipping a theme and hoping for the best are gone.",
          "At RTR Technologies, we partner with growth teams who expect SEO to drive pipeline. The following framework outlines how we structure WordPress SEO engagements so results compound quarter after quarter.",
        ],
      },
      {
        heading: "1. Treat technical SEO as infrastructure",
        body: [
          "We start every engagement with a technical audit covering crawl depth, schema coverage, Core Web Vitals, and indexation health. The objective is simple: make it effortless for search engines to discover and understand your content.",
          "Key actions include establishing clean information architecture, compressing and lazy-loading media, implementing proper caching (especially on headless builds), and automating structured data through a component-driven approach.",
        ],
      },
      {
        heading: "2. Build topical authority with intent-driven clusters",
        body: [
          "High-converting pages map to high-intent keywords. We pair keyword research with buyer journey interviews to create topic clusters that answer every pre-sale question. Each cluster includes a pillar page, supporting posts, comparison content, and conversion assets.",
          "Our content briefs include SERP analysis, outline recommendations, internal link targets, CTA suggestions, and schema requirements. This keeps freelancers, internal writers, and SMEs aligned on the story.",
        ],
      },
      {
        heading: "3. Blend experimentation and analytics",
        body: [
          "Growth doesn’t happen in a vacuum. We integrate GA4, Looker Studio, and call tracking to capture the full user journey. Every month, we review performance alongside conversion data to prioritize the next sprint.",
          "Tests range from rewriting hero messaging to breaking out high-intent landing pages by persona. The rule: ship something measurable every sprint. Insights feed back into SEO, PPC, and sales collateral.",
        ],
      },
      {
        heading: "4. Ship faster with reusable design systems",
        body: [
          "WordPress can be lightning fast when design systems are optimized. We leverage component libraries that enforce accessibility, semantics, and speed. Editors can assemble new pages without sacrificing performance or brand consistency.",
          "This operational efficiency keeps the SEO roadmap moving instead of waiting weeks for dev cycles.",
        ],
      },
      {
        heading: "5. Document everything",
        body: [
          "Your SEO program is only as strong as the knowledge base behind it. Each experiment, content launch, and technical update feeds into shared documentation so new hires and stakeholders understand context instantly.",
          "This documentation culture is what allows our clients to scale beyond founder-led marketing while protecting momentum.",
        ],
      },
      {
        heading: "Putting the playbook in motion",
        body: [
          "Start with a technical reset, layer in intent-driven content, and keep experimentation front and center. Combine this discipline with a clear analytics narrative and you’ll outpace competitors who are stuck tweaking plugins.",
        ],
        highlight: true,
      },
    ],
    cta: {
      label: "Plan your SEO roadmap",
      href: "/contact",
    },
  },
  {
    slug: "ai-seo-roadmap-for-sge",
    title: "How to Build an AI SEO Roadmap for Google SGE",
    description:
      "Practical steps to surface your brand inside Google’s Search Generative Experience and other AI-driven discovery platforms.",
    date: "2025-02-11",
    readingTime: "6 min read",
    keywords: [
      "Generative AI SEO",
      "AI search optimization",
      "Generative engine optimization",
      "Search engine optimization (SEO) services",
    ],
    tags: ["AI SEO", "Strategy"],
    sections: [
      {
        body: [
          "Google’s Search Generative Experience is already rewriting how buyers discover solutions. Rather than ten blue links, users receive synthesized answers sourced from trusted experts. Brands that fail to adapt will watch competitors own those conversational spaces.",
          "The good news: AI SEO isn’t a replacement for fundamentals. It’s a layer that rewards teams who already invest in structured data, consistent publishing, and authoritative perspectives.",
        ],
      },
      {
        heading: "Map entities, not just keywords",
        body: [
          "SGE boosts sites that clearly communicate who they are, what they do, and how everything connects. We audit knowledge panels, schema markup, and internal linking to ensure Google understands the entities your brand owns.",
          "Focus on crafting content around problems, solutions, and outcomes. Think in terms of relationships: service → persona → use case → proof.",
        ],
      },
      {
        heading: "Capture AI snapshots and iterate",
        body: [
          "We track key queries weekly to record which brands appear in SGE, Bing Copilot, Perplexity, and ChatGPT browsing. This snapshotting highlights gaps and identifies anchor content to refresh.",
          "From there we build a prioritized roadmap: enhance in-depth guides, create comparison content, and add supporting FAQs reviewers consistently ask.",
        ],
      },
      {
        heading: "Blend human expertise with AI assistance",
        body: [
          "Use AI to accelerate research and outline creation, but lean on humans for unique POVs, data interpretation, and storytelling. Our editorial workflow pairs prompt libraries with SME interviews so every article remains authoritative.",
          "Before publishing, we run accuracy and helpfulness evaluations. The aim is to deliver content AI models can trust and reference confidently.",
        ],
      },
      {
        heading: "Measure what matters",
        body: [
          "We correlate AI impressions with organic traffic, conversions, and assisted revenue. When we see a spike in SGE visibility for a cluster, we double down with CRO tests and paid campaigns to capture demand.",
          "Dashboards highlight coverage, sentiment, and share of topic so stakeholders can see progress in real time.",
        ],
        highlight: true,
      },
      {
        heading: "Where to start",
        body: [
          "Begin with an AI visibility audit that documents coverage across SGE and other assistants. Create a backlog of entity gaps, schema requirements, and content refreshes—then iterate every month. The brands that win treat AI SEO as an ongoing product, not a single project.",
        ],
      },
    ],
    cta: {
      label: "Request an AI SEO audit",
      href: "/services/ai-seo",
    },
  },
  {
    slug: "aligning-ppc-and-seo-for-full-funnel-growth",
    title: "Aligning PPC and SEO for Full-Funnel Growth",
    description:
      "How performance teams combine paid media and organic search to accelerate qualified pipeline without ballooning CAC.",
    date: "2025-02-04",
    readingTime: "8 min read",
    keywords: [
      "Pay-per-click (PPC) management",
      "Google Ads management",
      "Conversion rate optimization (CRO)",
      "Lead generation & sales funnels",
    ],
    tags: ["PPC", "SEO", "CRO"],
    sections: [
      {
        body: [
          "Paid and organic teams often run in silos, duplicating effort and missing compounding gains. High-performing marketing orgs treat PPC and SEO as a unified full-funnel system—with shared insights, coordinated experiments, and measurement that reflects revenue impact.",
          "Here’s how we structure integrated growth programs for our clients.",
        ],
      },
      {
        heading: "Share keyword and audience intelligence",
        body: [
          "PPC data reveals which queries convert quickly, while SEO uncovers emerging intent early. We maintain a shared keyword and audience map so both teams prioritize the same opportunities.",
          "When we see new high-intent keywords drive efficient CPCs, we create or expand organic coverage immediately. Likewise, breakout organic performers inform new ad groups, RSAs, and landing pages.",
        ],
      },
      {
        heading: "Co-own landing pages and CRO experiments",
        body: [
          "Landing pages should evolve based on combined insight from organic and paid performance. We run CRO sprints that incorporate GA4, session recordings, and call intelligence, then test messaging across both channels.",
          "Results are centralized in a growth notebook so no learning is lost when teams change or budgets shift.",
        ],
      },
      {
        heading: "Align reporting around revenue",
        body: [
          "Instead of celebrating clicks or rankings, we measure qualified pipeline, cost per opportunity, and lifetime value. This mindset shift helps leadership see PPC and SEO as parts of the same revenue engine.",
          "We build Looker Studio dashboards that blend spend, attribution models, and organic performance to highlight true ROI.",
        ],
      },
      {
        heading: "Automate handoffs with shared systems",
        body: [
          "Templates, naming conventions, and automation ensure insights travel quickly. We standardize UTMs, maintain a conversion taxonomy, and sync experiments into product and sales tools.",
          "The outcome: faster iteration, less rework, and a unified customer experience.",
        ],
      },
      {
        heading: "Full-funnel growth in action",
        body: [
          "One client combined SEO-driven thought leadership with targeted PPC retargeting to cut CAC by 23% while doubling SQL volume. The key wasn’t a flashy hack—it was relentless collaboration and shared accountability.",
        ],
        highlight: true,
      },
      {
        heading: "Next steps",
        body: [
          "Audit your current workflows, document every touchpoint between SEO and PPC, and create a unified sprint cadence. Once teams execute from the same roadmap, your funnel tightens—and revenue follows.",
        ],
      },
    ],
    cta: {
      label: "Schedule a growth consult",
      href: "/services/ppc",
    },
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

