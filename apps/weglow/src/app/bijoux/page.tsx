import type { Metadata } from 'next';
import { JewelryPage as JewelryFeaturePage } from '../../features/jewelry/jewelry-page';

export const metadata: Metadata = {
  title: 'Bijoux | WeGlow',
  description:
    'Explorez la sélection de bijoux WeGlow : des pièces délicates pour souligner votre style.',
};

export default function JewelryPage() {
  return <JewelryFeaturePage />;
}
