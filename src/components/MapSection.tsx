import { useMemo, useState } from "react";
import { MapPin, Calendar, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

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

const CZ_BOUNDS = { minLat: 48.55, maxLat: 51.06, minLng: 12.09, maxLng: 18.87 };
const SVG_W = 800;
const SVG_H = 450;
const PAD = 30;

const lngToSvgX = (lng: number) =>
  PAD + ((lng - CZ_BOUNDS.minLng) / (CZ_BOUNDS.maxLng - CZ_BOUNDS.minLng)) * (SVG_W - 2 * PAD);
const latToSvgY = (lat: number) =>
  PAD + ((CZ_BOUNDS.maxLat - lat) / (CZ_BOUNDS.maxLat - CZ_BOUNDS.minLat)) * (SVG_H - 2 * PAD);

const MapSection = () => {
  const [filter, setFilter] = useState<MonthFilter>("all");
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const { lang, t } = useLanguage();

  const filterButtons = [
    { key: "all" as MonthFilter, label: t.map.filterAll[lang] },
    { key: "duben" as MonthFilter, label: t.map.filterApril[lang] },
    { key: "květen" as MonthFilter, label: t.map.filterMay[lang] },
  ];

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
    <section id="locations" className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/[0.03] blur-3xl -translate-y-1/2" />

      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold font-body mb-4">
            {t.map.badge[lang]}
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-5xl">
            {t.map.title1[lang]} <span className="gradient-text">{t.map.title2[lang]}</span>
          </h2>
          <p className="mx-auto max-w-2xl font-body text-lg text-muted-foreground">
            {t.map.subtitle[lang]}
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filterButtons.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setFilter(item.key);
                setSelectedCity(null);
              }}
              className={`rounded-full px-6 py-2.5 font-body text-sm font-semibold transition-all duration-300 ${
                filter === item.key
                  ? "gradient-primary text-primary-foreground shadow-elegant"
                  : "bg-muted text-foreground hover:bg-accent"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="relative mx-auto w-full max-w-4xl">
          <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            {cityPoints.map((point) => {
              const isSelected = selectedCity === point.city;
              return (
                <g key={point.city} onClick={() => setSelectedCity(point.city)} className="cursor-pointer">
                  <circle cx={point.x} cy={point.y} r="14" fill="transparent" />
                  {isSelected && (
                    <circle cx={point.x} cy={point.y} r="10" className="fill-primary/10">
                      <animate attributeName="r" from="6" to="14" dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.4" to="0" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={isSelected ? 5 : 3.5}
                    className={isSelected ? "fill-primary" : "fill-secondary"}
                    style={{ transition: "r 0.3s, fill 0.3s" }}
                  />
                  <text
                    x={point.x}
                    y={point.y - 10}
                    textAnchor="middle"
                    className="fill-foreground font-body"
                    fontSize="8.5"
                    fontWeight={isSelected ? "700" : "500"}
                  >
                    {point.city}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {selectedDetails && (
          <div className="mt-8 rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 shadow-elegant animate-fade-in-up" style={{ animationDuration: "0.4s" }}>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="font-display text-xl font-bold text-foreground">{selectedDetails.city}</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {selectedDetails.events.map((event, index) => (
                <div
                  key={`${event.city}-${event.date}-${index}`}
                  className="rounded-xl bg-muted/60 p-4 border border-border/40 transition-all duration-300 hover:shadow-card"
                >
                  <p className="font-body text-sm text-foreground flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-secondary" />
                    <span className="font-semibold">{event.location}</span>
                  </p>
                  <p className="font-body text-sm text-muted-foreground flex items-center gap-2 mt-1.5">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    {event.date}
                  </p>
                  <p className="font-body text-sm text-muted-foreground flex items-center gap-2 mt-1">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    {event.time}
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
