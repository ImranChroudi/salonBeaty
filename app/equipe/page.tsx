import Link from "next/link";

import { PageHero } from "@/components/blocks/page-hero";
import { CtaBand } from "@/components/blocks/cta-band";
import { ArtistsBand } from "@/components/home/sections";
import { Magnetic, Reveal } from "@/components/motion/primitives";
import { Button } from "@/components/ui/button";
import { ARTISTS } from "@/lib/data";
import { JsonLd, buildMetadata, schemaBreadcrumb, schemaPage } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Notre Équipe",
  description:
    "Les artistes de Maison Lumière : Camille Fontaine, Éloïse Marchand, Sofia Renard, Amélie Beaulieu, Jade Laurent et Inès Vasseur. Des mains d'exception au service de votre beauté.",
  path: "/equipe",
});

export default function EquipePage() {
  return (
    <>
      <JsonLd data={schemaPage("/equipe", "Notre Équipe — Maison Lumière")} />
      <JsonLd
        data={schemaBreadcrumb("/equipe", [{ name: "Notre Équipe" }])}
      />

      <PageHero
        eyebrow="Notre équipe"
        title="Des mains d'exception"
        lead="Six artistes, une même exigence : révéler la beauté unique de chaque femme qui franchit notre seuil."
        image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="Une de nos maquilleuses"
        index="08"
      >
        <Magnetic>
          <Button asChild size="lg">
            <Link href="/reservation" data-cursor="Réserver">
              Réserver avec une artiste
            </Link>
          </Button>
        </Magnetic>
      </PageHero>

      <div className="bg-cream">
        <ArtistsBand
          items={ARTISTS}
          eyebrow="Les artistes"
          title="Six visages, un même geste"
          lead="Chaque artiste a sa signature, sa matière, sa lumière — toutes partagent la même écoute et la même exigence."
        />
      </div>

      <section className="relative overflow-hidden bg-[radial-gradient(110%_100%_at_50%_100%,#F8D7DA_0%,#FAFAFA_60%)] py-24 md:py-32">
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-8 px-6 text-center md:px-10">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep">
            Rejoignez-nous
          </p>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[1.05] text-noir">
            Votre place est peut-être ici
          </h2>
          <Reveal>
            <p className="max-w-xl font-serif text-lg italic leading-relaxed text-mist">
              Nous recrutons des artistes passionnés, formés aux maisons de luxe,
              qui partagent notre vision de la beauté révélée. Envoyez-nous votre
              book — nous répondons à chaque candidature.
            </p>
          </Reveal>
          <Magnetic>
            <Button asChild size="lg" variant="gold">
              <Link href="/contact" data-cursor="Candidature">
                Envoyer ma candidature
              </Link>
            </Button>
          </Magnetic>
        </div>
      </section>

      <CtaBand
        title="Choisissez votre artiste"
        lead="Camille, Éloïse, Sofia, Amélie, Jade ou Inès : chacune a sa signature. Laissez-vous guider, la rencontre décidera."
        image="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="Portrait maquillé"
      />
    </>
  );
}
