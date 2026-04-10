import { Instagram, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-4">MOFY BEAUTY</h3>
            <p className="text-background/70 font-body text-sm leading-relaxed">
              Glow wherever you go 💖<br />
              Waterproof · Cruelty Free · Gluten Free · Vegan 🌿
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="https://tinyurl.com/MofyBeauty" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">Shop Now</a></li>
              <li><a href="https://instagram.com/mofy.beauty" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg font-medium mb-4">Available In</h4>
            <p className="text-background/70 text-sm">🇪🇬 Egypt &nbsp;·&nbsp; 🇦🇪 UAE</p>
            <div className="mt-6 flex gap-4">
              <a href="https://instagram.com/mofy.beauty" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/50 text-xs">
          <p>© {new Date().getFullYear()} MOFY BEAUTY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
