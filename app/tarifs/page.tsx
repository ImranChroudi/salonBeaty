import Link from "next/link";

import { PageHero } from "@/components/blocks/page-hero";
import { CtaBand } from "@/components/blocks/cta-band";
import { TarifCards } from "@/components/blocks/tarif-cards";
import { PriceTable } from "@/components/blocks/pricing-table";
import { Magnetic, Reveal } from "@/components/motion/primitives";
import { Button } from "@/components/ui/button";
import { JsonLd, buildMetadata, schemaBreadcrumb, schemaPage } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Tarifs",
  description:
    "Les tarifs Maison Lumière : éclat soirée dès 95 €, rituel mariée 440 € en formule complète, école du regard dès 120 €, séance photographie 240 €. Transparence et élégance.",
  path: "/tarifs",
});

export default function TarifsPage() {
  return (
    <>
      <JsonLd data={schemaPage("/tarifs", "Tarifs — Maison Lumière")} />
      <JsonLd
        data={schemaBreadcrumb("/tarifs", [{ name: "Tarifs" }])}
      />

      <PageHero
        eyebrow="Les tarifs"
        title="La signature, chiffrée"
        lead="Des prix clairs, sans surprise. Chaque prestation inclut notre exigence de matière et de geste — le reste n'est que du détail."
        image="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="Rouges à lèvres haut de gamme"
        index="07"
      />

      <section className="relative bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <TarifCards />

          <div className="mt-24 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
            <div>
              <h2 className="font-display text-[clamp(2rem,4.4vw,3.2rem)] font-medium leading-tight text-noir">
                La grille complète
              </h2>
              <p className="mt-4 max-w-md font-serif text-lg italic leading-relaxed text-mist">
                Chaque prestation, sa durée, son tarif. La transparence est une
                forme de respect.
              </p>
              <div className="mt-8">
                <PriceTable />
              </div>
            </div>

            <div className="flex flex-col justify-between gap-10">
              <div className="rounded-3xl border border-gold/40 bg-[radial-gradient(120%_120%_at_50%_0%,#F8D7DA_0%,#FAFAFA_60%)] p-8 md:p-10">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-deep">
                  Bon à savoir
                </p>
                <ul className="mt-6 space-y-5">
                  {[
                    "L'essai mariée (150 €) est déduit de votre formule le jour J.",
                    "Le déplacement est offert pour les formules mariage complètes.",
                    "Les coffrets cadeaux de nos cours sont valables 12 mois.",
                    "Un acompte confirme les mariages et les séances photo.",
                  ].map((note) => (
                    <li key={note} className="flex items-start gap-4">
                      <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                      <span className="font-sans text-sm leading-relaxed text-noir/80">
                        {note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Reveal>
                <Magnetic>
                  <Button asChild size="lg" variant="default" className="w-full">
                    <Link href="/reservation" data-cursor="Réserver">
                      Réserver ma séance
                    </Link>
                  </Button>
                </Magnetic>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Le tarif n'est qu'un début"
        lead="La vraie valeur d'une séance se mesure à la façon dont vous vous quittez le miroir. Venez vérifier par vous-même."
        image="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="Portrait en lumière dorée"
      />
    </>
  );
}
