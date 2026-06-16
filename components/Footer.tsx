"use client";

import { InstagramIcon, TiktokIcon, WhatsappIcon, LinkedinIcon } from "@/components/BrandIcons";
import Logo from "@/components/Logo";
import HoloBackground from "@/components/HoloBackground";
import Marquee from "@/components/Marquee";
import Magnetic from "@/components/Magnetic";
import { scrollToSection } from "@/components/SmoothScroll";

const NAV = [
  { label: "Layanan", id: "layanan" },
  { label: "Proses", id: "proses" },
  { label: "Project", id: "karya" },
  { label: "Tentang", id: "tentang" },
  { label: "FAQ", id: "faq" },
  { label: "Kontak", id: "contact" },
];

const SOCIALS = [
  { Icon: InstagramIcon, href: "https://www.instagram.com/kevinkie_/", label: "Instagram" },
  { Icon: TiktokIcon, href: "#", label: "TikTok" },
  { Icon: WhatsappIcon, href: "https://wa.me/6282113515619", label: "WhatsApp" },
  { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-accent/10 bg-background">
      <HoloBackground />

      {/* Marquee CTA */}
      <button
        onClick={() => scrollToSection("contact")}
        className="relative z-10 block w-full border-b border-white/10 py-8 text-left"
        aria-label="Mari bekerja sama"
      >
        <Marquee
          items={["Mari Bekerja Sama", "Let's Build Something", "Hubungi Saya"]}
          speed={26}
        />
      </button>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-2"
              aria-label="Red Lens"
            >
              <Logo className="h-7 w-14" />
              <span className="font-heading text-xl font-bold text-white">Red Lens</span>
            </button>
            <p className="mt-4 max-w-xs text-sm text-zinc-500">
              Your website started here. Web developer &amp; UI/UX designer untuk UMKM Indonesia.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 md:items-center">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollToSection(n.id)}
                className="link-underline text-left text-sm text-zinc-400 transition hover:text-white"
              >
                {n.label}
              </button>
            ))}
          </div>

          <div className="flex gap-4 md:justify-end">
            {SOCIALS.map(({ Icon, href, label }) => (
              <Magnetic key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:border-accent hover:text-accent"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        {/* Wordmark raksasa */}
        <div className="mt-14 select-none border-t border-white/10 pt-10">
          <p className="text-center font-heading text-[13vw] font-extrabold uppercase leading-none tracking-tighter text-white/[0.04] md:text-[8rem]">
            Red Lens
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-600">
          © 2026 Red Lens. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
