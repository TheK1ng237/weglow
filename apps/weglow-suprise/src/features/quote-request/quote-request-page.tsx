import Image from 'next/image';
import Link from 'next/link';
import { buildWhatsAppHref, WhatsAppIcon } from '@nextjs-template/ui';
import { QuoteRequestForm } from './quote-request-form';
import styles from './quote-request-page.module.css';

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  '',
);
const whatsappHref = buildWhatsAppHref(whatsappPhone, 'Bonjour WeGlow Surprise, je souhaite faire une demande de devis directement sur WhatsApp.',);

export function QuoteRequestPage() {
  return (
    <div className={styles.wrapper}>
      {/* 1. Hero with Background Image */}
      <section aria-labelledby="quote-title" className={styles.hero}>
        <Image
          alt="Ambiance féerique pour une demande de devis WeGlow Surprise"
          className={styles.heroImage}
          fill
          priority
          sizes="100vw"
          src="/images/maquette/surprise-devis-00.jpg"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Devis & réservation</p>
            <h1 className={styles.heroTitle} id="quote-title">
              Votre projet commence<br />
              par un échange.
            </h1>
            <p className={styles.heroText}>
              Partagez les informations utiles sur votre événement. Nous vous
              recontacterons pour préciser les possibilités et les modalités.
              L’envoi de cette demande ne confirme pas une réservation ferme.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Form Grid */}
      <section aria-labelledby="quote-form-heading" className={styles.page}>
        <div className={styles.container}>
          <div className={styles.formLayout}>
            {/* Sidebar Guidance */}
            <aside className={styles.guidance}>
              <div className={styles.guidanceCard}>
                <p className={styles.eyebrow}>À votre écoute</p>
                <h2 className={styles.guidanceTitle} id="quote-form-heading">
                  Chaque détail peut être précisé ensemble.
                </h2>
                <p className={styles.guidanceText}>
                  Renseignez ce que vous connaissez déjà. Le budget et vos
                  inspirations restent facultatifs ; les détails manquants
                  seront affinés lors de notre échange.
                </p>

                <div className={styles.disclaimerBox}>
                  <p className={styles.disclaimerText}>
                    Tarifs, disponibilités et modalités à confirmer. Aucune date
                    n’est garantie par le simple envoi de ce formulaire.
                  </p>
                </div>

                <div className={styles.alternativeBox}>
                  <p className={styles.altHeading}>Alternative directe</p>
                  <p className={styles.altText}>
                    Vous préférez échanger immédiatement ou envoyer des photos
                    d’inspiration ?
                  </p>
                  <a
                    className={styles.whatsAppButtonOutline}
                    href={whatsappHref}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <WhatsAppIcon className={styles.btnIcon} />
                    <span>Écrire sur WhatsApp</span>
                  </a>
                  <Link className={styles.contactLink} href="/contact">
                    <span>Accéder aux coordonnées complètes</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </aside>

            {/* Form Column */}
            <main className={styles.formColumn}>
              <div className={styles.formHeaderRow}>
                <p className={styles.formNote}>* Champs requis pour l’étude de votre demande.</p>
              </div>
              <QuoteRequestForm />
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
