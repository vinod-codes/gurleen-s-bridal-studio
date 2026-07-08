import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — GKP Artistry & Makeovers" },
      { name: "description", content: "Refund and cancellation policy for GKP Artistry & Makeovers Bridal Makeup and Academy bookings." },
      { property: "og:title", content: "Refund Policy — GKP Artistry & Makeovers" },
      { property: "og:url", content: "/refund" },
    ],
  }),
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  return (
    <div className="bg-ivory text-ink min-h-screen">
      <Nav />
      
      <section className="pt-36 md:pt-44 pb-24 md:pb-32 bg-ivory">
        <div className="mx-auto max-w-3xl px-6">
          <p className="eyebrow">Legal</p>
          <h1 className="font-display text-5xl md:text-6xl mt-4 leading-[1.05]">
            Refund & Cancellation Policy.
          </h1>
          <div className="hairline w-24 my-10" />

          <div className="prose prose-lg prose-headings:font-display prose-headings:font-normal prose-a:text-wine prose-a:no-underline hover:prose-a:underline text-taupe leading-relaxed text-[16px]">
            <p>
              Last updated: July 2026
            </p>

            <h3>Bridal Bookings & Deposits</h3>
            <p>
              To secure a bridal booking, a non-refundable retainer/deposit is required. This secures your date and ensures Gurleen and her team turn away other prospective clients for that time. Because of the exclusive nature of these bookings, the retainer is strictly non-refundable under any circumstances.
            </p>
            <p>
              If a wedding is postponed, we will try our utmost to accommodate the new date subject to availability. If we are unavailable on the new date, the retainer remains non-refundable.
            </p>

            <h3>Bridal Trials</h3>
            <p>
              Bridal trials held at the studio are charged separately and must be paid in full on or before the day of the trial. Trial fees are non-refundable once the service has been rendered.
            </p>

            <h3>Academy Courses & Masterclasses</h3>
            <p>
              Seats for the Academy (including the 5-Day Masterclass, 1-Day Look & Learn, and 2-Month Professional Course) are highly limited. A deposit is required to hold your seat.
            </p>
            <ul>
              <li><strong>Deposits:</strong> Academy seat deposits are non-refundable.</li>
              <li><strong>Full Payments:</strong> If you have paid in full and cancel your attendance at least 30 days prior to the course start date, you will be refunded the amount paid minus the non-refundable deposit.</li>
              <li><strong>Late Cancellations:</strong> Cancellations made less than 30 days before the course start date are non-refundable.</li>
            </ul>

            <h3>Destination Weddings</h3>
            <p>
              For destination weddings, travel and accommodation expenses are arranged in advance. If a destination booking is cancelled, the client is responsible for any non-refundable travel costs already incurred by our team, in addition to the non-refundable service retainer.
            </p>

            <h3>Contact Us</h3>
            <p>
              If you have any questions about this policy, please reach out to us via WhatsApp or email prior to making a booking or paying a deposit.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
