import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "blurb", type: "text" }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "comingSoon", type: "boolean" }),
    defineField({
      name: "mainImage",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "linkUrl", type: "url", description: "External case study or live project URL" }),
  ],
});

