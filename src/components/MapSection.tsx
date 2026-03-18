import { useState } from "react";
import { MapPin } from "lucide-react";

export interface LocationData {
  city: string;
  date: string;
  time: string;
  address: string;
  lat: number;
  lng: number;
}

const defaultLocations: LocationData[] = [
  { city: "Praha", date: "15. 5. 2026", time: "9:00 – 17:00", address: "Václavské náměstí", lat: 50.0755, lng: 14.4378 },
  { city: "Brno", date: "22. 5. 2026", time: "9:00 – 17:00", address: "Náměstí Svobody", lat: 49.1951, lng: 16.6068 },
  { city: "Ostrava", date: "29. 5. 2026", time: "9:00 – 17:00", address: "Masarykovo náměstí", lat: 49.8209, lng: 18.2625 },
  { city: "Plzeň", date: "5. 6. 2026", time: "9:00 – 17:00", address: "Náměstí Republiky", lat: 49.7384, lng: 13.3736 },
  { city: "Olomouc", date: "12. 6. 2026", time: "9:00 – 17:00", address: "Horní náměstí", lat: 49.5938, lng: 17.2509 },
  { city: "Liberec", date: "19. 6. 2026", time: "9:00 – 17:00", address: "Náměstí Dr. E. Beneše", lat: 50.7671, lng: 15.0562 },
];

interface MapSectionProps {
  locations?: LocationData[];
}

const MapSection = ({ locations = defaultLocations }: MapSectionProps) => {
  const [selected, setSelected] = useState<LocationData | null>(null);

  return (
    <section id="locations" className="py-20 md:py-28 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kde nás najdete
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Roadshow navštíví města po celé České republice
          </p>
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg" style={{ height: "500px" }}>
          <iframe
            title="Roadshow mapa"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/d/embed?mid=placeholder&z=7&ll=49.8,15.5`}
          />
          {/* Fallback: static list when no API key */}
          <div className="absolute inset-0 bg-muted flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="font-body text-muted-foreground mb-6">
                Interaktivní mapa — klikněte na město pro detaily
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto">
                {locations.map((loc) => (
                  <button
                    key={loc.city}
                    onClick={() => setSelected(selected?.city === loc.city ? null : loc)}
                    className={`rounded-xl px-4 py-3 text-left transition-all font-body text-sm ${
                      selected?.city === loc.city
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-card text-foreground hover:bg-primary/5 shadow-sm"
                    }`}
                  >
                    <span className="font-semibold block">{loc.city}</span>
                    <span className={`text-xs ${selected?.city === loc.city ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      {loc.date}
                    </span>
                  </button>
                ))}
              </div>
              {selected && (
                <div className="mt-6 bg-card rounded-xl p-5 shadow-md max-w-sm mx-auto text-left animate-fade-in-up">
                  <h3 className="font-display font-bold text-foreground text-lg">{selected.city}</h3>
                  <div className="mt-2 space-y-1 font-body text-sm text-muted-foreground">
                    <p>📅 {selected.date}</p>
                    <p>🕐 {selected.time}</p>
                    <p>📍 {selected.address}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
