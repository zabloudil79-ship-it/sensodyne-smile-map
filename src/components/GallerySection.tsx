import productBg from "@/assets/sensodyne-product-bg.jpg";

const GallerySection = () => {
  // Placeholder gallery - user will upload real photos later
  const images = [
    { src: productBg, alt: "Sensodyne Clinical White produkt" },
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
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        <p className="text-center mt-8 font-body text-muted-foreground text-sm italic">
          Další fotografie budou brzy doplněny
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
