import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { WA } from "@/lib/whatsapp";

const links = [
  { label: "Portfolio", to: "/portfolio" as const },
  { label: "Bridal", to: "/bridal" as const },
  { label: "Destination", to: "/destination-weddings" as const },
  { label: "Academy", to: "/academy" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
<<<<<<< HEAD
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md border-b border-ink/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-screen-2xl px-8 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none">
          <span
            className={`font-display text-xl md:text-2xl tracking-tight ${
              scrolled ? "text-ink" : "text-ivory"
            }`}
          >
            GKP Artistry & Makeovers
          </span>
          <span
            className={`text-[10px] tracking-[0.25em] uppercase mt-1.5 ${
              scrolled ? "text-taupe" : "text-ivory/80"
            }`}
          >
            Bridal · Pro Academy
          </span>
        </Link>

        <nav className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 gap-10">
=======
      className="fixed top-0 left-0 right-0 z-40 py-5"
      style={{ mixBlendMode: "difference" }}
    >
      <div
        className="mx-auto max-w-[1600px] px-6 md:px-10 flex items-center justify-between"
        style={{ color: "#E3E2DE" }}
      >
        {/* Brand — left */}
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-[20px] md:text-[22px] font-bold tracking-tight uppercase">
            GKP / Artistry
          </span>
          <span className="mono text-[10px] tracking-[0.28em] uppercase mt-1 opacity-80">
            Season 04 — Mumbai
          </span>
        </Link>

        {/* Centered links */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
>>>>>>> b39d0b645cf11b186ca3ff65c32392898490d896
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
<<<<<<< HEAD
              className={`text-[11px] font-bold tracking-[0.15em] uppercase transition-colors ${
                scrolled ? "text-ink hover:text-wine" : "text-ivory hover:text-gold"
              }`}
              activeProps={{ className: scrolled ? "text-wine" : "text-gold" }}
=======
              className="link-neon mono text-[12px] tracking-[0.22em] uppercase"
              activeProps={{ style: { color: "#31EF07" } }}
>>>>>>> b39d0b645cf11b186ca3ff65c32392898490d896
            >
              {l.label}
            </Link>
          ))}
        </nav>

<<<<<<< HEAD
        <div className="hidden lg:flex items-center">
=======
        {/* Right — WhatsApp CTA */}
        <div className="hidden lg:flex items-center gap-6">
>>>>>>> b39d0b645cf11b186ca3ff65c32392898490d896
          <a
            href={WA.general}
            target="_blank"
            rel="noreferrer"
<<<<<<< HEAD
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold tracking-[0.15em] uppercase border transition-colors ${
              scrolled 
                ? "border-ink text-ink hover:bg-ink hover:text-ivory" 
                : "border-ivory text-ivory hover:bg-ivory hover:text-ink"
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            WhatsApp
=======
            className="link-neon mono text-[12px] tracking-[0.22em] uppercase"
          >
            [ WhatsApp → ]
>>>>>>> b39d0b645cf11b186ca3ff65c32392898490d896
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-1.5"
        >
          <span className="block w-7 h-[2px] bg-current" />
          <span className="block w-7 h-[2px] bg-current" />
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden px-6 py-8 flex flex-col gap-5 border-t"
          style={{
            mixBlendMode: "normal",
            background: "#1B0E0D",
            color: "#E3E2DE",
            borderColor: "rgba(227,226,222,0.15)",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
<<<<<<< HEAD
              className="text-sm font-bold tracking-[0.18em] uppercase text-ink"
=======
              className="mono text-sm tracking-[0.22em] uppercase link-neon w-fit"
>>>>>>> b39d0b645cf11b186ca3ff65c32392898490d896
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WA.general}
            target="_blank"
            rel="noreferrer"
            className="btn-wine mt-2 w-fit"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
