"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Search, Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";
import { NAV_LINKS } from "@/data/navigation";
import SearchModal from "@/components/SearchModal/SearchModal";
import styles from "./Navbar.module.css";

// `searchIndex` arrives as a prop from RootLayout (a Server Component),
// which is the only place allowed to read the MDX files that feed it.
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
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href ? styles.linkActive : styles.link
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.iconButton}
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
          >
            <Search size={15} />
          </button>
          <button
            className={styles.iconButton}
            aria-label="Toggle dark mode"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            className={styles.mobileToggle}
            aria-label="Open menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Menu size={15} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      {searchOpen && (
        <SearchModal index={searchIndex} onClose={() => setSearchOpen(false)} />
      )}
    </header>
  );
}
