import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "quote", type: "text" }),
    defineField({ name: "author", type: "string" }),
  ],
});

