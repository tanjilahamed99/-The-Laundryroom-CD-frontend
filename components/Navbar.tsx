"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/bubbles-logo2.png";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "nav-scrolled" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div
            className="logo-bubble relative w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, var(--primary), var(--primary-dark))",
            }}>
            <div
              className="absolute inset-0 rounded-full animate-ping opacity-20"
              style={{ background: "var(--primary)" }}
            />
            <span className="text-white text-lg font-bold font-display relative z-10">
              <Image src={logo} alt="image not found" height={100} width={100}/>
            </span>
          </div>
          <div>
            <span
              className="font-display font-bold text-xl leading-tight block"
              style={{ color: "var(--deep)" }}>
              Bubbles
            </span>
            <span
              className="text-xs tracking-[0.2em] uppercase font-medium"
              style={{ color: "var(--primary)" }}>
              Laundromat
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link text-sm font-medium pb-1 transition-colors"
                style={{ color: "rgba(10,37,64,0.72)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(10,37,64,0.72)")
                }>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+14057488990"
            className="flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: "var(--primary)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--primary-dark)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--primary)")
            }>
            <Phone size={15} className="animate-pulse" />
            +1 405-748-8990
          </a>
          <a
            href="#contact"
            className="btn-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg">
            <span>Book Now</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 transition-colors"
          style={{ color: "var(--deep)" }}
          aria-label="Toggle menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-400 overflow-hidden ${menuOpen ? "max-h-screen" : "max-h-0"}`}>
        <div
          className="glass px-5 py-6 flex flex-col gap-4"
          style={{ borderTop: "1px solid var(--primary-ghost)" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-medium py-1 transition-colors"
              style={{
                color: "var(--deep)",
                borderBottom: "1px solid var(--primary-ghost)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--deep)")
              }>
              {link.label}
            </a>
          ))}
          <a
            href="tel:+14057488990"
            className="btn-primary text-white text-center py-3 rounded-full font-semibold mt-2">
            <span>📞 Call Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
