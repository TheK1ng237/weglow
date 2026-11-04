import Image from 'next/image';
import Link from 'next/link';
import { WhatsAppIcon } from '@nextjs-template/ui';
import styles from './testimonials-page.module.css';

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  '',
);
const whatsappHref = whatsappPhone
  ? `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
      'Bonjour WeGlow Surprise, je souhaite des informations pour organiser un événement.',
    )}`
  : '/contact';

const testimonials = [
  {
    id: 1,
    quote:
      '« Une décoration féerique au-delà de toutes nos espérances. L’équipe a su écouter chaque détail de notre histoire pour transformer notre salle de mariage intimiste en un cocon chaleureux et inoubliable. Nos invités nous en parlent encore. »',
    author: 'Inès & Marc V.',
    occasion: 'Mariage intimiste · 45 invités',
    date: 'Septembre 2024',
    rating: '★★★★★',
  },
  {
    id: 2,
    quote:
      '« La surprise pour la demande en mariage était juste magique. Les pétales de roses, les lanternes, les lettres géantes et le saxophoniste live qui a joué notre chanson préférée au moment précis où je me suis agenouillé... Elle a dit oui avec les larmes aux yeux. Merci infiniment. »',
    author: 'Thomas L.',
    occasion: 'Demande en mariage romantique & Saxo live',
    date: 'Juillet 2024',
    rating: '★★★★★',
  },
  {
    id: 3,
    quote:
      '« Pour les 30 ans de ma sœur, nous avions commandé un décor avec arche de ballons bordeaux et dorés ainsi qu’un bouquet d’argent et une box personnalisée. Tout était d’une élégance rare et soigné jusqu’au moindre ruban. »',
    author: 'Sophie K.',
    occasion: 'Anniversaire 30 ans & Cadeau sur mesure',
    date: 'Juin 2024',
    rating: '★★★★★',
  },
  {
    id: 4,
    quote:
      '« Une baby shower tout en douceur et poésie. Les teintes pastel poudrées, l’espace photo et les petites attentions pour les convives étaient pensés avec une délicatesse incroyable. C’était le plus beau jour de ma grossesse. »',
    author: 'Camille & David',
    occasion: 'Baby shower & Scénographie douce',
    date: 'Mai 2024',
    rating: '★★★★★',
  },
  {
    id: 5,
    quote:
      '« Le concept de bouquet d’argent est exceptionnel. La présentation était si raffinée et créative que le geste est devenu un véritable moment d’émotion artistique. Un travail d’artisan passionné. »',
    author: 'Julien M.',
    occasion: 'Bouquet d’argent & Panier surprise',
    date: 'Avril 2024',
    rating: '★★★★★',
  },
  {
    id: 6,
    quote:
      '« Le saxophoniste partenaire de WeGlow Surprise a enflammé notre vin d’honneur avec une classe folle. Répertoire jazz lounge au début puis rythmes plus entraînants au coucher du soleil. Tout le monde a dansé. »',
    author: 'Sarah B.',
    occasion: 'Cocktail de réception · Saxophoniste live',
    date: 'Février 2024',
    rating: '★★★★★',
  },
];

export function TestimonialsPage() {
  return (
    <div className={styles.page}>
      {/* 1. Hero with Featured Image */}
      <section aria-labelledby="testimonials-hero-title" className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>Leurs mots, leurs souvenirs</p>
              <h1 className={styles.heroTitle} id="testimonials-hero-title">
                Chaque belle histoire<br />
                mérite d’être racontée.
              </h1>
              <p className={styles.heroText}>
                Retours authentiques et souvenirs partagés avec nos clients lors
                de leurs mariages, anniversaires, demandes en mariage et
                surprises personnalisées.
              </p>
              <div className={styles.heroActions}>
                <Link className={styles.bordeauxButton} href="/devis">
                  <span>Imaginer mon projet</span>
                  <span aria-hidden="true" className={styles.arrow}>
                    ↗
                  </span>
                </Link>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.imageWrapper}>
                <Image
                  alt="Couple célébrant une occasion importante autour d’une table décorée"
                  className={styles.heroPhoto}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 45vw"
                  src="/images/maquette/surprise-temoignages-00.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Testimonials List with Dividing lines */}
      <section aria-labelledby="reviews-title" className={styles.reviewsSection}>
        <div className={styles.container}>
          <h2 className="sr-only" id="reviews-title">
            Avis vérifiés de nos clients
          </h2>

          <div className={styles.reviewsList}>
            {testimonials.map((item) => (
              <article className={styles.reviewCard} key={item.id}>
                <div className={styles.ratingRow}>
                  <span aria-label="5 étoiles sur 5" className={styles.stars}>
                    {item.rating}
                  </span>
                  <span className={styles.date}>{item.date}</span>
                </div>

                <blockquote className={styles.quoteText}>{item.quote}</blockquote>

                <div className={styles.authorRow}>
                  <span className={styles.authorName}>{item.author}</span>
                  <span className={styles.authorSeparator}>·</span>
                  <span className={styles.occasionTag}>{item.occasion}</span>
                </div>
              </article>
            ))}
          </div>

          <p className={styles.disclaimer}>
            Tous les témoignages sont recueillis auprès de clients réels à la
            suite de leurs prestations avec l’accord des organisateurs.
          </p>
        </div>
      </section>

      {/* 3. Light Banner (#F6F3EE) */}
      <section className={styles.bannerSection}>
        <div className={styles.container}>
          <div className={styles.bannerCard}>
            <div className={styles.bannerCopy}>
              <h2 className={styles.bannerTitle}>
                Vous souhaitez imaginer un moment tout aussi magique ?
              </h2>
              <p className={styles.bannerText}>
                Confiez-nous votre projet, vos envies et vos contraintes. Notre
                équipe vous accompagne de A à Z pour créer un souvenir inoubliable.
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
                <span>Nous parler sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
