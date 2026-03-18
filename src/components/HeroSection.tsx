import { ChevronDown } from "lucide-react";
import sensodyneLogo from "@/assets/sensodyne-logo.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { lang, t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { id: "about", label: t.hero.quickLinks.about[lang] },
    { id: "locations", label: t.hero.quickLinks.locations[lang] },
    { id: "gallery", label: t.hero.quickLinks.gallery[lang] },
    { id: "products", label: t.hero.quickLinks.products[lang] },
    { id: "feedback", label: t.hero.quickLinks.feedback[lang] },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover scale-105"
      >
        <source src="/videos/sensodyne-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <img
          src={sensodyneLogo}
          alt="Sensodyne Clinical White"
          className="mb-8 h-16 w-auto rounded-xl bg-primary-foreground/90 backdrop-blur-sm p-2.5 sm:h-20 shadow-elegant animate-fade-in-up"
        />
        <h1
          className="max-w-4xl font-display text-4xl font-black leading-[1.1] tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          {t.hero.title1[lang]}
          <br />
          <span className="bg-gradient-to-r from-primary-foreground via-secondary to-primary-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_4s_linear_infinite]">
            {t.hero.title2[lang]}
          </span>
        </h1>
        <p
          className="mt-6 max-w-xl font-body text-lg text-primary-foreground/85 sm:text-xl animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          {t.hero.subtitle[lang]}
        </p>
      </div>

      <div className="absolute bottom-20 left-1/2 z-10 w-[92%] max-w-5xl -translate-x-1/2">
        <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-center sm:grid-cols-3 lg:grid-cols-5">
          {quickLinks.map((link, index) => (
            <div key={link.id} className="flex items-center justify-center lg:justify-center">
              <button
                onClick={() => scrollToSection(link.id)}
                className="font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-foreground/95 transition hover:text-primary-foreground"
              >
                {link.label}
              </button>
              {index < quickLinks.length - 1 && (
                <span className="ml-2 hidden font-body text-primary-foreground/70 lg:inline">,</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
        aria-label="Scroll down"
      >
        <span className="text-sm font-body tracking-widest uppercase">{t.hero.scrollDown[lang]}</span>
        <ChevronDown className="h-6 w-6 animate-scroll-indicator" />
      </button>
    </section>
  );
};

export default HeroSection;
