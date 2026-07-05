import styles from './Note.module.css';

export default function Note({ label = 'Note', children }) {
  return (
    <div className={styles.box}>
      <div className={styles.label}>{label}</div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}