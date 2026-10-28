import Image from "next/image";
import { Play } from "lucide-react";
import Card from "@/components/Card/Card";
import styles from "./PodcastCard.module.css";

export default function PodcastCard({ episode }) {
  return (
    <Card className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.art}>
          {episode.image ? (
            <Image
              src={episode.image}
              alt={episode.title}
              fill
              sizes="160px"
              className={styles.artImg}
            />
          ) : (
            <Play size={34} fill="white" color="white" />
          )}
        </div>
        <div className={styles.body}>
          <div className={styles.guestLabel}>{episode.guestLabel}</div>
          <h2 className={styles.title}>{episode.title}</h2>
          {episode.description && (
            <p className={styles.description}>{episode.description}</p>
          )}
          <div className={styles.parts}>
            {episode.parts.map((part) => (
              <a
                key={part.url}
                href={part.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.part}
              >
                <Play size={12} fill="currentColor" /> {part.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
