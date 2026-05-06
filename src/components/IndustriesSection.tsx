import { Factory, UtensilsCrossed, Shirt, Blocks, Droplets, Wheat } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, slideFromBottom, viewportOnce } from "@/lib/motion";
import { useSanity } from "@/hooks/useSanity";
import { industriesQuery } from "@/lib/queries";
import type { Industry } from "@/lib/sanityTypes";

const ICON_MAP: Record<string, React.ElementType> = {
  Factory, UtensilsCrossed, Shirt, Blocks, Droplets, Wheat,
};

const FALLBACK: Industry[] = [
  { _id: "1", iconName: "Factory", name: "Industrial Boilers", description: "Steam & hot water generation for manufacturing" },
  { _id: "2", iconName: "UtensilsCrossed", name: "Food Processing", description: "Drying, roasting, and thermal processing" },
  { _id: "3", iconName: "Shirt", name: "Textiles & Dyeing", description: "Steam for dyeing, finishing, and laundering" },
  { _id: "4", iconName: "Blocks", name: "Brick Kilns", description: "High-temperature firing with consistent fuel" },
  { _id: "5", iconName: "Droplets", name: "Chemical Plants", description: "Process heating and thermal utilities" },
  { _id: "6", iconName: "Wheat", name: "Agro Industries", description: "Rice mills, oil mills, and sugar refineries" },
];

const IndustriesSection = () => {
  const { data } = useSanity<Industry[]>(industriesQuery);
  const industries = data?.length ? data : FALLBACK;

  return (
    <section id="industries" className="py-20 md:py-28 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Industries We Serve
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">
            Reliable Biomass for Modern Industries
          </h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {industries.map((ind) => {
            const Icon = ICON_MAP[ind.iconName ?? ""] ?? Factory;
            return (
              <motion.div
                key={ind._id}
                variants={slideFromBottom}
                whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
                className="w-full bg-card rounded-2xl p-6 border border-border hover:border-primary/40 transition-colors text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-eco-light mx-auto flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-card-foreground">
                  {ind.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-2">{ind.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;