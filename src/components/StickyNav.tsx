import { useEffect, useState } from "react";
import sensodyneLogo from "@/assets/sensodyne-logo.jpg";

const navLinks = [
  { id: "about", label: "O roadshow" },
  { id: "locations", label: "Místa" },
  { id: "gallery", label: "Galerie" },
  { id: "products", label: "Produkty" },
  { id: "feedback", label: "Kontakt" },
];

const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-elegant border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
          <img
            src={sensodyneLogo}
            alt="Sensodyne"
            className={`h-8 rounded transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
          />
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`px-3 py-1.5 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default StickyNav;
