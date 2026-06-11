import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        surface: "#111111",
        "surface-2": "#1a1a1a",
        accent: "#dc2626",
        "accent-muted": "#7f1d1d",
        "accent-glow": "rgba(220,38,38,0.15)",
        "text-primary": "#f5f5f5",
        "text-muted": "#71717a",
      },
      fontFamily: {
        heading: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
