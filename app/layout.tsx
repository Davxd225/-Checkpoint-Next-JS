import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Yokoli François — Développeur web",
  description:
    "Portfolio de Yokoli François : projets web, présentation et contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}