import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Reveal } from "@/components/site/Reveal";
import { WA } from "@/lib/whatsapp";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — GKP Artistry & Makeovers" },
      {
        name: "description",
        content:
          "Answers to common questions about bridal makeup, trials, destination weddings, academy courses and booking with GKP Artistry & Makeovers.",
      },
      { property: "og:title", content: "Frequently Asked Questions — GKP Artistry & Makeovers" },
      { property: "og:description", content: "Answers on bookings, trials, destination weddings and academy courses." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

const FAQS = [
  {
    q: "How far in advance should I book my wedding date?",
    a: "For Indian wedding season (October–February) we recommend enquiring 8–12 months ahead. Off-season and destination dates can often be confirmed with 3–6 months of notice.",
  },
  {
    q: "Is a bridal trial included?",
    a: "Yes — a studio trial in Mumbai is included in the Signature Bridal package. Additional trials or standalone trials can be arranged.",
  },
  {
    q: "Do you travel for destination weddings?",
    a: "Yes. Gurleen travels across India and internationally. Travel, stay and logistics are quoted transparently on top of the artistry fee, invoiced at actuals.",
  },
  {
    q: "How is pricing structured?",
    a: "Every booking is quoted individually based on number of events, location, duration and family looks required. See the Pricing page for what typically shapes the quote.",
  },
  {
    q: "Do you cover family members on the wedding day?",
    a: "Yes — mother-of-the-bride, sisters and close family can be added to any booking. Please mention count and events when enquiring.",
  },
  {
    q: "What products do you use?",
    a: "A curated luxury kit combining international prestige brands with region-specific formulas tuned for humidity, longevity and camera performance.",
  },
  {
    q: "Do you offer hair styling?",
    a: "Yes — hair styling and drape assistance are part of the bridal package. Complex hairstyles or additional hair services can be discussed during the consultation.",
  },
  {
    q: "How do I secure a date?",
    a: "Dates are confirmed on receipt of a signed booking note and a retainer. Details are shared on WhatsApp after the initial consultation.",
  },
  {
    q: "Can I attend the academy without prior experience?",
    a: "Yes. The 5-Day Masterclass and 2-Month Professional Course are structured for both beginners and working artists. The 1-Day Look & Learn is best for artists with some experience.",
  },
  {
    q: "Do you provide certification for academy courses?",
    a: "Yes, all students receive a GKP Artistry & Makeovers certification upon successful completion of the Masterclass or Professional Course, recognizing their training.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Retainers are non-refundable, but for date changes we do our best to accommodate a new date subject to availability. Detailed terms are shared in the booking note.",
  },
];

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="bg-ivory text-ink min-h-screen">
      <Nav />

      <section className="pt-36 md:pt-44 pb-16 md:pb-20 bg-ivory">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="eyebrow">Frequently Asked</p>
          <h1 className="font-display text-5xl md:text-7xl mt-4 leading-[1.03]">Questions, answered.</h1>
          <div className="hairline w-32 mx-auto mt-10" />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-6">
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  >
                    <span className="font-display text-xl md:text-2xl text-ink leading-snug">
                      {f.q}
                    </span>
                    <span
                      className={`mt-2 shrink-0 w-6 h-6 border border-ink/30 rounded-full flex items-center justify-center text-wine transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-6 pr-10">
                      <p className="text-taupe text-[16px] leading-relaxed">{f.a}</p>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="eyebrow">Still have a question?</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">We reply personally.</h2>
            <div className="hairline w-24 mx-auto my-10" />
            <a href={WA.general} target="_blank" rel="noreferrer" className="btn-wine">Ask on WhatsApp</a>
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
