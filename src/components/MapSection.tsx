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

// Bounding box of Czech Republic (with padding)
const CZ_BOUNDS = {
  minLat: 48.55,
  maxLat: 51.06,
  minLng: 12.09,
  maxLng: 18.87,
};

// SVG viewBox dimensions
const SVG_W = 800;
const SVG_H = 450;
const PAD = 30;

const lngToSvgX = (lng: number) =>
  PAD + ((lng - CZ_BOUNDS.minLng) / (CZ_BOUNDS.maxLng - CZ_BOUNDS.minLng)) * (SVG_W - 2 * PAD);

const latToSvgY = (lat: number) =>
  PAD + ((CZ_BOUNDS.maxLat - lat) / (CZ_BOUNDS.maxLat - CZ_BOUNDS.minLat)) * (SVG_H - 2 * PAD);

// Simplified Czech Republic border outline (lon,lat pairs → SVG path)
const CZ_BORDER_PATH = (() => {
  // Key border points of Czech Republic (longitude, latitude)
  const borderPoints: [number, number][] = [
    [12.09, 50.32], [12.11, 50.32], [12.15, 50.35], [12.19, 50.33],
    [12.24, 50.27], [12.31, 50.21], [12.35, 50.18], [12.42, 50.10],
    [12.47, 50.05], [12.52, 50.01], [12.58, 49.96], [12.63, 49.91],
    [12.69, 49.87], [12.74, 49.82], [12.78, 49.78], [12.81, 49.72],
    [12.84, 49.66], [12.86, 49.60], [12.89, 49.54], [12.93, 49.48],
    [12.97, 49.43], [13.02, 49.38], [13.08, 49.33], [13.14, 49.28],
    [13.20, 49.24], [13.27, 49.20], [13.34, 49.16], [13.41, 49.12],
    [13.48, 49.08], [13.56, 49.04], [13.64, 49.01], [13.72, 48.98],
    [13.80, 48.96], [13.88, 48.94], [13.96, 48.92], [14.04, 48.90],
    [14.12, 48.87], [14.20, 48.84], [14.28, 48.81], [14.36, 48.78],
    [14.42, 48.76], [14.48, 48.74], [14.52, 48.72], [14.58, 48.70],
    [14.66, 48.68], [14.74, 48.68], [14.82, 48.69], [14.90, 48.70],
    [14.98, 48.71], [15.06, 48.72], [15.14, 48.73], [15.22, 48.74],
    [15.34, 48.76], [15.46, 48.78], [15.58, 48.80], [15.70, 48.82],
    [15.82, 48.84], [15.96, 48.86], [16.08, 48.88], [16.18, 48.90],
    [16.28, 48.92], [16.38, 48.94], [16.47, 48.96], [16.55, 48.98],
    [16.62, 48.98], [16.70, 48.98], [16.78, 48.97], [16.86, 48.96],
    [16.94, 48.96], [17.02, 48.96], [17.08, 48.98], [17.14, 49.00],
    [17.18, 49.04], [17.22, 49.09], [17.28, 49.14], [17.34, 49.18],
    [17.40, 49.22], [17.46, 49.26], [17.52, 49.30], [17.58, 49.34],
    [17.64, 49.36], [17.72, 49.38], [17.80, 49.40], [17.88, 49.42],
    [17.96, 49.44], [18.04, 49.46], [18.12, 49.48], [18.20, 49.50],
    [18.28, 49.52], [18.36, 49.54], [18.44, 49.56], [18.50, 49.58],
    [18.56, 49.60], [18.62, 49.64], [18.68, 49.68], [18.72, 49.72],
    [18.76, 49.76], [18.80, 49.80], [18.84, 49.84], [18.86, 49.88],
    [18.87, 49.92], [18.85, 49.96], [18.82, 50.00], [18.78, 50.04],
    [18.74, 50.08], [18.70, 50.12], [18.66, 50.16], [18.60, 50.18],
    [18.54, 50.20], [18.46, 50.22], [18.38, 50.24], [18.30, 50.26],
    [18.22, 50.28], [18.14, 50.30], [18.04, 50.32], [17.94, 50.34],
    [17.84, 50.36], [17.72, 50.38], [17.60, 50.40], [17.48, 50.42],
    [17.36, 50.44], [17.24, 50.42], [17.12, 50.40], [17.00, 50.38],
    [16.88, 50.36], [16.78, 50.34], [16.68, 50.32], [16.58, 50.30],
    [16.48, 50.28], [16.38, 50.28], [16.28, 50.30], [16.18, 50.32],
    [16.08, 50.36], [16.00, 50.40], [15.92, 50.44], [15.84, 50.48],
    [15.76, 50.52], [15.68, 50.54], [15.60, 50.56], [15.52, 50.58],
    [15.44, 50.60], [15.36, 50.62], [15.28, 50.64], [15.20, 50.68],
    [15.12, 50.72], [15.04, 50.76], [14.96, 50.80], [14.88, 50.84],
    [14.82, 50.86], [14.76, 50.88], [14.68, 50.90], [14.60, 50.92],
    [14.52, 50.94], [14.44, 50.96], [14.36, 50.98], [14.28, 51.00],
    [14.22, 51.02], [14.16, 51.04], [14.10, 51.05], [14.04, 51.06],
    [13.96, 51.06], [13.88, 51.04], [13.80, 51.02], [13.72, 51.00],
    [13.64, 50.98], [13.56, 50.96], [13.48, 50.94], [13.40, 50.92],
    [13.32, 50.90], [13.24, 50.88], [13.16, 50.86], [13.08, 50.84],
    [13.00, 50.80], [12.92, 50.76], [12.84, 50.72], [12.76, 50.68],
    [12.68, 50.64], [12.60, 50.60], [12.52, 50.56], [12.44, 50.52],
    [12.36, 50.48], [12.28, 50.44], [12.20, 50.40], [12.14, 50.36],
    [12.09, 50.32],
  ];

  return borderPoints
    .map(([lng, lat], i) => {
      const x = lngToSvgX(lng).toFixed(1);
      const y = latToSvgY(lat).toFixed(1);
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ") + " Z";
})();

const MapSection = () => {
  const [filter, setFilter] = useState<MonthFilter>("all");
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

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

    return Object.entries(grouped)
      .map(([city, events]) => {
        const coords = cityCoordinates[city];
        if (!coords) return null;
        const x = lngToSvgX(coords.lng);
        const y = latToSvgY(coords.lat);
        return { city, events, x, y };
      })
      .filter((p): p is NonNullable<typeof p> => p !== null);
  }, [filteredEvents]);

  const selectedDetails = cityPoints.find((p) => p.city === selectedCity);

  return (
    <section id="locations" className="bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Přijeďte za námi
          </h2>
          <p className="mx-auto max-w-2xl font-body text-lg text-muted-foreground">
            Klikněte na tečku ve městě a zobrazí se lokalita, termín i čas roadshow.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-3">
          {([
            { key: "all", label: "Vše" },
            { key: "duben", label: "Duben" },
            { key: "květen", label: "Květen" },
          ] as const).map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setFilter(item.key as MonthFilter);
                setSelectedCity(null);
              }}
              className={`rounded-full px-5 py-2 font-body text-sm font-semibold transition ${
                filter === item.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-accent"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="relative mx-auto w-full max-w-4xl">
          <svg
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >

            {/* City markers */}
            {cityPoints.map((point) => {
              const isSelected = selectedCity === point.city;
              return (
                <g
                  key={point.city}
                  onClick={() => setSelectedCity(point.city)}
                  className="cursor-pointer"
                >
                  {/* Hit area */}
                  <circle cx={point.x} cy={point.y} r="12" fill="transparent" />
                  {/* Glow ring */}
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={isSelected ? 8 : 6}
                    className={isSelected ? "fill-primary/20" : "fill-primary/10"}
                  />
                  {/* Dot */}
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={isSelected ? 4 : 3}
                    className="fill-primary"
                  />
                  {/* Label */}
                  <text
                    x={point.x}
                    y={point.y - 10}
                    textAnchor="middle"
                    className="fill-foreground font-body"
                    fontSize="9"
                    fontWeight="600"
                  >
                    {point.city}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {selectedDetails && (
          <div className="mt-6 rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="font-display text-xl font-bold text-foreground">
              {selectedDetails.city}
            </h3>
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
