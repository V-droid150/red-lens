"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import { WhatsappIcon, InstagramIcon } from "@/components/BrandIcons";
import HoloBackground from "@/components/HoloBackground";
import Magnetic from "@/components/Magnetic";
import { Reveal, RevealLines } from "@/components/Reveal";

type FormValues = {
  name: string;
  email: string;
  service: string;
  message: string;
};

const CONTACTS = [
  { Icon: WhatsappIcon, label: "WhatsApp", value: "+62 821-1351-5619", href: "https://wa.me/6282113515619" },
  { Icon: Mail, label: "Email", value: "kiekevin27@gmail.com", href: "mailto:kiekevin27@gmail.com" },
  { Icon: InstagramIcon, label: "Instagram", value: "kevinkie_", href: "https://www.instagram.com/kevinkie_/" },
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
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(data: FormValues) {
    setLoading(true);
    setError(null);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setError("Form belum dikonfigurasi. Silakan hubungi via email.");
      setLoading(false);
      return;
    }
    try {
      // Web3Forms (plan gratis) hanya menerima request dari sisi client/browser.
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Red Lens — Proyek baru dari ${data.name} (${data.service})`,
          from_name: "Red Lens Website",
          name: data.name,
          email: data.email,
          service: data.service,
          message: data.message,
        }),
      });
      const json = (await res.json()) as { success?: boolean; message?: string };
      if (!json.success) {
        throw new Error(json.message || "Gagal mengirim pesan. Coba lagi.");
      }
      setSent(true);
      reset();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Terjadi kesalahan. Coba lagi.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-36" style={{ background: "#0a0a0a" }}>
      <HoloBackground flip />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
              ✦ Mulai Proyek
            </p>
          </Reveal>
          <RevealLines
            as="h2"
            className="mt-4 font-heading text-3xl font-extrabold uppercase leading-[1] tracking-tight text-white md:text-5xl"
            lines={["Punya Ide?", "Mari Wujudkan."]}
          />
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-zinc-400">
              Ceritakan kebutuhan bisnis Anda dan saya akan balas dalam 1×24 jam.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-20">
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
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition group-hover:bg-accent/20">
                  <Icon className="h-5 w-5 text-accent" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-zinc-500">{label}</span>
                  <span className="block text-lg text-zinc-200 transition group-hover:text-white">
                    {value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-accent bg-accent/10 px-6 py-14 text-center">
                <CheckCircle2 className="h-12 w-12 text-accent" />
                <p className="text-zinc-200">Pesan terkirim! Saya akan menghubungi Anda segera.</p>
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
                    <option>Web Page</option>
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

                {error && (
                  <p className="rounded-lg border border-accent/40 bg-accent/10 px-4 py-2.5 text-sm text-accent">
                    {error}
                  </p>
                )}

                <Magnetic strength={0.2} className="w-full">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-sm font-medium text-white transition hover:brightness-110 disabled:opacity-60"
                  >
                    {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                    {loading ? "Mengirim..." : "Kirim Pesan →"}
                  </button>
                </Magnetic>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
