import { ImageResponse } from "next/og";

// Favicon dinamis: lensa merah Red Lens di atas latar gelap.
export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
            "radial-gradient(circle at 50% 38%, rgba(220,38,38,0.45), transparent 70%)",
        }}
      >
        {/* Lensa bulat — inti brand Red Lens */}
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "9999px",
            border: "4px solid #dc2626",
            backgroundColor: "rgba(220,38,38,0.18)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
