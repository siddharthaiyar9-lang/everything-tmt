"use client";
// Needs 'use client' because this page holds interactive state (which
// filters are active, which view is selected) and responds to clicks.

import { useState, useMemo } from "react";
import FilterGroup from "@/components/FilterGroup/FilterGroup";
import TrackerCard from "@/components/TrackerCard/TrackerCard";
import StatusPill from "@/components/StatusPill/StatusPill";
import { trackerEntries } from "@/data/tracker";
import styles from "./page.module.css";

export default function TrackerPage() {
  const [regulator, setRegulator] = useState("All");
  const [status, setStatus] = useState("All");
  const [policyArea, setPolicyArea] = useState("All");
  const [view, setView] = useState("cards");

  // Deriving the list of possible filter options FROM the data itself
  // (rather than hardcoding them separately) means adding a new entry
  // with a new regulator/status/policyArea automatically makes it
  // filterable — no second file to remember to update.
  const regulators = [
    ...new Set(trackerEntries.map((e) => e.regulator)),
  ].sort();
  const statuses = [...new Set(trackerEntries.map((e) => e.status))].sort();
  const policyAreas = [
    ...new Set(trackerEntries.map((e) => e.policyArea)),
  ].sort();

  // useMemo re-runs this filtering logic only when one of the filters
  // (or the underlying data) actually changes — not on every render.
  // With ~20 entries this wouldn't matter either way, but it's the
  // correct habit for when this list grows into the hundreds.
  const filtered = useMemo(() => {
    return trackerEntries.filter((entry) => {
      const matchesRegulator =
        regulator === "All" || entry.regulator === regulator;
      const matchesStatus = status === "All" || entry.status === status;
      const matchesPolicyArea =
        policyArea === "All" || entry.policyArea === policyArea;
      return matchesRegulator && matchesStatus && matchesPolicyArea;
    });
  }, [regulator, status, policyArea]);

  const chronological = useMemo(() => {
    return [...filtered].sort((a, b) => a.date.localeCompare(b.date));
  }, [filtered]);

  // Groups the chronological list into { "2025": [...], "2026": [...] }
  // so the timeline view can render a year heading before each cluster.
  const groupedByYear = useMemo(() => {
    const groups = {};
    chronological.forEach((entry) => {
      const year = entry.date.slice(0, 4);
      if (!groups[year]) groups[year] = [];
      groups[year].push(entry);
    });
    return Object.entries(groups);
  }, [chronological]);

  return (
    <div className={styles.page}>
      <span className={styles.pill}>AI Regulation Tracker</span>
      <h1 className={styles.heading}>India AI Regulation Tracker</h1>
      <p className={styles.subheading}>
        A focused look at how India is governing artificial intelligence —
        across financial regulators, telecom, central government, the judiciary,
        cybersecurity, competition law, and the states.
      </p>

      <div className={styles.tabs}>
        <button
          type="button"
          onClick={() => setView("cards")}
          className={view === "cards" ? styles.tabActive : styles.tab}
        >
          All Entries
        </button>
        <button
          type="button"
          onClick={() => setView("timeline")}
          className={view === "timeline" ? styles.tabActive : styles.tab}
        >
          Timeline
        </button>
      </div>

      <div className={styles.filterBar}>
        <div className={styles.filterGrid}>
          <FilterGroup
            label="Regulator / Ministry"
            options={regulators}
            value={regulator}
            onChange={setRegulator}
          />
          <FilterGroup
            label="Legislative Status"
            options={statuses}
            value={status}
            onChange={setStatus}
          />
          <FilterGroup
            label="Policy Area"
            options={policyAreas}
            value={policyArea}
            onChange={setPolicyArea}
          />
        </div>
        <div className={styles.count}>
          {filtered.length} of {trackerEntries.length} entries
        </div>
      </div>

      {view === "cards" ? (
        <div className={styles.grid}>
          {filtered.map((entry) => (
            <TrackerCard key={entry.id} entry={entry} />
          ))}
        </div>
      ) : (
        <div>
          {groupedByYear.map(([year, entries]) => (
            <div key={year} className={styles.yearGroup}>
              <div className={styles.yearHeading}>
                <span>{year}</span>
                <div className={styles.yearLine} />
              </div>
              <div className={styles.timelineEntries}>
                {entries.map((entry) => (
                  <div key={entry.id} className={styles.timelineEntry}>
                    <div className={styles.timelineDate}>{entry.dateLabel}</div>
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineHeader}>
                        <span className={styles.timelineTitle}>
                          {entry.title}
                        </span>
                        <StatusPill status={entry.status} />
                      </div>
                      <div className={styles.timelineMeta}>
                        {entry.regulator} · {entry.policyArea}
                      </div>
                      <p className={styles.timelineSummary}>{entry.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
