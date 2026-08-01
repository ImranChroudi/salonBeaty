import Link from "next/link";

import { PageHero } from "@/components/blocks/page-hero";
import { CtaBand } from "@/components/blocks/cta-band";
import { Philosophie } from "@/components/home/sections";
import {
  Eyebrow,
  Magnetic,
  Reveal,
  WordReveal,
} from "@/components/motion/primitives";
import { Button } from "@/components/ui/button";
import { buildMetadata, schemaBreadcrumb, schemaPage } from "@/lib/site";
import { JsonLd } from "@/components/jsonld";

export const metadata = buildMetadata({
  title: "À propos",
  description:
    "Découvrez l'histoire de Maison Lumière, atelier de maquillage & beauté de luxe à Paris depuis 2013. Une maison née d'une intuition : la beauté se révèle, elle ne se fabrique pas.",
  path: "/a-propos",
});

const TIMELINE = [
  { year: "2013", title: "La naissance", text: "Camille Fontaine ouvre un atelier de trois mètres carrés rue de la Paix. Une poudre, une lumière et une conviction." },
  { year: "2016", title: "La première équipe", text: "Éloïse et Amélie rejoignent la maison. Les mariées affluent ; l'atelier s'agrandit et s'illumine." },
  { year: "2019", title: "L'école du regard", text: "Nous ouvrons nos cours de maquillage : apprendre à se révéler devient l'un de nos plus beaux métiers." },
  { year: "2022", title: "Le studio", text: "Un second espace dédié au maquillage professionnel : éditorial, défilés, marques et photographie." },
  { year: "2025", title: "La transmission", text: "Six artistes, deux ateliers, 5000 clientes. La maison continue d'apprendre — et c'est là toute sa force." },
];

const ENGAGEMENTS = [
  { no: "01", title: "Des matières d'exception", text: "Des maisons de beauté premium et clean : pigments haute pureté, soins haut de gamme, textures fines." },
  { no: "02", title: "Une hygiène absolue", text: "Matériel stérilisé après chaque cliente, pinceaux lavés à chaque prestation, packaging à usage unique." },
  { no: "03", title: "Des gestes formés", text: "Nos artistes sont formés auprès des plus grandes maisons et suivent une formation continue toute l'année." },
  { no: "04", title: "Une écoute vraie", text: "Chaque séance commence par une conversation. Nous ne dessinons pas un visage : nous écoutons une femme." },
];

export default function AProposPage() {
  return (
    <>
      <JsonLd data={schemaPage("/a-propos", "À propos — Maison Lumière")} />
      <JsonLd
        data={schemaBreadcrumb("/a-propos", [{ name: "À propos" }])}
      />

      <PageHero
        eyebrow="Notre histoire"
        title="Une maison, une lumière"
        lead="Depuis 2013, Maison Lumière dessine les regards de celles qui franchissent notre seuil — avec la même intuition qu'au premier jour."
        image="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="Notre atelier de beauté"
        index="01"
      >
        <Magnetic>
          <Button asChild size="lg">
            <Link href="/equipe" data-cursor="L'équipe">
              Rencontrer nos artistes
            </Link>
          </Button>
        </Magnetic>
      </PageHero>

      <section className="relative bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1000px] px-6 md:px-10">
          <Eyebrow>La trajectoire</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,3.8rem)] font-medium leading-[1.05] text-noir">
            <WordReveal text="Douze années de lumière" />
          </h2>

          <div className="relative mt-16 flex flex-col gap-0 border-l border-border pl-8 md:ml-6 md:pl-14">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05} className="relative pb-12 last:pb-0">
                <span
                  aria-hidden
                  className="absolute -left-[41px] top-2 h-3 w-3 rounded-full border-2 border-gold bg-cream md:-left-[61px]"
                />
                <p className="font-display text-2xl font-semibold text-gold-deep md:text-3xl">
                  {t.year}
                </p>
                <h3 className="mt-2 font-display text-xl font-medium text-noir">
                  {t.title}
                </h3>
                <p className="mt-2 max-w-xl font-sans text-[15px] leading-relaxed text-mist">
                  {t.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Philosophie
        eyebrow="Notre philosophie"
        title="Nous ne maquillons pas pour transformer. Nous maquillons pour révéler."
        lead="Chaque visage a sa lumière ; notre métier est de la trouver, de la caresser et de la faire durer. C'est la seule méthode de la maison, inchangée depuis 2013."
      />

      <section className="relative overflow-hidden bg-[radial-gradient(100%_90%_at_10%_100%,#F3E9E1_0%,#FAFAFA_60%)] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <Eyebrow>Nos engagements</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.1rem,4.6vw,3.4rem)] font-medium leading-[1.06] text-noir">
            <WordReveal text="L'exigence est une forme d'élégance" />
          </h2>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {ENGAGEMENTS.map((e, i) => (
              <Reveal key={e.no} delay={(i % 2) * 0.1}>
                <div className="flex gap-6">
                  <span className="font-sans text-sm font-semibold tabular-nums tracking-[0.25em] text-gold-deep">
                    {e.no}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-noir">
                      {e.title}
                    </h3>
                    <p className="mt-2 font-sans text-[15px] leading-relaxed text-mist">
                      {e.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Venez vivre l'expérience"
        lead="Une première visite, une conversation, un regard. Nous vous attendons rue de la Paix, au cœur de Paris."
        image="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="Portrait maquillé en lumière dorée"
      />
    </>
  );
}
