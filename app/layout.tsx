import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import { MotionConfig } from "framer-motion";

import { Preloader } from "@/components/layout/preloader";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll";
import { JsonLd, schemaBeautySalon, schemaWebSite } from "@/lib/site";

import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maison Lumière — Atelier de Maquillage & Beauté de Luxe à Paris",
    template: "%s — Maison Lumière",
  },
  description:
    "Atelier de maquillage & beauté de luxe à Paris. Maquillage mariée, maquillage professionnel, cours de maquillage et rituels de beauté par des artistes d'exception. Chaque détail est pensé pour sublimer votre élégance.",
  applicationName: "Maison Lumière",
  keywords: [
    "maquillage luxe Paris",
    "salon de beauté Paris",
    "maquillage mariée Paris",
    "maquillage professionnel",
    "cours de maquillage",
    "atelier beauté",
    "make-up artist Paris",
    "beauty studio",
  ],
  authors: [{ name: "Maison Lumière" }],
  creator: "Maison Lumière",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Maison Lumière",
    title: "Maison Lumière — Beauté de Luxe à Paris",
    description:
      "Atelier de maquillage & beauté de luxe à Paris. Chaque détail est pensé pour sublimer votre élégance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Lumière — Beauté de Luxe à Paris",
    description:
      "Atelier de maquillage & beauté de luxe à Paris. Chaque détail est pensé pour sublimer votre élégance.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FAFAFA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        <JsonLd data={schemaBeautySalon()} />
        <JsonLd data={schemaWebSite()} />
        <MotionConfig reducedMotion="user">
          <SmoothScrollProvider>
            <Preloader />
            <CustomCursor />
            <SiteHeader />
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[400] focus:rounded-full focus:bg-noir focus:px-6 focus:py-3 focus:font-sans focus:text-sm focus:text-cream"
            >
              Aller au contenu
            </a>
            <main id="main">{children}</main>
            <SiteFooter />
          </SmoothScrollProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
