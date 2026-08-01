import { PageHero } from "@/components/blocks/page-hero";
import { CtaBand } from "@/components/blocks/cta-band";
import { GalleryBeforeAfter, GalleryGrid } from "@/components/galerie/gallery-grid";
import { JsonLd, buildMetadata, schemaBreadcrumb, schemaPage } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Galerie",
  description:
    "La galerie Maison Lumière : maquillage mariée, looks éditoriaux, maquillages soirée et work in progress de notre studio parisien. Avant / après et regards d'exception.",
  path: "/galerie",
});

export default function GaleriePage() {
  return (
    <>
      <JsonLd data={schemaPage("/galerie", "Galerie — Maison Lumière")} />
      <JsonLd
        data={schemaBreadcrumb("/galerie", [{ name: "Galerie" }])}
      />

      <PageHero
        eyebrow="La galerie"
        title="Une promenade de regards"
        lead="Mariées, éditoriaux, instants volés : la galerie de la maison se feuillette comme un magazine — lentement, pour mieux s'attarder."
        image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="Portrait éditorial maquillé"
        index="06"
      />

      <section className="relative bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <GalleryGrid />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(120%_100%_at_50%_0%,#F8D7DA_0%,#FAFAFA_60%)] py-24 md:py-32">
        <GalleryBeforeAfter />
      </section>

      <CtaBand
        title="Votre regard dans la galerie"
        lead="Chaque image de cette galerie a commencé par une conversation. La vôtre peut être la suivante."
        image="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1200&h=1500&auto=format&fit=crop"
        alt="Portrait beauté naturel"
      />
    </>
  );
}
