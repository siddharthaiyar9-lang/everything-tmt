import Link from 'next/link';
import { NAV_LINKS, RESOURCE_LINKS } from '@/data/navigation';
import styles from './Footer.module.css';

// The "Explore" column mirrors the main nav (minus Home). The "Resources"
// column holds the tools that are no longer in the nav.
const EXPLORE_LINKS = NAV_LINKS.filter((link) => link.href !== '/');

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <div className={styles.logo}>Everything TMT</div>
          <p className={styles.tagline}>
            A tech law and policy ecosystem.
          </p>
        </div>
        <div className={styles.columns}>
          <div>
            <div className={styles.columnTitle}>Explore</div>
            {EXPLORE_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={styles.footerLink}>
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <div className={styles.columnTitle}>Resources</div>
            {RESOURCE_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={styles.footerLink}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.bottom}>© {new Date().getFullYear()} Everything TMT.</div>
    </footer>
  );
}
