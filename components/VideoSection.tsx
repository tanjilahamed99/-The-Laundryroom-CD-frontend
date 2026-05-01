"use client";
import { useReveal } from "@/lib/useReveal";
import { useState } from "react";

export default function VideoSection() {
  const { ref } = useReveal();
  const [hovered, setHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section ref={ref} className="relative overflow-hidden w-full h-screen">
      {/* Animated Bubbles Background */}
      {[
        { size: 40, left: "6%", dur: "13s", del: "0s", drift: "30px" },
        { size: 22, left: "25%", dur: "9s", del: "2s", drift: "-20px" },
        { size: 55, left: "55%", dur: "15s", del: "1s", drift: "38px" },
        { size: 18, left: "80%", dur: "8s", del: "3s", drift: "-15px" },
        { size: 34, left: "92%", dur: "11s", del: "0.5s", drift: "22px" },
      ].map((b, i) => (
        <div
          key={i}
          className="bubble bubble-foam"
          style={
            {
              width: b.size,
              height: b.size,
              left: b.left,
              bottom: "-60px",
              opacity: 0.2,
              "--dur": b.dur,
              "--del": b.del,
              "--drift": b.drift,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Video Container - Full Viewport Height */}
      <div
        className="reveal relative w-full h-full overflow-hidden cursor-pointer group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-30">
            <div className="w-12 h-12 border-3 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        )}

        {/* Video Element - Optimized for All Screens */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="./video-4.mp4"
          autoPlay
          muted
          loop
          playsInline
          // loading="lazy"
          onLoadedData={() => setIsLoading(false)}
          onLoadStart={() => setIsLoading(true)}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
      </div>

      {/* Custom CSS for Smooth Animations */}
      <style>{`
        @keyframes float-up {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.2;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-100vh) translateX(var(--drift));
            opacity: 0;
          }
        }

        .bubble-foam {
          position: absolute;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0.1));
          border-radius: 50%;
          animation: float-up var(--dur) ease-in var(--del) infinite;
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .bubble-foam {
            opacity: 0.1 !important;
          }
        }

        /* Smooth reveal animation */
        .reveal {
          opacity: 1;
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Smooth play button hover effect */
        @media (hover: hover) {
          .group:hover {
            /* Keeps video smooth without jitter */
          }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          video {
            /* Ensure smooth playback on mobile */
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
        }
      `}</style>
    </section>
  );
}
