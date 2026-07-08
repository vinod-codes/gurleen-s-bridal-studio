import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Reveal } from "@/components/site/Reveal";
import { WA, PHONE, PHONE_DISPLAY, IG_BUSINESS, IG_PERSONAL, THREADS } from "@/lib/whatsapp";
import { FOUNDER } from "@/lib/images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Gurleen Kaur Pannu" },
      {
        name: "description",
        content:
          "Enquire about bridal makeup, destination weddings, editorial work or academy courses. WhatsApp is the fastest way to reach the studio.",
      },
      { property: "og:title", content: "Contact — Gurleen Kaur Pannu" },
      { property: "og:description", content: "WhatsApp the studio for bookings and enquiries." },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: FOUNDER.marble.url },
      { name: "twitter:image", content: FOUNDER.marble.url },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact — Gurleen Kaur Pannu",
          mainEntity: {
            "@type": "Person",
            name: "Gurleen Kaur Pannu",
            telephone: PHONE,
            address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
            sameAs: [IG_BUSINESS, IG_PERSONAL, THREADS],
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

const CHANNELS = [
  { t: "Bridal enquiries", href: WA.bridal, label: "WhatsApp — Bridal" },
  { t: "Destination weddings", href: WA.destination, label: "WhatsApp — Destination" },
  { t: "Editorial & fashion", href: WA.editorial, label: "WhatsApp — Editorial" },
  { t: "Academy enrolment", href: WA.academyGeneral, label: "WhatsApp — Academy" },
];

function ContactPage() {
  return (
    <div className="bg-ivory text-ink min-h-screen">
      <Nav />

      <section className="pt-36 md:pt-44 pb-16 md:pb-20 bg-ivory">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="eyebrow">In Touch</p>
          <h1 className="font-display text-5xl md:text-7xl mt-4 leading-[1.03]">Reach the studio.</h1>
          <div className="hairline w-32 mx-auto mt-10" />
          <p className="text-taupe mt-8 text-[17px] leading-relaxed max-w-2xl mx-auto">
            WhatsApp is the fastest way to reach Gurleen — messages are read personally, and
            enquiries typically receive a reply within one working day.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 md:gap-16">
          <Reveal>
            <p className="eyebrow">Choose a channel</p>
            <h2 className="font-display text-3xl md:text-4xl mt-4">By what you need.</h2>
            <div className="hairline w-24 my-8" />
            <ul className="space-y-4">
              {CHANNELS.map((c) => (
                <li key={c.t} className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-t border-ink/10 pt-4">
                  <p className="font-display text-xl">{c.t}</p>
                  <a href={c.href} target="_blank" rel="noreferrer" className="text-[12px] tracking-[0.24em] uppercase text-wine border-b border-gold/60 hover:border-wine pb-1 w-fit">
                    {c.label} →
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="border border-ink/10 bg-sand/40 p-8 md:p-10">
              <p className="eyebrow">Direct</p>
              <h2 className="font-display text-3xl md:text-4xl mt-4">Studio details.</h2>
              <div className="hairline w-24 my-8" />
              <dl className="space-y-6 text-[16px]">
                <div>
                  <dt className="text-[11px] tracking-[0.28em] uppercase text-taupe">Phone</dt>
                  <dd className="mt-1"><a href={`tel:${PHONE}`} className="text-ink hover:text-wine">{PHONE_DISPLAY}</a></dd>
                </div>
                <div>
                  <dt className="text-[11px] tracking-[0.28em] uppercase text-taupe">Studio</dt>
                  <dd className="mt-1 text-ink">Mumbai, India — by appointment only</dd>
                </div>
                <div>
                  <dt className="text-[11px] tracking-[0.28em] uppercase text-taupe">Instagram</dt>
                  <dd className="mt-1 flex flex-col gap-1">
                    <a href={IG_BUSINESS} target="_blank" rel="noreferrer" className="text-ink hover:text-wine">@gurleenkaurpannu_mua</a>
                    <a href={IG_PERSONAL} target="_blank" rel="noreferrer" className="text-taupe hover:text-wine text-sm">@gurleenkaurpannnu</a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] tracking-[0.28em] uppercase text-taupe">Hours</dt>
                  <dd className="mt-1 text-ink">Monday – Saturday · 10:00 – 19:00 IST</dd>
                </div>
              </dl>
              <a href={WA.general} target="_blank" rel="noreferrer" className="btn-wine mt-10">Open WhatsApp</a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
