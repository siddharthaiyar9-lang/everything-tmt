import ExplainerCard from "@/components/ExplainerCard/ExplainerCard";
import { getAllExplainers } from "@/lib/mdx";
import styles from "./page.module.css";

export const metadata = {
  title: "Knowledge Base | Everything TMT",
  description: "Long-form, plain-language explainers on Indian technology law.",
};

// Next.js gives Server Component pages a `searchParams` prop automatically
// whenever the URL has a query string (e.g. ?category=Privacy) — no
// extra setup needed, unlike `params` this isn't a Promise in current
// Next.js versions for searchParams... but to be safe given our
// earlier params/Promise issue, we await it the same way.
export default async function KnowledgeBasePage({ searchParams }) {
  const { category } = await searchParams;
  const allExplainers = getAllExplainers();

  const explainers = category
    ? allExplainers.filter((e) => e.category === category)
    : allExplainers;

  return (
    <div className={styles.page}>
      <span className={styles.pill}>Knowledge Base</span>
      <h1 className={styles.heading}>The Knowledge Base</h1>
      <p className={styles.subheading}>
        Long-form, plain-language explainers on Indian technology law — built to
        read like documentation, not case notes.
      </p>

      {category && (
        <div className={styles.activeFilter}>
          Showing: <strong>{category}</strong>
          <a href="/knowledge-base" className={styles.clearFilter}>
            Clear
          </a>
        </div>
      )}

      {explainers.length === 0 ? (
        <p className={styles.empty}>No explainers in this category yet.</p>
      ) : (
        <div className={styles.grid}>
          {explainers.map((explainer) => (
            <ExplainerCard key={explainer.slug} explainer={explainer} />
          ))}
        </div>
      )}
    </div>
  );
}
