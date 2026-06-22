"use client";

/**
 * Marquee teks berjalan tak terbatas (CSS-only, GPU-friendly). Track berisi
 * dua salinan identik lalu digeser -50% → loop mulus tanpa lompatan.
 * `reverse` membalik arah. Pause saat hover.
 */
// Didefinisikan di luar Marquee agar TIDAK jadi komponen baru tiap render
// (kalau di dalam, React akan unmount/remount Row setiap parent re-render).
function Row({ items }: { items: string[] }) {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-10">
          <span className="font-heading text-3xl font-bold uppercase tracking-tight text-white/90 sm:text-5xl">
            {item}
          </span>
          <span className="text-2xl text-accent sm:text-4xl">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee({
  items,
  reverse = false,
  speed = 28,
  className = "",
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
  className?: string;
}) {
  return (
    <div className={`group w-full overflow-hidden ${className}`}>
      <div
        className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <Row items={items} />
        <Row items={items} />
      </div>
    </div>
  );
}
