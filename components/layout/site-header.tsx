"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { EASE } from "@/components/motion/primitives";
import { Button } from "@/components/ui/button";
import { NAV_ALL, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

function Logo({ dark }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Maison Lumière — Accueil"
      className="group relative z-[130] flex items-center gap-3"
    >
      <span className="relative grid h-10 w-8 place-items-center overflow-hidden rounded-t-[50%] border border-gold/70 bg-cream/40 transition-colors group-hover:bg-gold/15">
        <span className="font-display text-[13px] font-semibold italic text-gold-deep">
          M
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[17px] font-semibold tracking-[0.02em] transition-colors",
            dark ? "text-cream" : "text-noir"
          )}
        >
          Maison&nbsp;Lumière
        </span>
        <span
          className={cn(
            "mt-1 font-sans text-[8px] font-medium uppercase tracking-[0.42em] transition-colors",
            dark ? "text-cream/60" : "text-mist"
          )}
        >
          Beauté · Paris
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[120] transition-all duration-500",
          scrolled && !open
            ? "border-b border-border/60 bg-cream/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:px-10">
          <Logo />

          <div className="hidden items-center gap-9 lg:flex">
            {NAV_ALL.slice(0, 4).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative font-sans text-[12.5px] font-medium tracking-[0.06em] uppercase transition-colors",
                  "text-noir/80 hover:text-deeprose"
                )}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden border-gold/50 text-gold-deep hover:bg-gold hover:text-noir md:inline-flex"
              data-cursor="Réserver"
            >
              <Link href="/reservation">Réserver</Link>
            </Button>

            <button
              type="button"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((v) => !v)}
              className="group relative z-[130] grid h-11 w-11 place-items-center rounded-full border border-noir/15 bg-cream/50 backdrop-blur transition-colors hover:border-gold"
            >
              <span className="relative block h-3 w-[18px]">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-[1.5px] w-full rounded bg-noir transition-all duration-300",
                    open && "top-[5.5px] rotate-45 bg-gold-deep"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[5.5px] h-[1.5px] w-full rounded bg-noir transition-all duration-300",
                    open && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[11px] h-[1.5px] w-full rounded bg-noir transition-all duration-300",
                    open && "top-[5.5px] -rotate-45 bg-gold-deep"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu principal"
            tabIndex={-1}
            className="fixed inset-0 z-[110] flex flex-col overflow-y-auto bg-[radial-gradient(130%_130%_at_85%_0%,#F8D7DA_0%,#F3CCD0_48%,#EED9DC_100%)]"
            initial={{ clipPath: "circle(0% at calc(100% - 56px) 42px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 56px) 42px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 56px) 42px)" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <nav
              className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center gap-1 px-6 pt-24 pb-14 md:px-12 lg:px-20"
              aria-label="Navigation principale"
            >
              {NAV_ALL.map((item, i) => (
                <div
                  key={item.href}
                  className="overflow-hidden"
                  style={{ width: "fit-content" }}
                >
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.25 + i * 0.055, duration: 0.7, ease: EASE }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "group flex items-baseline gap-4 md:gap-6 py-1.5",
                        pathname === item.href && "opacity-40"
                      )}
                    >
                      <span className="font-sans text-[10px] font-semibold tabular-nums tracking-[0.3em] text-gold-deep md:text-xs">
                        0{i + 1}
                      </span>
                      <span className="font-display text-[clamp(1.7rem,5.4vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.01em] text-noir transition-all duration-300 group-hover:translate-x-2 group-hover:italic group-hover:text-deeprose">
                        {item.label}
                      </span>
                      <span className="hidden font-serif text-base italic text-noir/45 transition-opacity duration-300 group-hover:opacity-100 md:inline">
                        {item.note}
                      </span>
                    </Link>
                  </motion.div>
                </div>
              ))}

              <motion.div
                className="mt-10 flex flex-col gap-3 border-t border-noir/10 pt-8 md:flex-row md:items-center md:justify-between"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7, ease: EASE }}
              >
                <p className="font-serif text-lg italic text-noir/70">
                  24 Rue de la Paix, 75002 Paris — {SITE.phone}
                </p>
                <div className="flex items-center gap-4 font-sans text-[11px] uppercase tracking-[0.25em] text-noir/60">
                  <a href={SITE.socials.instagram} target="_blank" rel="noreferrer" className="transition-colors hover:text-deeprose">
                    Instagram
                  </a>
                  <span className="h-px w-6 bg-noir/20" />
                  <a href={SITE.socials.pinterest} target="_blank" rel="noreferrer" className="transition-colors hover:text-deeprose">
                    Pinterest
                  </a>
                  <span className="h-px w-6 bg-noir/20" />
                  <a href={SITE.socials.tiktok} target="_blank" rel="noreferrer" className="transition-colors hover:text-deeprose">
                    TikTok
                  </a>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
