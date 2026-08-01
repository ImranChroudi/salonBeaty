import { HomeHero } from "@/components/home/hero";
import {
  ArtistsBand,
  MarqueeBand,
  Philosophie,
  PrestationsList,
} from "@/components/home/sections";
import {
  AvisFeatured,
  FaqPreview,
  GalerieStrip,
  Histoire,
  InstagramBand,
} from "@/components/home/sections2";
import { CtaBand } from "@/components/blocks/cta-band";
import { JsonLd, schemaPage } from "@/lib/site";
import { ARTISTS } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={schemaPage("/", "Maison Lumière — Atelier de Maquillage & Beauté de Luxe")} />

      <HomeHero />
      <MarqueeBand />
      <Histoire />
      <Philosophie />
      <ArtistsBand items={ARTISTS.slice(0, 3)} />
      <PrestationsList />
      <GalerieStrip />
      <InstagramBand />
      <AvisFeatured />
      <FaqPreview />
      <CtaBand image="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&h=1500&auto=format&fit=crop" alt="Notre atelier de maquillage" />
    </>
  );
}
