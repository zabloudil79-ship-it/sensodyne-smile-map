import { useLanguage } from "@/i18n/LanguageContext";

const VideoSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "var(--gradient-section)" }}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl shadow-elegant bg-card">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[320px] sm:h-[460px] lg:h-[600px] object-cover"
          >
            <source src="/videos/sensodyne-dm-4.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
