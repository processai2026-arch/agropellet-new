// sanity-studio/schemas/whyChooseUs.js
export default {
  name: "whyChooseUs",
  title: "Why Choose Us",
  type: "document",
  fields: [
    {
      name: "iconName",
      title: "Icon Name",
      type: "string",
      description:
        "Lucide icon name: Shield | TrendingDown | Leaf | Network | Clock | Award",
    },
    { name: "title", title: "Reason Title", type: "string" },
    { name: "description", title: "Description", type: "text", rows: 2 },
    { name: "order", title: "Sort Order", type: "number" },
  ],
  preview: {
    select: { title: "title", subtitle: "iconName" },
  },
};
