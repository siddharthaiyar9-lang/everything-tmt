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
      <h1 className={styles.headline}>
        Technology law.
        <br />
        Without the legalese.
      </h1>
      <p className={styles.subheading}>
        Clear explainers, India&apos;s AI regulation tracker, podcasts, and
        research on privacy, cybersecurity, and digital regulation.
      </p>
      <div className={styles.actions}>
        <Link href="/knowledge-base" className={styles.primaryButton}>
          Start Learning <ArrowRight size={15} />
        </Link>
        <Link href="/tracker" className={styles.secondaryButton}>
          Explore AI Regulations <ArrowUpRight size={15} />
        </Link>
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
