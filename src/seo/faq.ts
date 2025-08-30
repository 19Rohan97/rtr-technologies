import { faqs as defaultFaqs, type FAQItem } from "@/content/faqs";
import { clean } from "./utils";

export function faqSchema(items: FAQItem[] = defaultFaqs) {
  return clean({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) =>
      clean({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: clean({
          "@type": "Answer",
          text: f.answer,
        }),
      })
    ),
  });
}

