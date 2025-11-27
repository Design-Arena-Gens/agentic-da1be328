import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hola",
  description: "Un saludo simple desplegado en Vercel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
