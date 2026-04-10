import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import productRose from "@/assets/product-rose.jpg";
import productCinnamon from "@/assets/product-cinnamon.jpg";
import productCoral from "@/assets/product-coral.jpg";
import productRed from "@/assets/product-red.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Shop Lip Glosses — MOFY BEAUTY" },
      { name: "description", content: "Browse our full collection of waterproof, vegan lip glosses in stunning shades." },
      { property: "og:title", content: "Shop Lip Glosses — MOFY BEAUTY" },
      { property: "og:description", content: "Browse our full collection of waterproof, vegan lip glosses." },
    ],
  }),
  component: ProductsPage,
});

const products = [
  { name: "Rose Kiss", description: "A soft rose pink with a dewy finish", image: productRose },
  { name: "Cinnamon", description: "Warm brown with golden undertones", image: productCinnamon },
  { name: "Coral Dream", description: "Vibrant coral for a bold look", image: productCoral },
  { name: "Red Velvet", description: "Classic red with mirror-like shine", image: productRed },
];

function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-body mb-3">Shop</p>
            <h1 className="font-heading text-4xl md:text-6xl font-light text-foreground">
              Our <span className="italic font-semibold">Collection</span>
            </h1>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, i) => (
              <motion.a
                key={product.name}
                href="https://tinyurl.com/MofyBeauty"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="overflow-hidden rounded-2xl bg-accent aspect-square">
                  <img
                    src={product.image}
                    alt={`MOFY BEAUTY ${product.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={800}
                  />
                </div>
                <h3 className="mt-4 font-heading text-xl text-foreground">{product.name}</h3>
                <p className="text-muted-foreground text-sm font-body mt-1">{product.description}</p>
              </motion.a>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="https://tinyurl.com/MofyBeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity inline-block"
            >
              Shop All on Our Store
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
