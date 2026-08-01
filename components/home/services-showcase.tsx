"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  BeforeAfter,
  Eyebrow,
  Reveal,
  SectionHeading,
} from "@/components/motion/primitives";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { SHOWCASE_SERVICES } from "@/lib/data";
import { waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const SERVICE_ICONS: React.ReactNode[] = [
  <svg key="visage" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M12 3c3.6 5.2 6 8.2 6 11.2a6 6 0 0 1-12 0C6 11.2 8.4 8.2 12 3z" />
    <path d="M8.5 13.5c.6-.4 1.3-.6 2-.6M14.5 13.5c-.6-.4-1.3-.6-2-.6" />
  </svg>,
  <svg key="maquillage" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
    <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" />
  </svg>,
  <svg key="cils" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" className="h-5 w-5">
    <path d="M2 9c3.5-1 6.5-1 10 0s6.5 1 10 0M3 11l1.5-2.2M8 11.5l.8-3M16 11.5l-.8-3M21 11l-1.5-2.2" />
    <path d="M6 18c1-2 2.5-3.5 6-3.5s5 1.5 6 3.5" />
  </svg>,
  <svg key="sourcils" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" className="h-5 w-5">
    <path d="M3 9c2.5-2 5-3 9-3s6.5 1 9 3M3 9l2 1.5M21 9l-2 1.5" />
    <path d="M5 10.5l2.5 2c1.4 1.1 3.6 1.1 5 0l2.5-2" />
  </svg>,
  <svg key="coiffure" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" className="h-5 w-5">
    <path d="M4 16c1.5-4 4-6 8-6s6.5 2 8 6" />
    <path d="M6 20c2-2 4-3 6-3s4 1 6 3" />
    <path d="M12 10V5M12 5l-2-1M12 5l2-1" />
  </svg>,
  <svg key="coloration" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" className="h-5 w-5">
    <path d="M12 3v6M12 9l-2.5 2.5M12 9l2.5 2.5" />
    <path d="M9.5 11.5l-2 2.2a2 2 0 0 0 2.9 2.8l2-2.3M14.5 11.5l2 2.2a2 2 0 0 1-2.9 2.8l-2-2.3" />
    <path d="M7.5 13.7L4 17.5a2 2 0 0 0 2.9 2.8l3.5-3.8" />
  </svg>,
  <svg key="capillaire" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" className="h-5 w-5">
    <path d="M4 7c1.5-1.5 3-2.5 4.5-2.5C11 4.5 11 7 12.5 7s1.5-2.5 4-2.5C18 4.5 19.5 5.5 21 7" />
    <path d="M5 10c2-1.5 4-2.5 5.5-2.5 2.5 0 2.5 2.5 4 2.5s1.5-2.5 4-2.5c1 0 2 .3 3 .9M6 14c2-1.5 4-2.5 5.5-2.5 2.5 0 2.5 2.5 4 2.5s1.5-2.5 4-2.5M8 18c2-1 3.5-2 4.5-2s2.5 1 4.5 2" />
  </svg>,
  <svg key="manucure" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" className="h-5 w-5">
    <path d="M8 3l3 6-1.5 1.5L12 13l-2 2-1-1.5-2 1L5 12l1-2.5L4.5 7" />
    <path d="M15 10l2 4 1.5 3M17 14l3 1M18.5 17l1 3M17 14l-3 1" />
  </svg>,
  <svg key="mariée" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" className="h-5 w-5">
    <circle cx="9" cy="14" r="5.5" />
    <circle cx="15" cy="14" r="5.5" />
    <path d="M7.5 5c1.5-1.5 3-2 4.5-2s3 .5 4.5 2" />
  </svg>,
  <svg key="peau" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M12 4c5 6 8 9.5 8 13a8 8 0 0 1-16 0c0-3.5 3-7 8-13z" />
    <path d="M12 12c-1.5 1.5-2.5 2.5-2.5 4a2.5 2.5 0 0 0 5 0c0-1.5-1-2.5-2.5-4z" />
  </svg>,
];

export function ServicesShowcase({
  items = SHOWCASE_SERVICES,
}: {
  items?: typeof SHOWCASE_SERVICES;
}) {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-[20%] h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,rgba(216,193,150,0.14),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Nos services"
          title="Un soin, un geste, un résultat"
          lead="Découvrez nos dix rituels. Faites glisser le voile doré pour voir la main de la maison à l'œuvre — puis réservez directement sur WhatsApp."
        />

        <div className="mt-16 flex flex-col md:mt-20">
          {items.map((service, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.article
                key={service.no}
                className="grid items-start gap-10 border-b border-border py-14 last:border-b-0 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-16"
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="lg:hidden">
                  <div className="flex items-center gap-5">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold/40 bg-white text-gold-deep">
                      {SERVICE_ICONS[i % SERVICE_ICONS.length]}
                    </span>
                    <Eyebrow className="justify-start">
                      Nº {service.no} · {service.duration}
                    </Eyebrow>
                  </div>
                  <h3 className="mt-6 font-display text-[clamp(1.9rem,4vw,2.8rem)] font-medium leading-[1.08] text-noir">
                    {service.name}
                  </h3>
                  <p className="mt-2 font-serif text-lg italic text-deeprose">
                    {service.tagline}
                  </p>
                </div>

                <div className={cn("relative", reversed ? "lg:order-2" : "")}>
                  <Reveal delay={0.05} y={28}>
                    <div className="relative">
                      <BeforeAfter
                        before={service.before}
                        after={service.after}
                        alt={service.alt}
                        className="shadow-[0_40px_100px_-45px_rgba(196,168,130,0.55)]"
                      />
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -top-5 -left-3 select-none font-display text-[clamp(4.5rem,10vw,7rem)] font-semibold leading-none text-noir/[0.06] md:-left-8"
                      >
                        {service.no}
                      </span>
                    </div>
                  </Reveal>
                </div>

                <div className={cn("flex flex-col", reversed ? "lg:order-1" : "")}>
                  <div className="hidden items-center gap-5 lg:flex">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold/40 bg-white text-gold-deep">
                      {SERVICE_ICONS[i % SERVICE_ICONS.length]}
                    </span>
                    <Eyebrow className="justify-start">
                      Nº {service.no} · {service.duration}
                    </Eyebrow>
                  </div>

                  <Reveal delay={0.05}>
                    <h3 className="mt-6 hidden font-display text-[clamp(1.9rem,4vw,2.8rem)] font-medium leading-[1.08] text-noir lg:block">
                      {service.name}
                    </h3>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <p className="mt-2 hidden font-serif text-lg italic text-deeprose lg:block">
                      {service.tagline}
                    </p>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <p className="mt-5 max-w-xl font-sans text-[15px] leading-relaxed text-noir/65">
                      {service.description}
                    </p>
                  </Reveal>

                  <Reveal delay={0.2}>
                    <ul className="mt-6 flex flex-col gap-2.5">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-3 font-sans text-sm text-noir/80"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                            className="h-4 w-4 shrink-0 text-gold-deep"
                          >
                            <path d="M4 12.5l5 5L20 6.5" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </Reveal>

                  <Reveal delay={0.25}>
                    <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-border pt-7">
                      <div>
                        <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-mist">
                          À partir de
                        </p>
                        <p className="font-display text-2xl text-noir">{service.price}</p>
                      </div>
                      <a
                        href={waLink(
                          `Bonjour Maison Lumière, je souhaite réserver « ${service.name} » (${service.price}).`
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-12 items-center gap-2.5 rounded-full bg-gradient-to-r from-gold via-gold-soft to-gold px-7 font-sans text-sm font-medium text-noir transition-all duration-300 hover:from-gold-soft hover:via-gold hover:to-gold-soft hover:shadow-[0_20px_44px_-20px_rgba(201,169,110,0.95)]"
                        data-cursor="Réserver"
                      >
                        <WhatsAppIcon className="h-4 w-4" />
                        Réserver via WhatsApp
                      </a>
                    </div>
                    <Link
                      href="/reservation"
                      className="mt-4 inline-block font-sans text-[13px] text-noir/60 underline-offset-4 transition-colors hover:text-deeprose hover:underline"
                    >
                      ou réserver en ligne
                    </Link>
                  </Reveal>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
