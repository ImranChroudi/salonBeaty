"use client";

import { motion } from "framer-motion";

import {
  ArchImage,
  Eyebrow,
  Reveal,
  WordReveal,
} from "@/components/motion/primitives";
import { cn } from "@/lib/utils";

export type Step = {
  no: string;
  title: string;
  time?: string;
  text: string;
  image?: string;
};

export function ProcessSteps({
  eyebrow,
  title,
  lead,
  steps,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  steps: Step[];
}) {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,rgba(232,180,188,0.14),transparent_70%)]" />
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="flex flex-col items-start gap-6">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1.05] tracking-[-0.015em] text-noir">
            <WordReveal text={title} />
          </h2>
          {lead && (
            <Reveal delay={0.1}>
              <p className="max-w-2xl font-serif text-lg italic leading-relaxed text-mist md:text-xl">
                {lead}
              </p>
            </Reveal>
          )}
        </div>

        <div className="mt-16 flex flex-col">
          {steps.map((step, i) => (
            <div
              key={step.no}
              className={cn(
                "relative grid gap-8 border-b border-border py-14 md:py-16 lg:grid-cols-12 lg:items-center",
                i === 0 && "border-t"
              )}
            >
              <motion.span
                aria-hidden
                className="pointer-events-none absolute -left-2 top-6 font-display text-[clamp(4.5rem,10vw,8rem)] font-semibold leading-none text-noir/[0.05] select-none lg:left-0"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {step.no}
              </motion.span>

              <div className="flex flex-col gap-3 lg:col-span-5 lg:col-start-2 lg:pl-8">
                <Reveal>
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep">
                    {step.no} · {step.time ?? "Le rituel"}
                  </p>
                </Reveal>
                <Reveal delay={0.05}>
                  <h3 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-medium text-noir">
                    {step.title}
                  </h3>
                </Reveal>
                <Reveal delay={0.12}>
                  <p className="max-w-md font-sans text-[15px] leading-relaxed text-mist">
                    {step.text}
                  </p>
                </Reveal>
              </div>

              {step.image && (
                <div className="lg:col-span-5 lg:col-start-7">
                  <Reveal delay={0.15} y={40}>
                    <ArchImage
                      src={step.image}
                      alt={step.title}
                      ratio="aspect-[4/3]"
                      sizes="(min-width: 1024px) 38vw, 90vw"
                      className="max-w-md shadow-[0_40px_100px_-40px_rgba(196,168,130,0.5)] lg:max-w-none"
                    />
                  </Reveal>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
