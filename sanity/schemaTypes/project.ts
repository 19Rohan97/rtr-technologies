import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "blurb",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "category",
      type: "string",
      title: "Category",
    }),
    defineField({
      name: "duration",
      type: "string",
      title: "Duration",
    }),
    defineField({
      name: "teamSize",
      type: "string",
      title: "Team size",
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "comingSoon",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "linkUrl",
      type: "url",
      title: "External link",
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "results",
      type: "array",
      of: [{ type: "string" }],
      title: "Key results",
    }),
    defineField({
      name: "technologies",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "status",
      type: "string",
    }),
    defineField({
      name: "cta",
      type: "object",
      fields: [
        { name: "label", type: "string", title: "Label" },
        { name: "href", type: "string", title: "Link" },
      ],
    }),
    defineField({
      name: "order",
      type: "number",
      title: "Sort order",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "blurb",
      media: "image",
    },
  },
});
