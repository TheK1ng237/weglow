import styles from './whatsapp-link.module.css';

export interface WhatsAppLinkProps {
  phoneNumber?: string;
  message?: string;
  label?: string;
  variant?: 'gold' | 'bordeaux' | 'outline' | 'ghost';
  className?: string;
}

export function buildWhatsAppHref(
  phoneNumber: string | undefined,
  message: string,
): string {
  const phone = phoneNumber?.replace(/\D/g, '') || '';
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      height="18"
      viewBox="0 0 24 24"
      width="18"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.61 20.16 9.22 19.79 8.01 19.07L7.72 18.9L4.62 19.71L5.45 16.69L5.26 16.39C4.47 15.13 4.05 13.67 4.05 11.91C4.05 7.37 7.75 3.67 12.04 3.67ZM8.73 7.39C8.52 7.39 8.35 7.46 8.21 7.62C8.01 7.82 7.35 8.44 7.35 9.69C7.35 10.94 8.26 12.15 8.39 12.32C8.52 12.49 10.14 15.08 12.67 16.12C14.77 16.98 15.2 16.81 15.65 16.77C16.1 16.73 17.1 16.18 17.31 15.6C17.52 15.02 17.52 14.52 17.45 14.41C17.38 14.31 17.21 14.25 16.96 14.12C16.71 14 15.48 13.39 15.25 13.31C15.02 13.23 14.86 13.19 14.69 13.44C14.49 13.73 13.99 14.31 13.84 14.48C13.69 14.65 13.55 14.67 13.3 14.54C13.05 14.42 12.24 14.15 11.29 13.3C10.55 12.64 10.05 11.83 9.9 11.58C9.75 11.33 9.88 11.2 10.01 11.08C10.12 10.97 10.26 10.79 10.39 10.64C10.52 10.49 10.56 10.38 10.64 10.22C10.72 10.05 10.68 9.91 10.62 9.78C10.56 9.65 10.06 8.43 9.85 7.93C9.65 7.44 9.44 7.51 9.29 7.5C9.15 7.49 8.94 7.39 8.73 7.39Z" />
    </svg>
  );
}

export function WhatsAppLink({
  phoneNumber = '',
  message = 'Bonjour, je souhaite des informations.',
  label = 'WhatsApp',
  variant = 'outline',
  className,
}: WhatsAppLinkProps) {
  const href = buildWhatsAppHref(phoneNumber, message);

  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <a
      aria-label={`${label} (ouvre WhatsApp)`}
      className={classes}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <WhatsAppIcon className={styles.icon} />
      <span>{label}</span>
    </a>
  );
}
