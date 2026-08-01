import Link from "next/link";
import Image from "next/image";

import { PageHero } from "@/components/blocks/page-hero";
import { CtaBand } from "@/components/blocks/cta-band";
import { ProcessSteps } from "@/components/blocks/process-steps";
import { Magnetic, Reveal, WordReveal } from "@/components/motion/primitives";
import { Button } from "@/components/ui/button";
import { ARTISTS, COURS_FORMULES, COURS_STEPS } from "@/lib/data";
import { JsonLd, buildMetadata, schemaBreadcrumb, schemaPage } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Cours de Maquillage",
  description:
    "L'École du Regard de Maison Lumière : cours de maquillage individuels et collectifs à Paris. Apprenez à révéler votre propre beauté avec les gestes des professionnels.",
  path: "/cours-de-maquillage",
});

export default function CoursPage() {
  const formatrice = ARTISTS[5];
  return (
    <>
      <JsonLd data={schemaPage("/cours-de-maquillage", "Cours de Maquillage — Maison Lumière")} />
      <JsonLd
        data={schemaBreadcrumb("/cours-de-maquillage", [{ name: "Cours de Maquillage" }])}
      />

      <PageHero
        eyebrow="L'École du Regard"
        title="Apprendre à se révéler"
        lead="Gestes professionnels, matière, couleurs : apprenez à révéler votre propre beauté, à votre rythme, dans l'intimité de l'atelier."
        image="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="Application d'ombres à paupières pendant un cours"
        index="05"
      >
        <Magnetic>
          <Button asChild size="lg">
            <Link href="/reservation" data-cursor="Réserver">
              Réserver un cours
            </Link>
          </Button>
        </Magnetic>
      </PageHero>

      <section className="relative bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="flex flex-col items-start gap-6">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep">
              Les formules
            </p>
            <h2 className="font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-medium leading-[1.05] text-noir">
              <WordReveal text="Trois paliers, un regard" />
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {COURS_FORMULES.map((f, i) => (
              <article
                key={f.name}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all duration-500 hover:border-gold/50 hover:shadow-[0_40px_90px_-35px_rgba(192,132,151,0.5)]"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center justify-between border-b border-border bg-powder/30 px-7 py-5">
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-deep">
                    {f.level}
                  </span>
                  <span className="font-display text-lg font-semibold text-deeprose">
                    {f.price}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-semibold text-noir">
                    {f.name}
                  </h3>
                  <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.2em] text-mist">
                    {f.duration}
                  </p>
                  <p className="mt-4 font-serif text-[15px] italic leading-relaxed text-noir/75">
                    {f.description}
                  </p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {f.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <span aria-hidden className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                        <span className="font-sans text-[13px] text-noir/75">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/reservation" data-cursor="Réserver">
                        Choisir cette formule
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <p className="font-serif text-lg italic text-mist">
              Nos cours sont aussi offerts en coffret cadeau, valable 12 mois.
            </p>
          </Reveal>
        </div>
      </section>

      <ProcessSteps
        eyebrow="Le déroulé"
        title="Un cours, trois temps"
        lead="La méthode Maison Lumière se transmet comme elle se pratique : par le geste, la matière et la lumière."
        steps={COURS_STEPS}
      />

      <section className="relative overflow-hidden bg-[radial-gradient(110%_90%_at_90%_10%,#F8D7DA_0%,#FAFAFA_60%)] py-24 md:py-32">
        <div className="mx-auto grid max-w-[1100px] items-center gap-12 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image
                  src={formatrice.image}
                  alt={formatrice.name}
                  fill
                  sizes="(min-width: 1024px) 30vw, 80vw"
                  className="object-cover"
                />
              </div>
              <span
                aria-hidden
                className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full border border-gold/40"
              />
            </div>
          </Reveal>
          <div className="flex flex-col items-start gap-6">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep">
              Votre formatrice
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.05] text-noir">
              <WordReveal text={`Avec ${formatrice.name}`} />
            </h2>
            <p className="font-serif text-lg italic leading-relaxed text-mist">
              {formatrice.quote}
            </p>
            <div className="flex flex-wrap gap-3">
              {[formatrice.role, `${formatrice.years} d'expérience`, formatrice.specialty].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-gold/40 px-4 py-2 font-sans text-[10px] uppercase tracking-[0.2em] text-gold-deep"
                  >
                    {chip}
                  </span>
                )
              )}
            </div>
            <Magnetic className="mt-2">
              <Button asChild size="lg">
                <Link href="/reservation" data-cursor="Réserver">
                  Réserver un cours
                </Link>
              </Button>
            </Magnetic>
          </div>
        </div>
      </section>

      <CtaBand
        title="Un cours, ou un cadeau"
        lead="Offrez une parenthèse d'apprentissage et de douceur. Vos proches en ressortiront plus lumineux — et plus sûrs de leur regard."
        image="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="Pinceaux de maquillage roses"
      />
    </>
  );
}
