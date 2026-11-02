"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Search } from "lucide-react";
import Card from "@/components/Card/Card";
import SearchModal from "@/components/SearchModal/SearchModal";
import styles from "./Hero.module.css";

// The three pillars live in data, so the cards below are generated from this
// list. Edit the wording here and nothing else needs to change.
const PILLARS = [
  {
    label: "Power",
    question: "Who has power in the technology ecosystem, and how is it wielded?",
  },
  {
    label: "Accountability",
    question: "Who is accountable for the consequences of technology, and how is that accountability enforced?",
  },
  {
    label: "Rights",
    question: "What rights do people have in the technology ecosystem, and how are those rights protected?",
  },
];

export default function Hero({ searchIndex }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <section className={styles.hero}>
      <h1 className={styles.headline}>Welcome to Everything TMT</h1>
      <p className={styles.subheading}>
        The idea behind Everything TMT is simple: to build a place where we can
        better understand, and debate, how technology is governed in India.
      </p>

      <div className={styles.pillarsLabel}>Built around three pillars</div>
      <div className={styles.pillars}>
        {PILLARS.map((pillar, i) => (
          <Card key={pillar.label} className={styles.pillar}>
            <div className={styles.pillarNumber}>0{i + 1}</div>
            <h2 className={styles.pillarName}>{pillar.label}</h2>
            <p className={styles.pillarQuestion}>{pillar.question}</p>
          </Card>
        ))}
      </div>

      <div className={styles.actions}>
        <Link href="/knowledge-base" className={styles.primaryButton}>
          Start Learning <ArrowUpRight size={15} />
        </Link>
        <Link href="/tracker" className={styles.secondaryButton}>
          Explore AI Regulations <ArrowUpRight size={15} />
        </Link>
        <a href="mailto:siddharthaiyar9@gmail.com" className={styles.textLink}>
          Talk to me <ArrowRight size={15} />
        </a>
      </div>

      <button
        type="button"
        className={styles.searchWrapper}
        onClick={() => setSearchOpen(true)}
      >
        <Search size={16} />
        Search explainers, the tracker, judgments, podcast and blog...
      </button>

      {searchOpen && (
        <SearchModal index={searchIndex} onClose={() => setSearchOpen(false)} />
      )}
    </section>
  );
}