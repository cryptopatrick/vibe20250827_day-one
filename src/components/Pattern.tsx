export default function Pattern() {
  return (
    <div
      className="w-full h-full"
      style={{
        background: "#0f172a",
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
          radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)
        `,
        backgroundSize: "20px 20px, 20px 20px, 20px 20px",
        backgroundPosition: "0 0, 0 0, 0 0",
      }}
    />
  );
}

