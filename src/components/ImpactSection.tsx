import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";
import { fadeUp, staggerContainer, cardItem, viewportOnce } from "@/lib/motion";

const stats = [
  { value: 30, suffix: "%", label: "Average Fuel Cost Savings", sub: "for our industrial clients" },
  { value: 5000, suffix: "+", label: "Tons CO₂ Reduced", sub: "annually through biomass adoption" },
  { value: 10000, suffix: "+", label: "Tons Biomass Supplied", sub: "turning waste into valuable energy" },
  { value: 100, suffix: "+", label: "Farmer Livelihoods", sub: "supported through agro-residue procurement" },
];

const ImpactSection = () => {
  return (
    <section
      id="impact"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(200 10% 9%) 0%, hsl(200 8% 14%) 52%, hsl(145 42% 22%) 100%)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary" style={{ color: 'hsl(145 63% 55%)' }}>
            Our Impact
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3" style={{ color: 'hsl(0 0% 100%)' }}>
            Driving the Circular Economy
          </h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto" style={{ color: 'hsl(0 0% 86%)' }}>
            Every ton of agro-residue we trade prevents open burning, reduces
            carbon emissions, and creates value for farmers and industries alike.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={cardItem}
              whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
              className="text-center p-6 rounded-2xl border backdrop-blur-sm shadow-xl"
              style={{
                borderColor: 'hsl(0 0% 100% / 0.22)',
                backgroundColor: 'hsl(0 0% 0% / 0.28)',
              }}
            >
              <div
                className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-2"
                style={{ color: 'hsl(145 70% 68%)' }}
              >
                <CountUp value={s.value} suffix={s.suffix} duration={2.5} />
              </div>
              <div className="font-semibold text-sm" style={{ color: 'hsl(0 0% 100%)' }}>
                {s.label}
              </div>
              <div className="text-xs mt-1" style={{ color: 'hsl(0 0% 82%)' }}>
                {s.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;