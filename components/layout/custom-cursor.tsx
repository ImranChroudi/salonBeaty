"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { useReducedMotionSafe } from "@/components/motion/primitives";

export function CustomCursor() {
  const reduce = useReducedMotionSafe();
  const [enabled, setEnabled] = React.useState(false);
  const [hovering, setHovering] = React.useState(false);
  const [label, setLabel] = React.useState<string | null>(null);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 400, damping: 32, mass: 0.4 });
  const ringY = useSpring(dotY, { stiffness: 400, damping: 32, mass: 0.4 });

  React.useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest?.(
        "a, button, [data-cursor], [role='button'], input, textarea, select, label"
      ) as HTMLElement | null;
      if (target) {
        setHovering(true);
        const labelText = target.getAttribute("data-cursor");
        setLabel(labelText || (target.tagName === "INPUT" || target.tagName === "TEXTAREA" ? null : null));
      } else {
        setHovering(false);
        setLabel(null);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [reduce, dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[300] h-2 w-2 rounded-full bg-gold"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[299] grid place-items-center rounded-full border border-gold/60 bg-gold/5 backdrop-blur-[1px]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? (label ? 92 : 56) : 36,
          height: hovering ? (label ? 92 : 56) : 36,
          opacity: hovering ? 1 : 0.55,
          backgroundColor: hovering ? "rgba(201,169,110,0.12)" : "rgba(201,169,110,0.04)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
      >
        {label && (
          <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
            {label}
          </span>
        )}
      </motion.div>
    </>
  );
}
