import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Reveal } from "@/components/site/Reveal";
import { WA } from "@/lib/whatsapp";
import { TRADITIONAL } from "@/lib/images";

export const Route = createFileRoute("/bridal")({
  head: () => ({
    meta: [
      { title: "Bridal Makeup — Gurleen Kaur Pannu, Mumbai" },
      {
        name: "description",
        content:
          "Signature bridal makeup by Gurleen Kaur Pannu — soft, luminous, camera-honest artistry for the most photographed day of your life. Mumbai and beyond.",
      },
      { property: "og:title", content: "Bridal Makeup — Gurleen Kaur Pannu" },
      { property: "og:description", content: "Signature luxury bridal makeup in Mumbai." },
      { property: "og:url", content: "/bridal" },
      { property: "og:image", content: TRADITIONAL[0].url },
      { name: "twitter:image", content: TRADITIONAL[0].url },
    ],
    links: [{ rel: "canonical", href: "/bridal" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Signature Bridal Makeup",
          serviceType: "Bridal Makeup",
          provider: { "@type": "Person", name: "Gurleen Kaur Pannu" },
          areaServed: ["Mumbai", "India", "Worldwide"],
          description:
            "Luxury bridal makeup — consultation, studio trial, full wedding-day artistry, hair styling, drape assistance and touch-ups.",
        }),
      },
    ],
  }),
  component: BridalPage,
});

const INCLUDES = [
  { t: "Consultation", d: "A private conversation to understand your look, attire, jewellery and timeline." },
  { t: "Studio Trial", d: "A full trial in the studio — refine the palette, the eye, the finish." },
  { t: "Wedding-Day Artistry", d: "Full bridal makeup on the day, calmly and unhurried." },
  { t: "Hair & Drape", d: "Hair sculpting and drape assistance for a complete finish." },
  { t: "Touch-Ups", d: "On-hand through key ceremony moments so the last portrait mirrors the first." },
];

const JOURNEY = [
  { y: "01", t: "Enquire", d: "Share your dates and events on WhatsApp." },
  { y: "02", t: "Consult", d: "A relaxed conversation to align on vision, palette and logistics." },
  { y: "03", t: "Trial", d: "Studio trial — refined until every detail feels right." },
  { y: "04", t: "Wedding day", d: "Calm mornings, quiet direction, camera-honest finish." },
];

function BridalPage() {
  return (
    <div className="bg-ivory text-ink min-h-screen">
      <Nav />

      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img src={TRADITIONAL[0].url} alt={TRADITIONAL[0].alt} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 md:pb-24 w-full">
          <p className="eyebrow !text-gold">Bridal Makeup</p>
          <h1 className="font-display text-ivory text-5xl md:text-7xl mt-4 max-w-3xl leading-[1.03]">
            Skin that breathes.<br />A finish that lasts.
          </h1>
          <p className="font-display italic text-ivory/90 text-lg md:text-2xl mt-6 max-w-2xl">
            Signature bridal artistry for the most photographed day of your life.
          </p>
          <div className="mt-8">
            <a href={WA.bridal} target="_blank" rel="noreferrer" className="btn-wine">Enquire Availability</a>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-ivory">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center mb-14 max-w-2xl mx-auto">
            <p className="eyebrow">What's included</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">The signature bridal experience.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INCLUDES.map((i, idx) => (
              <Reveal key={i.t} delay={(idx % 3) * 0.08}>
                <div className="border-t border-gold/40 pt-6">
                  <h3 className="font-display text-2xl">{i.t}</h3>
                  <p className="text-taupe mt-3 leading-relaxed text-[15px]">{i.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center mb-14 max-w-2xl mx-auto">
            <p className="eyebrow">The journey</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">From enquiry to wedding day.</h2>
          </Reveal>
          <div className="grid md:grid-cols-4 gap-8">
            {JOURNEY.map((j, i) => (
              <Reveal key={j.y} delay={i * 0.08}>
                <div>
                  <p className="font-display italic text-3xl text-wine">{j.y}</p>
                  <h3 className="font-display text-xl mt-3">{j.t}</h3>
                  <p className="text-taupe mt-2 text-[15px] leading-relaxed">{j.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-ivory">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center mb-12">
            <p className="eyebrow">The archive</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">Recent brides.</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {TRADITIONAL.slice(0, 8).map((img, i) => (
              <Reveal key={img.url} delay={(i % 4) * 0.05}>
                <figure className="group overflow-hidden aspect-[3/4] bg-sand">
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
            <p className="eyebrow !text-gold">Reserve your date</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-ivory">Every bride, personally.</h2>
            <div className="hairline w-24 mx-auto my-10" />
            <a href={WA.bridal} target="_blank" rel="noreferrer" className="btn-ghost-light">WhatsApp for Availability</a>
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
