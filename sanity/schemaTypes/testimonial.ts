import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonial",
  type: "document",
  title: "Testimonial",
  fields: [
    defineField({
      name: "quote",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      type: "number",
      title: "Sort order",
    }),
  ],
  preview: {
    select: {
      title: "author",
      subtitle: "quote",
    },
  },
});
