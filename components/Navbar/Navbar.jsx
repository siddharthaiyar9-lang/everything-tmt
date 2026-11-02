'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Search, Moon, Sun, Menu } from 'lucide-react';
import { useTheme } from '@/lib/ThemeContext';
import { NAV_LINKS } from '@/data/navigation';
import SearchModal from '@/components/SearchModal/SearchModal';
import styles from './Navbar.module.css';

// A link is active on its own page, on any page beneath it (so /blog/some-post
// lights up Blog), and on any path listed in its alsoActiveOn.
function isActive(link, pathname) {
  if (pathname === link.href) return true;
  if (link.href !== '/' && pathname.startsWith(`${link.href}/`)) return true;
  return (link.alsoActiveOn || []).some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export default function Navbar({ searchIndex }) {
  const pathname = usePathname();
  const { darkMode, setDarkMode } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Everything <span className={styles.logoAccent}>TMT</span>
        </Link>

        <nav className={styles.links}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={isActive(link, pathname) ? styles.linkActive : styles.link}>{link.label}</Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.iconButton} aria-label="Search" onClick={() => setSearchOpen(true)}>
            <Search size={15} />
          </button>
          <button className={styles.iconButton} aria-label="Toggle dark mode" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button className={styles.mobileToggle} aria-label="Open menu" onClick={() => setMobileOpen(!mobileOpen)}>
            <Menu size={15} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{link.label}</Link>
          ))}
        </nav>
      )}

      {searchOpen && <SearchModal index={searchIndex} onClose={() => setSearchOpen(false)} />}
    </header>
  );
}