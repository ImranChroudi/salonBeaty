"use client";

import * as React from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SmoothScrollContextValue = {
  scrollTo: (
    target: string | number,
    opts?: { offset?: number; duration?: number }
  ) => void;
};

export const SmoothScrollContext =
  React.createContext<SmoothScrollContextValue>({
    scrollTo: () => {},
  });

export function useSmoothScroll() {
  return React.useContext(SmoothScrollContext);
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = React.useRef<Lenis | null>(null);

  React.useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.35,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = React.useCallback<SmoothScrollContextValue["scrollTo"]>(
    (target, opts) => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target, {
          offset: opts?.offset ?? 0,
          duration: opts?.duration ?? 1.4,
        });
      } else if (typeof target === "string") {
        const el = document.querySelector(target);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: target, behavior: "smooth" });
      }
    },
    []
  );

  return (
    <SmoothScrollContext.Provider value={{ scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
