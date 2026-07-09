import { ArrowUpRight } from "lucide-react";
import Card from "@/components/Card/Card";
import StatusPill from "@/components/StatusPill/StatusPill";
import styles from "./JudgmentCard.module.css";

export default function JudgmentCard({ judgment }) {
  return (
    <Card className={styles.wrapper}>
      <div className={styles.header}>
        <h3 className={styles.caseName}>{judgment.caseName}</h3>
        <StatusPill status={judgment.status} />
      </div>

      <div className={styles.tags}>
        <span className={styles.practiceArea}>{judgment.practiceArea}</span>
        <span className={styles.court}>{judgment.court}</span>
        <span className={styles.topic}>{judgment.topic}</span>
      </div>

      <p className={styles.summary}>{judgment.summary}</p>

      <div className={styles.keyPointsLabel}>Key Points</div>
      <ul className={styles.keyPoints}>
        {judgment.keyPoints.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      <div className={styles.footer}>
        <span className={styles.date}>{judgment.dateLabel}</span>
        {judgment.source && (
          <a
            href={judgment.source}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sourceLink}
          >
            Source <ArrowUpRight size={11} />
          </a>
        )}
      </div>
    </Card>
  );
}
