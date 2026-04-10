import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact MOFY BEAUTY" },
      { name: "description", content: "Get in touch with MOFY BEAUTY. DM us on Instagram or reach out for wholesale inquiries." },
      { property: "og:title", content: "Contact MOFY BEAUTY" },
      { property: "og:description", content: "Get in touch with MOFY BEAUTY for orders and inquiries." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
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
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-body mb-3">Get In Touch</p>
            <h1 className="font-heading text-4xl md:text-6xl font-light text-foreground">
              Contact <span className="italic font-semibold">Us</span>
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.a
              href="https://instagram.com/mofy.beauty"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-accent rounded-2xl p-8 text-center hover:shadow-md transition-shadow"
            >
              <Instagram className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Instagram</h3>
              <p className="text-muted-foreground text-sm font-body">@mofy.beauty</p>
              <p className="text-primary text-sm font-body mt-2">DM us anytime →</p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-accent rounded-2xl p-8 text-center"
            >
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground text-sm font-body">🇪🇬 Egypt &nbsp;·&nbsp; 🇦🇪 UAE</p>
            </motion.div>

            <motion.a
              href="https://tinyurl.com/MofyBeauty"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-accent rounded-2xl p-8 text-center hover:shadow-md transition-shadow"
            >
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Shop</h3>
              <p className="text-muted-foreground text-sm font-body">Visit our store</p>
              <p className="text-primary text-sm font-body mt-2">tinyurl.com/MofyBeauty →</p>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 bg-primary rounded-3xl p-12 text-center"
          >
            <h2 className="font-heading text-3xl text-primary-foreground font-light">
              Want to <span className="italic font-semibold">collaborate</span>?
            </h2>
            <p className="text-primary-foreground/80 font-body mt-3 max-w-md mx-auto">
              For wholesale inquiries, collaborations, or press, reach out to us via Instagram DM.
            </p>
            <a
              href="https://instagram.com/mofy.beauty"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-background text-foreground px-8 py-3.5 rounded-full text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-4 h-4" />
              Message Us
            </a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
