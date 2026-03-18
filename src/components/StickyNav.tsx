import { useEffect, useState } from "react";

const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-center px-4">
        <span
          className={`font-display text-lg font-bold transition-colors ${
            scrolled ? "text-primary" : "text-primary-foreground"
          }`}
        >
          Sensodyne Roadshow
        </span>
      </div>
    </nav>
  );
};

export default StickyNav;
