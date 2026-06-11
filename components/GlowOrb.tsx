export default function GlowOrb({
  x,
  y,
  size = 600,
  opacity = 0.1,
}: {
  x: string;
  y: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(220,38,38,0.2) 0%, transparent 70%)",
        filter: "blur(80px)",
        opacity,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
