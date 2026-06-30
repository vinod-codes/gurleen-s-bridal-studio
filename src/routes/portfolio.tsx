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
      { title: "Portfolio — Gurleen Kaur Pannu" },
      { name: "description", content: "A curated portfolio of bridal, destination, engagement, reception, editorial and western bridal work by Gurleen Kaur Pannu." },
      { property: "og:title", content: "Portfolio — Gurleen Kaur Pannu" },
      { property: "og:description", content: "Full bridal portfolio of Mumbai luxury makeup artist Gurleen Kaur Pannu." },
      { property: "og:image", content: ALL_PORTFOLIO[0].url },
    ],
  }),
  component: PortfolioPage,
});

const FILTERS = ["All", "Bridal", "Destination", "Engagement", "Reception", "Editorial", "Western"] as const;

function PortfolioPage() {
  const [active, setActive] = useState<typeof FILTERS[number]>("All");
  const items = active === "All" ? ALL_PORTFOLIO : ALL_PORTFOLIO.filter((i) => i.category === active);
  return (
    <div className="bg-ivory text-ink min-h-screen">
      <Nav />
      <section className="pt-36 md:pt-44 pb-16 md:pb-24 bg-ivory">
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
                    ? "bg-wine text-ivory border-wine"
                    : "bg-transparent text-ink border-ink/20 hover:border-wine hover:text-wine"
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
                className="group relative overflow-hidden bg-sand aspect-[3/4]"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                />
                <figcaption className="absolute bottom-3 left-3 text-[10px] tracking-[0.24em] uppercase text-ivory bg-ink/50 px-2 py-1 backdrop-blur-sm">
                  {img.category}
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>

          <div className="text-center mt-20">
            <a href={WA.bridal} target="_blank" rel="noreferrer" className="btn-wine">
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
