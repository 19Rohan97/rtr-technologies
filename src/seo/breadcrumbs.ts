import { absUrl } from "./utils";

export type Crumb = { name: string; url?: string };

export function breadcrumbsSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url ? absUrl(c.url) : undefined,
    })),
  };
}

