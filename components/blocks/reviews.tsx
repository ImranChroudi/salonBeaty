"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { REVIEWS, type Review } from "@/lib/data";
import { cn } from "@/lib/utils";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "text-xs",
            i + 0.5 <= rating ? "text-gold" : "text-border"
          )}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function ReviewsGrid({
  items = REVIEWS,
  columns = "md:grid-cols-2",
}: {
  items?: typeof REVIEWS;
  columns?: string;
}) {
  return (
    <div className={cn("grid gap-5", columns)}>
      {items.map((review, i) => (
        <motion.article
          key={review.name + review.date}
          className="group flex flex-col gap-5 rounded-3xl border border-border bg-white p-8 transition-all duration-500 hover:border-gold/50 hover:shadow-[0_30px_70px_-35px_rgba(196,168,130,0.5)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-between">
            <Stars rating={review.rating} />
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-mist">
              {review.date}
            </span>
          </div>
          <blockquote className="flex-1">
            <p className="font-serif text-[1.15rem] italic leading-[1.6] text-noir/85">
              « {review.text} »
            </p>
          </blockquote>
          <footer className="flex items-center gap-4 border-t border-border pt-5">
            <span
              aria-hidden
              className="grid h-11 w-11 place-items-center rounded-full bg-powder font-display text-sm font-semibold text-deeprose"
            >
              {review.name.charAt(0)}
            </span>
            <div>
              <p className="font-display text-[15px] font-semibold text-noir">
                {review.name}
              </p>
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-mist">
                {review.location} · {review.prestation}
              </p>
            </div>
          </footer>
        </motion.article>
      ))}
    </div>
  );
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full flex-col gap-5 rounded-3xl border border-border bg-white p-8 transition-colors duration-500 hover:border-gold/50">
      <div className="flex items-center justify-between">
        <Stars rating={review.rating} />
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-mist">
          {review.date}
        </span>
      </div>
      <blockquote className="flex-1">
        <p className="font-serif text-[1.15rem] italic leading-[1.6] text-noir/85">
          « {review.text} »
        </p>
      </blockquote>
      <footer className="flex items-center gap-4 border-t border-border pt-5">
        <span
          aria-hidden
          className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full border border-gold/30 bg-powder"
        >
          <Image
            src={review.photo}
            alt=""
            width={96}
            height={96}
            className="h-full w-full object-cover"
          />
        </span>
        <div>
          <p className="font-display text-[15px] font-semibold text-noir">
            {review.name}
          </p>
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-mist">
            {review.location} · {review.prestation}
          </p>
        </div>
      </footer>
    </article>
  );
}

function usePerView() {
  const [perView, setPerView] = useState(1);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return perView;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function ReviewsCarousel({
  items = REVIEWS,
  interval = 5000,
}: {
  items?: Review[];
  interval?: number;
}) {
  const perView = usePerView();
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const pages = Math.max(1, Math.ceil(items.length / perView));

  useEffect(() => {
    setPage((p) => Math.min(p, pages - 1));
  }, [pages]);

  const next = useCallback(() => setPage((p) => (p + 1) % pages), [pages]);
  const prev = useCallback(() => setPage((p) => (p - 1 + pages) % pages), [pages]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [paused, next, interval]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="overflow-hidden" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={page}
            className="grid gap-5"
            style={{ gridTemplateColumns: `repeat(${perView}, minmax(0, 1fr))` }}
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -48 }}
            transition={{ duration: 0.55, ease }}
          >
            {Array.from({ length: perView }).map((_, k) => {
              const review = items[(page * perView + k) % items.length];
              return (
                <div key={review.name + page} className="h-full">
                  <ReviewCard review={review} />
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-2" role="tablist" aria-label="Pages d'avis">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === page}
              aria-label={`Page ${i + 1} sur ${pages}`}
              onClick={() => setPage(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                i === page ? "w-8 bg-gold" : "w-1.5 bg-border hover:bg-gold/40"
              )}
            />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Avis précédents"
            className="grid h-11 w-11 place-items-center rounded-full border border-border text-noir transition-colors duration-300 hover:border-gold hover:bg-powder"
          >
            <span aria-hidden className="text-lg leading-none">‹</span>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Avis suivants"
            className="grid h-11 w-11 place-items-center rounded-full border border-border text-noir transition-colors duration-300 hover:border-gold hover:bg-powder"
          >
            <span aria-hidden className="text-lg leading-none">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function RatingBreakdown() {
  const breakdown = [
    { stars: 5, pct: 92 },
    { stars: 4, pct: 7 },
    { stars: 3, pct: 1 },
    { stars: 2, pct: 0 },
    { stars: 1, pct: 0 },
  ];
  return (
    <div className="flex flex-col gap-4">
      {breakdown.map((row) => (
        <div key={row.stars} className="flex items-center gap-4">
          <span className="flex w-14 items-center gap-1 font-sans text-xs text-noir/75">
            {row.stars} <span aria-hidden className="text-gold">★</span>
          </span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border/70">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blush to-deeprose"
              initial={{ width: 0 }}
              whileInView={{ width: `${row.pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <span className="w-10 text-right font-sans text-xs tabular-nums text-mist">
            {row.pct}%
          </span>
        </div>
      ))}
    </div>
  );
}
