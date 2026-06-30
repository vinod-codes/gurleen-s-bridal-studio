import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Reveal } from "@/components/site/Reveal";
import {
  HERO,
  TRADITIONAL,
  DESTINATION,
  ENGAGEMENT,
  WESTERN,
  FOUNDER,
  ALL_PORTFOLIO,
} from "@/lib/images";
import { WA, PHONE, PHONE_DISPLAY, IG_BUSINESS } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gurleen Kaur Pannu — Luxury Bridal Makeup Artist, Mumbai" },
      {
        name: "description",
        content:
          "Editorial bridal artistry by Gurleen Kaur Pannu. Mumbai-based, worldwide destination weddings, and a professional makeup academy.",
      },
      { property: "og:title", content: "Gurleen Kaur Pannu — Luxury Bridal Makeup Artist" },
      {
        property: "og:description",
        content: "Mumbai-based luxury bridal artistry. Available worldwide.",
      },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: Home,
});

const SERVICES = [
  { name: "Bridal Makeup", img: TRADITIONAL[0], wa: WA.bridal, desc: "Signature bridal artistry tailored to your features, attire and rituals." },
  { name: "Destination Bridal Makeup", img: DESTINATION, wa: WA.destination, desc: "On-location bridal artistry for weddings across India and worldwide." },
  { name: "Engagement Makeup", img: ENGAGEMENT, wa: WA.engagement, desc: "Soft, luminous looks for engagements and roka ceremonies." },
  { name: "Reception Makeup", img: WESTERN[0], wa: WA.reception, desc: "Polished, contemporary glamour for the reception evening." },
  { name: "Editorial Makeup", img: FOUNDER.lipShot as any, wa: WA.editorial, desc: "Magazine and editorial looks crafted for the lens." },
  { name: "Fashion & Campaign Shoots", img: WESTERN[1], wa: WA.fashion, desc: "Beauty direction for campaigns, lookbooks and runway." },
  { name: "Celebrity Makeup", img: TRADITIONAL[2], wa: WA.celebrity, desc: "Discreet, camera-ready makeup for public appearances.", placeholder: true },
  { name: "Photoshoot Makeup", img: TRADITIONAL[3], wa: WA.photoshoot, desc: "Pre-wedding, portfolio and personal-brand photoshoots." },
  { name: "Bridal Styling", img: TRADITIONAL[7], wa: WA.styling, desc: "Complete styling — drape, hair, jewellery placement and finish." },
];

function Home() {
  return (
    <div className="bg-ivory text-ink overflow-x-hidden">
      <Nav />
      <Hero />
      <PortfolioPreview />
      <Services />
      <About />
      <GalleryFiltered />
      <Academy />
      <InstagramCallout />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* -------- Hero -------- */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img 
          src={HERO} 
          alt="" 
          className="w-full h-full object-cover object-[center_30%] md:object-[0%_0%] md:scale-[1.01] md:translate-x-[10%] md:translate-y-[0%]" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/80 pointer-events-none" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 md:pb-32 w-full pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="eyebrow !text-gold"
        >
          Mumbai · Worldwide
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-ivory text-[40px] sm:text-6xl md:text-7xl lg:text-[88px] mt-5 max-w-4xl leading-[1.02] tracking-tight"
        >
          Gurleen Kaur<br />Pannu
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="font-display italic text-ivory/90 text-lg md:text-2xl mt-6 max-w-2xl"
        >
          Luxury bridal makeup artistry, made for the most photographed day of your life.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="flex flex-wrap gap-4 mt-10 pointer-events-auto"
        >
          <a href={WA.bridal} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-3">
            Inquire Availability
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-ivory/70"
      >
        <span className="text-[10px] tracking-[0.32em] uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="block w-px h-10 bg-ivory/50"
        />
      </motion.div>
    </section>
  );
}

/* -------- Portfolio Preview -------- */
function PortfolioPreview() {
  const picks = [
    TRADITIONAL[1], TRADITIONAL[2], DESTINATION,
    TRADITIONAL[4], WESTERN[0], ENGAGEMENT,
    TRADITIONAL[6], TRADITIONAL[3],
  ];
  return (
    <section id="portfolio" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow">The Portfolio</p>
            <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-2xl">
              Brides, in their first frame.
            </h2>
          </div>
          <Link to="/portfolio" className="text-sm tracking-[0.18em] uppercase text-ink hover:text-wine border-b border-gold/60 hover:border-wine pb-1 w-fit transition-colors">
            View Full Gallery →
          </Link>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {picks.map((img, i) => (
            <Reveal key={i} delay={i * 0.05} className={i % 5 === 0 ? "md:row-span-2 md:col-span-2" : ""}>
              <figure className="group relative overflow-hidden bg-sand aspect-[3/4] md:aspect-auto md:h-full">
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- Services -------- */
function Services() {
  return (
    <section id="services" className="bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow">The Services</p>
          <h2 className="font-display text-4xl md:text-6xl mt-4">A curated atelier of work.</h2>
          <div className="hairline w-32 mx-auto mt-8" />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 0.08}>
              {/* {s.placeholder ? <PLACEHOLDER: swap for real Celebrity Makeup photo /> : null} */}
              <a
                href={s.wa}
                target="_blank"
                rel="noreferrer"
                className="group block relative overflow-hidden bg-ink aspect-[4/5]"
              >
                <img
                  src={s.img.url}
                  alt={s.img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-90 transition-all duration-[1s] ease-out group-hover:scale-[1.04] group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end text-ivory">
                  <h3 className="font-display text-2xl md:text-[28px] text-ivory leading-tight">
                    {s.name}
                  </h3>
                  <p className="text-sm text-ivory/85 mt-3 max-w-[28ch] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {s.desc}
                  </p>
                  <span className="mt-5 text-[11px] tracking-[0.28em] uppercase text-gold inline-flex items-center gap-2">
                    Enquire <span className="block w-6 h-px bg-gold transition-all group-hover:w-10" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- About -------- */
function About() {
  return (
    <section id="about" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <Reveal className="md:col-span-5 relative">
          <div className="relative aspect-[3/4] overflow-hidden bg-sand">
            <img src={FOUNDER.marble.url} alt={FOUNDER.marble.alt} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-10 -right-6 w-2/3 aspect-[3/4] overflow-hidden bg-sand hidden md:block shadow-2xl">
            <img src={FOUNDER.lipShot.url} alt={FOUNDER.lipShot.alt} className="w-full h-full object-cover" loading="lazy" />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-7 md:pl-10">
          <p className="eyebrow">Meet Gurleen</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05]">
            An eye for romance.<br />A hand for restraint.
          </h2>
          <div className="hairline w-24 my-8" />
          <div className="space-y-5 text-[17px] text-taupe leading-relaxed max-w-xl">
            <p>
              Gurleen Kaur Pannu is a Mumbai-based bridal makeup artist and educator,
              known for a soft, luminous approach to traditional Indian bridal beauty —
              skin that breathes, eyes with quiet depth, lips with real colour.
            </p>
            <p>
              Her work travels with her brides — across India and overseas — and her
              academy carries the same philosophy into the next generation of artists.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-10">
            <a href={WA.general} target="_blank" rel="noreferrer" className="btn-wine">Chat on WhatsApp</a>
            <a href={IG_BUSINESS} target="_blank" rel="noreferrer" className="btn-ghost">@gurleenkaurpannu_mua</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------- Filtered Gallery -------- */
const FILTERS = ["All", "Bridal", "Destination", "Engagement", "Reception", "Editorial", "Western"] as const;
function GalleryFiltered() {
  const [active, setActive] = useState<typeof FILTERS[number]>("All");
  const filtered = active === "All" ? ALL_PORTFOLIO : ALL_PORTFOLIO.filter((i) => i.category === active);
  return (
    <section id="gallery" className="bg-ivory py-24 md:py-32 border-t border-ink/5">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center mb-12">
          <p className="eyebrow">The Gallery</p>
          <h2 className="font-display text-4xl md:text-6xl mt-4">A closer look.</h2>
        </Reveal>

        <Reveal className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 text-[11px] tracking-[0.22em] uppercase border transition-all ${
                active === f
                  ? "bg-wine text-ivory border-wine"
                  : "bg-transparent text-ink border-ink/20 hover:border-wine hover:text-wine"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {filtered.map((img, i) => (
            <motion.figure
              key={img.url + i}
              layout
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
              className="group relative overflow-hidden bg-sand aspect-[3/4]"
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
              />
              <figcaption className="absolute bottom-3 left-3 text-[10px] tracking-[0.24em] uppercase text-ivory bg-ink/50 px-2 py-1 backdrop-blur-sm">
                {img.category}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* -------- Academy -------- */
const CITIES = ["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chandigarh", "Jaipur"];

function Academy() {
  const [city, setCity] = useState("Delhi");
  const [open, setOpen] = useState<number | null>(null);

  const courses = [
    {
      title: "5-Day Masterclass",
      kicker: "Intensive",
      desc: "Professional hands-on training for aspiring makeup artists.",
      topics: ["Skin prep & priming", "Bridal eye architecture", "Hair sculpting basics", "Camera-ready finishing"],
      cta: { href: WA.masterclass, label: "Reserve Your Seat" },
    },
    {
      title: "1-Day Look & Learn",
      kicker: `${city} Edition`,
      desc: "A focused city-wise day with a complete signature bridal look.",
      topics: [
        "Signature Bridal Glam", "Glass Skin Techniques", "Soft Sculpting", "Monochrome Glam",
        "Juicy Lips", "Modern Bridal Makeup", "Luxury Client Experience", "Industry Insights",
      ],
      cta: { href: WA.lookLearn(city), label: `Enquire — ${city}` },
      citySelect: true,
    },
    {
      title: "2-Month Professional Course",
      kicker: "Career Track",
      desc: "End-to-end professional formation for the working artist.",
      topics: [
        "Bridal Makeup", "Hair Styling", "Skin Preparation", "Color Theory",
        "Product Knowledge", "Draping", "Photography", "Portfolio Building",
        "Business & Branding", "Social Media for Makeup Artists",
        "Pricing Strategy", "Client Communication", "Certification", "Mentorship",
      ],
      cta: { href: WA.twoMonth, label: "Enrol Now" },
    },
  ];

  return (
    <section id="academy" className="bg-ink text-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow !text-gold">The Academy</p>
          <h2 className="font-display text-4xl md:text-6xl mt-4 text-ivory">
            For the next generation of artists.
          </h2>
          <p className="text-ivory/70 mt-6 text-[17px] leading-relaxed">
            Three formats. One philosophy. Learn the craft, the business and the bedside
            manner of luxury bridal artistry — directly from Gurleen.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <article className="relative h-full border border-ivory/15 bg-ink/40 hover:border-gold/60 transition-colors duration-500 p-8 md:p-10 flex flex-col">
                <p className="text-[11px] tracking-[0.28em] uppercase text-gold">{c.kicker}</p>
                <h3 className="font-display text-3xl md:text-[32px] text-ivory mt-3 leading-tight">
                  {c.title}
                </h3>
                <p className="text-ivory/70 mt-4 text-[15px] leading-relaxed">{c.desc}</p>

                {c.citySelect && (
                  <div className="mt-6">
                    <label className="text-[10px] tracking-[0.28em] uppercase text-ivory/60">Select city</label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="mt-2 w-full bg-transparent border-b border-ivory/30 focus:border-gold py-2 text-ivory text-sm tracking-wider outline-none"
                    >
                      {CITIES.map((cc) => (
                        <option key={cc} value={cc} className="bg-ink">{cc}</option>
                      ))}
                    </select>
                  </div>
                )}

                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="mt-7 flex items-center justify-between w-full text-left text-[11px] tracking-[0.28em] uppercase text-ivory/80 hover:text-gold transition-colors border-t border-ivory/15 pt-5"
                >
                  What You'll Learn
                  <span className={`transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 space-y-2 text-[14px] text-ivory/75">
                    {c.topics.map((t) => (
                      <li key={t} className="flex gap-3">
                        <span className="text-gold mt-1.5 block w-3 h-px bg-gold" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <a
                  href={c.cta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-3 text-sm tracking-[0.18em] uppercase text-gold hover:text-ivory transition-colors group/cta"
                >
                  {c.cta.label}
                  <span className="block w-8 h-px bg-gold transition-all group-hover/cta:w-14" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-14">
          <Link to="/academy" className="text-sm tracking-[0.18em] uppercase text-ivory/80 hover:text-gold border-b border-gold/40 pb-1 transition-colors">
            See Full Curriculum →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* -------- Process -------- */
function Process() {
  const steps = [
    { n: "01", t: "Consultation", d: "We talk through your wedding, attire, venue and the kind of beauty that feels like you." },
    { n: "02", t: "Trial", d: "A studio trial where we design and finalise your bridal look — photographed for reference." },
    { n: "03", t: "Day Of", d: "On the morning of your wedding, the look is recreated with calm, precision and care." },
  ];
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl mb-16">
          <p className="eyebrow">The Experience</p>
          <h2 className="font-display text-4xl md:text-6xl mt-4">What working together looks like.</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="border-t border-gold/40 pt-6">
                <p className="font-display text-gold text-xl">{s.n}</p>
                <h3 className="font-display text-2xl md:text-3xl mt-3">{s.t}</h3>
                <p className="text-taupe mt-4 leading-relaxed text-[15px]">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- Instagram -------- */
function InstagramCallout() {
  const tiles = [TRADITIONAL[5], TRADITIONAL[2], ENGAGEMENT, DESTINATION, WESTERN[1], TRADITIONAL[8]];
  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <Reveal>
          <p className="eyebrow">On Instagram</p>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
            Follow the studio.
          </h2>
          <p className="text-taupe mt-6 text-[17px] leading-relaxed max-w-md">
            New brides, behind-the-scenes, and the day-to-day of a working makeup atelier — shared on Instagram.
          </p>
          <a
            href={IG_BUSINESS}
            target="_blank"
            rel="noreferrer"
            className="btn-wine mt-8"
          >
            @gurleenkaurpannu_mua
          </a>
        </Reveal>

        <Reveal delay={0.15} className="grid grid-cols-3 gap-2 md:gap-3">
          {tiles.map((t, i) => (
            <a key={i} href={IG_BUSINESS} target="_blank" rel="noreferrer" className="group block aspect-square overflow-hidden bg-ivory">
              <img src={t.url} alt={t.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* -------- Final CTA -------- */
function FinalCTA() {
  return (
    <section className="relative bg-wine text-ivory py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08]">
        <img src={TRADITIONAL[0].url} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="eyebrow !text-gold">Begin</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mt-5 text-ivory leading-[1.05]">
            Let's design the look<br /><em className="text-gold/90">you'll remember.</em>
          </h2>
          <div className="hairline w-24 mx-auto my-10" />
          <div className="flex flex-wrap justify-center gap-4">
            <a href={WA.bridal} target="_blank" rel="noreferrer" className="btn-ghost-light">
              Book Your Bridal Makeup
            </a>
            <a href={`tel:${PHONE}`} className="inline-flex items-center px-6 py-4 text-sm tracking-[0.18em] uppercase text-ivory/90 hover:text-gold transition-colors">
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
