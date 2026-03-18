import { ChevronDown } from "lucide-react";
import sensodyneLogo from "@/assets/sensodyne-logo.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { id: "about", label: "Road Show" },
    { id: "locations", label: "Naše místa" },
    { id: "gallery", label: "Galerie" },
    { id: "products", label: "Další produkty" },
    { id: "feedback", label: "Podělte se o názor" },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/sensodyne-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-primary/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <img
          src={sensodyneLogo}
          alt="Sensodyne Clinical White"
          className="mb-6 h-16 w-auto rounded-lg bg-primary-foreground p-2 sm:h-20"
        />
        <h1 className="max-w-4xl font-display text-3xl font-black leading-tight tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Roadshow, která se Vám
          <br />
          podívá na zoubek
        </h1>
        <p className="mt-6 max-w-xl font-body text-lg text-primary-foreground/90 sm:text-xl">
          Sensodyne Clinical White — přijďte si pro zářivý úsměv
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
        <span className="text-sm font-body tracking-widest uppercase">Objevte více</span>
        <ChevronDown className="h-6 w-6 animate-scroll-indicator" />
      </button>
    </section>
  );
};

export default HeroSection;
