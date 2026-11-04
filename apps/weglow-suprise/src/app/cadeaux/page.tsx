import type { Metadata } from 'next';
import { ServicesPage as GiftsFeaturePage } from '../../features/services/services-page';

export const metadata: Metadata = {
  title: 'Cadeaux personnalisés & surprises | WeGlow Surprise',
  description:
    'Paniers surprise, bouquets de roses ou d’argent, box romantiques et cadeaux personnalisés selon votre histoire.',
};

export default function GiftsPage() {
  return <GiftsFeaturePage />;
}

