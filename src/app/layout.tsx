import "./globals.scss";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Prueba Técnica - SERMALUC",
  description: "Rotación 90° antihoraria de matrices NxN.",
  openGraph: { title: "Matrix Rotator", type: "website" },
  twitter: { card: "summary_large_image" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
