import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";
import insta4 from "@/assets/insta-4.jpg";
import insta5 from "@/assets/insta-5.jpg";
import insta6 from "@/assets/insta-6.jpg";

const posts = [
  { image: insta1, alt: "Rose lip gloss swatch on lips" },
  { image: insta2, alt: "MOFY BEAUTY flat lay with flowers" },
  { image: insta3, alt: "Coral Dream shade close-up" },
  { image: insta4, alt: "Customer selfie with MOFY lip gloss" },
  { image: insta5, alt: "Lip gloss collection on marble" },
  { image: insta6, alt: "Behind the scenes photoshoot" },
];

export function InstagramFeed() {
  return (
    <section className="py-24 bg-accent/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-body mb-3">Follow Us</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            <span className="italic font-semibold">@mofy.beauty</span> on Instagram
          </h2>
          <p className="mt-4 text-muted-foreground font-body max-w-md mx-auto">
            Join our community for beauty tips, new shade reveals, and exclusive behind-the-scenes content.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/mofy.beauty"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com/mofy.beauty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3 rounded-full text-sm tracking-widest uppercase font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Instagram className="w-4 h-4" />
            Follow @mofy.beauty
          </a>
        </motion.div>
      </div>
    </section>
  );
}
