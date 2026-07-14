import { Link } from "@tanstack/react-router";
import { PHONE, PHONE_DISPLAY, IG_BUSINESS, IG_PERSONAL, THREADS, WA } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-ivory text-ink border-t border-ink/20">
      {/* Top metadata row */}
      <div className="border-b border-ink/20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-4 flex flex-wrap items-center justify-between gap-3 mono text-[11px] tracking-[0.22em] uppercase">
          <span>[ IDX/04 ] — GKP · Season 04</span>
          <span>Mumbai · Available Worldwide</span>
          <span>© {new Date().getFullYear()} — All Rights Reserved</span>
        </div>
      </div>

      {/* Columns */}
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-4 gap-10 md:gap-8">
        <div>
          <p className="mono text-[11px] tracking-[0.28em] uppercase mb-5 text-ink/70">01 / Studio</p>
          <h4 className="font-display text-[20px] font-bold uppercase leading-tight">
            Elevating<br />Beauty.<br />Empowering<br />Artists.
          </h4>
          <p className="mt-5 text-sm text-ink/70 max-w-xs leading-relaxed">
            Bridal artistry, editorial direction and professional education —
            operating from Mumbai for weddings worldwide.
          </p>
        </div>

        <div>
          <p className="mono text-[11px] tracking-[0.28em] uppercase mb-5 text-ink/70">02 / Services</p>
          <ul className="space-y-3 font-display font-medium text-[18px] uppercase">
            <li><Link to="/bridal" className="link-neon">Bridal</Link></li>
            <li><Link to="/destination-weddings" className="link-neon">Destination</Link></li>
            <li><Link to="/engagement-reception" className="link-neon">Engagement</Link></li>
            <li><Link to="/academy" className="link-neon">Academy</Link></li>
            <li><Link to="/pricing" className="link-neon">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <p className="mono text-[11px] tracking-[0.28em] uppercase mb-5 text-ink/70">03 / Explore</p>
          <ul className="space-y-3 font-display font-medium text-[18px] uppercase">
            <li><Link to="/portfolio" className="link-neon">Portfolio</Link></li>
            <li><Link to="/about" className="link-neon">About</Link></li>
            <li><Link to="/testimonials" className="link-neon">Testimonials</Link></li>
            <li><Link to="/faq" className="link-neon">FAQ</Link></li>
            <li><Link to="/contact" className="link-neon">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter — dark block */}
        <div className="bg-ink text-ivory p-6 md:p-7">
          <p className="mono text-[11px] tracking-[0.28em] uppercase mb-4" style={{ color: "#31EF07" }}>04 / Signal</p>
          <h4 className="font-display text-[22px] font-bold uppercase leading-tight text-ivory">
            Enter the<br />mailing list.
          </h4>
          <form
            className="mt-6"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const email = fd.get("email");
              window.open(`${WA.general}?text=Add%20${encodeURIComponent(String(email))}%20to%20the%20studio%20list`, "_blank");
            }}
          >
            <div className="flex items-center border-b border-ivory/40 focus-within:border-[color:var(--neon-green)] transition-colors">
              <input
                name="email"
                type="email"
                required
                placeholder="your@email"
                className="flex-1 bg-transparent py-3 mono text-sm text-ivory placeholder:text-ivory/40 outline-none"
              />
              <button
                type="submit"
                className="mono text-[11px] tracking-[0.24em] uppercase px-3 py-2 -mr-2"
                style={{ color: "#31EF07" }}
              >
                Send →
              </button>
            </div>
          </form>

          <ul className="mt-8 space-y-2 mono text-[11px] tracking-[0.2em] uppercase text-ivory/70">
            <li><a href={WA.general} target="_blank" rel="noreferrer" className="hover:text-[color:var(--neon-green)]">WhatsApp</a></li>
            <li><a href={`tel:${PHONE}`} className="hover:text-[color:var(--neon-green)]">{PHONE_DISPLAY}</a></li>
            <li><a href={IG_BUSINESS} target="_blank" rel="noreferrer" className="hover:text-[color:var(--neon-green)]">@gurleenkaurpannu_mua</a></li>
            <li><a href={IG_PERSONAL} target="_blank" rel="noreferrer" className="hover:text-[color:var(--neon-green)]">@gurleenkaurpannnu</a></li>
            <li><a href={THREADS} target="_blank" rel="noreferrer" className="hover:text-[color:var(--neon-green)]">Threads</a></li>
          </ul>
        </div>
      </div>

      {/* Ghost brand title */}
      <div className="border-t border-ink/20 overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-6">
          <p
            className="font-display font-bold uppercase leading-none whitespace-nowrap"
            style={{
              fontSize: "clamp(3.5rem, 14vw, 16rem)",
              color: "#D9D9D9",
              letterSpacing: "-0.05em",
            }}
          >
            GKP&nbsp;Artistry
          </p>
        </div>
      </div>

      {/* Legal strip */}
      <div className="border-t border-ink/20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-4 flex flex-wrap justify-between items-center gap-3 mono text-[10px] tracking-[0.24em] uppercase text-ink/60">
          <span>SS/26 — Bridal · Editorial · Academy</span>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="link-neon">Privacy</Link>
            <Link to="/terms" className="link-neon">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
