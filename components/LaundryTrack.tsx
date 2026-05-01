"use client";
import { useEffect, useState, useRef } from "react";
import {
  Truck,
  Factory,
  Droplets,
  Wind,
  CheckCircle,
  Crown,
  Gauge,
  Shield,
  Leaf,
  Zap,
  Gem,
  MapPin,
  Package,
  Award,
  CircleCheckBig,
  Sparkles,
} from "lucide-react";

export default function LaundryTrack() {
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const stages = [
    {
      name: "Pickup",
      icon: Truck,
      color: "#3b82f6",
      description: "Professional collection",
      time: "5 min",
    },
    {
      name: "Washing",
      icon: Droplets,
      color: "#06b6d4",
      description: "Precision treatment",
      time: "30 min",
    },
    {
      name: "Drying",
      icon: Wind,
      color: "#10b981",
      description: "Optimal conditioning",
      time: "20 min",
    },
    {
      name: "Finishing",
      icon: Sparkles,
      color: "#f59e0b",
      description: "Expert curation",
      time: "15 min",
    },
    {
      name: "Delivery",
      icon: Package,
      color: "#8b5cf6",
      description: "White glove service",
      time: "30 min",
    },
  ];


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isAnimating) {
          setIsAnimating(true);
          let progressValue = 0;
          const interval = setInterval(() => {
            progressValue += 1.2;
            setProgress(Math.min(progressValue, 100));
            setCurrentStage(
              Math.floor((progressValue / 100) * (stages.length - 1)),
            );

            if (progressValue >= 100) {
              clearInterval(interval);
              setTimeout(() => {
                setProgress(0);
                setCurrentStage(0);
                setIsAnimating(false);
              }, 3000);
            }
          }, 50);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isAnimating, stages.length]);

  return (
    <div
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
      }}>
      {/* Atmospheric Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-4 md:mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest">
              Live Tracking
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Track Your Laundry
            </span>
          </h2>

          <p className="text-sm md:text-lg text-slate-300 max-w-2xl mx-auto">
            Real-time visibility from pickup to delivery
          </p>
        </div>

        {/* Main Tracking Section - FIXED CAR */}
        <div className="relative mb-12 md:mb-16">
          <div
            className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/30 rounded-2xl md:rounded-3xl p-6 md:p-10 border border-slate-700/50 backdrop-blur-xl overflow-hidden"
            style={{
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              minHeight: "320px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}>
            {/* Animated Road/Path Background */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Moving road lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ minHeight: "320px" }}>
                <defs>
                  <linearGradient
                    id="roadGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Animated flowing path - horizontal */}
                {[0, 1, 2, 3, 4].map((idx) => (
                  <g key={idx}>
                    {/* Road segments that flow */}
                    <rect
                      x={`${(progress * 2 + idx * 30) % 150}%`}
                      y="45%"
                      width="30%"
                      height="3"
                      fill="url(#roadGrad)"
                      style={{
                        opacity: 0.6,
                        filter: `blur(${idx * 0.3}px)`,
                      }}
                    />

                    {/* Dashed road markers */}
                    <line
                      x1={`${(progress * 2.5 + idx * 25) % 150}%`}
                      y1="50%"
                      x2={`${(progress * 2.5 + idx * 25 + 8) % 150}%`}
                      y2="50%"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                      opacity="0.3"
                    />
                  </g>
                ))}

                {/* Wind/Flow particles from left */}
                {[0, 1, 2, 3, 4, 5].map((idx) => (
                  <circle
                    key={`wind-left-${idx}`}
                    cx={`${(progress * 3 + idx * 20) % 120}%`}
                    cy={`${30 + Math.sin((progress + idx) * 0.1) * 8}%`}
                    r="1.5"
                    fill="#06b6d4"
                    opacity={0.4 - (progress % 100) / 250}
                  />
                ))}

                {/* Wind/Flow particles from right */}
                {[0, 1, 2, 3, 4, 5].map((idx) => (
                  <circle
                    key={`wind-right-${idx}`}
                    cx={`${100 - ((progress * 3 + idx * 20) % 120)}%`}
                    cy={`${70 + Math.sin((progress + idx) * 0.1) * 8}%`}
                    r="1.5"
                    fill="#06b6d4"
                    opacity={0.4 - (progress % 100) / 250}
                  />
                ))}
              </svg>

              {/* Glow overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
            </div>

            {/* Start Location */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 px-3 md:px-6">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-500/40 to-blue-600/20 border border-blue-400/50 flex items-center justify-center backdrop-blur-sm">
                  <MapPin className="text-blue-300" size={20} />
                </div>
                <div className="text-center text-xs md:text-sm">
                  <p className="text-blue-300 font-semibold">Your Home</p>
                </div>
              </div>
            </div>

            {/* STATIONARY CAR - CENTER */}
            <div className="relative z-30 flex flex-col items-center gap-3 md:gap-4">
              {/* Status Badge */}
              <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-slate-900/90 border border-blue-500/40 backdrop-blur-md whitespace-nowrap">
                <span className="text-xs font-semibold text-blue-300">
                  {currentStage === 0
                    ? "🚀 Dispatching"
                    : currentStage === 4
                      ? "🎯 Final Delivery"
                      : "✨ In Transit"}
                </span>
              </div>

              {/* Van - FIXED POSITION */}
              <div className="relative group">
                {/* Van shadow */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 md:w-24 h-2 bg-black/50 rounded-full blur-md"></div>

                {/* Van body with subtle float animation */}
                <div style={{ animation: "vanFloat 2s ease-in-out infinite" }}>
                  <div className="flex items-end gap-0.5">
                    {/* Cabin */}
                    <div className="relative">
                      <div className="w-10 h-8 md:w-12 md:h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-tl-lg rounded-tr-sm rounded-bl-lg rounded-br-sm"></div>
                      <div className="absolute top-1 left-1 w-5 h-3 md:w-6 md:h-4 bg-cyan-300/30 rounded-tl-md rounded-tr-sm"></div>
                      <div className="absolute -right-0.5 top-3 md:top-4 w-1 h-1 md:w-1.5 md:h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
                    </div>

                    {/* Cargo box */}
                    <div className="relative">
                      <div className="w-14 h-10 md:w-16 md:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-tr-lg rounded-br-lg relative overflow-hidden border-l border-blue-400/30">
                        {/* Package indicators */}
                        <div className="absolute inset-0 flex items-center justify-center gap-1 px-2">
                          {[0, 1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white/40 rounded-full animate-bounce"
                              style={{ animationDelay: `${i * 0.15}s` }}></div>
                          ))}
                        </div>
                      </div>
                      <div className="absolute -right-0.5 top-1 md:top-2 w-0.5 h-1 md:w-1 md:h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                    </div>

                    {/* Wheels */}
                    <div className="absolute -bottom-2 left-2 w-2.5 h-2.5 md:w-3 md:h-3 bg-slate-900 rounded-full border border-slate-600"></div>
                    <div className="absolute -bottom-2 right-1 md:right-2 w-2.5 h-2.5 md:w-3 md:h-3 bg-slate-900 rounded-full border border-slate-600"></div>
                  </div>

                  {/* Motion lines around car */}
                  <div className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 flex gap-1 md:gap-2">
                    <div className="w-0.5 h-0.5 bg-blue-400/60 rounded-full animate-ping"></div>
                    <div
                      className="w-0.5 h-0.5 bg-blue-400/40 rounded-full animate-ping"
                      style={{ animationDelay: "0.1s" }}></div>
                    <div
                      className="w-0.5 h-0.5 bg-blue-400/20 rounded-full animate-ping"
                      style={{ animationDelay: "0.2s" }}></div>
                  </div>
                  <div className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 flex gap-1 md:gap-2 flex-row-reverse">
                    <div className="w-0.5 h-0.5 bg-cyan-400/60 rounded-full animate-ping"></div>
                    <div
                      className="w-0.5 h-0.5 bg-cyan-400/40 rounded-full animate-ping"
                      style={{ animationDelay: "0.1s" }}></div>
                    <div
                      className="w-0.5 h-0.5 bg-cyan-400/20 rounded-full animate-ping"
                      style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>

              {/* Progress percentage */}
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  {Math.floor(progress)}%
                </p>
                <p className="text-xs md:text-sm text-slate-400 mt-1">
                  {progress < 100
                    ? `${Math.max(0, Math.floor((100 - progress) / 1.5))} min`
                    : "Complete!"}
                </p>
              </div>
            </div>

            {/* End Location */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 px-3 md:px-6">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-purple-500/40 to-purple-600/20 border border-purple-400/50 flex items-center justify-center backdrop-blur-sm">
                  <Factory className="text-purple-300" size={20} />
                </div>
                <div className="text-center text-xs md:text-sm">
                  <p className="text-purple-300 font-semibold">Facility</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Steps - Mobile Optimized */}
        <div className="mb-12 md:mb-16 px-1">
          <div className="grid grid-cols-5 gap-2 md:gap-4">
            {stages.map((stage, idx) => (
              <div key={idx} className="relative">
                <div
                  className={`text-center transition-all duration-500 ${
                    currentStage >= idx ? "opacity-100" : "opacity-50"
                  }`}>
                  {/* Step indicator */}
                  <div
                    className="relative w-12 h-12 md:w-14 md:h-14 mx-auto rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-300 mb-2 md:mb-3"
                    style={{
                      background:
                        currentStage >= idx
                          ? `linear-gradient(135deg, ${stage.color}33, ${stage.color}11)`
                          : "rgba(100,116,139,0.1)",
                      border:
                        currentStage >= idx
                          ? `2px solid ${stage.color}`
                          : "1px solid rgba(148,163,184,0.3)",
                      boxShadow:
                        currentStage >= idx
                          ? `0 0 15px ${stage.color}40`
                          : "none",
                    }}>
                    {currentStage > idx ? (
                      <CircleCheckBig size={18} className="text-emerald-400" />
                    ) : currentStage === idx ? (
                      <div className="relative">
                        <stage.icon size={18} style={{ color: stage.color }} />
                        <div
                          className="absolute -inset-2 rounded-full animate-pulse"
                          style={{
                            boxShadow: `0 0 12px ${stage.color}40`,
                          }}></div>
                      </div>
                    ) : (
                      <stage.icon size={18} className="text-slate-500" />
                    )}
                  </div>

                  {/* Step name */}
                  <h4 className="text-white text-xs md:text-sm font-semibold mb-0.5">
                    {stage.name}
                  </h4>

                  {/* Time on active step */}
                  {currentStage === idx && (
                    <p className="text-blue-400 text-xs font-semibold">
                      {stage.time}
                    </p>
                  )}
                </div>

                {/* Connector line */}
                {idx < stages.length - 1 && (
                  <div
                    className="absolute top-5 md:top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-0.5 transition-all duration-700"
                    style={{
                      background:
                        currentStage > idx
                          ? `linear-gradient(90deg, ${stages[idx].color}, ${stages[idx + 1].color})`
                          : "rgba(100,116,139,0.2)",
                    }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes vanFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </div>
  );
}
