import type { Metadata } from 'next';
import { GalleryPage } from '../../features/gallery/gallery-page';

export const metadata: Metadata = {
  title: 'Nos créations | WeGlow Surprise',
  description:
    'Parcourez les univers de cadeaux, événements et surprises personnalisés de WeGlow Surprise.',
};

export default function CreationsPage() {
  return <GalleryPage />;
}
