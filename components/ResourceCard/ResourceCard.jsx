import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Card from '@/components/Card/Card';
import styles from './ResourceCard.module.css';

export default function ResourceCard({ resource }) {
  return (
    <Card as={Link} href={resource.href} className={styles.wrapper}>
      <h3 className={styles.title}>{resource.title}</h3>
      <p className={styles.text}>{resource.description}</p>
      <span className={styles.link}>Open <ArrowRight size={12} /></span>
    </Card>
  );
}