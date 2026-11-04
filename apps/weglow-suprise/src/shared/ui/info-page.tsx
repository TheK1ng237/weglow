import Image from 'next/image';
import { ActionLink } from '@nextjs-template/ui';
import styles from './info-page.module.css';

export interface InfoPageProps {
  eyebrow: string;
  title: string;
  description: string;
  details: string[];
  image?: {
    src: string;
    alt: string;
  };
  gallery?: {
    src: string;
    alt: string;
  }[];
  action?: {
    label: string;
    href: string;
  };
}

export function InfoPage({
  eyebrow,
  title,
  description,
  details,
  image,
  gallery,
  action = { label: 'Demander un devis', href: '/devis' },
}: InfoPageProps) {
  return (
    <article className={styles.page}>
      <header className={styles.intro}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1>{title}</h1>
        <p className={styles.description}>{description}</p>
      </header>
      <div className={styles.content}>
        {image ? (
          <div className={styles.image}>
            <Image
              alt={image.alt}
              fill
              priority
              sizes="(max-width: 760px) 100vw, 48vw"
              src={image.src}
            />
          </div>
        ) : null}
        <div className={styles.details}>
          {details.map((detail, index) => (
            <p className={styles.detail} key={detail}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {detail}
            </p>
          ))}
          <div className={styles.action}>
            <ActionLink href={action.href}>{action.label}</ActionLink>
          </div>
        </div>
      </div>
      {gallery?.length ? (
        <div aria-label="Sélection visuelle" className={styles.gallery}>
          {gallery.map((item) => (
            <div className={styles.galleryImage} key={item.src}>
              <Image
                alt={item.alt}
                fill
                sizes="(max-width: 760px) 100vw, 33vw"
                src={item.src}
              />
            </div>
          ))}
        </div>
      ) : null}
    </article>
  );
}
