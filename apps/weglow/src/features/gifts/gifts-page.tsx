import Image from 'next/image';
import Link from 'next/link';
import { buildWhatsAppHref, WhatsAppIcon } from '@nextjs-template/ui';
import styles from './gifts-page.module.css';

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  '',
);
const whatsappHref = buildWhatsAppHref(whatsappPhone, 'Bonjour WeGlow, je cherche une idée de cadeau en bijou ou accessoire.',);

const jewelryGifts = [
  {
    id: 'cg-01',
    title: 'Bijou à offrir · A',
    description: 'Nom et référence à renseigner. Demandez conseil sur la pièce.',
    image: '/images/maquette/weglow-cadeaux-01.jpg',
    alt: 'Collier d’exception doré à offrir',
    href: '/bijoux/fiche',
  },
  {
    id: 'cg-02',
    title: 'Bijou à offrir · B',
    description: 'Autre sélection du catalogue officiel, à valider par l’équipe.',
    image: '/images/maquette/weglow-cadeaux-02.jpg',
    alt: 'Bracelet jonc raffiné porté à la main',
    href: '/bijoux/fiche',
  },
];

const accessoryGifts = [
  {
    id: 'cg-03',
    title: 'Accessoire à offrir · A',
    description: 'Écharpe, maroquinerie ou détail textile à choisir avec l’équipe.',
    image: '/images/maquette/weglow-cadeaux-03.jpg',
    alt: 'Sac et foulard de soie élégants',
    href: '/accessoires/fiche',
  },
  {
    id: 'cg-04',
    title: 'Accessoire à offrir · B',
    description: 'Sélection complémentaire à découvrir en boutique.',
    image: '/images/maquette/weglow-cadeaux-04.jpg',
    alt: 'Pochette de maroquinerie et accessoires assortis',
    href: '/accessoires/fiche',
  },
];

const giftSteps = [
  {
    number: '01',
    title: 'Définir le style',
    description:
      'Une préférence pour les reflets dorés chauds, un porté quotidien discret ou une pièce plus remarquable ? Racontez-nous ses goûts.',
  },
  {
    number: '02',
    title: 'Échanger avec l’équipe',
    description:
      'Nous vous guidons sur les ajustements de taille, les matières adaptées et les détails qui font la différence.',
  },
  {
    number: '03',
    title: 'Retrait ou remise soignée',
    description:
      'Chaque attention peut être présentée dans un emballage soigné, prête à être offerte pour l’occasion.',
  },
];

export function GiftsPage() {
  return (
    <div className={styles.page}>
      {/* 1. Hero */}
      <section aria-labelledby="gifts-hero-title" className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Bijoux & accessoires à offrir</p>
              <h1 className={styles.heroTitle} id="gifts-hero-title">
                Un détail choisi<br />
                pour quelqu’un.
              </h1>
              <p className={styles.heroText}>
                Pour un anniversaire ou simplement pour faire plaisir,
                découvrez des idées de bijoux et accessoires. La sélection et
                ses caractéristiques sont à confirmer avec la boutique.
              </p>
            </div>

            <figure className={styles.heroFigure}>
              <div className={styles.heroImage}>
                <Image
                  alt="Parure de bijoux à offrir délicatement posée sur pierre sombre"
                  className={styles.photo}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                  src="/images/maquette/weglow-cadeaux-00.jpg"
                />
              </div>
              <figcaption className={styles.caption}>
                MÉDIA À FOURNIR · Bijoux à offrir · sélection officielle à
                fournir.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 2. Un bijou pour faire plaisir */}
      <section aria-labelledby="bijoux-gift-title" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading} id="bijoux-gift-title">
            Un bijou pour faire plaisir
          </h2>

          <div className={styles.twoColGrid}>
            {jewelryGifts.map((item) => (
              <div className={styles.giftCard} key={item.id}>
                <div className={styles.cardImageWrapper}>
                  <Image
                    alt={item.alt}
                    className={styles.photo}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src={item.image}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                  <Link className={styles.cardLink} href={item.href}>
                    <span>Voir la fiche bijou</span>
                    <span aria-hidden="true" className={styles.arrow}>
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Un accessoire pour compléter */}
      <section aria-labelledby="accessoire-gift-title" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading} id="accessoire-gift-title">
            Un accessoire pour compléter
          </h2>

          <div className={styles.twoColGrid}>
            {accessoryGifts.map((item) => (
              <div className={styles.giftCard} key={item.id}>
                <div className={styles.cardImageWrapper}>
                  <Image
                    alt={item.alt}
                    className={styles.photo}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src={item.image}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                  <Link className={styles.cardLink} href={item.href}>
                    <span>Voir la fiche accessoire</span>
                    <span aria-hidden="true" className={styles.arrow}>
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Comment préparer votre cadeau ? */}
      <section aria-labelledby="steps-title" className={styles.stepsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading} id="steps-title">
            Comment préparer votre cadeau ?
          </h2>
          <div className={styles.stepsGrid}>
            {giftSteps.map((step) => (
              <div className={styles.stepCard} key={step.number}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Framed CTA */}
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
                target="_blank"
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
