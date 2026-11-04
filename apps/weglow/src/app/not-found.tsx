import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>ERREUR 404</p>
        <h1 className={styles.title}>Cette page est introuvable.</h1>
        <p className={styles.text}>
          Le lien est peut-être ancien ou l’adresse comporte une erreur. Retrouvez
          la boutique depuis l’accueil ou découvrez le catalogue bijoux.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primaryButton} href="/">
            <span>Retour à l’accueil</span>
            <span aria-hidden="true"> ↗</span>
          </Link>
          <Link className={styles.outlineButton} href="/bijoux">
            <span>Voir les bijoux</span>
            <span aria-hidden="true"> ↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
