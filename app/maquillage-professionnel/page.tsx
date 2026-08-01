import Link from "next/link";

import { PageHero } from "@/components/blocks/page-hero";
import { CtaBand } from "@/components/blocks/cta-band";
import { ProcessSteps } from "@/components/blocks/process-steps";
import {
  ArchImage,
  Magnetic,
  Reveal,
  WordReveal,
} from "@/components/motion/primitives";
import { Button } from "@/components/ui/button";
import { PRO_PROCESS, PRO_UNIVERS } from "@/lib/data";
import { JsonLd, buildMetadata, schemaBreadcrumb, schemaPage } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Maquillage Professionnel",
  description:
    "Maquillage professionnel Maison Lumière : shooting éditorial, événements corporate, TV, cinéma et défilés. Une équipe mobile, des looks précis et rapides sous toutes les lumières.",
  path: "/maquillage-professionnel",
});

export default function ProPage() {
  return (
    <>
      <JsonLd data={schemaPage("/maquillage-professionnel", "Maquillage Professionnel — Maison Lumière")} />
      <JsonLd
        data={schemaBreadcrumb("/maquillage-professionnel", [{ name: "Maquillage Professionnel" }])}
      />

      <PageHero
        eyebrow="Le Studio"
        title="L'art du geste sous contrainte"
        lead="Une équipe mobile, une précision de plateau : nos artistes livrent des looks qui survivent au flash, au mouvement et au chronomètre."
        image="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="Maquillage professionnel en studio"
        index="04"
      >
        <Magnetic>
          <Button asChild size="lg" variant="gold">
            <Link href="/reservation" data-cursor="Devis">
              Demander un devis
            </Link>
          </Button>
        </Magnetic>
      </PageHero>

      <section className="relative bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <div className="flex flex-col items-start gap-6">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep">
              Nos univers
            </p>
            <h2 className="font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-medium leading-[1.05] text-noir">
              <WordReveal text="Quatre terrains de jeu" />
            </h2>
          </div>

          <div className="mt-14 flex flex-col gap-20">
            {PRO_UNIVERS.map((u, i) => (
              <Reveal key={u.no} delay={0.05}>
                <div
                  className={`grid items-center gap-10 md:gap-16 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  } md:grid-cols-2`}
                >
                  <div>
                    <p className="font-sans text-sm font-semibold tabular-nums tracking-[0.3em] text-gold-deep">
                      {u.no}
                    </p>
                    <h3 className="mt-3 font-display text-[clamp(1.7rem,3.2vw,2.6rem)] font-medium text-noir">
                      {u.title}
                    </h3>
                    <p className="mt-4 max-w-md font-sans text-[15px] leading-relaxed text-mist">
                      {u.text}
                    </p>
                  </div>
                  <ArchImage
                    src={u.image}
                    alt={u.title}
                    ratio="aspect-[4/3]"
                    sizes="(min-width: 768px) 46vw, 90vw"
                    className="shadow-[0_40px_100px_-40px_rgba(192,132,151,0.55)]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps
        eyebrow="La méthode studio"
        title="Du brief au geste"
        lead="Un processus cadré pour un résultat sans surprise : nous aimons que la beauté se décide avant, et se savoure après."
        steps={PRO_PROCESS}
      />

      <CtaBand
        title="Parlons de votre projet"
        lead="Un lancement, une campagne, un tournage ? Rencontrons-nous : le devis est gratuit, la direction artistique est toujours offerte."
        image="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="Maquillage des yeux éditorial"
      />
    </>
  );
}
