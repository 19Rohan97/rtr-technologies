import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Site name",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      type: "string",
      title: "Tagline",
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 3,
      title: "Description",
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Contact email",
      validation: (rule) => rule.email().required(),
    }),
    defineField({
      name: "phone",
      type: "string",
      title: "Contact phone",
    }),
    defineField({
      name: "social",
      type: "object",
      title: "Social links",
      fields: [
        { name: "linkedin", type: "url", title: "LinkedIn" },
        { name: "instagram", type: "url", title: "Instagram" },
        { name: "behance", type: "url", title: "Behance" },
        { name: "dribbble", type: "url", title: "Dribbble" },
      ],
    }),
    defineField({
      name: "ctas",
      type: "object",
      title: "Calls to action",
      fields: [
        defineField({
          name: "primary",
          type: "object",
          title: "Primary CTA",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "href", type: "string", title: "Link" },
          ],
        }),
        defineField({
          name: "secondary",
          type: "object",
          title: "Secondary CTA",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "href", type: "string", title: "Link" },
          ],
        }),
      ],
    }),
  ],
});
