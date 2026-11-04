'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WhatsAppIcon } from '@nextjs-template/ui';
import styles from './jewelry-detail-page.module.css';

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  '',
);
const whatsappHref = whatsappPhone
  ? `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
      'Bonjour WeGlow, je souhaite commander ou obtenir des informations sur la pièce Bijou · nom à renseigner (Réf. à renseigner).',
    )}`
  : '/contact';

const thumbnails = [
  {
    id: 0,
    src: '/images/maquette/weglow-bijou-fiche-00.jpg',
    alt: 'Vue principale de la parure de bijou doré',
  },
  {
    id: 1,
    src: '/images/maquette/weglow-accueil-03.jpg',
    alt: 'Gros plan sur le fermoir et les détails de matière',
  },
  {
    id: 2,
    src: '/images/maquette/weglow-accueil-01.jpg',
    alt: 'Bijou porté en situation',
  },
];

const relatedJewelry = [
  {
    id: 'b-01',
    title: 'Bijou · nom à renseigner',
    ref: 'Réf. à renseigner',
    category: 'BIJOUX',
    image: '/images/maquette/weglow-bijoux-01.jpg',
    alt: 'Bracelet doré orné d’un médaillon travaillé',
  },
  {
    id: 'b-02',
    title: 'Bijou · nom à renseigner',
    ref: 'Réf. à renseigner',
    category: 'BIJOUX',
    image: '/images/maquette/weglow-bijoux-02.jpg',
    alt: 'Bracelet jonc doré',
  },
  {
    id: 'b-03',
    title: 'Bijou · nom à renseigner',
    ref: 'Réf. à renseigner',
    category: 'BIJOUX',
    image: '/images/maquette/weglow-bijoux-03.jpg',
    alt: 'Boucle d’oreille dorée pendante',
  },
];

export function JewelryDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className={styles.breadcrumb}>
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">/</span>
          <Link href="/bijoux">Bijoux</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className={styles.currentCrumb}>
            Fiche bijou
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
                  Bijoux · référence à confirmer
                </span>
                <span className={styles.ref}>Réf. à renseigner</span>
              </div>

              <h1 className={styles.productTitle} id="product-title">
                Bijou · nom à renseigner
              </h1>

              <p className={styles.productDesc}>
                Description de cette pièce à compléter : forme, détails visibles
                et style du bijou, à partir du produit réel. Demandez les
                précisions nécessaires avant de choisir.
              </p>

              <ul className={styles.specList}>
                <li>Matière et finition : à confirmer</li>
                <li>Dimensions / taille : à confirmer</li>
                <li>Entretien du bijou : à confirmer</li>
              </ul>

              <div className={styles.pricingRow}>
                <p className={styles.pricingNote}>
                  Tarif à confirmer avec l’équipe lors de votre demande.
                </p>
              </div>

              <div className={styles.actionGroup}>
                <Link
                  className={styles.primaryButton}
                  href="/commande?ref=bijou-nom-a-renseigner"
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
                  target={whatsappPhone ? '_blank' : undefined}
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

        {/* Continuer à découvrir les bijoux */}
        <section
          aria-labelledby="related-title"
          className={styles.relatedSection}
        >
          <div className={styles.relatedHeader}>
            <h2 className={styles.sectionHeading} id="related-title">
              Continuer à découvrir les bijoux
            </h2>
            <Link className={styles.underlineLink} href="/bijoux">
              <span>Voir tout le catalogue</span>
              <span aria-hidden="true"> ↗</span>
            </Link>
          </div>

          <div className={styles.relatedGrid}>
            {relatedJewelry.map((item) => (
              <article className={styles.productCard} key={item.id}>
                <Link className={styles.imageLink} href="/bijoux/fiche">
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
                    <Link href="/bijoux/fiche">{item.title}</Link>
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

