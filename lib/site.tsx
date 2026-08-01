import type { Metadata } from "next";

export const SITE = {
  name: "Maison Lumière",
  baseline: "Révélez votre beauté naturelle",
  url: "https://maison-lumiere.fr",
  description:
    "Atelier de maquillage & beauté de luxe à Paris. Maquillage mariée, maquillage professionnel, cours de maquillage et rituels de beauté par des artistes d'exception. Chaque détail est pensé pour sublimer votre élégance.",
  phone: "+33 1 42 66 00 00",
  email: "bonjour@maison-lumiere.fr",
  address: {
    streetAddress: "24 Rue de la Paix",
    postalCode: "75002",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  geo: { latitude: 48.8683, longitude: 2.3312 },
  hours: [
    { day: ["Monday", "Tuesday", "Wednesday", "Friday"], opens: "10:00", closes: "19:00" },
    { day: "Thursday", opens: "10:00", closes: "21:00" },
    { day: "Saturday", opens: "09:30", closes: "18:00" },
  ],
  instagram: "@maisonlumiere",
  socials: {
    instagram: "https://instagram.com/maisonlumiere",
    pinterest: "https://pinterest.com/maisonlumiere",
    tiktok: "https://tiktok.com/@maisonlumiere",
  },
};

export type NavItem = { label: string; href: string; note: string };

export const NAV_PRIMARY: NavItem[] = [
  { label: "Accueil", href: "/", note: "L'ouverture" },
  { label: "À propos", href: "/a-propos", note: "Notre histoire" },
  { label: "Prestations", href: "/prestations", note: "Nos univers" },
  { label: "Galerie", href: "/galerie", note: "Nos regards" },
  { label: "Tarifs", href: "/tarifs", note: "La signature" },
  { label: "Équipe", href: "/equipe", note: "Nos artistes" },
  { label: "Contact", href: "/contact", note: "Nous trouver" },
];

export const NAV_SECONDARY: NavItem[] = [
  { label: "Maquillage Mariée", href: "/maquillage-mariee", note: "Le jour J" },
  { label: "Maquillage Professionnel", href: "/maquillage-professionnel", note: "Studio & éditorial" },
  { label: "Cours de Maquillage", href: "/cours-de-maquillage", note: "L'école du regard" },
  { label: "Avis Clients", href: "/avis-clients", note: "Leur parole" },
  { label: "FAQ", href: "/faq", note: "Vos questions" },
  { label: "Réservation", href: "/reservation", note: "Prendre rendez-vous" },
];

export const NAV_ALL = [...NAV_PRIMARY, ...NAV_SECONDARY];

const defaults: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Atelier de Maquillage & Beauté de Luxe à Paris`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
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
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE.name,
    title: `${SITE.name} — Beauté de Luxe à Paris`,
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Beauté de Luxe à Paris`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  category: "beauty",
};

export function buildMetadata(page: {
  title: string;
  description?: string;
  path: string;
}): Metadata {
  const url = `${SITE.url}${page.path}`;
  return {
    ...defaults,
    title: page.title,
    description: page.description ?? SITE.description,
    alternates: { canonical: page.path },
    openGraph: {
      ...defaults.openGraph,
      title: `${page.title} — ${SITE.name}`,
      description: page.description ?? SITE.description,
      url,
    },
    twitter: {
      ...defaults.twitter,
      title: `${page.title} — ${SITE.name}`,
      description: page.description ?? SITE.description,
    },
  };
}

export function schemaBeautySalon() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${SITE.url}/#beautysalon`,
    name: SITE.name,
    image: `${SITE.url}/opengraph-image`,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "€€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.streetAddress,
      postalCode: SITE.address.postalCode,
      addressLocality: SITE.address.addressLocality,
      addressCountry: SITE.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    openingHoursSpecification: SITE.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: Array.isArray(h.day) ? h.day : [h.day],
      opens: h.opens,
      closes: h.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "5000",
      bestRating: "5",
    },
    sameAs: Object.values(SITE.socials),
    makesOffer: [
      { "@type": "Offer", name: "Maquillage Mariée", priceCurrency: "EUR", price: "290" },
      { "@type": "Offer", name: "Maquillage Soirée", priceCurrency: "EUR", price: "95" },
      { "@type": "Offer", name: "Cours de Maquillage Signature", priceCurrency: "EUR", price: "180" },
    ],
  };
}

export function schemaWebSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "fr-FR",
    publisher: { "@id": `${SITE.url}/#beautysalon` },
  };
}

export function schemaPage(path: string, name: string, description?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.url}${path}#webpage`,
    url: `${SITE.url}${path}`,
    name,
    description,
    inLanguage: "fr-FR",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#beautysalon` },
  };
}

export function schemaBreadcrumb(path: string, items: { name: string }[]) {
  const list = [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
    ...items.map((i, idx) => ({
      "@type": "ListItem",
      position: idx + 2,
      name: i.name,
      item: `${SITE.url}${path}`,
    })),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list,
  };
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
