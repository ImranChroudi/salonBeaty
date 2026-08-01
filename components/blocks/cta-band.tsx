"use client";

import Link from "next/link";

import {
  ArchImage,
  Eyebrow,
  Magnetic,
  Reveal,
  WordReveal,
} from "@/components/motion/primitives";
import { Button } from "@/components/ui/button";

export function CtaBand({
  title = "Prenez rendez-vous",
  lead = "Offrez-vous une parenthèse d'exception dans notre atelier parisien. Chaque regard est unique, chaque séance est une œuvre.",
  image,
  alt = "L'atelier Maison Lumière",
}: {
  title?: string;
  lead?: string;
  image: string;
  alt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-noir text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_70%_100%,rgba(196,168,130,0.28),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="relative mx-auto grid max-w-[1440px] gap-16 px-6 py-24 md:px-10 lg:grid-cols-2 lg:items-center lg:gap-24 lg:py-32">
        <div className="flex flex-col items-start gap-8">
          <Eyebrow light>Le rituel</Eyebrow>
          <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-medium leading-[1.03] tracking-[-0.015em] text-cream">
            <WordReveal text={title} />
          </h2>
          <Reveal delay={0.15}>
            <p className="max-w-md font-serif text-[clamp(1.1rem,1.7vw,1.35rem)] italic leading-relaxed text-cream/65">
              {lead}
            </p>
          </Reveal>
          <Reveal delay={0.25} className="flex flex-wrap items-center gap-4">
            <Magnetic>
              <Button asChild size="lg" variant="gold">
                <Link href="/reservation" data-cursor="Réserver">
                  Réserver ma séance
                </Link>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild size="lg" variant="ghost" className="text-cream hover:bg-cream/10 hover:text-gold">
                <Link href="/tarifs" data-cursor="Tarifs">
                  Découvrir les tarifs
                </Link>
              </Button>
            </Magnetic>
          </Reveal>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <ArchImage
            src={image}
            alt={alt}
            ratio="aspect-[4/5]"
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="shadow-[0_60px_140px_-40px_rgba(0,0,0,0.6)]"
          />
          <div className="glass pointer-events-none absolute -left-6 bottom-8 hidden rounded-2xl px-5 py-4 md:block">
            <p className="font-display text-2xl text-gold">4.9 ★</p>
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-noir/70">
              5000+ clientes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
