import { ArrowUpRight } from 'lucide-react';
import Card from '@/components/Card/Card';
import styles from './NewsletterCard.module.css';

// This card links to an EXTERNAL site (Substack/Notion), unlike
// ExplainerCard which links to a page inside our own app. That's why
// it uses a plain <a> tag (via Card's `as` prop) with target="_blank",
// instead of Next.js's <Link> — Link is only for internal navigation.
export default function NewsletterCard({ issue }) {
  return (
    <Card
      as="a"
      href={issue.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.wrapper}
    >
      <div className={styles.tags}>
        <span className={styles.category}>{issue.category}</span>
        <span className={styles.platform}>{issue.platform}</span>
      </div>
      <h3 className={styles.title}>{issue.title}</h3>
      <ArrowUpRight size={16} className={styles.icon} />
    </Card>
  );
}