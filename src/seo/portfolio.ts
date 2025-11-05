import { projects as fallbackProjects } from "@/content/projects";
import { absUrl } from "./utils";

type ProjectLike = { title: string; blurb?: string };

export function portfolioSchema(projects: ProjectLike[] = fallbackProjects) {
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
