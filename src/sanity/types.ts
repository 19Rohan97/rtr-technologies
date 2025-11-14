export type SiteSettings = {
  name?: string;
  tagline?: string;
  description?: string;
  email?: string;
  phone?: string;
  social?: {
    linkedin?: string;
    instagram?: string;
    behance?: string;
    dribbble?: string;
  };
  ctas?: {
    primary?: {
      label?: string;
      href?: string;
    };
    secondary?: {
      label?: string;
      href?: string;
    };
  };
};

export type FAQ = {
  _id: string;
  question: string;
  answer: string;
  order?: number;
};

export type Testimonial = {
  _id: string;
  quote: string;
  author: string;
  order?: number;
};

export type Project = {
  _id: string;
  title: string;
  blurb?: string;
  category?: string;
  duration?: string;
  teamSize?: string;
  tags?: string[];
  comingSoon?: boolean;
  linkUrl?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
    };
  };
  order?: number;
  results?: string[];
  technologies?: string[];
  features?: string[];
  status?: string;
  cta?: {
    label?: string;
    href?: string;
  };
};

export type BlogSection = {
  heading?: string;
  highlight?: boolean;
  body: Array<{ _type: string; style?: string; children?: Array<{ text: string }> }>;
};

export type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  publishedAt: string;
  readingTime?: string;
  keywords?: string[];
  tags?: string[];
  sections: BlogSection[];
  cta?: {
    label?: string;
    href?: string;
  };
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
    };
  };
};

export type HomeContent = {
  siteSettings?: SiteSettings;
  faqs: FAQ[];
  testimonials: Testimonial[];
  projects: Project[];
};
