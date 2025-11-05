import groq from "groq";
import { sanityClient } from "./client";
import type {
  BlogPost,
  HomeContent,
  SiteSettings,
  Service,
  FAQ,
  Testimonial,
  Project,
} from "./types";
import { services as fallbackServices } from "@/content/services";
import { faqs as fallbackFaqs } from "@/content/faqs";
import { testimonials as fallbackTestimonials } from "@/content/testimonials";
import { projects as fallbackProjects } from "@/content/projects";
import {
  blogPosts as fallbackBlogPosts,
  type BlogPost as LegacyBlogPost,
} from "@/content/blog/posts";

const homeContentQuery = groq`{
  "siteSettings": *[_type == "siteSettings"][0],
  "services": *[_type == "service"] | order(coalesce(order, 999) asc){
    _id,
    title,
    "description": coalesce(description, ""),
    icon,
    ctaLabel,
    ctaHref,
    order
  },
  "faqs": *[_type == "faq"] | order(coalesce(order, 999) asc){
    _id,
    question,
    answer,
    order
  },
  "testimonials": *[_type == "testimonial"] | order(coalesce(order, 999) asc){
    _id,
    quote,
    author,
    order
  },
  "projects": *[_type == "project"] | order(coalesce(order, 999) asc){
    _id,
    title,
    blurb,
    tags,
    comingSoon,
    linkUrl,
    image,
    order
  }
}`;

const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`;

const servicesQuery = groq`*[_type == "service"] | order(coalesce(order, 999) asc){
  _id,
  title,
  "description": coalesce(description, ""),
  icon,
  ctaLabel,
  ctaHref,
  order
}`;

const faqsQuery = groq`*[_type == "faq"] | order(coalesce(order, 999) asc){
  _id,
  question,
  answer,
  order
}`;

const testimonialsQuery = groq`*[_type == "testimonial"] | order(coalesce(order, 999) asc){
  _id,
  quote,
  author,
  order
}`;

const projectsQuery = groq`*[_type == "project"] | order(coalesce(order, 999) asc){
  _id,
  title,
  blurb,
  category,
  duration,
  teamSize,
  tags,
  comingSoon,
  linkUrl,
  image,
  results,
  technologies,
  features,
  status,
  cta,
  order
}`;

const blogPostsQuery = groq`*[_type == "blogPost"] | order(publishedAt desc){
  _id,
  title,
  slug,
  description,
  publishedAt,
  readingTime,
  keywords,
  tags,
  sections[]{
    heading,
    highlight,
    body
  },
  cta,
  image
}`;

const blogPostBySlugQuery = groq`*[_type == "blogPost" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  description,
  publishedAt,
  readingTime,
  keywords,
  tags,
  sections[]{
    heading,
    highlight,
    body
  },
  cta,
  image
}`;

type LegacyService = {
  title: string;
  desc: string;
  icon: string;
  cta?: { label: string; href: string };
};

type LegacyFaq = {
  question: string;
  answer: string;
};

type LegacyProject = {
  title: string;
  blurb: string;
  tags: string[];
  comingSoon?: boolean;
  link?: string;
};

type LegacyTestimonial = {
  quote: string;
  author: string;
};

const mapLegacyService = (service: LegacyService): Service => ({
  _id: service.title,
  title: service.title,
  description: service.desc,
  icon: service.icon,
  ctaLabel: service.cta?.label,
  ctaHref: service.cta?.href,
});

const mapLegacyFaq = (faq: LegacyFaq): FAQ => ({
  _id: faq.question,
  question: faq.question,
  answer: faq.answer,
});

const mapLegacyProject = (project: LegacyProject): Project => ({
  _id: project.title,
  title: project.title,
  blurb: project.blurb,
  tags: project.tags,
  comingSoon: project.comingSoon,
  linkUrl: project.link,
});

const mapLegacyTestimonial = (testimonial: LegacyTestimonial): Testimonial => ({
  _id: testimonial.author,
  quote: testimonial.quote,
  author: testimonial.author,
});

function mapLegacyBlogPost(post: LegacyBlogPost): BlogPost {
  return {
    _id: post.slug,
    title: post.title,
    slug: { current: post.slug },
    description: post.description,
    publishedAt: post.date,
    readingTime: post.readingTime,
    keywords: post.keywords,
    tags: post.tags,
    sections: post.sections.map((section) => ({
      heading: section.heading,
      highlight: section.highlight,
      body: section.body.map((paragraph) => ({
        _type: "block",
        style: "normal",
        children: [{ text: paragraph }],
      })),
    })),
    cta: post.cta,
  };
}

const REVALIDATE_SECONDS = 60;

const fetchOptions = { next: { revalidate: REVALIDATE_SECONDS } };

export async function fetchHomeContent(): Promise<HomeContent> {
  if (!sanityClient) {
    return {
      siteSettings: undefined,
      services: fallbackServices.map(mapLegacyService),
      faqs: fallbackFaqs.map(mapLegacyFaq),
      testimonials: fallbackTestimonials.map(mapLegacyTestimonial),
      projects: fallbackProjects.map(mapLegacyProject),
    };
  }

  try {
    const data = await sanityClient.fetch<HomeContent>(homeContentQuery, {}, fetchOptions);
    return {
      siteSettings: data.siteSettings ?? undefined,
      services: data.services ?? [],
      faqs: data.faqs ?? [],
      testimonials: data.testimonials ?? [],
      projects: data.projects ?? [],
    };
  } catch (error) {
    console.warn("Sanity home content fetch failed, falling back to static content.", error);
    return {
      siteSettings: undefined,
      services: fallbackServices.map(mapLegacyService),
      faqs: fallbackFaqs.map(mapLegacyFaq),
      testimonials: fallbackTestimonials.map(mapLegacyTestimonial),
      projects: fallbackProjects.map(mapLegacyProject),
    };
  }
}

export async function fetchSiteSettings(): Promise<SiteSettings | undefined> {
  if (!sanityClient) {
    return undefined;
  }

  try {
    return await sanityClient.fetch<SiteSettings>(siteSettingsQuery, {}, fetchOptions);
  } catch (error) {
    console.warn("Failed to fetch site settings from Sanity.", error);
    return undefined;
  }
}

export async function fetchServices(): Promise<Service[]> {
  if (!sanityClient) {
    return fallbackServices.map(mapLegacyService);
  }

  try {
    return (await sanityClient.fetch<Service[]>(servicesQuery, {}, fetchOptions)) ?? [];
  } catch (error) {
    console.warn("Failed to fetch services from Sanity.", error);
    return fallbackServices.map(mapLegacyService);
  }
}

export async function fetchFaqs(): Promise<FAQ[]> {
  if (!sanityClient) {
    return fallbackFaqs.map(mapLegacyFaq);
  }

  try {
    return (await sanityClient.fetch<FAQ[]>(faqsQuery, {}, fetchOptions)) ?? [];
  } catch (error) {
    console.warn("Failed to fetch FAQs from Sanity.", error);
    return fallbackFaqs.map(mapLegacyFaq);
  }
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  if (!sanityClient) {
    return fallbackTestimonials.map(mapLegacyTestimonial);
  }

  try {
    return (await sanityClient.fetch<Testimonial[]>(testimonialsQuery, {}, fetchOptions)) ?? [];
  } catch (error) {
    console.warn("Failed to fetch testimonials from Sanity.", error);
    return fallbackTestimonials.map(mapLegacyTestimonial);
  }
}

export async function fetchProjects(): Promise<Project[]> {
  if (!sanityClient) {
    return fallbackProjects.map(mapLegacyProject);
  }

  try {
    return (await sanityClient.fetch<Project[]>(projectsQuery, {}, fetchOptions)) ?? [];
  } catch (error) {
    console.warn("Failed to fetch projects from Sanity.", error);
    return fallbackProjects.map(mapLegacyProject);
  }
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  if (!sanityClient) {
    return fallbackBlogPosts.map(mapLegacyBlogPost);
  }

  try {
    const posts = await sanityClient.fetch<BlogPost[]>(blogPostsQuery, {}, fetchOptions);
    if (!posts?.length) {
      return fallbackBlogPosts.map(mapLegacyBlogPost);
    }
    return posts;
  } catch (error) {
    console.warn("Failed to fetch blog posts from Sanity.", error);
    return fallbackBlogPosts.map(mapLegacyBlogPost);
  }
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!sanityClient) {
    const legacy = fallbackBlogPosts.find((post) => post.slug === slug);
    return legacy ? mapLegacyBlogPost(legacy) : null;
  }

  try {
    const post = await sanityClient.fetch<BlogPost | null>(
      blogPostBySlugQuery,
      { slug },
      fetchOptions
    );
    if (post) return post;
  } catch (error) {
    console.warn(`Failed to fetch blog post ${slug} from Sanity.`, error);
  }

  const legacy = fallbackBlogPosts.find((post) => post.slug === slug);
  return legacy ? mapLegacyBlogPost(legacy) : null;
}
