import sensodyneLogo from "@/assets/sensodyne-logo.jpg";
import ppmLogo from "@/assets/logo-ppm-factum.png";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-foreground py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />

      <div className="container relative max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <img
            src={sensodyneLogo}
            alt="Sensodyne Clinical White"
            className="h-14 mb-8 rounded-lg bg-primary-foreground p-2"
          />

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              { id: "about", label: "O roadshow" },
              { id: "locations", label: "Místa" },
              { id: "gallery", label: "Galerie" },
              { id: "products", label: "Produkty" },
              { id: "feedback", label: "Kontakt" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent mb-8" />

          <p className="font-body text-primary-foreground/70 text-sm">
            © 2026 Sensodyne Clinical White Roadshow
          </p>
          <p className="font-body text-primary-foreground/40 text-xs mt-2">
            Haleon — No.1 Dentist Recommended Brand
          </p>
          <div className="mt-6 flex items-center gap-2">
            <span className="font-body text-primary-foreground/40 text-xs">Realizace:</span>
            <img src={ppmLogo} alt="PPM Factum" className="h-7 brightness-0 invert opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
