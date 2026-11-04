import Image from 'next/image';
import Link from 'next/link';
import { buildWhatsAppHref, WhatsAppIcon } from '@nextjs-template/ui';
import styles from './home-page.module.css';

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  '',
);
const whatsappHref = buildWhatsAppHref(whatsappPhone, 'Bonjour WeGlow Surprise, je souhaite imaginer une surprise ou un événement.',);

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* 1. Hero Section (Dark) */}
      <section aria-labelledby="hero-title" className={styles.hero}>
        <Image
          alt="Ambiance féerique et cadeaux d'exception WeGlow Surprise"
          className={styles.heroImage}
          fill
          priority
          sizes="100vw"
          src="/images/maquette/surprise-accueil-00.jpg"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Cadeaux · Événementiel · Musique</p>
            <h1 className={styles.heroTitle} id="hero-title">
              Des émotions<br />
              à offrir.
            </h1>
            <p className={styles.heroText}>
              Une attention personnalisée, une fête à imaginer, une ambiance
              musicale à partager. Racontez-nous l’occasion.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.bordeauxButton} href="/cadeaux">
                <span>Découvrir nos prestations</span>
                <span aria-hidden="true" className={styles.arrow}>
                  ↗
                </span>
              </Link>
              <Link className={styles.outlineDarkButton} href="/devis">
                <span>Demander un devis</span>
                <span aria-hidden="true" className={styles.arrow}>
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Notre Intention (Full-width Bordeaux #661416) */}
      <section aria-labelledby="intent-title" className={styles.intentSection}>
        <div className={styles.container}>
          <div className={styles.intentContent}>
            <p className={styles.intentEyebrow}>Notre intention</p>
            <h2 className={styles.intentTitle} id="intent-title">
              L’attention commence par votre histoire.
            </h2>
            <p className={styles.intentText}>
              WeGlow Surprise accompagne vos envies de cadeaux, vos événements et
              vos moments en musique. L’occasion, la personne et le budget
              guident l’échange ; les possibilités sont précisées avec l’équipe.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Trois façons de faire plaisir (Dark) */}
      <section aria-labelledby="three-ways-title" className={styles.threeWaysSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading} id="three-ways-title">
            Trois façons de faire plaisir
          </h2>

          <div className={styles.threeColGrid}>
            {/* Card 1: Cadeaux */}
            <div className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image
                  alt="Femme découvrant un panier garni de fleurs et douceurs"
                  className={styles.photo}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  src="/images/maquette/surprise-accueil-01.jpg"
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>Cadeaux</h3>
                <p className={styles.cardText}>
                  Paniers surprise, bouquets d’argent ou de roses, box
                  romantiques et cadeaux personnalisés.
                </p>
                <Link className={styles.cardLink} href="/cadeaux">
                  <span>Découvrir les cadeaux</span>
                  <span aria-hidden="true" className={styles.arrow}>
                    ↗
                  </span>
                </Link>
              </div>
            </div>

            {/* Card 2: Événementiel */}
            <div className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image
                  alt="Couple célébrant un événement dans une ambiance tamisée aux chandelles"
                  className={styles.photo}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  src="/images/maquette/surprise-accueil-02.jpg"
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>Événementiel</h3>
                <p className={styles.cardText}>
                  Anniversaires, mariages, mini-mariages, baby showers et décors
                  romantiques.
                </p>
                <Link className={styles.cardLink} href="/evenements">
                  <span>Voir l’événementiel</span>
                  <span aria-hidden="true" className={styles.arrow}>
                    ↗
                  </span>
                </Link>
              </div>
            </div>

            {/* Card 3: Musique */}
            <div className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image
                  alt="Saxophoniste jouant dans une ambiance festive en soirée"
                  className={styles.photo}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  src="/images/maquette/surprise-accueil-03.jpg"
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>Musique</h3>
                <p className={styles.cardText}>
                  Saxophone, guitare ou piano pour accompagner votre occasion.
                </p>
                <Link className={styles.cardLink} href="/musique">
                  <span>Découvrir la musique</span>
                  <span aria-hidden="true" className={styles.arrow}>
                    ↗
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. La matière en images (Light #F6F3EE) */}
      <section aria-labelledby="gallery-title" className={styles.lightSection}>
        <div className={styles.container}>
          <div className={styles.lightHeader}>
            <div>
              <p className={styles.lightEyebrow}>La matière en images</p>
              <h2 className={styles.lightTitle} id="gallery-title">
                Des réalisations à découvrir
              </h2>
            </div>
            <Link className={styles.lightUnderlineLink} href="/galerie">
              <span>Voir toute la galerie</span>
              <span aria-hidden="true"> ↗</span>
            </Link>
          </div>

          {/* 2 Large Showcase Images */}
          <div className={styles.showcaseGrid}>
            <figure className={styles.showcaseFigure}>
              <div className={styles.showcaseImageWrapper}>
                <Image
                  alt="Femme ouvrant un coffret cadeau bordeaux avec ruban délicat"
                  className={styles.photo}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="/images/maquette/surprise-accueil-04.jpg"
                />
              </div>
              <figcaption className={styles.showcaseCaption}>
                01 · Cadeau et attention personnalisée — ambiance
              </figcaption>
            </figure>

            <figure className={styles.showcaseFigure}>
              <div className={styles.showcaseImageWrapper}>
                <Image
                  alt="Couple souriant à table décorée de bougies et fleurs romantiques"
                  className={styles.photo}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="/images/maquette/surprise-accueil-05.jpg"
                />
              </div>
              <figcaption className={styles.showcaseCaption}>
                02 · Décor d’événement romantique — ambiance
              </figcaption>
            </figure>
          </div>

          {/* 4 Mini Cards */}
          <div className={styles.miniCardGrid}>
            <Link className={styles.miniCard} href="/cadeaux">
              <div className={styles.miniImageWrapper}>
                <Image
                  alt="Bouquet de roses et arrangement cadeau"
                  className={styles.photo}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  src="/images/maquette/surprise-accueil-06.jpg"
                />
              </div>
              <p className={styles.miniCaption}>Voir l’attention +</p>
            </Link>

            <Link className={styles.miniCard} href="/evenements">
              <div className={styles.miniImageWrapper}>
                <Image
                  alt="Amies célébrant une baby shower avec ballons dorés"
                  className={styles.photo}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  src="/images/maquette/surprise-accueil-07.jpg"
                />
              </div>
              <p className={styles.miniCaption}>Voir l’événement +</p>
            </Link>

            <Link className={styles.miniCard} href="/cadeaux">
              <div className={styles.miniImageWrapper}>
                <Image
                  alt="Écrin lumineux dévoilant une attention précieuse"
                  className={styles.photo}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  src="/images/maquette/surprise-accueil-08.jpg"
                />
              </div>
              <p className={styles.miniCaption}>Voir la surprise +</p>
            </Link>

            <Link className={styles.miniCard} href="/musique">
              <div className={styles.miniImageWrapper}>
                <Image
                  alt="Guitariste chanteur lors d’une fête en plein air"
                  className={styles.photo}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  src="/images/maquette/surprise-accueil-09.jpg"
                />
              </div>
              <p className={styles.miniCaption}>Découvrir la musique +</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Cadeaux Personnalisés (Dark) */}
      <section aria-labelledby="custom-gifts-title" className={styles.darkSection}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Cadeaux personnalisés</p>
          <h2 className={styles.sectionHeading} id="custom-gifts-title">
            Une attention qui vous ressemble
          </h2>

          <div className={styles.twoColGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureImageWrapper}>
                <Image
                  alt="Femme tenant un somptueux panier garni"
                  className={styles.photo}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="/images/maquette/surprise-accueil-10.jpg"
                />
              </div>
              <div className={styles.featureBody}>
                <h3 className={styles.featureTitle}>Offrir selon l’occasion</h3>
                <p className={styles.featureText}>
                  Un panier, un bouquet ou une box à composer selon votre
                  message, votre thème et votre budget.
                </p>
                <Link className={styles.cardLink} href="/cadeaux">
                  <span>Explorer les cinq cadeaux</span>
                  <span aria-hidden="true" className={styles.arrow}>
                    ↗
                  </span>
                </Link>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureImageWrapper}>
                <Image
                  alt="Mains ouvrant une boîte cadeau sur mesure personnalisée avec nom gravé"
                  className={styles.photo}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="/images/maquette/surprise-accueil-11.jpg"
                />
              </div>
              <div className={styles.featureBody}>
                <h3 className={styles.featureTitle}>Personnaliser le geste</h3>
                <p className={styles.featureText}>
                  Une création pensée à partir d’une histoire et de ce que vous
                  souhaitez transmettre.
                </p>
                <Link
                  className={styles.cardLink}
                  href="/cadeaux#cadeaux-personnalises"
                >
                  <span>Voir les cadeaux personnalisés</span>
                  <span aria-hidden="true" className={styles.arrow}>
                    ↗
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Événementiel (Light #F6F3EE) */}
      <section aria-labelledby="events-title" className={styles.lightSection}>
        <div className={styles.container}>
          <p className={styles.lightEyebrow}>Événementiel</p>
          <h2 className={styles.lightTitle} id="events-title">
            Un moment à célébrer
          </h2>

          <div className={styles.twoColGrid}>
            <div className={styles.featureCardLight}>
              <div className={styles.featureImageWrapper}>
                <Image
                  alt="Fête d’anniversaire joyeuse avec enfants et gâteau à bougies"
                  className={styles.photo}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="/images/maquette/surprise-accueil-12.jpg"
                />
              </div>
              <div className={styles.featureBody}>
                <h3 className={styles.featureTitleLight}>Fêter ensemble</h3>
                <p className={styles.featureTextLight}>
                  Anniversaire ou baby shower : précisez la date, le lieu, les
                  invités et le thème.
                </p>
                <Link className={styles.lightCardLink} href="/evenements">
                  <span>Voir l’événementiel</span>
                  <span aria-hidden="true" className={styles.arrow}>
                    ↗
                  </span>
                </Link>
              </div>
            </div>

            <div className={styles.featureCardLight}>
              <div className={styles.featureImageWrapper}>
                <Image
                  alt="Mariés se tenant la main sous une arche florale illuminée de bougies"
                  className={styles.photo}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="/images/maquette/surprise-accueil-13.jpg"
                />
              </div>
              <div className={styles.featureBody}>
                <h3 className={styles.featureTitleLight}>Célébrer votre lien</h3>
                <p className={styles.featureTextLight}>
                  Mariage, mini-mariage intime ou décoration romantique à
                  imaginer avec vous.
                </p>
                <Link className={styles.lightCardLink} href="/evenements">
                  <span>Préparer un événement</span>
                  <span aria-hidden="true" className={styles.arrow}>
                    ↗
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Musique Live (Dark) */}
      <section aria-labelledby="music-live-title" className={styles.darkSection}>
        <div className={styles.container}>
          <div className={styles.musicBox}>
            <p className={styles.eyebrow}>Musique live</p>
            <h2 className={styles.sectionHeading} id="music-live-title">
              La musique pour donner le ton
            </h2>
            <p className={styles.musicText}>
              Saxophone, guitare et piano : découvrez les trois profils
              instrumentaux. Mariages, anniversaires, dîners ou événements privés
              et professionnels ; disponibilité à confirmer.
            </p>
            <div className={styles.musicAction}>
              <Link className={styles.outlineDarkButton} href="/musique">
                <span>Voir la page musique</span>
                <span aria-hidden="true" className={styles.arrow}>
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Ce qu'ils en disent (Bordeaux #661416) */}
      <section aria-labelledby="testimonials-title" className={styles.testimonialsSection}>
        <div className={styles.container}>
          <p className={styles.intentEyebrow}>Ce qu’ils en disent</p>
          <h2 className={styles.testimonialsTitle} id="testimonials-title">
            Les mots de nos clients
          </h2>

          <div className={styles.quoteBlock}>
            <p className={styles.quoteTag}>
              TÉMOIGNAGE À VALIDER AVANT PUBLICATION
            </p>
            <blockquote className={styles.quoteText}>
              « Avis client validé à insérer. »
            </blockquote>
            <p className={styles.quoteAuthor}>
              Prénom à fournir · Type d’événement à fournir
            </p>
          </div>

          <p className={styles.testimonialsFootnote}>
            Tous les témoignages seront publiés après validation.
          </p>
        </div>
      </section>

      {/* 9. Quel moment souhaitez-vous imaginer ? (Light Banner #F6F3EE) */}
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
