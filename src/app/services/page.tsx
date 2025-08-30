import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageBanner from "@/components/ui/page-banner";
import ServicesDetailed from "@/components/sections/ServicesDetailed";
import { sanity } from "@/lib/sanity.client";
import { siteSettingsQuery } from "@/lib/sanity.queries";

export const revalidate = 60;

export default async function ServicesPage() {
  const site = await sanity.fetch(siteSettingsQuery);
  return (
    <>
      <Header site={site} />
      <PageBanner
        title="Our Services"
        description="Smart solutions designed to help your business thrive online. From custom WordPress development to ongoing support, we provide comprehensive digital solutions."
        breadcrumbs={[{ label: "Services" }]}
      />
      <ServicesDetailed />
      <Footer site={site} />
    </>
  );
}
