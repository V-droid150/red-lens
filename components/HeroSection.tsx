"use client";

import { motion } from "framer-motion";
import GlowOrb from "./GlowOrb";
import Carousel3D from "./Carousel3D";
import HoloBackground from "./HoloBackground";

const TECH = ["Next.js", "React", "TypeScript", "Tailwind", "Figma"];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-28 text-center sm:px-8 md:py-32">
      <HoloBackground />
      <GlowOrb x="50%" y="-15%" size={700} opacity={0.06} />

      {/* Carousel 3D sebagai background di tengah */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-full max-w-4xl opacity-100">
          <Carousel3D showDots={false} />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, rgba(8,8,8,0) 0%, rgba(8,8,8,0.22) 70%, rgba(8,8,8,0.55) 100%)",
          }}
        />
      </div>

      {/* Teks di tengah */}
      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.div {...fade(0)}>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-widest text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Tersedia untuk proyek freelance
          </span>
        </motion.div>

        <motion.h1
          {...fade(0.1)}
          className="mt-6 font-heading text-4xl font-extrabold leading-[1.08] sm:text-5xl sm:leading-[1.05] md:text-7xl"
        >
          <span className="text-white">We Build Websites That </span>
          <span className="relative inline-block text-accent">
            Work
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M2 8C40 2 70 2 110 6s70 4 110 0 60-4 78-2"
                stroke="#dc2626"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="text-white">.</span>
        </motion.h1>

        <motion.p {...fade(0.2)} className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
          Solusi digital untuk UMKM Indonesia yang ingin tampil serius di internet.
        </motion.p>

        <motion.div {...fade(0.3)} className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => go("karya")}
            className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition hover:brightness-110"
          >
            See Project →
          </button>
          <button
            onClick={() => go("contact")}
            className="rounded-full border border-accent px-8 py-3 text-sm font-medium text-accent transition hover:bg-accent hover:text-white"
          >
            Diskusi Project
          </button>
        </motion.div>

        <motion.div {...fade(0.4)} className="mt-8 flex flex-wrap justify-center gap-2">
          {TECH.map((t) => (
            <span
              key={t}
              className="rounded-full border border-zinc-800 bg-surface px-3 py-1 text-xs text-zinc-500"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
