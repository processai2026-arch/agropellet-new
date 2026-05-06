// GROQ queries – one per section, exported for use in hooks/components

/** Hero section */
export const heroQuery = `*[_type == "hero"][0]{
  badge,
  title,
  titleHighlight,
  subtitle,
  ctaPrimary,
  ctaPhone,
  image,
  stats[]{
    value,
    suffix,
    label
  }
}`;

/** About section */
export const aboutQuery = `*[_type == "about"][0]{
  badge,
  heading,
  description,
  features[]{
    iconName,
    title,
    description
  }
}`;

/** Products section */
export const productsQuery = `*[_type == "product"] | order(order asc){
  _id,
  name,
  description,
  image
}`;

/** Solutions section */
export const solutionsQuery = `*[_type == "solution"] | order(order asc){
  _id,
  iconName,
  title,
  description,
  highlight
}`;

/** Industries section */
export const industriesQuery = `*[_type == "industry"] | order(order asc){
  _id,
  iconName,
  name,
  description
}`;

/** Why Choose Us section */
export const whyChooseUsQuery = `*[_type == "whyChooseUs"] | order(order asc){
  _id,
  iconName,
  title,
  description
}`;

/** Impact / Stats section */
export const impactQuery = `*[_type == "impactStat"] | order(order asc){
  _id,
  value,
  suffix,
  label,
  sub
}`;

/** Testimonials */
export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc){
  _id,
  name,
  role,
  quote,
  stars
}`;

/** Contact info */
export const contactQuery = `*[_type == "contactInfo"][0]{
  contactName,
  role,
  phone,
  whatsapp,
  location,
  email
}`;
