import type { Metadata } from 'next';
import { EventsPage as EventsFeaturePage } from '../../features/events/events-page';

export const metadata: Metadata = {
  title: 'Décoration événementielle | WeGlow Surprise',
  description:
    'Décoration d’anniversaire, mariage, mini-mariage, baby shower et mise en scène romantique par WeGlow Surprise.',
};

export default function EventsPage() {
  return <EventsFeaturePage />;
}
