import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Instagram, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-heading text-2xl md:text-3xl font-semibold tracking-wide text-foreground">
          MOFY BEAUTY
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm tracking-widest uppercase">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
            Home
          </Link>
          <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
            Products
          </Link>
          <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
            About
          </Link>
          <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://instagram.com/mofy.beauty" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://tinyurl.com/MofyBeauty" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-xs tracking-widest uppercase font-medium hover:opacity-90 transition-opacity">
            Shop Now
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-6 py-8 font-body text-sm tracking-widest uppercase">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/products" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors">Products</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors">Contact</Link>
              <a href="https://tinyurl.com/MofyBeauty" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-xs tracking-widest uppercase font-medium">
                Shop Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
