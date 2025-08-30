import { SITE } from "@/content/site";
import { absUrl, clean } from "./utils";

export function websiteSchema() {
  return clean({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: absUrl("/"),
    potentialAction: {
      "@type": "SearchAction",
      target: `${absUrl("/")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  });
}

