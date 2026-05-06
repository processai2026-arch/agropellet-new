// sanity-studio/sanity.config.js
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas/index.js";

export default defineConfig({
  // ─── Replace these values ──────────────────────────────────────────────────
  name: "agropellet",
  title: "Agro Power Pellet CMS",
  projectId: "YOUR_PROJECT_ID",   // ← from sanity.io/manage
  dataset: "production",
  // ───────────────────────────────────────────────────────────────────────────

  plugins: [
    structureTool(),
    visionTool(),          // lets you run GROQ queries in the Studio
  ],

  schema: {
    types: schemaTypes,
  },
});
