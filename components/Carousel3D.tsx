"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "Kopi Nusantara",
    category: "Web Page",
    image: "/projects/kopi-nusantara.jpg",
    color: "#3b1a08",
    accent: "#c2410c",
    url: "https://coffeeshop-website-cyan.vercel.app/",
  },
  {
    id: 2,
    title: "JALAR",
    category: "Landing Page",
    image: "/projects/jalar.png",
    color: "#1a0500",
    accent: "#f97316",
    url: "https://jalar.vercel.app",
  },
  {
    id: 3,
    title: "Project Ketiga",
    category: "UI/UX Design",
    image: "",
    color: "#1a0a2e",
    accent: "#a855f7",
    url: "#",
  },
  {
    id: 4,
    title: "Project Keempat",
    category: "Landing Page",
    image: "",
    color: "#0a2818",
    accent: "#22c55e",
    url: "#",
  },
  {
    id: 5,
    title: "Project Kelima",
    category: "Web App",
    image: "",
    color: "#1a1008",
    accent: "#f59e0b",
    url: "#",
  },
];

const TOTAL = cards.length;
const ANGLE_PER = 360 / TOTAL;

export default function Carousel3D({ showDots = true }: { showDots?: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobile, setMobile] = useState(false);
  const pausedRef = useRef(false);
  const speedRef = useRef(0.3);
  const rafRef = useRef<number>();
  const rotationRef = useRef(0);
  const sceneRef = useRef<HTMLDivElement>(null);

  // Konfigurasi responsif
  const cfg = mobile
    ? { perspective: 800, radius: 250, w: 200, h: 130, speed: 0.2, height: 340 }
    : { perspective: 1200, radius: 380, w: 280, h: 180, speed: 0.3, height: 420 };
  speedRef.current = cfg.speed;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Auto-rotate (berhenti saat hover) — gerakkan via ref agar TIDAK re-render tiap frame
  useEffect(() => {
    const animate = () => {
      if (!pausedRef.current) {
        rotationRef.current -= speedRef.current;
        if (sceneRef.current) {
          sceneRef.current.style.transform = `translate(-50%, -50%) rotateY(${rotationRef.current}deg)`;
        }
        // Re-render hanya saat card terdepan berganti (setState bail-out kalau sama)
        const norm = ((-rotationRef.current % 360) + 360) % 360;
        const idx = Math.round(norm / ANGLE_PER) % TOTAL;
        setActiveIndex((prev) => (prev === idx ? prev : idx));
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const goToCard = (index: number) => {
    rotationRef.current = -(index * ANGLE_PER);
    if (sceneRef.current) {
      sceneRef.current.style.transform = `translate(-50%, -50%) rotateY(${rotationRef.current}deg)`;
    }
    setActiveIndex(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center"
    >
      {/* Wrapper 3D */}
      <div
        className="relative w-full"
        style={{ height: cfg.height, perspective: cfg.perspective, perspectiveOrigin: "50% 50%" }}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
      >
        {/* Glow di bawah carousel */}
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "340px",
            height: "48px",
            background: "radial-gradient(ellipse, rgba(220,38,38,0.32) 0%, transparent 70%)",
            filter: "blur(22px)",
            pointerEvents: "none",
          }}
        />

        {/* Scene */}
        <div
          ref={sceneRef}
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            width: cfg.w,
            height: cfg.h,
            transformStyle: "preserve-3d",
            transform: `translate(-50%, -50%) rotateY(${rotationRef.current}deg)`,
          }}
        >
          {cards.map((card, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={card.id}
                onClick={() => goToCard(i)}
                className="absolute cursor-pointer overflow-hidden rounded-xl"
                style={{
                  width: cfg.w,
                  height: cfg.h,
                  transform: `rotateY(${i * ANGLE_PER}deg) translateZ(${cfg.radius}px)`,
                  background: card.color,
                  border: `1px solid ${card.accent}4d`,
                  boxShadow: isActive
                    ? `0 25px 70px rgba(0,0,0,0.6), 0 0 55px ${card.accent}66`
                    : "0 20px 60px rgba(0,0,0,0.5)",
                  filter: isActive ? "brightness(1.18)" : "brightness(0.85)",
                  transition: "filter 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                {/* Background: image atau pola grid */}
                {card.image ? (
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "top center",
                    }}
                  />
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                )}
                {/* Overlay gelap dari bawah */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent 60%)" }}
                />

                {/* Badge kategori */}
                <span
                  className="absolute left-3 top-3 rounded-full px-2 py-0.5 text-[10px] uppercase tracking-widest"
                  style={{ background: `${card.accent}26`, color: card.accent }}
                >
                  {card.category}
                </span>
                {/* Nama project */}
                <span className="absolute bottom-3 left-3 font-heading text-base font-bold text-white">
                  {card.title}
                </span>
                {/* Link icon — hanya untuk card dengan URL nyata (placeholder "#" disembunyikan) */}
                {card.url !== "#" && (
                  <a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-3 right-3"
                    style={{ color: card.accent, opacity: 0.6 }}
                    aria-label={`Buka ${card.title}`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Dot indikator */}
      {showDots && (
        <div className="mt-2 flex gap-2">
          {cards.map((card, i) => (
            <button
              key={card.id}
              onClick={() => goToCard(i)}
              aria-label={`Ke card ${i + 1}`}
              className="h-1.5 w-1.5 rounded-full transition-colors"
              style={{ background: i === activeIndex ? "#dc2626" : "#3f3f46" }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
