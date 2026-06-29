"use client";

import { MotionConfig } from "framer-motion";

/**
 * Membungkus seluruh app dengan MotionConfig agar SEMUA komponen framer-motion
 * (Reveal, RevealLines, entry animation kartu, dll) otomatis menghormati
 * preferensi sistem "reduce motion" tanpa perlu memanggil useReducedMotion()
 * di tiap komponen. Wrapper "use client" diperlukan karena MotionConfig memakai
 * React context dan tidak bisa diimpor langsung ke layout (Server Component).
 *
 * CATATAN: ini hanya memengaruhi komponen motion.*. Animasi berbasis RAF manual
 * (mis. Carousel3D) tetap harus cek useReducedMotion() sendiri.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
