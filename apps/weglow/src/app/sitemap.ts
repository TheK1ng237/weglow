import type { MetadataRoute } from 'next';

const siteUrl = 'https://weglow.idem.africa';
const routes = [
  '/',
  '/bijoux',
  '/bijoux/fiche',
  '/accessoires',
  '/accessoires/fiche',
  '/cadeaux',
  '/a-propos',
  '/commande',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
