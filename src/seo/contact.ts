import { SITE } from "@/content/site";
import { absUrl, clean } from "./utils";

type SiteInfo = {
  name?: string;
  email?: string;
};

export function contactPageSchema(site?: SiteInfo | null) {
  const siteData = site ?? SITE;

  return clean({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact RTR Technologies",
    url: absUrl("/contact"),
    description:
      "Get in touch to book a consultation, request a quote, or ask questions about our services.",
    publisher: clean({
      "@type": "Organization",
      name: siteData.name ?? SITE.name,
      url: absUrl("/"),
      logo: absUrl("/rtr-logo.png"),
      email: siteData.email ?? SITE.email,
      contactPoint:
        siteData.email ?? SITE.email
          ? [
              {
                "@type": "ContactPoint",
                contactType: "sales",
                email: siteData.email ?? SITE.email,
              },
            ]
          : undefined,
    }),
  });
}
