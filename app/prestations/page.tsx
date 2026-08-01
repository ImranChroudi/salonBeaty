import Link from "next/link";

import { PageHero } from "@/components/blocks/page-hero";
import { CtaBand } from "@/components/blocks/cta-band";
import { PrestationsList } from "@/components/home/sections";
import {
  ArchImage,
  Eyebrow,
  Magnetic,
  Reveal,
  WordReveal,
} from "@/components/motion/primitives";
import { Button } from "@/components/ui/button";
import { JsonLd, buildMetadata, schemaBreadcrumb, schemaPage } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Prestations",
  description:
    "Six univers de beauté à Maison Lumière : maquillage mariée, éclat soirée, studio professionnel, école du regard, self-care et séance photographie. Chaque prestation est une œuvre unique.",
  path: "/prestations",
});

const DETAILS = [
  {
    title: "L'Éclat Soirée",
    text: "Un rendez-vous à la tombée du jour pour les soirs qui comptent. Votre artiste compose un regard intense ou un teint de perle, puis vous guide vers la lumière : chaque texture est choisie pour la tenue, chaque pigment pour votre carnation.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&h=1500&auto=format&fit=crop",
    alt: "Maquillage soirée regard intense",
  },
  {
    title: "Le Rituel Self-Care",
    text: "Séance éclat express, lisse des sourcils au design, extensions de cils. Un cocon de douceur pour retrouver une peau reposée et un regard ouvert — en moins de temps qu'il n'en faut pour oublier sa journée.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&h=1500&auto=format&fit=crop",
    alt: "Rituel de soin de la peau",
  },
  {
    title: "La Séance Photographie",
    text: "Maquillage beauté puis portrait dirigé en lumière douce. Vous repartez avec vingt images retouchées, libres de droits, dans une galerie privée. Un instant de vous, juste vous, sans fard ni artifice.",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&h=1500&auto=format&fit=crop",
    alt: "Séance photographie beauté",
  },
];

export default function PrestationsPage() {
  return (
    <>
      <JsonLd data={schemaPage("/prestations", "Prestations — Maison Lumière")} />
      <JsonLd
        data={schemaBreadcrumb("/prestations", [{ name: "Prestations" }])}
      />

      <PageHero
        eyebrow="Prestations"
        title="Six univers, un seul art"
        lead="Chaque prestation est une œuvre unique, dessinée à la main, à l'écoute de votre peau, de vos couleurs et de votre histoire."
        image="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="Produits de maquillage haut de gamme"
        index="02"
      >
        <Magnetic>
          <Button asChild size="lg">
            <Link href="/reservation" data-cursor="Réserver">
              Réserver une prestation
            </Link>
          </Button>
        </Magnetic>
      </PageHero>

      <PrestationsList
        eyebrow="La carte"
        title="Choisissez votre rituel"
        lead="Six gestes, six ambiances. Survolez chaque ligne pour découvrir l'univers qui la porte."
        showCta={false}
      />

      <section className="relative overflow-hidden bg-[radial-gradient(120%_100%_at_80%_0%,#E8B4BC_0%,#F8D7DA_40%,#FAFAFA_100%)] py-24 md:py-32">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <div className="flex flex-col items-start gap-6">
            <Eyebrow>En détail</Eyebrow>
            <h2 className="font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-medium leading-[1.05] text-noir">
              <WordReveal text="Trois rituels, racontés" />
            </h2>
          </div>

          <div className="mt-14 flex flex-col gap-16">
            {DETAILS.map((d, i) => (
              <Reveal key={d.title} delay={0.05}>
                <div
                  className={`grid items-center gap-10 md:gap-14 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  } md:grid-cols-2`}
                >
                  <div>
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep">
                      Nº {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.4rem)] font-medium text-noir">
                      {d.title}
                    </h3>
                    <p className="mt-4 max-w-md font-sans text-[15px] leading-relaxed text-mist">
                      {d.text}
                    </p>
                  </div>
                  <ArchImage
                    src={d.image}
                    alt={d.alt}
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

      <CtaBand
        title="Composez votre rituel"
        lead="Une prestation peut en appeler une autre : l'éclat soirée après le self-care, la séance photo après l'école du regard. Écrivons votre histoire."
        image="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="Le studio Maison Lumière"
      />
    </>
  );
}
