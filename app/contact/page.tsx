import { PageHero } from "@/components/blocks/page-hero";
import { CtaBand } from "@/components/blocks/cta-band";
import { ContactForm } from "@/components/forms/contact-form";
import { Eyebrow, Reveal, WordReveal } from "@/components/motion/primitives";
import { SITE } from "@/lib/site";
import { buildMetadata, schemaBreadcrumb, schemaPage } from "@/lib/site";
import { JsonLd } from "@/components/jsonld";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contactez Maison Lumière, atelier de maquillage & beauté de luxe à Paris : 24 rue de la Paix, 75002 Paris. Téléphone, email, horaires et accès.",
  path: "/contact",
});

const HOURS = [
  { days: "Lundi — Mercredi", hours: "10h — 19h" },
  { days: "Vendredi", hours: "10h — 19h" },
  { days: "Jeudi", hours: "10h — 21h" },
  { days: "Samedi", hours: "9h30 — 18h" },
  { days: "Dimanche", hours: "Fermé" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={schemaPage("/contact", "Contact — Maison Lumière")} />
      <JsonLd
        data={schemaBreadcrumb("/contact", [{ name: "Contact" }])}
      />

      <PageHero
        eyebrow="Contact"
        title="Nous trouver"
        lead="Au cœur de Paris, entre l'Opéra et la place Vendôme. L'atelier vous attend — et le café est toujours chaud."
        image="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="L'ambiance de l'atelier"
        index="11"
      />

      <section className="relative bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-6 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="flex flex-col gap-10">
            <div>
              <Eyebrow>L’atelier</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.4vw,3.2rem)] font-medium leading-[1.05] text-noir">
                <WordReveal text="Vos repères" />
              </h2>
            </div>

            <Reveal>
              <address className="space-y-6 font-sans not-italic">
                <div className="flex items-start gap-4">
                  <span aria-hidden className="hairline-gold mt-2 w-8" />
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-mist">Adresse</p>
                    <p className="mt-1 text-[15px] text-noir">
                      24 Rue de la Paix<br />75002 Paris, France
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span aria-hidden className="hairline-gold mt-2 w-8" />
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-mist">Téléphone</p>
                    <p className="mt-1 text-[15px] text-noir">
                      <a href={`tel:${SITE.phone}`} className="transition-colors hover:text-deeprose">
                        {SITE.phone}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span aria-hidden className="hairline-gold mt-2 w-8" />
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-mist">Email</p>
                    <p className="mt-1 text-[15px] text-noir">
                      <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-deeprose">
                        {SITE.email}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span aria-hidden className="hairline-gold mt-2 w-8" />
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-mist">Accès</p>
                    <p className="mt-1 text-[15px] text-noir">
                      Métro Opéra (lignes 3, 7, 8) · à 3 minutes à pied
                    </p>
                  </div>
                </div>
              </address>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-white p-7">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-deep">
                  Horaires
                </p>
                <dl className="mt-5 space-y-3">
                  {HOURS.map((h) => (
                    <div key={h.days} className="flex items-center justify-between font-sans text-sm">
                      <dt className="text-noir/75">{h.days}</dt>
                      <dd className={h.hours === "Fermé" ? "italic text-mist" : "text-noir"}>{h.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
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
                    className="rounded-full border border-border px-5 py-2.5 font-sans text-[10px] uppercase tracking-[0.22em] text-noir/70 transition-colors hover:border-gold hover:text-gold-deep"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div>
            <Eyebrow>Écrivez-nous</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium leading-tight text-noir">
              <WordReveal text="Commençons la conversation" />
            </h2>
            <Reveal delay={0.1} className="mt-10">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative bg-cream pb-24 md:pb-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-[0_40px_100px_-50px_rgba(196,168,130,0.5)]">
              <iframe
                title="Localisation de Maison Lumière — 24 rue de la Paix, Paris"
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.3262%2C48.8665%2C2.3362%2C48.8705&layer=mapnik&marker=48.8683%2C2.3312"
                className="h-[420px] w-full border-0 grayscale-[35%]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-3 rounded-2xl border border-gold/25" />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Le plus simple, c'est de venir"
        lead="Ou de réserver directement en ligne : la première consultation de 30 minutes est offerte."
        image="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="L'atelier Maison Lumière"
      />
    </>
  );
}
