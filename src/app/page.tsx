import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";
import WhyUs from "@/components/sections/WhyUs";
import FAQ from "@/components/sections/FAQ";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/seo/organization";
import { websiteSchema } from "@/seo/website";
import { homePageSchema } from "@/seo/homepage";
import { breadcrumbsSchema } from "@/seo/breadcrumbs";


export const metadata = {
  title: "RTR Technologies – WordPress Growth Partner",
  description:
    "We design, build, and optimize custom WordPress websites powered by SEO and analytics.",
  openGraph: {
    title: "RTR Technologies – WordPress Growth Partner",
    description:
      "WordPress websites that drive growth. SEO, design, GA4 tracking.",
    url: "https://rtr-technologies.com",
    siteName: "RTR Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RTR Technologies – WordPress Growth Partner",
    description:
      "WordPress websites that drive growth. SEO, design, GA4 tracking.",
  },
};

export const revalidate = 60;

export default function HomePage() {

  return (
    <>
      <JsonLd id="ld-website" data={websiteSchema()} />
      <JsonLd id="ld-org" data={organizationSchema()} />
      <JsonLd id="ld-home" data={homePageSchema()} />
      <JsonLd id="ld-breadcrumbs" data={breadcrumbsSchema([{ name: "Home", url: "/" }])} />
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <FAQ />
      <Portfolio />
      <Testimonials />
      <Footer />
    </>
  );
}
