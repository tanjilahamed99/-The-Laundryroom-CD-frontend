"use client";
import { useEffect, useRef, useState } from "react";
import {
  Truck,
  MapPin,
  Clock,
  Package,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  Star,
  Shield,
  Zap,
  RefreshCw,
  ChevronDown,
  Sparkles,
  Heart,
  Loader2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ───────────────────────────────────────────────
   TYPES
─────────────────────────────────────────────── */
interface StepItem {
  number: string;
  icon: React.ElementType;
  title: string;
  desc: string;
  color: string;
}

interface PerksItem {
  icon: React.ElementType;
  title: string;
  desc: string;
}

interface FAQItem {
  q: string;
  a: string;
}

interface BubbleCfg {
  size: number;
  left: string;
  dur: string;
  del: string;
  drift: string;
  cls: string;
}

interface RevealDivProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

/* ───────────────────────────────────────────────
   DATA
─────────────────────────────────────────────── */
const STEPS: StepItem[] = [
  {
    number: "01",
    icon: Calendar,
    title: "Schedule Pickup",
    desc: "Book online or call us. Choose a time window that fits your day — morning, afternoon, or evening.",
    color: "primary",
  },
  {
    number: "02",
    icon: Package,
    title: "We Collect",
    desc: "Our driver arrives at your door, bags up your laundry, and hands you a receipt with item count.",
    color: "secondary",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Expert Cleaning",
    desc: "Your clothes are washed, dried, and folded by our team using premium eco-friendly detergents.",
    color: "primary",
  },
  {
    number: "04",
    icon: Truck,
    title: "Delivered Fresh",
    desc: "Clean, folded laundry is returned to your door within 24–48 hours, neatly packaged.",
    color: "secondary",
  },
];

const PERKS: PerksItem[] = [
  {
    icon: Zap,
    title: "Same-Day Available",
    desc: "Order before 10 AM for same-day service in select zones.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    desc: "Every garment is covered. We handle your clothes like our own.",
  },
  {
    icon: RefreshCw,
    title: "Free Re-wash Guarantee",
    desc: "Not happy? We re-wash for free. No questions asked.",
  },
  {
    icon: Heart,
    title: "Eco-Friendly Products",
    desc: "Biodegradable detergents, cold-water cycles, energy-efficient machines.",
  },
  {
    icon: Star,
    title: "4.9★ Rated Service",
    desc: "Hundreds of happy customers across Long Beach trust us weekly.",
  },
  {
    icon: Clock,
    title: "Real-Time Tracking",
    desc: "Get SMS updates at every step — pickup, cleaning, and delivery.",
  },
];

const FAQS: FAQItem[] = [
  {
    q: "How much does pickup & delivery cost?",
    a: "Pickup is always free on orders over $30. Delivery is included. Pricing starts at $1.25/lb for wash & fold.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Long Beach and surrounding areas including Lakewood, Compton, and Carson. Enter your zip at checkout to confirm coverage.",
  },
  {
    q: "How do I prepare my laundry for pickup?",
    a: "Just bag it up — any bag works. Our driver will sort and tag everything. No special prep needed.",
  },
  {
    q: "What's the turnaround time?",
    a: "Standard is 24–48 hours. Same-day is available for pickups before 10 AM in select zones.",
  },
  {
    q: "Can I leave special instructions?",
    a: "Yes! Add notes for each item — delicate cycle, hang dry, no fabric softener. We follow every instruction.",
  },
  {
    q: "What if something is damaged or lost?",
    a: "We're fully insured. If anything happens, we'll replace or reimburse the item. Your trust is our priority.",
  },
];

const BUBBLES: BubbleCfg[] = [
  {
    size: 56,
    left: "3%",
    dur: "15s",
    del: "0s",
    drift: "32px",
    cls: "bubble-soap bubble-drift",
  },
  {
    size: 24,
    left: "14%",
    dur: "9s",
    del: "2s",
    drift: "-20px",
    cls: "bubble-micro",
  },
  {
    size: 40,
    left: "28%",
    dur: "13s",
    del: "1s",
    drift: "28px",
    cls: "bubble-foam",
  },
  {
    size: 18,
    left: "48%",
    dur: "8s",
    del: "3.5s",
    drift: "-16px",
    cls: "bubble-micro",
  },
  {
    size: 50,
    left: "65%",
    dur: "14s",
    del: "0.5s",
    drift: "36px",
    cls: "bubble-soap",
  },
  {
    size: 30,
    left: "80%",
    dur: "11s",
    del: "2.5s",
    drift: "-26px",
    cls: "bubble-foam bubble-drift",
  },
  {
    size: 16,
    left: "94%",
    dur: "7s",
    del: "4s",
    drift: "14px",
    cls: "bubble-micro",
  },
];

/* ───────────────────────────────────────────────
   HOOKS & HELPERS
─────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function RevealDiv({
  children,
  className = "",
  delay = 0,
  style = {},
}: RevealDivProps) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

/* ───────────────────────────────────────────────
   ANIMATED TRUCK SVG
─────────────────────────────────────────────── */
function AnimatedTruck() {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ height: 320 }}>
      {/* Road */}
      <div
        className="absolute bottom-8 left-0 right-0 h-1 rounded-full overflow-hidden"
        style={{ background: "rgba(14,165,233,0.15)" }}>
        <div
          style={{
            height: "100%",
            background:
              "linear-gradient(90deg, transparent, var(--primary), transparent)",
            animation: "roadScroll 2s linear infinite",
          }}
        />
      </div>

      {/* Glow circle */}
      <div
        className="absolute rounded-full"
        style={{
          width: 260,
          height: 260,
          background:
            "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)",
          animation: "pulse 3s ease-in-out infinite",
        }}
      />

      {/* Truck body */}
      <div
        style={{
          animation: "truckBounce 1.2s ease-in-out infinite",
          position: "relative",
          zIndex: 10,
        }}>
        <svg width="220" height="140" viewBox="0 0 220 140" fill="none">
          {/* Cargo box */}
          <rect
            x="10"
            y="30"
            width="130"
            height="80"
            rx="8"
            fill="url(#cargoGrad)"
          />
          {/* Cargo door lines */}
          <line
            x1="75"
            y1="30"
            x2="75"
            y2="110"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1.5"
          />
          <line
            x1="10"
            y1="70"
            x2="140"
            y2="70"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
          />
          {/* Laundry label */}
          <rect
            x="25"
            y="50"
            width="90"
            height="30"
            rx="4"
            fill="rgba(255,255,255,0.15)"
          />
          <text
            x="70"
            y="70"
            textAnchor="middle"
            fill="white"
            fontSize="9"
            fontFamily="DM Sans, sans-serif"
            fontWeight="600">
            🧺 LAUNDRYROOM CD
          </text>
          {/* Cab */}
          <rect
            x="140"
            y="50"
            width="70"
            height="60"
            rx="8"
            fill="url(#cabGrad)"
          />
          {/* Windshield */}
          <rect
            x="148"
            y="57"
            width="50"
            height="32"
            rx="5"
            fill="rgba(186,230,253,0.6)"
          />
          {/* Windshield glare */}
          <line
            x1="152"
            y1="60"
            x2="162"
            y2="85"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Headlight */}
          <circle cx="207" cy="98" r="5" fill="#fef08a" />
          <circle cx="207" cy="98" r="8" fill="rgba(254,240,138,0.3)" />
          {/* Wheels */}
          <circle cx="45" cy="115" r="18" fill="#0a2540" />
          <circle cx="45" cy="115" r="11" fill="#1e3a5f" />
          <circle
            cx="45"
            cy="115"
            r="5"
            fill="var(--primary)"
            style={{ animation: "spin 1s linear infinite" }}
          />
          <circle cx="170" cy="115" r="18" fill="#0a2540" />
          <circle cx="170" cy="115" r="11" fill="#1e3a5f" />
          <circle
            cx="170"
            cy="115"
            r="5"
            fill="var(--primary)"
            style={{ animation: "spin 1s linear infinite" }}
          />
          {/* Exhaust puffs */}
          <circle
            cx="8"
            cy="45"
            r="5"
            fill="rgba(14,165,233,0.25)"
            style={{ animation: "puff1 1.8s ease-out infinite" }}
          />
          <circle
            cx="0"
            cy="35"
            r="7"
            fill="rgba(14,165,233,0.15)"
            style={{ animation: "puff2 1.8s ease-out infinite .3s" }}
          />
          {/* Defs */}
          <defs>
            <linearGradient id="cargoGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
            <linearGradient id="cabGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0c4a6e" />
              <stop offset="100%" stopColor="#0a2540" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Speed lines */}
      {[20, 40, 60].map((top, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top,
            left: "5%",
            width: `${30 + i * 15}px`,
            height: 2,
            background:
              "linear-gradient(90deg, transparent, rgba(14,165,233,0.4), transparent)",
            borderRadius: 2,
            animation: `speedLine 1.2s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}

      <style>{`
        @keyframes truckBounce {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-6px) rotate(.4deg); }
          75% { transform: translateY(-3px) rotate(-.3deg); }
        }
        @keyframes roadScroll {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes puff1 {
          0% { transform: translate(0,0) scale(1); opacity:.4; }
          100% { transform: translate(-20px,-18px) scale(2.5); opacity:0; }
        }
        @keyframes puff2 {
          0% { transform: translate(0,0) scale(1); opacity:.3; }
          100% { transform: translate(-28px,-22px) scale(3); opacity:0; }
        }
        @keyframes speedLine {
          0% { transform: translateX(0); opacity:0; }
          50% { opacity:1; }
          100% { transform: translateX(-60px); opacity:0; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

/* ───────────────────────────────────────────────
   STEP CARD
─────────────────────────────────────────────── */
function StepCard({ step, index }: { step: StepItem; index: number }) {
  const Icon = step.icon;
  const isPrimary = step.color === "primary";
  const [hovered, setHovered] = useState(false);

  return (
    <RevealDiv delay={index * 120}>
      <div
        className="relative rounded-3xl p-7 cursor-default transition-all duration-500"
        style={{
          background: hovered
            ? isPrimary
              ? "linear-gradient(135deg, var(--primary), var(--primary-dark))"
              : "linear-gradient(135deg, var(--secondary), var(--secondary-dark))"
            : "rgba(255,255,255,0.75)",
          backdropFilter: "blur(20px)",
          border: `1.5px solid ${hovered ? "transparent" : "rgba(255,255,255,0.55)"}`,
          boxShadow: hovered
            ? isPrimary
              ? "0 24px 60px rgba(14,165,233,0.35)"
              : "0 24px 60px rgba(99,102,241,0.35)"
            : "0 4px 24px rgba(14,165,233,0.08)",
          transform: hovered
            ? "translateY(-10px) scale(1.02)"
            : "translateY(0) scale(1)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        {/* Step number — big background */}
        <span
          className="absolute top-4 right-5 font-display font-bold select-none transition-all duration-500"
          style={{
            fontSize: 64,
            lineHeight: 1,
            color: hovered
              ? "rgba(255,255,255,0.12)"
              : isPrimary
                ? "rgba(14,165,233,0.08)"
                : "rgba(99,102,241,0.08)",
          }}>
          {step.number}
        </span>

        {/* Connector dot */}
        <div
          className="absolute -right-3 top-1/2 w-6 h-6 rounded-full border-4 border-white hidden lg:flex items-center justify-center"
          style={{
            background: isPrimary ? "var(--primary)" : "var(--secondary)",
            transform: "translateY(-50%)",
            boxShadow: isPrimary
              ? "0 0 0 4px rgba(14,165,233,0.2)"
              : "0 0 0 4px rgba(99,102,241,0.2)",
            zIndex: 10,
          }}
        />

        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500"
          style={{
            background: hovered
              ? "rgba(255,255,255,0.18)"
              : isPrimary
                ? "var(--primary-ghost)"
                : "var(--secondary-ghost)",
            transform: hovered
              ? "rotate(-8deg) scale(1.15)"
              : "rotate(0) scale(1)",
          }}>
          <Icon
            size={24}
            style={{
              color: hovered
                ? "white"
                : isPrimary
                  ? "var(--primary)"
                  : "var(--secondary)",
            }}
          />
        </div>

        <h3
          className="font-display text-xl font-bold mb-2 transition-colors duration-300"
          style={{ color: hovered ? "white" : "var(--deep)" }}>
          {step.title}
        </h3>
        <p
          className="text-sm leading-relaxed transition-colors duration-300"
          style={{
            color: hovered ? "rgba(255,255,255,0.78)" : "rgba(10,37,64,0.58)",
          }}>
          {step.desc}
        </p>
      </div>
    </RevealDiv>
  );
}

/* ───────────────────────────────────────────────
   PERK CARD
─────────────────────────────────────────────── */
function PerkCard({ perk, index }: { perk: PerksItem; index: number }) {
  const Icon = perk.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <RevealDiv delay={index * 80}>
      <div
        className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-400 cursor-default"
        style={{
          background: hovered
            ? "var(--primary-ghost)"
            : "rgba(255,255,255,0.6)",
          border: `1.5px solid ${hovered ? "rgba(14,165,233,0.35)" : "rgba(255,255,255,0.55)"}`,
          backdropFilter: "blur(16px)",
          transform: hovered ? "translateX(6px)" : "translateX(0)",
          boxShadow: hovered ? "0 8px 30px rgba(14,165,233,0.12)" : "none",
          transition: "all 0.35s var(--ease-bounce)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-400"
          style={{
            background: hovered ? "var(--primary)" : "var(--primary-ghost)",
            transform: hovered ? "rotate(10deg) scale(1.12)" : "none",
          }}>
          <Icon
            size={19}
            style={{ color: hovered ? "white" : "var(--primary)" }}
          />
        </div>
        <div>
          <p
            className="font-semibold text-sm mb-1"
            style={{ color: "var(--deep)" }}>
            {perk.title}
          </p>
          <p
            className="text-xs leading-relaxed"
            style={{ color: "rgba(10,37,64,0.56)" }}>
            {perk.desc}
          </p>
        </div>
      </div>
    </RevealDiv>
  );
}

/* ───────────────────────────────────────────────
   FAQ ITEM
─────────────────────────────────────────────── */
function FAQItem({ faq, index }: { faq: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <RevealDiv delay={index * 70}>
      <div
        className="rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          background: open
            ? "rgba(255,255,255,0.92)"
            : "rgba(255,255,255,0.65)",
          border: `1.5px solid ${open ? "rgba(14,165,233,0.35)" : "rgba(255,255,255,0.55)"}`,
          backdropFilter: "blur(16px)",
          boxShadow: open ? "0 8px 30px rgba(14,165,233,0.1)" : "none",
        }}>
        <button
          className="w-full text-left flex items-center justify-between gap-4 p-5"
          onClick={() => setOpen(!open)}
          style={{
            fontFamily: "var(--font-body)",
            cursor: "pointer",
            border: "none",
            background: "transparent",
          }}>
          <span
            className="font-semibold text-sm"
            style={{ color: "var(--deep)" }}>
            {faq.q}
          </span>
          <ChevronDown
            size={18}
            style={{
              color: "var(--primary)",
              flexShrink: 0,
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.35s var(--ease-bounce)",
            }}
          />
        </button>
        <div
          style={{
            maxHeight: open ? 200 : 0,
            overflow: "hidden",
            transition: "max-height 0.4s var(--ease-smooth)",
          }}>
          <p
            className="px-5 pb-5 text-sm leading-relaxed"
            style={{ color: "rgba(10,37,64,0.62)" }}>
            {faq.a}
          </p>
        </div>
      </div>
    </RevealDiv>
  );
}

/* ───────────────────────────────────────────────
   BOOKING FORM
─────────────────────────────────────────────── */
function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
    time: "",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("done");
  };

  const inputStyle = (name: string): React.CSSProperties => ({
    width: "100%",
    padding: "12px 16px",
    borderRadius: 12,
    border: `1.5px solid ${focused === name ? "var(--primary)" : "rgba(14,165,233,0.2)"}`,
    outline: "none",
    fontFamily: "var(--font-body)",
    fontSize: 14,
    color: "var(--deep)",
    background:
      focused === name ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.72)",
    boxShadow: focused === name ? "0 0 0 3px rgba(14,165,233,0.12)" : "none",
    transition: "all 0.25s",
  });

  const events = (name: string) => ({
    onFocus: () => setFocused(name),
    onBlur: () => setFocused(null),
  });

  const labelStyle: React.CSSProperties = {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: ".08em",
    textTransform: "uppercase" as const,
    color: "var(--deep)",
    marginBottom: 6,
    display: "block",
  };

  if (status === "done") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{
            background: "var(--primary-ghost)",
            animation: "float 3s ease-in-out infinite",
          }}>
          <CheckCircle size={36} style={{ color: "var(--primary)" }} />
        </div>
        <div>
          <h3
            className="font-display text-2xl font-bold mb-2"
            style={{ color: "var(--deep)" }}>
            Pickup Scheduled!
          </h3>
          <p className="text-sm" style={{ color: "rgba(10,37,64,0.6)" }}>
            We&apos;ll confirm via phone call within the hour. See you soon! 🧺
          </p>
        </div>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({
              name: "",
              phone: "",
              address: "",
              date: "",
              time: "",
              notes: "",
            });
          }}
          className="btn-secondary px-6 py-2.5 rounded-full font-semibold text-sm"
          style={{ fontFamily: "var(--font-body)" }}>
          <span>Book Another</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input
            name="name"
            required
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            style={inputStyle("name")}
            {...events("name")}
          />
        </div>
        <div>
          <label style={labelStyle}>Phone *</label>
          <input
            name="phone"
            type="tel"
            required
            placeholder="+1 (562) 000-0000"
            value={form.phone}
            onChange={handleChange}
            style={inputStyle("phone")}
            {...events("phone")}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Pickup Address *</label>
        <input
          name="address"
          required
          placeholder="123 Main St, Long Beach, CA"
          value={form.address}
          onChange={handleChange}
          style={inputStyle("address")}
          {...events("address")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Preferred Date *</label>
          <input
            name="date"
            type="date"
            required
            value={form.date}
            onChange={handleChange}
            style={inputStyle("date")}
            {...events("date")}
          />
        </div>
        <div>
          <label style={labelStyle}>Time Window *</label>
          <select
            name="time"
            required
            value={form.time}
            onChange={handleChange}
            style={{
              ...inputStyle("time"),
              appearance: "none",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%230ea5e9' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 14px center",
              paddingRight: 40,
            }}
            {...events("time")}>
            <option value="">Select a window…</option>
            <option>7 AM – 10 AM</option>
            <option>10 AM – 1 PM</option>
            <option>1 PM – 4 PM</option>
            <option>4 PM – 7 PM</option>
            <option>7 PM – 10 PM</option>
          </select>
        </div>
      </div>

      <div>
        <label style={labelStyle}>Special Instructions</label>
        <textarea
          name="notes"
          rows={3}
          placeholder="Delicate items, hang dry, no fabric softener…"
          value={form.notes}
          onChange={handleChange}
          style={{ ...inputStyle("notes"), resize: "vertical", minHeight: 90 }}
          {...events("notes")}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-2"
        style={{ fontFamily: "var(--font-body)", fontSize: 15 }}>
        {status === "sending" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>Scheduling…</span>
          </>
        ) : (
          <>
            <Truck size={16} />
            <span>Schedule My Pickup</span>
            <ArrowRight size={15} />
          </>
        )}
      </button>

      <p
        className="text-center text-xs"
        style={{ color: "rgba(10,37,64,0.4)" }}>
        Or call us directly at{" "}
        <a
          href="tel:+15623805780"
          style={{ color: "var(--primary)", fontWeight: 600 }}>
          +1 (562) 380-5780
        </a>
      </p>
    </form>
  );
}

/* ───────────────────────────────────────────────
   MAIN PAGE
─────────────────────────────────────────────── */
export default function PickupDelivery() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      {/* ── HERO ──────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 130% 90% at 65% -5%, #bae6fd 0%, #e0f2fe 35%, #f0f9ff 65%, #ffffff 100%)",
        }}>
        {/* Bubbles */}
        <div className="bubble-field">
          {BUBBLES.map((b, i) => (
            <div
              key={i}
              className={`bubble ${b.cls}`}
              style={
                {
                  width: b.size,
                  height: b.size,
                  left: b.left,
                  bottom: -60,
                  "--dur": b.dur,
                  "--del": b.del,
                  "--drift": b.drift,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

        {/* Orb decorations */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 600,
            height: 600,
            borderRadius: "50%",
            top: -200,
            right: -150,
            background:
              "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 400,
            height: 400,
            borderRadius: "50%",
            bottom: -100,
            left: -80,
            background:
              "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <div ref={heroRef} className="reveal">
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
                style={{
                  background: "var(--primary-ghost)",
                  color: "var(--primary)",
                }}>
                <Truck size={13} />
                Free Pickup &amp; Delivery
              </span>

              <h1
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                style={{ color: "var(--deep)" }}>
                We Come <span className="gradient-text">To You.</span>
                <br />
                <span style={{ fontSize: "0.75em" }}>You Relax.</span>
              </h1>

              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: "rgba(10,37,64,0.62)", maxWidth: 480 }}>
                Schedule a free laundry pickup from your door. We wash, fold,
                and deliver it back — fresh, clean, and perfectly packaged
                within 24–48 hours.
              </p>

              {/* Quick stats row */}
              <div className="flex flex-wrap gap-6 mb-10">
                {[
                  { val: "Free", label: "Pickup on $30+" },
                  { val: "24h", label: "Turnaround" },
                  { val: "4.9★", label: "Rating" },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <p
                      className="font-display text-2xl font-bold stat-glow"
                      style={{ color: "var(--primary)" }}>
                      {val}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "rgba(10,37,64,0.52)" }}>
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#book"
                  className="btn-primary px-8 py-4 rounded-2xl font-bold text-white flex items-center gap-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    textDecoration: "none",
                    fontSize: 15,
                  }}>
                  <span>Schedule Pickup</span>
                  <ArrowRight size={16} />
                </a>
                <a
                  href="tel:+15623805780"
                  className="btn-secondary px-8 py-4 rounded-2xl font-bold flex items-center gap-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    textDecoration: "none",
                    fontSize: 15,
                  }}>
                  <Phone size={16} />
                  <span>Call Us</span>
                </a>
              </div>
            </div>

            {/* Right — animated truck */}
            <RevealDiv delay={200} className="flex items-center justify-center">
              <AnimatedTruck />
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────── */}
      <section className="py-24 foam-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <RevealDiv className="text-center mb-16">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4"
              style={{
                background: "var(--primary-ghost)",
                color: "var(--primary)",
              }}>
              The Process
            </span>
            <h2
              className="font-display text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--deep)" }}>
              How It <span className="gradient-text">Works</span>
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "rgba(10,37,64,0.58)" }}>
              Four simple steps between you and perfectly clean laundry.
            </p>
          </RevealDiv>

          {/* Steps — horizontal connector line on desktop */}
          <div className="relative">
            <div
              className="absolute top-16 left-0 right-0 h-px hidden lg:block"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(14,165,233,0.25), rgba(99,102,241,0.25), transparent)",
              }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {STEPS.map((step, i) => (
                <StepCard key={i} step={step} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PERKS ─────────────────────────────────────── */}
      <section className="py-24" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — big statement */}
            <RevealDiv>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
                style={{
                  background: "var(--secondary-ghost)",
                  color: "var(--secondary)",
                }}>
                Why Choose Us
              </span>
              <h2
                className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight"
                style={{ color: "var(--deep)" }}>
                More Than Just{" "}
                <span className="gradient-text-secondary">Laundry.</span>
              </h2>
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: "rgba(10,37,64,0.6)" }}>
                We built The Laundryroom CD around one promise — make laundry
                completely effortless. Every detail, from eco detergents to
                real-time SMS updates, is designed for you.
              </p>

              {/* Mini trust bar */}
              <div className="flex items-center gap-4 flex-wrap">
                {[
                  "4.9★ Rated",
                  "500+ Happy Customers",
                  "Long Beach's Favorite",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{
                      background: "var(--primary-ghost)",
                      color: "var(--primary)",
                    }}>
                    {t}
                  </span>
                ))}
              </div>
            </RevealDiv>

            {/* Right — perk grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PERKS.map((p, i) => (
                <PerkCard key={i} perk={p} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKING FORM ─────────────────────────────── */}
      <section id="book" className="py-24 foam-bg relative overflow-hidden">
        {/* Extra bubbles */}
        {[
          { size: 44, left: "5%", dur: "14s", del: "0s", drift: "28px" },
          { size: 20, left: "90%", dur: "10s", del: "1.5s", drift: "-22px" },
        ].map((b, i) => (
          <div
            key={i}
            className="bubble bubble-soap"
            style={
              {
                width: b.size,
                height: b.size,
                left: b.left,
                bottom: -60,
                "--dur": b.dur,
                "--del": b.del,
                "--drift": b.drift,
              } as React.CSSProperties
            }
          />
        ))}

        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — form */}
            <RevealDiv>
              <div
                className="glass rounded-3xl p-8 md:p-10"
                style={{
                  boxShadow: "0 24px 70px rgba(14,165,233,0.13)",
                  border: "1.5px solid rgba(255,255,255,0.65)",
                }}>
                <div className="mb-7">
                  <span
                    className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                    style={{
                      background: "var(--primary-ghost)",
                      color: "var(--primary)",
                    }}>
                    Book Now
                  </span>
                  <h2
                    className="font-display text-3xl font-bold mb-2"
                    style={{ color: "var(--deep)" }}>
                    Schedule Your <span className="gradient-text">Pickup</span>
                  </h2>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(10,37,64,0.55)" }}>
                    Fill in your details and we&apos;ll handle the rest.
                    Confirmation within the hour.
                  </p>
                </div>
                <BookingForm />
              </div>
            </RevealDiv>

            {/* Right — what to expect */}
            <RevealDiv delay={150} className="flex flex-col gap-6">
              <div>
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
                  style={{
                    background: "var(--primary-ghost)",
                    color: "var(--primary)",
                  }}>
                  What to Expect
                </span>
                <h2
                  className="font-display text-3xl md:text-4xl font-bold mb-4"
                  style={{ color: "var(--deep)" }}>
                  We Handle <span className="gradient-text">Everything</span>
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "rgba(10,37,64,0.6)" }}>
                  From the moment you schedule to the moment your clean clothes
                  arrive at your door — we keep you updated at every step.
                </p>
              </div>

              {/* Timeline visual */}
              <div className="flex flex-col gap-0">
                {[
                  {
                    time: "Hour 0",
                    text: "We confirm your booking via phone",
                    icon: Phone,
                  },
                  {
                    time: "Pickup",
                    text: "Driver arrives in your time window",
                    icon: Truck,
                  },
                  {
                    time: "Cleaning",
                    text: "Expert wash, dry & fold at our facility",
                    icon: Sparkles,
                  },
                  {
                    time: "Delivery",
                    text: "Fresh laundry delivered to your door",
                    icon: CheckCircle,
                  },
                ].map(({ time, text, icon: Icon }, i) => (
                  <div key={i} className="flex gap-4">
                    {/* Timeline track */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "var(--primary-ghost)",
                          border: "2px solid var(--primary)",
                        }}>
                        <Icon size={13} style={{ color: "var(--primary)" }} />
                      </div>
                      {i < 3 && (
                        <div
                          style={{
                            width: 2,
                            flex: 1,
                            minHeight: 32,
                            background:
                              "linear-gradient(180deg, var(--primary), rgba(14,165,233,0.2))",
                            margin: "4px 0",
                          }}
                        />
                      )}
                    </div>
                    <div className="pb-6">
                      <span
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{ color: "var(--primary)" }}>
                        {time}
                      </span>
                      <p
                        className="text-sm"
                        style={{ color: "rgba(10,37,64,0.7)" }}>
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coverage badge */}
              <div
                className="glass rounded-2xl p-5 flex items-center gap-4"
                style={{ border: "1.5px solid rgba(14,165,233,0.2)" }}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--primary-ghost)" }}>
                  <MapPin size={18} style={{ color: "var(--primary)" }} />
                </div>
                <div>
                  <p
                    className="font-bold text-sm"
                    style={{ color: "var(--deep)" }}>
                    Serving Long Beach &amp; Surrounding Areas
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(10,37,64,0.52)" }}>
                    Lakewood · Compton · Carson · Signal Hill
                  </p>
                </div>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24" style={{ background: "var(--cream)" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <RevealDiv className="text-center mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4"
              style={{
                background: "var(--primary-ghost)",
                color: "var(--primary)",
              }}>
              FAQ
            </span>
            <h2
              className="font-display text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--deep)" }}>
              Got <span className="gradient-text">Questions?</span>
            </h2>
            <p className="text-base" style={{ color: "rgba(10,37,64,0.58)" }}>
              Everything you need to know about our pickup &amp; delivery
              service.
            </p>
          </RevealDiv>

          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>

          {/* Still have questions CTA */}
          <RevealDiv delay={200} className="mt-12 text-center">
            <div
              className="glass rounded-3xl p-8"
              style={{
                border: "1.5px solid rgba(14,165,233,0.18)",
                boxShadow: "0 8px 30px rgba(14,165,233,0.08)",
              }}>
              <p
                className="font-display text-xl font-bold mb-2"
                style={{ color: "var(--deep)" }}>
                Still have questions?
              </p>
              <p
                className="text-sm mb-6"
                style={{ color: "rgba(10,37,64,0.56)" }}>
                Our team is available 7 days a week, 7 AM – 10 PM.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+15623805780"
                  className="btn-primary px-6 py-3 rounded-xl font-bold text-white flex items-center gap-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    textDecoration: "none",
                    fontSize: 14,
                  }}>
                  <Phone size={15} />
                  <span>+1 (562) 380-5780</span>
                </a>
                <a
                  href="mailto:laundryroomcd@gmail.com"
                  className="btn-secondary px-6 py-3 rounded-xl font-bold flex items-center gap-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    textDecoration: "none",
                    fontSize: 14,
                  }}>
                  <span>Email Us</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* ── BOTTOM CTA BANNER ─────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--deep) 0%, var(--primary-deeper) 55%, var(--primary-dark) 100%)",
        }}>
        {[
          { size: 50, left: "8%", dur: "13s", del: "0s", drift: "30px" },
          { size: 22, left: "40%", dur: "9s", del: "2s", drift: "-20px" },
          { size: 60, left: "80%", dur: "16s", del: "1s", drift: "38px" },
        ].map((b, i) => (
          <div
            key={i}
            className="bubble bubble-soap"
            style={
              {
                width: b.size,
                height: b.size,
                left: b.left,
                bottom: -60,
                "--dur": b.dur,
                "--del": b.del,
                "--drift": b.drift,
                opacity: 0.2,
              } as React.CSSProperties
            }
          />
        ))}

        {/* Decorative rings */}
        {[500, 750, 1000].map((s) => (
          <div
            key={s}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: s,
              height: s,
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              border: "1px solid rgba(255,255,255,0.04)",
            }}
          />
        ))}

        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center relative z-10">
          <RevealDiv>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
              }}>
              <Sparkles size={14} style={{ color: "var(--primary-light)" }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--primary-light)" }}>
                Ready to start?
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold mb-5 text-white leading-tight">
              Your First Pickup is <span className="gradient-text">On Us.</span>
            </h2>
            <p
              className="text-base mb-10"
              style={{ color: "rgba(255,255,255,0.6)" }}>
              Free pickup on your first order over $30. No promo code needed —
              just book and we&apos;ll handle the rest.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#book"
                className="btn-primary cta-pulse px-8 py-4 rounded-2xl font-bold text-white flex items-center gap-2"
                style={{
                  fontFamily: "var(--font-body)",
                  textDecoration: "none",
                  fontSize: 15,
                }}>
                <Truck size={16} />
                <span>Schedule Free Pickup</span>
                <ArrowRight size={15} />
              </a>
              <a
                href="tel:+15623805780"
                className="px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all duration-300"
                style={{
                  fontFamily: "var(--font-body)",
                  textDecoration: "none",
                  fontSize: 15,
                  background: "rgba(255,255,255,0.12)",
                  color: "white",
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(12px)",
                }}>
                <Phone size={15} />
                <span>Call Now</span>
              </a>
            </div>
          </RevealDiv>
        </div>
      </section>

      <Footer />
    </>
  );
}
