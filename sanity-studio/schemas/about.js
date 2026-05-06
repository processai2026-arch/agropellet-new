// sanity-studio/schemas/about.js
export default {
  name: "about",
  title: "About Section",
  type: "document",
  fields: [
    {
      name: "badge",
      title: "Badge Text",
      type: "string",
      initialValue: "About Us",
    },
    {
      name: "heading",
      title: "Section Heading",
      type: "string",
      initialValue: "Bridging Agriculture & Industry",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      initialValue:
        "Agro Power Pellet is a leading trader and supply chain solutions provider in the bioenergy and agro-residue sector. We connect industrial energy consumers with sustainable fuel sources, enabling cost savings, operational efficiency, and reduced carbon emissions.",
    },
    {
      name: "features",
      title: "Feature Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "iconName",
              title: "Icon Name",
              type: "string",
              description:
                "Lucide icon name: Link | Truck | BarChart3 | Shield | Network | Clock | Award | Leaf",
            },
            { name: "title", title: "Feature Title", type: "string" },
            { name: "description", title: "Feature Description", type: "text", rows: 2 },
          ],
          preview: {
            select: { title: "title", subtitle: "iconName" },
          },
        },
      ],
    },
  ],
};
