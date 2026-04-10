import { motion } from "framer-motion";
import { useState } from "react";
import swatchRose from "@/assets/swatch-rose.jpg";
import swatchCinnamon from "@/assets/swatch-cinnamon.jpg";
import swatchCoral from "@/assets/swatch-coral.jpg";
import swatchRed from "@/assets/swatch-red.jpg";

const shades = [
  {
    name: "Rose Kiss",
    tagline: "Soft & Romantic",
    color: "oklch(0.7 0.12 350)",
    description: "A delicate rosy pink with a dewy, glass-like finish. Perfect for everyday elegance.",
    swatch: swatchRose,
    undertone: "Cool pink",
    finish: "Glossy sheer",
    bestFor: "Fair to medium skin tones",
  },
  {
    name: "Cinnamon",
    tagline: "Warm & Spiced",
    color: "oklch(0.65 0.1 50)",
    description: "Rich cinnamon brown with golden micro-shimmer. A sophisticated neutral for any occasion.",
    swatch: swatchCinnamon,
    undertone: "Warm golden",
    finish: "Shimmer",
    bestFor: "Medium to deep skin tones",
  },
  {
    name: "Coral Dream",
    tagline: "Fresh & Vibrant",
    color: "oklch(0.6 0.15 350)",
    description: "Bright coral with a creamy, opaque pigment. Bold and joyful color payoff.",
    swatch: swatchCoral,
    undertone: "Warm coral",
    finish: "Creamy opaque",
    bestFor: "All skin tones",
  },
  {
    name: "Red Velvet",
    tagline: "Bold & Classic",
    color: "oklch(0.5 0.2 20)",
    description: "Deep, sultry red with a mirror-like high-shine finish. The ultimate statement shade.",
    swatch: swatchRed,
    undertone: "Neutral red",
    finish: "High-shine",
    bestFor: "All skin tones",
  },
];

export function ShadeComparison() {
  const [activeShade, setActiveShade] = useState(0);
  const [compareShade, setCompareShade] = useState<number | null>(null);

  const current = shades[activeShade];
  const compare = compareShade !== null ? shades[compareShade] : null;

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-body mb-3">Shade Finder</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            Compare <span className="italic font-semibold">Your Shades</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body max-w-lg mx-auto">
            Tap any shade to see details. Select a second shade to compare side by side.
          </p>
        </motion.div>

        {/* Shade selector pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {shades.map((shade, i) => (
            <button
              key={shade.name}
              onClick={() => {
                if (activeShade === i) return;
                if (compareShade === i) {
                  setCompareShade(null);
                  return;
                }
                if (compareShade === null && activeShade !== i) {
                  setCompareShade(i);
                } else {
                  setActiveShade(i);
                  setCompareShade(null);
                }
              }}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full border font-body text-sm transition-all duration-300 ${
                activeShade === i
                  ? "border-primary bg-primary/10 text-foreground shadow-md"
                  : compareShade === i
                    ? "border-gold bg-gold/10 text-foreground shadow-sm"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              <span
                className="w-5 h-5 rounded-full border border-border shadow-sm"
                style={{ backgroundColor: shade.color }}
              />
              {shade.name}
              {activeShade === i && (
                <span className="text-[10px] bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                  Selected
                </span>
              )}
              {compareShade === i && (
                <span className="text-[10px] bg-gold text-foreground px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                  Compare
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Comparison view */}
        <div className={`grid ${compare ? "md:grid-cols-2" : "md:grid-cols-1 max-w-2xl mx-auto"} gap-8`}>
          <ShadeCard shade={current} label="Selected" />
          {compare && <ShadeCard shade={compare} label="Comparing" />}
        </div>

        {!compare && (
          <p className="text-center text-muted-foreground font-body text-sm mt-8">
            Tap another shade above to compare side by side
          </p>
        )}

        <div className="text-center mt-12">
          <a
            href="https://tinyurl.com/MofyBeauty"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity inline-block"
          >
            Shop {current.name}
          </a>
        </div>
      </div>
    </section>
  );
}

function ShadeCard({ shade, label }: { shade: typeof shades[0]; label: string }) {
  return (
    <motion.div
      key={shade.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-card rounded-3xl overflow-hidden border border-border shadow-sm"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={shade.swatch}
          alt={`${shade.name} lip swatch`}
          className="w-full h-full object-cover"
          loading="lazy"
          width={800}
          height={600}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-background/80 backdrop-blur-sm text-foreground text-xs font-body font-medium px-3 py-1 rounded-full">
            {label}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="w-8 h-8 rounded-full border-2 border-border shadow"
            style={{ backgroundColor: shade.color }}
          />
          <div>
            <h3 className="font-heading text-2xl text-foreground">{shade.name}</h3>
            <p className="text-primary text-sm font-body">{shade.tagline}</p>
          </div>
        </div>
        <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
          {shade.description}
        </p>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-accent rounded-xl p-3 text-center">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-body mb-1">Undertone</p>
            <p className="text-xs font-medium text-foreground font-body">{shade.undertone}</p>
          </div>
          <div className="bg-accent rounded-xl p-3 text-center">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-body mb-1">Finish</p>
            <p className="text-xs font-medium text-foreground font-body">{shade.finish}</p>
          </div>
          <div className="bg-accent rounded-xl p-3 text-center">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-body mb-1">Best For</p>
            <p className="text-xs font-medium text-foreground font-body">{shade.bestFor}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
