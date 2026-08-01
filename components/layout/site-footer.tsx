import Link from "next/link";

import { NAV_ALL, SITE } from "@/lib/site";
import { PRESTATIONS } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-noir text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_0%,rgba(196,168,130,0.18),transparent_70%)]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full border border-gold/10" />

      <div className="relative mx-auto max-w-[1440px] px-6 pb-12 pt-20 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3" aria-label="Maison Lumière — Accueil">
              <span className="grid h-12 w-10 place-items-center overflow-hidden rounded-t-[50%] border border-gold/70 bg-cream/5">
                <span className="font-display text-base font-semibold italic text-gold">M</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-2xl font-semibold">Maison Lumière</span>
                <span className="mt-1 font-sans text-[8px] font-medium uppercase tracking-[0.42em] text-cream/50">
                  Beauté · Paris
                </span>
              </span>
            </Link>
            <p className="max-w-sm font-serif text-lg italic leading-relaxed text-cream/60">
              « Chaque détail est pensé pour sublimer votre élégance grâce à une expertise beauté
              d’exception. »
            </p>
            <div className="flex items-center gap-4">
              {[
                { label: "Instagram", href: SITE.socials.instagram },
                { label: "Pinterest", href: SITE.socials.pinterest },
                { label: "TikTok", href: SITE.socials.tiktok },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-cream/15 px-4 py-2 font-sans text-[10px] uppercase tracking-[0.22em] text-cream/70 transition-colors hover:border-gold hover:text-gold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Navigation du pied de page">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-gold">
              L’Atelier
            </p>
            <ul className="mt-6 space-y-3">
              {NAV_ALL.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-cream/70 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Prestations">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-gold">
              Prestations
            </p>
            <ul className="mt-6 space-y-3">
              {PRESTATIONS.slice(0, 5).map((p) => (
                <li key={p.title}>
                  <Link
                    href={p.href}
                    className="font-sans text-sm text-cream/70 transition-colors hover:text-gold"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-gold">
              L’Atelier
            </p>
            <address className="mt-6 space-y-3 font-sans text-sm not-italic text-cream/70">
              <p>
                24 Rue de la Paix
                <br />
                75002 Paris, France
              </p>
              <p>
                <a href={`tel:${SITE.phone}`} className="transition-colors hover:text-gold">
                  {SITE.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {SITE.email}
                </a>
              </p>
            </address>
            <div className="mt-6 space-y-1.5 font-sans text-xs text-cream/50">
              <p>Lun–Mer & Ven · 10h–19h</p>
              <p>Jeu · 10h–21h</p>
              <p>Sam · 9h30–18h</p>
            </div>
          </div>
        </div>

        <div className="mt-16 overflow-hidden">
          <p
            aria-hidden
            className="whitespace-nowrap font-display text-[clamp(4rem,14vw,11rem)] font-semibold leading-[0.9] tracking-tight text-cream/[0.06] select-none"
          >
            Maison Lumière — Beauté
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 font-sans text-[11px] uppercase tracking-[0.2em] text-cream/40 md:flex-row">
          <p>© {new Date().getFullYear()} Maison Lumière. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="transition-colors hover:text-gold">
              Mentions légales
            </Link>
            <Link href="/contact" className="transition-colors hover:text-gold">
              Confidentialité
            </Link>
            <Link href="/reservation" className="transition-colors hover:text-gold">
              Réservation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
