import { absUrl } from "./utils";

type ArticleSchemaInput = {
  title: string;
  description: string;
  slug: string;
  date: string;
  image?: string;
};

export function articleSchema({ title, description, slug, date, image }: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    author: {
      "@type": "Organization",
      name: "RTR Technologies",
      url: absUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: "RTR Technologies",
      url: absUrl("/"),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absUrl(`/blog/${slug}`),
    },
    image: [absUrl(image ?? "/api/og/home")],
  };
}

