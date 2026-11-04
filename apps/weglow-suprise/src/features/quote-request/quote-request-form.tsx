'use client';

import { useState, useTransition, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { buildWhatsAppHref, WhatsAppIcon } from '@nextjs-template/ui';
import styles from './quote-request-form.module.css';

const serviceOptions = [
  'Anniversaire',
  'Mariage',
  'Mini-mariage',
  'Baby shower & Gender reveal',
  'Décoration romantique',
  'Panier surprise',
  'Bouquet d’argent',
  'Bouquet de roses',
  'Box romantique',
  'Cadeau personnalisé',
  'Prestation musicale (Saxophone)',
  'Prestation musicale (Guitare)',
  'Prestation musicale (Piano)',
  'Prestation musicale (Autre)',
  'Autre demande événementielle',
];

const paramToService: Record<string, string> = {
  'anniversaire': 'Anniversaire',
  'mariage': 'Mariage',
  'mini-mariage': 'Mini-mariage',
  'baby-shower': 'Baby shower & Gender reveal',
  'romantique': 'Décoration romantique',
  'panier-surprise': 'Panier surprise',
  'bouquet-argent': 'Bouquet d’argent',
  'bouquet-roses': 'Bouquet de roses',
  'box-romantique': 'Box romantique',
  'cadeau-personnalise': 'Cadeau personnalisé',
  'saxophoniste': 'Prestation musicale (Saxophone)',
  'guitariste': 'Prestation musicale (Guitare)',
  'pianiste': 'Prestation musicale (Piano)',
  'musique-saxophoniste': 'Prestation musicale (Saxophone)',
  'musique-guitariste': 'Prestation musicale (Guitare)',
  'musique-pianiste': 'Prestation musicale (Piano)',
  'musique': 'Prestation musicale (Saxophone)',
};

export function QuoteRequestForm() {
  const searchParams = useSearchParams();
  const prestationQuery = searchParams.get('prestation')?.toLowerCase() || '';
  const initialPrestation = paramToService[prestationQuery] || '';

  const [service, setService] = useState(initialPrestation);
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [whatsappMessage, setWhatsappMessage] = useState(
    'Bonjour WeGlow Surprise, je souhaite faire une demande de devis.',
  );

  const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
    /\D/g,
    '',
  );
  const whatsappHref = buildWhatsAppHref(whatsappPhone, whatsappMessage);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const generatedRef = `WS-${Math.floor(100000 + Math.random() * 900000)}`;
    const formData = new FormData(event.currentTarget);
    const messageLines = [
      'Bonjour WeGlow Surprise, je souhaite faire une demande de devis.',
      `Référence : ${generatedRef}`,
      `Nom : ${formData.get('name')}`,
      `Téléphone : ${formData.get('phone')}`,
      `WhatsApp : ${formData.get('whatsapp') || 'identique au téléphone'}`,
      `E-mail : ${formData.get('email')}`,
      `Prestation : ${formData.get('service')}`,
      formData.get('eventDate') && `Date souhaitée : ${formData.get('eventDate')}`,
      formData.get('location') && `Lieu : ${formData.get('location')}`,
      formData.get('guestCount') &&
        `Nombre d’invités : ${formData.get('guestCount')}`,
      formData.get('budget') && `Budget indicatif : ${formData.get('budget')}`,
      `Description : ${formData.get('description')}`,
    ].filter(Boolean);
    setWhatsappMessage(messageLines.join('\n'));
    setRefNumber(generatedRef);

    startTransition(() => {
      // Simulation of secure dispatch
      setTimeout(() => {
        setSubmitted(true);
      }, 400);
    });
  }

  if (submitted) {
    return (
      <div aria-live="polite" className={styles.successCard}>
        <div className={styles.successBadge}>✓ Demande transmise avec succès</div>
        <h2 className={styles.successTitle}>Merci pour votre confiance.</h2>
        <p className={styles.successText}>
          Votre demande de devis a bien été enregistrée sous la référence{' '}
          <strong className={styles.refHighlight}>{refNumber}</strong>. Notre
          équipe de scénographes et créateurs va étudier votre projet avec le
          plus grand soin.
        </p>
        <div className={styles.successNotice}>
          <p>
            Nous vous recontacterons par téléphone, WhatsApp ou e-mail sous 24 à
            48 heures ouvrées pour affiner les détails et vous soumettre une
            proposition personnalisée.
          </p>
        </div>
        <div className={styles.successActions}>
          <a
            className={styles.whatsAppButtonBordeaux}
            href={whatsappHref}
            rel="noreferrer"
            target="_blank"
          >
            <WhatsAppIcon className={styles.btnIcon} />
            <span>Accélérer sur WhatsApp ({refNumber})</span>
          </a>
          <button
            className={styles.resetButton}
            onClick={() => setSubmitted(false)}
            type="button"
          >
            Remplir une autre demande
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* 1. Vos coordonnées */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Vos coordonnées</legend>
        <div className={styles.fields}>
          <label className={styles.fieldLabel}>
            Nom et prénom <span aria-hidden="true">*</span>
            <input
              autoComplete="name"
              className={styles.input}
              name="name"
              placeholder="Ex. Sarah Dupont"
              required
            />
          </label>

          <label className={styles.fieldLabel}>
            Téléphone <span aria-hidden="true">*</span>
            <input
              autoComplete="tel"
              className={styles.input}
              name="phone"
              placeholder="Ex. 06 12 34 56 78"
              required
              type="tel"
            />
          </label>

          <label className={styles.fieldLabel}>
            Numéro WhatsApp (si différent)
            <input
              autoComplete="tel"
              className={styles.input}
              name="whatsapp"
              placeholder="Ex. +33 6 12 34 56 78"
              type="tel"
            />
          </label>

          <label className={styles.fieldLabel}>
            Adresse e-mail <span aria-hidden="true">*</span>
            <input
              autoComplete="email"
              className={styles.input}
              name="email"
              placeholder="Ex. sarah.dupont@email.com"
              required
              type="email"
            />
          </label>
        </div>
      </fieldset>

      {/* 2. Votre projet & prestation */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Votre événement & vos envies</legend>
        <div className={styles.fields}>
          <label className={`${styles.fieldLabel} ${styles.fullWidth}`}>
            Type de prestation <span aria-hidden="true">*</span>
            <select
              className={styles.select}
              name="service"
              onChange={(e) => setService(e.target.value)}
              required
              value={service}
            >
              <option disabled value="">
                Sélectionnez une prestation
              </option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.fieldLabel}>
            Date souhaitée
            <input className={styles.input} name="eventDate" type="date" />
          </label>

          <label className={styles.fieldLabel}>
            Lieu de l’événement (ville ou salle)
            <input
              autoComplete="address-level2"
              className={styles.input}
              name="location"
              placeholder="Ex. Paris, salle privée, domicile…"
            />
          </label>

          <label className={styles.fieldLabel}>
            Nombre d’invités estimé
            <input
              className={styles.input}
              min="1"
              name="guestCount"
              placeholder="Ex. 30"
              type="number"
            />
          </label>

          <label className={styles.fieldLabel}>
            Budget indicatif (facultatif)
            <input
              className={styles.input}
              name="budget"
              placeholder="Ex. 500 - 1500 € ou À définir"
            />
          </label>

          <label className={`${styles.fieldLabel} ${styles.fullWidth}`}>
            Description de votre projet <span aria-hidden="true">*</span>
            <textarea
              className={styles.textarea}
              name="description"
              placeholder="Racontez-nous l’occasion, l’ambiance recherchée, les couleurs, le message ou toute attention particulière que vous imaginez…"
              required
              rows={5}
            />
          </label>

          <div className={`${styles.fieldLabel} ${styles.fullWidth}`}>
            <span>Photos d’inspiration</span>
            <p className={styles.fileHint}>
              Vous pouvez nous transmettre vos photos et captures d’écran
              directement sur WhatsApp après validation de ce formulaire.
            </p>
          </div>
        </div>
      </fieldset>

      <div className={styles.submitSection}>
        <p className={styles.disclaimerLegal}>
          Les informations recueillies sont destinées uniquement à l’étude de
          votre projet par WeGlow Surprise. Elles ne sont ni cédées ni
          commercialisées.
        </p>

        <button
          className={styles.submitButton}
          disabled={isPending}
          type="submit"
        >
          <span>{isPending ? 'Transmission en cours…' : 'Envoyer ma demande de devis'}</span>
          <span aria-hidden="true" className={styles.submitArrow}>
            ↗
          </span>
        </button>
      </div>
    </form>
  );
}
