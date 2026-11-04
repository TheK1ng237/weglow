import Image from 'next/image';
import { WhatsAppIcon } from '@nextjs-template/ui';
import styles from './about-page.module.css';

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  '',
);
const whatsappHref = whatsappPhone
  ? `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
      'Bonjour WeGlow Surprise, je souhaite en savoir plus sur votre démarche.',
    )}`
  : '/contact';

const principles = [
  {
    number: '01',
    title: 'Sur mesure & écoute',
    description:
      'Chaque demande est unique. Nous partons de l’occasion et de ce que vous souhaitez exprimer pour construire une proposition adaptée.',
  },
  {
    number: '02',
    title: 'Exigence des détails',
    description:
      'Des compositions florales aux décors de salle, de la sélection musicale aux emballages, chaque élément est soigné.',
  },
  {
    number: '03',
    title: 'Transparence & accompagnement',
    description:
      'Les devis, disponibilités et modalités de réalisation sont expliqués clairement avant toute validation.',
  },
];

export function AboutPage() {
  return (
    <div className={styles.page}>
      {/* 1. Hero (Dark) */}
      <section aria-labelledby="about-hero-title" className={styles.hero}>
        <Image
          alt="L'artisanat et l'émotion des créations WeGlow Surprise"
          className={styles.heroImage}
          fill
          priority
          sizes="100vw"
          src="/images/maquette/surprise-a-propos-00.jpg"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>À propos de WeGlow Surprise</p>
            <h1 className={styles.heroTitle} id="about-hero-title">
              Donner du sens<br />
              à chaque attention.
            </h1>
            <p className={styles.heroText}>
              WeGlow Surprise imagine des cadeaux, accompagne des célébrations
              et propose des moments musicaux. Le point de départ reste votre
              histoire et l’émotion que vous souhaitez partager.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Notre Intention (Bordeaux #661416) */}
      <section aria-labelledby="history-title" className={styles.intentSection}>
        <div className={styles.container}>
          <div className={styles.intentContent}>
            <p className={styles.intentEyebrow}>Notre intention</p>
            <h2 className={styles.intentTitle} id="history-title">
              Une marque, quatre ans d’histoire.
            </h2>
            <p className={styles.intentText}>
              WeGlow compte quatre ans d’activité. D’abord spécialisée dans les
              bijoux et accessoires, la marque a développé WeGlow Surprise, son
              univers dédié aux cadeaux, surprises, à la décoration, à
              l’événementiel et aux prestations musicales.
            </p>
          </div>
        </div>
      </section>

      {/* 3. L'Équipe (Dark) */}
      <section aria-labelledby="team-title" className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.teamGrid}>
            <div className={styles.teamCopy}>
              <p className={styles.eyebrow}>L’équipe</p>
              <h2 className={styles.sectionHeading} id="team-title">
                Des attentions pensées avec soin.
              </h2>
              <p className={styles.teamText}>
                WeGlow Surprise accompagne vos envies de cadeaux, vos événements
                et vos moments en musique. L’occasion, la personne et le budget
                guident l’échange ; les possibilités sont précisées avec
                l’équipe.
              </p>
            </div>

            <figure className={styles.teamFigure}>
              <div className={styles.teamImageWrapper}>
                <Image
                  alt="Portrait chaleureux d’une collaboratrice de WeGlow Surprise"
                  className={styles.photo}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  src="/images/maquette/surprise-a-propos-00.jpg"
                />
              </div>
              <figcaption className={styles.caption}>
                Photographies d'ambiance générées · Équipe réelle à présenter.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 4. Nos Principes */}
      <section aria-labelledby="principles-title" className={styles.principlesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading} id="principles-title">
            Nos principes
          </h2>
          <div className={styles.principlesGrid}>
            {principles.map((item) => (
              <div className={styles.principleCard} key={item.number}>
                <span className={styles.principleNumber}>{item.number}</span>
                <h3 className={styles.principleTitle}>{item.title}</h3>
                <p className={styles.principleDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Light Banner (#F6F3EE) */}
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
