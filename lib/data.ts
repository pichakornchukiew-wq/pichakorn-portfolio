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
  location: "Chiang Mai, Thailand",
  email: "pichakornchukiew@gmail.com",
  instagram: "@tuapennot",
  bio: [
    "Pichakorn Chukiew — known professionally as tuapennot — is a multidisciplinary artist working across painting, installation, sculpture, mixed media, found-object art, and street art. His practice investigates how value is constructed, transformed, and reimagined through artistic intervention.",
    "He holds a Bachelor of Fine Art from Chiang Mai University (2006–2010) and has since exhibited extensively across Thailand, Japan, Taiwan, Spain, Indonesia, Denmark, and China, including solo exhibitions in Bangkok, Chiang Mai, Hua Hin, Shanghai, and Tokyo.",
    "His work has extended into collaborations with fashion, hospitality, and music brands, and he served as an artist in residence in Taiwan in 2016. He is based in Chiang Mai, Thailand.",
  ],
  statement:
    "Pichakorn Chukiew (tuapennot) is a multidisciplinary artist whose practice spans painting, installation, sculpture, mixed media, found-object art, and street art. Working primarily with reclaimed materials and everyday objects, he investigates how value is constructed, transformed, and reimagined through artistic intervention. His work is rooted in the belief that nothing is permanent. Inspired by nature's continuous cycles of change, he approaches discarded materials not as waste, but as evidence of social, economic, and cultural systems. Through processes of collecting, layering, painting, and improvisation, familiar objects are displaced from their original functions and invited into new narratives. Drawing from personal experience, news media, digital culture, and observations of everyday life, tuapennot examines the inequalities embedded within contemporary society. His practice reflects on the tensions between developed and developing countries, questioning how power, consumption, labor, and economic growth shape human relationships and define the value assigned to both people and objects. Rather than offering direct answers, his works create spaces for interpretation. Through symbolism and semiotics, he invites viewers to reconsider what is often overlooked, revealing the hidden structures that influence daily life and exposing the fragile boundaries between progress and exploitation, abundance and scarcity, value and waste. For tuapennot, art is an ongoing process of transformation. Each work becomes a site where materials, memories, and social realities converge, encouraging dialogue about inequality, sustainability, and the shifting relationship between humanity and its environment.",
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
