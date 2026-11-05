import Link from 'next/link';
import { Clock } from 'lucide-react';
import Card from '@/components/Card/Card';
import { SITE_AUTHOR } from '@/data/site';
import { VERTICALS } from '@/data/verticals';
import { SERIES } from '@/data/series';
import styles from './BlogCard.module.css';

export default function BlogCard({ post }) {
  const isGuest = post.author && post.author !== SITE_AUTHOR;
  const verticalKeys = Array.isArray(post.verticals) ? post.verticals.filter((v) => VERTICALS[v]) : [];
  const seriesInfo = post.series ? SERIES[post.series] : null;

  return (
    <Card as={Link} href={`/blog/${post.slug}`} className={styles.wrapper}>
      <div className={styles.tags}>
        <span className={styles.category}>{post.category}</span>
        {verticalKeys.map((v) => (<span key={v} className={styles.verticalTag}>{VERTICALS[v].short}</span>))}
        {seriesInfo && <span className={styles.seriesTag}>Part {post.seriesPart} of {seriesInfo.total}</span>}
        {isGuest && <span className={styles.guestTag}>Guest Contributor</span>}
      </div>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.excerpt}>{post.description}</p>
      <div className={styles.meta}>
        <span className={styles.metaItem}>
          <Clock size={12} /> {post.readingTime}
        </span>
        {isGuest && <span className={styles.metaItem}>{post.author}</span>}
        <span>{post.date}</span>
      </div>
    </Card>
  );
}
