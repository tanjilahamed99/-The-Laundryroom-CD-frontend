"use client";

import { useEffect, useState, useRef } from "react";

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function BubbleCursor() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const bubbleIdRef = useRef(0);

  const spawnBubble = (x: number, y: number) => {
    const newBubble: Bubble = {
      id: bubbleIdRef.current++,
      x,
      y,
      size: Math.random() * 15 + 8,
    };

    setBubbles((prev) => [...prev, newBubble]);

    // Remove bubble after animation
    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
    }, 1200);
  };

  const spawnMultipleBubbles = (x: number, y: number, count: number = 6) => {
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        spawnBubble(x, y);
      }, i * 40);
    }
  };

  useEffect(() => {
    // Handle mouse move (desktop)
    const handleMouseMove = (e: MouseEvent) => {
      spawnBubble(e.clientX, e.clientY);
    };

    // Handle mouse click (desktop)
    const handleClick = (e: MouseEvent) => {
      console.log("Click event fired at:", e.clientX, e.clientY);
      spawnMultipleBubbles(e.clientX, e.clientY, 8);
    };

    // Handle touch start (mobile tap)
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      spawnMultipleBubbles(touch.clientX, touch.clientY, 8);
    };

    // Handle touch move (mobile drag)
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      spawnBubble(touch.clientX, touch.clientY);
    };

    // Add all event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);
    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <>
      {/* Bubbles Container */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            transform: "translate(-50%, -50%)",
            animation: "floatUp 1.2s ease-out forwards",
          }}
        >
          <div 
            className="w-full h-full rounded-full backdrop-blur-sm"
            style={{
              background: "radial-gradient(circle at 30% 30%, rgba(100, 200, 255, 0.8), rgba(50, 150, 255, 0.4))",
              boxShadow: "0 0 15px rgba(100, 200, 255, 0.6)",
            }}
          />
        </div>
      ))}

      <style>{`
        @keyframes floatUp {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, calc(-50% - 80px)) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}