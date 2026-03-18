import { useMemo, useState } from "react";

type MonthFilter = "all" | "duben" | "květen";

interface EventData {
  city: string;
  location: string;
  date: string;
  time: string;
  month: "duben" | "květen";
}

interface CityCoords {
  lat: number;
  lng: number;
}

const cityCoordinates: Record<string, CityCoords> = {
  Praha: { lat: 50.0755, lng: 14.4378 },
  Plzeň: { lat: 49.7384, lng: 13.3736 },
  Žatec: { lat: 50.3272, lng: 13.5458 },
  Sokolov: { lat: 50.1813, lng: 12.6401 },
  "Ústí n. L.": { lat: 50.6607, lng: 14.0323 },
  Teplice: { lat: 50.6404, lng: 13.8245 },
  "Česká Lípa": { lat: 50.6855, lng: 14.5376 },
  Liberec: { lat: 50.7671, lng: 15.0562 },
  Rumburk: { lat: 50.9515, lng: 14.5562 },
  "Hradec Králové": { lat: 50.2092, lng: 15.8328 },
  Brno: { lat: 49.1951, lng: 16.6068 },
  Olomouc: { lat: 49.5938, lng: 17.2509 },
  Hustopeče: { lat: 48.9408, lng: 16.7376 },
  Kroměříž: { lat: 49.2983, lng: 17.3931 },
  Zlín: { lat: 49.2244, lng: 17.6628 },
  "Staré Město": { lat: 49.0754, lng: 17.4338 },
  "Valašské Meziříčí": { lat: 49.4718, lng: 17.9711 },
  Přerov: { lat: 49.4551, lng: 17.4509 },
  Šumperk: { lat: 49.9653, lng: 16.9706 },
  Opava: { lat: 49.9387, lng: 17.9026 },
  Ostrava: { lat: 49.8209, lng: 18.2625 },
  Třebíč: { lat: 49.2148, lng: 15.8817 },
  Tábor: { lat: 49.4144, lng: 14.6578 },
  Strakonice: { lat: 49.261, lng: 13.9024 },
  "České Budějovice": { lat: 48.9747, lng: 14.4749 },
  Kolín: { lat: 50.0273, lng: 15.2027 },
  "Kutná Hora": { lat: 49.9492, lng: 15.2682 },
  Pardubice: { lat: 50.0343, lng: 15.7812 },
  Kladno: { lat: 50.1473, lng: 14.1029 },
  Slaný: { lat: 50.2305, lng: 14.0869 },
  Mělník: { lat: 50.3505, lng: 14.4741 },
  "Brandýs nad Labem": { lat: 50.1871, lng: 14.6635 },
  Kadaň: { lat: 50.383, lng: 13.2697 },
};

const allEvents: EventData[] = [
  { month: "duben", city: "Plzeň", location: "RP Rondel", date: "09.04.2026", time: "čt (10-18)" },
  { month: "duben", city: "Plzeň", location: "OC Plaza", date: "10.04.2026", time: "pá (10-18)" },
  { month: "duben", city: "Žatec", location: "RP Stop Shop", date: "11.04.2026", time: "so (10-18)" },
  { month: "duben", city: "Sokolov", location: "RP Michal", date: "12.04.2026", time: "ne (10-18)" },
  { month: "duben", city: "Ústí n. L.", location: "RP S1 Kr. Březno", date: "14.04.2026", time: "út (10-18)" },
  { month: "duben", city: "Teplice", location: "RP Olympia", date: "15.04.2026", time: "st (10-18)" },
  { month: "duben", city: "Česká Lípa", location: "OD Banco", date: "16.04.2026", time: "čt (10-18)" },
  { month: "duben", city: "Liberec", location: "OC Nisa", date: "17.04.2026", time: "pá (10-18)" },
  { month: "duben", city: "Rumburk", location: "OC Rumburk", date: "18.04.2026", time: "so (10-18)" },
  { month: "duben", city: "Hradec Králové", location: "OC Kukleny", date: "19.04.2026", time: "ne (10-18)" },
  { month: "duben", city: "Praha", location: "Budějovická", date: "20.04.2026", time: "po (10-18)" },
  { month: "duben", city: "Praha", location: "OC Arkády", date: "21.04.2026", time: "út (10-18)" },
  { month: "duben", city: "Praha", location: "Galerie Fenix", date: "22.04.2026", time: "st (10-18)" },
  { month: "duben", city: "Praha", location: "Harfa", date: "23.04.2026", time: "čt (10-18)" },
  { month: "duben", city: "Praha", location: "OC Luka Living", date: "24.04.2026", time: "pá (10-18)" },
  { month: "duben", city: "Brno", location: "Olympia", date: "25.04.2026", time: "so (10-18)" },
  { month: "duben", city: "Olomouc", location: "Olomouc City", date: "26.04.2026", time: "ne (10-18)" },
  { month: "duben", city: "Hustopeče", location: "Kaufland", date: "27.04.2026", time: "po (10-18)" },
  { month: "duben", city: "Kroměříž", location: "OC Rybalka", date: "28.04.2026", time: "út (10-18)" },
  { month: "duben", city: "Zlín", location: "Zlín Centro", date: "29.04.2026", time: "st (10-18)" },
  { month: "duben", city: "Staré Město", location: "RP Family", date: "30.04.2026", time: "čt (10-18)" },
  { month: "květen", city: "Olomouc", location: "Olomouc Haná", date: "02.05.2026", time: "so (10-18)" },
  { month: "květen", city: "Valašské Meziříčí", location: "Kaufland", date: "03.05.2026", time: "ne (10-18)" },
  { month: "květen", city: "Přerov", location: "RP S1 Center", date: "05.05.2026", time: "út (10-18)" },
  { month: "květen", city: "Šumperk", location: "S1 Center", date: "06.05.2026", time: "st (10-18)" },
  { month: "květen", city: "Opava", location: "OC Breda", date: "07.05.2026", time: "čt (10-18)" },
  { month: "květen", city: "Ostrava", location: "Avion", date: "09.05.2026", time: "so (10-18)" },
  { month: "květen", city: "Třebíč", location: "Stop Shop", date: "12.05.2026", time: "út (10-18)" },
  { month: "květen", city: "Tábor", location: "My Park", date: "13.05.2026", time: "st (10-18)" },
  { month: "květen", city: "Strakonice", location: "RP S1 Center", date: "14.05.2026", time: "čt (10-18)" },
  { month: "květen", city: "České Budějovice", location: "Čtyři Dvory", date: "15.05.2026", time: "pá (10-18)" },
  { month: "květen", city: "Kolín", location: "OC Stará Plynárna", date: "16.05.2026", time: "so (10-18)" },
  { month: "květen", city: "Kutná Hora", location: "RP", date: "17.05.2026", time: "ne (10-18)" },
  { month: "květen", city: "Pardubice", location: "OC Forum", date: "18.05.2026", time: "po (10-18)" },
  { month: "květen", city: "Kladno", location: "Oáza", date: "19.05.2026", time: "út (10-18)" },
  { month: "květen", city: "Slaný", location: "RP S1 Center", date: "20.05.2026", time: "st (10-18)" },
  { month: "květen", city: "Mělník", location: "RP", date: "21.05.2026", time: "čt (10-18)" },
  { month: "květen", city: "Brandýs nad Labem", location: "RP City Market", date: "22.05.2026", time: "pá (10-18)" },
  { month: "květen", city: "Praha", location: "Štěrboholy", date: "23.05.2026", time: "so (10-18)" },
  { month: "květen", city: "Kadaň", location: "RP S1 Center", date: "24.05.2026", time: "ne (10-18)" },
];

const CR_BOUNDS = {
  minLat: 48.52,
  maxLat: 51.06,
  minLng: 12.09,
  maxLng: 18.89,
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const mercatorY = (lat: number) => {
  const rad = (lat * Math.PI) / 180;
  return Math.log(Math.tan(Math.PI / 4 + rad / 2));
};

const DEFAULT_CENTER = { lat: 49.8175, lng: 15.473 };
const DEFAULT_ZOOM = 7.28;

const MapSection = () => {
  const [filter, setFilter] = useState<MonthFilter>("all");
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const [center, setCenter] = useState(DEFAULT_CENTER);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.25, 12));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.25, 5));

  const filteredEvents = useMemo(
    () => allEvents.filter((event) => (filter === "all" ? true : event.month === filter)),
    [filter],
  );

  const cityPoints = useMemo(() => {
    const grouped = filteredEvents.reduce<Record<string, EventData[]>>((acc, event) => {
      if (!acc[event.city]) acc[event.city] = [];
      acc[event.city].push(event);
      return acc;
    }, {});

    const scale = Math.pow(2, zoom - DEFAULT_ZOOM);
    const lngSpan = (CR_BOUNDS.maxLng - CR_BOUNDS.minLng) / scale;
    const latSpan = (CR_BOUNDS.maxLat - CR_BOUNDS.minLat) / scale;
    const visMinLng = center.lng - lngSpan / 2;
    const visMaxLng = center.lng + lngSpan / 2;
    const visMinLatMerc = mercatorY(center.lat - latSpan / 2);
    const visMaxLatMerc = mercatorY(center.lat + latSpan / 2);

    return Object.entries(grouped)
      .map(([city, events]) => {
        const coords = cityCoordinates[city];
        if (!coords) return null;

        const x = ((coords.lng - visMinLng) / (visMaxLng - visMinLng)) * 100;
        const y = ((visMaxLatMerc - mercatorY(coords.lat)) / (visMaxLatMerc - visMinLatMerc)) * 100;

        if (x < -5 || x > 105 || y < -5 || y > 105) return null;

        return { city, events, x: clamp(x, 0, 100), y: clamp(y, 0, 100) };
      })
      .filter((point): point is NonNullable<typeof point> => point !== null);
  }, [filteredEvents, zoom, center]);

  const selectedDetails = cityPoints.find((point) => point.city === selectedCity);

  return (
    <section id="locations" className="bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">Přijeďte za námi</h2>
          <p className="mx-auto max-w-2xl font-body text-lg text-muted-foreground">
            Klikněte na tečku ve městě a zobrazí se lokalita, termín i čas roadshow.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-3">
          {[
            { key: "all", label: "Vše" },
            { key: "duben", label: "Duben" },
            { key: "květen", label: "Květen" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setFilter(item.key as MonthFilter);
                setSelectedCity(null);
              }}
              className={`rounded-full px-5 py-2 font-body text-sm font-semibold transition ${
                filter === item.key ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-accent"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg" style={{ height: "560px" }}>
          <iframe
            title="Google mapa České republiky"
            width="100%"
            height="100%"
            loading="lazy"
            className="absolute inset-0"
            style={{ border: 0 }}
            src={`https://maps.google.com/maps?hl=cs&ll=${center.lat},${center.lng}&z=${zoom}&t=m&output=embed`}
          />

          {/* Zoom controls */}
          <div className="absolute top-3 right-3 z-10 flex flex-col gap-1">
            <button
              onClick={handleZoomIn}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/90 font-bold text-foreground shadow-md backdrop-blur-sm transition hover:bg-background"
              aria-label="Přiblížit"
            >
              +
            </button>
            <button
              onClick={handleZoomOut}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/90 font-bold text-foreground shadow-md backdrop-blur-sm transition hover:bg-background"
              aria-label="Oddálit"
            >
              −
            </button>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            {cityPoints.map((point) => (
              <button
                key={point.city}
                onClick={() => setSelectedCity(point.city)}
                className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
                aria-label={`Zobrazit detail pro město ${point.city}`}
              >
                <span className="block h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" />
                <span className="mt-1 block rounded-md bg-background/90 px-2 py-0.5 font-body text-[11px] font-semibold text-foreground shadow-sm">
                  {point.city}
                </span>
              </button>
            ))}
          </div>
        </div>

        {selectedDetails && (
          <div className="mt-6 rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="font-display text-xl font-bold text-foreground">{selectedDetails.city}</h3>
            <div className="mt-3 space-y-3">
              {selectedDetails.events.map((event, index) => (
                <div key={`${event.city}-${event.date}-${index}`} className="rounded-lg bg-muted p-3">
                  <p className="font-body text-sm text-foreground">
                    <span className="font-semibold">Město:</span> {event.city}
                  </p>
                  <p className="font-body text-sm text-foreground">
                    <span className="font-semibold">Lokalita:</span> {event.location}
                  </p>
                  <p className="font-body text-sm text-foreground">
                    <span className="font-semibold">Termín:</span> {event.date}
                  </p>
                  <p className="font-body text-sm text-foreground">
                    <span className="font-semibold">Čas:</span> {event.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MapSection;
