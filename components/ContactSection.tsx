"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import { WhatsappIcon, GithubIcon } from "@/components/BrandIcons";

type FormValues = {
  name: string;
  email: string;
  service: string;
  message: string;
};

const CONTACTS = [
  { Icon: WhatsappIcon, label: "WhatsApp", value: "+62 812-3456-7890", href: "https://wa.me/6281234567890" },
  { Icon: Mail, label: "Email", value: "kiekevin27@gmail.com", href: "mailto:kiekevin27@gmail.com" },
  { Icon: GithubIcon, label: "GitHub", value: "github.com/V-droid150", href: "https://github.com/V-droid150" },
];

const inputClass =
  "w-full rounded-xl border border-accent/15 bg-surface px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit() {
    setLoading(true);
    // Simulasi pengiriman (form belum benar-benar mengirim email).
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
    reset();
  }

  return (
    <section id="contact" className="relative py-32" style={{ background: "#0a0a0a" }}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-widest text-accent">
            ✦ Mulai proyek
          </p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold text-white md:text-5xl">
            Punya Ide?
            <br />
            Mari Wujudkan Bersama.
          </h2>
          <p className="mt-4 text-zinc-400">
            Ceritakan kebutuhan bisnis Anda dan saya akan balas dalam 1×24 jam.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          {/* Info kontak */}
          <div className="space-y-6">
            {CONTACTS.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-zinc-500">{label}</span>
                  <span className="block text-zinc-300 transition group-hover:text-white">{value}</span>
                </span>
              </a>
            ))}
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-center gap-3 rounded-xl border border-accent bg-accent/10 px-6 py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-accent" />
                <p className="text-zinc-200">
                  Pesan terkirim! Saya akan menghubungi Anda segera.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-sm text-accent hover:underline"
                >
                  Kirim pesan lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-zinc-400">Nama lengkap</label>
                  <input
                    {...register("name", { required: true })}
                    placeholder="Nama Anda"
                    className={inputClass}
                  />
                  {errors.name && <p className="mt-1 text-xs text-accent">Nama wajib diisi.</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-zinc-400">Email</label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="email@anda.com"
                    className={inputClass}
                  />
                  {errors.email && <p className="mt-1 text-xs text-accent">Email wajib diisi.</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-zinc-400">Jenis layanan</label>
                  <select {...register("service")} className={inputClass}>
                    <option>Landing Page</option>
                    <option>Web App</option>
                    <option>UI/UX Design</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-zinc-400">
                    Pesan / deskripsi proyek
                  </label>
                  <textarea
                    rows={4}
                    {...register("message", { required: true })}
                    placeholder="Ceritakan kebutuhan Anda..."
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-accent">Pesan wajib diisi.</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3 text-sm font-medium text-white transition hover:brightness-110 disabled:opacity-60"
                >
                  {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                  {loading ? "Mengirim..." : "Kirim Pesan →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
