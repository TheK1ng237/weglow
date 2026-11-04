import Image from 'next/image';
import Link from 'next/link';
import { WhatsAppIcon } from '@nextjs-template/ui';
import styles from './home-page.module.css';

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  '',
);
const whatsappHref = whatsappPhone
  ? `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
      'Bonjour WeGlow, je souhaite obtenir des informations sur une pièce vue sur le site.',
    )}`
  : '/contact';

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* 1. Hero Section */}
      <section aria-labelledby="hero-title" className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Bijoux & accessoires</p>
              <h1 className={styles.heroTitle} id="hero-title">
                L’éclat qui<br />
                vous ressemble.
              </h1>
              <p className={styles.heroText}>
                Des bijoux et des accessoires à découvrir, pour accompagner
                votre style ou faire plaisir. Prenons le temps de choisir
                ensemble.
              </p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} href="/bijoux">
                  <span>Découvrir les bijoux</span>
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
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className={styles.heroImageWrapper}>
              <div className={styles.heroImage}>
                <Image
                  alt="Parure de bijoux dorés présentée sur un écrin de pierre sombre"
                  className={styles.photo}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                  src="/images/maquette/weglow-accueil-00.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Notre Histoire */}
      <section aria-labelledby="story-title" className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div>
              <p className={styles.eyebrow}>Notre histoire</p>
              <h2 className={styles.storyTitle} id="story-title">
                Une boutique, une attention<br />
                personnelle.
              </h2>
            </div>
            <div className={styles.storyCopy}>
              <p>
                Depuis quatre ans, WeGlow vous accompagne dans le choix de
                bijoux et accessoires pour exprimer votre style et votre
                personnalité. Notre équipe vous aide à trouver le détail qui
                vous correspond.
              </p>
              <Link className={styles.underlineLink} href="/a-propos">
                <span>À propos de WeGlow</span>
                <span aria-hidden="true"> ↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deux façons d'affirmer votre allure */}
      <section aria-labelledby="categories-title" className={styles.categoriesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading} id="categories-title">
            Deux façons d’affirmer votre allure
          </h2>

          <div className={styles.twoColGrid}>
            {/* Card 1: Bijoux */}
            <div className={styles.categoryCard}>
              <div className={styles.categoryImageWrapper}>
                <Image
                  alt="Femme souriante découvrant des parures dorées en vitrine"
                  className={styles.photo}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="/images/maquette/weglow-accueil-01.jpg"
                />
              </div>
              <div className={styles.categoryContent}>
                <h3 className={styles.categoryTitle}>Bijoux</h3>
                <p className={styles.categoryDesc}>
                  Découvrez les pièces de la boutique et leurs détails.
                </p>
                <Link className={styles.underlineLink} href="/bijoux">
                  Voir les bijoux
                </Link>
              </div>
            </div>

            {/* Card 2: Accessoires */}
            <div className={styles.categoryCard}>
              <div className={styles.categoryImageWrapper}>
                <Image
                  alt="Sélection d'accessoires de mode, foulard de soie et maroquinerie"
                  className={styles.photo}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="/images/maquette/weglow-accueil-02.jpg"
                />
              </div>
              <div className={styles.categoryContent}>
                <h3 className={styles.categoryTitle}>Accessoires</h3>
                <p className={styles.categoryDesc}>
                  Explorez les accessoires, dans un catalogue distinct.
                </p>
                <Link className={styles.underlineLink} href="/accessoires">
                  Voir les accessoires
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Le détail à regarder de près */}
      <section aria-labelledby="detail-title" className={styles.detailSection}>
        <div className={styles.container}>
          <div className={styles.detailHeader}>
            <h2 className={styles.sectionHeading} id="detail-title">
              Le détail à regarder de près
            </h2>
            <div className={styles.detailHeaderRight}>
              <span className={styles.statusTag}>
                SÉLECTION EN COURS — RÉFÉRENCES À FOURNIR
              </span>
              <Link className={styles.primaryButton} href="/bijoux/fiche">
                <span>Voir la fiche bijou</span>
                <span aria-hidden="true" className={styles.arrow}>
                  ↗
                </span>
              </Link>
            </div>
          </div>

          <div className={styles.detailGrid}>
            <figure className={styles.detailFigure}>
              <div className={styles.detailImageWrapper}>
                <Image
                  alt="Gros plan sur une bague dorée ornée posée sur une roche sombre"
                  className={styles.photo}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="/images/maquette/weglow-accueil-03.jpg"
                />
              </div>
              <figcaption className={styles.detailCaption}>
                Bijou · nom à renseigner — photo à fournir
              </figcaption>
            </figure>

            <figure className={styles.detailFigure}>
              <div className={styles.detailImageWrapper}>
                <Image
                  alt="Gros plan sur un collier précieux ciselé en or sur étoffe"
                  className={styles.photo}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="/images/maquette/weglow-accueil-04.jpg"
                />
              </div>
              <figcaption className={styles.detailCaption}>
                Bijou · autre vue — détail matière à fournir
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 5. Les retours de la boutique */}
      <section aria-labelledby="reviews-title" className={styles.reviewsSection}>
        <div className={styles.container}>
          <p className={styles.eyebrow} id="reviews-title">
            Les retours de la boutique
          </p>
          <div className={styles.quoteBlock}>
            <p className={styles.quoteTag}>
              TÉMOIGNAGE À VALIDER — AVIS CLIENT RÉEL À FOURNIR
            </p>
            <blockquote className={styles.quoteText}>
              « Avis client validé à insérer. Ce contenu est un emplacement
              réservé, à remplacer par un vrai témoignage avant publication. »
            </blockquote>
            <p className={styles.quoteAuthor}>
              Prénom à fournir · Achat de bijou / accessoire · à confirmer
            </p>
          </div>
        </div>
      </section>

      {/* 6. Une pièce vous plaît ? Framed CTA Banner */}
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
