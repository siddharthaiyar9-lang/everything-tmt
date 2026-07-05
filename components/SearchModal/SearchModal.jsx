"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import SearchBar from "@/components/SearchBar/SearchBar";
import { searchItems } from "@/lib/search";
import styles from "./SearchModal.module.css";

// `index` arrives as a prop, built server-side in layout.js by
// getSearchIndex() and passed down through Navbar. This component
// never touches the filesystem itself.
export default function SearchModal({ index, onClose }) {
  const [query, setQuery] = useState("");
  const results = searchItems(index, query);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search explainers, the AI tracker, podcast episodes, newsletter..."
            autoFocus
          />
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close search"
          >
            <X size={18} />
          </button>
        </div>

        {query.trim() && (
          <div className={styles.results}>
            {results.length === 0 ? (
              <div className={styles.empty}>
                No results for &ldquo;{query}&rdquo;
              </div>
            ) : (
              results.map((r, i) => (
                <Link
                  key={i}
                  href={r.url}
                  onClick={onClose}
                  className={styles.result}
                >
                  <span className={styles.resultType}>{r.type}</span>
                  <div className={styles.resultTitle}>{r.title}</div>
                  {r.description && (
                    <div className={styles.resultDescription}>
                      {r.description}
                    </div>
                  )}
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
