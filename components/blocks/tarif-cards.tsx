"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { TARIFS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function TarifCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {TARIFS.map((tarif, i) => (
        <motion.article
          key={tarif.name}
          className={cn(
            "group relative flex flex-col overflow-hidden rounded-3xl border p-8 transition-all duration-500",
            tarif.featured
              ? "border-gold bg-gradient-to-b from-noir to-[#3A3230] text-cream shadow-[0_40px_90px_-30px_rgba(44,38,36,0.55)]"
              : "border-border bg-white text-noir hover:border-gold/50 hover:shadow-[0_30px_70px_-35px_rgba(196,168,130,0.5)]"
          )}
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {tarif.featured && (
            <span className="absolute right-6 top-6 rounded-full bg-gold px-3 py-1 font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-noir">
              Signature
            </span>
          )}
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-deep">
            {tarif.name}
          </p>
          <p
            className={cn(
              "mt-3 font-serif text-[15px] italic leading-relaxed",
              tarif.featured ? "text-cream/65" : "text-mist"
            )}
          >
            {tarif.description}
          </p>
          <div className="mt-6 flex items-end gap-2">
            <span
              className={cn(
                "font-display text-[clamp(2.4rem,4vw,3.2rem)] font-semibold leading-none",
                tarif.featured ? "text-gold" : "text-deeprose"
              )}
            >
              {tarif.price}
            </span>
            <span
              className={cn(
                "pb-1 font-sans text-[11px] uppercase tracking-[0.15em]",
                tarif.featured ? "text-cream/55" : "text-mist"
              )}
            >
              {tarif.unit}
            </span>
          </div>
          <ul className="mt-8 flex-1 space-y-3">
            {tarif.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className={cn(
                    "mt-[7px] h-1 w-1 shrink-0 rounded-full",
                    tarif.featured ? "bg-gold" : "bg-deeprose"
                  )}
                />
                <span
                  className={cn(
                    "font-sans text-[13px] leading-relaxed",
                    tarif.featured ? "text-cream/75" : "text-noir/75"
                  )}
                >
                  {f}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button
              asChild
              variant={tarif.featured ? "gold" : "outline"}
              className="w-full"
            >
              <Link
                href="/reservation"
                data-cursor="Réserver"
              >
                {tarif.cta}
              </Link>
            </Button>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
