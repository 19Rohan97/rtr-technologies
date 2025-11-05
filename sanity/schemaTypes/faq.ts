import { defineType, defineField } from "sanity";

export default defineType({
  name: "faq",
  type: "document",
  title: "FAQ",
  fields: [
    defineField({
      name: "question",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      type: "text",
      rows: 5,
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
      title: "question",
    },
  },
});
