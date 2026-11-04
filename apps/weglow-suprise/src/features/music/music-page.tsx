'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WhatsAppIcon } from '@nextjs-template/ui';
import styles from './music-page.module.css';

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  '',
);
const whatsappHref = whatsappPhone
  ? `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
      'Bonjour WeGlow Surprise, je souhaite des informations sur vos prestations musicales live.',
    )}`
  : '/contact';

interface Artist {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  repertoire: string[];
  occasions: string[];
  sampleTitle: string;
  sampleDuration: string;
  badge: string;
  prestationParam: string;
  mainImage: string;
  alt: string;
}

const artistsList: Artist[] = [
  {
    id: 'saxophoniste',
    number: '01 · PRESTATION MUSICALE',
    title: 'Saxophoniste',
    subtitle: 'Élégance cuivrée & sonorités jazz lounge',
    description:
      'Une présence scénique magnétique pour sublimer vos cocktails de mariage, dîners romantiques et entrées de mariés. Des envolées jazzy veloutées aux arrangements pop modernes pour une ambiance chic et festive.',
    repertoire: [
      'Standards de jazz, Bossa nova & Latin vibes',
      'Reprises Pop & R&B contemporain en version instrumentale',
      'Deep house lounge & saxo live impro',
    ],
    occasions: [
      'Cocktail et vin d’honneur de mariage',
      'Demande en mariage et dîner romantique',
      'Anniversaires et soirées d’entreprise',
    ],
    sampleTitle: 'Live Session · Careless Whispers & Autumn Jazz',
    sampleDuration: '02:45',
    badge: 'Artiste solo ou duo',
    prestationParam: 'saxophoniste',
    mainImage: '/images/maquette/surprise-musique-00.jpg',
    alt: 'Saxophoniste jouant en soirée avec éclairages chauds',
  },
  {
    id: 'guitariste',
    number: '02 · PRESTATION MUSICALE',
    title: 'Guitariste',
    subtitle: 'Douceur acoustique & mélodies intimes',
    description:
      'Des arpèges délicats et un timbre acoustique authentique pour accompagner vos cérémonies laïques, vos cocktails en plein air ou vos repas conviviaux. Une atmosphère poétique et chaleureuse qui touche chaque convive.',
    repertoire: [
      'Pop folk acoustique & ballades internationales',
      'Bossa nova brésilienne et flamenco délicat',
      'Chansons françaises chic & fingerstyle',
    ],
    occasions: [
      'Cérémonie laïque et échange des vœux',
      'Garden party et cocktail en extérieur',
      'Anniversaires et surprises intimistes',
    ],
    sampleTitle: 'Acoustic Waves · Sunset Melody & Romance',
    sampleDuration: '03:12',
    badge: 'Acoustique pur',
    prestationParam: 'guitariste',
    mainImage: '/images/maquette/surprise-accueil-09.jpg',
    alt: 'Guitariste acoustique jouant lors d’un événement en plein air',
  },
  {
    id: 'pianiste',
    number: '03 · PRESTATION MUSICALE',
    title: 'Pianiste',
    subtitle: 'Raffinement des touches d’ivoire & émotion pure',
    description:
      'La noblesse du piano pour instaurer une atmosphère feutrée, majestueuse et empreinte d’une nostalgie heureuse. Idéal pour ponctuer les temps forts d’une célébration avec délicatesse et virtuosité.',
    repertoire: [
      'Grands classiques romantiques & néo-classique contemporain',
      'Musiques de films poétiques et cinématographiques',
      'Ballades pop élégantes et mélodies intemporelles',
    ],
    occasions: [
      'Dîner de gala et réceptions prestigieuses',
      'Cérémonies et entrées solennelles',
      'Soirée romantique en tête-à-tête aux chandelles',
    ],
    sampleTitle: 'Nocturne Live · Moonlight Reverie & Film Themes',
    sampleDuration: '02:58',
    badge: 'Clavier ou piano droit',
    prestationParam: 'pianiste',
    mainImage: '/images/maquette/surprise-accueil-14.jpg',
    alt: 'Pianiste en concert lors d’une réception élégante',
  },
];

export function MusicPage() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const togglePlay = (id: string) => {
    setPlayingId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.page}>
      {/* 1. Hero (Dark) */}
      <section aria-labelledby="music-hero-title" className={styles.hero}>
        <Image
          alt="Ambiance musicale live d'exception WeGlow Surprise"
          className={styles.heroImage}
          fill
          priority
          sizes="100vw"
          src="/images/maquette/surprise-musique-00.jpg"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Prestations musicales live</p>
            <h1 className={styles.heroTitle} id="music-hero-title">
              La musique<br />
              de vos moments précieux.
            </h1>
            <p className={styles.heroText}>
              Une présence musicale live apporte une dimension vibrante et
              incomparable à chaque célébration. Saxophoniste, guitariste ou
              pianiste : nos musiciens partenaires accompagnent vos événements
              avec virtuosité.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.bordeauxButton} href="/devis">
                <span>Demander un devis musical</span>
                <span aria-hidden="true" className={styles.arrow}>
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Notre Intention (Bordeaux #661416) */}
      <section aria-labelledby="music-intent-title" className={styles.intentSection}>
        <div className={styles.container}>
          <div className={styles.intentGrid}>
            <div className={styles.intentCopy}>
              <p className={styles.intentEyebrow}>Performance live</p>
              <h2 className={styles.intentTitle} id="music-intent-title">
                Une harmonie sur mesure pour vos réceptions.
              </h2>
              <p className={styles.intentText}>
                Tous nos artistes disposent de leur propre matériel de
                sonorisation haute fidélité autonome. Ils adaptent leur répertoire
                et leur niveau sonore à l’ambiance exacte de votre lieu et de
                vos convives.
              </p>
            </div>

            <div className={styles.anchorCol}>
              <p className={styles.anchorHeading}>Nos artistes</p>
              <nav aria-label="Sommaire des musiciens" className={styles.anchorNav}>
                <a className={styles.anchorLink} href="#saxophoniste">
                  Saxophoniste
                </a>
                <a className={styles.anchorLink} href="#guitariste">
                  Guitariste
                </a>
                <a className={styles.anchorLink} href="#pianiste">
                  Pianiste
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Artists List */}
      <div className={styles.artistsContainer}>
        {artistsList.map((artist, index) => {
          const isPlaying = playingId === artist.id;

          return (
            <section
              aria-labelledby={`artist-title-${artist.id}`}
              className={`${styles.artistSection} ${
                index % 2 === 1 ? styles.altBg : ''
              }`}
              id={artist.id}
              key={artist.id}
            >
              <div className={styles.container}>
                <p className={styles.artistNumber}>{artist.number}</p>
                <h2
                  className={styles.artistTitle}
                  id={`artist-title-${artist.id}`}
                >
                  {artist.title}
                </h2>
                <p className={styles.artistSubtitle}>{artist.subtitle}</p>

                <div className={styles.artistGrid}>
                  {/* Visual & Audio Player Column */}
                  <div className={styles.artistVisualCol}>
                    <div className={styles.photoWrapper}>
                      <Image
                        alt={artist.alt}
                        className={styles.photo}
                        fill
                        sizes="(max-width: 900px) 100vw, 50vw"
                        src={artist.mainImage}
                      />
                    </div>

                    {/* Interactive Player Mock */}
                    <div className={styles.playerBar}>
                      <button
                        aria-label={
                          isPlaying
                            ? `Mettre en pause l'extrait de ${artist.title}`
                            : `Écouter l'extrait de ${artist.title}`
                        }
                        className={styles.playButton}
                        onClick={() => togglePlay(artist.id)}
                        type="button"
                      >
                        {isPlaying ? (
                          <span aria-hidden="true" className={styles.pauseIcon}>
                            ⏸
                          </span>
                        ) : (
                          <span aria-hidden="true" className={styles.playIcon}>
                            ▶
                          </span>
                        )}
                      </button>

                      <div className={styles.playerInfo}>
                        <div className={styles.playerTrackRow}>
                          <span className={styles.trackTitle}>
                            {artist.sampleTitle}
                          </span>
                          <span className={styles.trackDuration}>
                            {artist.sampleDuration}
                          </span>
                        </div>
                        <div className={styles.progressBarWrapper}>
                          <div
                            className={`${styles.progressBarFill} ${
                              isPlaying ? styles.progressActive : ''
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details Column */}
                  <div className={styles.artistDetails}>
                    <p className={styles.artistDesc}>{artist.description}</p>

                    <div className={styles.metaBlock}>
                      <h3 className={styles.metaHeading}>Répertoire & styles</h3>
                      <ul className={styles.metaList}>
                        {artist.repertoire.map((rep, rIdx) => (
                          <li key={rIdx}>{rep}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.metaBlock}>
                      <h3 className={styles.metaHeading}>Idéal pour</h3>
                      <ul className={styles.metaList}>
                        {artist.occasions.map((occ, oIdx) => (
                          <li key={oIdx}>{occ}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.artistActions}>
                      <span className={styles.badge}>{artist.badge}</span>
                      <Link
                        className={styles.bordeauxButton}
                        href={`/devis?prestation=musique-${artist.prestationParam}`}
                      >
                        <span>Réserver cet artiste</span>
                        <span aria-hidden="true" className={styles.arrow}>
                          ↗
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 4. Organisation Steps (Bordeaux #661416) */}
      <section aria-labelledby="steps-title" className={styles.stepsSection}>
        <div className={styles.container}>
          <div className={styles.stepsHeader}>
            <p className={styles.intentEyebrow}>Organisation & logistique</p>
            <h2 className={styles.intentTitle} id="steps-title">
              Comment se déroule votre prestation musicale ?
            </h2>
          </div>

          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <span className={styles.stepNumber}>01</span>
              <h3 className={styles.stepTitle}>Choix du répertoire</h3>
              <p className={styles.stepText}>
                Nous définissons avec vous le style musical, les temps forts
                (entrée, gâteau, slow) et les morceaux coups de cœur que vous
                souhaitez entendre.
              </p>
            </div>

            <div className={styles.stepCard}>
              <span className={styles.stepNumber}>02</span>
              <h3 className={styles.stepTitle}>Sonorisation autonome</h3>
              <p className={styles.stepText}>
                L’artiste arrive 1h avant l’événement avec son matériel
                professionnel autonome pour les balances. Aucun prérequis
                complexe n’est demandé à votre salle.
              </p>
            </div>

            <div className={styles.stepCard}>
              <span className={styles.stepNumber}>03</span>
              <h3 className={styles.stepTitle}>Performance live</h3>
              <p className={styles.stepText}>
                Une présence élégante et bienveillante pour sublimer chaque
                instant et créer une émotion mémorable partagée avec tous vos
                invités.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Light Banner (#F6F3EE) */}
      <section className={styles.bannerSection}>
        <div className={styles.container}>
          <div className={styles.bannerCard}>
            <div className={styles.bannerCopy}>
              <h2 className={styles.bannerTitle}>
                Vous souhaitez une formation musicale personnalisée ?
              </h2>
              <p className={styles.bannerText}>
                Duo saxo & guitare, trio jazz ou pianiste chanteur : contactez-nous
                directement sur WhatsApp pour concevoir l’animation musicale sur
                mesure de votre événement.
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
