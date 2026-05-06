// sanity-studio/schemas/hero.js
export default {
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    {
      name: "badge",
      title: "Badge Text",
      type: "string",
      description: "Small pill text above heading (e.g. India's Trusted Partner)",
      initialValue: "India's Trusted Biomass Supply Chain Partner",
    },
    {
      name: "title",
      title: "Main Heading",
      type: "string",
      initialValue: "Turning Agricultural Waste into",
    },
    {
      name: "titleHighlight",
      title: "Highlighted Word(s)",
      type: "string",
      description: "Text in the green gradient colour",
      initialValue: "Industrial Energy",
    },
    {
      name: "subtitle",
      title: "Subtitle / Description",
      type: "text",
      rows: 3,
      initialValue:
        "Smart supply chains. Sustainable energy. We help industries reduce fuel costs and increase profitability with reliable biomass solutions.",
    },
    {
      name: "ctaPrimary",
      title: "Primary CTA Button Text",
      type: "string",
      initialValue: "Get a Free Quote",
    },
    {
      name: "ctaPhone",
      title: "Phone Number (CTA)",
      type: "string",
      initialValue: "+91 9940099060",
    },
    {
      name: "image",
      title: "Hero Background Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "stats",
      title: "Statistics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Number Value", type: "number" },
            { name: "suffix", title: "Suffix (e.g. +, %)", type: "string" },
            { name: "label", title: "Label", type: "string" },
          ],
          preview: {
            select: { title: "label", subtitle: "value" },
          },
        },
      ],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "badge" },
  },
};
