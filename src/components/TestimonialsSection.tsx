import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah M.", text: "The best lip gloss I've ever used! Stays on all day and the colors are gorgeous.", rating: 5 },
  { name: "Nour A.", text: "Love that it's waterproof and vegan. The Cinnamon shade is absolutely stunning!", rating: 5 },
  { name: "Fatima K.", text: "Finally found a gloss that doesn't feel sticky. MOFY is my holy grail! 💖", rating: 5 },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-body mb-3">Reviews</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            What Our <span className="italic font-semibold">Customers</span> Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground font-body text-sm leading-relaxed mb-6">"{review.text}"</p>
              <p className="font-heading text-lg font-semibold text-foreground">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
