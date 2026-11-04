import type { Metadata } from 'next';
import { ContactPage as ContactFeaturePage } from '../../features/contact/contact-page';

export const metadata: Metadata = {
  title: 'Contact | WeGlow',
  description:
    'Contactez WeGlow pour toute question sur les bijoux, accessoires et idées cadeaux.',
};

export default function ContactPage() {
  return <ContactFeaturePage />;
}
