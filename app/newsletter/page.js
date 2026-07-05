import { Mail } from "lucide-react";
import NewsletterCard from "@/components/NewsletterCard/NewsletterCard";
import { newsletters } from "@/data/newsletters.js";
import styles from "./page.module.css";

export const metadata = {
  title: "Newsletter | Everything TMT",
  description: "Technology law and regulation, explained — every week.",
};

export default function NewsletterPage() {
  return (
    <div className={styles.page}>
      <span className={styles.pill}>Newsletter</span>
      <h1 className={styles.heading}>One clear read, every week</h1>
      <p className={styles.subheading}>
        Technology law and regulation, explained — straight to your inbox.
      </p>

      {/* Static for now — wiring this up to an actual email provider
          (Substack API, ConvertKit, etc.) is a separate integration
          task, not part of this architecture step. */}
      <div className={styles.signup}>
        <input
          type="email"
          placeholder="you@email.com"
          className={styles.input}
        />
        <button className={styles.button}>
          Subscribe <Mail size={14} />
        </button>
      </div>

      <div className={styles.sectionLabel}>Archive</div>
      <div className={styles.grid}>
        {newsletters.map((issue, i) => (
          <NewsletterCard key={i} issue={issue} />
        ))}
      </div>
    </div>
  );
}
