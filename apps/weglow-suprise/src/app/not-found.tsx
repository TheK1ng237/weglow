import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>ERREUR 404 · PAGE INTROUVABLE</p>
        <h1 className={styles.title}>Cette surprise reste à imaginer.</h1>
        <p className={styles.text}>
          La page que vous recherchez n’existe pas ou a été déplacée. Retrouvez
          l’univers WeGlow Surprise depuis l’accueil ou faites-nous part de
          votre projet.
        </p>
        <div className={styles.actions}>
          <Link className={styles.bordeauxButton} href="/">
            <span>Retour à l’accueil</span>
            <span aria-hidden="true" className={styles.arrow}>
              ↗
            </span>
          </Link>
          <Link className={styles.outlineButton} href="/devis">
            <span>Demander un devis</span>
            <span aria-hidden="true" className={styles.arrow}>
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
