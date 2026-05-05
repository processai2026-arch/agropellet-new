import { motion } from "framer-motion";
import { fadeUp, staggerFast, parallaxCard, parallaxImage, viewportOnce } from "@/lib/motion";
import sawDust from "@/assets/products/saw-dust.jpg";
import sawDustWebp from "@/assets/products/saw-dust.webp";
import coffeeHusk from "@/assets/products/coffee-husk.jpg";
import coffeeHuskWebp from "@/assets/products/coffee-husk.webp";
import riceHusk from "@/assets/products/rice-husk.jpg";
import riceHuskWebp from "@/assets/products/rice-husk.webp";
import groundnutShell from "@/assets/products/groundnut-shell.jpg";
import groundnutShellWebp from "@/assets/products/groundnut-shell.webp";
import wasteWood from "@/assets/products/waste-wood.jpg";
import wasteWoodWebp from "@/assets/products/waste-wood.webp";
import cornCob from "@/assets/products/corn-cob.jpg";
import cornCobWebp from "@/assets/products/corn-cob.webp";
import cornStalk from "@/assets/products/corn-stalk.jpg";
import cornStalkWebp from "@/assets/products/corn-stalk.webp";
import stovesBurners from "@/assets/products/stoves-burners.jpg";
import stovesBurnersWebp from "@/assets/products/stoves-burners.webp";
import biomassPellet from "@/assets/biomass-pellet.png";
import biomassPelletWebp from "@/assets/biomass-pellet.webp";

const products = [
  { img: sawDust, webp: sawDustWebp, name: "Saw Dust", desc: "Fine wood particles ideal for boiler fuel and pellet manufacturing" },
  { img: coffeeHusk, webp: coffeeHuskWebp, name: "Coffee Husk", desc: "High-calorific agricultural byproduct from coffee processing" },
  { img: riceHusk, webp: riceHuskWebp, name: "Rice Husk", desc: "Abundant agro-residue perfect for thermal energy generation" },
  { img: groundnutShell, webp: groundnutShellWebp, name: "Groundnut Shell", desc: "Excellent biomass fuel with consistent burning properties" },
  { img: wasteWood, webp: wasteWoodWebp, name: "Waste Wood", desc: "Recycled wood materials for sustainable energy production" },
  { img: cornCob, webp: cornCobWebp, name: "Corn Cob", desc: "Dense biomass fuel with high heat output per unit" },
  { img: cornStalk, webp: cornStalkWebp, name: "Corn Stalk", desc: "Versatile agricultural waste for industrial combustion" },
  { img: biomassPellet, webp: biomassPelletWebp, name: "Biomass Pellets", desc: "Compressed, uniform fuel for automated boiler systems" },
  { img: stovesBurners, webp: stovesBurnersWebp, name: "Stoves & Burners", desc: "Efficient biomass combustion equipment for industries" },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Products
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">
            Biomass Fuels & Solutions
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            We source, aggregate, and supply a wide range of agro-residues and
            biomass fuels tailored to your industrial energy needs.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerFast}
        >
          {products.map((p) => (
            <motion.div
              key={p.name}
              variants={parallaxCard}
              whileHover={{ y: -10, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 shadow-sm hover:shadow-2xl transition-[box-shadow,border-color] duration-300 group cursor-pointer"
            >
              <div className="aspect-square overflow-hidden bg-muted/50">
                <picture>
                  <source srcSet={p.webp} type="image/webp" />
                  <motion.img
                    variants={parallaxImage}
                    src={p.img}
                    alt={`${p.name} - biomass fuel product`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover will-change-transform group-hover:scale-[1.08] transition-transform duration-500 ease-out"
                  />
                </picture>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {p.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-2">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;