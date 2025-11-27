export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif"
    }}>
      <h1 style={{ fontSize: "3rem", margin: 0 }}>Hola ??</h1>
      <p style={{ color: "#666" }}>Bienvenido a tu app desplegada en Vercel</p>
    </main>
  );
}
