import { FileText } from 'lucide-react';
import styles from './Definition.module.css';

// This is what <Definition> resolves to when used inside an .mdx file
// (see components/mdx/index.js, where we register this mapping).
export default function Definition({ title, children }) {
  return (
    <div className={styles.box}>
      <div className={styles.label}>
        <FileText size={13} />
        <span>Definition</span>
      </div>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.body}>{children}</div>
    </div>
  );
}