import { Suspense } from 'react';
import type { Metadata } from 'next';
import { OrderInformationPage } from '../../features/order-information/order-information-page';

export const metadata: Metadata = {
  title: 'Commander | WeGlow',
  description:
    'Demandez des informations sur la disponibilité des bijoux et accessoires WeGlow et les modalités de commande.',
};

export default function CommandePage() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <OrderInformationPage />
    </Suspense>
  );
}
