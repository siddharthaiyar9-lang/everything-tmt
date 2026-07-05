import { Scale } from 'lucide-react';
import styles from './CaseLaw.module.css';

export default function CaseLaw({ title = 'Case Law', children }) {
  return (
    <div className={styles.box}>
      <div className={styles.label}>
        <Scale size={13} />
        <span>{title}</span>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}