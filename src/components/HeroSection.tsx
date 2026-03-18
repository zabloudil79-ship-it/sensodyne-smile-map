import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContent = () => {
    const el = document.getElementById("about");
    el?.scrollIntoView({ behavior: "smooth" });
  };

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
        <h1 className="font-display text-3xl font-black leading-tight tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
          Roadshow, která se Vám
          <br />
          podívá na zoubek
        </h1>
        <p className="mt-6 max-w-xl font-body text-lg text-primary-foreground/90 sm:text-xl">
          Sensodyne Clinical White — přijďte si pro zářivý úsměv
        </p>
      </div>
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-sm font-body tracking-widest uppercase">Objevte více</span>
        <ChevronDown className="h-6 w-6 animate-scroll-indicator" />
      </button>
    </section>
  );
};

export default HeroSection;
