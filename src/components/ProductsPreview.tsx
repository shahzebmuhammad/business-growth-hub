import { motion } from "framer-motion";
import productRose from "@/assets/product-rose.jpg";
import productCinnamon from "@/assets/product-cinnamon.jpg";
import productCoral from "@/assets/product-coral.jpg";
import collectionImg from "@/assets/collection.jpg";

const shades = [
  { name: "Rose Kiss", image: productRose, color: "bg-rose-medium" },
  { name: "Cinnamon", image: productCinnamon, color: "bg-gold" },
  { name: "Coral Dream", image: productCoral, color: "bg-primary" },
];

export function ProductsPreview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-body mb-3">Our Collection</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            Find Your <span className="italic font-semibold">Perfect</span> Shade
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {shades.map((shade, i) => (
            <motion.a
              key={shade.name}
              href="https://tinyurl.com/MofyBeauty"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl bg-accent aspect-square">
                <img
                  src={shade.image}
                  alt={`MOFY BEAUTY ${shade.name} lip gloss`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </div>
              <h3 className="mt-4 font-heading text-xl text-foreground text-center">{shade.name}</h3>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          <img
            src={collectionImg}
            alt="MOFY BEAUTY full lip gloss collection"
            className="w-full h-64 md:h-96 object-cover"
            loading="lazy"
            width={1024}
            height={1024}
          />
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <div className="text-center">
              <h3 className="font-heading text-3xl md:text-5xl text-background font-light">
                The Full <span className="italic font-semibold">Collection</span>
              </h3>
              <a
                href="https://tinyurl.com/MofyBeauty"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-background text-foreground px-8 py-3 rounded-full text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity"
              >
                Shop All Shades
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
