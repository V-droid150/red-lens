"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

// Satu instance Lenis dipakai bersama agar Navbar/Hero bisa memicu scroll halus
// ke section tertentu (lihat scrollToSection di bawah).
let lenisInstance: Lenis | null = null;

/** Scroll halus ke elemen ber-id (mis. "contact"), atau ke posisi angka. */
export function scrollToSection(target: string | number) {
  if (typeof target === "number") {
    lenisInstance?.scrollTo(target);
    return;
  }
  const selector = target.startsWith("#") ? target : `#${target}`;
  if (lenisInstance) {
    lenisInstance.scrollTo(selector, { offset: 0 });
  } else {
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
  }
}

/** Scroll halus ke paling atas. */
export function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    lenisInstance = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return <>{children}</>;
}
