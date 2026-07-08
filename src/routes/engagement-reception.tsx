import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Reveal } from "@/components/site/Reveal";
import { WA } from "@/lib/whatsapp";
import { ENGAGEMENT, WESTERN, TRADITIONAL } from "@/lib/images";

export const Route = createFileRoute("/engagement-reception")({
  head: () => ({
    meta: [
      { title: "Engagement & Reception Makeup — Gurleen Kaur Pannu, Mumbai" },
      {
        name: "description",
        content:
          "Engagement, roka and reception makeup by Gurleen Kaur Pannu. Soft luminous artistry for the softer moments and contemporary glamour for the evening.",
      },
      { property: "og:title", content: "Engagement & Reception Makeup" },
      { property: "og:description", content: "Soft luminous engagement looks and modern reception glamour." },
      { property: "og:url", content: "/engagement-reception" },
      { property: "og:image", content: ENGAGEMENT.url },
      { name: "twitter:image", content: ENGAGEMENT.url },
    ],
    links: [{ rel: "canonical", href: "/engagement-reception" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: "Engagement Makeup",
              serviceType: "Event Makeup",
              provider: { "@type": "Person", name: "Gurleen Kaur Pannu" },
              description: "Soft, luminous engagement and roka looks.",
            },
            {
              "@type": "Service",
              name: "Reception Makeup",
              serviceType: "Event Makeup",
              provider: { "@type": "Person", name: "Gurleen Kaur Pannu" },
              description: "Polished, contemporary glamour for the reception evening.",
            },
          ],
        }),
      },
    ],
  }),
  component: EngagementPage,
});

const LOOKS = [
  {
    kicker: "The Softer Moments",
    title: "Engagement & Roka",
    img: ENGAGEMENT,
    desc: "A daylight-honest look — glowing skin, a considered wash of colour, hair that moves. Made for close-up portraits and warm afternoon light.",
    cta: WA.engagement,
    label: "Enquire — Engagement",
  },
  {
    kicker: "The Reception Evening",
    title: "Modern Reception Glam",
    img: WESTERN[0],
    desc: "Sculpted, luminous and lens-ready — a contemporary evening look that carries from the first dance to the last frame of the night.",
    cta: WA.reception,
    label: "Enquire — Reception",
  },
];

function EngagementPage() {
  return (
    <div className="bg-ivory text-ink min-h-screen">
      <Nav />

      <section className="pt-36 md:pt-44 pb-16 md:pb-20 bg-ivory">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="eyebrow">Events</p>
          <h1 className="font-display text-5xl md:text-7xl mt-4 leading-[1.03]">
            Engagement &amp; Reception.
          </h1>
          <div className="hairline w-32 mx-auto mt-10" />
          <p className="text-taupe mt-8 text-[17px] leading-relaxed max-w-2xl mx-auto">
            The softer daylight moments, and the polished evening ones — dressed with the same
            editorial-first hand.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 space-y-16 md:space-y-24">
          {LOOKS.map((l, i) => (
            <Reveal key={l.title}>
              <article className={`grid md:grid-cols-12 gap-10 md:gap-16 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="md:col-span-6 aspect-[4/5] bg-sand overflow-hidden">
                  <img src={l.img.url} alt={l.img.alt} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="md:col-span-6">
                  <p className="eyebrow">{l.kicker}</p>
                  <h2 className="font-display text-4xl md:text-5xl mt-4">{l.title}</h2>
                  <div className="hairline w-24 my-6" />
                  <p className="text-taupe text-[17px] leading-relaxed max-w-lg">{l.desc}</p>
                  <a href={l.cta} target="_blank" rel="noreferrer" className="btn-wine mt-8">{l.label}</a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-3 gap-8 text-center">
          {[
            { t: "One event, one look", d: "Complete makeup and hair for a single ceremony." },
            { t: "On-location or studio", d: "In-studio in Mumbai or on-site at your venue." },
            { t: "Coordinated with bridal", d: "When booked with the wedding day, both looks are designed together." },
          ].map((f, i) => (
            <Reveal key={f.t} delay={i * 0.08}>
              <h3 className="font-display text-2xl">{f.t}</h3>
              <p className="text-taupe mt-3 text-[15px] leading-relaxed">{f.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink text-ivory py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="eyebrow !text-gold">Book your event</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-ivory">Share the date.</h2>
            <div className="hairline w-24 mx-auto my-10" />
            <a href={WA.general} target="_blank" rel="noreferrer" className="btn-ghost-light">WhatsApp for a Quote</a>
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
