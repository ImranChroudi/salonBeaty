"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ReviewsCarousel } from "@/components/blocks/reviews";
import {
  ArchImage,
  BeforeAfter,
  Eyebrow,
  FilmStrip,
  Magnetic,
  Reveal,
  SectionHeading,
} from "@/components/motion/primitives";
import {
  AVANT_APRES,
  FAQS,
  GALLERY,
  INSTAGRAM_BAND,
  STATS,
} from "@/lib/data";

/* ------------------------------------------------------------------ */
/* Notre histoire                                                      */
/* ------------------------------------------------------------------ */

export function Histoire() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-36">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full border border-gold/15" />

      <div className="relative mx-auto grid max-w-[1440px] items-start gap-12 px-6 md:px-10 lg:grid-cols-2 lg:items-center lg:gap-24">
        <div className="lg:hidden">
          <SectionHeading
            eyebrow="Notre histoire"
            title="Une maison née d'une intuition"
            lead="En 2013, Camille Fontaine ouvre un petit atelier rue de la Paix avec un credo simple : la beauté ne se fabrique pas, elle se révèle."
          />
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <ArchImage
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&h=1500&auto=format&fit=crop"
            alt="Notre studio de beauté"
            ratio="aspect-[3/4]"
            sizes="(min-width: 1024px) 44vw, 90vw"
            className="shadow-[0_50px_120px_-40px_rgba(196,168,130,0.5)]"
          />
          <div className="glass absolute -right-5 bottom-10 rounded-2xl px-6 py-5 md:-right-10">
            <p className="font-display text-3xl font-semibold text-deeprose">2013</p>
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-noir/60">
              Naissance de l’atelier
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-8">
          <div className="hidden lg:block">
            <SectionHeading
              eyebrow="Notre histoire"
              title="Une maison née d'une intuition"
              lead="En 2013, Camille Fontaine ouvre un petit atelier rue de la Paix avec un credo simple : la beauté ne se fabrique pas, elle se révèle."
            />
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xl font-sans text-[15px] leading-relaxed text-mist">
              Douze années plus tard, Maison Lumière est devenue une adresse de
              référence, fidèle à cette première intuition. Nous avons écouté
              des milliers de visages, appris que chaque peau a son langage, que
              chaque regard a sa lumière. Nos artistes, formés auprès des plus
              grandes maisons, portent la même conviction : l’élégance est une
              promesse tenue dans le détail.
            </p>
          </Reveal>

          <dl className="mt-4 grid w-full grid-cols-3 gap-6 border-t border-border pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="order-2 font-sans text-[10px] uppercase leading-snug tracking-[0.14em] text-mist">
                  {stat.label}
                </dt>
                <dd className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-deeprose">
                  {stat.value.toLocaleString("fr-FR")}
                  {stat.suffix}
                </dd>
              </div>
            ))}
          </dl>

          <Magnetic>
            <Button asChild variant="outline">
              <Link href="/a-propos" data-cursor="L'histoire">
                Découvrir notre maison
              </Link>
            </Button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Galerie — film strip + avant / après                                */
/* ------------------------------------------------------------------ */

export function GalerieStrip() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_100%_at_50%_100%,#F3E9E1_0%,#FAFAFA_60%)] py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Galerie"
            title="Nos regards"
            lead="Une promenade dans nos plus beaux regards — mariées, éditoriaux, instants volés."
          />
          <Reveal>
            <Magnetic>
              <Button asChild variant="outline" size="lg">
                <Link href="/galerie" data-cursor="Galerie">
                  Toute la galerie
                </Link>
              </Button>
            </Magnetic>
          </Reveal>
        </div>
      </div>

      <FilmStrip className="mt-14">
        {GALLERY.map((item) => (
          <Link
            key={item.caption}
            href="/galerie"
            className="group relative block h-[380px] w-[300px] shrink-0 overflow-hidden rounded-t-[50%] rounded-b-3xl bg-powder md:h-[460px] md:w-[360px]"
            data-cursor="Voir"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="360px"
              className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-108"
            />
            <span className="absolute inset-3 rounded-t-[47%] rounded-b-2xl border border-cream/50 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-noir/70 to-transparent p-6 pt-16 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="font-serif text-lg italic text-cream">
                {item.caption}
              </span>
            </span>
          </Link>
        ))}
      </FilmStrip>

      <div className="mx-auto mt-20 grid max-w-[1440px] items-start gap-12 px-6 md:px-10 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="lg:hidden">
          <SectionHeading
            eyebrow="Avant / Après"
            title="La différence Maison Lumière"
            lead="Un teint unifié, un regard dessiné, une lumière posée — le geste de nos artistes en une image."
          />
        </div>
        <Reveal delay={0.1} className="lg:order-2">
          <BeforeAfter
            before={AVANT_APRES.before}
            after={AVANT_APRES.after}
            className="mx-auto max-w-md shadow-[0_50px_120px_-40px_rgba(196,168,130,0.55)] lg:max-w-none"
          />
        </Reveal>
        <div className="flex flex-col lg:order-1">
          <div className="hidden lg:block">
            <SectionHeading
              eyebrow="Avant / Après"
              title="La différence Maison Lumière"
              lead="Un teint unifié, un regard dessiné, une lumière posée — le geste de nos artistes en une image."
            />
          </div>
          <Reveal delay={0.1} className="mt-8">
            <p className="max-w-md font-sans text-[15px] leading-relaxed text-mist">
              Deux images, une seule cliente. Le maquillage ne doit jamais
              s’entendre ni se deviner : il doit seulement se voir — et se
              ressentir.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-8">
            <Magnetic>
              <Button asChild variant="gold">
                <Link href="/galerie" data-cursor="Galerie">
                  Voir la galerie complète
                </Link>
              </Button>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Instagram                                                           */
/* ------------------------------------------------------------------ */

export function InstagramBand() {
  const row = (hidden?: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {INSTAGRAM_BAND.map((src, i) => (
        <a
          key={i}
          href="https://instagram.com/maisonlumiere"
          target="_blank"
          rel="noreferrer"
          className="group relative m-2 block h-40 w-40 shrink-0 overflow-hidden rounded-2xl bg-powder md:h-48 md:w-48"
          aria-label="Voir sur Instagram"
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="192px"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <span className="absolute inset-0 grid place-items-center bg-noir/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-cream">
              Voir
            </span>
          </span>
        </a>
      ))}
    </div>
  );

  return (
    <section className="overflow-hidden bg-cream py-20 md:py-28">
      <div className="mx-auto mb-12 flex max-w-[1440px] flex-col items-center gap-4 px-6 text-center md:px-10">
        <Eyebrow>Le fil</Eyebrow>
        <h2 className="font-display text-[clamp(1.8rem,3.6vw,2.8rem)] font-medium text-noir">
          Suivez-nous sur Instagram
        </h2>
        <a
          href="https://instagram.com/maisonlumiere"
          target="_blank"
          rel="noreferrer"
          className="font-serif text-lg italic text-deeprose transition-colors hover:text-gold-deep"
        >
          @maisonlumiere
        </a>
      </div>

      <div
        className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-4 md:mx-0 md:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {INSTAGRAM_BAND.map((src, i) => (
          <a
            key={i}
            href="https://instagram.com/maisonlumiere"
            target="_blank"
            rel="noreferrer"
            className="group relative h-56 w-44 shrink-0 snap-center overflow-hidden rounded-3xl bg-powder"
            aria-label="Voir sur Instagram"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="176px"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-noir/60 to-transparent p-3 pt-10">
              <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-cream">
                @maisonlumiere
              </span>
            </span>
          </a>
        ))}
      </div>

      <div className="hidden w-max animate-marquee md:flex" style={{ animationDuration: "60s" }}>
        {row()}
        {row(true)}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Avis mis en avant                                                   */
/* ------------------------------------------------------------------ */

export function AvisFeatured() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(100%_90%_at_90%_10%,#E8DED4_0%,#F3E9E1_45%,#FAFAFA_100%)] py-24 md:py-36">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_left,rgba(201,169,110,0.14),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <Reveal>
            <div className="flex items-center gap-1" aria-label="4,9 étoiles sur 5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-xl text-gold" aria-hidden>
                  ★
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-mist">
              Ils nous ont confié leur visage
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-12">
          <ReviewsCarousel />
        </Reveal>

        <Reveal delay={0.1} className="mt-12 text-center">
          <Magnetic>
            <Button asChild variant="outline" size="lg">
              <Link href="/avis-clients" data-cursor="Avis">
                Lire tous les avis
              </Link>
            </Button>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ aperçu                                                          */
/* ------------------------------------------------------------------ */

export function FaqPreview() {
  return (
    <section className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[900px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Questions fréquentes"
          title="Avant votre venue"
          align="center"
        />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible>
            {FAQS.slice(0, 3).map((faq, i) => (
              <AccordionItem key={faq.question} value={`faq-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
        <Reveal className="mt-10 text-center">
          <Magnetic>
            <Button asChild variant="ghost" size="lg" className="text-deeprose">
              <Link href="/faq" data-cursor="FAQ">
                Toutes les questions
              </Link>
            </Button>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
