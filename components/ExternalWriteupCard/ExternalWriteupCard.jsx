import { ArrowUpRight } from "lucide-react";
import Card from "@/components/Card/Card";
import styles from "./ExternalWriteupCard.module.css";

export default function ExternalWriteupCard({ piece }) {
  return (
    <Card
      as="a"
      href={piece.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.wrapper}
    >
      <div className={styles.tags}>
        <span className={styles.type}>{piece.type}</span>
        <span className={styles.publication}>{piece.publication}</span>
      </div>
      <h3 className={styles.title}>{piece.title}</h3>
      {piece.subtitle && <p className={styles.subtitle}>{piece.subtitle}</p>}
      <div className={styles.footer}>
        <span className={styles.date}>{piece.dateLabel}</span>
        <span className={styles.readLink}>
          Read on {piece.publication.split(" (")[0]} <ArrowUpRight size={11} />
        </span>
      </div>
    </Card>
  );
}
