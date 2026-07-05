"use client";
// Interactive (clicking a pill calls onChange), so this needs to be a
// Client Component. This is a "controlled" component: it doesn't hold
// its own filter state — the parent page does — it just displays
// whatever `value` it's given and reports clicks upward via onChange.

import styles from "./FilterGroup.module.css";

export default function FilterGroup({ label, options, value, onChange }) {
  const allOptions = ["All", ...options];

  return (
    <div className={styles.group}>
      <div className={styles.label}>{label}</div>
      <div className={styles.pills}>
        {allOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={option === value ? styles.pillActive : styles.pill}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
