import { Gift, Armchair, Sparkles } from "lucide-react";
import productImage from "@/assets/sensodyne-product.jpg";

const highlights = [
  {
    icon: Gift,
    title: "Kolo štěstí o ceny",
    description: "Zatočte a vyhrajte skvělé produkty Sensodyne a další dárky.",
    color: "primary",
  },
  {
    icon: Armchair,
    title: "Mobilní dentální hygiena",
    description: "Posaďte se do křesla a nechte si poradit od odborníků.",
    color: "secondary",
  },
  {
    icon: Sparkles,
    title: "Odborné poradenství",
    description: "Tipy a triky pro péči o citlivé zuby od profesionálů.",
    color: "primary",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/[0.03] blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-secondary/[0.04] blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container relative max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold font-body mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              Sensodyne Clinical White
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Co Vás na roadshow{" "}
              <span className="gradient-text">čeká?</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-10">
              Přijďte na naši roadshow a zažijte den plný péče o Vaše zuby! Čeká na Vás
              kolo štěstí s atraktivními cenami, mobilní dentální hygiena s profesionálním
              křeslem a odborné poradenství, jak správně pečovat o citlivé zuby.
            </p>
            <div className="space-y-5">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-start gap-4 rounded-xl p-3 -ml-3 transition-colors hover:bg-muted/60"
                >
                  <div
                    className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      item.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                    }`}
                  >
                    <item.icon className={`h-5 w-5 ${item.color === "primary" ? "text-primary" : "text-secondary"}`} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                    <p className="font-body text-muted-foreground text-sm mt-0.5">{item.description}</p>
                  </div>
                </div>
              ))}
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
