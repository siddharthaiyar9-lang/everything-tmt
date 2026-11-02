import { Library } from 'lucide-react';
import PageHeader from '@/components/PageHeader/PageHeader';
import ResourceCard from '@/components/ResourceCard/ResourceCard';
import { RESOURCES } from '@/data/verticals';
import styles from './page.module.css';

export const metadata = {
  title: 'Research and Resources | Everything TMT',
  description: 'Explainers, a tracker of how India governs AI, and a database of court judgments.',
};

export default function ResearchPage() {
  return (
    <div className={styles.page}>
      <PageHeader icon={Library} label="Research and Resources">
        <h1 className={styles.heading}>Research and Resources</h1>
        <p className={styles.subheading}>
          The reference material behind the writing: plain-language explainers, a tracker of how India governs AI, and a database of court decisions.
        </p>
      </PageHeader>

      <div className={styles.grid}>
        {Object.values(RESOURCES).map((resource) => (<ResourceCard key={resource.href} resource={resource} />))}
      </div>
    </div>
  );
}
