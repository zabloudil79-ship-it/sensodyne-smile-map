import { useLanguage } from "@/i18n/LanguageContext";

const VideoSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-primary">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
            Video
          </h2>
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
