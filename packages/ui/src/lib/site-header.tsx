'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WhatsAppIcon } from './whatsapp-link';
import styles from './site-header.module.css';

export interface SiteNavigationItem {
  label: string;
  href: string;
}

export interface SiteHeaderProps {
  brand: string;
  brandQualifier?: string;
  navigation: SiteNavigationItem[];
  secondaryNavigation?: SiteNavigationItem[];
  action: SiteNavigationItem;
  tagline: string;
  whatsAppPhone?: string;
  whatsAppMessage?: string;
}

export function SiteHeader({
  brand,
  brandQualifier,
  navigation,
  secondaryNavigation,
  action,
  tagline,
  whatsAppPhone = '',
  whatsAppMessage = 'Bonjour, je souhaite des informations.',
}: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const cleanPhone = whatsAppPhone.replace(/\D/g, '');
  const whatsAppHref = cleanPhone
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(whatsAppMessage)}`
    : '/contact';

  const isSurprise = brand.toLowerCase().includes('surprise');
  const allNavItems = secondaryNavigation
    ? [...navigation, ...secondaryNavigation]
    : navigation;

  return (
    <header className={styles.header}>
      {/* Primary Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <Link
            aria-label={`${brand}, retour à l'accueil`}
            className={styles.brand}
            href="/"
          >
            <span className={styles.brandName}>{brand.split(' ')[0]}</span>
            {brandQualifier || brand.includes(' ') ? (
              <span className={styles.brandQualifier}>
                {brandQualifier || brand.split(' ').slice(1).join(' ')}
              </span>
            ) : null}
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label="Navigation principale"
            className={styles.desktopNav}
          >
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Menu Toggle */}
          <div className={styles.headerRight}>
            <Link className={styles.actionButton} href={action.href}>
              <span>{action.label}</span>
              <span aria-hidden="true" className={styles.arrow}>
                ↗
              </span>
            </Link>

            <button
              aria-controls="mobile-drawer"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              className={styles.menuToggle}
              onClick={() => setIsOpen(!isOpen)}
              type="button"
            >
              <span className={styles.menuText}>Menu</span>
              <span aria-hidden="true" className={styles.menuBars}>
                <span className={styles.menuBar} />
                <span className={styles.menuBar} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Sub-bar below navigation */}
      <div className={styles.subBar}>
        <div className={styles.container}>
          <div className={styles.subBarLeft}>
            {secondaryNavigation ? (
              <nav
                aria-label="Navigation secondaire"
                className={styles.secondaryNav}
              >
                {secondaryNavigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                      href={item.href}
                      key={item.href}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            ) : (
              <span className={styles.tagline}>{tagline}</span>
            )}
          </div>

          <div className={styles.subBarRight}>
            {secondaryNavigation ? (
              <span className={styles.taglineSecondary}>{tagline}</span>
            ) : null}
            <a
              aria-label="Contacter sur WhatsApp"
              className={
                isSurprise
                  ? styles.whatsAppButtonSurprise
                  : styles.whatsAppButtonWeglow
              }
              href={whatsAppHref}
              rel="noreferrer"
              target={cleanPhone ? '_blank' : undefined}
            >
              <WhatsAppIcon className={styles.whatsAppIcon} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Matches WG-M / WS-M wireframes) */}
      <div
        aria-hidden={!isOpen}
        className={`${styles.drawerOverlay} ${isOpen ? styles.drawerOpen : ''}`}
        id="mobile-drawer"
      >
        <div className={styles.drawerBackdrop} onClick={() => setIsOpen(false)} />
        <div className={styles.drawerContent}>
          <div className={styles.drawerHeader}>
            <Link
              aria-label={`${brand}, retour à l'accueil`}
              className={styles.brand}
              href="/"
              onClick={() => setIsOpen(false)}
            >
              <span className={styles.brandName}>{brand.split(' ')[0]}</span>
              {brandQualifier || brand.includes(' ') ? (
                <span className={styles.brandQualifier}>
                  {brandQualifier || brand.split(' ').slice(1).join(' ')}
                </span>
              ) : null}
            </Link>

            <button
              aria-label="Fermer le menu"
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <span>Fermer</span>
              <span aria-hidden="true" className={styles.closeIcon}>
                ✕
              </span>
            </button>
          </div>

          <nav aria-label="Menu mobile" className={styles.drawerNav}>
            {allNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  className={`${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ''}`}
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.label}</span>
                  {isActive && <span className={styles.activeDot} />}
                </Link>
              );
            })}
          </nav>

          <div className={styles.drawerActions}>
            <Link
              className={styles.drawerActionButton}
              href={action.href}
              onClick={() => setIsOpen(false)}
            >
              <span>{action.label}</span>
              <span aria-hidden="true">↗</span>
            </Link>

            <div className={styles.drawerFooterRow}>
              <span className={styles.drawerTagline}>{tagline}</span>
              <a
                className={
                  isSurprise
                    ? styles.whatsAppButtonSurprise
                    : styles.whatsAppButtonWeglow
                }
                href={whatsAppHref}
                rel="noreferrer"
                target={cleanPhone ? '_blank' : undefined}
              >
                <WhatsAppIcon className={styles.whatsAppIcon} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
