import type { Metadata } from 'next';
import { GiftsPage as GiftsFeaturePage } from '../../features/gifts/gifts-page';

export const metadata: Metadata = {
  title: 'Idées cadeaux | WeGlow',
  description:
    'Trouvez une idée de cadeau parmi les bijoux et accessoires WeGlow.',
};

export default function GiftIdeasPage() {
  return <GiftsFeaturePage />;
}
