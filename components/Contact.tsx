"use client";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import GoggleMap from "./GoogleMap";

const hours = [
  { day: "Monday – Friday", time: "6:00 AM – 10:00 PM" },
  { day: "Saturday", time: "6:00 AM – 10:00 PM" },
  { day: "Sunday", time: "7:00 AM – 9:00 PM" },
];

export default function Contact() {
  const { ref } = useReveal();
  const address = "5210 Long Beach Blvd, Long Beach, CA 90805";

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-white relative overflow-hidden">
      {[
        { size: 28, left: "2%", dur: "11s", del: "0s", drift: "20px" },
        { size: 18, left: "96%", dur: "9s", del: "2.5s", drift: "-16px" },
      ].map((b, i) => (
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
        <div className="text-center mb-16 reveal">
          <span
            className="inline-block font-semibold text-sm tracking-widest uppercase mb-3"
            style={{ color: "var(--primary)" }}>
            Find Us
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--deep)" }}>
            Visit or <span className="gradient-text">Get in Touch</span>
          </h2>
          <p
            className="text-lg max-w-lg mx-auto"
            style={{ color: "rgba(10,37,64,0.58)" }}>
            We&apos;re conveniently located in Oklahoma City. Stop by or reach
            us anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info cards */}
          <div className="space-y-5 reveal">
            {/* Address */}
            <div className="contact-card glass rounded-2xl p-6 flex gap-4">
              <div
                className="contact-icon w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "var(--primary-ghost)" }}>
                <MapPin size={20} style={{ color: "var(--primary)" }} />
              </div>
              <div>
                <p
                  className="font-semibold mb-0.5"
                  style={{ color: "var(--deep)" }}>
                  Address
                </p>
                <p className="text-sm" style={{ color: "rgba(10,37,64,0.58)" }}>
                  5210 Long Beach Blvd, Long Beach,
                  <br />
                  CA 90805, United States
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold mt-1 inline-block hover:underline"
                  style={{ color: "var(--primary)" }}>
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-card glass rounded-2xl p-6 flex gap-4">
              <div
                className="contact-icon w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "var(--primary-ghost)" }}>
                <Phone size={20} style={{ color: "var(--primary)" }} />
              </div>
              <div>
                <p
                  className="font-semibold mb-0.5"
                  style={{ color: "var(--deep)" }}>
                  Phone
                </p>
                <a
                  href="tel:+15623805780"
                  className="font-bold text-lg hover:underline transition-colors"
                  style={{ color: "var(--primary)" }}>
                  +15623805780
                </a>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "rgba(10,37,64,0.42)" }}>
                  Tap to call directly
                </p>
              </div>
            </div>

            {/* Email  */}
            <div className="contact-card glass rounded-2xl p-6 flex gap-4">
              <div
                className="contact-icon w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "var(--primary-ghost)" }}>
                <Mail size={20} style={{ color: "var(--primary)" }} />
              </div>
              <div>
                <p
                  className="font-semibold mb-0.5"
                  style={{ color: "var(--deep)" }}>
                  Email
                </p>
                <a
                  href="mailto:laundryroomcd@gmail.com"
                  className="text-sm font-medium hover:underline"
                  style={{ color: "var(--primary)" }}>
                  laundryroomcd@gmail.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="contact-card glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="contact-icon w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--primary-ghost)" }}>
                  <Clock size={20} style={{ color: "var(--primary)" }} />
                </div>
                <p className="font-semibold" style={{ color: "var(--deep)" }}>
                  Hours of Operation
                </p>
              </div>
              <div className="space-y-2">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span style={{ color: "rgba(10,37,64,0.62)" }}>
                      {h.day}
                    </span>
                    <span
                      className="font-semibold"
                      style={{ color: "var(--deep)" }}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="tel:+15623805780"
              className="btn-primary w-full text-white py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 shadow-xl">
              <span>
                <Phone size={18} className="inline mr-2" />
                Call Now — +15623805780
              </span>
            </a>
          </div>

          {/* Map */}
          <div
            className="reveal rounded-3xl overflow-hidden shadow-2xl h-130"
            style={{ border: "1px solid var(--primary-ghost)" }}>
            <GoggleMap />
          </div>
        </div>
      </div>
    </section>
  );
}
