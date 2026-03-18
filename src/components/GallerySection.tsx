import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";

const GallerySection = () => {
  const images = [
    { src: gallery4, alt: "Roadshow stánek s kolem štěstí a mobilní dentální hygienou" },
    { src: gallery11, alt: "Návštěvnice u kola štěstí Sensodyne roadshow" },
    { src: gallery6, alt: "Mobilní dentální hygiena v roadshow karavanu" },
    { src: gallery8, alt: "Návštěvnice kontroluje úsměv v Sensodyne zrcátku" },
    { src: gallery9, alt: "Detail zrcátka Sensodyne během hygienického poradenství" },
    { src: gallery10, alt: "Konzultace péče o zuby v mobilní ambulanci" },
    { src: gallery13, alt: "Dentální hygienistka radí návštěvnici v křesle" },
    { src: gallery7, alt: "Ukázka zubních problémů při edukaci návštěvníků" },
    { src: gallery15, alt: "Přívětivé poradenství během roadshow" },
    { src: gallery14, alt: "Ukázka správného čištění zubů na modelu" },
    { src: gallery12, alt: "Promotérka předává informace a vzorky produktů" },
    { src: gallery1, alt: "Návštěvnice roadshow u reklamního banneru" },
    { src: gallery5, alt: "Obří Sensodyne Clinical White pasta u mobilního karavanu" },
    { src: gallery2, alt: "Promotérka rozdává vzorky produktů Sensodyne" },
    { src: gallery3, alt: "Předávání vzorků a poradenství na roadshow" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const showPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const showNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const showPrevLightbox = () => setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
  const showNextLightbox = () => setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % images.length));

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowLeft") showPrevLightbox();
      if (event.key === "ArrowRight") showNextLightbox();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "var(--gradient-section)" }}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold font-body mb-4">
            Fotogalerie
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Atmosféra <span className="gradient-text">roadshow</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Nahlédněte do atmosféry naší roadshow
          </p>
        </div>

        <div className="relative group overflow-hidden rounded-2xl shadow-elegant bg-card">
          <button
            onClick={showPrev}
            aria-label="Předchozí fotografie"
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/90 backdrop-blur-sm p-2.5 text-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-background hover:shadow-card"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={showNext}
            aria-label="Další fotografie"
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/90 backdrop-blur-sm p-2.5 text-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-background hover:shadow-card"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <button
            onClick={() => setLightboxIndex(currentIndex)}
            className="absolute top-4 right-4 z-10 rounded-full bg-background/90 backdrop-blur-sm p-2.5 text-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-background"
            aria-label="Zvětšit fotografii"
          >
            <Maximize2 className="h-4 w-4" />
          </button>

          <button
            onClick={() => setLightboxIndex(currentIndex)}
            className="block w-full"
            aria-label="Zvětšit fotografii"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-[320px] sm:h-[460px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-background/90 backdrop-blur-sm px-4 py-2 text-xs font-body font-medium text-foreground">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        <div className="mt-6 flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {images.map((img, index) => (
            <button
              key={img.src}
              onClick={() => setCurrentIndex(index)}
              className={`relative h-20 w-20 min-w-20 overflow-hidden rounded-xl transition-all duration-300 ${
                currentIndex === index
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-105"
                  : "opacity-60 hover:opacity-100"
              }`}
              aria-label={`Zobrazit fotografii ${index + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-foreground/95 backdrop-blur-sm p-4 sm:p-8">
          <button
            onClick={() => setLightboxIndex(null)}
            aria-label="Zavřít zvětšení"
            className="absolute right-4 top-4 rounded-full bg-background/90 p-2.5 text-foreground hover:bg-background transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={showPrevLightbox}
            aria-label="Předchozí fotografie"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2.5 text-foreground hover:bg-background transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={showNextLightbox}
            aria-label="Další fotografie"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2.5 text-foreground hover:bg-background transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="mx-auto flex h-full max-w-6xl items-center justify-center">
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="max-h-full w-auto max-w-full rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
