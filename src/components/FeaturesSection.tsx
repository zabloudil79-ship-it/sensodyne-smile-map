const FeaturesSection = () => {
  const features = [
    {
      title: "Kolo štěstí",
      description: "Zatočte kolem štěstí a vyhrajte produkty Sensodyne, dárkové balíčky a další skvělé ceny. Každý hráč vyhrává!",
      icon: "🎡",
    },
    {
      title: "Mobilní dentální hygiena",
      description: "Profesionální dentální hygienistka Vám v pohodlném křesle poradí, jak správně pečovat o Vaše zuby a dásně.",
      icon: "🦷",
    },
    {
      title: "Odborné poradenství",
      description: "Zjistěte vše o citlivosti zubů a jak ji řešit. Naši odborníci Vám pomohou s výběrem správné péče.",
      icon: "💬",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Co Vás čeká na místě
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Tři unikátní zážitky na jednom místě
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
