import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Reveal } from "@/components/site/Reveal";
import { WA } from "@/lib/whatsapp";
import { FOUNDER } from "@/lib/images";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "The Academy — GKP Artistry & Makeovers" },
      { name: "description", content: "Four formats of professional makeup education: 5-Day Masterclass, 1-Day Look & Learn (city editions), a 2-Month Professional Course, and One-on-One Training." },
      { property: "og:title", content: "The Academy — GKP Artistry & Makeovers" },
      { property: "og:description", content: "Professional bridal makeup education from GKP Artistry & Makeovers." },
      { property: "og:url", content: "/academy" },
      { property: "og:image", content: FOUNDER.lipShot.url },
      { name: "twitter:image", content: FOUNDER.lipShot.url },
    ],
    links: [{ rel: "canonical", href: "/academy" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Course",
              name: "5-Day Bridal Makeup Masterclass",
              description: "Intensive hands-on training for aspiring makeup artists.",
              provider: { "@type": "Organization", name: "GKP Professional Makeup Academy", sameAs: "https://www.instagram.com/gurleenkaurpannu_mua" },
            },
            {
              "@type": "Course",
              name: "1-Day Look & Learn",
              description: "Focused city-wise day covering a complete signature bridal look.",
              provider: { "@type": "Organization", name: "GKP Professional Makeup Academy" },
            },
            {
              "@type": "Course",
              name: "2-Month Professional Makeup Course",
              description: "End-to-end professional formation for the working artist.",
              provider: { "@type": "Organization", name: "GKP Professional Makeup Academy" },
            },
          ],
        }),
      },
    ],
  }),
  component: AcademyPage,
});

const COURSES = [
  {
    title: "5-Day Masterclass",
    kicker: "Intensive",
    desc: "Professional hands-on training for aspiring makeup artists. A small-group, full-immersion programme building the foundations of luxury bridal artistry.",
    topics: [
      "Skin preparation & priming",
      "Foundation matching & application",
      "Bridal eye architecture",
      "Lash & lip artistry",
      "Hair sculpting basics",
      "Camera-ready finishing",
    ],
    ctaHref: "/academy/masterclass",
    ctaLabel: "View Course Details",
  },
  {
    title: "1-Day Look & Learn",
    kicker: "City Editions",
    desc: "A focused single day in your city, walking through one complete signature bridal look from start to finish, with notes on the craft and the client experience around it.",
    topics: [
      "Signature Bridal Glam",
      "Glass Skin Techniques",
      "Soft Sculpting",
      "Monochrome Glam",
      "Juicy Lips",
      "Modern Bridal Makeup",
      "Luxury Client Experience",
      "Industry Insights",
    ],
    ctaHref: "/academy/look-and-learn",
    ctaLabel: "View City Editions",
  },
  {
    title: "2-Month Professional Course",
    kicker: "Career Track",
    desc: "End-to-end formation for the working makeup artist. From core craft to business — what to charge, how to brand, how to communicate with clients.",
    topics: [
      "Bridal Makeup", "Hair Styling", "Skin Preparation", "Color Theory",
      "Product Knowledge", "Draping", "Photography", "Portfolio Building",
      "Business & Branding", "Social Media for Makeup Artists",
      "Pricing Strategy", "Client Communication", "Certification", "Mentorship",
    ],
    ctaHref: "/academy/two-month-professional",
    ctaLabel: "View Course Details",
  },
  {
    title: "One-on-One Makeup Training",
    kicker: "Personalised",
    desc: "Bespoke, private training sessions focused entirely on your specific goals — whether refining your base technique, mastering bridal hairstyling, or building business acumen.",
    topics: [
      "Skin Preparation & Base Technique",
      "Bridal Hairstyling Courses",
      "Portfolio Building for Makeup Artists",
      "Business & Client Management",
      "Custom Skill Focus",
    ],
    ctaHref: WA.academyGeneral,
    ctaLabel: "Enquire on WhatsApp",
  },
];

function AcademyPage() {
  return (
    <div className="bg-ivory text-ink min-h-screen">
      <Nav />

      <section className="pt-36 md:pt-44 pb-20 bg-ink text-ivory relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <p className="eyebrow !text-gold">The Academy</p>
          <h1 className="font-display text-5xl md:text-7xl mt-4 max-w-4xl leading-[1.03] text-ivory">
            Learn the craft<br /><em className="text-gold/90">behind the look.</em>
          </h1>
          <p className="text-ivory/75 mt-8 max-w-2xl text-[17px] leading-relaxed">
            Four formats, one philosophy: build artists who understand bridal beauty,
            the business around it, and the calm that defines a luxury client experience.
          </p>
          <a href={WA.academyGeneral} target="_blank" rel="noreferrer" className="btn-ghost-light mt-10">
            Enquire About Courses
          </a>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6 space-y-16 md:space-y-24">
          {COURSES.map((c, i) => (
            <Reveal key={c.title}>
              <article className="grid md:grid-cols-12 gap-8 md:gap-12 border-t border-gold/40 pt-12">
                <div className="md:col-span-4">
                  <p className="text-[11px] tracking-[0.28em] uppercase text-gold">{c.kicker}</p>
                  <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight">{c.title}</h2>
                  <p className="text-taupe mt-6 text-[16px] leading-relaxed">{c.desc}</p>

                  <div className="mt-8">
                    {c.ctaHref.startsWith("http") ? (
                      <a href={c.ctaHref} target="_blank" rel="noreferrer" className="btn-wine">
                        {c.ctaLabel}
                      </a>
                    ) : (
                      <Link to={c.ctaHref as any} className="btn-wine">
                        {c.ctaLabel}
                      </Link>
                    )}
                  </div>
                </div>

                <div className="md:col-span-8">
                  <p className="text-[11px] tracking-[0.28em] uppercase text-taupe mb-6">Curriculum</p>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    {c.topics.map((t, j) => (
                      <li key={t} className="flex gap-4 items-start border-b border-ink/10 pb-3">
                        <span className="font-display text-gold text-sm pt-1 w-6">
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[15px] text-ink">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-wine text-ivory py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow !text-gold">Next Cohort</p>
          <h2 className="font-display text-3xl md:text-5xl mt-4 text-ivory">
            Speak to us about dates and seats.
          </h2>
          <a href={WA.academyGeneral} target="_blank" rel="noreferrer" className="btn-ghost-light mt-10">
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
