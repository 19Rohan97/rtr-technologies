import { SITE } from "@/content/site";
import { absUrl, clean } from "./utils";

export function contactPageSchema() {
  return clean({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact RTR Technologies",
    url: absUrl("/contact"),
    description:
      "Get in touch to book a consultation, request a quote, or ask questions about our services.",
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: absUrl("/"),
      logo: absUrl("/rtr-logo.png"),
      email: SITE.email,
      contactPoint: SITE.email
        ? [
            {
              "@type": "ContactPoint",
              contactType: "sales",
              email: SITE.email,
            },
          ]
        : undefined,
    },
  });
}

