import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-black/10 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10 flex items-center justify-between gap-4">
        <Link to="/" className="flex flex-col leading-none max-w-[72%] md:max-w-none z-10">
          <span
            className="font-display text-[13px] sm:text-[15px] md:text-xl lg:text-2xl tracking-widest uppercase text-black leading-tight"
          >
            Gurleen Kaur Pannu Artistry
          </span>
          <span
            className={`text-[9px] md:text-[10px] tracking-[0.25em] uppercase mt-1.5 md:mt-2 ${
              scrolled ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Bridal · Pro Academy
          </span>
        </Link>

        <nav className="hidden xl:flex items-center justify-center flex-1 gap-6 2xl:gap-10">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={`text-[11px] font-medium tracking-[0.15em] uppercase transition-colors text-black hover:text-gray-500 whitespace-nowrap`}
              activeProps={{ className: "text-black font-bold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center z-10">
          <a
            href={WA.general}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold tracking-[0.15em] uppercase border transition-colors border-black text-black hover:bg-black hover:text-white whitespace-nowrap`}
          >
            WhatsApp
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={`xl:hidden flex flex-col gap-[5px] text-black p-2 -mr-2 z-10`}
        >
          <span className="block w-6 h-[1.5px] bg-current" />
          <span className="block w-6 h-[1.5px] bg-current" />
          <span className="block w-6 h-[1.5px] bg-current" />
        </button>
      </div>

      {open && (
        <div className="xl:hidden px-6 py-8 flex flex-col gap-5 bg-white border-t border-black/10 absolute top-full left-0 right-0 shadow-lg">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-sm font-medium tracking-[0.18em] uppercase text-black"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WA.general}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[11px] font-bold tracking-[0.15em] uppercase border border-black text-black hover:bg-black hover:text-white mt-4 w-full"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
