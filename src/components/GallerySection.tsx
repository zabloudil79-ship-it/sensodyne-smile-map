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

  return (
    <section id="gallery" className="py-20 md:py-28 bg-muted">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Galerie
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Nahlédněte do atmosféry naší roadshow
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 aspect-[16/10] sm:col-span-2">
            <img
              src={images[0].src}
              alt={images[0].alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          {images.slice(1).map((img) => (
            <div
              key={img.src}
              className="overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 aspect-[3/4]"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
