import type { Metadata } from 'next';
import { AboutPage as AboutFeaturePage } from '../../features/about/about-page';

export const metadata: Metadata = {
  title: 'Notre histoire | WeGlow',
  description:
    'Découvrez l’histoire de WeGlow, une boutique de bijoux et accessoires créée pour exprimer chaque personnalité.',
};

export default function AboutPage() {
  return <AboutFeaturePage />;
}
