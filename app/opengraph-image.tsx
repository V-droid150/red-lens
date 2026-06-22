import { ImageResponse } from "next/og";

// Gambar preview saat link dibagikan (WhatsApp, IG, FB, LinkedIn, dll)
export const runtime = "edge";
export const alt = "Red Lens — We Build Websites That Work";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// SVG kacamata identik dengan components/Logo.tsx (dipakai sbg logo di OG image).
const glasses = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 24" fill="none"><circle cx="14" cy="13" r="7.5" fill="rgba(220,38,38,0.22)" stroke="#dc2626" stroke-width="2"/><circle cx="34" cy="13" r="7.5" fill="rgba(220,38,38,0.22)" stroke="#dc2626" stroke-width="2"/><path d="M21.5 11.5q2.5 -2.5 5 0" stroke="#dc2626" stroke-width="2" stroke-linecap="round"/><path d="M6.8 10.2 1.5 6.5" stroke="#dc2626" stroke-width="2" stroke-linecap="round"/><path d="M41.2 10.2 46.5 6.5" stroke="#dc2626" stroke-width="2" stroke-linecap="round"/></svg>`;

export default function OpengraphImage() {
  const logoSrc = `data:image/svg+xml;base64,${btoa(glasses)}`;
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          backgroundColor: "#080808",
          backgroundImage:
            "radial-gradient(circle at 82% 18%, rgba(220,38,38,0.40), transparent 55%), radial-gradient(circle at 0% 100%, rgba(220,38,38,0.20), transparent 50%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Wordmark + logo kacamata */}
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={96} height={48} alt="" />
          <div style={{ fontSize: "38px", fontWeight: 800, letterSpacing: "4px" }}>
            RED LENS
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            marginTop: "44px",
            display: "flex",
            flexWrap: "wrap",
            fontSize: "92px",
            fontWeight: 800,
            lineHeight: 1.04,
          }}
        >
          <span style={{ marginRight: "0.3em" }}>We Build Websites That</span>
          <span style={{ color: "#dc2626" }}>Work.</span>
        </div>

        {/* Tagline */}
        <div style={{ marginTop: "36px", fontSize: "32px", color: "#a1a1aa" }}>
          Web Developer &amp; UI/UX Designer untuk UMKM Indonesia
        </div>
      </div>
    ),
    { ...size }
  );
}
