"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { BeforeAfter, Magnetic } from "@/components/motion/primitives";
import { Button } from "@/components/ui/button";
import { AVANT_APRES, GALLERY, type GalleryItem } from "@/lib/data";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { key: "tous", label: "Tous" },
  { key: "mariée", label: "Mariée" },
  { key: "éditorial", label: "Éditorial" },
  { key: "soirée", label: "Soirée" },
  { key: "studio", label: "Studio" },
] as const;

type Cat = (typeof CATEGORIES)[number]["key"];

const SPANS = ["", "", "", "md:col-span-2 md:row-span-2", "", "", "", "md:col-span-2 md:row-span-2", "", "", "md:col-span-2 md:row-span-2", ""];

export function GalleryGrid() {
  const [cat, setCat] = React.useState<Cat>("tous");
  const [selected, setSelected] = React.useState<GalleryItem | null>(null);

  const items = cat === "tous" ? GALLERY : GALLERY.filter((g) => g.category === cat);

  const counts = React.useMemo(() => {
    const map: Record<string, number> = { tous: GALLERY.length };
    for (const c of CATEGORIES) {
      if (c.key === "tous") continue;
      map[c.key] = GALLERY.filter((g) => g.category === c.key).length;
    }
    return map;
  }, []);

  const handleKey = React.useCallback(
    (e: KeyboardEvent) => {
      if (!selected) return;
      const idx = GALLERY.findIndex((g) => g.caption === selected.caption);
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") setSelected(GALLERY[(idx + 1) % GALLERY.length]);
      if (e.key === "ArrowLeft")
        setSelected(GALLERY[(idx - 1 + GALLERY.length) % GALLERY.length]);
    },
    [selected]
  );

  React.useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <>
      <div className="mb-12 flex flex-wrap items-center gap-3" role="tablist" aria-label="Filtrer la galerie">
        {CATEGORIES.map((c) => {
          const active = cat === c.key;
          return (
            <button
              key={c.key}
              role="tab"
              aria-selected={active}
              onClick={() => setCat(c.key)}
              className={cn(
                "group flex items-center gap-2 rounded-full border px-5 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                active
                  ? "border-noir bg-noir text-cream"
                  : "border-border bg-white text-noir/70 hover:border-gold hover:text-gold-deep"
              )}
            >
              {c.label}
              <span
                className={cn(
                  "font-sans text-[9px] tabular-nums",
                  active ? "text-gold" : "text-mist"
                )}
              >
                {counts[c.key]}
              </span>
            </button>
          );
        })}
      </div>

      <motion.ul
        layout
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[240px]"
      >
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.li
              layout
              key={item.caption}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group relative cursor-zoom-in overflow-hidden bg-powder",
                i < SPANS.length ? SPANS[i] : "",
                SPANS[i] ? "rounded-3xl" : "rounded-3xl"
              )}
            >
              <button
                type="button"
                onClick={() => setSelected(item)}
                aria-label={`Agrandir : ${item.caption}`}
                data-cursor="Voir"
                className="absolute inset-0 z-10 h-full w-full"
              />
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 90vw"
                className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-108"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-noir/70 to-transparent p-5 pt-14 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-serif text-lg italic text-cream">{item.caption}</p>
                <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold">
                  {item.category}
                </p>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[160] flex items-center justify-center bg-noir/85 p-4 backdrop-blur-md md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selected.caption}
          >
            <motion.figure
              className="relative max-h-full w-full max-w-4xl"
              initial={{ scale: 0.92, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 12 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl md:aspect-auto md:h-[78vh]">
                <Image
                  src={selected.src}
                  alt={selected.alt}
                  fill
                  sizes="80vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-5 flex flex-wrap items-center justify-between gap-3 text-cream">
                <span className="font-serif text-xl italic">{selected.caption}</span>
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold">
                  {selected.category} · Maison Lumière
                </span>
              </figcaption>
              <div className="absolute -top-2 right-0 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-cream/30 font-sans text-sm text-cream transition-colors hover:border-gold hover:text-gold"
                  aria-label="Fermer"
                >
                  ✕
                </button>
              </div>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function GalleryBeforeAfter() {
  return (
    <div className="mx-auto mt-24 grid max-w-[1100px] items-start gap-12 px-6 md:px-10 lg:grid-cols-2 lg:items-center lg:gap-20">
      <div className="flex flex-col items-start gap-6 lg:hidden">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep">
          Avant / Après
        </p>
        <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[1.05] text-noir">
          La main qui révèle
        </h2>
      </div>
      <BeforeAfter
        before={AVANT_APRES.before}
        after={AVANT_APRES.after}
        className="shadow-[0_50px_120px_-40px_rgba(196,168,130,0.55)] lg:order-2"
      />
      <div className="flex flex-col items-start gap-6 lg:order-1">
        <div className="hidden lg:block">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep">
            Avant / Après
          </p>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[1.05] text-noir">
            La main qui révèle
          </h2>
        </div>
        <p className="max-w-md font-serif text-lg italic leading-relaxed text-mist">
          Faites glisser le voile doré : le même visage, la même femme — simplement
          révélée par le geste Maison Lumière.
        </p>
        <Magnetic>
          <Button asChild variant="outline" size="lg">
            <a href="/reservation" data-cursor="Réserver">
              Vivre l’expérience
            </a>
          </Button>
        </Magnetic>
      </div>
    </div>
  );
}
