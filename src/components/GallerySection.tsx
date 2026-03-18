import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const GallerySection = () => {
  const images = [
    { src: gallery4, alt: "Roadshow stánek s kolem štěstí a mobilní dentální hygienou" },
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
          {/* First image spans 2 columns on large screens */}
          <div className="overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 aspect-[4/3] sm:col-span-2">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          {images.slice(1).map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 aspect-[3/4] sm:aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
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
