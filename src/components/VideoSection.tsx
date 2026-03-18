const VideoSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-secondary">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-foreground/10 text-secondary-foreground text-sm font-semibold font-body mb-4">
            Podívejte se
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground mb-4">
            Zážitek v <span className="text-primary-foreground/80">pohybu</span>
          </h2>
          <p className="font-body text-secondary-foreground/70 text-lg max-w-2xl mx-auto">
            Nahlédněte do atmosféry našeho roadshow prostřednictvím videa
          </p>
        </div>
        <div className="flex justify-center">
          <video
            src="/videos/sensodyne-dm.mp4"
            controls
            muted
            playsInline
            className="h-[320px] sm:h-[460px] lg:h-[600px] rounded-2xl shadow-elegant"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
