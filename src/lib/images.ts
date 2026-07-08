// ── Existing bridal portfolio images ──────────────────────────────────────────
const img703298 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1782851381/gurleen-bridal/703298286.jpg" };
const img466970 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1782851361/gurleen-bridal/466970031.jpg" };
const img466972 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1782851363/gurleen-bridal/466972229.jpg" };
const img466976 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1782851364/gurleen-bridal/466976768.jpg" };
const img467144 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1782851365/gurleen-bridal/467144624.jpg" };
const img467336 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1782851366/gurleen-bridal/467336503.jpg" };
const img702799 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1782851375/gurleen-bridal/702799812.jpg" };
const img703055 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1782851377/gurleen-bridal/703055670.jpg" };
const img703259 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1782851378/gurleen-bridal/703259471.jpg" };
const img684222 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1782851372/gurleen-bridal/684222717.jpg" };
const img686411 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1782851374/gurleen-bridal/686411525.jpg" };
const img658626 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1782851370/gurleen-bridal/658626963.jpg" };
const img660354 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1782851371/gurleen-bridal/660354905.jpg" };
const img656634 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1782851367/gurleen-bridal/656634297.jpg" };
const img658113 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1782851368/gurleen-bridal/658113993.jpg" };

// ── New editorial / bridal images (July 2025) ─────────────────────────────────
const img474873 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1783513041/gurleen-bridal/new/474873441_18483378034012651_2534432703681857257_n.jpg" };
const img475175 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1783513042/gurleen-bridal/new/475175382_18483378814012651_2354944404280744292_n.jpg" };
const img475182 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1783513044/gurleen-bridal/new/475182868_18483376987012651_8979067383530738270_n.jpg" };
const img475238 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1783513045/gurleen-bridal/new/475238544_18483378778012651_1790888249640331621_n.jpg" };
const img475248 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1783513047/gurleen-bridal/new/475248993_18483378913012651_5013762314277552791_n.jpg" };
const img475286 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1783513048/gurleen-bridal/new/475286042_18483377029012651_8146602852718343675_n.jpg" };
const img475332 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1783513049/gurleen-bridal/new/475332659_18483376951012651_6949909951824279688_n.jpg" };
const img645461 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1783513052/gurleen-bridal/new/645461141_17979654647980241_4977264767842254563_n.jpg" };
const img650921 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1783513054/gurleen-bridal/new/650921884_17989349285778139_7604370508655928292_n.jpg" };
const img653780 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1783513055/gurleen-bridal/new/653780337_18093483752514844_6807929596524980742_n.jpg" };
const img655181 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1783513056/gurleen-bridal/new/655181084_18065402594655122_3739183490766066489_n.jpg" };
const img657160 = { url: "https://res.cloudinary.com/w1ahlvct/image/upload/v1783513058/gurleen-bridal/new/657160142_18110576773764063_7215151731712494112_n.jpg" };

export type BridalImage = {
  url: string;
  alt: string;
  category: "Bridal" | "Destination" | "Engagement" | "Reception" | "Editorial" | "Western";
};

// ── Hero image ─────────────────────────────────────────────────────────────────
// The stunning red bridal at terracotta arches — high contrast, editorial feel
export const HERO = img645461.url;

// ── Traditional / Bridal ───────────────────────────────────────────────────────
export const TRADITIONAL: BridalImage[] = [
  { url: img703298.url, alt: "Bridal portrait in deep red lehenga with emerald kundan necklace", category: "Bridal" },
  { url: img703259.url, alt: "Seated bride in deep red with full jewellery set", category: "Bridal" },
  { url: img467336.url, alt: "Close-up bridal portrait with layered kundan necklace and soft smoky eye", category: "Bridal" },
  { url: img467144.url, alt: "Bride in red and gold embroidered lehenga at palace setting", category: "Bridal" },
  { url: img466970.url, alt: "Bride in coral-red lehenga with dupatta over head", category: "Bridal" },
  { url: img466972.url, alt: "Bride in red lehenga, three-quarter turn portrait", category: "Bridal" },
  { url: img466976.url, alt: "Bride in red lehenga with palm tree background", category: "Bridal" },
  { url: img702799.url, alt: "Bride in maroon lehenga framing face with jhumka earrings", category: "Bridal" },
  { url: img703055.url, alt: "Bride in deep red lehenga at doorway", category: "Bridal" },
  // New bridal portraits at terracotta heritage arches
  { url: img650921.url, alt: "Bride in crimson lehenga at terracotta heritage steps, nath portrait", category: "Bridal" },
  { url: img657160.url, alt: "Bride in red embroidered lehenga seated at heritage steps, looking ahead", category: "Bridal" },
];

// ── Destination ────────────────────────────────────────────────────────────────
export const DESTINATION: BridalImage = {
  url: img684222.url,
  alt: "Bride in champagne silver lehenga at tropical resort balustrade",
  category: "Destination",
};

// ── Engagement ─────────────────────────────────────────────────────────────────
export const ENGAGEMENT: BridalImage = {
  url: img686411.url,
  alt: "Bride in blush pink floral lehenga twirling in garden",
  category: "Engagement",
};

// ── Western / Editorial ────────────────────────────────────────────────────────
export const WESTERN: BridalImage[] = [
  { url: img658626.url, alt: "Bride in ivory beaded gown with cathedral veil on staircase", category: "Western" },
  { url: img660354.url, alt: "Bride in ivory beaded gown with veil at rooftop", category: "Western" },
];

// ── New editorial series (white lace, luxury interior) ─────────────────────────
export const EDITORIAL: BridalImage[] = [
  { url: img475238.url, alt: "Model in ivory lace dress holding beaded clutch at heritage staircase", category: "Editorial" },
  { url: img474873.url, alt: "Close-up portrait in white lace dress with warm bokeh lighting", category: "Editorial" },
  { url: img475175.url, alt: "Full-length portrait in white lace dress looking over shoulder at staircase", category: "Editorial" },
  { url: img475182.url, alt: "Model in white lace dress standing at ornate staircase railing", category: "Editorial" },
  { url: img475248.url, alt: "Model in white lace dress with arms open at staircase", category: "Editorial" },
  { url: img475286.url, alt: "Model in white lace dress reading a book, warm interior light", category: "Editorial" },
  { url: img475332.url, alt: "White lace dress editorial portrait at heritage interior", category: "Editorial" },
];

// ── Founder ────────────────────────────────────────────────────────────────────
export const FOUNDER = {
  lipShot: { url: img474873.url, alt: "Gurleen close-up portrait in white lace dress" },
  marble: { url: img475286.url, alt: "Gurleen reading a book in white lace dress" },
};

// ── Full portfolio (for portfolio page) ────────────────────────────────────────
export const ALL_PORTFOLIO: BridalImage[] = [
  ...TRADITIONAL,
  DESTINATION,
  ENGAGEMENT,
  ...WESTERN,
  ...EDITORIAL,
];
