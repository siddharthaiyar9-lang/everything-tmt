"use client";

import { useEffect, useState } from "react";
import styles from "./TableOfContents.module.css";

// Uses IntersectionObserver to detect which heading is currently
// visible near the top of the viewport, so the TOC can highlight
// whichever section the reader has actually scrolled to — not just
// whichever link they last clicked.
export default function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState(headings[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      // Treat a heading as "active" once it crosses 100px below the
      // sticky navbar, and stop counting once we're past 70% down the
      // viewport — this roughly matches "the section currently being read."
      { rootMargin: "-100px 0px -70% 0px" },
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  function handleClick(id) {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (headings.length === 0) return null;

  return (
    <nav className={styles.toc}>
      <div className={styles.label}>On this page</div>
      <div className={styles.list}>
        {headings.map((h) => (
          <div
            key={h.id}
            onClick={() => handleClick(h.id)}
            className={h.id === activeId ? styles.linkActive : styles.link}
          >
            {h.text}
          </div>
        ))}
      </div>
    </nav>
  );
}
