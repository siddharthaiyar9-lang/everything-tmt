import { Play, ArrowUpRight } from "lucide-react";
import Card from "@/components/Card/Card";
import styles from "./PodcastCard.module.css";

export default function PodcastCard({ episode }) {
  return (
    <Card className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.iconCircle}>
          <Play size={15} fill="currentColor" />
        </div>
        <div>
          <div className={styles.guestLabel}>{episode.guestLabel}</div>
          <h3 className={styles.title}>{episode.title}</h3>
        </div>
      </div>

      <div className={styles.parts}>
        {episode.parts.map((part) => (
          <a
            key={part.url}
            href={part.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.part}
          >
            {part.label} <ArrowUpRight size={11} />
          </a>
        ))}
      </div>
    </Card>
  );
}
