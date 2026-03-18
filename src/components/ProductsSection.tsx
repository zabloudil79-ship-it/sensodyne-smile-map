const productGroups = [
  {
    title: "Pro děti",
    description: "Speciální péče navržená pro citlivé dětské zuby a dásně.",
    icon: "👶",
    url: "https://www.sensodyne.cz/produkty.html",
  },
  {
    title: "Oprava a úleva",
    description: "Rychlá úleva od bolesti a oprava citlivých zubů s klinicky ověřeným složením.",
    icon: "🩹",
    url: "https://www.sensodyne.cz/produkty.html",
  },
  {
    title: "Bělost zubů",
    description: "Bělejší úsměv bez kompromisů – šetrné bělení pro citlivé zuby.",
    icon: "✨",
    url: "https://www.sensodyne.cz/produkty.html",
  },
  {
    title: "Kompletní ochrana",
    description: "Komplexní péče pro dlouhodobé zdraví zubů a ochranu před citlivostí.",
    icon: "🛡️",
    url: "https://www.sensodyne.cz/produkty.html",
  },
  {
    title: "Každodenní péče",
    description: "Každodenní produkty pro šetrnou a spolehlivou péči o citlivé zuby.",
    icon: "🪥",
    url: "https://www.sensodyne.cz/produkty.html",
  },
  {
    title: "Dásně a sklovina",
    description: "Posílení skloviny a ochrana dásní pro zdravější úsměv.",
    icon: "💎",
    url: "https://www.sensodyne.cz/produkty.html",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Produkty Sensodyne</h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-muted-foreground">
            Vyberte si z produktových řad Sensodyne podle vašich potřeb.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productGroups.map((group) => (
            <a
              key={group.title}
              href={group.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-2xl">
                {group.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {group.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">{group.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;