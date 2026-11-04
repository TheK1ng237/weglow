'use client';

import { useState, useTransition, type FormEvent } from 'react';
import Image from 'next/image';
import { buildWhatsAppHref, WhatsAppIcon } from '@nextjs-template/ui';
import styles from './contact-page.module.css';

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  '',
);
const whatsappHref = buildWhatsAppHref(whatsappPhone, 'Bonjour WeGlow Surprise, je souhaite des informations sur vos prestations et créations.',);

export function ContactPage() {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    startTransition(() => {
      setTimeout(() => {
        setSubmitted(true);
      }, 400);
    });
  }

  return (
    <div className={styles.wrapper}>
      {/* 1. Hero */}
      <section aria-labelledby="contact-title" className={styles.hero}>
        <Image
          alt="Ambiance féerique et festive de contact WeGlow Surprise"
          className={styles.heroImage}
          fill
          priority
          sizes="100vw"
          src="/images/maquette/surprise-contact-00.jpg"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Contact & échanges</p>
            <h1 className={styles.heroTitle} id="contact-title">
              Commençons<br />
              par votre idée.
            </h1>
            <p className={styles.heroText}>
              Un cadeau, une célébration intime ou une scénographie grandiose :
              notre équipe de scénographes et créateurs est à votre écoute pour
              donner vie à vos envies.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main 2-Column Section */}
      <section aria-labelledby="contact-details-title" className={styles.page}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Left Column: Coordinates & Map */}
            <div className={styles.infoCol}>
              <div className={styles.infoCard}>
                <p className={styles.eyebrow}>Coordonnées officielles</p>
                <h2 className={styles.infoTitle} id="contact-details-title">
                  Nous joindre & nous rencontrer.
                </h2>
                <p className={styles.infoText}>
                  Notre équipe vous accueille pour imaginer vos projets sur
                  rendez-vous ou échanger en direct sur WhatsApp.
                </p>

                <div className={styles.coordList}>
                  <div className={styles.coordItem}>
                    <span className={styles.coordLabel}>WhatsApp direct</span>
                    <a
                      className={styles.whatsAppLink}
                      href={whatsappHref}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <WhatsAppIcon className={styles.btnIcon} />
                      <span>
                        {whatsappPhone
                          ? `+${whatsappPhone}`
                          : 'Numéro WhatsApp à renseigner'}
                      </span>
                    </a>
                  </div>

                  <div className={styles.coordItem}>
                    <span className={styles.coordLabel}>Téléphone atelier</span>
                    <a className={styles.coordValue} href="tel:+2250700000000">
                      +225 07 00 00 00 00
                    </a>
                  </div>

                  <div className={styles.coordItem}>
                    <span className={styles.coordLabel}>Adresse électronique</span>
                    <a
                      className={styles.coordValue}
                      href="mailto:contact@weglow-surprise.com"
                    >
                      contact@weglow-surprise.com
                    </a>
                  </div>

                  <div className={styles.coordItem}>
                    <span className={styles.coordLabel}>Horaires de réponse</span>
                    <p className={styles.coordText}>
                      Du lundi au samedi : 09h00 – 19h30<br />
                      Dimanche : sur rendez-vous pour les événements
                    </p>
                  </div>

                  <div className={styles.coordItem}>
                    <span className={styles.coordLabel}>Atelier de création</span>
                    <p className={styles.coordText}>
                      Cocody Angré, 8e Tranche<br />
                      Abidjan, Côte d’Ivoire
                    </p>
                  </div>
                </div>

                {/* Map Preview */}
                <div className={styles.mapContainer}>
                  <iframe
                    allowFullScreen
                    className={styles.mapIframe}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15888.75128036214!2d-3.987654!3d5.389123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1935000000000%3A0x0!2sCocody%20Angre!5e0!3m2!1sfr!2sci!4v1700000000000!5m2!1sfr!2sci"
                    title="Localisation de l’atelier WeGlow Surprise à Abidjan"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Message Form */}
            <div className={styles.formCol}>
              <div className={styles.formCard}>
                <p className={styles.eyebrow}>Formulaire direct</p>
                <h2 className={styles.formTitle}>Envoyez-nous un message.</h2>
                <p className={styles.formSubtitle}>
                  Une question rapide ou une demande d’information générale ?
                  Remplissez ce formulaire et nous vous répondons rapidement.
                </p>

                {submitted ? (
                  <div aria-live="polite" className={styles.successBox}>
                    <div className={styles.successBadge}>✓ Message envoyé</div>
                    <h3 className={styles.successHeading}>
                      Merci pour votre message.
                    </h3>
                    <p className={styles.successDesc}>
                      Nous avons bien reçu votre demande et vous répondrons dans
                      les plus brefs délais.
                    </p>
                    <button
                      className={styles.resetBtn}
                      onClick={() => setSubmitted(false)}
                      type="button"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.label}>
                      Nom et prénom <span aria-hidden="true">*</span>
                      <input
                        autoComplete="name"
                        className={styles.input}
                        name="name"
                        placeholder="Ex. Thomas Dubois"
                        required
                      />
                    </label>

                    <div className={styles.row}>
                      <label className={styles.label}>
                        Téléphone / WhatsApp <span aria-hidden="true">*</span>
                        <input
                          autoComplete="tel"
                          className={styles.input}
                          name="phone"
                          placeholder="Ex. 06 12 34 56 78"
                          required
                          type="tel"
                        />
                      </label>

                      <label className={styles.label}>
                        E-mail <span aria-hidden="true">*</span>
                        <input
                          autoComplete="email"
                          className={styles.input}
                          name="email"
                          placeholder="Ex. thomas@email.com"
                          required
                          type="email"
                        />
                      </label>
                    </div>

                    <label className={styles.label}>
                      Sujet de votre demande
                      <select
                        className={styles.select}
                        defaultValue="cadeau"
                        name="subject"
                      >
                        <option value="cadeau">Cadeaux personnalisés & paniers</option>
                        <option value="evenement">Décoration événementielle & mariage</option>
                        <option value="musique">Prestations musicales live</option>
                        <option value="autre">Autre renseignement</option>
                      </select>
                    </label>

                    <label className={styles.label}>
                      Votre message <span aria-hidden="true">*</span>
                      <textarea
                        className={styles.textarea}
                        name="message"
                        placeholder="Partagez-nous votre demande, vos questions ou vos envies…"
                        required
                        rows={5}
                      />
                    </label>

                    <button
                      className={styles.submitBtn}
                      disabled={isPending}
                      type="submit"
                    >
                      <span>{isPending ? 'Envoi en cours…' : 'Envoyer mon message'}</span>
                      <span aria-hidden="true" className={styles.arrow}>
                        ↗
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Light Banner (#F6F3EE) */}
      <section className={styles.bannerSection}>
        <div className={styles.container}>
          <div className={styles.bannerCard}>
            <div className={styles.bannerCopy}>
              <h2 className={styles.bannerTitle}>
                Besoin d’une réponse immédiate ?
              </h2>
              <p className={styles.bannerText}>
                Notre conseiller événementiel est disponible sur WhatsApp pour
                répondre à vos questions en direct.
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
                <span>Discuter sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
