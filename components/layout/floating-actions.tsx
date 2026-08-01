"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { SITE, waLink } from "@/lib/site";

export function FloatingActions() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-[120] flex flex-col items-end gap-3"
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={show ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.9 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden={!show}
    >
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Discuter avec Maison Lumière sur WhatsApp au ${SITE.whatsappDisplay}`}
        className="group relative grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_-12px_rgba(37,211,102,0.75)] transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"
        />
        <span
          aria-hidden
          className="absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-border bg-white px-4 py-2 font-sans text-xs font-medium text-noir opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 md:block"
        >
          Écrivez-nous sur WhatsApp
        </span>
        <WhatsAppIcon className="relative h-8 w-8" />
      </a>
      <a
        href={`tel:${SITE.phoneHref}`}
        aria-label={`Appeler Maison Lumière au ${SITE.whatsappDisplay}`}
        className="grid h-12 w-12 place-items-center rounded-full border border-gold/50 bg-cream/90 text-gold-deep shadow-[0_14px_35px_-12px_rgba(201,169,110,0.6)] backdrop-blur transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      >
        <Phone className="h-5 w-5" />
      </a>
    </motion.div>
  );
}
