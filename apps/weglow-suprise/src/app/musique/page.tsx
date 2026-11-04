import type { Metadata } from 'next';
import { MusicPage as MusicFeaturePage } from '../../features/music/music-page';

export const metadata: Metadata = {
  title: 'Prestations musicales | WeGlow Surprise',
  description:
    'Des prestations de saxophone, guitare et piano pour accompagner mariages, anniversaires et moments précieux.',
};

export default function MusicPage() {
  return <MusicFeaturePage />;
}
