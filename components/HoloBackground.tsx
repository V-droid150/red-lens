/**
 * HoloBackground — ambient glow latar yang SANGAT RINGAN.
 * Red-only (on-brand Red Lens). Cuma dua radial-gradient merah samar di sudut,
 * TANPA grid, scanline, blur filter, maupun animasi → dilukis sekali, biaya
 * GPU hampir nol (anti-lag). pointer-events-none, dekoratif murni.
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
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        background: flip
          ? "radial-gradient(55% 45% at 88% 0%, rgba(220,38,38,0.10) 0%, transparent 70%), radial-gradient(45% 40% at 8% 100%, rgba(220,38,38,0.07) 0%, transparent 70%)"
          : "radial-gradient(55% 45% at 12% 0%, rgba(220,38,38,0.10) 0%, transparent 70%), radial-gradient(45% 40% at 92% 100%, rgba(220,38,38,0.07) 0%, transparent 70%)",
      }}
    />
  );
}
