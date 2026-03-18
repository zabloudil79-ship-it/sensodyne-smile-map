import { Gift, Armchair, Sparkles } from "lucide-react";
import productImage from "@/assets/sensodyne-product.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold font-body mb-4">
              Sensodyne Clinical White
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Co Vás na roadshow čeká?
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Přijďte na naši roadshow a zažijte den plný péče o Vaše zuby! Čeká na Vás
              kolo štěstí s atraktivními cenami, mobilní dentální hygiena s profesionálním
              křeslem a odborné poradenství, jak správně pečovat o citlivé zuby.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Gift className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Kolo štěstí o ceny</h3>
                  <p className="font-body text-muted-foreground text-sm">Zatočte a vyhrajte skvělé produkty Sensodyne a další dárky.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Armchair className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Mobilní dentální hygiena</h3>
                  <p className="font-body text-muted-foreground text-sm">Posaďte se do křesla a nechte si poradit od odborníků.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Odborné poradenství</h3>
                  <p className="font-body text-muted-foreground text-sm">Tipy a triky pro péči o citlivé zuby od profesionálů.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={productImage}
              alt="Sensodyne Clinical White"
              className="w-full max-w-md rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
