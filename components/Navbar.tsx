"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const NAV = [
  { label: "Layanan", id: "layanan" },
  { label: "Karya", id: "karya" },
  { label: "Tentang", id: "tentang" },
  { label: "Kontak", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-accent/10 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2"
          aria-label="Red Lens"
        >
          <Logo className="h-6 w-12" />
          <span className="font-heading text-lg font-bold text-white">Red Lens</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {n.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => go("contact")}
          className="hidden rounded-full border border-accent px-5 py-2 text-sm font-medium text-accent transition hover:bg-accent hover:text-white md:block"
        >
          Hubungi Saya
        </button>

        <button
          onClick={() => setOpen((o) => !o)}
          className="text-white md:hidden"
          aria-label="Buka menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-accent/10 bg-surface md:hidden">
          <div className="flex flex-col px-5 py-3">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="py-3 text-left text-zinc-300 transition hover:text-accent"
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={() => go("contact")}
              className="mt-2 rounded-full border border-accent px-5 py-2.5 text-sm font-medium text-accent"
            >
              Hubungi Saya
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
