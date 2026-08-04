import { motion } from "framer-motion";
import { fadeUp, staggerFast, parallaxCard, parallaxImage, viewportOnce } from "@/lib/motion";
import { useSanity } from "@/hooks/useSanity";
import { productsQuery } from "@/lib/queries";
import { urlFor } from "@/lib/imageBuilder";
import type { Product } from "@/lib/sanityTypes";

// The canonical product list. Sanity may override a card's copy or image, but
// this array decides which products exist and in what order.
import sawDust from "@/assets/products/saw-dust.webp";
import coffeeHusk from "@/assets/products/coffee-husk.webp";
import riceHusk from "@/assets/products/rice-husk.webp";
import groundnutShell from "@/assets/products/groundnut-shell.webp";
import wasteWood from "@/assets/products/waste-wood.webp";
import cornCob from "@/assets/products/corn-cob.webp";
import biomassBurner from "@/assets/products/biomass-burner.webp";
import biomassStove from "@/assets/products/biomass-stove.webp";
import biomassPellet from "@/assets/biomass-pellet.webp";

const PRODUCTS = [
  { _id: "1", name: "Biomass Pellets", description: "Compressed, uniform fuel for automated boiler systems", image: biomassPellet },
  { _id: "2", name: "Biomass Stove", description: "Clean-burning biomass stove for commercial kitchens and heating", image: biomassStove },
  { _id: "3", name: "Biomass Burner", description: "Automated industrial burner for boilers, dryers and thermic heaters", image: biomassBurner },
  { _id: "4", name: "Saw Dust", description: "Fine wood particles ideal for boiler fuel and pellet manufacturing", image: sawDust },
  { _id: "5", name: "Coffee Husk", description: "High-calorific agricultural byproduct from coffee processing", image: coffeeHusk },
  { _id: "6", name: "Rice Husk", description: "Abundant agro-residue perfect for thermal energy generation", image: riceHusk },
  { _id: "7", name: "Groundnut Shell", description: "Excellent biomass fuel with consistent burning properties", image: groundnutShell },
  { _id: "8", name: "Waste Wood", description: "Recycled wood materials for sustainable energy production", image: wasteWood },
  { _id: "9", name: "Corn Cob", description: "Dense biomass fuel with high heat output per unit", image: cornCob },
];

interface RenderProduct {
  _id: string;
  name: string;
  description: string;
  sanityImage: Product["image"] | null;
  fallbackImage: string;
}

const ProductsSection = () => {
  const { data, loading } = useSanity<Product[]>(productsQuery);

  // Match CMS documents to local products by name rather than by position, so a
  // stale or missing Sanity entry can never drop a product from the grid.
  const products: RenderProduct[] = PRODUCTS.map((p) => {
    const match = data?.find((d) => d.name?.trim().toLowerCase() === p.name.toLowerCase());
    return {
      _id: p._id,
      name: match?.name ?? p.name,
      description: match?.description ?? p.description,
      sanityImage: match?.image ?? null,
      fallbackImage: p.image as string,
    };
  });

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
            Biomass Fuels &amp; Solutions
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            We source, aggregate, and supply a wide range of agro-residues and biomass fuels
            tailored to your industrial energy needs.
          </p>
        </motion.div>

        {loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl overflow-hidden border border-border animate-pulse"
              >
                <div className="aspect-square bg-muted" />
                <div className="p-6 space-y-2">
                  <div className="h-5 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && (
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerFast}
          >
            {products.map((p) => {
              const imgUrl = p.sanityImage
                ? urlFor(p.sanityImage).width(800).height(800).fit("crop").quality(80).url()
                : p.fallbackImage;

              return (
                <motion.div
                  key={p._id}
                  variants={parallaxCard}
                  whileHover={{ y: -10, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                  className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 shadow-sm hover:shadow-2xl transition-[box-shadow,border-color] duration-300 group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden bg-muted/50">
                    <motion.img
                      variants={parallaxImage}
                      src={imgUrl}
                      alt={`${p.name} - biomass fuel product`}
                      loading="lazy"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover will-change-transform group-hover:scale-[1.08] transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2">{p.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;