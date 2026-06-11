// Logo Red Lens: kacamata dengan lensa bulat berwarna merah.
export default function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 24" fill="none" className={className} role="img" aria-label="Red Lens">
      {/* Lensa kiri & kanan (bulat, merah) */}
      <circle cx="14" cy="13" r="7.5" fill="rgba(220,38,38,0.22)" stroke="#dc2626" strokeWidth="2" />
      <circle cx="34" cy="13" r="7.5" fill="rgba(220,38,38,0.22)" stroke="#dc2626" strokeWidth="2" />
      {/* Jembatan di antara lensa */}
      <path d="M21.5 11.5q2.5 -2.5 5 0" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
      {/* Gagang kiri & kanan */}
      <path d="M6.8 10.2 1.5 6.5" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
      <path d="M41.2 10.2 46.5 6.5" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
