"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code2, Rocket } from "lucide-react";
import { process } from "@/lib/data";
import HoloBackground from "@/components/HoloBackground";
import { Reveal, RevealLines } from "@/components/Reveal";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  chat: MessageSquare,
  design: PenTool,
  code: Code2,
  launch: Rocket,
};

export default function ProcessSection() {
  return (
    <section id="proses" className="relative py-24 md:py-36">
      <HoloBackground flip />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
                ✦ Cara Kerja
              </p>
            </Reveal>
            <RevealLines
              as="h2"
              className="mt-4 font-heading text-3xl font-extrabold uppercase leading-[1] tracking-tight text-white md:text-5xl"
              lines={["Proses yang", "Jelas & Mudah"]}
            />
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400 md:text-right">
              Dari obrolan pertama sampai website tayang — Anda tahu persis setiap
              tahapannya. Tanpa istilah teknis yang membingungkan.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-4 md:gap-6">
          {/* Garis penghubung antar langkah (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent md:block" />

          {process.map((step, i) => {
            const Icon = ICONS[step.icon] ?? MessageSquare;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-4 md:flex-col md:items-start">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-surface">
                    <Icon className="h-6 w-6 text-accent" />
                  </span>
                  <span className="font-heading text-4xl font-extrabold text-white/10 md:mt-5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
