"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Reveal blok sederhana: fade + naik saat masuk viewport. Untuk paragraf,
 * gambar, kartu, dll.
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Reveal heading baris-per-baris: tiap baris fade + naik dengan stagger.
 * TANPA mask overflow-hidden — jadi huruf berekor bawah (j/p/g) & garis aksen
 * tidak terpotong, dan teks SELALU berakhir terlihat (anti "headline hilang").
 * Tiap item `lines` boleh ReactNode (mis. mengandung <span> aksen).
 */
export function RevealLines({
  lines,
  className = "",
  delay = 0,
  as: Tag = "h2",
}: {
  lines: ReactNode[];
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <motion.span
          key={i}
          className="block"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE, delay: delay + i * 0.08 }}
        >
          {line}
        </motion.span>
      ))}
    </Tag>
  );
}
