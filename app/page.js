import Link from "next/link";
import Hero from "@/components/Hero/Hero";
import ExplainerCard from "@/components/ExplainerCard/ExplainerCard";
import { getAllExplainers } from "@/lib/mdx";
import { getSearchIndex } from "@/lib/searchIndex";
import { topics } from "@/data/topics";
import styles from "./page.module.css";

export default function Home() {
  const explainers = getAllExplainers();
  const searchIndex = getSearchIndex();

  return (
    <main>
      <Hero searchIndex={searchIndex} />

      <section className={styles.section}>
        <div className={styles.sectionLabel}>Featured Explainers</div>
        <div className={styles.grid}>
          {explainers.map((explainer) => (
            <ExplainerCard key={explainer.slug} explainer={explainer} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>Browse by Topic</div>
        <div className={styles.topicGrid}>
          {topics.map((topic) => (
            <Link
              key={topic.name}
              href={`/knowledge-base?category=${encodeURIComponent(topic.name)}`}
              className={styles.topicPill}
            >
              {topic.name}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
