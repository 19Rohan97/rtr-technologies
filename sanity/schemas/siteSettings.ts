import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "tagline", type: "string" }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "email", type: "string" }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      description: "Primary contact phone number (display format)",
    }),
    defineField({
      name: "social",
      type: "object",
      fields: [
        { name: "linkedin", type: "url" },
        { name: "instagram", type: "url" },
        { name: "behance", type: "url" },
        { name: "dribbble", type: "url" },
      ],
    }),
    defineField({
      name: "ctas",
      type: "object",
      fields: [
        { name: "primaryLabel", type: "string" },
        { name: "primaryHref", type: "string" },
        { name: "secondaryLabel", type: "string" },
        { name: "secondaryHref", type: "string" },
      ],
    }),
  ],
});
