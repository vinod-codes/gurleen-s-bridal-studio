import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Gurleen Kaur Pannu Artistry & Makeovers" },
      {
        name: "description",
        content:
          "Terms governing bookings, retainers, cancellations, travel and use of the Gurleen Kaur Pannu Artistry & Makeovers website and services.",
      },
      { property: "og:title", content: "Terms & Conditions — Gurleen Kaur Pannu Artistry & Makeovers" },
      { property: "og:description", content: "Booking, retainer, cancellation and website terms." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Nav />

      <section className="pt-36 md:pt-44 pb-16 md:pb-20 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow">Legal</p>
          <h1 className="font-display text-5xl md:text-6xl mt-4 leading-[1.05]">Terms &amp; Conditions.</h1>
          <div className="hairline w-24 mx-auto mt-8" />
          <p className="text-taupe mt-6 text-sm">Last updated: 8 July 2026</p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 space-y-10 text-[16px] text-taupe leading-relaxed">
          <Block title="1. Scope">
            These terms govern your use of this website and the services offered by
            Gurleen Kaur Pannu Artistry & Makeovers ("the artist"). Using the site or engaging our services
            constitutes acceptance of these terms.
          </Block>
          <Block title="2. Bookings & retainers">
            All bookings are provisional until a signed booking note and non-refundable
            retainer are received. Dates are held on a first-committed basis; without a
            retainer the artist reserves the right to release the date.
          </Block>
          <Block title="3. Balance & payment">
            The balance of the booking value is due as specified in the booking note —
            typically before or on the day of the event. Payments are processed via bank
            transfer or approved payment gateways in INR unless otherwise agreed.
          </Block>
          <Block title="4. Travel & destination bookings">
            For destination bookings, travel, accommodation and local ground transport are
            billed at actuals and quoted transparently. The client is responsible for visa
            support letters, on-site permits, and any location-specific fees.
          </Block>
          <Block title="5. Cancellations & date changes">
            Retainers are non-refundable. For date changes, the artist will endeavour to
            transfer the retainer to a new date subject to availability. Cancellations within
            30 days of the event may attract an additional cancellation fee as specified in
            the booking note.
          </Block>
          <Block title="6. Force majeure">
            Neither party will be liable for failure or delay caused by circumstances outside
            reasonable control (natural disasters, epidemics, government orders). Retainers
            may be transferred to a rescheduled date, subject to availability.
          </Block>
          <Block title="7. Imagery & likeness">
            The artist may use photographs of completed work — including brand and vendor
            credits — on the website, portfolio and social channels, unless explicitly
            restricted in writing at the time of booking.
          </Block>
          <Block title="8. Intellectual property">
            All content on this website — text, images, photography, and design — is the
            property of Gurleen Kaur Pannu Artistry & Makeovers or licensed to us, and may not be reproduced
            without written permission.
          </Block>
          <Block title="9. Liability">
            Our liability is limited to the value of the booking. We are not liable for
            indirect, incidental or consequential losses. Clients are asked to disclose any
            skin allergies or sensitivities at the time of the trial.
          </Block>
          <Block title="10. Governing law">
            These terms are governed by the laws of India, and any dispute is subject to the
            exclusive jurisdiction of the courts of Mumbai.
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
      <h2 className="font-display text-2xl text-black">{title}</h2>
      <div className="hairline w-16 my-4" />
      <div className="text-taupe">{children}</div>
    </div>
  );
}
