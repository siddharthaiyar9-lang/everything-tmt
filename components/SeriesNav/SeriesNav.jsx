import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './SeriesNav.module.css';

// Box at the top of an article: which series, which part, and all the parts.
export function SeriesIntro({ series, posts, currentSlug }) {
  const position = posts.findIndex((p) => p.slug === currentSlug) + 1;
  const total = series.total || posts.length;
  const remaining = total - posts.length;

  return (
    <aside className={styles.intro} aria-label="Series">
      <div className={styles.kicker}>Series · Part {position} of {total}</div>
      <div className={styles.seriesTitle}>{series.title}</div>
      {series.description && <p className={styles.seriesText}>{series.description}</p>}
      <ol className={styles.parts}>
        {posts.map((p) => (
          <li key={p.slug} className={p.slug === currentSlug ? styles.partCurrent : styles.part}>
            {p.slug === currentSlug ? <span>{p.title}</span> : <Link href={`/blog/${p.slug}`}>{p.title}</Link>}
          </li>
        ))}
      </ol>
      {remaining > 0 && (
        <div className={styles.soon}>{remaining} more {remaining === 1 ? 'part' : 'parts'} coming soon</div>
      )}
    </aside>
  );
}

// Previous and Next cards at the bottom of an article.
export function SeriesPager({ previous, next }) {
  if (!previous && !next) return null;
  return (
    <nav className={styles.pager} aria-label="Series navigation">
      {previous ? (
        <Link href={`/blog/${previous.slug}`} className={styles.pagerLink}>
          <span className={styles.pagerLabel}><ArrowLeft size={13} /> Previous</span>
          <span className={styles.pagerTitle}>{previous.title}</span>
        </Link>
      ) : <span />}
      {next ? (
        <Link href={`/blog/${next.slug}`} className={`${styles.pagerLink} ${styles.pagerNext}`}>
          <span className={styles.pagerLabel}>Next <ArrowRight size={13} /></span>
          <span className={styles.pagerTitle}>{next.title}</span>
        </Link>
      ) : <span />}
    </nav>
  );
}
