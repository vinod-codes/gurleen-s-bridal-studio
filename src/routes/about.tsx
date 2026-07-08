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
      { title: "About Gurleen Kaur Pannu — Bridal Makeup Artist Mumbai | GKP Artistry" },
      {
        name: "description",
        content:
          "Meet Gurleen — Mumbai-based luxury bridal makeup artist with 8+ years of experience. Founder of GKP Artistry & Makeovers and GKP Professional Makeup Academy.",
      },
      { property: "og:title", content: "About Gurleen Kaur Pannu — Bridal Makeup Artist Mumbai" },
      {
        property: "og:description",
        content: "Mumbai's trusted bridal makeup artist and educator. 8+ years of luxury Indian bridal artistry.",
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
          name: "Gurleen Kaur Pannu",
          jobTitle: "Luxury Bridal Makeup Artist & Educator",
          image: FOUNDER.marble.url,
          url: "https://gkpartistry.com/about",
          worksFor: { "@type": "Organization", name: "GKP Artistry & Makeovers" },
          address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
          knowsAbout: ["Bridal Makeup", "Indian Bridal Artistry", "Makeup Education", "Airbrush Makeup", "HD Makeup", "Bridal Hair Styling"],
          sameAs: [IG_BUSINESS],
        }),
      },
    ],
  }),
  component: AboutPage,
});

const PILLARS = [
  { t: "Skin First", d: "Every look starts with skincare — prep, prime, protect. A healthy base is the foundation of every bridal look that lasts all day and photographs beautifully." },
  { t: "Restraint", d: "Colour placed with intention. Nothing added that the camera doesn't ask for. Indian bridal beauty is most powerful when it's edited, not accumulated." },
  { t: "Longevity", d: "Products and techniques chosen so the last portrait of the evening looks exactly like the first. Because your wedding photos last a lifetime." },
];

const CHAPTERS = [
  { y: "The training", d: "Years on set, assisting senior artists, editorial projects and back-to-back bridal seasons across Mumbai and beyond — the work that builds a hand." },
  { y: "The studio", d: "A private atelier in Mumbai, built around one bride at a time. No rush, no assembly line — just the quiet focus a bride deserves." },
  { y: "The academy", d: "A structured transfer of craft — masterclasses, city-edition look & learns, and a full 2-month professional course for aspiring makeup artists." },
  { y: "Today", d: "Weddings across India and destination editions overseas — Jaipur, Goa, Dubai, Bali and beyond — with a growing archive of quiet, luminous portraits." },
];

function AboutPage() {
  const container = React.useRef<HTMLElement>(null);

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
          <p className="eyebrow">The Artist Behind the Look</p>
          <h1 className="font-display text-5xl md:text-7xl mt-4 leading-[1.03]">
            Bridal Makeup Artist<br />based in Mumbai.
          </h1>
          <div className="hairline w-32 mx-auto mt-10" />
          <p className="text-taupe mt-8 text-[17px] leading-relaxed max-w-2xl mx-auto">
            Gurleen Kaur Pannu is a Mumbai-based luxury bridal makeup artist with 8+ years of experience across Indian weddings, destination brides and editorial shoots.
          </p>
        </div>
      </section>

      <section ref={container} className="pb-24 md:pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <Reveal className="md:col-span-5 relative">
            <div className="relative aspect-[3/4] overflow-hidden bg-sand">
              <img src={FOUNDER.marble.url} alt={FOUNDER.marble.alt} className="parallax-img-main w-full h-[120%] object-cover -top-[10%] relative" loading="lazy" />
            </div>
            <div className="absolute -bottom-10 -right-6 w-2/3 aspect-[3/4] overflow-hidden bg-sand hidden md:block shadow-2xl">
              <img src={FOUNDER.lipShot.url} alt={FOUNDER.lipShot.alt} className="parallax-img-sub w-full h-[130%] object-cover -top-[15%] relative" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-7 md:pl-10">
            <p className="eyebrow">Her philosophy</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 leading-[1.05]">
              Skin-first.<br />Always luminous.
            </h2>
            <div className="hairline w-24 my-8" />
            <div className="space-y-5 text-[17px] text-taupe leading-relaxed max-w-xl">
              <p>
                With 8+ years of luxury bridal experience across Mumbai, Gurleen Kaur Pannu has developed a signature that is deliberately understated: skin-first prep, a curated palette, and a finish that reads honest in every photograph.
              </p>
              <p>
                She is the founder of GKP Artistry & Makeovers and the GKP Professional Makeup Academy — bringing the same philosophy of precision, calm and longevity to every bride and every student she works with.
              </p>
              <p>
                Her bridal work spans traditional Indian ceremonies, destination weddings from Goa to Dubai, and editorial projects across the country.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-10">
              <a href={WA.general} target="_blank" rel="noreferrer" className="btn-wine">Enquire on WhatsApp</a>
              <a href={IG_BUSINESS} target="_blank" rel="noreferrer" className="btn-ghost">@gurleenkaurpannu_mua</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">Philosophy</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">What makes the work different.</h2>
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
            <p className="eyebrow">The Journey</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">How 8 years become a studio.</h2>
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
              Every bride deserves a personal artist.
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
