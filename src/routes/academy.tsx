import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Reveal } from "@/components/site/Reveal";
import { WA } from "@/lib/whatsapp";
import { FOUNDER } from "@/lib/images";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "The Academy — Gurleen Kaur Pannu Artistry & Makeovers" },
      { name: "description", content: "Four formats of professional makeup education: 5-Day Masterclass, 1-Day Look & Learn (city editions), a 2-Month Professional Course, and One-on-One Training." },
      { property: "og:title", content: "The Academy — Gurleen Kaur Pannu Artistry & Makeovers" },
      { property: "og:description", content: "Professional bridal makeup education from Gurleen Kaur Pannu Artistry & Makeovers." },
      { property: "og:url", content: "/academy" },
      { property: "og:image", content: FOUNDER.lipShot.url },
      { name: "twitter:image", content: FOUNDER.lipShot.url },
    ],
    links: [{ rel: "canonical", href: "/academy" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Course",
              name: "5-Day Bridal Makeup Masterclass",
              description: "Intensive hands-on training for aspiring makeup artists.",
              provider: { "@type": "Organization", name: "Gurleen Kaur Pannu Professional Makeup Academy", sameAs: "https://www.instagram.com/gurleenkaurpannu_mua" },
            },
            {
              "@type": "Course",
              name: "1-Day Look & Learn",
              description: "Focused city-wise day covering a complete signature bridal look.",
              provider: { "@type": "Organization", name: "Gurleen Kaur Pannu Professional Makeup Academy" },
            },
            {
              "@type": "Course",
              name: "2-Month Professional Makeup Course",
              description: "End-to-end professional formation for the working artist.",
              provider: { "@type": "Organization", name: "Gurleen Kaur Pannu Professional Makeup Academy" },
            },
            {
              "@type": "Course",
              name: "One-on-One Private Makeup Training",
              description: "Bespoke private training sessions tailored to your specific goals.",
              provider: { "@type": "Organization", name: "Gurleen Kaur Pannu Professional Makeup Academy" },
            },
          ],
        }),
      },
    ],
  }),
  component: AcademyPage,
});

const COURSES = [
  {
    title: "5-Day Masterclass",
    kicker: "Intensive",
    desc: "Professional hands-on training for aspiring makeup artists. A small-group, full-immersion programme building the foundations of luxury bridal artistry.",
    topics: [
      "Skin preparation & priming",
      "Foundation matching & application",
      "Bridal eye architecture",
      "Lash & lip artistry",
      "Hair sculpting basics",
      "Camera-ready finishing",
    ],
    ctaHref: "/academy/masterclass",
    ctaLabel: "View Course Details",
  },
  {
    title: "1-Day Look & Learn",
    kicker: "City Editions",
    desc: "A focused single day in your city, walking through one complete signature bridal look from start to finish, with notes on the craft and the client experience around it.",
    topics: [
      "Signature Bridal Glam",
      "Glass Skin Techniques",
      "Soft Sculpting",
      "Monochrome Glam",
      "Juicy Lips",
      "Modern Bridal Makeup",
      "Luxury Client Experience",
      "Industry Insights",
    ],
    ctaHref: "/academy/look-and-learn",
    ctaLabel: "View City Editions",
  },
  {
    title: "2-Month Professional Course",
    kicker: "Career Track",
    desc: "End-to-end formation for the working makeup artist. From core craft to business — what to charge, how to brand, how to communicate with clients.",
    topics: [
      "Bridal Makeup", "Hair Styling", "Skin Preparation", "Color Theory",
      "Product Knowledge", "Draping", "Photography", "Portfolio Building",
      "Business & Branding", "Social Media for Makeup Artists",
      "Pricing Strategy", "Client Communication", "Certification", "Mentorship",
    ],
    ctaHref: "/academy/two-month-professional",
    ctaLabel: "View Course Details",
  },
  {
    title: "One-on-One Makeup Training",
    kicker: "Personalised",
    desc: "Bespoke, private training sessions focused entirely on your specific goals — whether refining your base technique, mastering bridal hairstyling, or building business acumen.",
    topics: [
      "Skin Preparation & Base Technique",
      "Bridal Hairstyling Courses",
      "Portfolio Building for Makeup Artists",
      "Business & Client Management",
      "Custom Skill Focus",
    ],
    ctaHref: "/academy/one-on-one",
    ctaLabel: "View Private Training",
  },
];

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function MagneticButton({ children, className, as, href, to, target, rel }: any) {
  const container = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const el = container.current;
    if (!el) return;

    const xTo = gsap.quickTo(el, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(el, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = el.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.2);
      yTo(y * 0.2);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, { scope: container });

  const Inner = () => (
    <div ref={container} className="inline-block relative">
      {children}
    </div>
  );

  if (as === "a") {
    return <a href={href} className={className} target={target} rel={rel}><Inner /></a>;
  }
  if (as === "Link") {
    return <Link to={to} className={className}><Inner /></Link>;
  }
  return <button className={className}><Inner /></button>;
}

function AcademyPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Nav />

      <section className="pt-36 md:pt-44 pb-20 bg-black text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <p className="eyebrow !text-white/70">The Academy</p>
          <h1 className="font-display text-5xl md:text-7xl mt-4 max-w-4xl leading-[1.03] text-white">
            Learn the craft<br /><em className="text-white/90">behind the look.</em>
          </h1>
          <p className="text-white/75 mt-8 max-w-2xl text-[17px] leading-relaxed">
            Four formats, one philosophy: build artists who understand bridal beauty,
            the business around it, and the calm that defines a luxury client experience.
          </p>
          <div className="mt-10 inline-block">
            <MagneticButton as="a" href={WA.academyGeneral} target="_blank" rel="noreferrer" className="btn-ghost-light inline-block">
              Enquire About Courses
            </MagneticButton>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6 space-y-16 md:space-y-24">
          {COURSES.map((c, i) => (
            <Reveal key={c.title}>
              <article className="grid md:grid-cols-12 gap-8 md:gap-12 border-t border-black/20 pt-12">
                <div className="md:col-span-4">
                  <p className="text-[11px] tracking-[0.28em] uppercase text-black">{c.kicker}</p>
                  <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight">{c.title}</h2>
                  <p className="text-gray-600 mt-6 text-[16px] leading-relaxed">{c.desc}</p>

                  <div className="mt-8 inline-block">
                    {c.ctaHref.startsWith("http") ? (
                      <MagneticButton as="a" href={c.ctaHref} target="_blank" rel="noreferrer" className="btn-dark inline-block">
                        {c.ctaLabel}
                      </MagneticButton>
                    ) : (
                      <MagneticButton as="Link" to={c.ctaHref} className="btn-dark bg-black text-white hover:bg-white hover:text-black hover:border-black transition-colors inline-block">
                        {c.ctaLabel}
                      </MagneticButton>
                    )}
                  </div>
                </div>

                <div className="md:col-span-8">
                  <p className="text-[11px] tracking-[0.28em] uppercase text-gray-500 mb-6">Curriculum</p>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    {c.topics.map((t, j) => (
                      <li key={t} className="flex gap-4 items-start border-b border-black/10 pb-3">
                        <span className="font-display text-black text-sm pt-1 w-6">
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[15px] text-black">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-black text-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow !text-white/70">Next Cohort</p>
          <h2 className="font-display text-3xl md:text-5xl mt-4 text-white">
            Speak to us about dates and seats.
          </h2>
          <div className="mt-10">
            <MagneticButton as="a" href={WA.academyGeneral} target="_blank" rel="noreferrer" className="btn-ghost-light inline-block">
              Chat on WhatsApp
            </MagneticButton>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
