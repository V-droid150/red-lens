"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Budi Santoso",
    business: "Pemilik Kedai Kopi",
    quote:
      "Tampilan website kami berubah total. Pelanggan sering memuji betapa profesionalnya toko online kami sekarang.",
  },
  {
    name: "Sari Dewi",
    business: "Owner Butik Fashion",
    quote:
      "Prosesnya sangat mudah dan komunikatif. Website jadi dalam waktu singkat dan hasilnya melebihi ekspektasi.",
  },
  {
    name: "Ahmad Fauzi",
    business: "UMKM Kuliner",
    quote:
      "Dashboard yang dibuat sangat membantu saya memantau penjualan setiap hari. Simple tapi powerful.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export default function TestimonialsSection() {
  return (
    <section id="testimoni" className="relative py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-widest text-accent">
            ✦ Apa kata mereka
          </p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold text-white md:text-5xl">
            Kepercayaan Klien
            <br />
            Adalah Segalanya
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-accent/10 bg-surface p-7"
            >
              <span className="font-heading text-6xl font-extrabold leading-none text-accent opacity-30">
                &ldquo;
              </span>
              <p className="-mt-4 text-sm italic leading-relaxed text-zinc-300">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 text-xs font-bold text-accent"
                  style={{ background: "#1a0000" }}
                >
                  {initials(t.name)}
                </span>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.business}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-zinc-700">* Testimonial ilustratif</p>
      </div>
    </section>
  );
}
