import { PageHero } from "@/components/blocks/page-hero";
import { CtaBand } from "@/components/blocks/cta-band";
import { BookingForm } from "@/components/forms/booking-form";
import { Eyebrow, WordReveal } from "@/components/motion/primitives";
import { JsonLd, buildMetadata, schemaBreadcrumb, schemaPage } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Réservation",
  description:
    "Réservez votre séance à Maison Lumière : maquillage mariée, éclat soirée, cours de maquillage, séance photo. Trois étapes, une confirmation, un rendez-vous d'exception.",
  path: "/reservation",
});

export default function ReservationPage() {
  return (
    <>
      <JsonLd data={schemaPage("/reservation", "Réservation — Maison Lumière")} />
      <JsonLd
        data={schemaBreadcrumb("/reservation", [{ name: "Réservation" }])}
      />

      <PageHero
        eyebrow="Réservation"
        title="Votre rendez-vous, en trois gestes"
        lead="La prestation, la date, vos coordonnées. Le reste nous appartient — et il se passe à merveille."
        image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="Un regard prêt à être révélé"
        index="12"
      />

      <section className="relative bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="mb-14">
            <Eyebrow>La réservation</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.4vw,3.2rem)] font-medium leading-[1.05] text-noir">
              <WordReveal text="Composons votre venue" />
            </h2>
          </div>
          <BookingForm />
        </div>
      </section>

      <CtaBand
        title="Une question avant de réserver ?"
        lead="Une hésitation sur la prestation, un horaire particulier, une envie sur-mesure ? Écrivez-nous, nous trouvons toujours le juste geste."
        image="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="Portrait en lumière dorée"
      />
    </>
  );
}
