"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Eyebrow,
  Magnetic,
  Reveal,
  SectionHeading,
} from "@/components/motion/primitives";
import { Button } from "@/components/ui/button";
import { PRESTATIONS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function PrestationsList({
  limit,
  eyebrow = "Prestations",
  title = "Six univers, un seul art",
  lead = "De la mariée à la scène, de l'école du regard au studio : chaque prestation est une œuvre unique, dessinée à la main.",
  showCta = true,
}: {
  limit?: number;
  eyebrow?: string;
  title?: string;
  lead?: string;
  showCta?: boolean;
}) {
  const items = limit ? PRESTATIONS.slice(0, limit) : PRESTATIONS;
  const [active, setActive] = React.useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,rgba(232,180,188,0.16),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:gap-20">
          <div>
            {items.map((p, i) => (
              <div key={p.no} className="border-b border-border">
                <Link
                  href={p.href}
                  className="group relative flex items-center gap-5 py-7 md:gap-10 md:py-9"
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                >
                  <span className="font-sans text-xs font-semibold tabular-nums tracking-[0.25em] text-gold-deep">
                    Nº {p.no}
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-[clamp(1.5rem,3.4vw,2.6rem)] font-medium leading-tight text-noir transition-all duration-500 group-hover:translate-x-3 group-hover:italic group-hover:text-deeprose">
                      {p.title}
                    </span>
                    <span className="mt-2 block font-serif text-base italic text-mist md:text-lg">
                      {p.tagline}
                    </span>
                  </span>
                  <span className="hidden shrink-0 flex-col items-end gap-1 text-right md:flex">
                    <span className="font-sans text-xs uppercase tracking-[0.18em] text-mist">
                      {p.duration}
                    </span>
                    <span className="font-display text-sm text-gold-deep">{p.price}</span>
                  </span>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border text-deeprose transition-all duration-500 group-hover:rotate-45 group-hover:border-gold group-hover:bg-gold group-hover:text-noir">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </div>
            ))}

            {showCta && (
              <Reveal delay={0.1} className="mt-12">
                <Magnetic>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/prestations" data-cursor="Voir tout">
                      Voir toutes les prestations
                    </Link>
                  </Button>
                </Magnetic>
              </Reveal>
            )}
          </div>

          <div className="relative hidden lg:block">
            <div className="sticky top-32 aspect-[4/5] w-full overflow-hidden rounded-3xl bg-powder">
              {items.map((p, i) => (
                <motion.div
                  key={p.no}
                  className="absolute inset-0"
                  initial={false}
                  animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.06 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image src={p.image} alt={p.title} fill sizes="400px" className="object-cover" />
                </motion.div>
              ))}
              {active === null && (
                <div className="absolute inset-0 grid place-items-center">
                  <p className="font-serif text-xl italic text-noir/50">
                    Survolez une prestation
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Artiste band                                                        */
/* ------------------------------------------------------------------ */

export function ArtistsBand({
  items,
  eyebrow = "Nos artistes",
  title = "Des mains d'exception",
  lead = "Six maquilleuses, une même exigence : révéler la beauté unique de chaque femme qui franchit notre seuil.",
}: {
  items: typeof import("@/lib/data").ARTISTS;
  eyebrow?: string;
  title?: string;
  lead?: string;
}) {
  const cols = items.slice(0, 6);
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(110%_80%_at_15%_0%,#F8D7DA_0%,#FAFAFA_55%)] py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />

        <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-14 md:grid-cols-3 md:gap-x-6 lg:gap-x-10">
          {cols.map((artist, i) => (
            <motion.article
              key={artist.name}
              className="group relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className={cn(
                  "relative overflow-hidden rounded-3xl bg-powder",
                  i % 3 === 1 ? "md:mt-12" : i % 3 === 2 ? "md:mt-24" : ""
                )}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    sizes="(min-width: 1024px) 30vw, 45vw"
                    className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                </div>
                <span className="pointer-events-none absolute inset-3 rounded-2xl border border-cream/40 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-noir/80 to-transparent p-5 pt-16 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold">
                    {artist.years} d’expertise
                  </p>
                  <p className="mt-1 font-serif text-base italic text-cream/85">
                    {artist.specialty}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-noir md:text-2xl">
                    {artist.name}
                  </h3>
                  <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-mist">
                    {artist.role}
                  </p>
                </div>
                <span className="font-sans text-xs tabular-nums tracking-[0.25em] text-gold-deep">
                  {artist.index}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <Magnetic>
            <Button asChild variant="outline" size="lg">
              <Link href="/equipe" data-cursor="L'équipe">
                Rencontrer toute l’équipe
              </Link>
            </Button>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Philosophie — manifesto                                             */
/* ------------------------------------------------------------------ */

export function Philosophie({
  eyebrow = "Notre philosophie",
  title = "La beauté n'est pas un masque. C'est une révélation.",
  lead = "Nous ne maquillons pas pour transformer, mais pour révéler. Chaque visage a sa lumière ; notre métier est de la trouver, de la caresser et de la faire durer.",
  signature = "Camille Fontaine",
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
  signature?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-noir py-28 text-cream md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_20%,rgba(212,175,55,0.1),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_10%_90%,rgba(192,132,151,0.16),transparent_70%)]" />

      <div className="relative mx-auto flex max-w-[1100px] flex-col items-start gap-10 px-6 md:px-10">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h2 className="font-display text-[clamp(2.2rem,5.4vw,4.8rem)] font-medium leading-[1.06] tracking-[-0.015em] text-cream">
          {title.split(" ").map(
            (word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]"
              >
                <motion.span
                  className="inline-block"
                  initial={{ y: "112%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.85, delay: i * 0.018, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
                {i < title.split(" ").length - 1 ? " " : null}
              </span>
            )
          )}
        </h2>
        <Reveal delay={0.2} y={24}>
          <p className="max-w-2xl font-serif text-xl italic leading-relaxed text-cream/70 md:text-2xl">
            {lead}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="flex items-center gap-4 font-sans text-[11px] uppercase tracking-[0.28em] text-gold">
            <span className="hairline-gold w-10" aria-hidden />
            {signature}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Marquee band                                                        */
/* ------------------------------------------------------------------ */

export function MarqueeBand({
  items,
}: {
  items?: string[];
}) {
  const words = items ?? [
    "Maquillage Mariée",
    "Cours de Maquillage",
    "Beauty Studio",
    "Haute Couture Beauté",
    "Maquillage Éditorial",
    "Rituels de Beauté",
  ];
  const row = (hidden?: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {words.map((w) => (
        <span key={w} className="flex items-center">
          <span className="whitespace-nowrap px-8 font-display text-[clamp(1.8rem,4vw,3.4rem)] font-medium italic text-gold-deep">
            {w}
          </span>
          <svg width="22" height="34" viewBox="0 0 22 34" fill="none" aria-hidden className="shrink-0 opacity-60">
            <path d="M11 1C5 10 1 16 1 23a10 10 0 0 0 20 0c0-7-4-13-10-22Z" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </span>
      ))}
    </div>
  );
  return (
    <div className="relative overflow-hidden border-y border-gold/20 bg-gradient-to-r from-powder via-[#F6D8DC] to-powder py-7 md:py-9">
      <div className="flex w-max animate-marquee" style={{ animationDuration: "48s" }}>
        {row()}
        {row(true)}
      </div>
    </div>
  );
}
