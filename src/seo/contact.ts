import { SITE } from "@/content/site";
import { absUrl, clean } from "./utils";

type SiteInfo = {
  name?: string;
  email?: string;
};

export function contactPageSchema(site: SiteInfo = SITE) {
  return clean({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact RTR Technologies",
    url: absUrl("/contact"),
    description:
      "Get in touch to book a consultation, request a quote, or ask questions about our services.",
    publisher: clean({
      "@type": "Organization",
      name: site.name ?? SITE.name,
      url: absUrl("/"),
      logo: absUrl("/rtr-logo.png"),
      email: site.email ?? SITE.email,
      contactPoint:
        site.email ?? SITE.email
          ? [
              {
                "@type": "ContactPoint",
                contactType: "sales",
                email: site.email ?? SITE.email,
              },
            ]
          : undefined,
    }),
  });
}
