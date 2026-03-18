import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = ["👶", "🩹", "✨", "🛡️", "🪥", "💎"];
const url = "https://www.sensodyne.cz/produkty.html";

const ProductsSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="products" className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.02] blur-3xl" />

      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold font-body mb-4">
            {t.products.badge[lang]}
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            {t.products.title1[lang]} <span className="gradient-text">{t.products.title2[lang]}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-muted-foreground">
            {t.products.subtitle[lang]}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.products.items.map((group, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-400 hover:shadow-card-hover hover:-translate-y-1 hover:border-primary/20"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-2xl transition-transform duration-300 group-hover:scale-110">
                  {icons[i]}
                </div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {group.title[lang]}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                </div>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                  {group.description[lang]}
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
