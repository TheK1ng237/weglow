import type { Metadata } from 'next';
import { AccessoriesPage as AccessoriesFeaturePage } from '../../features/accessories/accessories-page';

export const metadata: Metadata = {
  title: 'Accessoires | WeGlow',
  description:
    'Découvrez les accessoires WeGlow, choisis pour compléter une silhouette avec subtilité.',
};

export default function AccessoriesPage() {
  return <AccessoriesFeaturePage />;
}
