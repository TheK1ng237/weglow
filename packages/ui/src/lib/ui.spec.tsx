import { fireEvent, render, screen } from '@testing-library/react';
import { ActionLink } from './action-link';
import { SiteHeader } from './site-header';

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
});
