import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageBanner from "@/components/ui/page-banner";
import PortfolioDetailed from "@/components/sections/PortfolioDetailed";
import { sanity } from "@/lib/sanity.client";
import { siteSettingsQuery } from "@/lib/sanity.queries";

export const revalidate = 60;

export default async function PortfolioPage() {
  const site = await sanity.fetch(siteSettingsQuery);
  return (
    <>
      <Header site={site} />
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
