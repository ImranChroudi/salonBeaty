export function img(id: string, w = 1200, h?: number) {
  const crop = h ? `&h=${h}` : "";
  return `https://images.unsplash.com/${id}?q=80&w=${w}${crop}&auto=format&fit=crop`;
}

export type Prestation = {
  no: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  price: string;
  href: string;
  image: string;
};

export const PRESTATIONS: Prestation[] = [
  {
    no: "01",
    title: "Le Rituel Mariée",
    tagline: "L'instant le plus précieux",
    description:
      "Un essai sur-mesure puis un matin de mariage confié à l'un de nos artistes. Une peau lumineuse, un regard qui traverse les années — un maquillage qui ne quitte pas votre visage, du premier pas au dernier.",
    duration: "Essai + jour J · 2 h 30",
    price: "à partir de 290 €",
    href: "/maquillage-mariee",
    image: img("photo-1583939003579-730e3918a45a", 1200, 1500),
  },
  {
    no: "02",
    title: "L'Éclat Soirée",
    tagline: "Pour les soirs qui comptent",
    description:
      "Galas, dîners, fiançailles, rendez-vous exceptionnels. Un regard intense ou un teint de perle — votre artiste compose un maquillage qui respire avec vous jusqu'au bout de la nuit.",
    duration: "1 h 15",
    price: "à partir de 95 €",
    href: "/prestations",
    image: img("photo-1529626455594-4ff0802cfb7e", 1200, 1500),
  },
  {
    no: "03",
    title: "Le Studio",
    tagline: "Maquillage professionnel",
    description:
      "Shooting éditorial, défilés, tournages, portraits de marque. Nos artistes maîtrisent les exigences du studio : précision, vitesse, tenue sous les lumières et direction artistique.",
    duration: "Sur devis",
    price: "Tarifs sur demande",
    href: "/maquillage-professionnel",
    image: img("photo-1522335789203-aabd1fc54bc9", 1200, 1500),
  },
  {
    no: "04",
    title: "L'École du Regard",
    tagline: "Apprendre à se révéler",
    description:
      "Cours de maquillage individuels ou en petit comité. Gestes professionnels, matière, couleurs — apprenez à révéler votre propre beauté, à votre rythme, dans l'intimité de l'atelier.",
    duration: "2 h à 6 h",
    price: "à partir de 120 €",
    href: "/cours-de-maquillage",
    image: img("photo-1512496015851-a90fb38ba796", 1200, 1500),
  },
  {
    no: "05",
    title: "Le Rituel Self-Care",
    tagline: "Prendre soin de soi",
    description:
      "Séance éclat express, lisse des sourcils au design, pose d'extensions de cils. Un moment rien qu'à vous, entre le soin de la peau et l'art du regard.",
    duration: "30 min à 2 h",
    price: "à partir de 45 €",
    href: "/prestations",
    image: img("photo-1570172619644-dfd03ed5d881", 1200, 1500),
  },
  {
    no: "06",
    title: "La Séance Photographie",
    tagline: "Un portrait de vous",
    description:
      "Maquillage beauté puis séance portrait dirigée par notre photographe. Une lumière douce, un décor sobre — de belles images de vous, sans fard ni artifice.",
    duration: "2 h 30",
    price: "à partir de 240 €",
    href: "/galerie",
    image: img("photo-1519699047748-de8e457a634e", 1200, 1500),
  },
];

export type Artist = {
  name: string;
  role: string;
  years: string;
  specialty: string;
  quote: string;
  image: string;
  index: string;
};

export const ARTISTS: Artist[] = [
  {
    name: "Camille Fontaine",
    role: "Fondatrice · Directrice Artistique",
    years: "14 ans",
    specialty: "Bridal & éditorial",
    quote: "« Le maquillage ne transforme pas un visage. Il révèle ce qui y dormait déjà. »",
    image: img("photo-1494790108377-be9c29b29330", 900, 1125),
    index: "01",
  },
  {
    name: "Éloïse Marchand",
    role: "Maquilleuse Senior",
    years: "10 ans",
    specialty: "Teint nude & soin",
    quote: "« Une peau de vérité. C'est par là que tout commence et tout finit. »",
    image: img("photo-1438761681033-6461ffad8d80", 900, 1125),
    index: "02",
  },
  {
    name: "Sofia Renard",
    role: "Maquilleuse Éditorial",
    years: "8 ans",
    specialty: "Mode & défilés",
    quote: "« Un look doit survivre au flash et au mouvement. Je dessine pour les deux. »",
    image: img("photo-1534528741775-53994a69daeb", 900, 1125),
    index: "03",
  },
  {
    name: "Amélie Beaulieu",
    role: "Spécialiste Mariée",
    years: "9 ans",
    specialty: "Romantique & couture",
    quote: "« Le jour J, je ne maquille pas une mariée. Je pose la touche finale sur un rêve. »",
    image: img("photo-1508214751196-bcfd4ca60f91", 900, 1125),
    index: "04",
  },
  {
    name: "Jade Laurent",
    role: "Maquilleuse Professionnel",
    years: "6 ans",
    specialty: "Studio, TV & corporate",
    quote: "« Sur un plateau, chaque seconde compte. Ma trousse est ma partition. »",
    image: img("photo-1544005313-94ddf0286df2", 900, 1125),
    index: "05",
  },
  {
    name: "Inès Vasseur",
    role: "Formatrice · L'École du Regard",
    years: "7 ans",
    specialty: "Pédagogie du geste",
    quote: "« Enseigner le maquillage, c'est offrir à chacune la clé de son propre regard. »",
    image: img("photo-1580489944761-15a19d654956", 900, 1125),
    index: "06",
  },
];

export type Review = {
  name: string;
  location: string;
  prestation: string;
  rating: number;
  text: string;
  date: string;
};

export const REVIEWS: Review[] = [
  {
    name: "Claire Delcourt",
    location: "Paris",
    prestation: "Le Rituel Mariée",
    rating: 5,
    text: "Le matin de mon mariage, j'étais sereine. Camille a dessiné un maquillage si juste que je me suis reconnue — en mieux. Douze heures plus tard, il tenait encore. Ce fut le plus beau cadeau de la journée.",
    date: "Juin 2026",
  },
  {
    name: "Mathilde Roux",
    location: "Lyon",
    prestation: "L'École du Regard",
    rating: 5,
    text: "Je suis entrée en n'y connaissant rien, je suis ressortie avec des gestes de pro. Inès prend le temps, explique chaque chose. Depuis, mon make-up du matin est un rituel que j'aime.",
    date: "Mai 2026",
  },
  {
    name: "Salomé Nguyen",
    location: "Paris",
    prestation: "L'Éclat Soirée",
    rating: 5,
    text: "Pour les 40 ans de mon mari, un regard smoky profond et un teint de porcelaine. Sofia a su écouter ce que je n'avais pas su dire. J'ai reçu des compliments toute la soirée.",
    date: "Avril 2026",
  },
  {
    name: "Aïcha Benali",
    location: "Bruxelles",
    prestation: "Le Studio",
    rating: 5,
    text: "Un shooting de campagne pour notre maison. Jade était d'une précision rare sous les lumières, la peau sur les photos était sublime sans retouche. Un vrai professionnalisme de studio.",
    date: "Mars 2026",
  },
  {
    name: "Louise Girard",
    location: "Paris",
    prestation: "Le Rituel Self-Care",
    rating: 5,
    text: "Une heure de pure douceur. Le lisse des sourcils est d'une justesse incroyable et l'ambiance de l'atelier est un cocon. J'en sors plus légère à chaque fois.",
    date: "Février 2026",
  },
  {
    name: "Élise Moreau",
    location: "Genève",
    prestation: "La Séance Photographie",
    rating: 5,
    text: "Les images sont magnifiques, douces, exactement moi. Le duo maquilleuse-photographe est une idée en or : on se sent guidée, rassurée, sublime. Je recommande les yeux fermés.",
    date: "Janvier 2026",
  },
  {
    name: "Camille Berthier",
    location: "Bordeaux",
    prestation: "L'Éclat Soirée",
    rating: 4.5,
    text: "Une expérience très douce, dans un lieu d'une élégance rare. Mon maquillage était raffiné. J'aurais aimé un peu plus de tenue en fin de soirée, mais le résultat était superbe.",
    date: "Décembre 2025",
  },
  {
    name: "Jeanne-Alix Petit",
    location: "Paris",
    prestation: "Cours collectif",
    rating: 5,
    text: "Le cours collectif entre copines fut une merveilleuse parenthèse. On a appris, ri, et chacune est repartie avec « son » regard. L'école du regard porte bien son nom.",
    date: "Novembre 2025",
  },
];

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "Comment se déroule une première visite à l'atelier ?",
    answer:
      "Autour d'un thé, nous écoutons vos envies, analysons votre carnation et vos habitudes, puis dessinons ensemble votre regard. Vous repartez avec des conseils personnalisés et une feuille de route beauté. La première consultation de 30 minutes est offerte.",
  },
  {
    question: "Combien coûte une séance de maquillage ?",
    answer:
      "L'Éclat Soirée commence à 95 €, le Rituel Self-Care à 45 € et la Séance Photographie à 240 €. Le Rituel Mariée est proposé en formule essai (150 €) puis jour J (290 €). Le déplacement à domicile ou sur lieu de cérémonie est facturé 60 € dans Paris.",
  },
  {
    question: "Quels produits utilisez-vous ?",
    answer:
      "Nous travaillons exclusivement des maisons de beauté premium et clean : maquillage minéral, pigments haute pureté, soins de la peau haut de gamme. L'ensemble de notre matériel est stérilisé après chaque cliente et nos pinceaux sont lavés à chaque prestation.",
  },
  {
    question: "Combien de temps dure un maquillage de mariée ?",
    answer:
      "Le matin du jour J, comptez 2 h 30 à 3 h pour un maquillage complet incluant les retouches de la mise en beauté et l'harmonie avec votre coiffure. Le maquillage est pensé pour tenir 12 heures et plus.",
  },
  {
    question: "Dois-je faire un essai avant le jour J ?",
    answer:
      "Nous le recommandons vivement. L'essai, facturé 150 €, est déduit de votre formule le jour J. Il permet de valider les couleurs, de choisir la texture idéale et de rassurer le cœur. Si vous êtes loin, un essai en visio est possible.",
  },
  {
    question: "Puis-je offrir un cours de maquillage ?",
    answer:
      "Avec grand plaisir. Nos formules sont offertes en coffret cadeau élégant, avec une validité de 12 mois. Une parenthèse douce à partager entre amies, en duo ou en solo.",
  },
  {
    question: "Quelle est votre politique d'annulation ?",
    answer:
      "Votre rendez-vous peut être annulé ou déplacé sans frais jusqu'à 48 heures à l'avance. En deçà, la séance d'une durée inférieure à deux heures reste due. Nous faisons toujours preuve de souplesse face à l'imprévu.",
  },
  {
    question: "Maquillez-vous en déplacement ?",
    answer:
      "Oui. Nos artistes se déplacent à domicile, à l'hôtel ou sur votre lieu de cérémonie, dans Paris et en Île-de-France. Le déplacement est facturé 60 €, offert pour les formules mariage complètes.",
  },
  {
    question: "Proposez-vous des séances photo ?",
    answer:
      "La Séance Photographie associe maquillage beauté et portrait dirigé par notre photographe en lumière douce. Vous repartez avec vingt images retouchées, libres de droits, en galerie privée.",
  },
  {
    question: "Travaillez-vous avec des marques ou en presse ?",
    answer:
      "Oui, notre studio collabore avec des maisons de mode, des magazines et des équipes de production pour des looks éditoriaux. Contactez notre studio à bonjour@maison-lumiere.fr pour un devis.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les cartes bancaires, espèces et virements. Un acompte est demandé pour confirmer les mariages et les séances photo, déduit du montant final.",
  },
  {
    question: "Puis-je rejoindre votre équipe ?",
    answer:
      "Nous recrutons des artistes maquilleurs passionnés, formés aux maisons de luxe. Envoyez-nous votre book et une lettre de motivation — nous répondons à chaque candidature.",
  },
];

export type Tarif = {
  name: string;
  description: string;
  price: string;
  unit: string;
  featured?: boolean;
  features: string[];
  cta: string;
};

export const TARIFS: Tarif[] = [
  {
    name: "L'Éclat Soirée",
    description: "Le maquillage des soirs qui comptent, dessiné par l'un de nos artistes.",
    price: "95",
    unit: "€ · 1 h 15",
    features: ["Teint travaillé à la lumière", "Regard intensifié ou naturel", "Tenue 8 heures", "Conseils produits offerts"],
    cta: "Réserver",
  },
  {
    name: "Le Rituel Mariée",
    description: "Essai, jour J et retouches — l'excellence pour le plus beau jour.",
    price: "440",
    unit: "€ · formule complète",
    featured: true,
    features: ["Essai privé (150 € déduits)", "Maquillage jour J 2 h 30", "Déplacement offert", "Retouches du matin", "Trousse de secours mariée"],
    cta: "Réserver",
  },
  {
    name: "L'École du Regard",
    description: "Un cours signature pour apprendre à révéler votre propre beauté.",
    price: "180",
    unit: "€ · 3 heures",
    features: ["Atelier privé à l'atelier", "Support pédagogique illustré", "Coffret de produits découverte", "Suivi conseils 30 jours"],
    cta: "Réserver",
  },
  {
    name: "Le Studio",
    description: "Maquillage professionnel pour shootings, défilés et tournages.",
    price: "Sur devis",
    unit: "sur-mesure",
    features: ["Direction artistique", "Équipe mobile studio", "Looks validés en amont", "Bilan en 72 h"],
    cta: "Demander un devis",
  },
];

export const PRICE_LINES = [
  { service: "L'Éclat Soirée", price: "95 €", duration: "1 h 15" },
  { service: "L'Éclat Soirée · avec essai", price: "150 €", duration: "2 h" },
  { service: "Essai Mariée", price: "150 €", duration: "1 h 30" },
  { service: "Le Rituel Mariée · jour J", price: "290 €", duration: "2 h 30" },
  { service: "Formule Mariage complète", price: "440 €", duration: "essai + jour J" },
  { service: "Le Rituel Self-Care · éclat express", price: "45 €", duration: "30 min" },
  { service: "Lisse des sourcils au design", price: "45 €", duration: "45 min" },
  { service: "Extensions de cils", price: "110 €", duration: "1 h 30" },
  { service: "L'École du Regard · Découverte", price: "120 €", duration: "2 h" },
  { service: "L'École du Regard · Signature", price: "180 €", duration: "3 h" },
  { service: "L'École du Regard · Perfectionnement", price: "290 €", duration: "2 × 3 h" },
  { service: "La Séance Photographie", price: "240 €", duration: "2 h 30" },
  { service: "Déplacement Paris / Île-de-France", price: "60 €", duration: "offert mariage" },
];

export type GalleryItem = {
  src: string;
  alt: string;
  category: "mariée" | "éditorial" | "soirée" | "studio";
  caption: string;
  tall?: boolean;
};

export const GALLERY: GalleryItem[] = [
  { src: img("photo-1583939003579-730e3918a45a", 900, 1200), alt: "Mariée au maquillage romantique", category: "mariée", caption: "Le voile de lumière", tall: true },
  { src: img("photo-1529626455594-4ff0802cfb7e", 900, 700), alt: "Maquillage soirée regard intense", category: "soirée", caption: "Regard d'onyx" },
  { src: img("photo-1512496015851-a90fb38ba796", 900, 700), alt: "Application d'ombres à paupières", category: "studio", caption: "Le geste exact" },
  { src: img("photo-1534528741775-53994a69daeb", 900, 1200), alt: "Portrait éditorial maquillé", category: "éditorial", caption: "Édition Nº 12", tall: true },
  { src: img("photo-1519699047748-de8e457a634e", 900, 700), alt: "Teint lumineux en lumière dorée", category: "éditorial", caption: "L'heure dorée" },
  { src: img("photo-1566228015668-4c45dbc4e2f5", 900, 700), alt: "Préparation d'une mariée", category: "mariée", caption: "Le matin du jour J" },
  { src: img("photo-1522335789203-aabd1fc54bc9", 900, 700), alt: "Beauty studio et pinceaux", category: "studio", caption: "Les outils du geste" },
  { src: img("photo-1522673607200-164d1b6ce486", 900, 1200), alt: "Couple de mariés élégant", category: "mariée", caption: "À deux pas", tall: true },
  { src: img("photo-1596462502278-27bfdc403348", 900, 700), alt: "Rouges à lèvres haut de gamme", category: "studio", caption: "La matière première" },
  { src: img("photo-1487412720507-e7ab37603c6f", 900, 700), alt: "Maquillage des yeux éditorial", category: "éditorial", caption: "Le trait de couture" },
  { src: img("photo-1548142813-c348350df52b", 900, 1200), alt: "Portrait beauté naturel", category: "éditorial", caption: "Sans fard", tall: true },
  { src: img("photo-1511285560929-80b456fea0bc", 900, 700), alt: "Mariée en larmes de joie", category: "mariée", caption: "Le premier regard" },
];

export type CoursFormule = {
  name: string;
  duration: string;
  level: string;
  price: string;
  description: string;
  features: string[];
};

export const COURS_FORMULES: CoursFormule[] = [
  {
    name: "Découverte",
    duration: "2 heures",
    level: "Débutant",
    price: "120 €",
    description: "Les fondamentaux du geste : préparer la peau, poser un teint juste, sculpter avec la lumière.",
    features: ["Teint & enlumineur", "Sourcils naturels", "Couleurs conseil", "Support illustré"],
  },
  {
    name: "Signature",
    duration: "3 heures",
    level: "Intermédiaire",
    price: "180 €",
    description: "Construire son propre regard : la méthode Maison Lumière du nude au soir, geste par geste.",
    features: ["Le regard complet", "Smokey maîtrisé", "Rouge à lèvres net", "Coffret découverte"],
  },
  {
    name: "Perfectionnement",
    duration: "2 × 3 heures",
    level: "Avancé",
    price: "290 €",
    description: "Aller au bout du geste : looks éditoriaux, matière, retouche rapide, lumière et tenue.",
    features: ["Looks éditoriaux", "Gestion de la matière", "Retouche express", "Suivi 30 jours"],
  },
];

export const COURS_STEPS = [
  { no: "I", title: "Le diagnostic", text: "Analyse de votre peau, de vos couleurs et de vos habitudes. Nous définissons votre grammaire beauté." },
  { no: "II", title: "Le geste", text: "Chaque étape est montrée, expliquée puis réalisée par vos soins. Le miroir s'illumine, le geste s'installe." },
  { no: "III", title: "Le regard qui reste", text: "Vous repartez avec votre routine, votre support illustré et le droit de refaire le monde — et votre regard." },
];

export const MARIAGE_RITUELS = [
  {
    no: "I",
    title: "La Préparation",
    time: "6 à 8 semaines avant",
    text: "Un essai privé d'une heure trente pour écouter votre robe, votre coiffure et votre histoire. Nous validons les couleurs, la texture et la tenue. Vous repartez avec le moodboard de votre regard.",
    image: img("photo-1511285560929-80b456fea0bc", 1000, 1250),
  },
  {
    no: "II",
    title: "Le Jour J",
    time: "Matin de la cérémonie",
    text: "L'atelier se déplace jusqu'à vous. Au calme, nous dessinons un maquillage pensé pour douze heures : teint de perle, regard qui traverse les photos, lèvres qui ne vous quittent pas.",
    image: img("photo-1566228015668-4c45dbc4e2f5", 1000, 1250),
  },
  {
    no: "III",
    title: "Le Suivi",
    time: "Jusqu'à la dernière danse",
    text: "Une trousse de secours vous est confiée et notre artiste reste joignable. Après les émotions, un échange doux pour les retouches — vous restez la plus belle jusqu'au bout.",
    image: img("photo-1583939003579-730e3918a45a", 1000, 1250),
  },
];

export const MARIAGE_OPTIONS = [
  { name: "Essai privé", price: "150 €", note: "déduit du jour J" },
  { name: "Maquillage jour J", price: "290 €", note: "2 h 30, déplacement offert" },
  { name: "Formule complète", price: "440 €", note: "essai + jour J" },
  { name: "Demi-journée duo", price: "390 €", note: "la mariée + une accompagnante" },
  { name: "Retouches de l'après-midi", price: "60 €", note: "si besoin" },
];

export const PRO_UNIVERS = [
  {
    no: "01",
    title: "Éditorial & Mode",
    text: "Pour les magazines, les marques et les maisons : des looks raffinés, rapides sous contrainte, toujours au service de l'image finale.",
    image: img("photo-1534528741775-53994a69daeb", 1000, 1250),
  },
  {
    no: "02",
    title: "Événement & Corporate",
    text: "Galas, lancements, portraits de dirigeantes : une prestation discrète, efficace, à la hauteur de l'événement et de l'image de votre maison.",
    image: img("photo-1548142813-c348350df52b", 1000, 1250),
  },
  {
    no: "03",
    title: "TV, Cinéma & Défilés",
    text: "L'équipe s'adapte aux plateaux, aux lumières et au chronomètre. Des regards qui tiennent, se retouchent en un geste et se photographient en haute définition.",
    image: img("photo-1519699047748-de8e457a634e", 1000, 1250),
  },
  {
    no: "04",
    title: "Le Beau Film",
    text: "Une direction artistique complète pour vos contenus beauté : maquillage signature, set design, lumière et conseil image.",
    image: img("photo-1487412720507-e7ab37603c6f", 1000, 1250),
  },
];

export const PRO_PROCESS = [
  { no: "I", title: "Le brief", text: "Une conversation pour comprendre vos besoins, votre univers et vos contraintes techniques." },
  { no: "II", title: "Le moodboard", text: "Nous proposons des directions de looks, validées et ajustées avant le jour de la prestation." },
  { no: "III", title: "Le geste", text: "Sur place, nos artistes livrent des looks précis, rapides et impeccables sous toutes les lumières." },
];

export const AVANT_APRES = {
  before: img("photo-1591369822096-ffd140ec948f", 1400, 1750),
  after: img("photo-1529626455594-4ff0802cfb7e", 1400, 1750),
};

export const INSTAGRAM_BAND = [
  img("photo-1526045478516-99145907023c", 500, 500),
  img("photo-1512496015851-a90fb38ba796", 500, 500),
  img("photo-1598440947619-2c35fc9aa908", 500, 500),
  img("photo-1519378058457-4c29a0a2efac", 500, 500),
  img("photo-1583939003579-730e3918a45a", 500, 500),
  img("photo-1519699047748-de8e457a634e", 500, 500),
  img("photo-1548142813-c348350df52b", 500, 500),
  img("photo-1529626455594-4ff0802cfb7e", 500, 500),
];

export const STATS = [
  { value: 5000, suffix: "+", label: "Clientes satisfaites" },
  { value: 12, suffix: "", label: "Années d'expérience" },
  { value: 98, suffix: "%", label: "De satisfaction" },
  { value: 4.9, suffix: "/5", label: "Note moyenne", decimals: 1 },
];

export const HERO = {
  image: img("photo-1529626455594-4ff0802cfb7e", 2000, 2600),
  imageWide: img("photo-1488426862026-3ee34a7d66df", 2000, 1300),
};

export const NAVIGATION = {
  page: { label: "Accueil", href: "/" },
};
