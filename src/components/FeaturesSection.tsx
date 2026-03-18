import { useLanguage } from "@/i18n/LanguageContext";

const emojis = ["🎡", "🦷", "💬"];
const gradients = ["from-primary/10 to-secondary/10", "from-secondary/10 to-primary/5", "from-primary/5 to-secondary/10"];

const FeaturesSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "var(--gradient-section)" }}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold font-body mb-4">
            {t.features.badge[lang]}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t.features.title1[lang]} <span className="gradient-text">{t.features.title2[lang]}</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.features.subtitle[lang]}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {t.features.items.map((feature, i) => (
            <div
              key={i}
              className="group relative bg-card rounded-2xl p-8 text-center shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradients[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">
                  {emojis[i]}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {feature.title[lang]}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {feature.description[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
