import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { ALL_PORTFOLIO } from "@/lib/images";
import { WA } from "@/lib/whatsapp";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Gurleen Kaur Pannu Artistry & Makeovers" },
      { name: "description", content: "A curated portfolio of bridal, destination, engagement, reception, editorial and western bridal work by Gurleen Kaur Pannu Artistry & Makeovers." },
      { property: "og:title", content: "Portfolio — Gurleen Kaur Pannu Artistry & Makeovers" },
      { property: "og:description", content: "Full bridal portfolio of Mumbai luxury makeup artist Gurleen Kaur Pannu Artistry & Makeovers." },
      { property: "og:url", content: "/portfolio" },
      { property: "og:image", content: ALL_PORTFOLIO[0].url },
      { name: "twitter:image", content: ALL_PORTFOLIO[0].url },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Bridal Portfolio — Gurleen Kaur Pannu Artistry & Makeovers",
          author: { "@type": "Person", name: "Gurleen Kaur Pannu Artistry & Makeovers" },
          image: ALL_PORTFOLIO.slice(0, 12).map((i) => i.url),
        }),
      },
    ],
  }),
  component: PortfolioPage,
});

const FILTERS = ["All", "Bridal", "Destination", "Engagement", "Reception", "Editorial", "Western"] as const;

function PortfolioPage() {
  const [active, setActive] = useState<typeof FILTERS[number]>("All");
  const items = active === "All" ? ALL_PORTFOLIO : ALL_PORTFOLIO.filter((i) => i.category === active);
  return (
    <div className="bg-white text-black min-h-screen">
      <Nav />
      <section className="pt-36 md:pt-44 pb-16 md:pb-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow">The Portfolio</p>
          <h1 className="font-display text-5xl md:text-7xl mt-4 max-w-3xl leading-[1.03]">
            Brides, gowns,<br />moments held still.
          </h1>
          <div className="hairline w-32 mt-10" />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 text-[11px] tracking-[0.22em] uppercase border transition-all ${
                  active === f
                    ? "bg-black text-white border-black"
                    : "bg-transparent text-black border-black/20 hover:border-black hover:text-wine"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {items.map((img, i) => (
              <motion.figure
                key={img.url + i}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
                className="group relative overflow-hidden bg-gray-50 aspect-[3/4]"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                />
                <figcaption className="absolute bottom-3 left-3 text-[10px] tracking-[0.24em] uppercase text-white bg-black/50 px-2 py-1 backdrop-blur-sm">
                  {img.category}
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>

          <div className="text-center mt-20">
            <a href={WA.bridal} target="_blank" rel="noreferrer" className="btn-dark">
              Book Your Bridal Makeup
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
