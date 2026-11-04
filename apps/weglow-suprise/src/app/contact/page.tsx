import type { Metadata } from 'next';
import { ContactPage as ContactFeaturePage } from '../../features/contact/contact-page';

export const metadata: Metadata = {
  title: 'Contact | WeGlow Surprise',
  description:
    'Contactez WeGlow Surprise pour un cadeau personnalisé, une décoration ou une prestation événementielle.',
};

export default function ContactPage() {
  return <ContactFeaturePage />;
}
