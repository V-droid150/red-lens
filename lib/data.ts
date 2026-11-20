export const projects = [
  {
    id: "kopi-nusantara",
    title: "Kopi Nusantara",
    category: "Web Page",
    description:
      "Website multi-halaman untuk kedai kopi spesialti — lengkap dengan menu interaktif, keranjang belanja, dan checkout pembayaran online.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Midtrans"],
    liveUrl: "https://coffeeshop-website-cyan.vercel.app/",
    image: "/projects/kopi-nusantara.jpg",
    color: "#3b1a08",
    accentColor: "#c2410c",
  },
  {
    id: "jalar",
    title: "JALAR",
    category: "Landing Page",
    description:
      "Landing page produk keripik pedas artisanal bertema 'api' yang berani — hero slider sinematik, katalog tiga level kepedasan, keranjang belanja, dan checkout langsung via WhatsApp. Dirancang mobile-first untuk mengubah pengunjung jadi pembeli.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://jalar.vercel.app",
    image: "/projects/jalar.jpg",
    color: "#1a0500",
    accentColor: "#f97316",
  },
  {
    id: "ordersync-beauty",
    title: "OrderSync Beauty",
    category: "Automation",
    description:
      "Sistem otomasi order multi-channel untuk toko skincare: order dari website, Shopee, TikTok Shop, dan file export otomatis dirapikan lalu tercatat di Google Sheets. Stok terpantau sendiri, bot Telegram untuk pemilik toko, follow-up pelanggan, CS otomatis, dan dashboard.",
    stack: ["Next.js", "Google Sheets API", "Telegram Bot", "n8n"],
    // Toko demo + dashboard + bot berjalan penuh di Vercel
    liveUrl: "https://web-inky-five-78.vercel.app",
    image: "/projects/ordersync-beauty.jpg",
    color: "#2a0a14",
    accentColor: "#c9184a",
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
    /** Video alur singkat (opsional), diputar di halaman case study. */
    video?: { src: string; poster: string; caption: string };
  }
> = {
  "kopi-nusantara": {
    overview:
      "Website multi-halaman untuk kedai kopi spesialti Indonesia. Lebih dari sekadar etalase — situs ini dilengkapi alur belanja online penuh: pelanggan menelusuri menu, menambahkan pesanan ke keranjang, lalu menyelesaikan transaksi lewat checkout pembayaran yang terintegrasi. Dirancang agar tampil premium sekaligus benar-benar fungsional untuk berjualan.",
    work: [
      "Arsitektur multi-halaman (Beranda, Menu, About, Kontak)",
      "Katalog menu dengan filter kategori",
      "Keranjang belanja interaktif",
      "Checkout & pembayaran online terintegrasi (Midtrans)",
      "Form kontak & dashboard admin pesanan",
      "SEO meta tags & deploy ke Vercel",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Midtrans"],
  },
  jalar: {
    overview:
      "Landing page penjualan untuk JALAR, brand keripik pedas artisanal. Tujuannya satu: bikin pengunjung penasaran lalu langsung order. Dari hero slider sinematik bertema api, kartu produk tiga level kepedasan dengan keranjang belanja, sampai checkout instan via WhatsApp — semuanya dirancang mobile-first agar nyaman dibuka dari HP dan mendorong konversi.",
    work: [
      "Hero slider sinematik 3 produk (autoplay + geser/swipe)",
      "Brand story dengan ilustrasi maskot",
      "Katalog produk + keranjang belanja (add-to-cart)",
      "Checkout instan langsung via WhatsApp",
      "Micro-interaction: tombol 'api' & marquee testimoni",
      "Desain mobile-first, SEO meta & deploy ke Vercel",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Embla Carousel"],
  },
  "ordersync-beauty": {
    overview:
      "Studi kasus otomasi untuk seller online yang berjualan di banyak tempat sekaligus. Masalahnya klasik: order Shopee, TikTok Shop, dan WhatsApp tercecer di file dengan format berbeda, ada data dobel, SKU salah ketik, nomor HP berantakan, dan stok baru ketahuan habis saat ada pesanan. Solusinya satu \"gerbang order\" (dibangun di n8n, kini juga berjalan langsung di Vercel): semua order dari mana pun diperiksa, dirapikan, lalu dicatat ke satu Google Sheet tanpa dobel. Dari situ stok dihitung otomatis, pemilik mendapat kabar lewat bot Telegram, pelanggan di-follow-up otomatis, pertanyaan pelanggan dijawab CS otomatis, dan semua angka penting bisa dipantau dari dashboard di HP. Toko Glowra Beauty yang dipakai adalah toko fiktif untuk demo.",
    work: [
      "Gerbang order n8n: validasi, normalisasi no HP & nama, anti dobel (upsert), tahan nomor pesanan TikTok 18 digit",
      "Integrasi pola API Shopee & TikTok Shop: notifikasi → ambil detail order → terjemahkan (diuji lewat simulator)",
      "Import file export marketplace dari Google Drive: ratusan order dibersihkan & dicatat sekali jalan",
      "Stok otomatis + notifikasi restock Telegram tanpa spam",
      "Bot Telegram interaktif untuk pemilik toko: /ringkasan, /stok, /order, kabar status pengiriman & resi",
      "Follow-up pelanggan otomatis: minta ulasan H+3 & pengingat beli ulang sesuai siklus pakai produk",
      "CS otomatis 24 jam di website: jawab FAQ, rekomendasi produk, cek pesanan, teruskan ke admin",
      "Toko demo & dashboard pemilik toko (omzet, channel, produk terlaris, stok)",
      "Workbook Google Sheets berisi rumus laba per channel, 0 error, plus dokumentasi & ADR lengkap",
    ],
    stack: ["Next.js", "TypeScript", "Google Sheets & Drive API", "Telegram Bot", "Vercel Cron", "n8n", "Python"],
    video: {
      src: "/projects/ordersync-alur.mp4",
      poster: "/projects/ordersync-alur-poster.jpg",
      caption: "Alur lengkap dalam 75 detik: checkout di website → tercatat di Google Sheets → kabar ke Telegram → order Shopee → dashboard → CS otomatis.",
    },
  },
};
