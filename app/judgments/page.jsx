"use client";

import { useState, useMemo, useEffect } from "react";
import FilterGroup from "@/components/FilterGroup/FilterGroup";
import JudgmentCard from "@/components/JudgmentCard/JudgmentCard";
import { judgments } from "@/data/judgments";
import styles from "./page.module.css";
   import { Gavel } from 'lucide-react';
   import PageHeader from '@/components/PageHeader/PageHeader';

export default function JudgmentsPage() {
  const [practiceArea, setPracticeArea] = useState("All");
  const [court, setCourt] = useState("All");
  const [topic, setTopic] = useState("All");

  const practiceAreas = [
    ...new Set(judgments.map((j) => j.practiceArea)),
  ].sort();
  const courts = [...new Set(judgments.map((j) => j.court))].sort();

  // Topic options are DERIVED from the currently selected Practice Area,
  // not from the full dataset — this is what makes the filter
  // "cascading." Selecting "Privacy" will only show privacy-relevant
  // topics (Consent, Data Breach, etc.), not AI topics like "Deepfake."
  const availableTopics = useMemo(() => {
    const relevant =
      practiceArea === "All"
        ? judgments
        : judgments.filter((j) => j.practiceArea === practiceArea);
    return [...new Set(relevant.map((j) => j.topic))].sort();
  }, [practiceArea]);

  // If the user had a specific topic selected and then switches Practice
  // Area to something where that topic no longer applies (e.g. they had
  // "Deepfake" selected and switch to "Privacy"), reset Topic back to
  // "All" rather than silently showing zero results with a confusing
  // filter still active.
  useEffect(() => {
    if (topic !== "All" && !availableTopics.includes(topic)) {
      setTopic("All");
    }
  }, [availableTopics, topic]);

  const filtered = useMemo(() => {
    return judgments.filter((j) => {
      const matchesPracticeArea =
        practiceArea === "All" || j.practiceArea === practiceArea;
      const matchesCourt = court === "All" || j.court === court;
      const matchesTopic = topic === "All" || j.topic === topic;
      return matchesPracticeArea && matchesCourt && matchesTopic;
    });
  }, [practiceArea, court, topic]);

  return (
    <div className={styles.page}>
      <PageHeader icon={Gavel}>
      <h1 className={styles.heading}>Judgments Tracker</h1>
      <p className={styles.subheading}>
        Indian court decisions on artificial intelligence and data privacy —
        copyright and AI training, deepfakes and personality rights, AI in the
        judiciary, and the evolving law of data protection and surveillance.
      </p>
      </PageHeader>

      <div className={styles.filterBar}>
        <div className={styles.filterGrid}>
          <FilterGroup
            label="Practice Area"
            options={practiceAreas}
            value={practiceArea}
            onChange={setPracticeArea}
          />
          <FilterGroup
            label="Court"
            options={courts}
            value={court}
            onChange={setCourt}
          />
          <FilterGroup
            label="Topic"
            options={availableTopics}
            value={topic}
            onChange={setTopic}
          />
        </div>
        <div className={styles.count}>
          {filtered.length} of {judgments.length} judgments
        </div>
      </div>

      <div className={styles.grid}>
        {filtered.map((j) => (
          <JudgmentCard key={j.id} judgment={j} />
        ))}
      </div>
    </div>
  );
}
