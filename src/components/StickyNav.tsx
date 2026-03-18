import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <span
          className={`font-display font-bold text-lg transition-colors ${
            scrolled ? "text-primary" : "text-primary-foreground"
          }`}
        >
          Sensodyne Roadshow
        </span>
        <button
          onClick={() => scrollTo("locations")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm font-semibold transition-all ${
            scrolled
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 backdrop-blur-sm"
          }`}
        >
          <MapPin className="h-4 w-4" />
          Najít místo
        </button>
      </div>
    </nav>
  );
};

export default StickyNav;
