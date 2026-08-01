"use client";

import { Reveal } from "@/components/motion/primitives";
import { PRICE_LINES } from "@/lib/data";

export function PriceTable() {
  return (
    <Reveal>
      <div className="overflow-hidden rounded-3xl border border-border bg-white">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">Grille tarifaire détaillée de Maison Lumière</caption>
          <thead>
            <tr className="border-b border-border bg-powder/40">
              <th scope="col" className="px-6 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-noir/70">
                Prestation
              </th>
              <th scope="col" className="px-6 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-noir/70">
                Durée
              </th>
              <th scope="col" className="px-6 py-4 text-right font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-noir/70">
                Tarif
              </th>
            </tr>
          </thead>
          <tbody>
            {PRICE_LINES.map((line) => (
              <tr
                key={line.service}
                className="group border-b border-border/60 transition-colors last:border-0 hover:bg-powder/25"
              >
                <td className="px-6 py-4 font-sans text-sm text-noir/85 transition-colors group-hover:text-deeprose">
                  {line.service}
                </td>
                <td className="px-6 py-4 font-sans text-sm text-mist">
                  {line.duration}
                </td>
                <td className="px-6 py-4 text-right font-display text-sm font-semibold text-gold-deep">
                  {line.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  );
}
