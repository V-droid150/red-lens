// Browser window mockup (visual, statis) + mini preview. Tanpa animasi —
// animasi diatur oleh pemanggil (mis. HeroBackground yang memutarnya 3D).
export default function BrowserMockup() {
  return (
    <div
      className="w-[340px] overflow-hidden rounded-xl border border-accent/15"
      style={{ boxShadow: "0 40px 100px -20px rgba(220,38,38,0.35)" }}
    >
      {/* Chrome */}
      <div
        className="flex h-8 items-center gap-2 border-b border-accent/15 px-3"
        style={{ background: "#181818" }}
      >
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ef4444" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#eab308" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#22c55e" }} />
        <div
          className="mx-auto rounded px-4 py-0.5 text-[10px] text-zinc-600"
          style={{ background: "#0f0f0f" }}
        >
          redlens.id
        </div>
      </div>

      {/* Screen + mini preview */}
      <div className="relative aspect-[16/10] overflow-hidden" style={{ background: "#0a0a0a" }}>
        <div className="flex h-5 items-center justify-between px-2" style={{ background: "#111" }}>
          <span className="font-heading text-[8px] font-bold text-accent">RL</span>
          <div className="flex gap-1">
            <span className="h-[3px] w-4 rounded-full bg-zinc-700" />
            <span className="h-[3px] w-4 rounded-full bg-zinc-700" />
            <span className="h-[3px] w-4 rounded-full bg-zinc-700" />
          </div>
        </div>

        <div className="px-4 pt-4">
          <div className="h-2 w-[60%] rounded-full bg-white/90" />
          <div className="mt-1 h-2 w-[40%] rounded-full bg-white/90" />
          <div className="mt-1.5 h-[5px] w-[75%] rounded-full bg-zinc-600" />
          <div className="mt-2.5 flex gap-2">
            <span className="h-3.5 w-[50px] rounded" style={{ background: "#dc2626" }} />
            <span className="h-3.5 w-[50px] rounded border border-zinc-600" />
          </div>
        </div>

        <div className="mt-4 flex gap-3 px-4">
          <div className="flex-1 overflow-hidden rounded-md" style={{ border: "1px solid rgba(220,38,38,0.2)" }}>
            <div className="h-10" style={{ background: "#1a0a05" }} />
            <div className="space-y-1 p-2" style={{ background: "#111" }}>
              <span className="block h-[3px] w-[70%] rounded-full bg-zinc-700" />
              <span className="block h-[3px] w-[45%] rounded-full bg-zinc-700" />
            </div>
          </div>
          <div className="flex-1 overflow-hidden rounded-md" style={{ border: "1px solid rgba(100,100,180,0.2)" }}>
            <div className="h-10" style={{ background: "#05101a" }} />
            <div className="space-y-1 p-2" style={{ background: "#111" }}>
              <span className="block h-[3px] w-[70%] rounded-full bg-zinc-700" />
              <span className="block h-[3px] w-[45%] rounded-full bg-zinc-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
