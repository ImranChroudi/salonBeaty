import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { SITE, waLink } from "@/lib/site";

const HOURS = [
  { days: "Lundi — Mercredi", hours: "10h — 19h" },
  { days: "Jeudi", hours: "10h — 21h" },
  { days: "Vendredi", hours: "10h — 19h" },
  { days: "Samedi", hours: "9h30 — 18h" },
  { days: "Dimanche", hours: "Fermé" },
];

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=24+Rue+de+la+Paix,+75002+Paris,+France";

const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=24%20Rue%20de%20la%20Paix%2C%2075002%20Paris%2C%20France&t=&z=15&ie=UTF8&iwloc=&output=embed";

export function MapSection() {
  return (
    <section className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-border shadow-[0_50px_120px_-55px_rgba(196,168,130,0.55)]">
          <iframe
            title="Carte — Maison Lumière, 24 rue de la Paix, Paris"
            src={MAP_EMBED_SRC}
            className="h-[460px] w-full border-0 md:h-[560px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="pointer-events-none absolute inset-3 rounded-2xl border border-gold/25" />

          <div className="relative mx-auto -mt-40 w-[calc(100%-3rem)] max-w-md md:absolute md:inset-y-0 md:left-10 md:m-0 md:my-0 md:flex md:w-[380px] md:max-w-none md:items-center">
            <div className="rounded-3xl border border-gold/25 bg-white/95 p-7 shadow-[0_40px_90px_-45px_rgba(44,38,36,0.5)] backdrop-blur-md md:p-8">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-deep">
                L&apos;atelier
              </p>
              <h2 className="mt-3 font-display text-2xl font-medium leading-tight text-noir">
                24 Rue de la Paix, 75002 Paris
              </h2>
              <p className="mt-2 font-serif text-base italic text-mist">
                Entre l&apos;Opéra et la place Vendôme
              </p>

              <div className="mt-6 space-y-4 border-t border-border pt-6">
                <div className="flex items-center justify-between">
                  <a
                    href={`tel:${SITE.phoneHref}`}
                    className="font-sans text-sm text-noir transition-colors hover:text-deeprose"
                  >
                    {SITE.phone}
                  </a>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-mist">
                    Téléphone
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-sans text-sm text-noir transition-colors hover:text-deeprose"
                  >
                    {SITE.email}
                  </a>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-mist">
                    Email
                  </span>
                </div>
              </div>

              <dl className="mt-6 space-y-2 border-t border-border pt-6">
                {HOURS.map((h) => (
                  <div
                    key={h.days}
                    className="flex items-center justify-between font-sans text-[13px]"
                  >
                    <dt className="text-noir/70">{h.days}</dt>
                    <dd className={h.hours === "Fermé" ? "italic text-mist" : "text-noir"}>
                      {h.hours}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-noir px-7 font-sans text-sm text-cream transition-all duration-300 hover:bg-deeprose hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                    <path d="M9 20l-5.5-5.5a2 2 0 0 1 0-2.8L9 6.2" />
                    <path d="M5.5 14.5H15a3.5 3.5 0 0 0 3.5-3.5V4" />
                    <path d="M18.5 4v0" />
                  </svg>
                  Itinéraire
                </a>
                <a
                  href={waLink("Bonjour Maison Lumière, je souhaite avoir des informations sur l'atelier.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-gold bg-gradient-to-r from-gold/15 via-gold/5 to-gold/15 px-7 font-sans text-sm text-noir transition-all duration-300 hover:from-gold hover:via-gold-soft hover:to-gold"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {SITE.whatsappDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
