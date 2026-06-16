"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import HoloBackground from "@/components/HoloBackground";
import { Reveal, RevealLines } from "@/components/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ProjectsSection() {
  return (
    <section id="karya" className="relative py-24 md:py-36">
      <HoloBackground flip />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
                ✦ Portofolio
              </p>
            </Reveal>
            <RevealLines
              as="h2"
              className="mt-4 font-heading text-3xl font-extrabold uppercase leading-[1] tracking-tight text-white md:text-5xl"
              lines={["Karya", "Terpilih"]}
            />
          </div>
          <Reveal delay={0.1}>
            <p className="text-sm text-zinc-500 md:text-right">
              {String(projects.length).padStart(2, "0")} proyek nyata — live & bisa diakses.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              className="group"
            >
              {/* Preview image dengan zoom saat hover */}
              <Link
                href={`/projects/${p.id}`}
                data-cursor
                className="relative block aspect-[4/3] overflow-hidden rounded-3xl border border-white/10"
                style={{ background: `linear-gradient(135deg, ${p.color}, #0a0a0a)` }}
              >
                {p.image && (
                  <Image
                    src={p.image}
                    alt={`Tampilan ${p.title}`}
                    fill
                    sizes="(max-width: 768px) 92vw, 46vw"
                    className="object-cover object-top transition-transform duration-[800ms] ease-out group-hover:scale-105"
                  />
                )}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65), transparent 55%)" }}
                />
                {/* Badge index */}
                <span className="absolute left-4 top-4 font-heading text-sm font-bold text-white/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Tombol panah muncul saat hover */}
                <span className="absolute right-4 top-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-accent opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5 text-white" />
                </span>
              </Link>

              {/* Info */}
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">{p.category}</p>
                </div>
                <span
                  className="mt-1 shrink-0 rounded-full px-3 py-1 text-xs font-medium"
                  style={{ background: `${p.accentColor}1a`, color: p.accentColor }}
                >
                  {p.stack[0]}
                </span>
              </div>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-500">
                {p.description}
              </p>

              <div className="mt-5 flex items-center gap-6">
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-1 text-sm font-medium text-accent"
                >
                  Lihat Demo <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link
                  href={`/projects/${p.id}`}
                  className="text-sm text-zinc-400 transition hover:text-white"
                >
                  Case Study →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
