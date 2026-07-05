import styles from "./StatusPill.module.css";

// Maps each status string to a CSS class. Centralizing this mapping
// here (rather than scattering if/else color logic across every place
// a status gets shown) means adding a new status value later only
// requires one new line, in one file.
const STATUS_CLASSES = {
  "In Force": styles.inForce,
  "Consultation / Draft": styles.consultation,
  "Recommendation / Report": styles.neutral,
  "Advisory / Guidance": styles.neutral,
  "State Policy": styles.statePolicy,
};

export default function StatusPill({ status }) {
  const className = STATUS_CLASSES[status] || styles.neutral;
  return <span className={`${styles.pill} ${className}`}>{status}</span>;
}
