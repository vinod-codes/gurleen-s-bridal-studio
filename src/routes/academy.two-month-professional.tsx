import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Reveal } from "@/components/site/Reveal";
import { WA } from "@/lib/whatsapp";
import { FOUNDER, TRADITIONAL } from "@/lib/images";

export const Route = createFileRoute("/academy/two-month-professional")({
  head: () => ({
    meta: [
      { title: "2-Month Professional Course — GKP Artistry & Makeovers Academy" },
      {
        name: "description",
        content:
          "End-to-end professional makeup artistry course by GKP Artistry & Makeovers. Learn bridal makeup, business strategy, and portfolio building in Mumbai.",
      },
      { property: "og:title", content: "2-Month Professional Makeup Course" },
      { property: "og:description", content: "End-to-end professional formation for the working artist." },
      { property: "og:url", content: "/academy/two-month-professional" },
    ],
  }),
  component: ProfessionalCoursePage,
});

const MODULES = [
  { title: "Module 01: The Fundamentals", desc: "Color theory, skin types, hygiene standards, brush knowledge, and face shapes." },
  { title: "Module 02: Skin & Architecture", desc: "Perfecting the base. Prep routines, foundation matching, concealing, and the glass skin finish." },
  { title: "Module 03: The Eyes", desc: "Matte blends, halo eyes, cut creases, smokey eyes, and winged liner. Falsies application." },
  { title: "Module 04: The Bridal Looks", desc: "Traditional Indian, Modern Reception, Haldi/Mehendi, and Christian Bridal styles." },
  { title: "Module 05: Hair & Draping", desc: "Essential bridal hair sculpting, securing heavy dupattas, and saree draping." },
  { title: "Module 06: Business & Branding", desc: "How to price yourself, client communication, social media strategy, and portfolio curation." },
];

function ProfessionalCoursePage() {
  return (
    <div className="bg-ivory text-ink min-h-screen">
      <Nav />

      <section className="pt-36 md:pt-44 pb-16 md:pb-24 bg-ivory">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Link to="/academy" className="eyebrow hover:text-wine transition-colors">← Back to Academy</Link>
          <h1 className="font-display text-5xl md:text-7xl mt-6 leading-[1.03]">
            2-Month Professional.
          </h1>
          <div className="hairline w-32 mx-auto mt-10" />
          <p className="text-taupe mt-8 text-[17px] leading-relaxed max-w-2xl mx-auto">
            Our most comprehensive programme. Designed to take you from passionate beginner to confident professional. Learn the craft, build your portfolio, and understand the business of luxury bridal artistry.
          </p>
          <div className="mt-10">
            <a href={WA.twoMonth} target="_blank" rel="noreferrer" className="btn-wine">Apply for Next Cohort</a>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-sand">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mb-14 text-center">
            <p className="eyebrow">The Syllabus</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">A complete foundation.</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {MODULES.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.05}>
                <div className="border-t border-gold/40 pt-6">
                  <h3 className="font-display text-2xl">{m.title}</h3>
                  <p className="text-taupe mt-3 leading-relaxed text-[15px]">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-ivory">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow">Career Outcomes</p>
            <h2 className="font-display text-4xl mt-4 mb-8">Built for the real world.</h2>
            <div className="space-y-6 text-taupe text-[16px] leading-relaxed">
              <p>
                This isn't just a makeup class; it's a career incubator. We cover the unglamorous but essential aspects of being a working artist: lighting, photography, dealing with bridal anxiety, and structuring your contracts.
              </p>
              <p>
                You will graduate not only with a refined hand but with a professional portfolio shot in a studio, ready to attract your first high-ticket clients.
              </p>
            </div>
            <ul className="mt-10 space-y-4">
              <li className="flex gap-4 border-b border-ink/10 pb-4">
                <span className="text-gold mt-1">✦</span>
                <span className="text-taupe text-[15px]">Extensive professional vanity kit included.</span>
              </li>
              <li className="flex gap-4 border-b border-ink/10 pb-4">
                <span className="text-gold mt-1">✦</span>
                <span className="text-taupe text-[15px]">Professional studio photoshoot days.</span>
              </li>
              <li className="flex gap-4 border-b border-ink/10 pb-4">
                <span className="text-gold mt-1">✦</span>
                <span className="text-taupe text-[15px]">Lifetime alumni support group.</span>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="aspect-[4/5] bg-sand overflow-hidden">
               <img src={TRADITIONAL[1].url} alt="Bridal final look" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
