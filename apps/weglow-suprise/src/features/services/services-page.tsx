import Image from 'next/image';
import Link from 'next/link';
import { buildWhatsAppHref, WhatsAppIcon } from '@nextjs-template/ui';
import styles from './services-page.module.css';

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  '',
);
const whatsappHref = buildWhatsAppHref(whatsappPhone, 'Bonjour WeGlow Surprise, je souhaite des informations sur vos cadeaux et compositions.',);

const giftsList = [
  {
    id: 'panier-surprise',
    number: '01 · CADEAUX',
    title: 'Panier surprise',
    description:
      'Une composition à découvrir et à offrir, pensée pour la personne et l’occasion. Le contenu se définit avec l’équipe, sans composition imposée.',
    bullets: [
      'Occasion et thème à préciser selon le destinataire',
      'Composition souhaitée (douceurs, fleurs, accessoires) et message personnel',
      'Lieu, date et modalités de livraison à convenir avec l’équipe',
    ],
    badge: 'Sur demande',
    prestationParam: 'panier-surprise',
    mainImage: '/images/maquette/surprise-accueil-10.jpg',
    alt: 'Panier garni élégant avec ruban bordeaux et fleurs',
    thumbs: [
      '/images/maquette/surprise-accueil-08.jpg',
      '/images/maquette/surprise-accueil-00.jpg',
      '/images/maquette/surprise-accueil-11.jpg',
    ],
  },
  {
    id: 'bouquet-argent',
    number: '02 · CADEAUX',
    title: 'Bouquet d’argent',
    description:
      'Le concept de bouquet composé de billets présentés avec élégance, origami ou mise en valeur soignée pour un geste mémorable.',
    bullets: [
      'Montant et répartition des billets à définir librement',
      'Choix des couleurs, rubans et touches florales assorties',
      'Occasion, message et conditionnement protecteur',
    ],
    badge: 'Sur demande',
    prestationParam: 'bouquet-argent',
    mainImage: '/images/maquette/surprise-cadeaux-00.jpg',
    alt: 'Bouquet d’argent et composition festive',
    thumbs: [
      '/images/maquette/surprise-accueil-06.jpg',
      '/images/maquette/surprise-accueil-10.jpg',
      '/images/maquette/surprise-accueil-01.jpg',
    ],
  },
  {
    id: 'bouquet-roses',
    number: '03 · CADEAUX',
    title: 'Bouquet de roses',
    description:
      'Des fleurs fraîches sélectionnées pour illuminer un anniversaire, une Saint-Valentin ou marquer une surprise romantique.',
    bullets: [
      'Roses rouges intenses, poudrées ou teintes personnalisées',
      'Arrangement floral généreux et travail du feuillage',
      'Carte calligraphiée avec votre mot personnel',
    ],
    badge: 'Sur demande',
    prestationParam: 'bouquet-roses',
    mainImage: '/images/maquette/surprise-accueil-06.jpg',
    alt: 'Bouquet de roses fraîches soigneusement arrangé',
    thumbs: [
      '/images/maquette/surprise-accueil-04.jpg',
      '/images/maquette/surprise-accueil-05.jpg',
      '/images/maquette/surprise-accueil-08.jpg',
    ],
  },
  {
    id: 'box-romantique',
    number: '04 · CADEAUX',
    title: 'Box romantique',
    description:
      'Un coffret feutré combinant roses, douceurs sucrées, éléments décoratifs et petites attentions pour une émotion partagée.',
    bullets: [
      'Roses délicates, chocolats fins ou attentions choisies',
      'Éléments personnalisés selon l’histoire de votre couple',
      'Finition ruban satin bordeaux et ouverture découverte',
    ],
    badge: 'Sur demande',
    prestationParam: 'box-romantique',
    mainImage: '/images/maquette/surprise-accueil-04.jpg',
    alt: 'Coffret romantique avec ruban bordeaux',
    thumbs: [
      '/images/maquette/surprise-accueil-08.jpg',
      '/images/maquette/surprise-accueil-11.jpg',
      '/images/maquette/surprise-accueil-05.jpg',
    ],
  },
  {
    id: 'cadeaux-personnalises',
    number: '05 · CADEAUX',
    title: 'Cadeaux personnalisés',
    description:
      'Vous avez une idée singulière en tête ? Nous créons votre cadeau sur mesure selon votre histoire, l’occasion et votre budget.',
    bullets: [
      'Personnalisation de prénoms, dates ou messages gravés',
      'Objets, coffrets ou mises en scène entièrement créés pour vous',
      'Échange direct avec l’équipe pour concrétiser votre envie',
    ],
    badge: 'Sur mesure',
    prestationParam: 'cadeau-personnalise',
    mainImage: '/images/maquette/surprise-accueil-11.jpg',
    alt: 'Boîte cadeau avec calligraphie dorée personnalisée',
    thumbs: [
      '/images/maquette/surprise-accueil-00.jpg',
      '/images/maquette/surprise-accueil-10.jpg',
      '/images/maquette/surprise-accueil-04.jpg',
    ],
  },
];

export function ServicesPage() {
  return (
    <div className={styles.page}>
      {/* 1. Hero (Dark) */}
      <section aria-labelledby="gifts-hero-title" className={styles.hero}>
        <Image
          alt="Compositions et bouquets d'exception WeGlow Surprise"
          className={styles.heroImage}
          fill
          priority
          sizes="100vw"
          src="/images/maquette/surprise-cadeaux-00.jpg"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Cadeaux personnalisés</p>
            <h1 className={styles.heroTitle} id="gifts-hero-title">
              Cinq façons<br />
              de faire plaisir.
            </h1>
            <p className={styles.heroText}>
              Choisissez une idée de départ et personnalisez-la avec l’équipe :
              l’occasion, la composition, le message et votre budget guident le
              projet.
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
        </div>
      </section>

      {/* 2. Notre Sélection + Anchors Table (Bordeaux #661416) */}
      <section aria-labelledby="selection-title" className={styles.intentSection}>
        <div className={styles.container}>
          <div className={styles.intentGrid}>
            <div className={styles.intentCopy}>
              <p className={styles.intentEyebrow}>Notre sélection</p>
              <h2 className={styles.intentTitle} id="selection-title">
                Une attention pensée pour chaque occasion.
              </h2>
              <p className={styles.intentText}>
                Paniers surprise, bouquets d’argent ou de roses, box romantiques
                et créations sur mesure. Chaque idée se construit avec vous ;
                composition, tarifs et modalités sont à confirmer lors de
                l’échange.
              </p>
            </div>

            <div className={styles.anchorCol}>
              <p className={styles.anchorHeading}>Aller directement à</p>
              <nav aria-label="Sommaire des cadeaux" className={styles.anchorNav}>
                <a className={styles.anchorLink} href="#panier-surprise">
                  Panier surprise
                </a>
                <a className={styles.anchorLink} href="#bouquet-argent">
                  Bouquet d’argent
                </a>
                <a className={styles.anchorLink} href="#bouquet-roses">
                  Bouquet de roses
                </a>
                <a className={styles.anchorLink} href="#box-romantique">
                  Box romantique
                </a>
                <a className={styles.anchorLink} href="#cadeaux-personnalises">
                  Cadeaux personnalisés
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 5 Detailed Prestations */}
      <div className={styles.prestationsContainer}>
        {giftsList.map((item, index) => (
          <section
            aria-labelledby={`title-${item.id}`}
            className={`${styles.prestationSection} ${index % 2 === 1 ? styles.altBg : ''}`}
            id={item.id}
            key={item.id}
          >
            <div className={styles.container}>
              <p className={styles.prestationNumber}>{item.number}</p>
              <h2 className={styles.prestationTitle} id={`title-${item.id}`}>
                {item.title}
              </h2>

              <div className={styles.prestationGrid}>
                {/* Visual Column */}
                <div className={styles.prestationVisual}>
                  <div className={styles.mainImageWrapper}>
                    <Image
                      alt={item.alt}
                      className={styles.photo}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      src={item.mainImage}
                    />
                  </div>
                  <div className={styles.thumbRow}>
                    {item.thumbs.map((thumbSrc, tIdx) => (
                      <div className={styles.thumbWrapper} key={tIdx}>
                        <Image
                          alt={`${item.title} détail ${tIdx + 1}`}
                          className={styles.photo}
                          fill
                          sizes="150px"
                          src={thumbSrc}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details Column */}
                <div className={styles.prestationDetails}>
                  <p className={styles.prestationDesc}>{item.description}</p>

                  <div className={styles.subBlock}>
                    <h3 className={styles.subBlockTitle}>À imaginer ensemble</h3>
                    <ul className={styles.bulletList}>
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.prestationActions}>
                    <span className={styles.badge}>{item.badge}</span>
                    <Link
                      className={styles.bordeauxButton}
                      href={`/devis?prestation=${item.prestationParam}`}
                    >
                      <span>Demander un devis</span>
                      <span aria-hidden="true" className={styles.arrow}>
                        ↗
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 4. Light Banner (#F6F3EE) */}
      <section className={styles.bannerSection}>
        <div className={styles.container}>
          <div className={styles.bannerCard}>
            <div className={styles.bannerCopy}>
              <h2 className={styles.bannerTitle}>
                Quel moment souhaitez-vous imaginer ?
              </h2>
              <p className={styles.bannerText}>
                Partagez votre idée, votre occasion et vos envies. L’équipe vous
                recontacte pour préciser le projet ; l’envoi ne garantit ni
                réservation ni date.
              </p>
            </div>
            <div className={styles.bannerAction}>
              <a
                className={styles.whatsAppButtonBordeaux}
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
              >
                <WhatsAppIcon className={styles.btnIcon} />
                <span>Écrire sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
