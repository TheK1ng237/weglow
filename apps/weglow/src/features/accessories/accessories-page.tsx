import Image from 'next/image';
import Link from 'next/link';
import { WhatsAppIcon } from '@nextjs-template/ui';
import styles from './accessories-page.module.css';

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  '',
);
const whatsappHref = whatsappPhone
  ? `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
      'Bonjour WeGlow, je souhaite obtenir des informations sur un accessoire de la boutique.',
    )}`
  : '/contact';

const accessoryItems = [
  {
    id: 'a-01',
    title: 'Accessoire · nom à renseigner',
    ref: 'Réf. à renseigner',
    category: 'ACCESSOIRES',
    image: '/images/maquette/weglow-accessoires-01.jpg',
    alt: 'Sélection d’accessoires portés avec élégance',
  },
  {
    id: 'a-02',
    title: 'Accessoire · nom à renseigner',
    ref: 'Réf. à renseigner',
    category: 'ACCESSOIRES',
    image: '/images/maquette/weglow-accessoires-02.jpg',
    alt: 'Bracelet jonc en laiton brossé pour accessoiriser une tenue',
  },
  {
    id: 'a-03',
    title: 'Accessoire · nom à renseigner',
    ref: 'Réf. à renseigner',
    category: 'ACCESSOIRES',
    image: '/images/maquette/weglow-accessoires-03.jpg',
    alt: 'Sac maroquinerie bleu nuit et accessoires textiles',
  },
  {
    id: 'a-04',
    title: 'Accessoire · nom à renseigner',
    ref: 'Réf. à renseigner',
    category: 'ACCESSOIRES',
    image: '/images/maquette/weglow-accessoires-04.jpg',
    alt: 'Foulard de soie raffiné et accessoires de maroquinerie',
  },
  {
    id: 'a-05',
    title: 'Accessoire · nom à renseigner',
    ref: 'Réf. à renseigner',
    category: 'ACCESSOIRES',
    image: '/images/maquette/weglow-accessoires-05.jpg',
    alt: 'Détail de maroquinerie et finitions soignées',
  },
  {
    id: 'a-06',
    title: 'Accessoire · nom à renseigner',
    ref: 'Réf. à renseigner',
    category: 'ACCESSOIRES',
    image: '/images/maquette/weglow-accessoire-fiche-00.jpg',
    alt: 'Pochette de soirée et foulard en soie haut de gamme',
  },
];

export function AccessoriesPage() {
  return (
    <div className={styles.page}>
      {/* 1. Hero */}
      <section aria-labelledby="accessories-hero-title" className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Catalogue accessoires</p>
              <h1 className={styles.heroTitle} id="accessories-hero-title">
                Les détails qui<br />
                accompagnent<br />
                votre style.
              </h1>
              <p className={styles.heroText}>
                Parcourez les accessoires de la boutique et consultez leur
                fiche. L’équipe précisera les caractéristiques et les modalités
                pour la pièce qui vous intéresse.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#selection">
                  <span>Voir la sélection</span>
                  <span aria-hidden="true" className={styles.arrow}>
                    ↗
                  </span>
                </a>
                <a
                  className={styles.whatsAppButton}
                  href={whatsappHref}
                  rel="noreferrer"
                  target={whatsappPhone ? '_blank' : undefined}
                >
                  <WhatsAppIcon className={styles.btnIcon} />
                  <span>Échanger sur WhatsApp</span>
                </a>
              </div>
            </div>

            <figure className={styles.heroFigure}>
              <div className={styles.heroImage}>
                <Image
                  alt="Femme découvrant des accessoires dans une boutique feutrée"
                  className={styles.photo}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                  src="/images/maquette/weglow-accessoires-00.jpg"
                />
              </div>
              <figcaption className={styles.caption}>
                Photographies d'ambiance illustratives · Catalogue officiel à
                fournir.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 2. La sélection accessoires Grid */}
      <section
        aria-labelledby="selection-title"
        className={styles.gridSection}
        id="selection"
      >
        <div className={styles.container}>
          <div className={styles.gridHeader}>
            <h2 className={styles.sectionHeading} id="selection-title">
              La sélection accessoires
            </h2>
            <p className={styles.gridSubheading}>
              Ambiances illustratives · Photographies, dénominations et
              références officielles à fournir.
            </p>
          </div>

          <div className={styles.productGrid}>
            {accessoryItems.map((item) => (
              <article className={styles.productCard} key={item.id}>
                <Link className={styles.imageLink} href="/accessoires/fiche">
                  <div className={styles.productImageWrapper}>
                    <Image
                      alt={item.alt}
                      className={styles.photo}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      src={item.image}
                    />
                  </div>
                </Link>
                <div className={styles.productMeta}>
                  <div className={styles.metaTop}>
                    <span className={styles.badge}>{item.category}</span>
                    <span className={styles.ref}>{item.ref}</span>
                  </div>
                  <h3 className={styles.productTitle}>
                    <Link href="/accessoires/fiche">{item.title}</Link>
                  </h3>
                  <Link
                    className={styles.cardActionLink}
                    href="/accessoires/fiche"
                  >
                    <span>Voir la fiche accessoire</span>
                    <span aria-hidden="true" className={styles.arrow}>
                      ↗
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Framed CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaCopy}>
              <h2 className={styles.ctaTitle}>Une pièce vous plaît ?</h2>
              <p className={styles.ctaText}>
                Indiquez sa référence pour demander des informations. Le tarif,
                le paiement et la livraison seront confirmés avec l’équipe.
              </p>
            </div>
            <div className={styles.ctaAction}>
              <a
                className={styles.whatsAppButtonFilled}
                href={whatsappHref}
                rel="noreferrer"
                target={whatsappPhone ? '_blank' : undefined}
              >
                <WhatsAppIcon className={styles.btnIcon} />
                <span>Demander via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
