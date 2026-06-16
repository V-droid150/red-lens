"use client";

import { useEffect, useState } from "react";
import { WhatsappIcon } from "@/components/BrandIcons";

const WA_NUMBER = "6282113515619";
const WA_TEXT = "Halo Red Lens, saya tertarik membuat website untuk usaha saya. Boleh diskusi?";
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;

/**
 * Tombol WhatsApp mengambang di pojok kanan-bawah. Muncul setelah pengguna
 * menggulir sedikit, dengan label yang melebar saat hover (desktop) dan pulse
 * ring untuk menarik perhatian. Hijau khas WhatsApp agar langsung dikenali.
 */
export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 350);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor
      aria-label="Chat via WhatsApp"
      className={`group fixed bottom-5 right-5 z-40 flex items-center gap-0 rounded-full border border-accent/40 bg-accent text-white shadow-[0_8px_30px_rgba(220,38,38,0.4)] transition-all duration-300 hover:gap-2 hover:pr-5 hover:brightness-110 sm:bottom-6 sm:right-6 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="relative flex h-14 w-14 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
        <WhatsappIcon className="relative h-7 w-7" />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 group-hover:max-w-[160px]">
        Chat via WhatsApp
      </span>
    </a>
  );
}
