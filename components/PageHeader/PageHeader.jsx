import styles from './PageHeader.module.css';

// Wraps a page's pill + heading + subheading and draws a large,
// faint icon behind them. Purely decorative: aria-hidden, and it
// can't intercept clicks. The icon is passed in as a prop, so any
// page can use any lucide icon.
export default function PageHeader({ icon: Icon, children }) {
  return (
    <div className={styles.header}>
      <Icon className={styles.icon} strokeWidth={1} aria-hidden="true" />
      {children}
    </div>
  );
}