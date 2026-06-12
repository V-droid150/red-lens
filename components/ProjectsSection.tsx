"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import HoloBackground from "@/components/HoloBackground";

export default function ProjectsSection() {
  return (
    <section id="karya" className="relative py-20 md:py-32">
      <HoloBackground flip />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-widest text-accent">
            ✦ Portofolio
          </p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold text-white md:text-5xl">
            Our Projects
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group overflow-hidden rounded-2xl border border-accent/[0.08] bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/25 hover:shadow-[0_20px_60px_rgba(220,38,38,0.1)]"
            >
              {/* Preview area */}
              <div
                className="relative flex h-60 items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${p.color}, #111)` }}
              >
                <div className="w-[86%] overflow-hidden rounded-lg border border-white/10 shadow-2xl">
                  <div className="flex h-6 items-center gap-1.5 px-3" style={{ background: "#181818" }}>
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                  </div>
                  <div className="relative h-44 overflow-hidden" style={{ background: "#0a0a0a" }}>
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={`Tampilan ${p.title}`}
                        fill
                        sizes="(max-width: 768px) 90vw, 45vw"
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span
                          className="font-heading text-lg font-bold"
                          style={{ color: p.accentColor }}
                        >
                          {p.title}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
                  style={{ background: "linear-gradient(to top, #111, transparent)" }}
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-medium"
                  style={{ background: `${p.accentColor}1a`, color: p.accentColor }}
                >
                  {p.category}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-zinc-800 bg-surface-2 px-2 py-0.5 text-xs text-zinc-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-6">
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent transition hover:underline"
                  >
                    Lihat Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link
                    href={`/projects/${p.id}`}
                    className="text-sm text-zinc-400 transition hover:text-white"
                  >
                    Case Study →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
