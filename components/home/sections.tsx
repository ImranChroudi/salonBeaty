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
  WordReveal,
} from "@/components/motion/primitives";
import { Button } from "@/components/ui/button";
import { PRESTATIONS } from "@/lib/data";
import { cn } from "@/lib/utils";

const PRESTATION_ICONS: React.ReactNode[] = [
  <svg key="mariée" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" className="h-5 w-5">
    <circle cx="9" cy="14" r="5.5" />
    <circle cx="15" cy="14" r="5.5" />
    <path d="M7.5 5c1.5-1.5 3-2 4.5-2s3 .5 4.5 2" />
  </svg>,
  <svg key="soirée" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
    <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" />
  </svg>,
  <svg key="studio" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2.5a9.5 9.5 0 0 1 8.23 14.25M12 2.5A9.5 9.5 0 0 0 3.77 16.75M12 2.5v6M21.5 12h-6M2.5 12h6M12 21.5v-6M20 20l-4-4M4 20l4-4" />
  </svg>,
  <svg key="école" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z" />
    <circle cx="12" cy="12" r="2.8" />
    <path d="M12 9.2c1.6-.4 3.4.1 4.6 1.4" />
  </svg>,
  <svg key="self-care" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M12 3c3.6 5.2 6 8.2 6 11.2a6 6 0 0 1-12 0C6 11.2 8.4 8.2 12 3z" />
    <path d="M12 9.5V21" />
  </svg>,
  <svg key="photo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="M7 5l1.2-1.8h7.6L17 5M3.5 10h2.2M18.5 10H21" />
  </svg>,
];

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

  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,rgba(216,193,150,0.14),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <motion.article
              key={p.no}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_50px_100px_-45px_rgba(196,168,130,0.55)]"
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-powder">
                <Link href={p.href} className="absolute inset-0 z-10" aria-label={p.title} />
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-noir/45 via-transparent to-transparent" />
                <span className="pointer-events-none absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-gold/50 bg-noir/45 text-gold backdrop-blur-sm transition-all duration-500 group-hover:bg-gold group-hover:text-noir">
                  {PRESTATION_ICONS[i % PRESTATION_ICONS.length]}
                </span>
                <span className="pointer-events-none absolute right-5 top-5 font-sans text-xs font-semibold tabular-nums tracking-[0.25em] text-cream/80">
                  Nº {p.no}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-[1.45rem] font-medium leading-snug text-noir transition-colors duration-500 group-hover:text-deeprose">
                  <Link href={p.href} className="focus-visible:outline-none focus-visible:underline focus-visible:underline-offset-4">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-1.5 font-serif text-base italic text-mist">{p.tagline}</p>
                <p className="mt-4 line-clamp-3 font-sans text-sm leading-relaxed text-noir/60">
                  {p.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-mist">
                    {p.duration}
                  </span>
                  <span className="font-display text-sm text-gold-deep">{p.price}</span>
                </div>

                <div className="mt-5">
                  <Button asChild variant="gold" size="sm" className="w-full">
                    <Link href="/reservation" data-cursor="Réserver">
                      Réserver une séance
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {showCta && (
          <Reveal delay={0.1} className="mt-16 text-center">
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
    <section className="relative overflow-hidden bg-[radial-gradient(110%_80%_at_15%_0%,#F3E9E1_0%,#FAFAFA_55%)] py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />

        <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-14 md:grid-cols-3 md:gap-x-6 lg:gap-x-10">
          {cols.map((artist, i) => (
            <motion.article
              key={artist.name}
              className="group relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_20%,rgba(201,169,110,0.1),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_10%_90%,rgba(196,168,130,0.16),transparent_70%)]" />

      <div className="relative mx-auto flex max-w-[1100px] flex-col items-start gap-10 px-6 md:px-10">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h2 className="font-display text-[clamp(2.2rem,5.4vw,4.8rem)] font-medium leading-[1.06] tracking-[-0.015em] text-cream">
          <WordReveal text={title} />
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
