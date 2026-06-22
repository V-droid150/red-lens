"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import HoloBackground from "@/components/HoloBackground";
import { Reveal, RevealLines } from "@/components/Reveal";
import { scrollToSection } from "@/components/SmoothScroll";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-36">
      <HoloBackground flip />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        {/* Kiri: heading + ajakan */}
        <div>
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
              ✦ Pertanyaan Umum
            </p>
          </Reveal>
          <RevealLines
            as="h2"
            className="mt-4 font-heading text-3xl font-extrabold uppercase leading-[1] tracking-tight text-white md:text-5xl"
            lines={["Masih", "Ragu?"]}
          />
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-400">
              Beberapa hal yang sering ditanyakan calon klien. Tidak menemukan
              jawabannya?
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <button
              onClick={() => scrollToSection("contact")}
              className="link-underline mt-4 text-sm font-medium text-accent"
            >
              Tanya langsung ke saya →
            </button>
          </Reveal>
        </div>

        {/* Kanan: accordion */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  id={`faq-q-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                >
                  <span
                    className={`font-heading text-base font-bold transition-colors md:text-lg ${
                      isOpen ? "text-accent" : "text-white"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-accent" : "text-zinc-500"
                    }`}
                  >
                    <Plus className="h-5 w-5" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-a-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-8 text-sm leading-relaxed text-zinc-400">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
