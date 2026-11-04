import styles from './section-intro.module.css';

export interface SectionIntroProps {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionIntro({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionIntroProps) {
  return (
    <div className={`${styles.intro} ${styles[align]}`}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title} id={id}>
        {title}
      </h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  );
}
