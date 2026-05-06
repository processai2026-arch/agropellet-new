// sanity-studio/schemas/solution.js
export default {
  name: "solution",
  title: "Solutions",
  type: "document",
  fields: [
    {
      name: "iconName",
      title: "Icon Name",
      type: "string",
      description: "Lucide icon name: Flame | TrendingDown | Truck | Leaf",
    },
    { name: "title", title: "Solution Title", type: "string" },
    { name: "description", title: "Description", type: "text", rows: 3 },
    { name: "highlight", title: "Highlight Badge Text", type: "string" },
    { name: "order", title: "Sort Order", type: "number" },
  ],
  preview: {
    select: { title: "title", subtitle: "highlight" },
  },
};
