import Link from "next/link";
import Image from "next/image";

import { PageHero } from "@/components/blocks/page-hero";
import { CtaBand } from "@/components/blocks/cta-band";
import { ProcessSteps } from "@/components/blocks/process-steps";
import { MarqueeBand } from "@/components/home/sections";
import {
  FilmStrip,
  Magnetic,
  Reveal,
  WordReveal,
} from "@/components/motion/primitives";
import { Button } from "@/components/ui/button";
import {
  GALLERY,
  MARIAGE_OPTIONS,
  MARIAGE_RITUELS,
} from "@/lib/data";
import { buildMetadata, schemaBreadcrumb, schemaPage } from "@/lib/site";
import { JsonLd } from "@/components/jsonld";

export const metadata = buildMetadata({
  title: "Maquillage Mariée",
  description:
    "Le Rituel Mariée de Maison Lumière : essai privé, maquillage du jour J et suivi. Un maquillage de mariage pensé pour douze heures, dessiné par un artiste d'exception.",
  path: "/maquillage-mariee",
});

const BRIDAL_GALLERY = GALLERY.filter((g) => g.category === "mariée");

export default function MarieePage() {
  return (
    <>
      <JsonLd data={schemaPage("/maquillage-mariee", "Maquillage Mariée — Maison Lumière")} />
      <JsonLd
        data={schemaBreadcrumb("/maquillage-mariee", [{ name: "Maquillage Mariée" }])}
      />

      <PageHero
        eyebrow="Le Rituel Mariée"
        title="Le matin le plus précieux"
        lead="Un maquillage qui ne vous quitte pas — du premier pas à la dernière danse. L'essai, le jour J, le suivi : trois gestes, une seule promesse."
        image="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="Mariée au maquillage romantique"
        index="03"
      >
        <Magnetic>
          <Button asChild size="lg">
            <Link href="/reservation" data-cursor="Réserver">
              Réserver mon essai
            </Link>
          </Button>
        </Magnetic>
      </PageHero>

      <MarqueeBand items={["Essai privé", "Matin de mariage", "Tenue 12 heures", "Déplacement offert", "Trousse de secours"]} />

      <ProcessSteps
        eyebrow="Le rituel"
        title="Trois rendez-vous, un seul regard"
        lead="De l'essai au dernier échange de la soirée, nous sommes à vos côtés pour que votre beauté reste votre plus belle alliée."
        steps={MARIAGE_RITUELS.map((r) => ({
          no: r.no,
          title: r.title,
          time: r.time,
          text: r.text,
          image: r.image,
        }))}
      />

      <section className="relative bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <div className="flex flex-col items-start gap-6">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep">
              Les formules
            </p>
            <h2 className="font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-medium leading-[1.05] text-noir">
              <WordReveal text="Composez votre journée" />
            </h2>
          </div>

          <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-white">
            <ul className="divide-y divide-border">
              {MARIAGE_OPTIONS.map((opt, i) => (
                <Reveal key={opt.name} delay={i * 0.04}>
                  <li className="flex flex-wrap items-center justify-between gap-3 px-6 py-6 transition-colors hover:bg-powder/25 md:px-10">
                    <div className="flex items-baseline gap-4">
                      <span className="font-sans text-xs font-semibold tabular-nums tracking-[0.25em] text-gold-deep">
                        Nº {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-xl font-medium text-noir md:text-2xl">
                        {opt.name}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif text-base italic text-mist">
                        {opt.note}
                      </span>
                      <span className="font-display text-xl font-semibold text-deeprose md:text-2xl">
                        {opt.price}
                      </span>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal className="mt-10 text-center">
            <p className="font-serif text-lg italic text-mist">
              L’essai est déduit de votre formule le jour J.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(120%_100%_at_50%_0%,#F3E9E1_0%,#FAFAFA_60%)] py-24 md:py-32">
        <div className="mx-auto px-6 md:px-10">
          <div className="flex flex-col items-start gap-6">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep">
              Nos mariées
            </p>
            <h2 className="font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-medium leading-[1.05] text-noir">
              <WordReveal text="Des regards pour toujours" />
            </h2>
          </div>
        </div>

        <FilmStrip className="mt-14">
          {BRIDAL_GALLERY.map((item) => (
            <Link
              key={item.caption}
              href="/galerie"
              className="group relative block h-[420px] w-[330px] shrink-0 overflow-hidden rounded-t-[50%] rounded-b-3xl bg-powder"
              data-cursor="Voir"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="330px"
                className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-108"
              />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-noir/70 to-transparent p-6 pt-16 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-serif text-lg italic text-cream">
                  {item.caption}
                </span>
              </span>
            </Link>
          ))}
        </FilmStrip>
      </section>

      <CtaBand
        title="Votre regard, notre rituel"
        lead="Offrez-vous un essai pour entendre notre méthode — et sentir votre propre beauté. Le plus beau jour mérite les plus belles mains."
        image="https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="Préparation d'une mariée le matin du jour J"
      />
    </>
  );
}
