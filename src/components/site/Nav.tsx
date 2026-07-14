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
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="link-neon mono text-[12px] tracking-[0.22em] uppercase"
              activeProps={{ style: { color: "#31EF07" } }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right — WhatsApp CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href={WA.general}
            target="_blank"
            rel="noreferrer"
            className="link-neon mono text-[12px] tracking-[0.22em] uppercase"
          >
            [ WhatsApp → ]
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
              className="mono text-sm tracking-[0.22em] uppercase link-neon w-fit"
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
