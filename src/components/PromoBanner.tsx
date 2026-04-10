import { motion } from "framer-motion";
import { Gift, X } from "lucide-react";
import { useState } from "react";

export function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="bg-primary text-primary-foreground relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-rose-medium/30 via-transparent to-gold/30" />
      <div className="relative max-w-7xl mx-auto px-6 py-3 flex items-center justify-center gap-3">
        <Gift className="w-4 h-4 shrink-0 animate-bounce" />
        <p className="text-sm font-body tracking-wide text-center">
          <span className="font-semibold">Buy 2, Get 1 FREE</span>
          <span className="hidden sm:inline"> — Limited time offer on all lip glosses!</span>
          <span className="sm:hidden"> — All lip glosses!</span>
        </p>
        <a
          href="https://tinyurl.com/MofyBeauty"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 bg-primary-foreground text-primary px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          Shop Now
        </a>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Close banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
