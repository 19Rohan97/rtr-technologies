import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageBanner from "@/components/ui/page-banner";
import ServicesDetailed from "@/components/sections/ServicesDetailed";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <PageBanner
        title="Our Services"
        description="Smart solutions designed to help your business thrive online. From custom WordPress development to ongoing support, we provide comprehensive digital solutions."
        breadcrumbs={[{ label: "Services" }]}
      />
      <ServicesDetailed />
      <Footer />
    </>
  );
}
