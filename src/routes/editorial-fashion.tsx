import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Reveal } from "@/components/site/Reveal";
import { WA } from "@/lib/whatsapp";
import { FOUNDER, WESTERN, TRADITIONAL } from "@/lib/images";

export const Route = createFileRoute("/editorial-fashion")({
  head: () => ({
    meta: [
      { title: "Editorial, Fashion & Campaign Makeup — Gurleen Kaur Pannu" },
      {
        name: "description",
        content:
          "Editorial and fashion makeup by Gurleen Kaur Pannu — magazine covers, campaigns, lookbooks and runway. Beauty direction for the lens.",
      },
      { property: "og:title", content: "Editorial, Fashion & Campaign Makeup" },
      { property: "og:description", content: "Beauty direction for editorial, campaign and runway work." },
      { property: "og:url", content: "/editorial-fashion" },
      { property: "og:image", content: FOUNDER.lipShot.url },
      { name: "twitter:image", content: FOUNDER.lipShot.url },
    ],
    links: [{ rel: "canonical", href: "/editorial-fashion" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Editorial & Fashion Makeup",
          serviceType: "Editorial Makeup Direction",
          provider: { "@type": "Person", name: "Gurleen Kaur Pannu" },
          description: "Editorial, campaign, lookbook and runway beauty direction.",
        }),
      },
    ],
  }),
  component: EditorialPage,
});

const OFFERS = [
  { t: "Magazine editorials", d: "Cover shoots, feature spreads and personal-brand editorials." },
  { t: "Fashion campaigns", d: "Seasonal campaigns, brand films and lookbook shoots." },
  { t: "Runway & shows", d: "Show-day beauty direction, lead-artist coordination, backstage kit." },
  { t: "Celebrity & talent", d: "Discreet camera-ready makeup for public appearances and press." },
];

function EditorialPage() {
  return (
    <div className="bg-ivory text-ink min-h-screen">
      <Nav />

      <section className="relative min-h-[65vh] flex items-end overflow-hidden">
        <img src={FOUNDER.lipShot.url} alt={FOUNDER.lipShot.alt} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/85" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 md:pb-24 w-full">
          <p className="eyebrow !text-gold">Editorial · Fashion · Campaign</p>
          <h1 className="font-display text-ivory text-5xl md:text-7xl mt-4 max-w-3xl leading-[1.03]">
            Beauty, made for the lens.
          </h1>
          <p className="font-display italic text-ivory/90 text-lg md:text-2xl mt-6 max-w-2xl">
            Editorial covers, campaigns, lookbooks and runway.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WA.editorial} target="_blank" rel="noreferrer" className="btn-wine">Editorial Enquiry</a>
            <a href={WA.fashion} target="_blank" rel="noreferrer" className="btn-ghost-light">Fashion / Campaign</a>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-ivory">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center mb-14 max-w-2xl mx-auto">
            <p className="eyebrow">What we take on</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">Selective, considered work.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-10">
            {OFFERS.map((o, i) => (
              <Reveal key={o.t} delay={(i % 2) * 0.08}>
                <div className="border-t border-gold/40 pt-6">
                  <h3 className="font-display text-2xl">{o.t}</h3>
                  <p className="text-taupe mt-3 leading-relaxed text-[15px]">{o.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center mb-12">
            <p className="eyebrow">Selected frames</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">From the archive.</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {[FOUNDER.lipShot, WESTERN[1], TRADITIONAL[2], WESTERN[0], TRADITIONAL[7], FOUNDER.marble].map((img, i) => (
              <Reveal key={img.url} delay={(i % 3) * 0.05}>
                <figure className="overflow-hidden aspect-[3/4] bg-ivory group">
                  <img src={img.url} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-ivory py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="eyebrow !text-gold">Commission a shoot</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-ivory">Let's talk direction.</h2>
            <div className="hairline w-24 mx-auto my-10" />
            <a href={WA.editorial} target="_blank" rel="noreferrer" className="btn-ghost-light">WhatsApp the Studio</a>
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
