"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BlurText from "./BlurText";

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M7 17L17 7M9 7h8v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M8 6.5c0-0.8 0.9-1.2 1.5-0.8l8.5 5.3c0.6 0.4 0.6 1.2 0 1.6l-8.5 5.3c-0.6 0.4-1.5 0-1.5-0.8V6.5z" />
    </svg>
  );
}

const NAV_LINKS = ["Home", "Voyages", "Worlds", "Innovation", "Plan Launch"];
const PARTNERS = ["Aeon", "Vela", "Apex", "Orbit", "Zeno"];

export default function HeroSection() {
  return (
    <section className="relative isolate h-screen min-h-screen min-h-100svh w-full overflow-hidden bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <video
        className="absolute inset-0 h-screen min-h-100svh w-full object-cover object-center"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/hero_bg.jpeg"
      >
        <source src="/videos/hero_bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/5" />
      <div className="cinematic-vignette absolute inset-0" />
      <div className="cinematic-scanlines absolute inset-0" />

      <header className="fixed top-0 left-0 z-50 w-full px-5 py-6 md:px-10">
        <nav className="mx-auto flex max-w-1260px items-center justify-between md:min-h-12">
          <div className="flex h-12 w-12 items-center justify-center">
            <Image
              src="/images/infinity.svg"
              alt="Infinity Studios logo"
              width={32}
              height={32}
              priority
            />
          </div>

          <div className="liquid-glass rounded-pill hidden items-center gap-6 px-3 py-2 md:flex">
            {NAV_LINKS.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium px-2 text-white/85 text-shadow-soft transition hover:text-white"
              >
                {item}
              </a>
            ))}

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black shadow-[0_8px_22px_rgba(0,0,0,0.22)]"
            >
              Claim a Spot
              <ArrowUpRightIcon />
            </button>
          </div>
        </nav>
      </header>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-24 text-center md:pb-20">
        <div className="liquid-glass mt-20 inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs text-white/90 md:mt-16 md:text-sm">
          <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold tracking-wide text-black md:text-xs">
            New
          </span>
          <span className="font-light text-shadow-soft">
            Maiden Crewed Voyage to Mars Arrives 2026
          </span>
        </div>

        <BlurText
          text="Venture Past Our Sky Across the Universe"
          className="mt-8 max-w-2xl text-balance font-display text-6xl leading-[0.8] tracking-[-4px] text-white italic drop-shadow-[0_16px_26px_rgba(0,0,0,0.42)] md:text-7xl lg:text-[5.5rem]"
        />

        <motion.p
          className="mt-7 max-w-2xl text-shadow-soft text-sm leading-tight font-light text-white/92 drop-shadow-[0_8px_24px_rgba(0,0,0,0.24)] md:text-base"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough engineering bring deep-space exploration within reach, secure and extraordinary.
        </motion.p>

        <motion.div
          className="mt-8 flex items-center gap-7"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
        >
          <button
            type="button"
            className="liquid-glass-strong text-shadow-soft inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white"
          >
            Start Your Voyage
            <ArrowUpRightIcon />
          </button>

          <button
            type="button"
            className="text-shadow-soft inline-flex items-center gap-2 text-sm font-medium text-white/95 transition hover:text-white"
          >
            <PlayIcon />
            View Liftoff
          </button>
        </motion.div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 z-10 px-6 pb-6 md:px-10 md:pb-7">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 text-center">
          <span className="liquid-glass cinematic rounded-pill text-shadow-soft px-4 py-2 text-[11px] font-medium tracking-normal text-white/85 md:text-xs">
            Collaborating with top aerospace pioneers globally
          </span>

          <div className="h-px w-full bg-linear-to-r from-white/0 via-white/35 to-white/0" />

          <div className="text-shadow-soft flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-[2.1rem] leading-none tracking-tight text-white/78 md:text-[2.5rem]">
          {PARTNERS.map((partner) => (
            <span key={partner} className="font-display italic">
              {partner}
            </span>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}