import img703298 from "@/assets/bridal/703298286.jpg.asset.json";
import img466970 from "@/assets/bridal/466970031.jpg.asset.json";
import img466972 from "@/assets/bridal/466972229.jpg.asset.json";
import img466976 from "@/assets/bridal/466976768.jpg.asset.json";
import img467144 from "@/assets/bridal/467144624.jpg.asset.json";
import img467336 from "@/assets/bridal/467336503.jpg.asset.json";
import img702799 from "@/assets/bridal/702799812.jpg.asset.json";
import img703055 from "@/assets/bridal/703055670.jpg.asset.json";
import img703259 from "@/assets/bridal/703259471.jpg.asset.json";
import img684222 from "@/assets/bridal/684222717.jpg.asset.json";
import img686411 from "@/assets/bridal/686411525.jpg.asset.json";
import img658626 from "@/assets/bridal/658626963.jpg.asset.json";
import img660354 from "@/assets/bridal/660354905.jpg.asset.json";
import img656634 from "@/assets/bridal/656634297.jpg.asset.json";
import img658113 from "@/assets/bridal/658113993.jpg.asset.json";

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
