import type { Metadata } from 'next';
import { JewelryDetailPage } from '../../../features/jewelry/jewelry-detail-page';

export const metadata: Metadata = {
  title: 'Bijou · nom à renseigner | WeGlow',
  description:
    'Découvrez la fiche détaillée de ce bijou WeGlow : caractéristiques, photographies et demande d’informations.',
};

export default function FicheBijouPage() {
  return <JewelryDetailPage />;
}

