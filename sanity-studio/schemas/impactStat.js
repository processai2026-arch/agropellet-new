// sanity-studio/schemas/impactStat.js
export default {
  name: "impactStat",
  title: "Impact Statistics",
  type: "document",
  fields: [
    { name: "value", title: "Numeric Value", type: "number" },
    { name: "suffix", title: "Suffix (e.g. +, %)", type: "string" },
    { name: "label", title: "Stat Label", type: "string" },
    { name: "sub", title: "Sub-label", type: "string" },
    { name: "order", title: "Sort Order", type: "number" },
  ],
  preview: {
    select: { title: "label", subtitle: "value" },
  },
};
