import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Red Lens — Web Developer & UI/UX Designer",
  description:
    "Red Lens — web developer dan UI/UX designer yang membantu UMKM Indonesia tampil profesional di internet.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${syne.variable} ${inter.variable}`}>
      <body className="bg-background text-text-primary font-sans antialiased">{children}</body>
    </html>
  );
}
