// sanity-studio/schemas/testimonial.js
export default {
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    { name: "name", title: "Client Name", type: "string" },
    { name: "role", title: "Role / Company", type: "string" },
    {
      name: "quote",
      title: "Testimonial Quote",
      type: "text",
      rows: 4,
    },
    {
      name: "stars",
      title: "Star Rating",
      type: "number",
      description: "1–5",
      validation: (Rule) => Rule.min(1).max(5),
    },
    { name: "order", title: "Sort Order", type: "number" },
  ],
  preview: {
    select: { title: "name", subtitle: "role" },
  },
};
