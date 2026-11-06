import type { Metadata } from 'next';
import localFont from 'next/font/local';
import {
  SiteFooter,
  SiteHeader,
  type SiteNavigationItem,
} from '@nextjs-template/ui';
import '@nextjs-template/brand-weglow/tokens.css';
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
  'Bonjour WeGlow, je souhaite obtenir des informations sur vos bijoux et accessoires.';

const navigation: SiteNavigationItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Bijoux', href: '/bijoux' },
  { label: 'Accessoires', href: '/accessoires' },
  { label: 'Idées cadeaux', href: '/cadeaux' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
];

const weglowSurpriseUrl =
  process.env.NEXT_PUBLIC_WE_GLOW_SURPRISE_URL ||
  (process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://weglow-surprise.com');

export const metadata: Metadata = {
  metadataBase: new URL('https://weglow.idem.africa'),
  title: 'WeGlow — Bijoux & accessoires',
  description:
    'Des bijoux et des accessoires à découvrir, pour accompagner votre style ou faire plaisir. Prenons le temps de choisir ensemble.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'WeGlow',
    images: [
      {
        url: '/images/social-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Sélection de bijoux WeGlow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/social-preview.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${ebene.variable} ${roboto.variable}`}
      data-scroll-behavior="smooth"
      lang="fr"
    >
      <body>
        <SiteHeader
          action={{ label: 'Informations', href: '/commande' }}
          brand="WeGlow"
          navigation={navigation}
          serviceLinks={[
            { label: 'WeGlow Surprise', href: weglowSurpriseUrl },
          ]}
          tagline="BIJOUX & ACCESSOIRES"
          whatsAppMessage={whatsappMessage}
          whatsAppPhone={whatsappPhone}
        />
        <main>{children}</main>
        <SiteFooter
          brand="WeGlow"
          navigation={navigation}
          subtitle="Bijoux et accessoires. Pour soi ou pour offrir."
          whatsAppMessage={whatsappMessage}
          whatsAppPhone={whatsappPhone}
        />
      </body>
    </html>
  );
}
