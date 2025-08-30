import { projects } from "@/content/projects";
import { absUrl } from "./utils";

export function portfolioSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: p.title,
        about: p.blurb,
        url: absUrl("/portfolio"),
      },
    })),
  };
}

