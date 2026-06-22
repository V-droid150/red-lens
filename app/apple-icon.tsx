import { ImageResponse } from "next/og";

// Apple touch icon (180x180): logo kacamata Red Lens (sama dgn header) di latar gelap.
export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// SVG kacamata identik dengan components/Logo.tsx.
const glasses = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 24" fill="none"><circle cx="14" cy="13" r="7.5" fill="rgba(220,38,38,0.22)" stroke="#dc2626" stroke-width="2"/><circle cx="34" cy="13" r="7.5" fill="rgba(220,38,38,0.22)" stroke="#dc2626" stroke-width="2"/><path d="M21.5 11.5q2.5 -2.5 5 0" stroke="#dc2626" stroke-width="2" stroke-linecap="round"/><path d="M6.8 10.2 1.5 6.5" stroke="#dc2626" stroke-width="2" stroke-linecap="round"/><path d="M41.2 10.2 46.5 6.5" stroke="#dc2626" stroke-width="2" stroke-linecap="round"/></svg>`;

export default function AppleIcon() {
  const src = `data:image/svg+xml;base64,${btoa(glasses)}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#080808",
          backgroundImage:
            "radial-gradient(circle at 50% 42%, rgba(220,38,38,0.35), transparent 70%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={132} height={66} alt="Red Lens" />
      </div>
    ),
    { ...size }
  );
}
