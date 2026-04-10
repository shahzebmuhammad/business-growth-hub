import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ProductsPreview } from "@/components/ProductsPreview";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MOFY BEAUTY — Glow Wherever You Go" },
      { name: "description", content: "Luxurious waterproof lip glosses. Cruelty-free, vegan, and available in Egypt & UAE." },
      { property: "og:title", content: "MOFY BEAUTY — Glow Wherever You Go" },
      { property: "og:description", content: "Luxurious waterproof lip glosses. Cruelty-free, vegan, and available in Egypt & UAE." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductsPreview />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
