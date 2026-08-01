"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArchImage,
  Eyebrow,
  Reveal,
  WordReveal,
} from "@/components/motion/primitives";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  alt,
  index,
  children,
  variant = "split",
  className,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: string;
  alt: string;
  index?: string;
  children?: React.ReactNode;
  variant?: "split" | "centered";
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[radial-gradient(120%_90%_at_80%_0%,#F8D7DA_0%,#FBEFF0_45%,#FAFAFA_100%)]",
        className
      )}
    >
      {index && (
        <span
          aria-hidden
          className="pointer-events-none absolute -right-4 top-16 font-display text-[clamp(8rem,26vw,22rem)] font-semibold leading-none tracking-tight text-noir/[0.045] select-none md:-right-8"
        >
          {index}
        </span>
      )}

      <div className="relative mx-auto grid max-w-[1440px] gap-14 px-6 pb-20 pt-36 md:px-10 md:pt-44 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:pb-28">
        <div className="flex flex-col items-start gap-8">
          <Reveal y={14}>
            <nav aria-label="Fil d'Ariane" className="mb-2">
              <ol className="flex flex-wrap items-center gap-2 font-sans text-[11px] uppercase tracking-[0.22em] text-mist">
                <li>
                  <Link href="/" className="transition-colors hover:text-deeprose">
                    Accueil
                  </Link>
                </li>
                <li aria-hidden>·</li>
                <li className="text-gold-deep">{eyebrow}</li>
              </ol>
            </nav>
          </Reveal>

          <Eyebrow>{eyebrow}</Eyebrow>

          <h1 className="font-display text-[clamp(2.6rem,6vw,5.2rem)] font-medium leading-[1.02] tracking-[-0.015em] text-noir">
            <WordReveal text={title} />
          </h1>

          {lead && (
            <Reveal delay={0.25} y={24}>
              <p className="max-w-xl font-serif text-[clamp(1.15rem,1.9vw,1.5rem)] italic leading-relaxed text-mist">
                {lead}
              </p>
            </Reveal>
          )}

          {children && (
            <Reveal delay={0.35} y={20} className="mt-2 flex flex-wrap items-center gap-4">
              {children}
            </Reveal>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="pointer-events-none absolute -inset-8 rounded-[50%] bg-[radial-gradient(circle,rgba(212,175,55,0.16),transparent_70%)] blur-2xl" />
          <ArchImage
            src={image}
            alt={alt}
            ratio="aspect-[4/5]"
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="shadow-[0_50px_120px_-40px_rgba(192,132,151,0.55)]"
          />
          {variant === "split" && (
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-10 -left-10 hidden h-40 w-40 rounded-full border border-gold/30 lg:block"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
