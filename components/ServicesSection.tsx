"use client";

import { motion } from "framer-motion";
import { LayoutTemplate, Code2, Check } from "lucide-react";
import { FigmaIcon } from "@/components/BrandIcons";
import { services } from "@/lib/data";
import HoloBackground from "@/components/HoloBackground";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  layout: LayoutTemplate,
  code: Code2,
  figma: FigmaIcon,
};

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function ServicesSection() {
  return (
    <section id="layanan" className="relative py-32" style={{ background: "#0a0a0a" }}>
      <HoloBackground />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-widest text-accent">
            ✦ Our offer
          </p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold text-white md:text-5xl">
            Our Service
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon] ?? LayoutTemplate;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-accent/10 bg-surface p-8 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-surface-2"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{s.description}</p>
                <ul className="mt-5 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                      <Check className="h-4 w-4 shrink-0 text-accent" strokeWidth={3} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => go("contact")}
                  className="mt-6 text-sm font-medium text-accent transition hover:underline"
                >
                  Diskusi Harga →
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
