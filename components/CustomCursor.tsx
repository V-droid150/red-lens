"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Kursor custom ala Lusion: titik kecil mengikuti mouse persis + cincin yang
 * "mengejar" dengan lerp halus. Membesar saat hover di atas link/tombol/
 * elemen ber-atribut [data-cursor]. Otomatis non-aktif di perangkat sentuh.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef(false);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { ...pos };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
    };

    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;
      if (ringRef.current) {
        const s = hoverRef.current ? 1.8 : 1;
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) scale(${s})`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const isInteractive = (t: EventTarget | null) =>
      t instanceof Element && !!t.closest('a, button, input, textarea, select, [data-cursor]');

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target)) hoverRef.current = true;
    };
    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target)) hoverRef.current = false;
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[90] hidden md:block"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}
    >
      <div
        ref={ringRef}
        className="absolute -ml-5 -mt-5 h-10 w-10 rounded-full border border-accent/70 transition-[width,height,background-color] duration-300"
        style={{ mixBlendMode: "difference" }}
      />
      <div
        ref={dotRef}
        className="absolute -ml-1 -mt-1 h-2 w-2 rounded-full bg-accent"
      />
    </div>
  );
}
