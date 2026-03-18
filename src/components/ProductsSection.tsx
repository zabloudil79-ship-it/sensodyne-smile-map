const products = [
  {
    title: "Zubní kartáčky",
    description: "Šetrné kartáčky pro každodenní péči o citlivé zuby a dásně.",
    icon: "🪥",
  },
  {
    title: "Ústní vody",
    description: "Doplňková péče pro svěží dech a ochranu před citlivostí.",
    icon: "💧",
  },
  {
    title: "Whitening řada",
    description: "Produkty pro bělejší úsměv bez kompromisů v péči o citlivost.",
    icon: "✨",
  },
  {
    title: "Komplexní ochrana",
    description: "Každodenní produkty s důrazem na dlouhodobé zdraví zubů.",
    icon: "🛡️",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Další produkty Sensodyne</h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-muted-foreground">
            Objevte i další produktové řady – od kartáčků až po ústní vody pro kompletní péči.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-xl">
                {product.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{product.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">{product.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
