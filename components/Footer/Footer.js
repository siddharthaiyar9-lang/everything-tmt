// No 'use client' here — this component has no interactivity (no state,
// no click handlers), so Next.js can render it once on the server and
// send plain HTML to the browser. Faster, and less JavaScript shipped.

import Link from 'next/link';
import { NAV_LINKS } from '../../data/navigation.js';
import styles from './Footer.module.css';

// The footer's "Explore" column skips Home — no site footer needs to
// link back to itself — everything else comes straight from the same
// NAV_LINKS array the Navbar uses, so the two can never drift apart.
const EXPLORE_LINKS = NAV_LINKS.filter((link) => link.href !== '/');

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <div className={styles.logo}>Everything TMT</div>
          <p className={styles.tagline}>
            Technology law, explained. A research platform covering privacy,
            AI governance, cybersecurity and digital regulation.
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
        </div>
      </div>
      <div className={styles.bottom}>© {new Date().getFullYear()} Everything TMT.</div>
    </footer>
  );
}