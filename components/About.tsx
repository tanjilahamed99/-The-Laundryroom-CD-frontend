"use client";
import { useReveal } from "@/lib/useReveal";
import { ShieldCheck, Leaf, Award, Heart } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Trusted Quality",  desc: "Over 12 years serving Oklahoma City families with consistent, reliable service." },
  { icon: Leaf,        title: "Eco-Friendly",     desc: "Energy-efficient machines and biodegradable detergents protect the planet." },
  { icon: Award,       title: "Award Winning",    desc: "Best Laundromat in OKC — 3 years running per OKC Metro Readers' Choice." },
  { icon: Heart,       title: "Community First",  desc: "Locally owned, family operated. We treat every customer like a neighbor." },
];

export default function About() {
  const { ref } = useReveal();

  return (
    <section id="about" ref={ref} className="py-24 bg-white overflow-hidden relative">
      {/* Subtle bubbles */}
      {[
        { size: 34, left: "2%",  dur: "12s", del: "0s", drift: "20px" },
        { size: 22, left: "95%", dur: "9s",  del: "2s", drift: "-18px" },
      ].map((b, i) => (
        <div key={i} className="bubble bubble-foam"
          style={{ width: b.size, height: b.size, left: b.left, bottom: "-50px", opacity: 0.45,
            "--dur": b.dur, "--del": b.del, "--drift": b.drift } as React.CSSProperties} />
      ))}

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="reveal">
            <span className="inline-block font-semibold text-sm tracking-widest uppercase mb-3"
                  style={{ color: "var(--primary)" }}>Our Story</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6"
                style={{ color: "var(--deep)" }}>
              Oklahoma City&apos;s{" "}
              <span className="gradient-text">Most Trusted</span>{" "}
              Laundromat
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: "rgba(10,37,64,0.62)" }}>
              Founded in 2012, Bubbles Laundromat has been a cornerstone of the Britton Rd community.
              We started with a simple mission: give Oklahoma City families a clean, safe, and affordable
              place to do their laundry.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: "rgba(10,37,64,0.62)" }}>
              Today, with 18 washers, 24 dryers, and a full-service wash & fold team, we serve hundreds
              of customers every single day. Our commitment to quality, speed, and friendliness has never wavered.
            </p>
            <a href="#contact" className="btn-primary text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 shadow-lg">
              <span>Visit Us Today</span>
            </a>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-5 reveal">
            {values.map((v, i) => (
              <div key={i} className="value-card glass rounded-2xl p-5"
                   style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="value-icon w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                     style={{ background: "var(--primary-ghost)" }}>
                  <v.icon size={18} style={{ color: "var(--primary)" }} />
                </div>
                <h4 className="font-display font-bold text-base mb-1" style={{ color: "var(--deep)" }}>{v.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(10,37,64,0.55)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
