"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "48px",
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        background: "black",
        color: "white",
      }}
    >
      <div style={{ maxWidth: 900 }}>
        <div style={{ opacity: 0.8, letterSpacing: 2, marginBottom: 12 }}>
          JET FUEL OS
        </div>

        <h1 style={{ fontSize: 56, margin: "16px 0" }}>
          Built. Deployed. Ready to iterate.
        </h1>

        <p style={{ fontSize: 18, opacity: 0.85, maxWidth: 600 }}>
          This is the live production build on Netlify. Routing and UI are active.
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
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
            onClick={() => alert("Jet Fuel OS is live")}
          >
            Test Button
          </button>

          <button
            style={{
              padding: "12px 16px",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.4)",
              background: "white",
              color: "black",
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 600,
            }}
            onClick={() => router.push("/dashboard")}
          >
            Go to Dashboard →
          </button>
        </div>
      </div>
    </main>
  );
}
