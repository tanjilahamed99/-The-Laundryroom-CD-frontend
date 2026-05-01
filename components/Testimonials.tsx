"use client";
import { Star } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const testimonials = [
  { name: "Sarah M.",  location: "Edmond, OK",         rating: 5, text: "Best laundromat in OKC! The machines are always clean and well-maintained. The wash & fold service saves me so much time every week.", avatar: "SM", color: "var(--primary)" },
  { name: "James T.",  location: "Oklahoma City",       rating: 5, text: "I've been coming here for 3 years. The staff is incredibly friendly and the prices are unbeatable. Pickup & delivery is a game changer!", avatar: "JT", color: "var(--primary-dark)" },
  { name: "Maria L.",  location: "Deer Creek, OK",      rating: 5, text: "My go-to spot for dry cleaning. They handled my wedding dress perfectly. Highly recommend the premium service to everyone!", avatar: "ML", color: "var(--secondary)" },
  { name: "David R.",  location: "NW Oklahoma City",    rating: 5, text: "The express service is incredible — 3 hours and everything is done. This is the only laundromat I'll ever use. Clean, modern, professional.", avatar: "DR", color: "var(--secondary-dark)" },
];

const bubbles = [
  { size: 28, left: "8%",  dur: "11s", del: "0s",   drift: "22px" },
  { size: 16, left: "35%", dur: "8s",  del: "2s",   drift: "-15px" },
  { size: 38, left: "65%", dur: "13s", del: "1s",   drift: "28px" },
  { size: 20, left: "90%", dur: "9s",  del: "3s",   drift: "-18px" },
];

export default function Testimonials() {
  const { ref } = useReveal();

  return (
    <section ref={ref} className="py-24 foam-bg overflow-hidden relative">
      {bubbles.map((b, i) => (
        <div key={i} className="bubble bubble-foam"
          style={{ width: b.size, height: b.size, left: b.left, bottom: "-50px", opacity: 0.55,
            "--dur": b.dur, "--del": b.del, "--drift": b.drift } as React.CSSProperties} />
      ))}

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block font-semibold text-sm tracking-widest uppercase mb-3"
                style={{ color: "var(--primary)" }}>Customer Love</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--deep)" }}>
            What Our Customers{" "}
            <span className="gradient-text">Are Saying</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card reveal glass rounded-2xl p-6"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_,j) => (
                  <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "rgba(10,37,64,0.68)" }}>
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="avatar-ring w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--deep)" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "rgba(10,37,64,0.45)" }}>{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
