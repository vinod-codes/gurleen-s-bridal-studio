import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Reveal } from "@/components/site/Reveal";
import { WA, IG_BUSINESS } from "@/lib/whatsapp";
import { FOUNDER, TRADITIONAL } from "@/lib/images";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GKP Artistry & Makeovers — Luxury Bridal Makeup Artist, Mumbai" },
      {
        name: "description",
        content:
          "Meet Gurleen, the founder of GKP Artistry & Makeovers — a Mumbai-based luxury bridal makeup artist and educator.",
      },
      { property: "og:title", content: "About GKP Artistry & Makeovers" },
      {
        property: "og:description",
        content: "Mumbai-based luxury bridal artist and educator.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: FOUNDER.marble.url },
      { name: "twitter:image", content: FOUNDER.marble.url },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "GKP Artistry & Makeovers",
          jobTitle: "Luxury Bridal Makeup Artist & Educator",
          image: FOUNDER.marble.url,
          address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
          sameAs: [IG_BUSINESS],
        }),
      },
    ],
  }),
  component: AboutPage,
});

const PILLARS = [
  { t: "Restraint", d: "Skin left to breathe. Colour placed with intention. Nothing added that the camera doesn't ask for." },
  { t: "Ritual", d: "A calm, unhurried studio — trials that feel like a conversation, mornings that feel like the softest possible start." },
  { t: "Longevity", d: "Products and techniques chosen so the last portrait of the night looks like the first." },
];

const CHAPTERS = [
  { y: "The training", d: "Years of assisting, editorial sets and back-to-back bridal seasons — the years that build a hand." },
  { y: "The studio", d: "A private atelier in Mumbai, built around one bride at a time." },
  { y: "The academy", d: "A quiet transfer of craft — one masterclass, one Look & Learn, one professional cohort at a time." },
  { y: "Today", d: "Weddings across India and destination editions overseas; a growing archive of quiet, luminous portraits." },
];

function AboutPage() {
  const container = React.useRef<HTMLElement>(null);
  const [posXMain, setPosXMain] = React.useState(50);
  const [posYMain, setPosYMain] = React.useState(50);
  const [zoomMain, setZoomMain] = React.useState(1);
  
  const [posXSub, setPosXSub] = React.useState(50);
  const [posYSub, setPosYSub] = React.useState(50);
  const [zoomSub, setZoomSub] = React.useState(1);

  useGSAP(() => {
    gsap.to(".parallax-img-main", {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to(".parallax-img-sub", {
      yPercent: -25,
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
    <div className="bg-ivory text-ink min-h-screen">
      <Nav />

      <section className="pt-36 md:pt-44 pb-16 md:pb-24 bg-ivory">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="eyebrow">The Artist</p>
          <h1 className="font-display text-5xl md:text-7xl mt-4 leading-[1.03]">
            GKP Artistry<br/>& Makeovers.
          </h1>
          <div className="hairline w-32 mx-auto mt-10" />
          <p className="text-taupe mt-8 text-[17px] leading-relaxed max-w-2xl mx-auto">
            A Mumbai-based bridal makeup artist and educator, working with a light hand,
            a considered palette and a lens-first eye.
          </p>
        </div>
      </section>

      <section ref={container} className="pb-24 md:pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10 md:gap-16 items-center relative">
          {/* Dev Tools (Main Image) */}
          <div className="absolute top-0 left-0 z-50 bg-white p-4 shadow-xl text-xs flex flex-col gap-2 rounded text-ink border border-ink/20 font-sans pointer-events-auto w-48">
            <label className="font-bold">Main Image X</label>
            <input type="range" min="-100" max="200" value={posXMain} onChange={(e) => setPosXMain(parseInt(e.target.value))} />
            <label className="font-bold">Main Image Y</label>
            <input type="range" min="-100" max="200" value={posYMain} onChange={(e) => setPosYMain(parseInt(e.target.value))} />
            <label className="font-bold">Main Image Zoom</label>
            <input type="range" min="1" max="3" step="0.1" value={zoomMain} onChange={(e) => setZoomMain(parseFloat(e.target.value))} />
            <button onClick={() => alert(`Main Image (Reading):\nPos: ${posXMain}% ${posYMain}%\nZoom: scale(${zoomMain})`)} className="bg-ink text-ivory p-1">Copy</button>
          </div>

          {/* Dev Tools (Sub Image) */}
          <div className="absolute top-0 left-52 z-50 bg-white p-4 shadow-xl text-xs flex flex-col gap-2 rounded text-ink border border-ink/20 font-sans pointer-events-auto w-48 hidden md:flex">
            <label className="font-bold">Sub Image X</label>
            <input type="range" min="-100" max="200" value={posXSub} onChange={(e) => setPosXSub(parseInt(e.target.value))} />
            <label className="font-bold">Sub Image Y</label>
            <input type="range" min="-100" max="200" value={posYSub} onChange={(e) => setPosYSub(parseInt(e.target.value))} />
            <label className="font-bold">Sub Image Zoom</label>
            <input type="range" min="1" max="3" step="0.1" value={zoomSub} onChange={(e) => setZoomSub(parseFloat(e.target.value))} />
            <button onClick={() => alert(`Sub Image (Close-up):\nPos: ${posXSub}% ${posYSub}%\nZoom: scale(${zoomSub})`)} className="bg-ink text-ivory p-1">Copy</button>
          </div>

          <Reveal className="md:col-span-5 relative">
            <div className="relative aspect-[3/4] overflow-hidden bg-sand">
              <img 
                src={FOUNDER.marble.url} 
                alt={FOUNDER.marble.alt} 
                style={{ objectPosition: `${posXMain}% ${posYMain}%`, transform: `scale(${zoomMain})` }}
                className="parallax-img-main w-full h-[120%] object-cover -top-[10%] relative transition-all duration-300" 
                loading="lazy" 
              />
            </div>
            <div className="absolute -bottom-10 -right-6 w-2/3 aspect-[3/4] overflow-hidden bg-sand hidden md:block shadow-2xl">
              <img 
                src={FOUNDER.lipShot.url} 
                alt={FOUNDER.lipShot.alt} 
                style={{ objectPosition: `${posXSub}% ${posYSub}%`, transform: `scale(${zoomSub})` }}
                className="parallax-img-sub w-full h-[130%] object-cover -top-[15%] relative transition-all duration-300" 
                loading="lazy" 
              />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-7 md:pl-10">
            <p className="eyebrow">Her philosophy</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 leading-[1.05]">
              An eye for romance.<br />A hand for restraint.
            </h2>
            <div className="hairline w-24 my-8" />
            <div className="space-y-5 text-[17px] text-taupe leading-relaxed max-w-xl">
              <p>
                With over 8 years of luxury bridal experience, Gurleen approaches every bride the same way she approaches an editorial cover —
                with quiet direction, a curated palette and a finish that reads as skin first,
                makeup second.
              </p>
              <p>
                Her signature is a soft, luminous, camera-honest bridal look — traditional
                Indian beauty pared back to its most flattering essentials, and photographed
                to last.
              </p>
              <p>
                Beyond weddings, she leads a growing academy — three formats, one philosophy —
                shaping the next generation of Indian bridal artists.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-10">
              <a href={WA.general} target="_blank" rel="noreferrer" className="btn-wine">Chat on WhatsApp</a>
              <a href={IG_BUSINESS} target="_blank" rel="noreferrer" className="btn-ghost">@gurleenkaurpannu_mua</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">The pillars</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">What guides the work.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {PILLARS.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08}>
                <div className="border-t border-gold/40 pt-6">
                  <h3 className="font-display text-2xl">{p.t}</h3>
                  <p className="text-taupe mt-3 leading-relaxed text-[15px]">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="text-center mb-14">
            <p className="eyebrow">The chapters</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">A quiet timeline.</h2>
          </Reveal>
          <ol className="space-y-10">
            {CHAPTERS.map((c, i) => (
              <Reveal key={c.y} delay={i * 0.06}>
                <li className="grid md:grid-cols-12 gap-6 border-t border-ink/10 pt-8">
                  <p className="md:col-span-4 font-display italic text-2xl text-wine">{c.y}</p>
                  <p className="md:col-span-8 text-taupe text-[17px] leading-relaxed">{c.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink text-ivory py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="eyebrow !text-gold">Work with Gurleen</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight text-ivory">
              Every bride, personally.
            </h2>
            <div className="hairline w-24 mx-auto my-10" />
            <a href={WA.bridal} target="_blank" rel="noreferrer" className="btn-ghost-light">
              Enquire on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
