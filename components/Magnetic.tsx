"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Membungkus elemen agar "tertarik" ke arah kursor saat di-hover (efek
 * magnetik ala Lusion). Non-aktif otomatis di perangkat sentuh (tak ada
 * mousemove). `strength` mengatur seberapa jauh elemen mengikuti.
 */
export default function Magnetic({
  children,
  strength = 0.35,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // mounted: render <span> netral di server & render pertama klien (konsisten,
  // tanpa hydration mismatch); efek magnetik baru diaktifkan setelah mount di
  // perangkat non-sentuh.
  const [mounted, setMounted] = useState(false);
  const [touch, setTouch] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.3 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  // Di perangkat sentuh efek magnetik dimatikan agar tombol tidak "bergeser
  // nyangkut" setelah di-tap.
  useEffect(() => {
    setMounted(true);
    setTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  if (!mounted || touch) {
    return <span className={`inline-block ${className}`}>{children}</span>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
