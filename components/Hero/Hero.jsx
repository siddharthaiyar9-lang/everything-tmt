"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SearchModal from "@/components/SearchModal/SearchModal";
import styles from "./Hero.module.css";

// Now a Client Component (needs useState for the modal), and receives
// the same searchIndex prop, passed down from the page that renders
// it. The visible "search bar" here is just a styled button that opens
// the real SearchModal — avoids having two separate search inputs
// with two separate pieces of state to keep in sync.
export default function Hero({ searchIndex }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <section className={styles.hero}>
      <h1 className={styles.headline}>Welcome to Everything TMT</h1>
      <p className={styles.subheading}>The place for Tech Law and Policy.</p>
      <div className={styles.actions}>
        <Link href="/knowledge-base" className={styles.primaryButton}>
          Start Learning <ArrowUpRight size={15} />
        </Link>
        <Link href="/tracker" className={styles.primaryButton}>
          Explore AI Regulations <ArrowUpRight size={15} />
        </Link>
        <Link
          href="mailto:siddharthaiyar9@gmail.com"
          className={styles.email}
        ></Link>
      </div>
      <button
        className={styles.searchWrapper}
        onClick={() => setSearchOpen(true)}
      >
        Search explainers, the AI tracker, podcast episodes, newsletter...
      </button>

      {searchOpen && (
        <SearchModal index={searchIndex} onClose={() => setSearchOpen(false)} />
      )}
    </section>
  );
}
