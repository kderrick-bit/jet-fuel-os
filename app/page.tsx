"use client";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "48px",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
        background: "radial-gradient(circle at top left, #1b2a4a, #05060a 55%)",
        color: "white",
      }}
    >
      <div style={{ maxWidth: 900 }}>
        <div style={{ opacity: 0.8, letterSpacing: 2, fontSize: 12 }}>
          JET FUEL OS
        </div>

        <h1 style={{ fontSize: 56, margin: "16px 0 8px" }}>
          Built. Deployed. Ready to iterate.
        </h1>

        <p style={{ fontSize: 18, opacity: 0.85, maxWidth: 700, lineHeight: 1.5 }}>
          This is the live production build on Netlify. Next step: wire real features
          (auth + database + dashboard).
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
          <button
            style={{
              padding: "12px 16px",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.25)",
              background: "rgba(255,255,255,0.08)",
              color: "white",
              cursor: "pointer",
              fontSize: 14,
            }}
            onClick={() => alert("✅ Jet Fuel OS is live on Netlify.")}
          >
            Confirm Live
          </button>

          <button
            style={{
              padding: "12px 16px",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.25)",
              background: "transparent",
              color: "white",
              cursor: "pointer",
              fontSize: 14,
            }}
            onClick={() => {
              const info = {
                location: window.location.href,
                time: new Date().toLocaleString(),
              };
              alert(JSON.stringify(info, null, 2));
            }}
          >
            Show Build Info
          </button>
        </div>

        <div style={{ marginTop: 32, opacity: 0.7, fontSize: 13 }}>
          Next: add Login + Dashboard + Supabase data.
        </div>
      </div>
    </main>
  );
}
