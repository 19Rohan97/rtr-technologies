import { SITE } from "@/content/site";
import { absUrl, clean } from "./utils";

export function organizationSchema() {
  const sameAs = [
    SITE.social.linkedin,
    SITE.social.instagram,
    SITE.social.behance,
    SITE.social.dribbble,
  ].filter(Boolean);

  return clean({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: absUrl("/"),
    logo: absUrl("/rtr-logo.png"),
    description: SITE.description,
    email: SITE.email,
    sameAs: sameAs.length ? sameAs : undefined,
  });
}

