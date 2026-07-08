import { Link } from "@tanstack/react-router";
import { PHONE, PHONE_DISPLAY, IG_BUSINESS, IG_PERSONAL, THREADS, WA } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <p className="eyebrow !text-gold">GKP Artistry & Makeovers</p>
          <h3 className="font-display text-3xl mt-3 text-ivory">
            Elevating Beauty.<br />Empowering Artists.
          </h3>
          <p className="text-ivory/70 mt-5 max-w-md leading-relaxed text-[15px]">
            Based in Mumbai. Available for destination weddings worldwide.
          </p>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.28em] uppercase text-gold mb-5">Services</p>
          <ul className="space-y-3 text-sm text-ivory/80">
            <li><Link to="/bridal" className="hover:text-gold transition-colors">Bridal Makeup</Link></li>
            <li><Link to="/destination-weddings" className="hover:text-gold transition-colors">Destination Weddings</Link></li>
            <li><Link to="/engagement-reception" className="hover:text-gold transition-colors">Engagement &amp; Reception</Link></li>
            <li><Link to="/editorial-fashion" className="hover:text-gold transition-colors">Editorial &amp; Fashion</Link></li>
            <li><Link to="/academy/one-on-one" className="hover:text-gold transition-colors">One-on-One Training</Link></li>
            <li><Link to="/pricing" className="hover:text-gold transition-colors">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.28em] uppercase text-gold mb-5">Explore</p>
          <ul className="space-y-3 text-sm text-ivory/80">
            <li><Link to="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
            <li><Link to="/academy" className="hover:text-gold transition-colors">The Academy</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/testimonials" className="hover:text-gold transition-colors">Testimonials</Link></li>
            <li><Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.28em] uppercase text-gold mb-5">Contact</p>
          <ul className="space-y-3 text-sm text-ivory/80">
            <li>
              <a href={WA.general} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE}`} className="hover:text-gold transition-colors">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={IG_BUSINESS} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
                @gurleenkaurpannu_mua
              </a>
            </li>
            <li className="flex items-center gap-4 pt-2 text-ivory/60">
              <a href={IG_PERSONAL} target="_blank" rel="noreferrer" aria-label="Personal Instagram" className="hover:text-gold text-xs">
                Personal
              </a>
              <a href={THREADS} target="_blank" rel="noreferrer" aria-label="Threads" className="hover:text-gold">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22c-5 0-9-3.5-9-10s4-10 9-10 9 3.5 9 9c0 4-2.5 6.5-6 6.5-2 0-3.5-1-3.5-2.5 0-2 2-3 4-3 3 0 5 1.5 5 4.5" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10 py-6">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-ivory/50">
          <span>© {new Date().getFullYear()} GKP Artistry & Makeovers. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms</Link>
            <span className="tracking-[0.18em] uppercase">Mumbai · Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
