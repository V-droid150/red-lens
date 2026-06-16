"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";

/**
 * Intro/preloader ala Lusion: counter 00 → 100 di pojok, wordmark di tengah,
 * lalu panel hitam menggeser ke atas untuk membuka halaman. Mengunci scroll
 * selama berjalan. Hanya tampil sekali per sesi tab (sessionStorage).
 */
export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("rl_intro_seen")) {
      setSkip(true);
      setDone(true);
      return;
    }
    sessionStorage.setItem("rl_intro_seen", "1");
    document.body.style.overflow = "hidden";

    const start = performance.now();
    const duration = 1900;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      // ease-out biar angka melambat di akhir
      const eased = 1 - Math.pow(1 - p, 2);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 450);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  if (skip) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 40%, rgba(220,38,38,0.12) 0%, transparent 70%)",
            }}
          />

          {/* Wordmark tengah */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center gap-3"
          >
            <Logo className="h-8 w-16" />
            <span className="font-heading text-2xl font-bold tracking-tight text-white">
              Red Lens
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative mt-3 text-[11px] uppercase tracking-[0.3em] text-zinc-500"
          >
            We Build Websites That Work
          </motion.p>

          {/* Progress bar */}
          <div className="relative mt-8 h-px w-48 overflow-hidden bg-zinc-800">
            <div
              className="h-full bg-accent transition-[width] duration-100 ease-linear"
              style={{ width: `${count}%` }}
            />
          </div>

          {/* Counter pojok */}
          <div className="absolute bottom-8 right-6 font-heading text-6xl font-extrabold leading-none text-white sm:bottom-10 sm:right-10 sm:text-8xl">
            {String(count).padStart(3, "0")}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
