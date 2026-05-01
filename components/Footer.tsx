import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/bubbles-logo2.png";
import Link from "next/link";

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

            <div className="flex items-center gap-3 mt-3">
              {/* Facebook Link */}
              <Link
                href="https://www.yelp.com/biz/the-laundryroom-cd-long-beach"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Visit us on Yelp">
                <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300 -z-10"></div>
                <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Facebook className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                </div>
              </Link>

              {/* Yelp Link */}
              <Link
                href="https://www.yelp.com/biz/the-laundryroom-cd-long-beach"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Visit us on Yelp">
                <div className="absolute inset-0 bg-linear-to-br from-red-500 to-red-600 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300 -z-10"></div>
                <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group-hover:border-red-500 dark:group-hover:border-red-400 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <svg
                    className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.961 22.279c0.246-0.273 0.601-0.444 0.995-0.444 0.739 0 1.338 0.599 1.338 1.338 0 0.016-0 0.032-0.001 0.048l0-0.002-0.237 6.483c-0.027 0.719-0.616 1.293-1.34 1.293-0.077 0-0.153-0.006-0.226-0.019l0.008 0.001c-1.763-0.303-3.331-0.962-4.69-1.902l0.039 0.025c-0.351-0.245-0.578-0.647-0.578-1.102 0-0.346 0.131-0.661 0.346-0.898l-0.001 0.001 4.345-4.829zM12.853 20.434l-6.301 1.572c-0.097 0.025-0.208 0.039-0.322 0.039-0.687 0-1.253-0.517-1.332-1.183l-0.001-0.006c-0.046-0.389-0.073-0.839-0.073-1.295 0-1.324 0.223-2.597 0.635-3.781l-0.024 0.081c0.183-0.534 0.681-0.911 1.267-0.911 0.214 0 0.417 0.050 0.596 0.14l-0.008-0.004 5.833 2.848c0.45 0.221 0.754 0.677 0.754 1.203 0 0.623-0.427 1.147-1.004 1.294l-0.009 0.002zM13.924 15.223l-6.104-10.574c-0.112-0.191-0.178-0.421-0.178-0.667 0-0.529 0.307-0.987 0.752-1.204l0.008-0.003c1.918-0.938 4.153-1.568 6.511-1.761l0.067-0.004c0.031-0.003 0.067-0.004 0.104-0.004 0.738 0 1.337 0.599 1.337 1.337 0 0.001 0 0.001 0 0.002v-0 12.207c-0 0.739-0.599 1.338-1.338 1.338-0.493 0-0.923-0.266-1.155-0.663l-0.003-0.006zM19.918 20.681l6.176 2.007c0.541 0.18 0.925 0.682 0.925 1.274 0 0.209-0.048 0.407-0.134 0.584l0.003-0.008c-0.758 1.569-1.799 2.889-3.068 3.945l-0.019 0.015c-0.23 0.19-0.527 0.306-0.852 0.306-0.477 0-0.896-0.249-1.134-0.625l-0.003-0.006-3.449-5.51c-0.128-0.201-0.203-0.446-0.203-0.709 0-0.738 0.598-1.336 1.336-1.336 0.147 0 0.289 0.024 0.421 0.068l-0.009-0.003zM26.197 16.742l-6.242 1.791c-0.11 0.033-0.237 0.052-0.368 0.052-0.737 0-1.335-0.598-1.335-1.335 0-0.282 0.087-0.543 0.236-0.758l-0.003 0.004 3.63-5.383c0.244-0.358 0.65-0.59 1.111-0.59 0.339 0 0.649 0.126 0.885 0.334l-0.001-0.001c1.25 1.104 2.25 2.459 2.925 3.99l0.029 0.073c0.070 0.158 0.111 0.342 0.111 0.535 0 0.608-0.405 1.121-0.959 1.286l-0.009 0.002z" />
                  </svg>
                </div>
              </Link>
            </div>
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
