"use client";

import { Search } from "lucide-react";
import styles from "./SearchBar.module.css";

// Controlled component: the parent (SearchModal) owns the actual text
// value and passes it in via `value`, plus a handler via `onChange`.
// This is a deliberate change from the earlier version — a search
// results list needs to react to every keystroke from ONE source of
// truth, rather than SearchBar quietly tracking its own copy.
export default function SearchBar({
  placeholder = "Search...",
  value,
  onChange,
  autoFocus,
}) {
  return (
    <div className={styles.wrapper}>
      <Search size={17} className={styles.icon} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
        autoFocus={autoFocus}
      />
    </div>
  );
}
