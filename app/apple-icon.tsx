import { ImageResponse } from "next/og";

// Apple touch icon: lensa merah Red Lens, latar gelap penuh (180x180).
export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
            "radial-gradient(circle at 50% 40%, rgba(220,38,38,0.40), transparent 70%)",
        }}
      >
        <div
          style={{
            width: "108px",
            height: "108px",
            borderRadius: "9999px",
            border: "20px solid #dc2626",
            backgroundColor: "rgba(220,38,38,0.16)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
