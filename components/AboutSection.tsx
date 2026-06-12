"use client";

import { motion } from "framer-motion";
import { skills, stats } from "@/lib/data";
import Logo from "@/components/Logo";
import HoloBackground from "@/components/HoloBackground";

export default function AboutSection() {
  return (
    <section id="tentang" className="relative py-32" style={{ background: "#0a0a0a" }}>
      <HoloBackground />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        {/* Kolom kiri: avatar + stats */}
        <div>
          <div className="relative mx-auto h-[200px] w-[200px]">
            {/* Ring berputar */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-accent/20 border-t-accent"
            />
            {/* Avatar */}
            <div
              className="absolute inset-2 flex items-center justify-center rounded-full border-2 border-accent/30"
              style={{ background: "linear-gradient(135deg, #1a0000, #3b0000)" }}
            >
              <Logo className="w-28" />
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-accent/10 bg-surface p-4 text-center"
              >
                <p className="font-heading text-2xl font-extrabold text-accent">{s.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-zinc-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom kanan: bio + skills */}
        <div>
          <p className="text-[11px] font-medium uppercase tracking-widest text-accent">
            ✦ Tentang kami
          </p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold text-white md:text-5xl">
            Kami Siap
            <br />
            Membantu UMKM
          </h2>

          <div className="mt-6 space-y-4 text-zinc-400">
            <p>
              Kami tim web developer dan UI/UX designer yang fokus membantu UMKM Indonesia
              berkembang secara digital. Kami percaya website yang bagus bukan hanya soal estetika —
              tapi soal bagaimana ia bekerja untuk bisnis Anda.
            </p>
            <p>
              Dengan pendekatan design-first, kami memastikan setiap proyek tidak hanya indah di
              mata, tapi juga intuitif bagi pengguna dan menghasilkan konversi nyata bagi pemilik
              bisnis.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {skills.map((s, i) => (
              <div key={s.name}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="text-zinc-300">{s.name}</span>
                  <span className="text-zinc-500">{s.level}%</span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-surface-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: i * 0.08, ease: "easeOut" }}
                    className="h-full rounded-full bg-accent"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
