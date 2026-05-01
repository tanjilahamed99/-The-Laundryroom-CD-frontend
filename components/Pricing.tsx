"use client";
import {
  Check,
  Sparkles,
  Star,
  TrendingUp,
  Clock,
  Shield,
  Truck,
  Award,
  ArrowRight,
} from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { useEffect, useRef, useState } from "react";

const plans = [
  {
    name: "Self-Service",
    price: "$2.50",
    unit: "per wash cycle",
    highlight: false,
    features: [
      "State-of-the-art washers",
      "High-speed dryers",
      "Card & coin payment",
      "Free WiFi",
      "Comfortable waiting area",
      "Detergent vending",
    ],
    icon: Clock,
    badge: "Flexible",
    badgeColor: "primary",
  },
  {
    name: "Wash & Fold",
    price: "$1.25",
    unit: "per pound",
    highlight: true,
    features: [
      "Drop off anytime",
      "Same-day or next-day",
      "Professional folding",
      "Eco-friendly detergents",
      "Sorted by type & color",
      "Packaged & ready",
    ],
    icon: Star,
    badge: "Most Popular",
    badgeColor: "gold",
  },
  {
    name: "Business Plan",
    price: "Custom",
    unit: "weekly billing",
    highlight: false,
    features: [
      "Volume discounts",
      "Dedicated pickup crew",
      "Priority turnaround",
      "Monthly invoicing",
      "Account manager",
      "SLA guarantee",
    ],
    icon: Award,
    badge: "Enterprise",
    badgeColor: "premium",
  },
];

const bubbles = [
  { size: 32, left: "3%", dur: "13s", del: "0s", drift: "24px" },
  { size: 20, left: "50%", dur: "9s", del: "2.5s", drift: "-18px" },
  { size: 42, left: "92%", dur: "12s", del: "1s", drift: "30px" },
];

export default function Pricing() {
  const { ref } = useReveal();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [animatedCards, setAnimatedCards] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(
            () =>
              setAnimatedCards((prev) => {
                const newState = [...prev];
                newState[0] = true;
                return newState;
              }),
            100,
          );
          setTimeout(
            () =>
              setAnimatedCards((prev) => {
                const newState = [...prev];
                newState[1] = true;
                return newState;
              }),
            300,
          );
          setTimeout(
            () =>
              setAnimatedCards((prev) => {
                const newState = [...prev];
                newState[2] = true;
                return newState;
              }),
            500,
          );
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getCardStyle = (index: number) => {
    if (!animatedCards[index]) {
      if (index === 0) {
        return { transform: "translateX(-100px)", opacity: 0 };
      } else if (index === 2) {
        return { transform: "translateX(100px)", opacity: 0 };
      } else {
        return { transform: "translateY(100px)", opacity: 0 };
      }
    }
    return { transform: "translate(0, 0)", opacity: 1 };
  };

  return (
    <section
      id="pricing"
      ref={(node) => {
        if (typeof ref === "function")
          (ref as (node: HTMLElement | null) => void)(node);
        else if (ref && "current" in ref)
          (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        sectionRef.current = node;
      }}
      className="py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fafaf8 0%, #f0f9ff 100%)",
      }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {bubbles.map((b, i) => (
        <div
          key={i}
          className="bubble bubble-foam"
          style={
            {
              width: b.size,
              height: b.size,
              left: b.left,
              bottom: "-50px",
              opacity: 0.4,
              "--dur": b.dur,
              "--del": b.del,
              "--drift": b.drift,
            } as React.CSSProperties
          }
        />
      ))}

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        {/* Modern Header Design */}
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles size={16} className="text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Pricing Plans
            </span>
          </div>
          <h2
            className="font-display text-5xl md:text-6xl font-bold mb-6"
            style={{ color: "var(--deep)" }}>
            Choose Your{" "}
            <span className="relative inline-block">
              <span className="gradient-text relative z-10">Perfect Plan</span>
              <svg
                className="absolute bottom-2 left-0 w-full h-3 -z-0"
                viewBox="0 0 200 10"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 5 Q 50 10, 100 5 Q 150 0, 200 5"
                  stroke="#0ea5e9"
                  fill="none"
                  strokeWidth="2"
                  opacity="0.3"
                />
              </svg>
            </span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(10,37,64,0.6)" }}>
            Transparent pricing with no hidden fees. Select the perfect option
            for your lifestyle.
          </p>
        </div>

        {/* Premium Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative transition-all duration-700 ${animatedCards[i] ? "opacity-100" : "opacity-0"}`}
              style={getCardStyle(i)}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}>
              {/* Premium Card Design */}
              <div
                className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${
                  hoveredCard === i
                    ? "transform -translate-y-3 shadow-2xl"
                    : "shadow-xl"
                }`}
                style={{
                  background: plan.highlight
                    ? "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)"
                    : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  border: plan.highlight
                    ? "none"
                    : "1px solid rgba(14,165,233,0.15)",
                }}>
                {/* Animated Gradient Border on Hover */}
                {!plan.highlight && hoveredCard === i && (
                  <div
                    className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-primary via-secondary to-primary opacity-0 animate-pulse"
                    style={{
                      animation: "borderGlow 2s ease-in-out infinite",
                    }}></div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full pointer-events-none"></div>
                {plan.highlight && (
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                )}

                <div className="p-8 relative z-10">
                  {/* Premium Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        hoveredCard === i ? "scale-110 rotate-6" : ""
                      }`}
                      style={{
                        background: plan.highlight
                          ? "rgba(255,255,255,0.2)"
                          : "linear-gradient(135deg, var(--primary-ghost), var(--primary-pale))",
                      }}>
                      <plan.icon
                        size={24}
                        style={{
                          color: plan.highlight ? "white" : "var(--primary)",
                        }}
                      />
                    </div>

                    <div
                      className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm transition-all duration-300 ${
                        hoveredCard === i ? "scale-105" : ""
                      } ${
                        plan.badgeColor === "gold"
                          ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg"
                          : plan.badgeColor === "premium"
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                            : "bg-primary/20 text-primary"
                      }`}>
                      {plan.badge}
                    </div>
                  </div>

                  {/* Plan Name with professional hover effect */}
                  <h3 className="font-display text-2xl font-bold mb-2 relative inline-block">
                    <span
                      className="relative z-10 transition-all duration-300"
                      style={{
                        color: plan.highlight ? "white" : "var(--deep)",
                        backgroundImage:
                          hoveredCard === i
                            ? "linear-gradient(135deg, var(--primary), var(--primary-dark))"
                            : "none",
                        WebkitBackgroundClip:
                          hoveredCard === i ? "text" : "none",
                        WebkitTextFillColor:
                          hoveredCard === i ? "transparent" : "inherit",
                        backgroundClip: hoveredCard === i ? "text" : "none",
                      }}>
                      {plan.name}
                    </span>
                    {/* Animated underline for text */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500 ${
                        hoveredCard === i ? "w-full" : "w-0"
                      }`}
                      style={{
                        background: plan.highlight ? "white" : "var(--primary)",
                        opacity: hoveredCard === i ? 1 : 0,
                      }}></span>
                  </h3>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`font-display text-5xl font-bold transition-all duration-300 relative group`}
                        style={{
                          color: plan.highlight ? "white" : "var(--deep)",
                        }}>
                        <span
                          className={`inline-block transition-all duration-300 ${
                            hoveredCard === i ? "scale-105" : ""
                          }`}>
                          {plan.price}
                        </span>
                        {/* Price shimmer effect on hover */}
                        {hoveredCard === i && (
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer"></span>
                        )}
                      </span>
                      {plan.price !== "Custom" && (
                        <span
                          className="text-sm transition-all duration-300"
                          style={{
                            color: plan.highlight
                              ? "rgba(255,255,255,0.7)"
                              : "rgba(10,37,64,0.5)",
                            transform:
                              hoveredCard === i ? "translateX(2px)" : "none",
                          }}>
                          {plan.unit}
                        </span>
                      )}
                    </div>

                    {/* Animated Underline for Price */}
                    <div
                      className={`h-0.5 mt-2 transition-all duration-500 ${
                        hoveredCard === i ? "w-12" : "w-0"
                      }`}
                      style={{
                        background: plan.highlight ? "white" : "var(--primary)",
                      }}></div>
                  </div>

                  {/* Features List with text hover effects */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((f, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-3 text-sm group/feature">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                            hoveredCard === i ? "scale-110" : ""
                          }`}
                          style={{
                            background: plan.highlight
                              ? "rgba(255,255,255,0.2)"
                              : "var(--primary-ghost)",
                          }}>
                          <Check
                            size={12}
                            style={{
                              color: plan.highlight
                                ? "white"
                                : "var(--primary)",
                            }}
                          />
                        </div>
                        <span
                          className={`transition-all duration-300 ${
                            hoveredCard === i ? "translate-x-1" : ""
                          }`}
                          style={{
                            color: plan.highlight
                              ? "rgba(255,255,255,0.85)"
                              : "rgba(10,37,64,0.7)",
                            textDecoration: hoveredCard === i ? "none" : "none",
                            position: "relative",
                          }}>
                          {f}
                          {/* Subtle text highlight on hover */}
                          {hoveredCard === i && !plan.highlight && (
                            <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 -z-10 animate-pulse"></span>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Premium CTA Button with text hover effect */}
                  <button
                    className={`relative w-full py-4 rounded-2xl font-bold text-sm transition-all duration-500 overflow-hidden group/btn ${
                      plan.highlight
                        ? "bg-white text-primary-dark hover:shadow-2xl"
                        : "bg-gradient-to-r from-primary to-primary-dark text-white"
                    }`}
                    style={{
                      transform: hoveredCard === i ? "scale-105" : "scale-100",
                      boxShadow:
                        plan.highlight && hoveredCard === i
                          ? "0 20px 40px rgba(0,0,0,0.15)"
                          : "none",
                    }}>
                    <span className="relative z-10 flex items-center justify-center gap-2 transition-all duration-300">
                      {plan.highlight
                        ? "Get Started Now"
                        : plan.name === "Business Plan"
                          ? "Contact Sales"
                          : "Choose Plan"}
                      <ArrowRight
                        size={16}
                        className={`transition-all duration-300 ${
                          hoveredCard === i ? "translate-x-1" : ""
                        }`}
                      />
                    </span>

                    {/* Button Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  </button>

                  {/* Extra Perk for Highlight Card */}
                  {plan.highlight && (
                    <div className="mt-4 text-center">
                      <div
                        className="inline-flex items-center gap-1 text-xs transition-all duration-300"
                        style={{
                          color: "rgba(255,255,255,0.7)",
                          transform:
                            hoveredCard === i ? "translateY(-1px)" : "none",
                        }}>
                        <Shield size={12} />
                        <span>30-day satisfaction guarantee</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl transition-opacity duration-500 pointer-events-none ${
                    hoveredCard === i ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background: plan.highlight
                      ? "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.15), transparent)"
                      : "radial-gradient(circle at 50% 0%, rgba(14,165,233,0.1), transparent)",
                  }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Section */}
        <div className="mt-20 pt-10 border-t border-primary/10">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { icon: Truck, text: "Free pickup over $30" },
              { icon: Shield, text: "100% satisfaction guaranteed" },
              { icon: Clock, text: "24/7 customer support" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-2 text-sm transition-all duration-300 hover:scale-105 cursor-default"
                style={{ color: "rgba(10,37,64,0.6)" }}>
                <item.icon
                  size={18}
                  className="text-primary transition-all duration-300 group-hover:rotate-12"
                />
                <span className="transition-all duration-300 group-hover:text-primary">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes borderGlow {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
