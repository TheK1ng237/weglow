import { fireEvent, render, screen } from '@testing-library/react';
import { ActionLink } from './action-link';
import { SiteHeader } from './site-header';
import { buildWhatsAppHref } from './whatsapp-link';

describe('shared UI primitives', () => {
  it('renders an internal action link without imposing brand colors', () => {
    render(<ActionLink href="/contact">Nous contacter</ActionLink>);

    expect(
      screen.getByRole('link', { name: /nous contacter/i }).getAttribute('href'),
    ).toBe('/contact');
  });

  it('exposes an accessible mobile navigation toggle', () => {
    render(
      <SiteHeader
        action={{ label: 'Demander un devis', href: '/devis' }}
        brand="WeGlow Surprise"
        navigation={[{ label: 'Prestations', href: '/services' }]}
      />,
    );

    const menuButton = screen.getByRole('button', { name: 'Ouvrir le menu' });

    expect(menuButton.getAttribute('aria-expanded')).toBe('false');
    fireEvent.click(menuButton);
    expect(menuButton.getAttribute('aria-expanded')).toBe('true');
    expect(
      screen.getByRole('navigation', { name: 'Navigation principale' }),
    ).toBeTruthy();
  });

  it('renders configured WeGlow services in the services menu', () => {
    const { container } = render(
      <SiteHeader
        action={{ label: 'Demander un devis', href: '/devis' }}
        brand="WeGlow"
        navigation={[{ label: 'Accueil', href: '/' }]}
        serviceLinks={[
          { label: 'WeGlow Surprise', href: 'https://weglow-surprise.com' },
        ]}
      />,
    );

    expect(screen.getAllByText('Services')).toHaveLength(2);
    expect(
      container.querySelectorAll('a[href="https://weglow-surprise.com"]'),
    ).toHaveLength(2);
  });

  it('builds a direct WhatsApp URL with a prefilled message', () => {
    expect(buildWhatsAppHref('+237 6 12 34 56 78', 'Bonjour, je souhaite un devis.')).toBe(
      'https://wa.me/237612345678?text=Bonjour%2C%20je%20souhaite%20un%20devis.',
    );
    expect(buildWhatsAppHref('', 'Bonjour WeGlow')).toBe(
      'https://wa.me/?text=Bonjour%20WeGlow',
    );
  });
});
