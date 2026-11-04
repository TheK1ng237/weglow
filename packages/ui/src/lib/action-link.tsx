import Link from 'next/link';
import styles from './action-link.module.css';

export interface ActionLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'solid' | 'outline' | 'text';
  className?: string;
}

export function ActionLink({
  href,
  children,
  variant = 'solid',
  className,
}: ActionLinkProps) {
  const classes = [styles.link, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <Link className={classes} href={href}>
      <span>{children}</span>
      <span aria-hidden="true" className={styles.arrow}>
        ↗
      </span>
    </Link>
  );
}
