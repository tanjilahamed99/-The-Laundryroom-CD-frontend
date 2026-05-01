"use client";
import { Phone } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href="tel:+14057488990"
      className={`cta-pulse fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      style={{
        background: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
        boxShadow: "0 8px 30px rgba(14,165,233,0.50)",
        transition: "transform 0.25s var(--ease-bounce), box-shadow 0.25s ease, opacity 0.5s ease, translate 0.5s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1.12) translateY(-3px)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1) translateY(0)";
      }}
      aria-label="Call us"
    >
      <Phone size={22} />
    </Link>
  );
}
