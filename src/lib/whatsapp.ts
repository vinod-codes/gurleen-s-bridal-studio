export const PHONE = "+917400353112";
export const PHONE_DISPLAY = "+91 74003 53112";
export const IG_BUSINESS = "https://www.instagram.com/gurleenkaurpannu_mua/";
export const IG_PERSONAL = "https://www.instagram.com/gurleenkaurpannnu/";
export const THREADS = "https://www.threads.com/@gurleenkaurpannu_mua";

export function wa(text: string) {
  return `https://wa.me/917400353112?text=${encodeURIComponent(text)}`;
}

export const WA = {
  general: wa("Hi Gurleen, I'd like to enquire about your services."),
  bridal: wa("Hi Gurleen, I'd like to enquire about bridal makeup for my wedding."),
  destination: wa("Hi Gurleen, I'd like to enquire about destination bridal makeup."),
  engagement: wa("Hi Gurleen, I'd like to book engagement makeup."),
  reception: wa("Hi Gurleen, I'd like to book reception makeup."),
  editorial: wa("Hi Gurleen, I'd like to enquire about editorial makeup."),
  fashion: wa("Hi Gurleen, I'd like to enquire about a fashion or campaign shoot."),
  celebrity: wa("Hi Gurleen, I'd like to enquire about celebrity makeup."),
  photoshoot: wa("Hi Gurleen, I'd like to enquire about photoshoot makeup."),
  styling: wa("Hi Gurleen, I'd like to enquire about bridal styling."),
  masterclass: wa("Hi Gurleen, I'd like to reserve a seat in the 5-Day Masterclass."),
  lookLearn: (city: string) =>
    wa(`Hi Gurleen, I'd like to enquire about the 1-Day Look & Learn (${city} edition).`),
  twoMonth: wa("Hi Gurleen, I'd like to enrol in the 2-Month Professional Makeup Course."),
  academyGeneral: wa("Hi Gurleen, I'd like to enquire about your academy courses."),
  oneOnOne: wa("Hi Gurleen, I'd like to enquire about One-on-One private makeup training."),
};
