"use client";

import { useEffect, useState } from "react";
import styles from "./ReadingProgress.module.css";

// Tracks how far the reader has scrolled through the ARTICLE content
// specifically (not the whole page, which would include the footer
// and throw the percentage off) by measuring against a target element
// passed in via ref-less id lookup.
export default function ReadingProgress({ targetId }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const el = document.getElementById(targetId);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const totalScrollable = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), totalScrollable);
      const percent =
        totalScrollable > 0 ? (scrolled / totalScrollable) * 100 : 0;
      setProgress(percent);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetId]);

  return (
    <div className={styles.track}>
      <div className={styles.bar} style={{ width: `${progress}%` }} />
    </div>
  );
}
