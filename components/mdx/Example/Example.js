import { BookOpen } from 'lucide-react';
import styles from './Example.module.css';

export default function Example({ title = 'Example', children }) {
  return (
    <div className={styles.box}>
      <div className={styles.label}>
        <BookOpen size={13} />
        <span>{title}</span>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}