import sensodyneLogo from "@/assets/sensodyne-logo.jpg";
import ppmLogo from "@/assets/logo-ppm-factum.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container max-w-6xl mx-auto px-4 text-center">
        <img
          src={sensodyneLogo}
          alt="Sensodyne Clinical White"
          className="h-16 mx-auto mb-6 rounded-lg bg-primary-foreground p-2"
        />
        <p className="font-body text-primary-foreground/80 text-sm">
          © 2026 Sensodyne Clinical White Roadshow. Všechna práva vyhrazena.
        </p>
        <p className="font-body text-primary-foreground/60 text-xs mt-2">
          Haleon — No.1 Dentist Recommended Brand
        </p>
      </div>
    </footer>
  );
};

export default Footer;
