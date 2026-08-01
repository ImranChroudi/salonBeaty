import type { MetadataRoute } from "next";

import { SITE } from "@/lib/site";

const ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/a-propos", priority: 0.8 },
  { path: "/prestations", priority: 0.9 },
  { path: "/maquillage-mariee", priority: 0.9 },
  { path: "/maquillage-professionnel", priority: 0.7 },
  { path: "/cours-de-maquillage", priority: 0.8 },
  { path: "/galerie", priority: 0.7 },
  { path: "/tarifs", priority: 0.8 },
  { path: "/equipe", priority: 0.7 },
  { path: "/avis-clients", priority: 0.6 },
  { path: "/faq", priority: 0.6 },
  { path: "/contact", priority: 0.7 },
  { path: "/reservation", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));
}
