import { Mic } from 'lucide-react';
import PageHero from '@/components/PageHero/PageHero';
import PodcastCard from '@/components/PodcastCard/PodcastCard';
import { podcasts } from '@/data/podcasts';
import { HEROES } from '@/data/heroes';
import styles from './page.module.css';

export const metadata = {
  title: 'Podcast | Everything TMT',
  description: 'Conversations on technology law, policy, and careers in TMT.',
};

export default function PodcastPage() {
  return (
    <>
      <PageHero
        icon={Mic}
        title="The Everything TMT Podcast"
        text="Conversations on technology law, policy, and careers in TMT."
        scrollTo="podcast-content"
        {...HEROES.podcast}
      />

      <div id="podcast-content" className={styles.page} style={{ scrollMarginTop: '64px' }}>
        <div className={styles.grid}>
          {podcasts.map((episode) => (<PodcastCard key={episode.id} episode={episode} />))}
        </div>
      </div>
    </>
  );
}