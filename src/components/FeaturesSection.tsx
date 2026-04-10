import { motion } from "framer-motion";
import { Droplets, Leaf, Sparkles, Shield } from "lucide-react";

const features = [
  { icon: Droplets, title: "Waterproof", description: "Long-lasting formula that stays perfect all day" },
  { icon: Leaf, title: "Vegan & Clean", description: "100% cruelty-free and gluten-free ingredients" },
  { icon: Sparkles, title: "High Shine", description: "Mirror-like gloss finish that turns heads" },
  { icon: Shield, title: "Skin Safe", description: "Dermatologist-tested, gentle on all skin types" },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            Why <span className="italic font-semibold">MOFY</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
