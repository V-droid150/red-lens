/**
 * HoloBackground — lapisan latar bernuansa hologram cyberpunk minimalist.
 * Red-only (on-brand Red Lens): holo-grid + scanline drift seamless + dua glow.
 * Cukup terlihat tapi tetap rapi & tak mengganggu keterbacaan (di-mask di tengah).
 * pointer-events-none, dekoratif murni.
 *
 * Pakai di dalam container `relative overflow-hidden`; bungkus konten dengan
 * `relative z-10` agar berada di atas lapisan ini.
 */
export default function HoloBackground({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Holo-grid, memudar ke tepi */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(220,38,38,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 50% 40%, black 0%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 40%, black 0%, transparent 78%)",
        }}
      />

      {/* Scanline drift halus & seamless */}
      <div
        className="holo-scanlines absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(220,38,38,0.06) 0px, rgba(220,38,38,0.06) 1px, transparent 1px, transparent 6px)",
          animation: "holo-scan 1.6s linear infinite",
        }}
      />

      {/* Panel glow */}
      <div
        className="absolute h-80 w-80 rounded-full"
        style={{
          [flip ? "right" : "left"]: "-7rem",
          top: "1rem",
          background:
            "radial-gradient(circle, rgba(220,38,38,0.13) 0%, transparent 70%)",
          filter: "blur(72px)",
        }}
      />
      <div
        className="absolute h-96 w-96 rounded-full"
        style={{
          [flip ? "left" : "right"]: "-8rem",
          bottom: "-3rem",
          background:
            "radial-gradient(circle, rgba(220,38,38,0.10) 0%, transparent 70%)",
          filter: "blur(84px)",
        }}
      />
    </div>
  );
}
