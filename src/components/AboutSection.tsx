import { Gift, Armchair, Sparkles } from "lucide-react";
import productImage from "@/assets/sensodyne-product.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Gift, Armchair, Sparkles];
const colors = ["primary", "secondary", "primary"];

const AboutSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/[0.03] blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-secondary/[0.04] blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container relative max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold font-body mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              {t.about.badge[lang]}
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {t.about.title1[lang]}{" "}
              <span className="gradient-text">{t.about.title2[lang]}</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-10">
              {t.about.description[lang]}
            </p>
            <div className="space-y-5">
              {t.about.highlights.map((item, i) => {
                const Icon = icons[i];
                const color = colors[i];
                return (
                  <div
                    key={i}
                    className="group flex items-start gap-4 rounded-xl p-3 -ml-3 transition-colors hover:bg-muted/60"
                  >
                    <div
                      className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                        color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${color === "primary" ? "text-primary" : "text-secondary"}`} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground">{item.title[lang]}</h3>
                      <p className="font-body text-muted-foreground text-sm mt-0.5">{item.description[lang]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl gradient-primary opacity-10 blur-2xl" />
              <img
                src={productImage}
                alt="Sensodyne Clinical White"
                className="relative w-full max-w-md rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
