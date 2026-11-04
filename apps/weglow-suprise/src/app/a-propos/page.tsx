import type { Metadata } from 'next';
import { AboutPage as AboutFeaturePage } from '../../features/about/about-page';

export const metadata: Metadata = {
  title: 'À propos | WeGlow Surprise',
  description:
    'L’histoire de WeGlow Surprise, un univers de cadeaux, de surprises et de décoration pensé autour de vos moments précieux.',
};

export default function AboutPage() {
  return <AboutFeaturePage />;
}
