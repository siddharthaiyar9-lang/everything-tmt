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
      <p className={styles.subheading}>The idea behind Everything TMT is simple. To create an ecosystem we can better understand and discuss how technology is governed here in India.</p>
      <div className={styles.description}>
        Everything TMT will be built around three pillars: 
        1. Power: Who has power in the technology ecosystem, and how is it wielded?
        2. Accountability: Who is accountable for consequences of technology, and how is that accountability enforced?
        3. Rights: What rights do people have in the technology ecosystem, and how are those rights protected?
      </div>
      <div className={styles.actions}>
        <Link href="/knowledge-base" className={styles.primaryButton}>
          Start Learning <ArrowUpRight size={15} />
        </Link>
        <Link href="/tracker" className={styles.primaryButton}>
          Explore AI Regulations <ArrowUpRight size={15} />
        </Link>
        <Link href="mailto:siddharthaiyar9@gmail.com" className={styles.email}>
        Talk to me! <ArrowRight size={15} />
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
