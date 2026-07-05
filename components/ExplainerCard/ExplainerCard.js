import Link from 'next/link';
import { Clock } from 'lucide-react';
import Card from '@/components/Card/Card';
import styles from './ExplainerCard.module.css';

export default function ExplainerCard({ explainer }) {
  return (
    <Card as={Link} href={`/knowledge-base/${explainer.slug}`} className={styles.wrapper}>
      <div className={styles.category}>{explainer.category}</div>
      <h3 className={styles.title}>{explainer.title}</h3>
      <p className={styles.excerpt}>{explainer.description}</p>
      <div className={styles.meta}>
        <span className={styles.metaItem}>
          <Clock size={12} /> {explainer.readingTime}
        </span>
        <span>Updated {explainer.date}</span>
      </div>
    </Card>
  );
}