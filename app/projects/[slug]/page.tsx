import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, projectDetails } from "@/lib/data";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = projects.find((p) => p.id === params.slug);
  return {
    title: project ? `${project.title} — Case Study | VinSite` : "Case Study",
  };
}

export default function CaseStudyPage({ params }: Params) {
  const project = projects.find((p) => p.id === params.slug);
  const detail = projectDetails[params.slug];
  if (!project || !detail) notFound();

  return (
    <main className="relative overflow-x-hidden">
      <Navbar />

      <div className="mx-auto max-w-4xl px-5 pb-24 pt-32 sm:px-8">
        {/* Hero */}
        <Link href="/#karya" className="text-sm text-zinc-500 transition hover:text-accent">
          ← Kembali ke Karya
        </Link>

        <span
          className="mt-6 inline-block rounded-full px-3 py-1 text-xs font-medium"
          style={{ background: `${project.accentColor}1a`, color: project.accentColor }}
        >
          {project.category}
        </span>

        <h1 className="mt-4 font-heading text-5xl font-extrabold text-white md:text-6xl">
          {project.title}
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition hover:brightness-110"
          >
            Lihat Demo Live ↗
          </a>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded border border-zinc-800 bg-surface px-2.5 py-1 text-xs text-zinc-500"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Preview banner */}
        <div
          className="mt-12 flex h-56 items-center justify-center rounded-2xl border border-white/5"
          style={{ background: `linear-gradient(135deg, ${project.color}, #111)` }}
        >
          <span className="font-heading text-3xl font-bold" style={{ color: project.accentColor }}>
            {project.title}
          </span>
        </div>

        {/* Gambaran Proyek */}
        <section className="mt-16">
          <h2 className="font-heading text-2xl font-bold text-white">Gambaran Proyek</h2>
          <p className="mt-4 leading-relaxed text-zinc-400">{detail.overview}</p>
        </section>

        {/* Yang Kami Kerjakan */}
        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-white">Yang Kami Kerjakan</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {detail.work.map((w) => (
              <li key={w} className="flex items-start gap-3 text-sm text-zinc-300">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Check className="h-3 w-3 text-accent" strokeWidth={3} />
                </span>
                {w}
              </li>
            ))}
          </ul>
        </section>

        {/* Teknologi */}
        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-white">Teknologi</h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {detail.stack.map((t) => (
              <div
                key={t}
                className="rounded-xl border border-accent/10 bg-surface px-4 py-3 text-center text-sm text-zinc-300"
              >
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* Bottom buttons */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-900 pt-8">
          <Link href="/#karya" className="text-sm text-zinc-400 transition hover:text-white">
            ← Kembali ke Karya
          </Link>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-accent px-6 py-2.5 text-sm font-medium text-accent transition hover:bg-accent hover:text-white"
          >
            Lihat Demo Live ↗
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
