import Image from 'next/image';
import { buildWhatsAppHref, WhatsAppIcon } from '@nextjs-template/ui';
import styles from './about-page.module.css';

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  '',
);
const whatsappHref = buildWhatsAppHref(whatsappPhone, 'Bonjour WeGlow, je souhaite en savoir plus sur votre boutique et vos collections.',);

const commitments = [
  {
    number: '01',
    title: 'Conseil personnalisé',
    description:
      'Prendre le temps d’écouter, d’associer les matières et de trouver la nuance qui correspond à votre style ou à l’occasion.',
  },
  {
    number: '02',
    title: 'Sélection soignée',
    description:
      'Des pièces dorées, intemporelles ou plus affirmées, choisies avec exigence pour leur allure et leur finesse.',
  },
  {
    number: '03',
    title: 'Transparence & écoute',
    description:
      'Chaque détail, matière et disponibilité est partagé en direct par l’équipe, pour un choix en toute confiance.',
  },
];

export function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section aria-labelledby="about-title" className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>À propos de la boutique</p>
              <h1 className={styles.heroTitle} id="about-title">
                Le choix du détail,<br />
                l’envie de vous<br />
                accompagner.
              </h1>
              <p className={styles.heroText}>
                WeGlow est une boutique de bijoux et accessoires. Découvrez
                l’histoire de la boutique et l’attention portée à votre choix.
              </p>
            </div>
            <figure className={styles.heroFigure}>
              <div className={styles.heroImage}>
                <Image
                  alt="Femme découvrant avec attention un bijou précieux"
                  className={styles.photo}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                  src="/images/maquette/weglow-a-propos-00.jpg"
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

      {/* Story */}
      <section aria-labelledby="story-title" className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div>
              <h2 className={styles.sectionHeading} id="story-title">
                Notre histoire
              </h2>
            </div>
            <div className={styles.storyCopy}>
              <p>
                Depuis quatre ans, WeGlow propose des bijoux et accessoires pour
                exprimer son style et sa personnalité. La boutique vous
                accompagne dans le choix des pièces qui vous ressemblent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vous aider à choisir */}
      <section aria-labelledby="help-title" className={styles.commitSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading} id="help-title">
            Vous aider à choisir
          </h2>
          <div className={styles.commitGrid}>
            {commitments.map((item) => (
              <div className={styles.commitCard} key={item.number}>
                <span className={styles.commitNumber}>{item.number}</span>
                <h3 className={styles.commitTitle}>{item.title}</h3>
                <p className={styles.commitDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framed CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaCopy}>
              <h2 className={styles.ctaTitle}>Une question, un conseil ?</h2>
              <p className={styles.ctaText}>
                Contactez notre équipe pour vérifier la disponibilité d’une
                pièce ou obtenir des conseils personnalisés.
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
                <span>Nous écrire sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
