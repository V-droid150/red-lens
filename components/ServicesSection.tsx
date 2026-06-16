"use client";

import { motion } from "framer-motion";
import { LayoutTemplate, Code2, Check, ArrowUpRight } from "lucide-react";
import { FigmaIcon } from "@/components/BrandIcons";
import { services } from "@/lib/data";
import HoloBackground from "@/components/HoloBackground";
import { Reveal, RevealLines } from "@/components/Reveal";
import { scrollToSection } from "@/components/SmoothScroll";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  layout: LayoutTemplate,
  code: Code2,
  figma: FigmaIcon,
};

export default function ServicesSection() {
  return (
    <section id="layanan" className="relative py-24 md:py-36" style={{ background: "#0a0a0a" }}>
      <HoloBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
                ✦ Layanan
              </p>
            </Reveal>
            <RevealLines
              as="h2"
              className="mt-4 font-heading text-3xl font-extrabold uppercase leading-[1] tracking-tight text-white md:text-5xl"
              lines={["Yang Saya", "Kerjakan"]}
            />
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400 md:text-right">
              Dari halaman tunggal hingga aplikasi web penuh — dirancang dan dibangun
              untuk membuat bisnis Anda tampil serius.
            </p>
          </Reveal>
        </div>

        {/* Daftar layanan bernomor */}
        <div className="mt-16 border-t border-white/10">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon] ?? LayoutTemplate;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative grid grid-cols-1 gap-6 border-b border-white/10 py-10 transition-colors duration-300 hover:bg-white/[0.02] md:grid-cols-12 md:items-start md:gap-8"
              >
                {/* Nomor + ikon */}
                <div className="flex items-center gap-4 md:col-span-3">
                  <span className="font-heading text-2xl font-bold text-accent/60 transition group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 transition group-hover:bg-accent/20">
                    <Icon className="h-5 w-5 text-accent" />
                  </span>
                </div>

                {/* Judul */}
                <div className="md:col-span-4">
                  <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
                    {s.title}
                  </h3>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="link-underline mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent"
                  >
                    Diskusi Harga <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Deskripsi + fitur */}
                <div className="md:col-span-5">
                  <p className="text-sm leading-relaxed text-zinc-400">{s.description}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                        <Check className="h-4 w-4 shrink-0 text-accent" strokeWidth={3} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
