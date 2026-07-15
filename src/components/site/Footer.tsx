import { Link } from "@tanstack/react-router";
import { PHONE, PHONE_DISPLAY, IG_BUSINESS, IG_PERSONAL, THREADS, WA } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-white text-black border-t border-black/10">
      {/* Top metadata row */}
      <div className="border-b border-black/10">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 py-4 flex flex-wrap items-center justify-between gap-3 font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-gray-500">
          <span>GKP Artistry & Makeovers</span>
          <span>Mumbai · Available Worldwide</span>
          <span>© {new Date().getFullYear()} — All Rights Reserved</span>
        </div>
      </div>

      {/* Columns */}
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-4 gap-12 md:gap-8">
        <div>
          <p className="font-sans text-[11px] font-medium tracking-[0.25em] uppercase mb-6 text-gray-400">01 / Studio</p>
          <h4 className="font-display text-[24px] uppercase leading-tight tracking-wide">
            Elevating Beauty.<br />Empowering Artists.
          </h4>
          <p className="mt-6 text-sm text-gray-600 max-w-xs leading-relaxed">
            Bridal artistry, editorial direction, and professional education —
            operating from Mumbai for weddings worldwide.
          </p>
        </div>

        <div>
          <p className="font-sans text-[11px] font-medium tracking-[0.25em] uppercase mb-6 text-gray-400">02 / Services</p>
          <ul className="space-y-4 font-display text-[16px] uppercase tracking-wide">
            <li><Link to="/bridal" className="hover:text-gold transition-colors">Bridal</Link></li>
            <li><Link to="/destination-weddings" className="hover:text-gold transition-colors">Destination</Link></li>
            <li><Link to="/engagement-reception" className="hover:text-gold transition-colors">Engagement</Link></li>
            <li><Link to="/academy" className="hover:text-gold transition-colors">Academy</Link></li>
            <li><Link to="/pricing" className="hover:text-gold transition-colors">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-sans text-[11px] font-medium tracking-[0.25em] uppercase mb-6 text-gray-400">03 / Explore</p>
          <ul className="space-y-4 font-display text-[16px] uppercase tracking-wide">
            <li><Link to="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/testimonials" className="hover:text-gold transition-colors">Testimonials</Link></li>
            <li><Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter — dark block */}
        <div className="bg-black text-white p-8 md:p-10">
          <p className="font-sans text-[11px] font-medium tracking-[0.25em] uppercase mb-6 text-gold">04 / Signal</p>
          <h4 className="font-display text-[26px] uppercase leading-tight text-white tracking-wide">
            Enter the mailing list.
          </h4>
          <form
            className="mt-8"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const email = fd.get("email");
              window.open(`${WA.general}?text=Add%20${encodeURIComponent(String(email))}%20to%20the%20studio%20list`, "_blank");
            }}
          >
            <div className="flex items-center border-b border-white/30 focus-within:border-gold transition-colors pb-2">
              <input
                name="email"
                type="email"
                required
                placeholder="YOUR EMAIL"
                className="flex-1 bg-transparent py-2 font-sans text-sm text-white placeholder:text-white/40 tracking-widest outline-none uppercase"
              />
              <button
                type="submit"
                className="font-sans text-[11px] font-medium tracking-[0.25em] uppercase px-3 py-2 -mr-2 text-gold hover:text-white transition-colors"
              >
                Send
              </button>
            </div>
          </form>

          <ul className="mt-10 space-y-3 font-sans text-[11px] tracking-[0.2em] uppercase text-white/70">
            <li><a href={WA.general} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">WhatsApp</a></li>
            <li><a href={`tel:${PHONE}`} className="hover:text-gold transition-colors">{PHONE_DISPLAY}</a></li>
            <li><a href={IG_BUSINESS} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">@gurleenkaurpannu_mua</a></li>
            <li><a href={IG_PERSONAL} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">@gurleenkaurpannnu</a></li>
            <li><a href={THREADS} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">Threads</a></li>
          </ul>
        </div>
      </div>

      {/* Ghost brand title */}
      <div className="border-t border-black/10 overflow-hidden bg-gray-50">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 py-10 flex justify-center">
          <p
            className="font-display uppercase leading-none text-center"
            style={{
              fontSize: "clamp(3rem, 10vw, 12rem)",
              color: "#EAEAEA",
              letterSpacing: "0.05em",
            }}
          >
            GKP ARTISTRY
          </p>
        </div>
      </div>

      {/* Legal strip */}
      <div className="border-t border-black/10">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 py-5 flex flex-wrap justify-between items-center gap-4 font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-gray-500">
          <span>Bridal · Editorial · Academy</span>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="hover:text-black transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-black transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
