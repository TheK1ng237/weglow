import type { Metadata } from 'next';
import localFont from 'next/font/local';
import {
  SiteFooter,
  SiteHeader,
  type SiteNavigationItem,
} from '@nextjs-template/ui';
import '@nextjs-template/brand-weglow-surprise/tokens.css';
import '@nextjs-template/ui/styles.css';
import './global.css';

const ebene = localFont({
  src: '../../../../packages/fonts/Ebene-Regular.otf',
  variable: '--font-ebene',
  display: 'swap',
});

const roboto = localFont({
  src: [
    {
      path: '../../../../packages/fonts/Roboto/static/Roboto-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../../packages/fonts/Roboto/static/Roboto-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../../../packages/fonts/Roboto/static/Roboto-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../../packages/fonts/Roboto/static/Roboto-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-roboto',
  display: 'swap',
});

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  '',
);
const whatsappMessage =
  'Bonjour WeGlow Surprise, je souhaite imaginer une surprise ou un événement.';

const primaryNavigation: SiteNavigationItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Cadeaux', href: '/cadeaux' },
  { label: 'Événementiel', href: '/evenements' },
  { label: 'Musique', href: '/musique' },
];

const secondaryNavigation: SiteNavigationItem[] = [
  { label: 'Galerie', href: '/galerie' },
  { label: 'Témoignages', href: '/temoignages' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
];

const footerNavigation: SiteNavigationItem[] = [
  { label: 'Cadeaux', href: '/cadeaux' },
  { label: 'Événementiel', href: '/evenements' },
  { label: 'Musique', href: '/musique' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Témoignages', href: '/temoignages' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
];

export const metadata: Metadata = {
  title: 'WeGlow Surprise — Cadeaux & événementiel',
  description:
    'Cadeaux personnalisés, surprises, décoration événementielle et musique pour célébrer les moments qui comptent.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${ebene.variable} ${roboto.variable}`}
      data-brand="surprise"
      data-scroll-behavior="smooth"
      lang="fr"
    >
      <body>
        <SiteHeader
          action={{ label: 'Devis / Réservation', href: '/devis' }}
          brand="WeGlow"
          brandQualifier="SURPRISE"
          navigation={primaryNavigation}
          secondaryNavigation={secondaryNavigation}
          serviceLinks={[{ label: 'WeGlow Surprise', href: '/' }]}
          tagline="CADEAUX & ÉVÉNEMENTIEL"
          whatsAppMessage={whatsappMessage}
          whatsAppPhone={whatsappPhone}
        />
        <main>{children}</main>
        <SiteFooter
          brand="WeGlow"
          brandQualifier="SURPRISE"
          isSurprise
          navigation={footerNavigation}
          subtitle="Cadeaux personnalisés, surprises, décoration événementielle et musique."
          whatsAppMessage={whatsappMessage}
          whatsAppPhone={whatsappPhone}
        />
      </body>
    </html>
  );
}
