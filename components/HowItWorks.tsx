"use client";
import { useReveal } from "@/lib/useReveal";

const steps = [
  { num: "01", emoji: "📦", title: "Drop Off or Schedule", desc: "Bring your laundry to us or schedule a free pickup online — we come to you!" },
  { num: "02", emoji: "🧺", title: "We Sort & Wash",       desc: "Our team sorts by color and fabric, then washes using premium detergents." },
  { num: "03", emoji: "✨", title: "Dried & Folded",       desc: "Everything is dried at the perfect temperature, folded neatly and wrapped." },
  { num: "04", emoji: "🚚", title: "Ready for Pickup",     desc: "Pick up in-store or we deliver back to your door — fresh, clean, on time." },
];

const bubbles = [
  { size: 38, left: "3%",  dur: "13s", del: "0s",   drift: "28px",  cls: "bubble-soap bubble-drift" },
  { size: 18, left: "14%", dur: "8s",  del: "1.5s", drift: "-18px", cls: "bubble-micro" },
  { size: 55, left: "28%", dur: "15s", del: "3s",   drift: "40px",  cls: "bubble-foam bubble-drift" },
  { size: 22, left: "42%", dur: "9.5s",del: "0.8s", drift: "-24px", cls: "bubble-micro" },
  { size: 46, left: "58%", dur: "12s", del: "2.5s", drift: "32px",  cls: "bubble-soap" },
  { size: 16, left: "70%", dur: "7s",  del: "4s",   drift: "-14px", cls: "bubble-micro" },
  { size: 60, left: "82%", dur: "14s", del: "1s",   drift: "36px",  cls: "bubble-foam bubble-drift" },
  { size: 24, left: "93%", dur: "10s", del: "2s",   drift: "-20px", cls: "bubble-soap" },
];

export default function HowItWorks() {
  const { ref } = useReveal();

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, var(--primary-deeper) 0%, var(--primary-dark) 40%, #0284c7 70%, var(--primary) 100%)" }}
    >
      {/* Bubble field */}
      <div className="bubble-field" style={{ opacity: 0.28 }}>
        {bubbles.map((b, i) => (
          <div key={i} className={`bubble ${b.cls}`}
            style={{ width: b.size, height: b.size, left: b.left, bottom: "-60px",
              "--dur": b.dur, "--del": b.del, "--drift": b.drift } as React.CSSProperties} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block font-semibold text-sm tracking-widest uppercase mb-3"
                style={{ color: "rgba(186,230,253,0.80)" }}>
            The Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Laundry Made{" "}
            <span style={{ color: "var(--primary-light)" }}>Simple</span>
          </h2>
          <p className="text-lg max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
            Four easy steps to perfectly clean clothes every single time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="reveal relative" style={{ transitionDelay: `${i * 120}ms` }}>
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-[60%] w-full h-0.5 z-0"
                     style={{ background: "rgba(255,255,255,0.12)" }}>
                  <div className="h-full" style={{
                    background: "linear-gradient(90deg, transparent, rgba(14,165,233,0.85), transparent)",
                    backgroundSize: "200% 100%",
                    animation: `shimmer 2.8s linear ${i * 0.5}s infinite`,
                  }} />
                </div>
              )}

              <div className="step-card relative z-10 glass-dark rounded-2xl p-6 text-center">
                <div className="font-display text-5xl font-bold mb-1" style={{ color: "rgba(255,255,255,0.10)" }}>
                  {step.num}
                </div>
                <div className="step-emoji text-4xl mb-4"
                     style={{ animation: `float ${4 + i}s ease-in-out ${i * 0.5}s infinite` }}>
                  {step.emoji}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave */}
      <div className="wave-container absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20 C480 60 960 0 1440 30 L1440 60 L0 60 Z" fill="#fafaf8" />
        </svg>
      </div>
    </section>
  );
}
