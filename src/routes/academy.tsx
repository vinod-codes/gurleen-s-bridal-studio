import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Reveal } from "@/components/site/Reveal";
import { WA } from "@/lib/whatsapp";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "The Academy — Gurleen Kaur Pannu" },
      { name: "description", content: "Three formats of professional makeup education: 5-Day Masterclass, 1-Day Look & Learn (city editions), and a 2-Month Professional Course." },
      { property: "og:title", content: "The Academy — Gurleen Kaur Pannu" },
      { property: "og:description", content: "Professional bridal makeup education from Gurleen Kaur Pannu." },
    ],
  }),
  component: AcademyPage,
});

const CITIES = ["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chandigarh", "Jaipur"];

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
    ctaHref: WA.masterclass,
    ctaLabel: "Reserve Your Seat",
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
    citySelect: true,
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
    ctaHref: WA.twoMonth,
    ctaLabel: "Enrol Now",
  },
];

function AcademyPage() {
  const [city, setCity] = useState("Delhi");

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
            Three formats, one philosophy: build artists who understand bridal beauty,
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

                  {c.citySelect ? (
                    <div className="mt-8">
                      <label className="text-[10px] tracking-[0.28em] uppercase text-taupe">Select city</label>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-wine py-2 text-ink text-sm tracking-wider outline-none"
                      >
                        {CITIES.map((cc) => (
                          <option key={cc} value={cc}>{cc}</option>
                        ))}
                      </select>
                      <a href={WA.lookLearn(city)} target="_blank" rel="noreferrer" className="btn-wine mt-6">
                        Enquire — {city}
                      </a>
                    </div>
                  ) : (
                    <a href={c.ctaHref} target="_blank" rel="noreferrer" className="btn-wine mt-8">
                      {c.ctaLabel}
                    </a>
                  )}
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
