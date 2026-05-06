// Shared Sanity image reference shape
export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
}

// ── Hero ─────────────────────────────────────────────────────────────────────
export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroData {
  badge?: string;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  ctaPrimary?: string;
  ctaPhone?: string;
  image?: SanityImage;
  stats?: HeroStat[];
}

// ── About ─────────────────────────────────────────────────────────────────────
export interface AboutFeature {
  iconName?: string;
  title?: string;
  description?: string;
}

export interface AboutData {
  badge?: string;
  heading?: string;
  description?: string;
  features?: AboutFeature[];
}

// ── Product ───────────────────────────────────────────────────────────────────
export interface Product {
  _id: string;
  name?: string;
  description?: string;
  image?: SanityImage;
}

// ── Solution ──────────────────────────────────────────────────────────────────
export interface Solution {
  _id: string;
  iconName?: string;
  title?: string;
  description?: string;
  highlight?: string;
}

// ── Industry ──────────────────────────────────────────────────────────────────
export interface Industry {
  _id: string;
  iconName?: string;
  name?: string;
  description?: string;
}

// ── Why Choose Us ─────────────────────────────────────────────────────────────
export interface WhyChooseUsItem {
  _id: string;
  iconName?: string;
  title?: string;
  description?: string;
}

// ── Impact stat ───────────────────────────────────────────────────────────────
export interface ImpactStat {
  _id: string;
  value?: number;
  suffix?: string;
  label?: string;
  sub?: string;
}

// ── Testimonial ───────────────────────────────────────────────────────────────
export interface Testimonial {
  _id: string;
  name?: string;
  role?: string;
  quote?: string;
  stars?: number;
}

// ── Contact ───────────────────────────────────────────────────────────────────
export interface ContactData {
  contactName?: string;
  role?: string;
  phone?: string;
  whatsapp?: string;
  location?: string;
  email?: string;
}
