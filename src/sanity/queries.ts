import groq from "groq";
import { sanityClient } from "./client";
import type {
  BlogPost,
  HomeContent,
  SiteSettings,
  FAQ,
  Testimonial,
  Project,
} from "./types";
import { faqs as fallbackFaqs } from "@/content/faqs";
import { testimonials as fallbackTestimonials } from "@/content/testimonials";
import { projects as fallbackProjects } from "@/content/projects";
import {
  blogPosts as fallbackBlogPosts,
  type BlogPost as LegacyBlogPost,
} from "@/content/blog/posts";

const homeContentQuery = groq`{
  "siteSettings": *[_type == "siteSettings"] | order(_updatedAt desc)[0],
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

const siteSettingsQuery = groq`*[_type == "siteSettings"] | order(_updatedAt desc)[0]`;

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
      faqs: fallbackFaqs.map(mapLegacyFaq),
      testimonials: fallbackTestimonials.map(mapLegacyTestimonial),
      projects: fallbackProjects.map(mapLegacyProject),
    };
  }

  try {
    const data = await sanityClient.fetch<HomeContent>(homeContentQuery, {}, fetchOptions);
    return {
      siteSettings: data.siteSettings ?? undefined,
      faqs: data.faqs ?? [],
      testimonials: data.testimonials ?? [],
      projects: data.projects ?? [],
    };
  } catch (error) {
    console.warn("Sanity home content fetch failed, falling back to static content.", error);
    return {
      siteSettings: undefined,
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
