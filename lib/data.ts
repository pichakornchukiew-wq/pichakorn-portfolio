export type SeriesName = "Silence" | "Interval" | "Aperture";

export interface Artist {
  name: string;
  location: string;
  email: string;
  instagram: string;
  bio: string[];
  statement: string;
}

export interface Work {
  id: number;
  title: string;
  year: number;
  series: SeriesName;
  medium: string;
  category: string;
  dimensions: string;
  heightClass: string;
  image: string;
  description: string;
}

export const ARTIST: Artist = {
  name: "Pichakorn Chukiew Tuapennot",
  location: "Copenhagen, Denmark",
  email: "studio@pichakornchukiew.com",
  instagram: "@pichakorn.chukiew",
  bio: [
    "Pichakorn Chukiew Tuapennot (b. 1985) is a Copenhagen-based artist working across painting, sculpture, and drawing. Her practice examines the quiet architecture of memory — the way a room, a gesture, or a beam of light continues to exist after the moment that produced it has passed.",
    "Trained at the Royal Danish Academy of Fine Arts, Tuapennot spent the early years of her career assisting in bronze foundries across Northern Europe before returning to a studio practice of her own in 2014. Her work has since been exhibited in Copenhagen, Berlin, and Oslo, and is held in several private collections.",
    "She currently lives and works from a converted warehouse studio in Refshaleøen, Copenhagen.",
  ],
  statement:
    "I am interested in what remains. A painting, for me, is not a record of a scene but of an absence — the interval between one state and the next. I work slowly, in series, returning to the same forms until they stop meaning what I first intended and start meaning something closer to the truth. Silence is not empty in my studio; it is the material I am most often shaping.",
};

export const SERIES_ORDER: SeriesName[] = ["Silence", "Interval", "Aperture"];

export const MEDIUM_BY_SERIES: Record<SeriesName, string> = {
  Silence: "Oil on linen",
  Interval: "Cast bronze",
  Aperture: "Graphite on paper",
};

export const CATEGORY_BY_SERIES: Record<SeriesName, string> = {
  Silence: "Painting",
  Interval: "Sculpture",
  Aperture: "Drawing",
};

interface RawWork {
  title: string;
  series: SeriesName;
  year: number;
  dims: string;
  h: string;
  seed: string;
}

const RAW_WORKS: RawWork[] = [
  { title: "Room with Closed Curtains", series: "Silence", year: 2023, dims: "142 × 178 cm", h: "h-96", seed: "pichakorn-01" },
  { title: "Study for a Departure", series: "Silence", year: 2022, dims: "90 × 120 cm", h: "h-72", seed: "pichakorn-02" },
  { title: "Standing Figure, No. 4", series: "Interval", year: 2021, dims: "38 × 19 × 21 cm", h: "h-80", seed: "pichakorn-03" },
  { title: "Before the Hour", series: "Silence", year: 2023, dims: "110 × 150 cm", h: "h-64", seed: "pichakorn-04" },
  { title: "Two Chairs, Facing", series: "Interval", year: 2020, dims: "44 × 30 × 28 cm", h: "h-96", seed: "pichakorn-05" },
  { title: "Window, Overcast", series: "Aperture", year: 2019, dims: "40 × 50 cm", h: "h-72", seed: "pichakorn-06" },
  { title: "The Long Corridor", series: "Silence", year: 2024, dims: "160 × 200 cm", h: "h-80", seed: "pichakorn-07" },
  { title: "Untitled (Threshold)", series: "Interval", year: 2022, dims: "52 × 24 × 24 cm", h: "h-64", seed: "pichakorn-08" },
  { title: "Stairwell, 6AM", series: "Aperture", year: 2020, dims: "40 × 50 cm", h: "h-96", seed: "pichakorn-09" },
  { title: "Field Notes on Waiting", series: "Silence", year: 2021, dims: "130 × 160 cm", h: "h-72", seed: "pichakorn-10" },
  { title: "Vessel, Unfired Form", series: "Interval", year: 2023, dims: "35 × 35 × 40 cm", h: "h-80", seed: "pichakorn-11" },
  { title: "Coastline, No Horizon", series: "Aperture", year: 2018, dims: "40 × 60 cm", h: "h-64", seed: "pichakorn-12" },
];

export const WORKS: Work[] = RAW_WORKS.map((w, i) => ({
  id: i + 1,
  title: w.title,
  year: w.year,
  series: w.series,
  medium: MEDIUM_BY_SERIES[w.series],
  category: CATEGORY_BY_SERIES[w.series],
  dimensions: w.dims,
  heightClass: w.h,
  image: `https://picsum.photos/seed/${w.seed}/900/1200`,
  description:
    "A continuation of the studio's long-running inquiry into stillness and duration, made over several months of returning to the same surface until the image resolved into something the artist no longer felt she had authored alone.",
}));

export const EXHIBITION_WORK_IDS = [1, 6, 9];
export const CATEGORIES = ["All", "Painting", "Sculpture", "Drawing"];

export function getWorkById(id: number): Work | undefined {
  return WORKS.find((w) => w.id === id);
}

export function getAdjacentWorks(id: number): { prev: Work; next: Work } {
  const idx = WORKS.findIndex((w) => w.id === id);
  const safeIdx = idx === -1 ? 0 : idx;
  const prev = WORKS[(safeIdx - 1 + WORKS.length) % WORKS.length];
  const next = WORKS[(safeIdx + 1) % WORKS.length];
  return { prev, next };
}
