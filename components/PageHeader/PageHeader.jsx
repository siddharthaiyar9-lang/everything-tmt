import styles from './PageHeader.module.css';

// Renders the page's icon twice: a faint watermark behind the header,
// and a small icon in a pill above the title (replacing the old text
// pill). `label` is not shown visually, but it is read by screen readers
// and appears as a hover tooltip.
export default function PageHeader({ icon: Icon, label, children }) {
  return (
    <div className={styles.header}>
      <Icon className={styles.bgIcon} strokeWidth={1} aria-hidden="true" />
      <span className={styles.pill} role="img" aria-label={label} title={label}>
        <Icon size={18} strokeWidth={2} aria-hidden="true" />
      </span>
      {children}
    </div>
  );
}