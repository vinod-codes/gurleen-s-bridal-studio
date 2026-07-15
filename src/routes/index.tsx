import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
// @ts-ignore
import Masonry from "@/components/site/Masonry";
import {
  HERO,
  TRADITIONAL,
  DESTINATION,
  ENGAGEMENT,
  WESTERN,
  EDITORIAL,
  FOUNDER,
  ALL_PORTFOLIO,
} from "@/lib/images";
import { WA, PHONE, PHONE_DISPLAY, IG_BUSINESS } from "@/lib/whatsapp";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bridal Makeup Artist Mumbai — GKP Artistry & Makeovers | Book Your Date" },
      {
        name: "description",
        content:
          "GKP Artistry & Makeovers — Mumbai's trusted luxury bridal makeup artist. Soft, luminous, camera-honest looks for Indian weddings, destination brides & editorial shoots. Book your trial today.",
      },
      { property: "og:title", content: "Bridal Makeup Artist Mumbai — GKP Artistry & Makeovers" },
      {
        property: "og:description",
        content: "Luxury bridal makeup artist based in Mumbai. Serving weddings across India and worldwide. Enquire for your date.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "GKP Artistry & Makeovers",
          url: "https://gkpartistry.com",
          image: HERO,
          description:
            "Mumbai's luxury bridal makeup artist and academy — soft, luminous, camera-honest artistry for Indian brides, destination weddings and editorial shoots.",
          telephone: "+91 74003 53112",
          address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
          areaServed: ["Mumbai", "Maharashtra", "India", "Worldwide"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Bridal Makeup Services",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bridal Makeup" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Destination Wedding Makeup" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engagement Makeup" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reception Makeup" } },
            ],
          },
          sameAs: ["https://www.instagram.com/gurleenkaurpannu_mua"],
          priceRange: "₹₹₹",
        }),
      },
    ],
  }),
  component: Home,
});

const SERVICES = [
  { name: "Bridal Makeup", img: TRADITIONAL[0], wa: WA.bridal, desc: "Personalised bridal artistry — skin prep, trial and full wedding-day coverage tailored to your features, attire and rituals." },
  { name: "Destination Bridal Makeup", img: DESTINATION, wa: WA.destination, desc: "On-location bridal artistry for Indian and international destination weddings. Travel, stay and logistics quoted at actuals." },
  { name: "Engagement Makeup", img: ENGAGEMENT, wa: WA.engagement, desc: "Luminous, effortless looks for your roka or engagement ceremony — soft enough to feel like you, striking enough to photograph beautifully." },
  { name: "Reception Makeup", img: WESTERN[0], wa: WA.reception, desc: "Polished evening glamour for the reception. HD and airbrush techniques for a finish that holds from first dance to last." },
  { name: "Editorial Makeup", img: FOUNDER.lipShot as any, wa: WA.editorial, desc: "Camera-first artistry for magazine covers, brand campaigns and editorial projects. A different language — built for the lens." },
  { name: "Fashion & Campaign Shoots", img: WESTERN[1], wa: WA.fashion, desc: "Beauty direction for lookbooks, runway and commercial campaigns — working with photographers and art directors." },
  { name: "Airbrush & HD Makeup", img: TRADITIONAL[2], wa: WA.general, desc: "Advanced formulas and airbrushing for a flawless, long-lasting, camera-ready finish — ideal for Indian climate and lighting." },
  { name: "Photoshoot Makeup", img: TRADITIONAL[3], wa: WA.photoshoot, desc: "Pre-wedding, portfolio and personal-brand photoshoots — makeup calibrated for professional photography, not just the room." },
  { name: "Bridal Styling", img: TRADITIONAL[7], wa: WA.styling, desc: "Complete bridal styling — saree & dupatta drape, hair, jewellery placement and finishing, coordinated with your wedding-day artist." },
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
    </div>
  );
}

/* -------- Hero -------- */
function Hero() {
  const container = React.useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Image scale animation
    tl.fromTo(
      ".hero-bg",
      { scale: 1.05 },
      { scale: 1, duration: 1.8, ease: "power3.out" }
    );

    // Text reveal sequence
    tl.fromTo(
      ".hero-eyebrow",
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=1.2"
    );

    tl.fromTo(
      ".hero-title",
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
      "-=0.7"
    );

    tl.fromTo(
      ".hero-divider",
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" },
      "-=0.5"
    );

    tl.fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    );

    tl.fromTo(
      ".hero-cta",
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    );

    tl.fromTo(
      ".hero-featured",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    );

  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background — high quality full-width image, clean, bright */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={HERO}
          alt="Luxury Bridal Makeup"
          fetchPriority="high"
          style={{
            objectPosition: 'center 20%',
            filter: "brightness(1.05) contrast(1.02)",
            opacity: 1,
          }}
          className="hero-bg w-full h-full object-cover"
        />
        {/* Subtle vignette to make text legible without washing out the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/10 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/20 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-10 pt-32 pb-16 pointer-events-none">
        <div className="max-w-xl md:max-w-2xl mt-12 md:mt-24">
          <p className="hero-eyebrow font-sans text-[11px] font-medium tracking-[0.25em] uppercase text-gray-800 opacity-0 mb-6">
            MUMBAI · DESTINATION WEDDINGS
          </p>
          
          <h1 className="hero-title font-display text-black text-5xl sm:text-6xl md:text-[80px] lg:text-[90px] leading-[1.05] tracking-wide opacity-0">
            Bridal,<br />Refined.
          </h1>
          
          <div className="hero-divider opacity-0 my-10 border-l border-gold h-12 ml-2" />
          
          <p className="hero-subtitle font-sans font-light text-gray-800 text-lg md:text-[18px] leading-relaxed opacity-0 max-w-md">
            Flawless, luminous, and camera-honest artistry for the modern bride. Experience elevated beauty for your most photographed day.
          </p>
          
          <div className="hero-cta mt-12 pointer-events-auto opacity-0">
            <a href={WA.bridal} target="_blank" rel="noopener noreferrer" className="btn-wine bg-black text-white hover:bg-white hover:text-black transition-colors border border-black hover:border-black">
              Enquire For Your Date
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- Portfolio Preview -------- */
function PortfolioPreview() {
  const container = React.useRef<HTMLElement>(null);
  const scrollContent = React.useRef<HTMLDivElement>(null);

  // Mix editorial + bridal for visual variety
  const picks = [
    EDITORIAL[0], TRADITIONAL[0], EDITORIAL[2],
    TRADITIONAL[1], EDITORIAL[3], DESTINATION,
    EDITORIAL[4], TRADITIONAL[4], EDITORIAL[1],
  ];

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // Desktop only: GSAP horizontal scroll pinned to the section
    mm.add("(min-width: 768px)", () => {
      if (!scrollContent.current || !container.current) return;

      const getScrollAmount = () =>
        -(scrollContent.current!.scrollWidth - window.innerWidth + 48);

      const tween = gsap.to(scrollContent.current, {
        x: getScrollAmount,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1.4}`,
        pin: true,
        animation: tween,
        scrub: 1.2,
        invalidateOnRefresh: true,
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10 flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <Reveal>
          <div>
            <p className="font-sans text-[11px] font-medium tracking-[0.25em] uppercase text-gray-500">The Portfolio</p>
            <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-2xl text-black">
              Brides, in their first frame.
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="mt-8 inline-block text-sm font-medium tracking-[0.18em] uppercase text-black border-b border-gold pb-1 hover:text-gold hover:border-black transition-colors"
          >
            View Full Gallery →
          </Link>
        </Reveal>
      </div>

      {/* Mobile: Masonry Gallery from React Bits */}
      <div className="md:hidden w-full min-h-[600px] relative pb-10 px-4">
        <Masonry
          items={picks.map((img, i) => ({
            id: String(i),
            img: img.url,
            url: img.url,
            height: i % 2 === 0 ? 300 : 220,
          }))}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>

      {/* Desktop: GSAP horizontal scroll */}
      <div className="hidden md:block w-full pb-10">
        <div ref={scrollContent} className="flex gap-8 px-6 w-[max-content]">
          {picks.map((img, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden bg-gray-50 shrink-0 ${
                i % 2 === 0
                  ? "w-[450px] aspect-[4/5]"
                  : "w-[320px] aspect-[3/4] mt-20"
              }`}
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- Services -------- */
function Services() {
  const container = React.useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 85%",
        }
      }
    );
  }, { scope: container });

  return (
    <section id="services" ref={container} className="bg-gray-50 py-24 md:py-32">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-sans text-[11px] font-medium tracking-[0.25em] uppercase text-gray-500">The Services</p>
          <h2 className="font-display text-4xl md:text-6xl mt-4 text-black">Everything your wedding day needs.</h2>
          <div className="border-t border-gold w-16 mx-auto mt-8" />
          <p className="font-sans font-light text-gray-600 mt-6 text-[16px] md:text-[18px] leading-relaxed">From the bridal trial to the last touch-up — every look is built personally by Gurleen.</p>
        </Reveal>

        <div className="services-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((s, i) => (
            <a
              key={s.name}
              href={s.wa}
              target="_blank"
              rel="noreferrer"
              className="service-card group block relative overflow-hidden bg-white aspect-[4/5] opacity-0"
            >
              <img
                src={s.img.url}
                alt={s.img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-[1.5s] ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="font-display text-2xl md:text-[32px] text-white leading-tight">
                  {s.name}
                </h3>
                <p className="font-sans font-light text-sm text-white/90 mt-4 max-w-[28ch] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {s.desc}
                </p>
                <span className="mt-6 text-[11px] font-medium tracking-[0.25em] uppercase text-gold inline-flex items-center gap-3">
                  Enquire <span className="block w-8 h-px bg-gold transition-all group-hover:w-12" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- About (Founder on Home) -------- */
function About() {
  const container = React.useRef<HTMLElement>(null);

  useGSAP(() => {
    // Parallax the main image
    gsap.to(".about-img-main", {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    // Parallax the secondary image in the opposite direction
    gsap.to(".about-img-sub", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-20 items-center">
        <Reveal className="md:col-span-5 relative">
          <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
            <img src={FOUNDER.marble.url} alt={FOUNDER.marble.alt} className="about-img-main w-full h-[120%] object-cover -top-[10%] relative" loading="lazy" />
          </div>
          <div className="absolute -bottom-12 -right-10 w-2/3 aspect-[3/4] overflow-hidden bg-gray-100 hidden md:block shadow-xl">
            <img src={FOUNDER.lipShot.url} alt={FOUNDER.lipShot.alt} className="about-img-sub w-full h-[120%] object-cover -top-[10%] relative" loading="lazy" />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-7 md:pl-16">
          <p className="font-sans text-[11px] font-medium tracking-[0.25em] uppercase text-gray-500">Meet Gurleen</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl mt-6 leading-[1.05] text-black">
            8+ years of bridal artistry.<br />Every bride, personally.
          </h2>
          <div className="border-t border-gold w-16 my-10" />
          <div className="space-y-6 font-sans font-light text-[16px] md:text-[18px] text-gray-600 leading-relaxed max-w-xl">
            <p>
              Gurleen Kaur Pannu is the founder of GKP Artistry & Makeovers — a Mumbai-based bridal makeup studio known for a soft, luminous approach that photographs honestly and lasts through every ceremony.
            </p>
            <p>
              Her work travels with her brides — across India and to destinations overseas — and her academy carries the same philosophy into the next generation of artists.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-12">
            <a href={WA.general} target="_blank" rel="noreferrer" className="btn-wine bg-black text-white hover:bg-white hover:text-black hover:border-black transition-colors">Enquire on WhatsApp</a>
            <a href={IG_BUSINESS} target="_blank" rel="noreferrer" className="btn-ghost border border-black text-black hover:bg-black hover:text-white transition-colors">@gurleenkaurpannu_mua</a>
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
    <section id="gallery" className="bg-white py-24 md:py-32 border-t border-black/10">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10">
        <Reveal className="text-center mb-12">
          <p className="font-sans text-[11px] font-medium tracking-[0.25em] uppercase text-gray-500">The Gallery</p>
          <h2 className="font-display text-4xl md:text-6xl mt-4 text-black">A closer look.</h2>
        </Reveal>

        <Reveal className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 font-sans text-[11px] font-medium tracking-[0.22em] uppercase border transition-colors ${
                active === f
                  ? "bg-black text-white border-black"
                  : "bg-transparent text-gray-600 border-gray-300 hover:border-black hover:text-black"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((img, i) => (
            <motion.figure
              key={img.url + i}
              layout
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
              className="group relative overflow-hidden bg-gray-50 aspect-[3/4]"
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.04]"
              />
              <figcaption className="absolute bottom-4 left-4 text-[10px] tracking-[0.24em] uppercase text-white bg-black/60 px-3 py-1.5 backdrop-blur-sm">
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
  const container = React.useRef<HTMLElement>(null);

  useGSAP(() => {
    // Pin the left column on desktop
    let mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 20%",
        end: "bottom bottom",
        pin: ".academy-pin-content",
        pinSpacing: false,
      });
    });
  }, { scope: container });

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
    <section id="academy" ref={container} className="bg-black text-white py-24 md:py-32 relative">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10 grid lg:grid-cols-12 gap-16 lg:gap-16">
        <div className="lg:col-span-5 relative">
          <div className="academy-pin-content">
            <Reveal>
              <p className="font-sans text-[11px] font-medium tracking-[0.25em] uppercase text-gold">The Academy</p>
              <h2 className="font-display text-4xl md:text-6xl mt-4 text-white">
                Become a bridal makeup artist.
              </h2>
              <p className="font-sans font-light text-white/70 mt-6 text-[16px] md:text-[18px] leading-relaxed max-w-md">
                Three formats. One philosophy. Learn luxury bridal artistry, the business behind it, and the calm that defines a premium client experience — directly from Gurleen.
              </p>
              <Link to="/academy" className="inline-block mt-10 text-sm font-medium tracking-[0.18em] uppercase text-white/80 hover:text-gold border-b border-gold/40 pb-1 transition-colors">
                See Full Curriculum →
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-8 lg:gap-10">
          {courses.map((c, i) => (
            <Reveal key={c.title} delay={0.1}>
              <article className="relative h-full border border-white/10 bg-white/5 hover:border-gold transition-colors duration-500 p-8 md:p-12 flex flex-col">
                <p className="text-[11px] tracking-[0.28em] uppercase text-gold">{c.kicker}</p>
                <h3 className="font-display text-3xl md:text-[36px] text-white mt-3 leading-tight">
                  {c.title}
                </h3>
                <p className="font-sans font-light text-white/70 mt-4 text-[16px] leading-relaxed">{c.desc}</p>

                {c.citySelect && (
                  <div className="mt-8">
                    <label className="text-[10px] tracking-[0.28em] uppercase text-white/50">Select city</label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="mt-2 w-full bg-transparent border-b border-white/20 focus:border-gold py-3 font-sans text-white text-sm tracking-widest outline-none uppercase"
                    >
                      {CITIES.map((cc) => (
                        <option key={cc} value={cc} className="bg-black text-white">{cc}</option>
                      ))}
                    </select>
                  </div>
                )}

                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="mt-8 flex items-center justify-between w-full text-left font-sans text-[11px] font-medium tracking-[0.25em] uppercase text-white/80 hover:text-gold transition-colors border-t border-white/10 pt-6"
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
                  <ul className="mt-6 grid md:grid-cols-2 gap-y-3 gap-x-6 text-[14px] text-white/75 font-sans font-light">
                    {c.topics.map((t) => (
                      <li key={t} className="flex gap-3">
                        <span className="text-gold mt-2 block w-3 h-[1px] bg-gold" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <a
                  href={c.cta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 inline-flex items-center gap-3 text-sm tracking-[0.18em] uppercase text-gold hover:text-white transition-colors group/cta"
                >
                  {c.cta.label}
                  <span className="block w-8 h-[1px] bg-gold transition-all group-hover/cta:w-14 group-hover/cta:bg-white" />
                </a>
              </article>
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
    <section className="bg-gray-50 py-24 md:py-32 border-t border-black/10">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <Reveal>
          <p className="font-sans text-[11px] font-medium tracking-[0.25em] uppercase text-gray-500">On Instagram</p>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight text-black">
            See the work.
          </h2>
          <p className="font-sans font-light text-gray-600 mt-6 text-[16px] md:text-[18px] leading-relaxed max-w-md">
            Real brides, real weddings — Mumbai and beyond. Behind-the-scenes of a working bridal makeup studio, shared daily on Instagram.
          </p>
          <a
            href={IG_BUSINESS}
            target="_blank"
            rel="noreferrer"
            className="btn-wine bg-black text-white hover:bg-white hover:text-black hover:border-black transition-colors mt-10"
          >
            @gurleenkaurpannu_mua
          </a>
        </Reveal>

        <Reveal delay={0.15} className="grid grid-cols-3 gap-3 md:gap-4">
          {tiles.map((t, i) => (
            <a key={i} href={IG_BUSINESS} target="_blank" rel="noreferrer" className="group block aspect-square overflow-hidden bg-white shadow-sm">
              <img src={t.url} alt={t.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.06]" />
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
    <section className="relative bg-black text-white py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.2]">
        <img src={TRADITIONAL[0].url} alt="" className="w-full h-full object-cover grayscale" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 mx-auto max-w-screen-md px-6 text-center">
        <Reveal>
          <p className="font-sans text-[11px] font-medium tracking-[0.25em] uppercase text-gold">Ready to Book</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-[80px] mt-6 text-white leading-[1.05]">
            Book your bridal<br /><em className="text-gold italic">makeup artist.</em>
          </h2>
          <div className="border-t border-white/20 w-16 mx-auto my-12" />
          <div className="flex flex-wrap justify-center gap-6">
            <a href={WA.bridal} target="_blank" rel="noreferrer" className="btn-wine bg-white text-black hover:bg-gold hover:text-black hover:border-gold transition-colors">
              Enquire on WhatsApp
            </a>
            <a href={`tel:${PHONE}`} className="inline-flex items-center px-6 py-4 font-sans text-[12px] font-medium tracking-[0.2em] uppercase text-white/90 hover:text-gold transition-colors border border-transparent hover:border-gold">
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
