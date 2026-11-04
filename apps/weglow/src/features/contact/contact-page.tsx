'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WhatsAppIcon } from '@nextjs-template/ui';
import styles from './contact-page.module.css';

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  '',
);
const whatsappHref = whatsappPhone
  ? `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
      'Bonjour WeGlow, je souhaite vous contacter pour un conseil ou une question sur la boutique.',
    )}`
  : '#';

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '',
    message: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.contact.trim()) {
      setError('Veuillez renseigner votre nom et un contact (email ou téléphone).');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      {/* 1. Hero */}
      <section aria-labelledby="contact-hero-title" className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Contact · Bijoux & accessoires</p>
              <h1 className={styles.heroTitle} id="contact-hero-title">
                Un conseil,<br />
                une question ?
              </h1>
              <p className={styles.heroText}>
                Contactez la boutique pour parler bijoux et accessoires.
                Retrouvez ici les coordonnées officielles et un formulaire simple
                pour nous écrire.
              </p>
              <div className={styles.heroActions}>
                <a
                  className={styles.whatsAppButtonFilled}
                  href={whatsappHref}
                  rel="noreferrer"
                  target={whatsappPhone ? '_blank' : undefined}
                >
                  <WhatsAppIcon className={styles.btnIcon} />
                  <span>Nous écrire sur WhatsApp</span>
                </a>
              </div>
            </div>

            <figure className={styles.heroFigure}>
              <div className={styles.heroImage}>
                <Image
                  alt="Collier et bagues dorées présentés sur étoffe sombre"
                  className={styles.photo}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                  src="/images/maquette/weglow-contact-00.jpg"
                />
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* 2. Coordonnées & Formulaire (Light canvas) */}
      <section
        aria-labelledby="coords-form-title"
        className={styles.detailsSection}
      >
        <div className={styles.container}>
          <p className={styles.sectionEyebrow} id="coords-form-title">
            Coordonnées & formulaire
          </p>

          <div className={styles.detailsGrid}>
            {/* Left Column: Coordonnées */}
            <div className={styles.coordsCol}>
              <h2 className={styles.sectionTitle}>Échangeons directement</h2>

              <dl className={styles.coordsList}>
                <div className={styles.coordItem}>
                  <dt className={styles.coordLabel}>Téléphone / WhatsApp</dt>
                  <dd className={styles.coordValue}>Numéro officiel à fournir</dd>
                </div>

                <div className={styles.coordItem}>
                  <dt className={styles.coordLabel}>Email</dt>
                  <dd className={styles.coordValue}>Adresse officielle à fournir</dd>
                </div>

                <div className={styles.coordItem}>
                  <dt className={styles.coordLabel}>Adresse</dt>
                  <dd className={styles.coordValue}>À renseigner</dd>
                </div>

                <div className={styles.coordItem}>
                  <dt className={styles.coordLabel}>Horaires</dt>
                  <dd className={styles.coordValue}>À confirmer</dd>
                </div>

                <div className={styles.coordItem}>
                  <dt className={styles.coordLabel}>Réseaux</dt>
                  <dd className={styles.coordValue}>Profils officiels à fournir</dd>
                </div>
              </dl>
            </div>

            {/* Right Column: Formulaire */}
            <div className={styles.formCol}>
              <h2 className={styles.sectionTitle}>Votre message</h2>

              {submitted ? (
                <div className={styles.successBox}>
                  <h3 className={styles.successTitle}>Message envoyé</h3>
                  <p className={styles.successText}>
                    Merci ! Votre message a bien été pris en compte. L’équipe
                    WeGlow vous recontactera dès que possible.
                  </p>
                  <Link className={styles.darkButton} href="/">
                    <span>Retour à l’accueil</span>
                    <span aria-hidden="true"> ↗</span>
                  </Link>
                </div>
              ) : (
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <p className={styles.requiredNotice}>
                    * Champs nécessaires à la réponse.
                  </p>

                  {error ? (
                    <div className={styles.errorAlert}>{error}</div>
                  ) : null}

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">
                      Nom / prénom *
                    </label>
                    <input
                      className={styles.input}
                      id="name"
                      name="name"
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
                    <label className={styles.label} htmlFor="contactInput">
                      Téléphone ou email *
                    </label>
                    <input
                      className={styles.input}
                      id="contactInput"
                      name="contactInput"
                      onChange={(e) =>
                        setFormData({ ...formData, contact: e.target.value })
                      }
                      placeholder="À renseigner"
                      required
                      type="text"
                      value={formData.contact}
                    />
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="msg">
                      Message *
                    </label>
                    <textarea
                      className={styles.textarea}
                      id="msg"
                      name="msg"
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Comment pouvons-nous vous aider ?"
                      required
                      rows={5}
                      value={formData.message}
                    />
                  </div>

                  <p className={styles.disclaimerText}>
                    * Champs obligatoires dans le futur formulaire. Aucun
                    renseignement n’est collecté par cette maquette.
                  </p>

                  <button className={styles.submitButton} type="submit">
                    <span>Envoyer mon message</span>
                    <span aria-hidden="true"> ↗</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
