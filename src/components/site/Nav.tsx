import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md border-b border-ink/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none">
          <span
            className={`font-display text-lg md:text-xl tracking-tight ${
              scrolled ? "text-ink" : "text-ivory"
            }`}
          >
            Gurleen Kaur Pannu
          </span>
          <span
            className={`text-[10px] tracking-[0.32em] uppercase mt-1 ${
              scrolled ? "text-taupe" : "text-ivory/80"
            }`}
          >
            Bridal · Mumbai
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={`text-[13px] tracking-[0.18em] uppercase transition-colors ${
                scrolled ? "text-ink hover:text-wine" : "text-ivory hover:text-gold"
              }`}
              activeProps={{ className: scrolled ? "text-wine" : "text-gold" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WA.general}
            target="_blank"
            rel="noreferrer"
            className={
              scrolled
                ? "btn-wine !py-2.5 !px-5 !text-xs"
                : "btn-ghost-light !py-2.5 !px-5 !text-xs"
            }
          >
            WhatsApp
          </a>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden flex flex-col gap-1.5 ${
            scrolled ? "text-ink" : "text-ivory"
          }`}
        >
          <span className="block w-6 h-px bg-current" />
          <span className="block w-6 h-px bg-current" />
          <span className="block w-6 h-px bg-current" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ivory border-t border-ink/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.18em] uppercase text-ink"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WA.general}
            target="_blank"
            rel="noreferrer"
            className="btn-wine !py-3 !text-xs"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
