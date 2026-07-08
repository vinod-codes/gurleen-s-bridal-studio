import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — GKP Artistry & Makeovers" },
      {
        name: "description",
        content:
          "How GKP Artistry & Makeovers collects, uses and protects personal information shared through this website and WhatsApp.",
      },
      { property: "og:title", content: "Privacy Policy — GKP Artistry & Makeovers" },
      { property: "og:description", content: "Our approach to personal information and privacy." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="bg-ivory text-ink min-h-screen">
      <Nav />

      <section className="pt-36 md:pt-44 pb-16 md:pb-20 bg-ivory">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow">Legal</p>
          <h1 className="font-display text-5xl md:text-6xl mt-4 leading-[1.05]">Privacy Policy.</h1>
          <div className="hairline w-24 mx-auto mt-8" />
          <p className="text-taupe mt-6 text-sm">Last updated: 8 July 2026</p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 prose-editorial space-y-10 text-[16px] text-taupe leading-relaxed">
          <Block title="1. Who we are">
            This website is operated by GKP Artistry & Makeovers ("we", "us", "our"), a luxury bridal
            makeup artist and educator based in Mumbai, India. For any privacy-related question,
            you can reach us on WhatsApp at +91 74003 53112.
          </Block>

          <Block title="2. What we collect">
            <ul className="list-disc pl-5 space-y-2">
              <li>Contact details you share via WhatsApp or phone (name, phone, wedding dates, event details).</li>
              <li>Enquiry content — messages, references and requirements you send us.</li>
              <li>Analytics data — anonymised page-visit information used to improve the site.</li>
            </ul>
          </Block>

          <Block title="3. How we use it">
            To respond to enquiries, quote and coordinate bookings, deliver contracted services,
            and improve the site's usability. We do not sell or rent personal information to
            third parties.
          </Block>

          <Block title="4. WhatsApp & third parties">
            Enquiries submitted via WhatsApp are processed under WhatsApp's own privacy policy.
            We use privacy-respectful analytics (aggregated, anonymised) and secure hosting
            infrastructure. Third-party embeds (Instagram, Google Fonts) are subject to their
            own privacy terms.
          </Block>

          <Block title="5. Data retention">
            Enquiry conversations are retained for as long as necessary to serve the booking
            and for a reasonable period afterwards for reference. Analytics data is retained
            in aggregated form only.
          </Block>

          <Block title="6. Your rights">
            You may request a copy of the personal information we hold about you, correct it, or
            request deletion — subject to any legal obligations we may have. Write to us on
            WhatsApp to exercise these rights.
          </Block>

          <Block title="7. Cookies">
            The site uses only essential cookies required for the site to function and
            anonymised analytics cookies to measure page performance. No advertising cookies
            are set.
          </Block>

          <Block title="8. Changes">
            We may update this policy from time to time. Material changes will be reflected on
            this page with a revised "last updated" date.
          </Block>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl text-ink">{title}</h2>
      <div className="hairline w-16 my-4" />
      <div className="text-taupe">{children}</div>
    </div>
  );
}
