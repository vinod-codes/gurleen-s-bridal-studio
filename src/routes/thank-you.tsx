import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { IG_BUSINESS } from "@/lib/whatsapp";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — GKP Artistry & Makeovers" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <div className="bg-ivory text-ink min-h-screen flex flex-col">
      <Nav />
      
      <main className="flex-grow flex items-center justify-center py-24 md:py-32 px-6">
        <div className="max-w-xl text-center">
          <p className="eyebrow !text-gold">Received</p>
          <h1 className="font-display text-5xl md:text-7xl mt-4 leading-tight">
            Thank you.
          </h1>
          <div className="hairline w-24 mx-auto my-8" />
          <p className="text-taupe text-[17px] leading-relaxed">
            Your enquiry has been received. Our team will review your details and be in touch with you shortly. 
            In the meantime, you can explore more of our recent work on Instagram or view the portfolio.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/portfolio" className="btn-wine">View Portfolio</Link>
            <a href={IG_BUSINESS} target="_blank" rel="noreferrer" className="btn-ghost">Follow on Instagram</a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
