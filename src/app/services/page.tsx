import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageBanner from "@/components/ui/page-banner";
import ServicesDetailed from "@/components/sections/ServicesDetailed";
import JsonLd from "@/components/JsonLd";
import { breadcrumbsSchema } from "@/seo/breadcrumbs";
import { servicesSchema } from "@/seo/services";
import { faqSchema } from "@/seo/faq";
import FAQ from "@/components/sections/FAQ";
import WhyUs from "@/components/sections/WhyUs";
import { buildMetadata, combineKeywords } from "@/seo/meta";
import { keywordGroups } from "@/seo/keyword-groups";
import { fetchFaqs, fetchSiteSettings } from "@/sanity/queries";

const servicesKeywords = combineKeywords(
  keywordGroups.foundational,
  keywordGroups.expansion
);

export const metadata = buildMetadata({
  title: "Services | RTR Technologies",
  description:
    "Explore RTR Technologies’ full suite of WordPress development, SEO, PPC, content, and optimization programs built for growth.",
  path: "/services",
  keywords: servicesKeywords,
});


export const revalidate = 60;

export default async function ServicesPage() {
  const [siteSettings, faqEntries] = await Promise.all([
    fetchSiteSettings(),
    fetchFaqs(),
  ]);
  const faqs = (faqEntries ?? []).map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd id="ld-services" data={servicesSchema()} />
      <JsonLd
        id="ld-breadcrumbs"
        data={breadcrumbsSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ])}
      />
      <JsonLd id="ld-faq" data={faqSchema(faqs)} />
      <Header site={siteSettings} />

      <PageBanner
        title="Our Services"
        description="Smart solutions designed to help your business thrive online. From custom WordPress development to ongoing support, we provide comprehensive digital solutions."
        breadcrumbs={[{ label: "Services" }]}
      />
      <ServicesDetailed />
      <WhyUs />
      <FAQ faqs={faqs} />
      <Footer site={siteSettings} />
    </>
  );
}
