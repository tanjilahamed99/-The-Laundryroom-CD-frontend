import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/bubbles-logo2.png";

export default function Footer() {
  return (
    <footer
      style={{ background: "var(--deep)", color: "white" }}
      className="relative overflow-hidden">
      {/* Bubble hints */}
      {[
        { size: 40, left: "5%", dur: "14s", del: "0s", drift: "28px" },
        { size: 24, left: "35%", dur: "10s", del: "2s", drift: "-20px" },
        { size: 50, left: "70%", dur: "16s", del: "1s", drift: "36px" },
        { size: 18, left: "90%", dur: "9s", del: "3s", drift: "-16px" },
      ].map((b, i) => (
        <div
          key={i}
          className="bubble"
          style={
            {
              width: b.size,
              height: b.size,
              left: b.left,
              bottom: "-60px",
              opacity: 0.12,
              background: "rgba(14,165,233,0.5)",
              border: "1px solid rgba(14,165,233,0.3)",
              "--dur": b.dur,
              "--del": b.del,
              "--drift": b.drift,
            } as React.CSSProperties
          }
        />
      ))}

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary), var(--primary-dark))",
                }}>
                <span className="text-white text-lg font-bold font-display">
                  <Image
                    src={logo}
                    alt="image not found"
                    height={100}
                    width={100}
                  />
                </span>
              </div>
              <div>
                <span className="font-display font-bold text-xl block leading-tight">
                  The Laundryroom
                </span>
                <span
                  className="text-xs tracking-[0.2em] uppercase"
                  style={{ color: "var(--primary)" }}>
                  CD
                </span>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.52)" }}>
              5210 Long Beach Blvd, Long Beach, CA 90805, United States
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ color: "rgba(255,255,255,0.40)" }}>
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Self-Service Wash",
                "Wash & Fold",
                "Dry Cleaning",
                "Pickup & Delivery",
                "Commercial Laundry",
                "Express Service",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="footer-link text-sm"
                    style={{ color: "rgba(255,255,255,0.60)" }}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ color: "rgba(255,255,255,0.40)" }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Pricing", "#pricing"],
                ["Pick Up & Delivery", "/pick-up-delivery"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="footer-link text-sm"
                    style={{ color: "rgba(255,255,255,0.60)" }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ color: "rgba(255,255,255,0.40)" }}>
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--primary)" }}
                />
                <span
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.60)" }}>
                  5210 Long Beach Blvd,
                  <br />
                  Long Beach, CA 90805, United States
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone
                  size={14}
                  className="shrink-0"
                  style={{ color: "var(--primary)" }}
                />
                <a
                  href="tel:+15623805780"
                  className="footer-link text-sm"
                  style={{ color: "rgba(255,255,255,0.60)" }}>
                  +15623805780
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail
                  size={14}
                  className="shrink-0"
                  style={{ color: "var(--primary)" }}
                />
                <a
                  href="mailto:laundryroomcd@gmail.com"
                  className="footer-link text-sm"
                  style={{ color: "rgba(255,255,255,0.60)" }}>
                  laundryroomcd@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.32)" }}>
            © {new Date().getFullYear()} The Laundryroom CD. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {/* <a href="#" className="text-xs transition-colors" style={{ color: "rgba(255,255,255,0.32)" }}
               onMouseEnter={e => (e.currentTarget.style.color = "var(--primary)")}
               onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.32)")}>Privacy Policy</a>
            <a href="#" className="text-xs transition-colors" style={{ color: "rgba(255,255,255,0.32)" }}
               onMouseEnter={e => (e.currentTarget.style.color = "var(--primary)")}
               onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.32)")}>Terms of Service</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
