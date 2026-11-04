import Image from 'next/image';
import Link from 'next/link';
import { WhatsAppIcon } from '@nextjs-template/ui';
import { GalleryGrid } from './gallery-grid';
import styles from './gallery-page.module.css';

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  '',
);
const whatsappHref = whatsappPhone
  ? `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
      'Bonjour WeGlow Surprise, j’ai vu une réalisation dans votre galerie et souhaite des informations.',
    )}`
  : '/contact';

export function GalleryPage() {
  return (
    <div className={styles.page}>
      {/* 1. Hero */}
      <section aria-labelledby="gallery-hero-title" className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>Galerie & réalisations</p>
              <h1 className={styles.heroTitle} id="gallery-hero-title">
                Des émotions<br />
                à travers nos créations.
              </h1>
              <p className={styles.heroText}>
                Décorations d’anniversaire, mariages féeriques, baby showers
                douces, box romantiques et paniers garnis sur mesure. Découvrez
                nos mises en scène en images.
              </p>
              <div className={styles.heroActions}>
                <Link className={styles.bordeauxButton} href="/devis">
                  <span>Demander un devis</span>
                  <span aria-hidden="true" className={styles.arrow}>
                    ↗
                  </span>
                </Link>
              </div>
            </div>

            <div className={styles.heroShowcase}>
              <div className={styles.showcaseWrapper}>
                <Image
                  alt="Mise en scène élégante de décoration événementielle WeGlow Surprise"
                  className={styles.showcasePhoto}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 45vw"
                  src="/images/maquette/surprise-galerie-00.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Gallery Section with Interactive Filters */}
      <section aria-labelledby="gallery-grid-title" className={styles.gridSection}>
        <div className={styles.container}>
          <h2 className="sr-only" id="gallery-grid-title">
            Réalisations par catégorie
          </h2>
          <GalleryGrid />
        </div>
      </section>

      {/* 3. Light Banner (#F6F3EE) */}
      <section className={styles.bannerSection}>
        <div className={styles.container}>
          <div className={styles.bannerCard}>
            <div className={styles.bannerCopy}>
              <h2 className={styles.bannerTitle}>
                Une inspiration vue en galerie vous plaît ?
              </h2>
              <p className={styles.bannerText}>
                Partagez-nous la capture ou le style souhaité directement sur
                WhatsApp. Notre scénographe étudie la faisabilité et vous
                propose un devis adapté.
              </p>
            </div>
            <div className={styles.bannerAction}>
              <a
                className={styles.whatsAppButtonBordeaux}
                href={whatsappHref}
                rel="noreferrer"
                target={whatsappPhone ? '_blank' : undefined}
              >
                <WhatsAppIcon className={styles.btnIcon} />
                <span>Partager mon inspiration</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
