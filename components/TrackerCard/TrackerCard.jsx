import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Card from "@/components/Card/Card";
import StatusPill from "@/components/StatusPill/StatusPill";
import styles from "./TrackerCard.module.css";

export default function TrackerCard({ entry }) {
  return (
    <Card className={styles.wrapper}>
      <div className={styles.header}>
        <h3 className={styles.title}>{entry.title}</h3>
        <StatusPill status={entry.status} />
      </div>

      <div className={styles.tags}>
        <span className={styles.regulator}>{entry.regulator}</span>
        <span className={styles.policyArea}>{entry.policyArea}</span>
      </div>

      <p className={styles.summary}>{entry.summary}</p>

      <div className={styles.keyPointsLabel}>Key Points</div>
      <ul className={styles.keyPoints}>
        {entry.keyPoints.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      <div className={styles.footer}>
        <span className={styles.date}>{entry.dateLabel}</span>
        <div className={styles.links}>
          {entry.internalLink && (
            <Link
              href={`/knowledge-base/${entry.internalLink}`}
              className={styles.internalLink}
            >
              Read on Knowledge Base <ArrowRight size={11} />
            </Link>
          )}
          {entry.source && (
            <a
              href={entry.source}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sourceLink}
            >
              Source <ArrowUpRight size={11} />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
