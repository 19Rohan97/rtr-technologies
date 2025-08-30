import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";
import { sanity } from "@/lib/sanity.client";
import {
  siteSettingsQuery,
  servicesQuery,
  projectsQuery,
  testimonialsQuery,
} from "@/lib/sanity.queries";

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

export default async function HomePage() {
  const [site, services, projects, testimonials] = await Promise.all([
    sanity.fetch(siteSettingsQuery),
    sanity.fetch(servicesQuery),
    sanity.fetch(projectsQuery),
    sanity.fetch(testimonialsQuery),
  ]);

  return (
    <>
      <Header site={site} />
      <Hero site={site} />
      <About />
      <Services services={services} />
      <Portfolio projects={projects} />
      <Testimonials testimonials={testimonials} />
      <Footer site={site} />
    </>
  );
}
