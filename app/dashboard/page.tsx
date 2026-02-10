export default function Dashboard() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "48px",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
        background: "#05060a",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: 44, marginBottom: 8 }}>Dashboard</h1>
      <p style={{ opacity: 0.8, fontSize: 16, marginBottom: 24 }}>
        This is a real route. Routing works in production.
      </p>

      <div style={{ maxWidth: 600 }}>
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 12,
            padding: 16,
            marginBottom: 12,
          }}
        >
          <div style={{ opacity: 0.7, fontSize: 12 }}>Status</div>
          <div style={{ fontSize: 18 }}>✅ Live on Netlify</div>
        </div>

        <div
          style={{
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 12,
            padding: 16,
          }}
        >
          <div style={{ opacity: 0.7, fontSize: 12 }}>Next</div>
          <div style={{ fontSize: 18 }}>Auth + Supabase data</div>
        </div>
      </div>
    </main>
  );
}
