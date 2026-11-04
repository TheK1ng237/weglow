'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { buildWhatsAppHref, WhatsAppIcon } from '@nextjs-template/ui';
import styles from './order-information-page.module.css';

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  '',
);
const whatsappHref = buildWhatsAppHref(whatsappPhone, 'Bonjour WeGlow, je souhaite échanger sur une pièce pour commander ou obtenir des informations.',);

export function OrderInformationPage() {
  const searchParams = useSearchParams();
  const prefilledRef = searchParams.get('ref') || 'Référence conservée depuis la fiche';

  const [formData, setFormData] = useState({
    productRef: prefilledRef,
    fullName: '',
    contact: '',
    message: '',
    consent: false,
  });

  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.contact.trim()) {
      setError(
        'Erreur : un contact valide (nom/prénom et téléphone ou email) est nécessaire pour vous répondre. Les autres informations saisies sont conservées.',
      );
      return;
    }
    setError(null);
    setIsSuccess(true);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <span className={styles.tag}>COMMANDE / INFORMATIONS</span>
          <h1 className={styles.title}>
            Parlons de la pièce qui vous plaît.
          </h1>
          <p className={styles.lead}>
            Envoyez une demande d’informations ou indiquez votre souhait de
            commander. L’équipe vous recontactera pour préciser les détails. Il
            ne s’agit pas d’un paiement en ligne.
          </p>
        </header>

        {/* Content Layout */}
        <div className={styles.layout}>
          {/* Left Column */}
          <aside className={styles.leftCol}>
            <h2 className={styles.leftTitle}>
              Une demande, puis un échange.
            </h2>
            <p className={styles.leftText}>
              Indiquez la référence du bijou ou de l’accessoire et vos questions.
              L’envoi du formulaire ne confirme ni commande ni disponibilité.
            </p>
            <p className={styles.leftNotice}>
              Modalités de paiement et livraison : à confirmer avec l’équipe.
            </p>

            <div className={styles.whatsAppBox}>
              <a
                className={styles.whatsAppButton}
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
              >
                <WhatsAppIcon className={styles.btnIcon} />
                <span>Échanger sur WhatsApp</span>
              </a>
              <p className={styles.whatsAppNotice}>
                Vous préférez WhatsApp ? Le numéro officiel sera renseigné ici.
              </p>
            </div>
          </aside>

          {/* Right Column: Form */}
          <div className={styles.formCol}>
            {isSuccess ? (
              /* WG-E3: RÉCEPTION */
              <div className={styles.successCard}>
                <div className={styles.successIcon}>✓</div>
                <h2 className={styles.successTitle}>Demande reçue</h2>
                <p className={styles.successText}>
                  Votre demande a bien été reçue. L’équipe vous recontacte pour
                  préciser le produit, le tarif et les modalités. Il ne s’agit
                  pas d’une commande validée.
                </p>
                <div className={styles.successAction}>
                  <Link className={styles.darkButton} href="/">
                    <span>Retour à l’accueil</span>
                    <span aria-hidden="true"> ↗</span>
                  </Link>
                </div>
              </div>
            ) : (
              /* WG-E1 / WG-E2: FORMULAIRE */
              <form className={styles.form} onSubmit={handleSubmit}>
                <p className={styles.requiredNotice}>
                  * Champs nécessaires pour vous répondre.
                </p>

                {error ? (
                  /* WG-E2: ERREUR */
                  <div aria-live="polite" className={styles.errorAlert}>
                    <span className={styles.alertIcon}>ⓘ</span>
                    <span>{error}</span>
                  </div>
                ) : null}

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="productRef">
                    Référence produit
                  </label>
                  <input
                    className={styles.input}
                    id="productRef"
                    name="productRef"
                    onChange={(e) =>
                      setFormData({ ...formData, productRef: e.target.value })
                    }
                    type="text"
                    value={formData.productRef}
                  />
                  <span className={styles.fieldHint}>
                    À renseigner si la demande concerne une pièce.
                  </span>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="fullName">
                    Nom / prénom *
                  </label>
                  <input
                    className={`${styles.input} ${error && !formData.fullName.trim() ? styles.inputError : ''}`}
                    id="fullName"
                    name="fullName"
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="À renseigner"
                    required
                    type="text"
                    value={formData.fullName}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="contact">
                    Téléphone / WhatsApp ou email *
                  </label>
                  <input
                    className={`${styles.input} ${error && !formData.contact.trim() ? styles.inputError : ''}`}
                    id="contact"
                    name="contact"
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                    placeholder="À renseigner"
                    required
                    type="text"
                    value={formData.contact}
                  />
                  <span className={styles.fieldHint}>
                    Un seul moyen de contact valide suffit.
                  </span>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">
                    Votre message *
                  </label>
                  <textarea
                    className={styles.textarea}
                    id="message"
                    name="message"
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Informations souhaitées ou souhait de commander..."
                    required
                    rows={4}
                    value={formData.message}
                  />
                </div>

                <div className={styles.checkboxField}>
                  <input
                    checked={formData.consent}
                    className={styles.checkbox}
                    id="consent"
                    onChange={(e) =>
                      setFormData({ ...formData, consent: e.target.checked })
                    }
                    type="checkbox"
                  />
                  <label className={styles.checkboxLabel} htmlFor="consent">
                    Me recontacter
                  </label>
                </div>

                <p className={styles.consentText}>
                  J’accepte l’utilisation de mes coordonnées pour répondre à
                  cette demande. Informations de confidentialité à rédiger.
                </p>

                <p className={styles.antiSpamText}>
                  Protection anti-spam discrète · aucun défi affiché au repos.
                </p>

                <button className={styles.submitButton} type="submit">
                  <span>Envoyer ma demande</span>
                  <span aria-hidden="true"> ↗</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
