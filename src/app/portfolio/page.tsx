import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageBanner from "@/components/ui/page-banner";
import PortfolioDetailed from "@/components/sections/PortfolioDetailed";
import JsonLd from "@/components/JsonLd";
import { breadcrumbsSchema } from "@/seo/breadcrumbs";
import { portfolioSchema } from "@/seo/portfolio";
import { buildMetadata, combineKeywords } from "@/seo/meta";
import { keywordGroups } from "@/seo/keyword-groups";

const portfolioKeywords = combineKeywords(
  [
    "WordPress agency portfolio",
    "WordPress development case studies",
    "SEO-driven web design examples",
    "Digital marketing success stories",
  ],
  keywordGroups.foundational
);

export const metadata = buildMetadata({
  title: "Portfolio | RTR Technologies WordPress Case Studies",
  description:
    "Explore RTR Technologies projects that combine custom WordPress development, SEO strategy, and analytics to drive measurable growth.",
  path: "/portfolio",
  keywords: portfolioKeywords,
});


export const revalidate = 60;

export default function PortfolioPage() {
  return (
    <>
      <JsonLd id="ld-portfolio" data={portfolioSchema()} />
      <JsonLd
        id="ld-breadcrumbs"
        data={breadcrumbsSchema([
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" },
        ])}
      />
      <Header />

      <PageBanner
        title="Our Portfolio"
        description="Here's a glimpse of projects we've crafted with passion and precision. Each project represents our commitment to delivering exceptional digital experiences that drive real business results."
        breadcrumbs={[{ label: "Portfolio" }]}
      />
      <PortfolioDetailed />
      <Footer />
    </>
  );
}
