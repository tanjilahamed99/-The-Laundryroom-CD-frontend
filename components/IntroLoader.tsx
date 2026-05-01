"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function IntroLoader({ done }: any) {
  return (
    <AnimatePresence mode="wait">
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.06,
            filter: "blur(12px)",
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg,#0ea5e9 0%,#0284c7 45%,#ffffff 100%)",
          }}>
          {/* Glow */}
          <div className="absolute w-[420px] h-[420px] bg-sky-300/30 rounded-full blur-3xl -top-24 -left-24" />
          <div className="absolute w-[380px] h-[380px] bg-cyan-200/30 rounded-full blur-3xl bottom-[-120px] right-[-80px]" />

          {/* Bubbles */}
          <div className="bubble w-16 h-16 left-[18%] bottom-0" />
          <div className="bubble w-10 h-10 left-[72%] bottom-0" />
          <div className="bubble w-8 h-8 left-[55%] bottom-0" />
          <div className="bubble w-6 h-6 left-[40%] bottom-0" />

          <div className="relative z-10 text-center px-6">
            {/* Machine */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-40 h-40 mx-auto rounded-[28px] bg-white shadow-2xl flex items-center justify-center">
              <div className="w-28 h-28 rounded-full border-[10px] border-sky-500 border-dashed animate-spin" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-4xl md:text-5xl font-bold text-white">
              The Laundryroom CD
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.4 }}
              className="mt-3 text-white tracking-[4px] uppercase text-sm">
              Fresh • Fast • Reliable
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
