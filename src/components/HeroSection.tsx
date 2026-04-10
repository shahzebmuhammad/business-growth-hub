import { motion } from "framer-motion";
import heroImage from "@/assets/hero-lipgloss.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="MOFY BEAUTY lip gloss collection"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-primary text-sm tracking-[0.3em] uppercase font-body mb-4"
          >
            Waterproof · Cruelty Free · Vegan
          </motion.p>
          <h1 className="font-heading text-5xl md:text-7xl font-light leading-tight text-foreground">
            Glow<br />
            <span className="font-semibold italic">wherever</span><br />
            you go
          </h1>
          <p className="mt-6 text-muted-foreground font-body text-lg leading-relaxed max-w-md">
            Luxurious lip glosses crafted with love. Long-lasting, vibrant shades that make you shine all day.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://tinyurl.com/MofyBeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity"
            >
              Shop Collection
            </a>
            <a
              href="https://instagram.com/mofy.beauty"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-foreground/20 text-foreground px-8 py-3.5 rounded-full text-sm tracking-widest uppercase font-medium hover:bg-foreground/5 transition-colors"
            >
              Follow Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
