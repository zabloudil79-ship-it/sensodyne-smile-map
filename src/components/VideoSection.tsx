import { useLanguage } from "@/i18n/LanguageContext";

const VideoSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-foreground">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="container relative max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold font-body mb-4">
            Video
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            {lang === "cs" ? "Podívejte se " : "Watch "}
            <span className="gradient-text">{lang === "cs" ? "jak to u nás vypadá" : "what it looks like"}</span>
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-elegant">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[200px] sm:h-[280px] lg:h-[360px] object-cover"
          >
            <source src="/videos/sensodyne-dm.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
