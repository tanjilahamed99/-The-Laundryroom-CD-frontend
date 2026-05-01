"use client";
import { useEffect, useRef } from "react";
import { Phone, ArrowRight, Star, MapPin } from "lucide-react";

const bubbles = [
  {
    size: 52,
    left: "4%",
    dur: "11s",
    del: "0s",
    drift: "30px",
    cls: "bubble-soap bubble-drift",
  },
  {
    size: 22,
    left: "12%",
    dur: "7.5s",
    del: "1.2s",
    drift: "-22px",
    cls: "bubble-micro",
  },
  {
    size: 68,
    left: "22%",
    dur: "13s",
    del: "2.8s",
    drift: "42px",
    cls: "bubble-soap bubble-drift",
  },
  {
    size: 18,
    left: "33%",
    dur: "8.5s",
    del: "0.4s",
    drift: "-28px",
    cls: "bubble-micro",
  },
  {
    size: 40,
    left: "45%",
    dur: "10s",
    del: "3.5s",
    drift: "24px",
    cls: "bubble-foam",
  },
  {
    size: 14,
    left: "53%",
    dur: "6.5s",
    del: "1.8s",
    drift: "-16px",
    cls: "bubble-micro",
  },
  {
    size: 58,
    left: "62%",
    dur: "12s",
    del: "0.8s",
    drift: "36px",
    cls: "bubble-soap bubble-drift",
  },
  {
    size: 28,
    left: "72%",
    dur: "9s",
    del: "4.2s",
    drift: "-20px",
    cls: "bubble-foam",
  },
  {
    size: 46,
    left: "82%",
    dur: "11s",
    del: "2s",
    drift: "28px",
    cls: "bubble-soap",
  },
  {
    size: 16,
    left: "90%",
    dur: "7s",
    del: "3s",
    drift: "-12px",
    cls: "bubble-micro",
  },
  {
    size: 35,
    left: "95%",
    dur: "9.5s",
    del: "1.5s",
    drift: "20px",
    cls: "bubble-foam",
  },
  {
    size: 10,
    left: "38%",
    dur: "6s",
    del: "5s",
    drift: "-8px",
    cls: "bubble-micro",
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height } = el.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 18;
      const y = (clientY / height - 0.5) * 9;
      el.style.setProperty("--rx", `${y}deg`);
      el.style.setProperty("--ry", `${x}deg`);
    };
    el.addEventListener("mousemove", onMouseMove);
    return () => el.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-bg relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Bubble field */}
      <div className="bubble-field">
        {bubbles.map((b, i) => (
          <div
            key={i}
            className={`bubble ${b.cls}`}
            style={
              {
                width: b.size,
                height: b.size,
                left: b.left,
                bottom: "-80px",
                "--dur": b.dur,
                "--del": b.del,
                "--drift": b.drift,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Decorative orbs */}
      <div
        className="absolute top-32 right-10 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--primary-ghost)" }}
      />
      <div
        className="absolute bottom-24 left-8 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--secondary-ghost)" }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full grid lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
        {/* Left */}
        <div>
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-white/85 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6 shadow-sm"
            style={{
              border: "1px solid var(--primary-ghost)",
              color: "var(--primary-dark)",
              animation: "float 5s ease-in-out infinite",
            }}>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Now Open · 7 Days a Week
          </div>

          <h1
            className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6"
            style={{ color: "var(--deep)" }}>
            Fresh &amp; Clean <span className="gradient-text">Every Time,</span>
            <br />
            Guaranteed.
          </h1>

          <p
            className="text-lg leading-relaxed mb-8 max-w-lg"
            style={{ color: "rgba(10,37,64,0.62)" }}>
            Oklahoma City&apos;s most loved laundromat. Self-service, wash &amp;
            fold, and pickup delivery — all in one place on Britton Rd.
          </p>

          <div
            className="flex items-center gap-2 text-sm mb-8"
            style={{ color: "rgba(10,37,64,0.52)" }}>
            <MapPin size={14} style={{ color: "var(--primary)" }} />
            815 W Britton Rd, Oklahoma City, OK 73114
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="tel:+14057488990"
              className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-base flex items-center justify-center gap-2 shadow-xl">
              <span>
                <Phone size={16} className="inline mr-1" />
                Call Now
              </span>
            </a>
            <a
              href="#services"
              className="btn-secondary flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base">
              <span>Our Services</span>
              <ArrowRight
                size={16}
                style={{ position: "relative", zIndex: 1 }}
              />
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  size={15}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
              <span
                className="text-sm ml-1"
                style={{ color: "rgba(10,37,64,0.62)" }}>
                4.9 (320+ reviews)
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex -space-x-2 items-center">
                {["#0ea5e9", "#6366f1", "#6366f1", "#14b8a6", "#06b6d4"].map(
                  (c, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-white"
                      style={{ background: c }}
                    />
                  ),
                )}
              </div>
              <span
                className="ml-3 text-sm"
                style={{ color: "rgba(10,37,64,0.52)" }}>
                500+ happy customers
              </span>
            </div>
          </div>
        </div>

        {/* Right — washing machine */}
        <div className="relative flex items-center justify-center">
          <div
            className="absolute w-72 h-72 rounded-full blur-3xl pointer-events-none"
            style={{ background: "rgba(14,165,233,0.18)" }}
          />

          <div
            className="relative glass rounded-3xl p-8 shadow-2xl w-72 hover-wash"
            style={{ animation: "float 7s ease-in-out infinite" }}>
            {/* Screen */}
            <div
              className="relative w-full aspect-square rounded-2xl flex items-center justify-center mb-4 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, var(--deep), var(--primary-deeper))",
              }}>
              {/* Drum outer */}
              <div
                className="w-44 h-44 border-8 rounded-full relative"
                style={{ borderColor: "rgba(14,165,233,0.30)" }}>
                <div
                  className="drum-spin absolute inset-2 border-4 border-dashed rounded-full"
                  style={{ borderColor: "rgba(14,165,233,0.45)" }}
                />
                <div
                  className="absolute inset-4 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(14,165,233,0.10)" }}>
                  <div className="text-5xl water-wave">💧</div>
                </div>
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <div
                    key={deg}
                    className="absolute w-4 h-4 rounded-full"
                    style={{
                      background: "rgba(14,165,233,0.25)",
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${deg}deg) translateY(-60px) translate(-50%,-50%)`,
                    }}
                  />
                ))}
              </div>
              {/* Mini bubbles inside screen */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: "rgba(14,165,233,0.45)",
                    left: `${20 + i * 12}%`,
                    bottom: "15%",
                    animation: `float ${2 + i * 0.3}s ease-in-out ${i * 0.2}s infinite`,
                  }}
                />
              ))}
            </div>

            {/* Controls */}
            <div className="flex justify-between items-center">
              <div>
                <p
                  className="text-xs font-medium"
                  style={{ color: "rgba(10,37,64,0.42)" }}>
                  Status
                </p>
                <p
                  className="text-sm font-bold flex items-center gap-1"
                  style={{ color: "var(--primary)" }}>
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Washing…
                </p>
              </div>
              <div className="text-right">
                <p
                  className="text-xs font-medium"
                  style={{ color: "rgba(10,37,64,0.42)" }}>
                  Remaining
                </p>
                <p
                  className="text-sm font-bold"
                  style={{ color: "var(--deep)" }}>
                  18 min
                </p>
              </div>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: "var(--primary-ghost)" }}>
                <div
                  className="w-6 h-6 border-2 border-t-transparent rounded-full drum-spin"
                  style={{ borderColor: "var(--primary)" }}
                />
              </div>
            </div>
          </div>

          {/* Floating stat chips */}
          <div
            className="absolute md:-top-4 md:-right-4 -top-8 -right-1 glass rounded-2xl px-4 py-2.5 shadow-lg hover-lift"
            style={{ animation: "float 5s ease-in-out 1s infinite" }}>
            <p className="text-xs" style={{ color: "rgba(10,37,64,0.52)" }}>
              Today&apos;s Loads
            </p>
            <p className="md:text-xl test-sm font-bold gradient-text">247</p>
          </div>
          <div
            className="absolute md:-bottom-4 mdd:-left-4 -bottom-10 -left-1 glass rounded-2xl px-4 py-2.5 shadow-lg hover-lift"
            style={{ animation: "float 6s ease-in-out 2s infinite" }}>
            <p className="text-xs" style={{ color: "rgba(10,37,64,0.52)" }}>
              Machines Free
            </p>
            <p className="md:text-xl font-bold gradient-text">12 / 18</p>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="wave-container absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 40 C360 0 720 80 1080 40 C1260 20 1380 50 1440 40 L1440 60 L0 60 Z"
            fill="#fafaf8"
          />
        </svg>
      </div>
    </section>
  );
}
