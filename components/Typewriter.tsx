"use client";

import { useEffect, useState } from "react";

/**
 * Typewriter — menampilkan teks seolah sedang diketik (huruf demi huruf) dengan
 * kursor berkedip. Ruang teks penuh sudah direservasi (klon tak terlihat) agar
 * elemen di bawahnya tidak bergeser saat teks bertambah panjang.
 */
export default function Typewriter({
  text,
  speed = 42,
  startDelay = 0,
  className = "",
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={`grid ${className}`}>
      {/* Reservasi ruang: teks penuh, tak terlihat */}
      <span className="invisible col-start-1 row-start-1" aria-hidden>
        {text}
      </span>
      {/* Teks yang sedang diketik */}
      <span className="col-start-1 row-start-1" aria-label={text}>
        <span aria-hidden>{text.slice(0, count)}</span>
        <span
          aria-hidden
          className="ml-0.5 inline-block w-[2px] translate-y-[0.12em] bg-accent"
          style={{ height: "1em", animation: "blink 1s step-end infinite" }}
        />
      </span>
    </span>
  );
}
