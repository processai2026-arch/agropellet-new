import { Truck, Link, BarChart3, Shield, Network, Clock, Award, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { blurFocus, blurFocusContainer, viewportOnce } from "@/lib/motion";
import { useSanity } from "@/hooks/useSanity";
import { aboutQuery } from "@/lib/queries";
import type { AboutData } from "@/lib/sanityTypes";

// Map icon name strings → Lucide components
const ICON_MAP: Record<string, React.ElementType> = {
  Link, Truck, BarChart3, Shield, Network, Clock, Award, Leaf,
};

const FALLBACK_FEATURES: Required<AboutData>["features"] = [
  { iconName: "Link", title: "Supply Chain Mastery", description: "End-to-end sourcing, aggregation, and delivery of agro-residues with optimized logistics." },
  { iconName: "Truck", title: "Pan-India Network", description: "Strong connections with farmers, aggregators, and industrial consumers across regions." },
  { iconName: "BarChart3", title: "Cost Optimization", description: "Data-driven supply planning that reduces fuel procurement costs by up to 30%." },
  { iconName: "Shield", title: "Quality Assurance", description: "Rigorous quality checks ensure consistent moisture, calorific value, and ash content." },
];

const FALLBACK: Required<AboutData> = {
  badge: "About Us",
  heading: "Bridging Agriculture & Industry",
  description:
    "Agro Power Pellet is a leading trader and supply chain solutions provider in the bioenergy and agro-residue sector. We connect industrial energy consumers with sustainable fuel sources, enabling cost savings, operational efficiency, and reduced carbon emissions.",
  features: FALLBACK_FEATURES,
};

const AboutSection = () => {
  const { data } = useSanity<AboutData>(aboutQuery);

  const about = {
    badge: data?.badge ?? FALLBACK.badge,
    heading: data?.heading ?? FALLBACK.heading,
    description: data?.description ?? FALLBACK.description,
    features: data?.features?.length ? data.features : FALLBACK.features,
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={blurFocus}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            {about.badge}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">
            {about.heading}
          </h2>
          <p className="text-muted-foreground text-lg mt-4">{about.description}</p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={blurFocusContainer}
        >
          {about.features.map((f) => {
            const Icon = ICON_MAP[f.iconName ?? ""] ?? Shield;
            return (
              <motion.div
                key={f.title}
                variants={blurFocus}
                whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/40 transition-colors hover:shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-eco-light flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-card-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm">{f.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
