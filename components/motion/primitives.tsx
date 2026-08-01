"use client";

import * as React from "react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/utils";

export const EASE = [0.22, 1, 0.36, 1] as const;

export function useReducedMotionSafe() {
  const reduce = useReducedMotion();
  const [safe, setSafe] = React.useState(false);
  React.useEffect(() => setSafe(Boolean(reduce)), [reduce]);
  return safe;
}

/* ------------------------------------------------------------------ */
/* WordReveal — title reveal, word by word, with mask                  */
/* ------------------------------------------------------------------ */

export function WordReveal({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  stagger = 0.035,
  once = true,
  amount = 0,
}: {
  text: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  delay?: number;
  stagger?: number;
  once?: boolean;
  amount?: number;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, amount });
  const words = text.split(" ");
  const TagElement = Tag as React.ElementType;
  return (
    <TagElement ref={ref} className={cn("inline", className)}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span className="inline-block overflow-hidden align-bottom pb-[0.09em] -mb-[0.09em]">
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: "115%", rotate: 3 }}
              animate={inView ? { y: "0%", rotate: 0 } : undefined}
              transition={{ duration: 0.9, delay: delay + i * stagger, ease: EASE }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </React.Fragment>
      ))}
    </TagElement>
  );
}

/* ------------------------------------------------------------------ */
/* Reveal — generic fade / slide / blur on view                        */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  className,
  delay = 0,
  y = 36,
  blur = false,
  once = true,
  amount = 0,
  ...props
}: HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  blur?: boolean;
  once?: boolean;
  amount?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, filter: blur ? "blur(12px)" : "blur(0px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
      transition={{ duration: 0.95, delay, ease: EASE }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Parallax — subtle y-drift based on scroll position                  */
/* ------------------------------------------------------------------ */

export function Parallax({
  children,
  className,
  strength = 10,
  ...props
}: HTMLMotionProps<"div"> & { strength?: number }) {
  const reduce = useReducedMotionSafe();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);
  return (
    <motion.div ref={ref} className={className} style={reduce ? undefined : { y }} {...props}>
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Eyebrow — editorial kicker with gold rule                           */
/* ------------------------------------------------------------------ */

export function Eyebrow({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="hairline-gold w-10" aria-hidden />
      <span
        className={cn(
          "font-sans text-[11px] font-semibold uppercase tracking-[0.28em]",
          light ? "text-cream/80" : "text-gold-deep"
        )}
      >
        {children}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Magnetic — magnetic attraction wrapper                              */
/* ------------------------------------------------------------------ */

export function Magnetic({
  children,
  className,
  strength = 0.32,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotionSafe();
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 180, damping: 14, mass: 0.2 });
  const y = useSpring(0, { stiffness: 180, damping: 14, mass: 0.2 });

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x, y }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Marquee — seamless infinite scroll                                  */
/* ------------------------------------------------------------------ */

export function Marquee({
  children,
  className,
  speed = 42,
  reverse = false,
  pauseOnHover = false,
  maskEdges = false,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  maskEdges?: boolean;
}) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden",
        maskEdges &&
          "[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max shrink-0 items-center animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: `${speed}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        <div className="flex items-center">{children}</div>
        <div className="flex items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ArchImage — the signature arch frame with parallax + gold ring      */
/* ------------------------------------------------------------------ */

export function ArchImage({
  src,
  alt,
  className,
  imgClassName,
  ratio = "aspect-[3/4]",
  strength = 14,
  priority = false,
  sizes,
  ring = true,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  ratio?: string;
  strength?: number;
  priority?: boolean;
  sizes?: string;
  ring?: boolean;
}) {
  const reduce = useReducedMotionSafe();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.14, 1.04, 1.12]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden arch-mask bg-powder",
        ratio,
        className
      )}
    >
      <motion.div
        className="absolute -inset-[6%]"
        style={reduce ? undefined : { y, scale }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes ?? "(min-width: 1024px) 45vw, 92vw"}
          className={cn("object-cover object-top", imgClassName)}
        />
      </motion.div>
      {ring && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-3 rounded-[50%_50%_0_0/38%_38%_0_0] border border-gold/45"
        />
      )}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[50%_50%_0_0/40%_40%_0_0] bg-gradient-to-b from-transparent via-transparent to-noir/25"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* BeforeAfter — draggable comparison slider                           */
/* ------------------------------------------------------------------ */

export function BeforeAfter({
  before,
  after,
  alt = "Avant et après maquillage",
  className,
}: {
  before: string;
  after: string;
  alt?: string;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [pos, setPos] = React.useState(52);
  const [dragging, setDragging] = React.useState(false);

  function update(clientX: number) {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(96, Math.max(4, p)));
  }

  React.useEffect(() => {
    if (!dragging) return;
    const move = (e: PointerEvent) => update(e.clientX);
    const up = () => setDragging(false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [dragging]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative aspect-[4/5] w-full cursor-ew-resize touch-none overflow-hidden rounded-3xl select-none",
        className
      )}
      onPointerDown={(e) => {
        setDragging(true);
        update(e.clientX);
      }}
      role="slider"
      aria-label={alt}
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 4));
      }}
    >
      <Image src={before} alt="Avant" fill className="object-cover" />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
      >
        <Image src={after} alt="Après" fill className="object-cover" />
      </div>
      <div
        aria-hidden
        className="absolute top-0 bottom-0 z-10 w-px bg-gold"
        style={{ left: `${pos}%` }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 z-10 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold bg-cream/90 text-[10px] font-semibold tracking-widest text-gold-deep shadow-lg backdrop-blur"
        style={{ left: `${pos}%` }}
      >
        <span className="flex items-center gap-1">
          <span className="text-gold-deep">◂</span>
          <span className="text-gold-deep">▸</span>
        </span>
      </div>
      <span className="absolute left-4 top-4 rounded-full bg-noir/45 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.2em] text-cream backdrop-blur">
        Avant
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 font-sans text-[10px] uppercase tracking-[0.2em] text-noir">
        Après
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Counter — animated number on view                                   */
/* ------------------------------------------------------------------ */

export function Counter({
  value,
  decimals = 0,
  suffix = "",
  className,
  duration = 1.9,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0 });
  const reduce = useReducedMotionSafe();
  const [display, setDisplay] = React.useState(reduce ? value : 0);

  React.useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: EASE,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value, reduce, duration]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("fr-FR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* FilmStrip — horizontal scrub section                                */
/* ------------------------------------------------------------------ */

export function FilmStrip({
  children,
  className,
  distance = "-18%",
}: {
  children: React.ReactNode;
  className?: string;
  distance?: string;
}) {
  const reduce = useReducedMotionSafe();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.35"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", distance]);
  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="flex w-max gap-5 pr-5"
        style={reduce ? undefined : { x }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SectionHeading — eyebrow + display title                            */
/* ------------------------------------------------------------------ */

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
  light = false,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  className?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <Eyebrow className={cn(align === "center" && "justify-center")} light={light}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          "font-display text-[clamp(2.1rem,5vw,3.9rem)] font-medium leading-[1.04] tracking-[-0.015em]",
          light ? "text-cream" : "text-noir"
        )}
      >
        <WordReveal text={title} />
      </h2>
      {lead && (
        <Reveal delay={0.15} y={20}>
          <p
            className={cn(
              "font-serif text-[clamp(1.15rem,1.9vw,1.45rem)] italic leading-relaxed",
              light ? "text-cream/75" : "text-mist",
              align === "center" && "max-w-2xl"
            )}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
