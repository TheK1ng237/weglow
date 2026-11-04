import Image from 'next/image';
import Link from 'next/link';
import { WhatsAppIcon } from '@nextjs-template/ui';
import styles from './jewelry-page.module.css';

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  '',
);
const whatsappHref = whatsappPhone
  ? `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
      'Bonjour WeGlow, je souhaite obtenir des informations sur une pièce de la sélection bijoux.',
    )}`
  : '/contact';

const jewelryItems = [
  {
    id: 'b-01',
    title: 'Bijou · nom à renseigner',
    ref: 'Réf. à renseigner',
    category: 'BIJOUX',
    image: '/images/maquette/weglow-bijoux-01.jpg',
    alt: 'Bracelet doré orné d’un médaillon ciselé',
  },
  {
    id: 'b-02',
    title: 'Bijou · nom à renseigner',
    ref: 'Réf. à renseigner',
    category: 'BIJOUX',
    image: '/images/maquette/weglow-bijoux-02.jpg',
    alt: 'Bracelet jonc fin doré porté au poignet',
  },
  {
    id: 'b-03',
    title: 'Bijou · nom à renseigner',
    ref: 'Réf. à renseigner',
    category: 'BIJOUX',
    image: '/images/maquette/weglow-bijoux-03.jpg',
    alt: 'Boucle d’oreille dorée pendante',
  },
  {
    id: 'b-04',
    title: 'Bijou · nom à renseigner',
    ref: 'Réf. à renseigner',
    category: 'BIJOUX',
    image: '/images/maquette/weglow-bijoux-04.jpg',
    alt: 'Bague en or ciselée portée à la main',
  },
  {
    id: 'b-05',
    title: 'Bijou · nom à renseigner',
    ref: 'Réf. à renseigner',
    category: 'BIJOUX',
    image: '/images/maquette/weglow-bijoux-05.jpg',
    alt: 'Collier délicat multirangs doré',
  },
  {
    id: 'b-06',
    title: 'Bijou · nom à renseigner',
    ref: 'Réf. à renseigner',
    category: 'BIJOUX',
    image: '/images/maquette/weglow-bijoux-06.jpg',
    alt: 'Bague sertie présentée sur fond sombre',
  },
  {
    id: 'b-07',
    title: 'Bijou · nom à renseigner',
    ref: 'Réf. à renseigner',
    category: 'BIJOUX',
    image: '/images/maquette/weglow-bijoux-07.jpg',
    alt: 'Collier ras-du-cou à maillons dorés',
  },
  {
    id: 'b-08',
    title: 'Bijou · nom à renseigner',
    ref: 'Réf. à renseigner',
    category: 'BIJOUX',
    image: '/images/maquette/weglow-bijoux-08.jpg',
    alt: 'Bague d’exception dorée',
  },
  {
    id: 'b-09',
    title: 'Bijou · nom à renseigner',
    ref: 'Réf. à renseigner',
    category: 'BIJOUX',
    image: '/images/maquette/weglow-bijou-fiche-00.jpg',
    alt: 'Parure d’exception bijou doré',
  },
];

export function JewelryPage() {
  return (
    <div className={styles.page}>
      {/* 1. Hero */}
      <section aria-labelledby="jewelry-hero-title" className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <figure className={styles.heroFigure}>
              <div className={styles.heroImage}>
                <Image
                  alt="Portrait élégant d’une femme portant des bijoux dorés"
                  className={styles.photo}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                  src="/images/maquette/weglow-bijoux-00.jpg"
                />
              </div>
              <figcaption className={styles.caption}>
                Photographies d'ambiance illustratives · Catalogue officiel à
                fournir.
              </figcaption>
            </figure>

            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Bijoux · Catalogue</p>
              <h1 className={styles.heroTitle} id="jewelry-hero-title">
                Des bijoux à découvrir,<br />
                à votre rythme.
              </h1>
              <p className={styles.heroText}>
                Regardez les pièces, leurs vues de détail et leurs
                informations. Pour connaître un tarif ou préparer une demande,
                contactez l’équipe avec la référence du bijou.
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
          </div>
        </div>
      </section>

      {/* 2. Notre Sélection pensée avec soin */}
      <section aria-labelledby="jewelry-intro-title" className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div>
              <p className={styles.eyebrow}>Catalogue bijoux</p>
              <h2 className={styles.sectionHeading} id="jewelry-intro-title">
                Une sélection pensée avec soin.
              </h2>
            </div>
            <div className={styles.introCopy}>
              <p>
                Chaque pièce est choisie pour ce qu’elle révèle. Noms,
                références et tarifs sont à confirmer avec l’équipe WeGlow avant
                toute commande. Aucune transaction n’est effectuée depuis cette
                maquette.
              </p>
              <Link className={styles.underlineLink} href="/a-propos">
                <span>À propos de WeGlow</span>
                <span aria-hidden="true"> ↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. La sélection bijoux Grid */}
      <section
        aria-labelledby="selection-title"
        className={styles.gridSection}
        id="selection"
      >
        <div className={styles.container}>
          <div className={styles.gridHeader}>
            <h2 className={styles.sectionHeading} id="selection-title">
              La sélection bijoux
            </h2>
            <span className={styles.statusTag}>RÉFÉRENCES À RENSEIGNER</span>
          </div>

          <div className={styles.productGrid}>
            {jewelryItems.map((item) => (
              <article className={styles.productCard} key={item.id}>
                <Link className={styles.imageLink} href="/bijoux/fiche">
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
                    <Link href="/bijoux/fiche">{item.title}</Link>
                  </h3>
                  <Link className={styles.cardActionLink} href="/bijoux/fiche">
                    <span>Voir la fiche bijou</span>
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

      {/* 4. Framed CTA */}
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
