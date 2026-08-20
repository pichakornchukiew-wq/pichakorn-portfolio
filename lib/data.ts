export type SeriesName = "Silence" | "Interval" | "Aperture";

export interface CVEntry {
  year: string;
  text: string;
}

export interface ExhibitionEntry {
  slug: string;
  title: string;
  type: string;
  venue: string;
  dates: string;
  text: string[];
  images: string[];
}

export interface Artist {
  name: string;
  location: string;
  email: string;
  instagram: string;
  bio: string[];
  statement: string;
  education: CVEntry[];
  soloExhibitions: CVEntry[];
  groupExhibitions: CVEntry[];
  collaborations: CVEntry[];
  residencies: CVEntry[];
  design: CVEntry[];
  awards: CVEntry[];
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
  education: [
    { year: "2006 – 2010", text: "Bachelor of Fine Art-Chiang Mai University, Chiang Mai, Thailand" },
  ],
  soloExhibitions: [
    { year: "2026", text: "I don't understand why i have to follow you, Shenme art project, shanghai china." },
    { year: "2025", text: "This morning in japan, bababa gallery and gallery turnaround, tokyo japan" },
    { year: "2025", text: "Identity, studio 94, Thailand" },
    { year: "2023", text: "\"They Called me an Alien\" , Gallery Turn another round, Forus Sendai, Japan" },
    { year: "2020", text: "\"Experienced\" exhibition VS gallery, Bangkok, Thailand" },
    { year: "2019", text: "The future only, exhibition Chang Chui gallery, Bangkok, Thailand" },
    { year: "2018", text: "My name is DORMAN, exhibition Ronin capsule, Hua Hin, Thailand" },
    { year: "2018", text: "\"Objectivland\" exhibition, case space revolution, Bangkok, Thailand" },
    { year: "2016", text: "Solo exhibition, Welcome to ama studio, Taiwan" },
    { year: "2016", text: "Solo exhibition The condition of time, Le'meridien hotel, Chiang mai, Thailand" },
    { year: "2015", text: "What is แดส (That), Chiang Mai, Thailand" },
    { year: "2013", text: "Solo Exhibition Junk Objects colorful, Chiang Mai, Thailand" },
    { year: "2011", text: "Art Thesis Museum CMU Art Center Chiang Mai, Thailand" },
  ],
  groupExhibitions: [
    { year: "2024", text: "Duo exhibition \"Co-in-see\", The Slow, Indonesia" },
    { year: "2022", text: "Duo show Gardenia exhibition gallery tese, Denmark" },
    { year: "2022", text: "12 camels take a seat by chance at Kalm Village, Thailand" },
    { year: "2021", text: "Art for air exhibition, Chiangmai, Thailand" },
    { year: "2018", text: "Selected by mind self, Chiang mai, Thailand" },
    { year: "2018", text: "Open your eyes Open yesterday our mind Group exhibition, Chang Chui, Bangkok, Thailand" },
    { year: "2018", text: "All time High, art for charity, gallery Ver. Bangkok, Thailand" },
    { year: "2017", text: "Un espacio privilegiado para un ritual contempor'aneo, Spain" },
    { year: "2017", text: "702.9 Exhibition, Chiang mai, Thailand" },
    { year: "2017", text: "Wall hold stories, Art Bridge, Chiang rai, Thailand" },
    { year: "2016", text: "Variation, Lyla gallery, Chiang Mai, Thailand" },
    { year: "2016", text: "You know everything everything know you, The jam factory, Bangkok" },
    { year: "2015", text: "Linker art exhibition, Chiang Mai, Thailand" },
    { year: "2015", text: "Same same, Chiang Mai, Thailand" },
    { year: "2015", text: "Rumpai Loft Habitat, Chiang Mai, Thailand" },
    { year: "2014", text: "Yai sang krok, Chiang Mai, Thailand" },
    { year: "2014", text: "Sangdee Gallery, Chiang Mai, Thailand" },
    { year: "2013", text: "Re + shirt Photo, Chiang Mai, Thailand" },
    { year: "2013", text: "Muang Nai ( S ) Mog, Chiang Mai, Thailand" },
    { year: "2012", text: "Wall painting, Minimal Gallery, Chiang Mai, Thailand" },
    { year: "2012", text: "Art on bag, Minimal Gallery, Chiang Mai, Thailand" },
  ],
  collaborations: [
    { year: "2025", text: "Things that mattar, fashion brand, Japan" },
    { year: "2025", text: "Thai takarazuka Thaifestival, Japan" },
    { year: "2524", text: "Thai takarazuka Thaifestval, Japan" },
    { year: "2023", text: "The Fig Lobby Art Restaurant and hotel decorations , Bangkok Thailand" },
    { year: "2019", text: "Solitude is bliss cover painting album music brand, Thailand" },
  ],
  residencies: [
    { year: "2016", text: "Artist in residence, Taiwan" },
  ],
  design: [
    { year: "2014", text: "Design showcase at CHIANGMAI design week, Chiangmai Thailand" },
  ],
  awards: [
    { year: "", text: "Chiang Mai Design Eco art design lamp" },
  ],
};

export const EXHIBITIONS: ExhibitionEntry[] = [
  {
    slug: "tua-pen-not-recycled-art-design",
    title: "Tua Pen Not Recycled Art Design",
    type: "Recycled Art Design & Installation",
    collaboration: "Chiang Mai Design Week 2014",
    venue: "Chiang Mai, Thailand",
    dates: "Dec 6 - Dec 14, 2014",
    text: [
      "Tua Pen Not finds fresh use for recycled materials, creating new objects out of them without changing their original textures. Every design tells a story and influence of Semi-Abstract art, from collage the square line on the actual artwork like book cover and the bag that usable in real life on the concept \"Art Design Function\" This project is made between Keng and Not two best friend whom gave teak wood to Not to make it into this three recycle art design, first one is a teak table which use steel as an edge banding and overall silhouette and then used raisin to fill all the gap between the woods piece, one of the table leg are made of wood and the other three are made from steel that spray with pastel colour, second is the long chair that give a authentic feeling of original material and new interpret way to make it contemporary, and the last one is floor lamp which use the combine technique to combine wood and steel.",
      "This collection have a very strong signature of tua pen not vividly which is the collage that focus on compose in each corner, it create square space that have a continually rhythm and space that full of his true spirit.",
    ],
    images: ["/design-week-2014.jpg"],
  },
  {
    slug: "you-know-everything-everything-know-you",
    title: "You Know Everything, Everything Know You",
    type: "Duo Exhibition",
    venue: "The Jam Factory, Bangkok, Thailand",
    dates: "Feb 18 – Mar 27, 2016",
    text: [
      "An Art Exhibition by Jimmie James - Pichakorn Chukiew (tua pen not)",
      "Inside of each one of us is a wonderful place.",
      "The beginning of our lives we do know everything, maybe we don't know it's name or its function but we know it, and we do know it knows us too.",
      "It's a different kind of knowing, like when you love someone and they love you. There's a connection Through the heart.",
      "It can happen with abstract painting, this knowing of the heart. To come from the inside back to the world of wonder, and the connection to the hearts of others.",
    ],
    images: ["/you-know-everything-1.jpg", "/you-know-everything-2.jpg"],
  },
];

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
  series?: SeriesName;
  year: number;
  dims: string;
  h: string;
  seed?: string;
  image?: string;
  medium?: string;
  category?: string;
  description?: string;
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
  { title: "You Know Everything, Everything Know You I", year: 2016, dims: "Dimensions on request", h: "h-96", image: "/you-know-everything-1.jpg", medium: "Acrylic on canvas", category: "Painting", description: "Shown in the duo exhibition \"You Know Everything, Everything Know You\" with Jimmie James, The Jam Factory, Bangkok, Feb 18 – Mar 27, 2016." },
  { title: "You Know Everything, Everything Know You II", year: 2016, dims: "Dimensions on request", h: "h-72", image: "/you-know-everything-2.jpg", medium: "Acrylic on canvas", category: "Painting", description: "Shown in the duo exhibition \"You Know Everything, Everything Know You\" with Jimmie James, The Jam Factory, Bangkok, Feb 18 – Mar 27, 2016." },
];

export const WORKS: Work[] = RAW_WORKS.map((w, i) => ({
  id: i + 1,
  title: w.title,
  year: w.year,
  series: w.series ?? "Silence",
  medium: w.medium ?? (w.series ? MEDIUM_BY_SERIES[w.series] : "Mixed media"),
  category: w.category ?? (w.series ? CATEGORY_BY_SERIES[w.series] : "Painting"),
  dimensions: w.dims,
  heightClass: w.h,
  image: w.image ?? `https://picsum.photos/seed/${w.seed}/900/1200`,
  description:
    w.description ??
    "A continuation of the studio's long-running inquiry into stillness and duration, made over several months of returning to the same surface until the image resolved into something the artist no longer felt she had authored alone.",
}));

export const EXHIBITION_WORK_IDS = [13, 14];
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
