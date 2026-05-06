// sanity-studio/schemas/product.js
export default {
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
      rows: 2,
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "order",
      title: "Sort Order",
      type: "number",
      description: "Lower numbers appear first",
    },
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
  orderings: [
    {
      title: "Sort Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};
