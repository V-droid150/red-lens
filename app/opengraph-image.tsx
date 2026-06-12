import { ImageResponse } from "next/og";

// Gambar preview saat link dibagikan (WhatsApp, IG, FB, LinkedIn, dll)
export const runtime = "edge";
export const alt = "Red Lens — Your Website Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
        {/* Wordmark + logo lensa */}
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          <div
            style={{
              display: "flex",
              width: "54px",
              height: "54px",
              borderRadius: "9999px",
              border: "7px solid #dc2626",
            }}
          />
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
          <span style={{ marginRight: "0.3em" }}>Your Website</span>
          <span style={{ color: "#dc2626" }}>Solutions</span>
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
