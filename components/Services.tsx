"use client";
import { useReveal } from "@/lib/useReveal";
import { Shirt, Wind, Truck, Building2, Clock, Droplets } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Self-Service Wash",
    desc: "State-of-the-art machines. High-capacity, energy-efficient washers and dryers available all day.",
    price: "From $2.50",
    tag: "Most Popular",
  },
  {
    icon: Shirt,
    title: "Wash & Fold",
    desc: "Drop off your laundry and pick it up perfectly folded. Fresh, clean, and ready in 24 hours.",
    price: "From $1.25/lb",
    tag: "Fan Favorite",
  },
  {
    icon: Wind,
    title: "Dry Cleaning",
    desc: "Professional dry cleaning for your delicate garments, suits, dresses, and specialty items.",
    price: "From $7.99",
    tag: "Premium",
  },
  {
    icon: Truck,
    title: "Pickup & Delivery",
    desc: "Schedule a free pickup and we'll deliver your clean laundry right back to your door.",
    price: "Free pickup",
    tag: "Convenient",
  },
  {
    icon: Building2,
    title: "Commercial Laundry",
    desc: "Bulk laundry solutions for hotels, spas, gyms, and restaurants. Reliable weekly service.",
    price: "Custom Quote",
    tag: "Business",
  },
  {
    icon: Clock,
    title: "Express Service",
    desc: "Need it fast? Our express service gets your laundry cleaned and ready within 3–4 hours.",
    price: "From $2.50/lb",
    tag: "Fast",
  },
];

const sectionBubbles = [
  {
    size: 36,
    left: "2%",
    dur: "12s",
    del: "0s",
    drift: "25px",
    cls: "bubble-foam",
  },
  {
    size: 20,
    left: "18%",
    dur: "9s",
    del: "2s",
    drift: "-18px",
    cls: "bubble-micro",
  },
  {
    size: 50,
    left: "35%",
    dur: "14s",
    del: "1s",
    drift: "38px",
    cls: "bubble-soap bubble-drift",
  },
  {
    size: 15,
    left: "55%",
    dur: "8s",
    del: "3.5s",
    drift: "-14px",
    cls: "bubble-micro",
  },
  {
    size: 44,
    left: "72%",
    dur: "11s",
    del: "0.5s",
    drift: "32px",
    cls: "bubble-foam bubble-drift",
  },
  {
    size: 24,
    left: "88%",
    dur: "10s",
    del: "2.5s",
    drift: "-22px",
    cls: "bubble-soap",
  },
  {
    size: 12,
    left: "95%",
    dur: "7s",
    del: "4s",
    drift: "12px",
    cls: "bubble-micro",
  },
];

export default function Services() {
  const { ref } = useReveal();

  return (
    <section
      id="services"
      className="py-24 foam-bg relative overflow-hidden"
      ref={ref}>
      {/* Bubble field */}
      <div className="bubble-field">
        {sectionBubbles.map((b, i) => (
          <div
            key={i}
            className={`bubble ${b.cls}`}
            style={
              {
                width: b.size,
                height: b.size,
                left: b.left,
                bottom: "-60px",
                "--dur": b.dur,
                "--del": b.del,
                "--drift": b.drift,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span
            className="inline-block font-semibold text-sm tracking-widest uppercase mb-3"
            style={{ color: "var(--primary)" }}>
            What We Offer
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--deep)" }}>
            Services Built For Your{" "}
            <span className="gradient-text">Lifestyle</span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "rgba(10,37,64,0.58)" }}>
            From quick coin washes to full-service pickup, we handle every
            laundry need with care and speed.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card reveal glass rounded-2xl p-7 cursor-pointer relative"
              style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="animated-border" />

              {/* Wrap content so it sits above the border */}
              <div className="relative z-10">
                <span
                  className="service-tag inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 transition-all duration-300"
                  style={{
                    background: "var(--primary-ghost)",
                    color: "var(--primary)",
                  }}>
                  {s.tag}
                </span>

                <div
                  className="service-icon w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                  style={{ background: "var(--primary-ghost)" }}>
                  <s.icon size={22} style={{ color: "var(--primary)" }} />
                </div>

                <h3
                  className="font-display text-xl font-bold mb-2 transition-colors duration-300"
                  style={{ color: "var(--deep)" }}>
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4 transition-colors duration-300"
                  style={{ color: "rgba(10,37,64,0.58)" }}>
                  {s.desc}
                </p>
                <p
                  className="service-price font-bold text-sm transition-colors duration-300"
                  style={{ color: "var(--primary)" }}>
                  {s.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
