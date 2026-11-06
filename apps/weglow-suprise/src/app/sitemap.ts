import type { MetadataRoute } from 'next';

const siteUrl = 'https://weglow-surprise.com';
const routes = [
  '/',
  '/cadeaux',
  '/services',
  '/evenements',
  '/musique',
  '/devis',
  '/galerie',
  '/temoignages',
  '/creations',
  '/a-propos',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
