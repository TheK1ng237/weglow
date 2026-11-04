import { Suspense } from 'react';
import type { Metadata } from 'next';
import { QuoteRequestPage } from '../../features/quote-request/quote-request-page';

export const metadata: Metadata = {
  title: 'Demander un devis & Réservation | WeGlow Surprise',
  description:
    'Décrivez votre idée de surprise, de cadeau personnalisé, de scénographie événementielle ou de prestation musicale à WeGlow Surprise.',
};

export default function QuotePage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '60vh', background: '#161414' }} />}>
      <QuoteRequestPage />
    </Suspense>
  );
}
