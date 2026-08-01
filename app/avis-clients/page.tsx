import Link from "next/link";

import { PageHero } from "@/components/blocks/page-hero";
import { CtaBand } from "@/components/blocks/cta-band";
import { RatingBreakdown, ReviewsGrid } from "@/components/blocks/reviews";
import { Magnetic, Reveal, WordReveal } from "@/components/motion/primitives";
import { Button } from "@/components/ui/button";
import { buildMetadata, schemaBreadcrumb, schemaPage } from "@/lib/site";
import { JsonLd } from "@/components/jsonld";

export const metadata = buildMetadata({
  title: "Avis Clients",
  description:
    "5000 clientes satisfaites, 4.9/5 de note moyenne. Les avis clients de Maison Lumière : mariées, cours de maquillage, éclat soirée, séances photo et self-care.",
  path: "/avis-clients",
});

export default function AvisPage() {
  return (
    <>
      <JsonLd data={schemaPage("/avis-clients", "Avis Clients — Maison Lumière")} />
      <JsonLd
        data={schemaBreadcrumb("/avis-clients", [{ name: "Avis Clients" }])}
      />

      <PageHero
        eyebrow="Avis clients"
        title="Leur parole, notre lumière"
        lead="5000 femmes nous ont confié leur visage. Voici ce qu'elles en disent — sans fard, à l'image de notre maison."
        image="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="Cliente épanouie après sa séance"
        index="09"
      />

      <section className="relative bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <Reveal>
            <div className="grid gap-10 rounded-3xl border border-border bg-white p-8 md:p-12 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-16">
              <div className="flex flex-col items-center gap-3 text-center lg:pr-12 lg:text-left lg:items-start">
                <p className="font-display text-[clamp(4rem,9vw,7rem)] font-semibold leading-none text-noir">
                  4,9<span className="text-3xl text-deeprose">/5</span>
                </p>
                <div className="flex items-center gap-1" aria-label="4,9 étoiles sur 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-xl text-gold" aria-hidden>★</span>
                  ))}
                </div>
                <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-mist">
                  Basé sur 5000+ avis vérifiés
                </p>
              </div>
              <div className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
                <RatingBreakdown />
              </div>
            </div>
          </Reveal>

          <div className="mt-16 flex flex-col items-start gap-6">
            <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[1.05] text-noir">
              <WordReveal text="Ils nous ont confié leur visage" />
            </h2>
          </div>

          <div className="mt-12">
            <ReviewsGrid columns="md:grid-cols-2 lg:grid-cols-3" />
          </div>

          <Reveal className="mt-16 text-center">
            <Magnetic>
              <Button asChild size="lg" variant="gold">
                <Link href="/reservation" data-cursor="Réserver">
                  Vivez l’expérience à votre tour
                </Link>
              </Button>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Votre avis nous attend"
        lead="Après votre séance, votre mot nous fera avancer — comme celui des 5000 femmes qui nous ont précédées."
        image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="Cliente rayonnante"
      />
    </>
  );
}
