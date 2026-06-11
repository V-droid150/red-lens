export const projects = [
  {
    id: "kopi-nusantara",
    title: "Kopi Nusantara",
    category: "Landing Page",
    description:
      "Website kedai kopi spesialti dengan halaman menu interaktif dan sistem cart.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://coffeeshop-website-cyan.vercel.app/",
    color: "#3b1a08",
    accentColor: "#c2410c",
  },
  {
    id: "santa-maria",
    title: "SantaMaria",
    category: "Web App / Dashboard",
    description:
      "Dashboard manajemen UMKM lengkap: produk, pesanan, inventaris, keuangan, dan laporan.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://santa-maria-project.vercel.app/dashboard",
    color: "#0a1628",
    accentColor: "#eab308",
  },
];

export const services = [
  {
    icon: "layout",
    title: "Landing Page",
    description:
      "Website satu halaman yang dirancang untuk mengkonversi pengunjung menjadi pelanggan. Cocok untuk UMKM yang ingin tampil profesional di internet.",
    features: ["Desain custom", "Mobile responsive", "SEO dasar", "Deploy siap pakai"],
  },
  {
    icon: "code",
    title: "Web App",
    description:
      "Aplikasi web fungsional dengan fitur sesuai kebutuhan bisnis Anda — dari dashboard sederhana hingga sistem manajemen lengkap.",
    features: ["Full-stack development", "Database & API", "Autentikasi pengguna", "Panel admin"],
  },
  {
    icon: "figma",
    title: "UI/UX Design",
    description:
      "Desain antarmuka yang intuitif dan estetik. Dari wireframe hingga prototype interaktif yang siap diserahkan ke developer.",
    features: ["User research", "Wireframe & prototype", "Design system", "Figma deliverable"],
  },
];

export const skills = [
  { name: "Next.js", level: 85 },
  { name: "React", level: 85 },
  { name: "TypeScript", level: 75 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Figma", level: 80 },
  { name: "Supabase", level: 70 },
];

export const stats = [
  { value: "5+", label: "Proyek Selesai" },
  { value: "2+", label: "Klien Puas" },
  { value: "1+", label: "Tahun Pengalaman" },
];

// Detail untuk halaman case study (app/projects/[slug])
export const projectDetails: Record<
  string,
  {
    overview: string;
    work: string[];
    stack: string[];
  }
> = {
  "kopi-nusantara": {
    overview:
      "Landing page untuk kedai kopi spesialti Indonesia. Dirancang untuk menciptakan kesan premium dan mengundang pelanggan baru melalui tampilan yang hangat dan profesional.",
    work: [
      "Desain & development halaman utama",
      "Halaman menu dengan filter kategori",
      "Sistem cart interaktif",
      "Halaman layanan dengan layout scroll",
      "SEO meta tags",
      "Deploy ke Vercel",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  "santa-maria": {
    overview:
      "Dashboard manajemen operasional UMKM all-in-one. Dibangun untuk membantu pemilik bisnis kecil memantau produk, pesanan, keuangan, dan pelanggan dalam satu platform.",
    work: [
      "Sistem autentikasi (Google OAuth + email)",
      "Dasbor dengan KPI dan grafik pendapatan",
      "Manajemen produk & inventaris",
      "Manajemen pesanan & pelanggan",
      "Modul keuangan & laporan",
      "Bilingual (ID/EN)",
      "Deploy ke Vercel",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
  },
};
