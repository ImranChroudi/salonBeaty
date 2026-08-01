"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { EASE, useReducedMotionSafe } from "@/components/motion/primitives";

export const PRELOADER_DURATION = 3.1;

const LETTERS = "Maison Lumière".split("");

export function Preloader() {
  const reduce = useReducedMotionSafe();
  const [visible, setVisible] = React.useState(!reduce);

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => {
      document.body.style.overflow = "";
    }, PRELOADER_DURATION * 1000);
    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(t);
    };
  }, []);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[radial-gradient(120%_120%_at_50%_0%,#F3E9E1_0%,#E8DED4_45%,#E8DED4_100%)]"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.15, delay: PRELOADER_DURATION - 1.15, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={() => setVisible(false)}
          aria-hidden
        >
          <div className="absolute inset-x-0 top-0 h-[38vh] bg-[radial-gradient(60%_90%_at_50%_110%,rgba(255,255,255,0.65),transparent_70%)]" />

          <div className="relative flex flex-col items-center gap-8 px-6">
            <motion.p
              className="font-sans text-[10px] font-semibold uppercase tracking-[0.5em] text-noir/60"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
            >
              Atelier de beauté — Paris
            </motion.p>

            <h1
              className="font-display text-[clamp(2.4rem,9vw,5.5rem)] font-medium leading-none tracking-tight text-noir"
            >
              {LETTERS.map((letter, i) => (
                <span
                  key={i}
                  className="inline-block overflow-hidden align-bottom pb-[0.1em] -mb-[0.1em]"
                >
                  <motion.span
                    className="inline-block"
                    initial={{ y: "110%", rotate: 4 }}
                    animate={{ y: "0%", rotate: 0 }}
                    transition={{ delay: 0.25 + i * 0.045, duration: 0.8, ease: EASE }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                </span>
              ))}
            </h1>

            <div className="relative h-px w-48 overflow-hidden bg-noir/15">
              <motion.div
                className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-gold-deep via-gold to-gold-soft"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.55, duration: 1.4, ease: EASE }}
                style={{ transformOrigin: "left" }}
              />
            </div>

            <motion.p
              className="font-serif text-lg italic text-noir/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Révéler votre beauté naturelle
            </motion.p>
          </div>

          <div className="absolute inset-x-0 bottom-8 flex items-center justify-between px-8 font-sans text-[10px] uppercase tracking-[0.3em] text-noir/50">
            <span>Paris</span>
            <span>Est. 2013</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
