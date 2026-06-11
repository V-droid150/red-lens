"use client";

import { motion } from "framer-motion";
import BrowserMockup from "./BrowserMockup";

// 3 browser mockup yang berputar 3D sebagai background hero.
type Item = {
  pos: React.CSSProperties;
  scale: number;
  rotateX: number;
  duration: number;
  reverse?: boolean;
  opacity: number;
};

const ITEMS: Item[] = [
  { pos: { left: "1%", top: "24%" }, scale: 0.72, rotateX: 10, duration: 22, opacity: 0.3 },
  {
    pos: { left: "50%", top: "30%", transform: "translateX(-50%)" },
    scale: 1.05,
    rotateX: 4,
    duration: 18,
    reverse: true,
    opacity: 0.42,
  },
  { pos: { right: "1%", top: "20%" }, scale: 0.78, rotateX: -8, duration: 26, opacity: 0.28 },
];

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {ITEMS.map((it, i) => (
        <div key={i} className="absolute" style={it.pos}>
          <div style={{ perspective: "1100px" }}>
            <motion.div
              style={{
                rotateX: it.rotateX,
                scale: it.scale,
                opacity: it.opacity,
                transformStyle: "preserve-3d",
              }}
              animate={{ rotateY: it.reverse ? [360, 0] : [0, 360] }}
              transition={{ duration: it.duration, repeat: Infinity, ease: "linear" }}
            >
              <BrowserMockup />
            </motion.div>
          </div>
        </div>
      ))}

      {/* Vignette agar teks tetap terbaca di atas mockup */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(8,8,8,0.55) 0%, rgba(8,8,8,0.82) 60%, #080808 100%)",
        }}
      />
    </div>
  );
}
