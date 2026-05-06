import { createClient } from "@sanity/client";

// ─── Fill these in after running: npm create sanity@latest ───────────────────
// projectId  : found at sanity.io/manage → your project → API settings
// dataset    : usually "production"
// apiVersion : use today's date, e.g. "2024-01-01"
// ─────────────────────────────────────────────────────────────────────────────
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "YOUR_PROJECT_ID",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || "2024-01-01",
  useCdn: true, // `true` for faster reads; `false` if you need fresh data always
});

/** Thin wrapper – returns `null` on network/parse errors instead of throwing */
export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  try {
    return await sanityClient.fetch<T>(query, params);
  } catch (err) {
    console.error("[Sanity] fetch error:", err);
    return null;
  }
}
