import { ArrowUpRight } from "lucide-react";

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
    <section id="products" className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.02] blur-3xl" />

      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold font-body mb-4">
            Kompletní řada
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            Produkty <span className="gradient-text">Sensodyne</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-muted-foreground">
            Vyberte si z produktových řad Sensodyne podle vašich potřeb.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productGroups.map((group) => (
            <a
              key={group.title}
              href={group.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-400 hover:shadow-card-hover hover:-translate-y-1 hover:border-primary/20"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-2xl transition-transform duration-300 group-hover:scale-110">
                  {group.icon}
                </div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {group.title}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                </div>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                  {group.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
