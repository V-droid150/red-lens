"use client";

import { motion } from "framer-motion";

/**
 * Bentuk organik (blob) gradient merah yang melayang pelan — versi ringan dari
 * "fluid" WebGL Lusion. Dekoratif, pointer-events-none.
 *
 * PENTING (anti-lag, khususnya mobile): elemen ini di-blur, jadi animasinya
 * HANYA transform (translate/scale/rotate) → dikompositkan GPU tanpa repaint.
 * border-radius dibuat STATIS (tidak dianimasikan) supaya tidak memicu repaint
 * lapisan blur tiap frame.
 */
export default function Blob({
  className = "",
  size = 520,
  opacity = 0.5,
}: {
  className?: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
        borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
        background:
          "radial-gradient(circle at 35% 30%, rgba(248,113,113,0.55), rgba(220,38,38,0.35) 45%, rgba(127,29,29,0.0) 72%)",
        filter: "blur(28px)",
        willChange: "transform",
      }}
      animate={{
        scale: [1, 1.08, 0.96, 1],
        x: [0, 22, -16, 0],
        y: [0, -18, 14, 0],
        rotate: [0, 8, -6, 0],
      }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
