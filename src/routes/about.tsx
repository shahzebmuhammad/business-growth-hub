import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Leaf, Droplets, Heart, Globe } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MOFY BEAUTY — Our Story" },
      { name: "description", content: "Learn about MOFY BEAUTY's mission to create clean, luxurious lip glosses for every skin tone." },
      { property: "og:title", content: "About MOFY BEAUTY — Our Story" },
      { property: "og:description", content: "Clean, luxurious lip glosses for every skin tone." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-body mb-3">Our Story</p>
            <h1 className="font-heading text-4xl md:text-6xl font-light text-foreground">
              About <span className="italic font-semibold">MOFY</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg mx-auto text-center"
          >
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              MOFY BEAUTY was born from a simple belief: every woman deserves to glow. 
              Our luxurious lip glosses are crafted with clean, vegan ingredients that deliver 
              stunning color and long-lasting wear without compromising on ethics.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-12">
              Available in Egypt and the UAE, we're proud to serve a growing community of 
              25,000+ beauty enthusiasts who share our vision of cruelty-free, waterproof beauty 
              that lasts from morning to night.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8 mt-12">
            {[
              { icon: Leaf, title: "Vegan & Cruelty-Free", text: "Never tested on animals. Always clean ingredients." },
              { icon: Droplets, title: "Waterproof Formula", text: "Lasts all day without smudging or fading." },
              { icon: Heart, title: "Made With Love", text: "Every shade is carefully curated for all skin tones." },
              { icon: Globe, title: "Egypt & UAE", text: "Proudly serving the Middle East and growing." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-accent rounded-2xl p-8 text-center"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
