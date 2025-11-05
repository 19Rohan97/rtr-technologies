import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageBanner from "@/components/ui/page-banner";
import PortfolioDetailed from "@/components/sections/PortfolioDetailed";
import JsonLd from "@/components/JsonLd";
import { breadcrumbsSchema } from "@/seo/breadcrumbs";
import { portfolioSchema } from "@/seo/portfolio";
import { buildMetadata, combineKeywords } from "@/seo/meta";
import { keywordGroups } from "@/seo/keyword-groups";
import { fetchProjects, fetchSiteSettings } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";

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

export default async function PortfolioPage() {
  const [siteSettings, projects] = await Promise.all([
    fetchSiteSettings(),
    fetchProjects(),
  ]);

  const mappedProjects = projects.map((project) => {
    const imageUrl = project.image
      ? urlForImage(project.image)?.width(1200).height(675).url()
      : null;
    const fallbackCta = project.linkUrl
      ? { label: "View Case Study", href: project.linkUrl }
      : { label: "Start Your Project", href: "/contact" };
    const finalCta = {
      label: project.cta?.label ?? fallbackCta.label,
      href: project.cta?.href ?? fallbackCta.href,
    };

    return {
      title: project.title,
      description: project.blurb ?? "",
      image: imageUrl ?? "/hero-image.webp",
      category: project.category,
      duration: project.duration,
      teamSize: project.teamSize,
      results: project.results ?? [],
      technologies: project.technologies ?? project.tags ?? [],
      features: project.features,
      status: project.status ?? (project.comingSoon ? "Coming Soon" : undefined),
      cta: finalCta,
    };
  });

  const schemaProjects = projects.length
    ? projects.map((p) => ({ title: p.title, blurb: p.blurb }))
    : undefined;

  return (
    <>
      <JsonLd id="ld-portfolio" data={portfolioSchema(schemaProjects)} />
      <JsonLd
        id="ld-breadcrumbs"
        data={breadcrumbsSchema([
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" },
        ])}
      />
      <Header site={siteSettings} />

      <PageBanner
        title="Our Portfolio"
        description="Here's a glimpse of projects we've crafted with passion and precision. Each project represents our commitment to delivering exceptional digital experiences that drive real business results."
        breadcrumbs={[{ label: "Portfolio" }]}
      />
      <PortfolioDetailed projects={mappedProjects} />
      <Footer site={siteSettings} />
    </>
  );
}
