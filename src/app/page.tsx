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
import { buildMetadata, combineKeywords } from "@/seo/meta";
import { keywordGroups } from "@/seo/keyword-groups";
import { fetchHomeContent } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";

const homeKeywords = combineKeywords(
  keywordGroups.foundational,
  [
    "WordPress growth partner",
    "WordPress development Toronto",
    "Digital marketing agency",
  ]
);

export const metadata = buildMetadata({
  title: "RTR Technologies – WordPress Growth Partner",
  description:
    "We design, build, and optimize custom WordPress websites powered by SEO, PPC, and analytics for ambitious teams.",
  path: "/",
  keywords: homeKeywords,
});

export const revalidate = 60;

export default async function HomePage() {
  const { siteSettings, services, faqs, testimonials, projects } =
    await fetchHomeContent();

  const featuredProjects = projects.map((project) => {
    const imageUrl = project.image
      ? urlForImage(project.image)?.width(600).height(400).url()
      : undefined;

    return {
      _id: project._id,
      title: project.title,
      blurb: project.blurb,
      tags: project.tags,
      comingSoon: project.comingSoon,
      image: imageUrl ?? undefined,
      linkUrl: project.linkUrl,
    };
  });

  return (
    <>
      <JsonLd id="ld-website" data={websiteSchema()} />
      <JsonLd id="ld-org" data={organizationSchema()} />
      <JsonLd id="ld-home" data={homePageSchema()} />
      <JsonLd id="ld-breadcrumbs" data={breadcrumbsSchema([{ name: "Home", url: "/" }])} />
      <Header site={siteSettings} />
      <main id="main-content" className="flex flex-col gap-0">
        <Hero site={siteSettings} />
        <About />
        <Services services={services} />
        <WhyUs />
        <FAQ faqs={faqs} />
        <Portfolio projects={featuredProjects} />
        <Testimonials testimonials={testimonials} />
      </main>
      <Footer site={siteSettings} />
    </>
  );
}
