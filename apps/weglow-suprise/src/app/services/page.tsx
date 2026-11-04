import type { Metadata } from 'next';
import { ServicesPage as ServicesFeaturePage } from '../../features/services/services-page';

export const metadata: Metadata = {
  title: 'Cadeaux & surprises | WeGlow Surprise',
  description:
    'Découvrez les paniers surprise, bouquets de roses ou d’argent, box romantiques et cadeaux personnalisés WeGlow Surprise.',
};

export default function ServicesPage() {
  return <ServicesFeaturePage />;
}
