import { InstagramIcon, TiktokIcon, WhatsappIcon, LinkedinIcon } from "@/components/BrandIcons";
import Logo from "@/components/Logo";
import HoloBackground from "@/components/HoloBackground";

const NAV = [
  { label: "Layanan", href: "#layanan" },
  { label: "Project", href: "#karya" },
  { label: "Tentang", href: "#tentang" },
  { label: "Kontak", href: "#contact" },
];

const SOCIALS = [
  { Icon: InstagramIcon, href: "https://www.instagram.com/kevinkie_/", label: "Instagram" },
  { Icon: TiktokIcon, href: "#", label: "TikTok" },
  { Icon: WhatsappIcon, href: "https://wa.me/6282113515619", label: "WhatsApp" },
  { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-accent/10 bg-background py-12">
      <HoloBackground />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Logo className="h-6 w-12" />
              <span className="font-heading text-lg font-bold text-white">Red Lens</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-zinc-500">
              Your website started here.
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
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 transition hover:text-accent"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-900 pt-6 text-center">
          <p className="text-xs text-zinc-600">© 2026 Red Lens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
