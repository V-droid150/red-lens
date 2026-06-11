import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/BrandIcons";

const NAV = [
  { label: "Layanan", href: "#layanan" },
  { label: "Karya", href: "#karya" },
  { label: "Tentang", href: "#tentang" },
  { label: "Kontak", href: "#contact" },
];

const SOCIALS = [
  { Icon: GithubIcon, href: "https://github.com/V-droid150" },
  { Icon: LinkedinIcon, href: "#" },
  { Icon: InstagramIcon, href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-accent/10 bg-background py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-accent/40 font-heading text-xl font-bold text-accent">
              VS
            </span>
            <p className="mt-3 max-w-xs text-sm text-zinc-500">
              Membangun website yang mengembangkan bisnis Anda.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 md:items-center">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </div>

          <div className="flex gap-4 md:justify-end">
            {SOCIALS.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 transition hover:text-accent"
                aria-label="Sosial media"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-zinc-900 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-600">© 2026 VinSite. All rights reserved.</p>
          <p className="text-xs text-zinc-600">Built with Next.js & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
