import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Reveal } from "@/components/site/Reveal";
import { WA } from "@/lib/whatsapp";
import { FOUNDER } from "@/lib/images";

export const Route = createFileRoute("/academy/masterclass")({
  head: () => ({
    meta: [
      { title: "5-Day Masterclass — Gurleen Kaur Pannu Artistry & Makeovers Academy" },
      {
        name: "description",
        content:
          "Intensive 5-day hands-on makeup training for aspiring makeup artists by Gurleen Kaur Pannu Artistry & Makeovers in Mumbai.",
      },
      { property: "og:title", content: "5-Day Bridal Masterclass" },
      { property: "og:description", content: "Professional hands-on training for aspiring artists." },
      { property: "og:url", content: "/academy/masterclass" },
    ],
    links: [{ rel: "canonical", href: "/academy/masterclass" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "5-Day Bridal Makeup Masterclass",
          description: "Intensive 5-day hands-on makeup training for aspiring makeup artists by Gurleen Kaur Pannu Artistry & Makeovers in Mumbai.",
          provider: {
            "@type": "Organization",
            name: "Gurleen Kaur Pannu Professional Makeup Academy",
            sameAs: "https://www.instagram.com/gurleenkaurpannu_mua",
          },
          courseMode: "onsite",
          educationalLevel: "beginner to advanced",
        }),
      },
    ],
  }),
  component: MasterclassPage,
});

const SCHEDULE = [
  { day: "Day 01", title: "Skin & Architecture", desc: "Understanding skin types, comprehensive prep, color theory, and flawless base application." },
  { day: "Day 02", title: "The Eyes", desc: "Bridal eye architecture, from soft matte blends to high-glamour shimmers. Liner perfection." },
  { day: "Day 03", title: "Sculpt & Finish", desc: "Contouring, highlighting, and the glass skin effect. Blush placement and lip artistry." },
  { day: "Day 04", title: "Hair & Drape", desc: "Essential bridal hair styling, securing dupattas, and professional draping techniques." },
  { day: "Day 05", title: "Portfolio & Business", desc: "Live model practice, capturing the perfect photograph, and insights into pricing and branding." }
];

function MasterclassPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Nav />

      <section className="pt-36 md:pt-44 pb-16 md:pb-24 bg-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Link to="/academy" className="eyebrow hover:text-gray-500 transition-colors">← Back to Academy</Link>
          <h1 className="font-display text-5xl md:text-7xl mt-6 leading-[1.03]">
            5-Day Masterclass.
          </h1>
          <div className="hairline w-32 mx-auto mt-10" />
          <p className="text-gray-600 mt-8 text-[17px] leading-relaxed max-w-2xl mx-auto">
            An intensive, fully hands-on immersion into signature bridal artistry. Designed for beginners and emerging artists who want to build a foundation on technique, not trends.
          </p>
          <div className="mt-10">
            <a href={WA.masterclass} target="_blank" rel="noreferrer" className="btn-dark bg-black text-white hover:bg-white hover:text-black hover:border-black transition-colors">Reserve Your Seat</a>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mb-14">
            <p className="eyebrow">The Curriculum</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">Five days of intensive craft.</h2>
          </Reveal>
          
          <div className="space-y-10">
            {SCHEDULE.map((s, i) => (
              <Reveal key={s.day} delay={i * 0.08}>
                <div className="grid md:grid-cols-12 gap-6 border-t border-black/20 pt-8">
                  <div className="md:col-span-3">
                    <p className="font-display italic text-2xl text-black">{s.day}</p>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="font-display text-2xl">{s.title}</h3>
                    <p className="text-gray-600 mt-3 leading-relaxed text-[16px]">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="aspect-[4/5] bg-gray-50 overflow-hidden">
               <img src={FOUNDER.lipShot.url} alt="Masterclass practice" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="eyebrow">What's Included</p>
            <h2 className="font-display text-4xl mt-4 mb-8">Beyond the brush.</h2>
            <ul className="space-y-4">
              <li className="flex gap-4 border-b border-black/10 pb-4">
                <span className="text-black mt-1">✦</span>
                <span className="text-gray-600">Professional brush set and starter kit.</span>
              </li>
              <li className="flex gap-4 border-b border-black/10 pb-4">
                <span className="text-black mt-1">✦</span>
                <span className="text-gray-600">Certification of Completion.</span>
              </li>
              <li className="flex gap-4 border-b border-black/10 pb-4">
                <span className="text-black mt-1">✦</span>
                <span className="text-gray-600">Ongoing mentorship and community access.</span>
              </li>
              <li className="flex gap-4 border-b border-black/10 pb-4">
                <span className="text-black mt-1">✦</span>
                <span className="text-gray-600">Professional photoshoot of your final look.</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
