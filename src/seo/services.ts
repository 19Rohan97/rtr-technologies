import { services } from "@/content/services";
import { absUrl } from "./utils";

export function servicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.desc,
        provider: {
          "@type": "Organization",
          name: "RTR Technologies",
          url: absUrl("/"),
        },
      },
    })),
  };
}

