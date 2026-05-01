"use client";
import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/lib/useReveal";

const stats = [
  { label: "Happy Customers",   value: 5000,  suffix: "+", icon: "😊" },
  { label: "Loads Completed",   value: 98000, suffix: "+", icon: "🧺" },
  { label: "5-Star Reviews",    value: 320,   suffix: "+", icon: "⭐" },
  { label: "Years in Business", value: 12,    suffix: "",  icon: "🏆" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          let start = 0;
          const duration = 2200;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (elRef.current) observer.observe(elRef.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={elRef}>
      <span>{count.toLocaleString()}</span>
      <span>{suffix}</span>
    </div>
  );
}

export default function Stats() {
  const { ref } = useReveal();

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Subtle bubble hints */}
      {[
        { size: 30, left: "5%",  dur: "14s", del: "0s",   drift: "20px" },
        { size: 18, left: "28%", dur: "10s", del: "2s",   drift: "-16px" },
        { size: 25, left: "65%", dur: "12s", del: "1s",   drift: "22px" },
        { size: 14, left: "88%", dur: "8s",  del: "3s",   drift: "-12px" },
      ].map((b, i) => (
        <div key={i} className="bubble bubble-foam"
          style={{ width: b.size, height: b.size, left: b.left, bottom: "-40px", opacity: 0.5,
            "--dur": b.dur, "--del": b.del, "--drift": b.drift } as React.CSSProperties} />
      ))}

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="stat-card reveal text-center glass rounded-2xl p-6"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl mb-3" style={{ animation: `float ${4 + i}s ease-in-out ${i * 0.4}s infinite` }}>
                {s.icon}
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold gradient-text stat-glow mb-2">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <p className="font-medium text-sm uppercase tracking-wider" style={{ color: "rgba(10,37,64,0.52)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
