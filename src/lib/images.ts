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

export type BridalImage = {
  url: string;
  alt: string;
  category: "Bridal" | "Destination" | "Engagement" | "Reception" | "Editorial" | "Western";
};

export const HERO = img703298.url;

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
];

export const DESTINATION: BridalImage = {
  url: img684222.url,
  alt: "Bride in champagne silver lehenga at tropical resort balustrade",
  category: "Destination",
};

export const ENGAGEMENT: BridalImage = {
  url: img686411.url,
  alt: "Bride in blush pink floral lehenga twirling in garden",
  category: "Engagement",
};

export const WESTERN: BridalImage[] = [
  { url: img658626.url, alt: "Bride in ivory beaded gown with cathedral veil on staircase", category: "Western" },
  { url: img660354.url, alt: "Bride in ivory beaded gown with veil at rooftop", category: "Western" },
];

export const FOUNDER = {
  lipShot: { url: img656634.url, alt: "Gurleen applying lip product in warm lamp-lit interior" },
  marble: { url: img658113.url, alt: "Gurleen laughing in sequinned gown in sunlit marble bathroom" },
};

export const ALL_PORTFOLIO: BridalImage[] = [
  ...TRADITIONAL,
  DESTINATION,
  ENGAGEMENT,
  ...WESTERN,
];
