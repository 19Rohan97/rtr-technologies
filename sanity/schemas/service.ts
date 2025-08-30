import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "desc", type: "text" }),
    defineField({
      name: "icon",
      type: "string",
      description: "Icon key (Code, Search, BarChart3, TrendingUp)",
    }),
    defineField({ name: "ctaLabel", type: "string", initialValue: "Request a Quote" }),
    defineField({ name: "ctaHref", type: "string", initialValue: "/contact" }),
  ],
});

