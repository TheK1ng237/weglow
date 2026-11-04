import type { Metadata } from 'next';
import { AccessoryDetailPage } from '../../../features/accessories/accessory-detail-page';

export const metadata: Metadata = {
  title: 'Accessoire · nom à renseigner | WeGlow',
  description:
    'Découvrez la fiche détaillée de cet accessoire WeGlow : matières, confection et demande d’informations.',
};

export default function FicheAccessoirePage() {
  return <AccessoryDetailPage />;
}

