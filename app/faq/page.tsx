import Link from "next/link";

import { PageHero } from "@/components/blocks/page-hero";
import { CtaBand } from "@/components/blocks/cta-band";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Magnetic, Reveal } from "@/components/motion/primitives";
import { Button } from "@/components/ui/button";
import { FAQS } from "@/lib/data";
import { JsonLd, buildMetadata, schemaBreadcrumb, schemaPage } from "@/lib/site";

export const metadata = buildMetadata({
  title: "FAQ",
  description:
    "Vos questions, nos réponses : réservation, tarifs, produits, essai mariée, cours de maquillage, annulation et déplacement. La FAQ de Maison Lumière.",
  path: "/faq",
});

function schemaFaq() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export default function FaqPage() {
  return (
    <>
      <JsonLd data={schemaPage("/faq", "FAQ — Maison Lumière")} />
      <JsonLd data={schemaFaq()} />
      <JsonLd data={schemaBreadcrumb("/faq", [{ name: "FAQ" }])} />

      <PageHero
        eyebrow="Questions fréquentes"
        title="Avant votre venue"
        lead="Tout ce que vous vous demandez, sans détour. Et si une question demeure, nous y répondons avec le même soin que nous mettons à votre regard."
        image="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="Rituel de beauté"
        index="10"
      />

      <section className="relative bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[820px] px-6 md:px-10">
          <Accordion type="single" collapsible>
            {FAQS.map((faq, i) => (
              <AccordionItem key={faq.question} value={`faq-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Reveal className="mt-14 flex flex-col items-center gap-5 rounded-3xl border border-gold/40 bg-[radial-gradient(120%_120%_at_50%_0%,#F8D7DA_0%,#FAFAFA_60%)] p-10 text-center">
            <p className="font-display text-2xl font-medium text-noir">
              Une autre question ?
            </p>
            <p className="max-w-md font-serif text-lg italic text-mist">
              Notre équipe vous répond sous 24 h, avec la même douceur que
              notre geste.
            </p>
            <Magnetic>
              <Button asChild size="lg">
                <Link href="/contact" data-cursor="Contacter">
                  Nous contacter
                </Link>
              </Button>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Les réponses n'attendent pas"
        lead="Réservez directement : la première consultation de 30 minutes est offerte dans notre atelier parisien."
        image="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="L'atelier Maison Lumière"
      />
    </>
  );
}
