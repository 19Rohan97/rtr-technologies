import { defineType, defineField } from "sanity";

export default defineType({
  name: "service",
  type: "document",
  title: "Service",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "icon",
      type: "string",
      description: "Icon name from the lucide-react set (e.g. Code, Search).",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ctaLabel",
      type: "string",
      title: "CTA label",
    }),
    defineField({
      name: "ctaHref",
      type: "string",
      title: "CTA link",
    }),
    defineField({
      name: "order",
      type: "number",
      title: "Sort order",
      description: "Lower numbers appear first.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
});
