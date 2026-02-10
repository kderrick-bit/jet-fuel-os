"use client";
export default function Home() {
  return (
    <main style={{ minHeight: "100vh", padding: "32px" }}>
      <h1 style={{ fontSize: "48px", fontWeight: 700, marginBottom: "12px" }}>
        Jet Fuel OS
      </h1>

      <p style={{ fontSize: "18px", opacity: 0.85, marginBottom: "24px" }}>
        Deployed on Netlify. Supabase connected.
      </p>

      <button
        style={{
          padding: "12px 16px",
          borderRadius: "10px",
          border: "1px solid rgba(255,255,255,0.2)",
          background: "transparent",
          cursor: "pointer",
          fontSize: "16px",
        }}
        onClick={() => alert("Jet Fuel OS is live.")}
      >
        Test Button
      </button>
    </main>
  );
}
