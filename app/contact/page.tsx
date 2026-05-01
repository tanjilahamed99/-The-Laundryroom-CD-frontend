"use client";
import { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Loader2,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Define the shape
interface InfoCardItem {
  icon: React.ElementType;
  label: string;
  primary: string;
  secondary: string;
  href: string | null;
  color: "primary" | "secondary";
}

interface RevealDivProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

/* ─── data ─────────────────────────────────────────── */
const INFO_CARDS = [
  {
    icon: MapPin,
    label: "Visit Us",
    primary: "5210 Long Beach Blvd",
    secondary: "Long Beach, CA 90805",
    href: "https://maps.google.com/?q=5210+Long+Beach+Blvd+Long+Beach+CA+90805",
    color: "primary",
  },
  {
    icon: Phone,
    label: "Call Us",
    primary: "+1 (562) 380-5780",
    secondary: "Mon–Sun · 7 AM – 10 PM",
    href: "tel:+15623805780",
    color: "secondary",
  },
  {
    icon: Mail,
    label: "Email Us",
    primary: "laundryroomcd@gmail.com",
    secondary: "We reply within 24 hours",
    href: "mailto:laundryroomcd@gmail.com",
    color: "primary",
  },
  {
    icon: Clock,
    label: "Hours",
    primary: "7 AM – 10 PM",
    secondary: "Open every day of the week",
    href: null,
    color: "secondary",
  },
] as const satisfies InfoCardItem[];

const BUBBLE_CONFIG = [
  {
    size: 52,
    left: "4%",
    dur: "14s",
    del: "0s",
    drift: "30px",
    cls: "bubble-soap bubble-drift",
  },
  {
    size: 22,
    left: "16%",
    dur: "9s",
    del: "2.2s",
    drift: "-20px",
    cls: "bubble-micro",
  },
  {
    size: 38,
    left: "30%",
    dur: "12s",
    del: "0.8s",
    drift: "26px",
    cls: "bubble-foam",
  },
  {
    size: 16,
    left: "52%",
    dur: "8s",
    del: "3.5s",
    drift: "-14px",
    cls: "bubble-micro",
  },
  {
    size: 46,
    left: "68%",
    dur: "13s",
    del: "1.5s",
    drift: "34px",
    cls: "bubble-soap",
  },
  {
    size: 28,
    left: "82%",
    dur: "10s",
    del: "0.3s",
    drift: "-24px",
    cls: "bubble-foam bubble-drift",
  },
  {
    size: 14,
    left: "93%",
    dur: "7s",
    del: "4.2s",
    drift: "12px",
    cls: "bubble-micro",
  },
];

/* ─── helpers ───────────────────────────────────────── */
function useRevealOnScroll() {
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
  const ref = useRevealOnScroll();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

/* ─── sub-components ────────────────────────────────── */
function InfoCard({ card, index }: { card: InfoCardItem; index: number }) {
  const Icon = card.icon;
  const isPrimary = card.color === "primary";
  const Tag = card.href ? "a" : "div";
  return (
    <RevealDiv delay={index * 100}>
      <Tag
        href={card.href ?? undefined}
        target={card.href?.startsWith("http") ? "_blank" : undefined}
        rel={card.href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="contact-card glass rounded-2xl p-6 flex items-start gap-4 group"
        style={{ textDecoration: "none" }}>
        {/* icon */}
        <div
          className="contact-icon w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
          style={{
            background: isPrimary
              ? "var(--primary-ghost)"
              : "var(--secondary-ghost)",
          }}>
          <Icon
            size={20}
            style={{ color: isPrimary ? "var(--primary)" : "var(--secondary)" }}
          />
        </div>

        <div className="min-w-0">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-1"
            style={{
              color: isPrimary ? "var(--primary)" : "var(--secondary)",
            }}>
            {card.label}
          </p>
          <p
            className="font-semibold text-sm leading-tight mb-0.5 wrap-break-word group-hover:underline"
            style={{
              color: "var(--deep)",
              textDecorationColor: "var(--primary)",
            }}>
            {card.primary}
          </p>
          <p className="text-xs" style={{ color: "rgba(10,37,64,0.52)" }}>
            {card.secondary}
          </p>
        </div>

        {card.href && (
          <ChevronRight
            size={16}
            className="ml-auto shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            style={{ color: "var(--primary)", marginTop: 2 }}
          />
        )}
      </Tag>
    </RevealDiv>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate network
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("sent");
  };

  const inputBase = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 12,
    border: "1.5px solid",
    outline: "none",
    fontFamily: "var(--font-body)",
    fontSize: 14,
    background: "rgba(255,255,255,0.72)",
    color: "var(--deep)",
    transition: "border-color .25s, box-shadow .25s, background .25s",
  };

  const getInputStyle = (name: string) => ({
    ...inputBase,
    borderColor: focused === name ? "var(--primary)" : "rgba(14,165,233,0.22)",
    boxShadow: focused === name ? "0 0 0 3px rgba(14,165,233,0.12)" : "none",
    background:
      focused === name ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.7)",
  });

  const sharedEvents = (name: string) => ({
    onFocus: () => setFocused(name),
    onBlur: () => setFocused(null),
  });

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6 gap-6">
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
            Message Sent!
          </h3>
          <p style={{ color: "rgba(10,37,64,0.6)", fontSize: 14 }}>
            Thanks for reaching out. We&apos;ll get back to you within 24 hours.
          </p>
        </div>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            });
          }}
          className="btn-secondary px-6 py-2.5 rounded-full font-semibold text-sm"
          style={{ fontFamily: "var(--font-body)" }}>
          <span>Send another</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Row: name + email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "var(--deep)",
              letterSpacing: ".06em",
              textTransform: "uppercase",
            }}>
            Full Name *
          </label>
          <input
            name="name"
            required
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            style={getInputStyle("name")}
            {...sharedEvents("name")}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "var(--deep)",
              letterSpacing: ".06em",
              textTransform: "uppercase",
            }}>
            Email *
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="jane@email.com"
            value={form.email}
            onChange={handleChange}
            style={getInputStyle("email")}
            {...sharedEvents("email")}
          />
        </div>
      </div>

      {/* Row: phone + subject */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "var(--deep)",
              letterSpacing: ".06em",
              textTransform: "uppercase",
            }}>
            Phone
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="+1 (562) 000-0000"
            value={form.phone}
            onChange={handleChange}
            style={getInputStyle("phone")}
            {...sharedEvents("phone")}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "var(--deep)",
              letterSpacing: ".06em",
              textTransform: "uppercase",
            }}>
            Subject *
          </label>
          <select
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            style={{
              ...getInputStyle("subject"),
              appearance: "none",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%230ea5e9' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 14px center",
              paddingRight: 40,
            }}
            {...sharedEvents("subject")}>
            <option value="">Select a topic…</option>
            <option>General Inquiry</option>
            <option>Pricing &amp; Services</option>
            <option>Pickup &amp; Delivery</option>
            <option>Commercial / Business</option>
            <option>Feedback</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "var(--deep)",
            letterSpacing: ".06em",
            textTransform: "uppercase",
          }}>
          Message *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us how we can help you…"
          value={form.message}
          onChange={handleChange}
          style={{
            ...getInputStyle("message"),
            resize: "vertical",
            minHeight: 120,
          }}
          {...sharedEvents("message")}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-2"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 15,
          opacity: status === "sending" ? 0.85 : 1,
        }}>
        {status === "sending" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>Sending…</span>
          </>
        ) : (
          <>
            <Send size={16} />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle"); // idle | sending | done | error
  const [focused, setFocused] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setState("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setState("done");
  };

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--deep) 0%, var(--primary-deeper) 55%, var(--primary-dark) 100%)",
      }}>
      {/* Floating bubbles (dark bg version) */}
      {[
        { size: 40, left: "6%", dur: "13s", del: "0s", drift: "28px" },
        { size: 18, left: "25%", dur: "9s", del: "2s", drift: "-18px" },
        { size: 55, left: "75%", dur: "15s", del: "1s", drift: "36px" },
        { size: 22, left: "90%", dur: "10s", del: "3s", drift: "-20px" },
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
              opacity: 0.25,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Decorative rings */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 500,
          height: 500,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 750,
          height: 750,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          border: "1px solid rgba(255,255,255,0.03)",
        }}
      />

      <div className="max-w-2xl mx-auto px-5 md:px-8 text-center relative z-10">
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
              Stay in the loop
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
            Get Exclusive <span className="gradient-text">Laundry Deals</span>
          </h2>

          <p
            className="text-base mb-10"
            style={{ color: "rgba(255,255,255,0.58)" }}>
            Join our newsletter for weekly promotions, laundry tips, and early
            access to new services. No spam — ever.
          </p>

          {state === "done" ? (
            <div
              className="flex flex-col items-center gap-4 py-6"
              style={{ animation: "float 3s ease-in-out infinite" }}>
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "rgba(14,165,233,0.2)" }}>
                <CheckCircle
                  size={30}
                  style={{ color: "var(--primary-light)" }}
                />
              </div>
              <p className="font-semibold text-white text-lg">
                You&apos;re subscribed!
              </p>
              <p style={{ color: "rgba(255,255,255,0.52)", fontSize: 14 }}>
                Welcome to The Laundryroom CD family. 🧺
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  style={{
                    width: "100%",
                    padding: "14px 20px",
                    borderRadius: 14,
                    border: `1.5px solid ${focused ? "var(--primary-light)" : "rgba(255,255,255,0.15)"}`,
                    outline: "none",
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(16px)",
                    color: "white",
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    transition: "border-color .25s, box-shadow .25s",
                    boxShadow: focused
                      ? "0 0 0 3px rgba(56,189,248,0.18)"
                      : "none",
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={state === "sending"}
                className="btn-primary px-6 py-3.5 rounded-2xl font-bold text-white flex items-center justify-center gap-2 flex-shrink-0"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  whiteSpace: "nowrap",
                }}>
                {state === "sending" ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <>
                    Subscribe
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </form>
          )}

          <p
            className="mt-5 text-xs"
            style={{ color: "rgba(255,255,255,0.32)" }}>
            Unsubscribe anytime. Your privacy is respected.
          </p>
        </RevealDiv>
      </div>
    </section>
  );
}

/* ─── Main Export ───────────────────────────────────── */
export default function Contact() {
  /* stagger section header reveal */
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
      {/* ── HERO HEADER ─────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden foam-bg"
        id="contact">
        {/* Bubble field */}
        <div className="bubble-field">
          {BUBBLE_CONFIG.map((b, i) => (
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

        {/* Decorative gradient orbs */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 560,
            height: 560,
            borderRadius: "50%",
            top: -180,
            right: -140,
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
              "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <div ref={heroRef} className="reveal text-center max-w-3xl mx-auto">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
              style={{
                background: "var(--primary-ghost)",
                color: "var(--primary)",
              }}>
              <Sparkles size={13} />
              Get In Touch
            </span>

            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{ color: "var(--deep)" }}>
              We&apos;re Here <span className="gradient-text">For You</span>
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto"
              style={{ color: "rgba(10,37,64,0.6)" }}>
              Questions, bookings, or just want to say hi — reach out anytime.
              The Laundryroom CD team responds quickly.
            </p>
          </div>

          {/* Info cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {INFO_CARDS.map((card, i) => (
              <InfoCard key={i} card={card} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MAP + FORM ──────────────────────────────────── */}
      <section
        className="py-20 relative"
        style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* LEFT — Map embed + quick info */}
            <RevealDiv className="flex flex-col gap-6">
              {/* Map */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  height: 320,
                  boxShadow: "0 20px 60px rgba(14,165,233,0.14)",
                  border: "1.5px solid rgba(14,165,233,0.14)",
                }}>
                <iframe
                  title="The Laundryroom CD Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.938!2d-118.1878!3d33.8586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd31c!2s5210+Long+Beach+Blvd%2C+Long+Beach%2C+CA+90805!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "saturate(1.1) contrast(1.05)" }}
                  //         allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Overlay label */}
                <div
                  className="absolute bottom-4 left-4 glass rounded-xl px-4 py-3 flex items-center gap-3"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "var(--primary)" }}>
                    <MapPin size={14} color="white" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold"
                      style={{ color: "var(--deep)" }}>
                      The Laundryroom CD
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "rgba(10,37,64,0.55)" }}>
                      5210 Long Beach Blvd, CA
                    </p>
                  </div>
                </div>
              </div>

              {/* Directions CTA */}
              <a
                href="https://maps.google.com/?q=5210+Long+Beach+Blvd+Long+Beach+CA+90805"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-4 rounded-2xl font-bold text-white text-center flex items-center justify-center gap-2 hover-lift"
                style={{
                  fontFamily: "var(--font-body)",
                  textDecoration: "none",
                  fontSize: 15,
                }}>
                <MapPin size={16} />
                <span>Get Directions</span>
                <ArrowRight size={15} />
              </a>

              {/* Social / quick-call strip */}
              <div className="glass rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p
                    className="font-semibold text-sm mb-0.5"
                    style={{ color: "var(--deep)" }}>
                    Follow us for deals &amp; tips
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(10,37,64,0.5)" }}>
                    @laundryroomcd
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {[
                    { Icon: Instagram, href: "#", label: "Instagram" },
                    { Icon: Facebook, href: "#", label: "Facebook" },
                    { Icon: Twitter, href: "#", label: "Twitter" },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: "var(--primary-ghost)",
                        color: "var(--primary)",
                        textDecoration: "none",
                      }}>
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Hours card */}
              <div className="glass rounded-2xl overflow-hidden">
                <div
                  className="px-5 py-4 flex items-center gap-3"
                  style={{ borderBottom: "1px solid rgba(14,165,233,0.12)" }}>
                  <Clock size={16} style={{ color: "var(--primary)" }} />
                  <p
                    className="font-bold text-sm"
                    style={{ color: "var(--deep)" }}>
                    Business Hours
                  </p>
                  <span
                    className="ml-auto text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(34,197,94,0.12)",
                      color: "#15803d",
                    }}>
                    ● Open Now
                  </span>
                </div>
                {[
                  { day: "Monday – Friday", hours: "7:00 AM – 10:00 PM" },
                  { day: "Saturday", hours: "7:00 AM – 10:00 PM" },
                  { day: "Sunday", hours: "7:00 AM – 10:00 PM" },
                ].map(({ day, hours }) => (
                  <div
                    key={day}
                    className="flex items-center justify-between px-5 py-3"
                    style={{ borderBottom: "1px solid rgba(14,165,233,0.07)" }}>
                    <span
                      className="text-sm"
                      style={{ color: "rgba(10,37,64,0.65)" }}>
                      {day}
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "var(--deep)" }}>
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </RevealDiv>

            {/* RIGHT — Contact form */}
            <RevealDiv delay={150}>
              <div
                className="glass rounded-3xl p-8 md:p-10"
                style={{
                  boxShadow: "0 24px 70px rgba(14,165,233,0.13)",
                  border: "1.5px solid rgba(255,255,255,0.65)",
                }}>
                {/* Form header */}
                <div className="mb-8">
                  <span
                    className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                    style={{
                      background: "var(--primary-ghost)",
                      color: "var(--primary)",
                    }}>
                    Send a Message
                  </span>
                  <h2
                    className="font-display text-3xl font-bold mb-2"
                    style={{ color: "var(--deep)" }}>
                    Let&apos;s Talk{" "}
                    <span className="gradient-text">Laundry</span>
                  </h2>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(10,37,64,0.55)" }}>
                    Fill out the form and our team will reach out within 24
                    hours.
                  </p>
                </div>

                <ContactForm />
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ──────────────────────────────────── */}
      <NewsletterSection />

      <Footer />
    </>
  );
}
