import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageBanner from "@/components/ui/page-banner";
import PortfolioDetailed from "@/components/sections/PortfolioDetailed";
import JsonLd from "@/components/JsonLd";
import { breadcrumbsSchema } from "@/seo/breadcrumbs";
import { portfolioSchema } from "@/seo/portfolio";


export const revalidate = 60;

export default async function PortfolioPage() {
  const site = await sanity.fetch(siteSettingsQuery);
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
      <Footer site={site} />
    </>
  );
}
