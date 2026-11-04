import Image from 'next/image';
import Link from 'next/link';
import { WhatsAppIcon } from '@nextjs-template/ui';
import styles from './events-page.module.css';

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  '',
);
const whatsappHref = whatsappPhone
  ? `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
      'Bonjour WeGlow Surprise, je souhaite des informations sur vos prestations événementielles et décors.',
    )}`
  : '/contact';

const eventsList = [
  {
    id: 'anniversaires',
    number: '01 · ÉVÉNEMENTIEL',
    title: 'Anniversaires',
    description:
      'Des décors festifs et sur mesure pour célébrer un cap : enfants, adolescents, adultes ou anniversaires de couple. Chaque mise en scène reflète la personnalité du célébré.',
    bullets: [
      'Arche de ballons organiques, enseignes lumineuses néon et backdrops personnalisés',
      'Table de fête soignée, sweet table et présentoirs à gâteau coordonnés',
      'Thématique sur mesure adaptée à l’âge et à vos préférences',
    ],
    badge: 'Sur mesure',
    prestationParam: 'anniversaire',
    mainImage: '/images/maquette/surprise-galerie-01.jpg',
    alt: 'Décor d’anniversaire festif et élégant',
    thumbs: [
      '/images/maquette/surprise-accueil-02.jpg',
      '/images/maquette/surprise-galerie-04.jpg',
      '/images/maquette/surprise-accueil-03.jpg',
    ],
  },
  {
    id: 'mariages',
    number: '02 · ÉVÉNEMENTIEL',
    title: 'Mariages',
    description:
      'Une scénographie féerique pour votre union : de la cérémonie laïque au dîner de gala, chaque détail est orchestré avec raffinement et sensibilité.',
    bullets: [
      'Arches florales monumentales et allée nuptiale théâtralisée',
      'Art de la table raffiné, centres de table végétaux et papeterie assortie',
      'Éclairages d’ambiance tamisés, guirlandes et bougies pour une féerie nocturne',
    ],
    badge: 'Sur devis',
    prestationParam: 'mariage',
    mainImage: '/images/maquette/surprise-evenements-01.jpg',
    alt: 'Décoration féerique de salle de mariage',
    thumbs: [
      '/images/maquette/surprise-evenements-02.jpg',
      '/images/maquette/surprise-accueil-12.jpg',
      '/images/maquette/surprise-galerie-12.jpg',
    ],
  },
  {
    id: 'mini-mariages',
    number: '03 · ÉVÉNEMENTIEL',
    title: 'Mini-mariages',
    description:
      'L’élégance de la haute couture événementielle dans un cadre confidentiel et intimiste pour célébrer votre amour avec vos proches les plus précieux.',
    bullets: [
      'Format intimiste de 10 à 50 convives pour une atmosphère chaleureuse',
      'Décoration sur mesure concentrée sur le détail et l’émotion partagée',
      'Mise en scène personnalisée de table d’honneur et espace cocktail',
    ],
    badge: 'Intimiste & exclusif',
    prestationParam: 'mini-mariage',
    mainImage: '/images/maquette/surprise-evenements-00.jpg',
    alt: 'Réception intimiste de mini-mariage élégant',
    thumbs: [
      '/images/maquette/surprise-evenements-01.jpg',
      '/images/maquette/surprise-accueil-07.jpg',
      '/images/maquette/surprise-galerie-03.jpg',
    ],
  },
  {
    id: 'baby-showers',
    number: '04 · ÉVÉNEMENTIEL',
    title: 'Baby showers & Gender reveals',
    description:
      'Un univers de douceur et de tendresse pour célébrer l’arrivée imminente de bébé ou révéler son genre dans une émotion communicative.',
    bullets: [
      'Arches douces aux tons pastel, bordeaux poudré ou teintes personnalisées',
      'Photocall mémorable avec lettres lumineuses BABY ou teddy bears',
      'Mise en scène gourmande pour le gâteau et les cadeaux invités',
    ],
    badge: 'Douceur & célébration',
    prestationParam: 'baby-shower',
    mainImage: '/images/maquette/surprise-galerie-05.jpg',
    alt: 'Mise en scène douce et lumineuse pour une baby shower',
    thumbs: [
      '/images/maquette/surprise-accueil-13.jpg',
      '/images/maquette/surprise-galerie-00.jpg',
      '/images/maquette/surprise-accueil-01.jpg',
    ],
  },
  {
    id: 'romantique',
    number: '05 · ÉVÉNEMENTIEL',
    title: 'Décoration romantique',
    description:
      'Créez la surprise ultime pour votre moitié : demande en mariage secrète, anniversaire de rencontre ou soirée privée inoubliable.',
    bullets: [
      'Tapis de pétales de roses fraîches, lanternes scintillantes et bougies',
      'Lettres géantes lumineuses « MARRY ME » ou messages personnalisés',
      'Champagne, bouquet de roses et accompagnement musical en option',
    ],
    badge: 'Émotion pure',
    prestationParam: 'romantique',
    mainImage: '/images/maquette/surprise-galerie-06.jpg',
    alt: 'Ambiance romantique avec bougies et roses pour une demande en mariage',
    thumbs: [
      '/images/maquette/surprise-accueil-04.jpg',
      '/images/maquette/surprise-accueil-06.jpg',
      '/images/maquette/surprise-galerie-02.jpg',
    ],
  },
];

export function EventsPage() {
  return (
    <div className={styles.page}>
      {/* 1. Hero (Dark) */}
      <section aria-labelledby="events-hero-title" className={styles.hero}>
        <Image
          alt="Scénographie événementielle et réception WeGlow Surprise"
          className={styles.heroImage}
          fill
          priority
          sizes="100vw"
          src="/images/maquette/surprise-evenements-00.jpg"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Événementiel & scénographie</p>
            <h1 className={styles.heroTitle} id="events-hero-title">
              Des décors pensés<br />
              pour vos plus grands moments.
            </h1>
            <p className={styles.heroText}>
              Anniversaires, mariages, mini-mariages intimistes, baby showers ou
              soirées romantiques. Nous concevons chaque décor sur mesure pour que
              chaque instant reste inoubliable.
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

      {/* 2. Notre Savoir-faire + Anchor navigation (Bordeaux #661416) */}
      <section aria-labelledby="knowhow-title" className={styles.intentSection}>
        <div className={styles.container}>
          <div className={styles.intentGrid}>
            <div className={styles.intentCopy}>
              <p className={styles.intentEyebrow}>Notre savoir-faire</p>
              <h2 className={styles.intentTitle} id="knowhow-title">
                Une mise en scène pour chaque étape de la vie.
              </h2>
              <p className={styles.intentText}>
                Du premier anniversaire au mariage grandiose, nous façonnons des
                ambiances immersives mêlant structures florales, arches de
                ballons organiques, éclairages chaleureux et art de la table.
              </p>
            </div>

            <div className={styles.anchorCol}>
              <p className={styles.anchorHeading}>Aller directement à</p>
              <nav aria-label="Sommaire de l’événementiel" className={styles.anchorNav}>
                <a className={styles.anchorLink} href="#anniversaires">
                  Anniversaires
                </a>
                <a className={styles.anchorLink} href="#mariages">
                  Mariages
                </a>
                <a className={styles.anchorLink} href="#mini-mariages">
                  Mini-mariages
                </a>
                <a className={styles.anchorLink} href="#baby-showers">
                  Baby showers & Gender reveals
                </a>
                <a className={styles.anchorLink} href="#romantique">
                  Décoration romantique
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 5 Detailed Event Sections */}
      <div className={styles.prestationsContainer}>
        {eventsList.map((item, index) => (
          <section
            aria-labelledby={`title-${item.id}`}
            className={`${styles.prestationSection} ${
              index % 2 === 1 ? styles.altBg : ''
            }`}
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
                          alt={`${item.title} réalisation ${tIdx + 1}`}
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
                    <h3 className={styles.subBlockTitle}>Ce que nous créons</h3>
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
                Un événement particulier en préparation ?
              </h2>
              <p className={styles.bannerText}>
                Partagez votre date, votre lieu et vos souhaits de scénographie.
                Notre équipe vous répond sous 24h avec une proposition sur
                mesure.
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
                <span>Écrire sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
