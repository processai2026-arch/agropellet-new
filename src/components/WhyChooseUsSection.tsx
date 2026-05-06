import { Shield, TrendingDown, Leaf, Network, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, blurFocus, blurFocusContainer, viewportOnce } from "@/lib/motion";
import { useSanity } from "@/hooks/useSanity";
import { whyChooseUsQuery } from "@/lib/queries";
import type { WhyChooseUsItem } from "@/lib/sanityTypes";

const ICON_MAP: Record<string, React.ElementType> = {
  Shield, TrendingDown, Leaf, Network, Clock, Award,
};

const FALLBACK: WhyChooseUsItem[] = [
  { _id: "1", iconName: "Shield", title: "Reliable Supply", description: "Guaranteed year-round availability with buffer stocks and multi-source procurement." },
  { _id: "2", iconName: "TrendingDown", title: "Cost Efficient", description: "Competitive pricing through direct farmer networks and logistics optimization." },
  { _id: "3", iconName: "Leaf", title: "100% Sustainable", description: "Every ton of biomass we supply prevents fossil fuel CO₂ emissions." },
  { _id: "4", iconName: "Network", title: "Strong Network", description: "Pan-India aggregation network spanning 10+ states and 100+ suppliers." },
  { _id: "5", iconName: "Clock", title: "On-Time Delivery", description: "Dedicated fleet management ensures your operations never stop." },
  { _id: "6", iconName: "Award", title: "Quality Certified", description: "Lab-tested moisture content, calorific value, and ash percentage." },
];

const WhyChooseUsSection = () => {
  const { data } = useSanity<WhyChooseUsItem[]>(whyChooseUsQuery);
  const reasons = data?.length ? data : FALLBACK;

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">
            Your Trusted Biomass Partner
          </h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={blurFocusContainer}
        >
          {reasons.map((r) => {
            const Icon = ICON_MAP[r.iconName ?? ""] ?? Shield;
            return (
              <motion.div
                key={r._id}
                variants={blurFocus}
                whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
                className="flex gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-earth-light flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-earth" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-card-foreground">{r.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{r.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
