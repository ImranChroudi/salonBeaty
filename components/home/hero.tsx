"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Counter,
  Magnetic,
  useReducedMotionSafe,
} from "@/components/motion/primitives";
import { Button } from "@/components/ui/button";
import { HERO, STATS } from "@/lib/data";

export function HomeHero() {
  const reduce = useReducedMotionSafe();
  const D = reduce ? 0 : 3.05;
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative h-[100svh] min-h-[680px] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.18 }}
        animate={{ scale: 1 }}
        transition={{ duration: reduce ? 0.4 : 5.5, ease }}
      >
        <Image
          src={HERO.image}
          alt="Femme élégante au maquillage d'exception, regardant légèrement la caméra"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_18%]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/65 to-cream/10" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_90%_at_70%_10%,rgba(255,255,255,0.55),transparent_70%)]" />

      {!reduce && (
        <motion.div
          aria-hidden
          className="absolute -left-1/4 top-0 h-full w-2/3 bg-[radial-gradient(circle,rgba(212,175,55,0.16),transparent_70%)] blur-3xl"
          animate={{ x: ["0%", "12%", "0%"], y: ["0%", "6%", "0%"], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-[5%] rounded-[50%_50%_0_0/26%_26%_0_0] border border-gold/40 md:inset-[4%]"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: D + 0.3, duration: 1.8, ease }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[9%] top-[10%] hidden h-40 w-40 rounded-full border border-gold/30 md:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: D + 0.7, duration: 1.4, ease }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-6 pb-32 pt-24 md:px-10">
        <motion.p
          className="mb-7 flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-deep"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: D + 0.05, duration: 0.8, ease }}
        >
          <span className="hairline-gold w-12" aria-hidden />
          Atelier de beauté — Paris
        </motion.p>

        <h1 className="font-display text-[clamp(2.8rem,8vw,6.6rem)] font-medium leading-[1.01] tracking-[-0.02em] text-noir">
          {"Révélez Votre Beauté Naturelle".split(" ").map((word, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]"
            >
              <motion.span
                className={`inline-block will-change-transform ${
                  word === "Beauté" ? "italic text-deeprose" : ""
                }`}
                initial={{ y: "112%", rotate: 4 }}
                animate={{ y: "0%", rotate: 0 }}
                transition={{ delay: D + 0.15 + i * 0.07, duration: 0.95, ease }}
              >
                {word}
              </motion.span>
              {i < 3 ? " " : null}
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-8 max-w-xl font-serif text-[clamp(1.15rem,2vw,1.55rem)] italic leading-relaxed text-noir/75"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: D + 0.7, duration: 0.9, ease }}
        >
          Chaque détail est pensé pour sublimer votre élégance grâce à une
          expertise beauté d’exception.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: D + 0.9, duration: 0.9, ease }}
        >
          <Magnetic>
            <Button asChild size="lg" variant="default">
              <Link href="/reservation" data-cursor="Réserver">
                Réserver
              </Link>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button asChild size="lg" variant="outline" className="border-noir/25 bg-cream/40 backdrop-blur">
              <Link href="/prestations" data-cursor="Découvrir">
                Découvrir nos prestations
              </Link>
            </Button>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div
        className="glass absolute bottom-8 left-6 z-20 w-[calc(100%-3rem)] max-w-sm rounded-3xl p-6 shadow-[0_40px_90px_-30px_rgba(192,132,151,0.55)] md:bottom-12 md:left-12 md:p-7"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: D + 1.2, duration: 1.1, ease }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1" aria-label="Note de 5 étoiles">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-sm text-gold" aria-hidden>
                ★
              </span>
            ))}
          </div>
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-noir/60">
            4.9 / 5
          </span>
        </div>
        <dl className="mt-5 grid grid-cols-3 gap-4">
          {STATS.slice(0, 3).map((stat) => (
            <div key={stat.label}>
              <dt className="order-2 font-sans text-[9px] uppercase leading-snug tracking-[0.14em] text-noir/55">
                {stat.label}
              </dt>
              <dd className="font-display text-[clamp(1.4rem,2.6vw,2rem)] font-semibold text-deeprose">
                <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>

      {!reduce && (
        <motion.div
          aria-hidden
          className="absolute bottom-9 right-8 z-20 hidden flex-col items-center gap-3 md:right-14 md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: D + 1.6, duration: 1 }}
        >
          <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-noir/50 [writing-mode:vertical-rl]">
            Défiler
          </span>
          <motion.span
            className="h-16 w-px bg-gradient-to-b from-gold via-gold/40 to-transparent"
            animate={reduce ? undefined : { scaleY: [0, 1, 0], transformOrigin: "top" }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </section>
  );
}
