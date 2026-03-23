"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type LoadingScreenProps = {
  onComplete: () => void;
};

const WORDS = ["Imagine", "Design", "Create", "Inspire"];
const COUNTER_DURATION_MS = 3600;

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const onCompleteRef = useRef(onComplete);
  const completionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasScheduledCompleteRef = useRef(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev: number) => {
        if (prev >= WORDS.length - 1) {
          clearInterval(interval);
          return prev;
        }

        return prev + 1;
      });
    }, 900);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let rafId = 0;
    const start = performance.now();

    const update = (now: number) => {
      const elapsed = now - start;
      const next = Math.min((elapsed / COUNTER_DURATION_MS) * 100, 100);
      setProgress(next);

      if (elapsed < COUNTER_DURATION_MS) {
        rafId = requestAnimationFrame(update);
      }
    };

    rafId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    if (progress < 100 || hasScheduledCompleteRef.current) {
      return;
    }

    hasScheduledCompleteRef.current = true;
    completionTimeoutRef.current = setTimeout(() => {
      onCompleteRef.current();
    }, 400);

    return () => {
      if (completionTimeoutRef.current) {
        clearTimeout(completionTimeoutRef.current);
      }
    };
  }, [progress]);

  return (
    <motion.div
      className="fixed inset-0 z-9999 bg-bg"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <video
        className="absolute inset-0 h-full w-full scale-110 object-cover object-center blur-xl"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/hero_bg.jpeg"
      >
        <source src="/videos/hero_bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/55" />

      <motion.div
        className="absolute top-8 left-8 font-display italic semi-bold text-xs tracking-[0.3em] text-muted md:top-12 md:left-12 md:text-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Infinity Studio
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            className="font-display text-4xl italic text-text/80 md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <motion.div
        className="absolute right-8 bottom-8 font-display text-6xl tabular-nums text-text md:right-12 md:bottom-12 md:text-8xl lg:text-9xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {Math.round(progress).toString().padStart(3, "0")}
      </motion.div>

      <div className="absolute right-0 bottom-0 left-0">
        <div className="h-3px w-full bg-stroke/50">
          <motion.div
            className="h-full origin-left"
            style={{
              background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
              boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
