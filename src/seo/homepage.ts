import { SITE } from "@/content/site";
import { absUrl, clean } from "./utils";

export function homePageSchema() {
  return clean({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: SITE.tagline,
    url: absUrl("/"),
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: absUrl("/"),
    },
  });
}

