import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Reveal } from "@/components/site/Reveal";
import { WA } from "@/lib/whatsapp";
import { FOUNDER } from "@/lib/images";

export const Route = createFileRoute("/academy/look-and-learn")({
  head: () => ({
    meta: [
      { title: "1-Day Look & Learn — Gurleen Kaur Pannu Artistry & Makeovers Academy" },
      {
        name: "description",
        content:
          "Join Gurleen Kaur Pannu Artistry & Makeovers for a 1-Day Look & Learn masterclass in your city. A focused, single-day session covering a complete signature bridal look.",
      },
      { property: "og:title", content: "1-Day Look & Learn Bridal Masterclass" },
      { property: "og:description", content: "A focused city-wise day covering a complete signature bridal look." },
      { property: "og:url", content: "/academy/look-and-learn" },
    ],
    links: [{ rel: "canonical", href: "/academy/look-and-learn" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "1-Day Look & Learn Bridal Masterclass",
          description: "Join Gurleen Kaur Pannu Artistry & Makeovers for a 1-Day Look & Learn masterclass in your city. A focused, single-day session covering a complete signature bridal look.",
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
  component: LookAndLearnPage,
});

const CITIES = ["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chandigarh", "Jaipur"];

const TOPICS = [
  "Signature Bridal Glam",
  "Glass Skin Techniques",
  "Soft Sculpting & Highlighting",
  "Monochrome Glam",
  "Juicy, Plump Lips",
  "Modern Bridal Hair Basics",
  "Luxury Client Experience",
  "Industry Q&A and Insights",
];

function LookAndLearnPage() {
  const [city, setCity] = useState("Delhi");

  return (
    <div className="bg-white text-black min-h-screen">
      <Nav />

      <section className="pt-36 md:pt-44 pb-16 md:pb-24 bg-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Link to="/academy" className="eyebrow hover:text-gray-500 transition-colors">← Back to Academy</Link>
          <h1 className="font-display text-5xl md:text-7xl mt-6 leading-[1.03]">
            1-Day Look & Learn.
          </h1>
          <div className="hairline w-32 mx-auto mt-10" />
          <p className="text-gray-600 mt-8 text-[17px] leading-relaxed max-w-2xl mx-auto">
            A focused single day in your city, walking through one complete signature bridal look from start to finish. Observe the techniques, ask questions, and refine your eye.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 border-y border-black/10">
        <div className="mx-auto max-w-xl px-6">
          <Reveal className="text-center bg-white p-10 shadow-sm">
            <p className="eyebrow">Select your city</p>
            <div className="mt-6">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-transparent border-b border-black/30 focus:border-black py-3 text-black text-xl font-display outline-none text-center"
              >
                {CITIES.map((cc) => (
                  <option key={cc} value={cc}>{cc}</option>
                ))}
              </select>
            </div>
            <div className="mt-10">
              <a href={WA.lookLearn(city)} target="_blank" rel="noreferrer" className="btn-dark bg-black text-white hover:bg-white hover:text-black hover:border-black transition-colors w-full block text-center">
                Enquire for {city}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="aspect-square bg-gray-50 overflow-hidden">
               <img src={FOUNDER.marble.url} alt="Look and learn session" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="eyebrow">What you will learn</p>
            <h2 className="font-display text-4xl mt-4 mb-8">The anatomy of a look.</h2>
            <p className="text-gray-600 text-[16px] leading-relaxed mb-8">
              Watch Gurleen build her signature bridal glam in real-time. From skin prep to the final dusting of powder, every step is explained.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {TOPICS.map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <span className="text-black mt-1">✦</span>
                  <span className="text-[15px] text-black">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
