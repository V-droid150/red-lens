"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Carousel3D from "./Carousel3D";
import Blob from "./Blob";
import Marquee from "./Marquee";
import Magnetic from "./Magnetic";
import Typewriter from "./Typewriter";
import { RevealLines } from "./Reveal";
import { scrollToSection } from "./SmoothScroll";

const TECH = ["Next.js", "React", "TypeScript", "Tailwind", "Figma"];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* Latar: blob organik + carousel 3D (di-adapt jadi background sinematik) */}
      <Blob className="left-1/2 top-[18%] -translate-x-1/2" size={620} opacity={0.4} />
      <Blob className="right-[6%] bottom-[12%]" size={360} opacity={0.25} />

      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-full max-w-5xl opacity-60">
          <Carousel3D showDots={false} />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, rgba(8,8,8,0) 0%, rgba(8,8,8,0.45) 62%, rgba(8,8,8,0.85) 100%)",
          }}
        />
      </div>

      {/* Konten utama */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pt-24 text-center sm:px-8 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-widest text-zinc-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Tersedia untuk proyek freelance
          </span>
        </motion.div>

        <RevealLines
          as="h1"
          delay={0.25}
          className="mt-5 font-heading text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-white sm:mt-7 sm:text-5xl md:text-6xl lg:text-7xl"
          lines={[
            "We Build",
            "Websites",
            <span key="l3">
              That{" "}
              <span className="relative inline-block text-accent">
                Work
                <svg
                  className="absolute -bottom-1 left-0 w-full"
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
              .
            </span>,
          ]}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mx-auto mt-6 max-w-xl text-base text-zinc-400 sm:text-lg"
        >
          <Typewriter
            text="Solusi digital untuk UMKM Indonesia yang ingin tampil serius di internet."
            startDelay={1100}
            speed={38}
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-9 sm:gap-4"
        >
          <Magnetic>
            <button
              onClick={() => scrollToSection("karya")}
              className="rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white transition hover:brightness-110"
            >
              Lihat Project
            </button>
          </Magnetic>
          <Magnetic>
            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-white transition hover:border-accent hover:text-accent"
            >
              Diskusi Project
            </button>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-6 flex flex-wrap justify-center gap-2 sm:mt-8"
        >
          {TECH.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-500 backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection("layanan")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        aria-label="Scroll ke bawah"
        className="relative z-10 mx-auto mb-3 hidden items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-zinc-500 transition hover:text-accent sm:flex"
      >
        <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
        Scroll
      </motion.button>

      {/* Marquee bawah */}
      <div className="relative z-10 border-y border-white/10 bg-background/40 py-4 backdrop-blur-sm">
        <Marquee items={["Web Design", "Development", "UI / UX", "Branding", "UMKM Indonesia"]} speed={32} />
      </div>
    </section>
  );
}
