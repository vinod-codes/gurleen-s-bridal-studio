import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Reveal } from "@/components/site/Reveal";
import { WA } from "@/lib/whatsapp";
import { FOUNDER, TRADITIONAL } from "@/lib/images";

export const Route = createFileRoute("/academy/one-on-one")({
  head: () => ({
    meta: [
      { title: "One-on-One Makeup Training — Gurleen Kaur Pannu Artistry & Makeovers Academy" },
      {
        name: "description",
        content:
          "Private, bespoke makeup training sessions with Gurleen Kaur Pannu Artistry & Makeovers. Tailored one-on-one coaching in bridal makeup, hair styling, draping, portfolio building, and business strategy.",
      },
      { property: "og:title", content: "One-on-One Private Makeup Training" },
      {
        property: "og:description",
        content: "Bespoke private makeup training sessions tailored to your specific goals.",
      },
      { property: "og:url", content: "/academy/one-on-one" },
      { property: "og:image", content: FOUNDER.marble.url },
      { name: "twitter:image", content: FOUNDER.marble.url },
    ],
    links: [{ rel: "canonical", href: "/academy/one-on-one" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "One-on-One Private Makeup Training",
          description:
            "Bespoke private training sessions focused on your specific goals — bridal artistry, hair styling, draping, or business development.",
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
  component: OneOnOnePage,
});

const FOCUS_AREAS = [
  {
    n: "01",
    title: "Bridal Makeup Artistry",
    desc: "Deepen your bridal technique — skin preparation, HD and airbrush finishing, eye architecture, and long-wear strategies.",
  },
  {
    n: "02",
    title: "Bridal Hairstyling",
    desc: "One-on-one coaching in traditional Indian bridal hairstyles, setting techniques, and accessory placement.",
  },
  {
    n: "03",
    title: "Saree & Dupatta Draping",
    desc: "Master the art of professional bridal draping — from silk sarees to heavy lehengas and dupatta securing.",
  },
  {
    n: "04",
    title: "Portfolio Building",
    desc: "Structured guidance on building a portfolio that attracts high-ticket clients — shoot planning, editing, and presentation.",
  },
  {
    n: "05",
    title: "Business & Client Management",
    desc: "How to price yourself, write contracts, manage bridal anxiety, and build a brand on social media.",
  },
  {
    n: "06",
    title: "Custom Skill Focus",
    desc: "Any specific technique, look, or challenge — completely tailored to where you want to grow.",
  },
];

const WHY = [
  {
    t: "100% Your Pace",
    d: "No group schedule. Sessions are structured entirely around your availability and learning speed.",
  },
  {
    t: "Targeted Feedback",
    d: "Every correction, every refinement — directed specifically at your work, not a general class.",
  },
  {
    t: "Flexible Format",
    d: "Single sessions or a structured series. Online or in-person at the studio in Mumbai.",
  },
  {
    t: "Direct Access to Gurleen",
    d: "Learn directly from the artist behind Gurleen Kaur Pannu Artistry & Makeovers — over 8 years of luxury bridal experience.",
  },
];

function OneOnOnePage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-24 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <Link to="/academy" className="eyebrow hover:text-gray-500 transition-colors">
            ← Back to Academy
          </Link>
          <h1 className="font-display text-5xl md:text-7xl mt-6 max-w-3xl leading-[1.03]">
            One-on-One<br />Training.
          </h1>
          <div className="hairline w-32 mt-10" />
          <p className="text-gray-600 mt-8 text-[17px] leading-relaxed max-w-2xl">
            Bespoke private coaching sessions designed entirely around your goals.
            Whether you're refining a specific technique or building a business from scratch —
            every session is directed, personal, and immediately applicable.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={WA.oneOnOne} target="_blank" rel="noreferrer" className="btn-dark bg-black text-white hover:bg-white hover:text-black hover:border-black transition-colors">
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-14">
            <p className="eyebrow">What we can cover</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">
              Six focus areas. Infinite combinations.
            </h2>
          </Reveal>
          <div className="space-y-0">
            {FOCUS_AREAS.map((f, i) => (
              <Reveal key={f.n} delay={i * 0.06}>
                <div className="grid md:grid-cols-12 gap-6 border-t border-black/20 py-8">
                  <div className="md:col-span-1">
                    <p className="font-display italic text-2xl text-black">{f.n}</p>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-2xl">{f.title}</h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-gray-600 text-[16px] leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why One-on-One */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="aspect-[3/4] bg-gray-50 overflow-hidden">
              <img
                src={FOUNDER.marble.url}
                alt="Gurleen conducting a private training session"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="eyebrow">Why choose private training</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-10">
              Built entirely around you.
            </h2>
            <div className="space-y-8">
              {WHY.map((w) => (
                <div key={w.t} className="border-t border-black/20 pt-6">
                  <h3 className="font-display text-xl">{w.t}</h3>
                  <p className="text-gray-600 mt-2 text-[15px] leading-relaxed">{w.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center mb-12">
            <p className="eyebrow">The work</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">
              The standard you'll be trained to.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {TRADITIONAL.slice(0, 8).map((img, i) => (
              <Reveal key={img.url} delay={(i % 4) * 0.05}>
                <figure className="group overflow-hidden aspect-[3/4] bg-white">
                  <img
                    src={img.url}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="eyebrow !text-white/70">Start your private training</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-white">
              Tell us what you want to learn.
            </h2>
            <div className="hairline w-24 mx-auto my-10" />
            <p className="text-white/70 text-[16px] leading-relaxed max-w-xl mx-auto mb-10">
              Share your current level, your goals, and your preferred schedule.
              We'll design a session plan that fits.
            </p>
            <a
              href={WA.oneOnOne}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-light border-white text-white hover:bg-white hover:text-black transition-colors"
            >
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
