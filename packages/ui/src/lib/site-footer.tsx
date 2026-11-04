import Link from 'next/link';
import type { SiteNavigationItem } from './site-header';
import { buildWhatsAppHref } from './whatsapp-link';
import styles from './site-footer.module.css';

export interface SiteFooterProps {
  brand: string;
  brandQualifier?: string;
  subtitle: string;
  navigation: SiteNavigationItem[];
  whatsAppPhone?: string;
  whatsAppMessage?: string;
  isSurprise?: boolean;
}

export function SiteFooter({
  brand,
  brandQualifier,
  subtitle,
  navigation,
  whatsAppPhone = '',
  whatsAppMessage = 'Bonjour, je souhaite des informations.',
  isSurprise = false,
}: SiteFooterProps) {
  const cleanPhone = whatsAppPhone.replace(/\D/g, '');
  const whatsAppHref = buildWhatsAppHref(cleanPhone, whatsAppMessage);

  return (
    <footer
      className={`${styles.footer} ${isSurprise ? styles.footerSurprise : styles.footerWeglow}`}
    >
      <div className={styles.container}>
        <div className={styles.columns}>
          {/* Col 1: Brand & Subtitle */}
          <div className={styles.brandCol}>
            <Link className={styles.brand} href="/">
              <span className={styles.brandName}>{brand.split(' ')[0]}</span>
              {brandQualifier || brand.includes(' ') ? (
                <span className={styles.brandQualifier}>
                  {brandQualifier || brand.split(' ').slice(1).join(' ')}
                </span>
              ) : null}
            </Link>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className={styles.linksCol}>
            <nav aria-label="Navigation secondaire pied de page" className={styles.nav}>
              {navigation.map((item) => (
                <Link className={styles.navLink} href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Coordinates & WhatsApp */}
          <div className={styles.coordsCol}>
            <p className={styles.coordsOfficial}>Coordonnées officielles à fournir.</p>
            <p>
              <a
                className={styles.whatsAppLink}
                href={whatsAppHref}
                rel="noreferrer"
                target="_blank"
              >
                Nous écrire sur WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </p>
            <p className={styles.coordsDetails}>
              Téléphone, email et réseaux à renseigner.
            </p>
          </div>
        </div>

        {/* Legal Bar */}
        <div className={styles.legalBar}>
          <span>Mentions légales — à rédiger</span>
          <span>·</span>
          <span>Confidentialité — à rédiger</span>
          <span>·</span>
          <span>Conditions — à rédiger</span>
        </div>
      </div>
    </footer>
  );
}
