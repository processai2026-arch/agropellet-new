// sanity-studio/schemas/industry.js
export default {
  name: "industry",
  title: "Industries",
  type: "document",
  fields: [
    {
      name: "iconName",
      title: "Icon Name",
      type: "string",
      description:
        "Lucide icon name: Factory | UtensilsCrossed | Shirt | Blocks | Droplets | Wheat",
    },
    { name: "name", title: "Industry Name", type: "string" },
    { name: "description", title: "Short Description", type: "text", rows: 2 },
    { name: "order", title: "Sort Order", type: "number" },
  ],
  preview: {
    select: { title: "name", subtitle: "description" },
  },
};
