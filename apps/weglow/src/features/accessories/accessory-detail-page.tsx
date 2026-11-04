'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { buildWhatsAppHref, WhatsAppIcon } from '@nextjs-template/ui';
import styles from './accessory-detail-page.module.css';

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  '',
);
const whatsappHref = buildWhatsAppHref(whatsappPhone, 'Bonjour WeGlow, je souhaite commander ou obtenir des informations sur l’accessoire (Réf. à renseigner).',);

const thumbnails = [
  {
    id: 0,
    src: '/images/maquette/weglow-accessoire-fiche-00.jpg',
    alt: 'Vue principale de l’accessoire de mode',
  },
  {
    id: 1,
    src: '/images/maquette/weglow-accessoires-05.jpg',
    alt: 'Gros plan sur la matière et les surpiqûres',
  },
  {
    id: 2,
    src: '/images/maquette/weglow-accessoires-04.jpg',
    alt: 'Détail textile et arrangement',
  },
];

const relatedAccessories = [
  {
    id: 'a-01',
    title: 'Accessoire · nom à renseigner',
    ref: 'Réf. à renseigner',
    category: 'ACCESSOIRES',
    image: '/images/maquette/weglow-accessoires-01.jpg',
    alt: 'Accessoires de maroquinerie et foulard',
  },
  {
    id: 'a-02',
    title: 'Accessoire · nom à renseigner',
    ref: 'Réf. à renseigner',
    category: 'ACCESSOIRES',
    image: '/images/maquette/weglow-accessoires-02.jpg',
    alt: 'Bracelet en laiton brossé',
  },
  {
    id: 'a-03',
    title: 'Accessoire · nom à renseigner',
    ref: 'Réf. à renseigner',
    category: 'ACCESSOIRES',
    image: '/images/maquette/weglow-accessoires-03.jpg',
    alt: 'Sac maroquinerie bleu nuit',
  },
];

export function AccessoryDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className={styles.breadcrumb}>
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">/</span>
          <Link href="/accessoires">Accessoires</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className={styles.currentCrumb}>
            Fiche accessoire
          </span>
        </nav>

        {/* Product Fiche */}
        <section aria-labelledby="product-title" className={styles.productSection}>
          <div className={styles.productGrid}>
            {/* Gallery Column */}
            <div className={styles.galleryCol}>
              <div className={styles.mainImageWrapper}>
                <Image
                  alt={thumbnails[selectedImage].alt}
                  className={styles.mainPhoto}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 55vw"
                  src={thumbnails[selectedImage].src}
                />
              </div>

              <div className={styles.thumbnailRow}>
                {thumbnails.map((thumb, idx) => (
                  <button
                    aria-label={`Afficher la vue ${idx + 1}`}
                    className={`${styles.thumbButton} ${selectedImage === idx ? styles.thumbActive : ''}`}
                    key={thumb.id}
                    onClick={() => setSelectedImage(idx)}
                    type="button"
                  >
                    <Image
                      alt={thumb.alt}
                      className={styles.thumbPhoto}
                      fill
                      sizes="160px"
                      src={thumb.src}
                    />
                  </button>
                ))}
              </div>
              <p className={styles.caption}>
                Photographies d'ambiance illustratives · Catalogue officiel à
                fournir.
              </p>
            </div>

            {/* Info Column */}
            <div className={styles.infoCol}>
              <div className={styles.metaRow}>
                <span className={styles.badge}>
                  Accessoires · référence à confirmer
                </span>
                <span className={styles.ref}>Réf. à renseigner</span>
              </div>

              <h1 className={styles.productTitle} id="product-title">
                Accessoire · nom à renseigner
              </h1>

              <p className={styles.productDesc}>
                Description de cet accessoire à compléter : matière, finitions
                visibles et conseils de style, à partir de l’article réel.
                Demandez les précisions nécessaires avant de choisir.
              </p>

              <ul className={styles.specList}>
                <li>Matière et confection : à confirmer</li>
                <li>Dimensions / format : à confirmer</li>
                <li>Entretien de la pièce : à confirmer</li>
              </ul>

              <div className={styles.pricingRow}>
                <p className={styles.pricingNote}>
                  Tarif à confirmer avec l’équipe lors de votre demande.
                </p>
              </div>

              <div className={styles.actionGroup}>
                <Link
                  className={styles.primaryButton}
                  href="/commande?ref=accessoire-nom-a-renseigner"
                >
                  <span>Demander des informations</span>
                  <span aria-hidden="true" className={styles.arrow}>
                    ↗
                  </span>
                </Link>

                <a
                  className={styles.whatsAppButton}
                  href={whatsappHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  <WhatsAppIcon className={styles.btnIcon} />
                  <span>Commander sur WhatsApp</span>
                </a>
              </div>

              <p className={styles.reassurance}>
                Votre échange avec l’équipe permet de préciser la demande.
                Paiement et livraison à confirmer ; aucune validation
                automatique.
              </p>
            </div>
          </div>
        </section>

        {/* Continuer à découvrir les accessoires */}
        <section
          aria-labelledby="related-title"
          className={styles.relatedSection}
        >
          <div className={styles.relatedHeader}>
            <h2 className={styles.sectionHeading} id="related-title">
              Continuer à découvrir les accessoires
            </h2>
            <Link className={styles.underlineLink} href="/accessoires">
              <span>Voir tout le catalogue</span>
              <span aria-hidden="true"> ↗</span>
            </Link>
          </div>

          <div className={styles.relatedGrid}>
            {relatedAccessories.map((item) => (
              <article className={styles.productCard} key={item.id}>
                <Link className={styles.imageLink} href="/accessoires/fiche">
                  <div className={styles.productImageWrapper}>
                    <Image
                      alt={item.alt}
                      className={styles.photo}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      src={item.image}
                    />
                  </div>
                </Link>
                <div className={styles.productMeta}>
                  <div className={styles.metaTop}>
                    <span className={styles.badgeMini}>{item.category}</span>
                    <span className={styles.refMini}>{item.ref}</span>
                  </div>
                  <h3 className={styles.relatedTitle}>
                    <Link href="/accessoires/fiche">{item.title}</Link>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

