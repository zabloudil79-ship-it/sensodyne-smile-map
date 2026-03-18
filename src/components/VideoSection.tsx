const VideoSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "var(--gradient-section)" }}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-elegant bg-card">
          <video
            src="/videos/sensodyne-dm.mp4"
            controls
            muted
            playsInline
            className="h-[320px] sm:h-[460px] lg:h-[600px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
