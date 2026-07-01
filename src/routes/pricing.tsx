import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Reveal } from "@/components/site/Reveal";
import { WA } from "@/lib/whatsapp";
import { TRADITIONAL } from "@/lib/images";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Bridal Makeup Price & Packages — Gurleen Kaur Pannu, Mumbai" },
      {
        name: "description",
        content:
          "Bridal makeup pricing and packages by Gurleen Kaur Pannu. Signature bridal, engagement, reception and destination wedding packages — and what shapes the final quote.",
      },
      { property: "og:title", content: "Bridal Makeup Price & Packages — Gurleen Kaur Pannu" },
      {
        property: "og:description",
        content: "Luxury bridal makeup packages and pricing guidance for Mumbai and destination weddings.",
      },
      { property: "og:url", content: "/pricing" },
      { property: "og:image", content: TRADITIONAL[0].url },
      { name: "twitter:image", content: TRADITIONAL[0].url },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const PACKAGES = [
  {
    name: "Signature Bridal",
    kicker: "Wedding Day",
    price: "On request",
    includes: [
      "Consultation & studio trial",
      "Full bridal makeup on wedding day",
      "Hair styling & drape assistance",
      "Touch-ups through the ceremony",
    ],
    cta: WA.bridal,
  },
  {
    name: "Engagement & Reception",
    kicker: "Single Event",
    price: "On request",
    includes: [
      "Consultation call",
      "Full makeup for the event",
      "Hair styling",
      "On-location or studio",
    ],
    cta: WA.engagement,
  },
  {
    name: "Destination Wedding",
    kicker: "Travel Package",
    price: "Custom quote",
    includes: [
      "Multi-day artist availability",
      "Travel, stay & logistics costed transparently",
      "Bridal + family looks on request",
      "Editorial-quality finishing",
    ],
    cta: WA.destination,
  },
];

const FACTORS = [
  { t: "Location", d: "Studio Mumbai, on-location within the city, or destination — each affects logistics." },
  { t: "Number of events", d: "Single event, wedding day only, or a multi-event booking (roka, engagement, mehndi, wedding, reception)." },
  { t: "Duration & touch-ups", d: "Half-day, full-day and multi-day coverage carry different investment levels." },
  { t: "Family & bridal party", d: "Additional artistry for mother-of-the-bride, sisters and close family adds to the quote." },
  { t: "Trial & consultation", d: "A studio trial is included in bridal packages; standalone trials can be booked separately." },
  { t: "Season & date", d: "Peak wedding season and marquee dates have limited availability and are priced accordingly." },
];

function PricingPage() {
  return (
    <div className="bg-ivory text-ink min-h-screen">
      <Nav />

      <section className="pt-36 md:pt-44 pb-16 md:pb-20 bg-ivory">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="eyebrow">The Investment</p>
          <h1 className="font-display text-5xl md:text-7xl mt-4 leading-[1.03]">
            Bridal makeup price &amp; packages.
          </h1>
          <div className="hairline w-32 mx-auto mt-10" />
          <p className="text-taupe mt-8 text-[17px] leading-relaxed max-w-2xl mx-auto">
            Every bride is quoted individually — the packages below describe what's typically
            included. Share your dates and events on WhatsApp for a tailored quote.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6 md:gap-8">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <article className="border border-ink/10 bg-sand/40 p-8 md:p-10 h-full flex flex-col">
                <p className="text-[11px] tracking-[0.28em] uppercase text-wine">{p.kicker}</p>
                <h2 className="font-display text-3xl mt-3 leading-tight">{p.name}</h2>
                <p className="font-display italic text-taupe mt-3">{p.price}</p>
                <ul className="mt-6 space-y-2 text-[15px] text-ink/80">
                  {p.includes.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="mt-2 block w-3 h-px bg-gold" />
                      {it}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.cta}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-wine mt-8 self-start"
                >
                  Request a Quote
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">What shapes the quote</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">Factors that influence pricing.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {FACTORS.map((f, i) => (
              <Reveal key={f.t} delay={(i % 2) * 0.08}>
                <div className="border-t border-gold/40 pt-5">
                  <h3 className="font-display text-2xl">{f.t}</h3>
                  <p className="text-taupe mt-3 leading-relaxed text-[15px]">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="eyebrow">Enquire</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
              Share your dates for a tailored quote.
            </h2>
            <div className="hairline w-24 mx-auto my-10" />
            <a href={WA.bridal} target="_blank" rel="noreferrer" className="btn-primary">
              WhatsApp for a Quote
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
