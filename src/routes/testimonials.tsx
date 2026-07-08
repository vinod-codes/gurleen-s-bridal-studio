import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Reveal } from "@/components/site/Reveal";
import { WA } from "@/lib/whatsapp";
import { TRADITIONAL } from "@/lib/images";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Gurleen Kaur Pannu" },
      {
        name: "description",
        content:
          "Words from brides and clients who trusted Gurleen Kaur Pannu with their wedding day and editorial work.",
      },
      { property: "og:title", content: "Testimonials — Gurleen Kaur Pannu" },
      { property: "og:description", content: "Words from brides and clients." },
      { property: "og:url", content: "/testimonials" },
      { property: "og:image", content: TRADITIONAL[1].url },
      { name: "twitter:image", content: TRADITIONAL[1].url },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

const QUOTES = [
  {
    q: "Gurleen made me look like the softest, most photographed version of myself. Every frame from the wedding is one I'd keep on my wall.",
    who: "Aanya",
    where: "Wedding · Udaipur",
  },
  {
    q: "The calm in the room on the morning of my wedding was worth everything. Skin looked like skin. It lasted from mandap to reception.",
    who: "Isha",
    where: "Wedding · Mumbai",
  },
  {
    q: "We flew her to Bali for a three-event wedding. Zero drama, three completely different looks, one hand of restraint throughout.",
    who: "Meher",
    where: "Destination · Bali",
  },
  {
    q: "The trial felt like a conversation, not a service. That's rare, and it's why I booked her for both the engagement and the wedding.",
    who: "Riya",
    where: "Engagement + Wedding · Delhi",
  },
  {
    q: "The masterclass reframed how I think about bridal makeup — less product, more intention. Career-defining five days.",
    who: "Simran",
    where: "5-Day Masterclass",
  },
  {
    q: "As a photographer I've shot dozens of brides. Gurleen's work simply reads better on camera — cleaner skin, softer light, warmer colour.",
    who: "Karan Malhotra",
    where: "Wedding Photographer",
  },
];

function TestimonialsPage() {
  return (
    <div className="bg-ivory text-ink min-h-screen">
      <Nav />

      <section className="pt-36 md:pt-44 pb-16 md:pb-20 bg-ivory">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="eyebrow">Kind Words</p>
          <h1 className="font-display text-5xl md:text-7xl mt-4 leading-[1.03]">Testimonials.</h1>
          <div className="hairline w-32 mx-auto mt-10" />
          <p className="text-taupe mt-8 text-[17px] leading-relaxed max-w-2xl mx-auto">
            Words from brides, photographers and students — shared with their permission.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-6 md:gap-8">
          {QUOTES.map((t, i) => (
            <Reveal key={t.who} delay={(i % 2) * 0.08}>
              <figure className="bg-sand/60 border border-ink/10 p-8 md:p-10 h-full flex flex-col">
                <span className="font-display italic text-6xl text-wine/40 leading-none">"</span>
                <blockquote className="font-display italic text-2xl md:text-[26px] leading-[1.35] text-ink mt-2">
                  {t.q}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-gold/40">
                  <p className="font-display text-lg">{t.who}</p>
                  <p className="text-[11px] tracking-[0.28em] uppercase text-taupe mt-1">{t.where}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink text-ivory py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="eyebrow !text-gold">Your day, next</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-ivory">Reserve a date.</h2>
            <div className="hairline w-24 mx-auto my-10" />
            <a href={WA.bridal} target="_blank" rel="noreferrer" className="btn-ghost-light">Enquire on WhatsApp</a>
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
