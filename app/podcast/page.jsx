import { Play } from 'lucide-react';
import PodcastCard from '@/components/PodcastCard/PodcastCard';
import { podcasts } from '@/data/podcasts';
import styles from './page.module.css';

export const metadata = {
  title: 'Podcast | Everything TMT',
  description: 'Conversations on technology law, policy, and careers in TMT.',
};

export default function PodcastPage() {
  const [featured, ...rest] = podcasts;

  return (
    <div className={styles.page}>
      <span className={styles.pill}>Podcast</span>
      <h1 className={styles.heading}>Everything TMT, the podcast</h1>

      <div className={styles.sectionLabel}>Featured Episode</div>
      <div className={styles.featured}>
        <div className={styles.featuredArt}>
          <Play size={34} fill="white" color="white" />
        </div>
        <div>
          <div className={styles.guestLabel}>{featured.guestLabel}</div>
          <h2 className={styles.featuredTitle}>{featured.title}</h2>
          <div className={styles.featuredParts}>
            {featured.parts.map((part) => (<a key={part.url} href={part.url} target="_blank" rel="noopener noreferrer" className={styles.featuredPart}><Play size={12} fill="currentColor" /> {part.label}</a>))}
          </div>
        </div>
      </div>

      <div className={styles.sectionLabel}>All Episodes</div>
      <div className={styles.grid}>
        {rest.map((episode) => (
          <PodcastCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
}