export const projects = [
  {
    id: "kopi-nusantara",
    title: "Kopi Nusantara",
    category: "Landing Page",
    description:
      "Website kedai kopi spesialti dengan halaman menu interaktif dan sistem cart.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://coffeeshop-website-cyan.vercel.app/",
    image: "/projects/kopi-nusantara.jpg",
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
    image: "/projects/santamaria.jpg",
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
    title: "Web Page",
    description:
      "Website multi-halaman untuk menampilkan bisnis Anda secara lengkap — company profile, profil usaha, katalog produk, hingga halaman layanan. Tampil kredibel dan profesional.",
    features: ["Company profile", "Beberapa halaman", "Katalog produk", "SEO dasar"],
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

// Alur kerja (ditampilkan di ProcessSection)
export const process = [
  {
    icon: "chat",
    title: "Konsultasi",
    desc: "Kita diskusikan kebutuhan, tujuan, dan referensi bisnis Anda. Gratis & tanpa komitmen.",
  },
  {
    icon: "design",
    title: "Desain",
    desc: "Saya susun desain yang sesuai brand Anda — disetujui dulu sebelum masuk tahap coding.",
  },
  {
    icon: "code",
    title: "Development",
    desc: "Desain diubah jadi website yang cepat, responsif di semua perangkat, dan SEO-friendly.",
  },
  {
    icon: "launch",
    title: "Launch & Support",
    desc: "Website di-deploy, domain disiapkan, plus dukungan setelah rilis bila dibutuhkan.",
  },
];

// Pertanyaan umum (ditampilkan di FaqSection) — silakan koreksi sesuai kebijakan Anda
export const faqs = [
  {
    q: "Berapa lama waktu pengerjaan sebuah website?",
    a: "Umumnya 5–10 hari kerja, tergantung jenis dan kompleksitas websitenya. Estimasi pasti akan saya berikan setelah konsultasi awal.",
  },
  {
    q: "Apakah saya bisa minta revisi?",
    a: "Tentu. Setiap proyek sudah termasuk beberapa kali revisi pada tahap desain agar hasil akhirnya benar-benar sesuai keinginan Anda sebelum lanjut ke development.",
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "Umumnya DP 50% di awal sebagai tanda jadi, lalu 50% sisanya saat website siap di-launch. Pembayaran bisa via transfer bank atau e-wallet.",
  },
  {
    q: "Apakah website saya bisa dibuka dengan baik di HP?",
    a: "Pasti. Semua website saya dibuat mobile-responsive dan saya tes di berbagai ukuran layar (HP, tablet, desktop) sebelum diserahkan.",
  },
  {
    q: "Apakah sudah termasuk domain dan hosting?",
    a: "Sudah termasuk dan GRATIS! Anda mendapat domain serta hosting tanpa biaya tambahan, jadi website langsung bisa online tanpa Anda perlu memikirkan biaya bulanan atau tahunan.",
  },
  {
    q: "Bagaimana dukungan setelah website jadi?",
    a: "Ada masa dukungan untuk perbaikan bug setelah rilis. Bila Anda butuh maintenance atau penambahan fitur ke depannya, bisa kita atur sebagai paket lanjutan.",
  },
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
