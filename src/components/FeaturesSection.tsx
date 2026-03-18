const features = [
  {
    title: "Kolo štěstí",
    description:
      "Zatočte kolem štěstí a vyhrajte produkty Sensodyne, dárkové balíčky a další skvělé ceny. Každý hráč vyhrává!",
    icon: "🎡",
    gradient: "from-primary/10 to-secondary/10",
  },
  {
    title: "Mobilní dentální hygiena",
    description:
      "Profesionální dentální hygienistka Vám v pohodlném křesle poradí, jak správně pečovat o Vaše zuby a dásně.",
    icon: "🦷",
    gradient: "from-secondary/10 to-primary/5",
  },
  {
    title: "Odborné poradenství",
    description:
      "Zjistěte vše o citlivosti zubů a jak ji řešit. Naši odborníci Vám pomohou s výběrem správné péče.",
    icon: "💬",
    gradient: "from-primary/5 to-secondary/10",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "var(--gradient-section)" }}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold font-body mb-4">
            3 důvody přijít
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Co Vás čeká <span className="gradient-text">na místě</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Tři unikátní zážitky na jednom místě
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group relative bg-card rounded-2xl p-8 text-center shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {feature.description}
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
