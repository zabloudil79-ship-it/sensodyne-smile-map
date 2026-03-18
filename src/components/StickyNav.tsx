import { useEffect, useState } from "react";
import sensodyneLogo from "@/assets/sensodyne-logo.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { id: "about", label: t.nav.about[lang] },
    { id: "locations", label: t.nav.locations[lang] },
    { id: "gallery", label: t.nav.gallery[lang] },
    { id: "products", label: t.nav.products[lang] },
    { id: "feedback", label: t.nav.feedback[lang] },
  ];

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

          {/* Language switcher */}
          <div className={`ml-3 flex items-center rounded-full border transition-all duration-300 ${
            scrolled ? "border-border" : "border-primary-foreground/30"
          }`}>
            <button
              onClick={() => setLang("cs")}
              className={`px-2.5 py-1 rounded-full font-body text-xs font-bold tracking-wide transition-all duration-300 ${
                lang === "cs"
                  ? scrolled
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary-foreground text-foreground"
                  : scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-primary-foreground/60 hover:text-primary-foreground"
              }`}
            >
              CZ
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-full font-body text-xs font-bold tracking-wide transition-all duration-300 ${
                lang === "en"
                  ? scrolled
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary-foreground text-foreground"
                  : scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-primary-foreground/60 hover:text-primary-foreground"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile language switcher */}
        <div className="flex md:hidden items-center rounded-full border transition-all duration-300 border-primary-foreground/30">
          <button
            onClick={() => setLang("cs")}
            className={`px-2.5 py-1 rounded-full font-body text-xs font-bold tracking-wide transition-all duration-300 ${
              lang === "cs"
                ? scrolled ? "bg-primary text-primary-foreground" : "bg-primary-foreground text-foreground"
                : scrolled ? "text-muted-foreground" : "text-primary-foreground/60"
            }`}
          >
            CZ
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-2.5 py-1 rounded-full font-body text-xs font-bold tracking-wide transition-all duration-300 ${
              lang === "en"
                ? scrolled ? "bg-primary text-primary-foreground" : "bg-primary-foreground text-foreground"
                : scrolled ? "text-muted-foreground" : "text-primary-foreground/60"
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default StickyNav;
