import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Reveal } from "@/components/site/Reveal";
import { WA } from "@/lib/whatsapp";
import { DESTINATION, TRADITIONAL, WESTERN } from "@/lib/images";

export const Route = createFileRoute("/destination-weddings")({
  head: () => ({
    meta: [
      { title: "Destination Wedding Makeup — GKP Artistry & Makeovers, Worldwide" },
      {
        name: "description",
        content:
          "Destination bridal makeup by GKP Artistry & Makeovers — worldwide travel for weddings across India, Southeast Asia, the Middle East and Europe.",
      },
      { property: "og:title", content: "Destination Wedding Makeup — GKP Artistry & Makeovers" },
      { property: "og:description", content: "Worldwide destination bridal artistry." },
      { property: "og:url", content: "/destination-weddings" },
      { property: "og:image", content: DESTINATION.url },
      { name: "twitter:image", content: DESTINATION.url },
    ],
    links: [{ rel: "canonical", href: "/destination-weddings" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Destination Wedding Makeup",
          serviceType: "Destination Bridal Makeup",
          areaServed: "Worldwide",
          provider: { "@type": "Person", name: "GKP Artistry & Makeovers" },
          description:
            "Multi-day destination bridal artistry with transparent travel, stay and logistics — India and worldwide.",
        }),
      },
    ],
  }),
  component: DestinationPage,
});

const REGIONS = [
  "India — Jaipur, Udaipur, Jodhpur, Goa, Kerala",
  "Southeast Asia — Bali, Phuket, Koh Samui",
  "Middle East — Dubai, Abu Dhabi, Ras Al Khaimah",
  "Europe — Italy, France, Spain, Portugal",
  "United Kingdom, United States, Canada",
  "On request — anywhere your wedding lives",
];

const NOTES = [
  { t: "Travel & stay", d: "Costed transparently, invoiced at actuals — no hidden mark-ups." },
  { t: "Kit & climate", d: "Products tuned to humidity, altitude and light on-site, including HD & Airbrush options." },
  { t: "Multi-day cover", d: "Roka, mehndi, sangeet, wedding, reception — one calm hand across every event." },
  { t: "Complete Styling", d: "We provide comprehensive Saree & Dupatta Draping and hair styling on-site." },
  { t: "Family looks", d: "Mother-of-the-bride, sisters and close family, on request." },
];

function DestinationPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Nav />

      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img src={DESTINATION.url} alt={DESTINATION.alt} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 md:pb-24 w-full">
          <p className="font-sans text-[11px] font-medium tracking-[0.25em] uppercase text-gold">Destination Weddings</p>
          <h1 className="font-display text-white text-5xl md:text-7xl mt-4 max-w-3xl leading-[1.03]">
            Wherever your<br />wedding lives.
          </h1>
          <p className="font-display italic text-white/90 text-lg md:text-2xl mt-6 max-w-2xl">
            Worldwide travel with a Mumbai-trained bridal atelier in tow.
          </p>
          <div className="mt-8">
            <a href={WA.destination} target="_blank" rel="noreferrer" className="btn-wine bg-white text-black hover:bg-gold hover:text-black hover:border-gold transition-colors">Enquire — Destination</a>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="font-sans text-[11px] font-medium tracking-[0.25em] uppercase text-gray-500">Where we travel</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-black">Any destination, one atelier.</h2>
            <div className="border-t border-black/10 w-24 my-8" />
            <ul className="space-y-3 text-gray-600 text-[16px] font-sans font-light">
              {REGIONS.map((r) => (
                <li key={r} className="flex gap-3">
                  <span className="mt-3 block w-3 h-px bg-gold" />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="aspect-[3/4] bg-gray-50 overflow-hidden">
              <img src={WESTERN[0].url} alt={WESTERN[0].alt} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-gray-50 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center mb-14 max-w-2xl mx-auto">
            <p className="font-sans text-[11px] font-medium tracking-[0.25em] uppercase text-gray-500">Logistics, handled</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-black">Considered from every angle.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {NOTES.map((n, i) => (
              <Reveal key={n.t} delay={(i % 2) * 0.08}>
                <div className="border-t border-gold/40 pt-6">
                  <h3 className="font-display text-2xl text-black">{n.t}</h3>
                  <p className="font-sans font-light text-gray-600 mt-3 leading-relaxed text-[15px]">{n.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {[DESTINATION, WESTERN[0], WESTERN[1], TRADITIONAL[3], TRADITIONAL[6], TRADITIONAL[4]].map((img, i) => (
              <Reveal key={img.url} delay={(i % 3) * 0.05}>
                <figure className="overflow-hidden aspect-[3/4] bg-gray-50 group">
                  <img src={img.url} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.04]" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="font-sans text-[11px] font-medium tracking-[0.25em] uppercase text-gold">Plan your destination wedding</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-white">Share your destination.</h2>
            <div className="border-t border-white/20 w-24 mx-auto my-10" />
            <a href={WA.destination} target="_blank" rel="noreferrer" className="btn-wine bg-white text-black hover:bg-gold hover:text-black hover:border-gold transition-colors">WhatsApp for a Travel Quote</a>
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
