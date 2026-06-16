import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";

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

const SITE_URL = "https://redlens.pro";
const SITE_TITLE = "Red Lens — We Build Websites That Work";
const SITE_DESC =
  "Red Lens — web developer & UI/UX designer yang membantu UMKM Indonesia tampil profesional lewat landing page dan web app yang estetik dan fungsional.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — Red Lens",
  },
  description: SITE_DESC,
  keywords: [
    "Red Lens",
    "web developer",
    "UI/UX designer",
    "jasa pembuatan website",
    "website UMKM",
    "landing page",
    "web app",
    "Indonesia",
  ],
  authors: [{ name: "Red Lens" }],
  creator: "Red Lens",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Red Lens",
    title: SITE_TITLE,
    description: SITE_DESC,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${syne.variable} ${inter.variable}`}>
      <body className="bg-background text-text-primary font-sans antialiased">
        <Preloader />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
