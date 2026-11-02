'use client';

import { Children, useState } from 'react';
import styles from './ExpandableList.module.css';

// Shows the first `limit` items, with a button to reveal the rest.
export default function ExpandableList({ limit = 3, className, children }) {
  const [open, setOpen] = useState(false);
  const items = Children.toArray(children);
  const visible = open ? items : items.slice(0, limit);

  return (
    <>
      <div className={className}>{visible}</div>
      {items.length > limit && (
        <button type="button" className={styles.toggle} onClick={() => setOpen(!open)}>
          {open ? 'Show fewer' : `Show all ${items.length}`}
        </button>
      )}
    </>
  );
}