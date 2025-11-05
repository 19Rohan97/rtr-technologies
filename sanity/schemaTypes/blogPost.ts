import { defineType, defineField } from "sanity";

export default defineType({
  name: "blogPost",
  type: "document",
  title: "Blog Post",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "readingTime",
      type: "string",
      title: "Reading time",
    }),
    defineField({
      name: "keywords",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "sections",
      type: "array",
      of: [
        defineField({
          name: "section",
          type: "object",
          title: "Section",
          fields: [
            { name: "heading", type: "string" },
            {
              name: "body",
              type: "array",
              of: [{ type: "block" }],
              validation: (rule) => rule.required(),
            },
            {
              name: "highlight",
              type: "boolean",
              title: "Highlight",
              initialValue: false,
            },
          ],
        }),
      ],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: "cta",
      type: "object",
      title: "Call to action",
      fields: [
        { name: "label", type: "string", title: "Label" },
        { name: "href", type: "string", title: "Link" },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
});
