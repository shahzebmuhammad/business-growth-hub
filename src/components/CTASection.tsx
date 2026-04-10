import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-light text-primary-foreground">
            Ready to <span className="italic font-semibold">Glow</span>?
          </h2>
          <p className="mt-4 text-primary-foreground/80 font-body text-lg max-w-lg mx-auto">
            Join 25K+ beauty lovers. Follow us on Instagram and shop our exclusive collection.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://tinyurl.com/MofyBeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background text-foreground px-8 py-3.5 rounded-full text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity"
            >
              Shop Now
            </a>
            <a
              href="https://instagram.com/mofy.beauty"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-full text-sm tracking-widest uppercase font-medium hover:bg-primary-foreground/10 transition-colors inline-flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              @mofy.beauty
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
