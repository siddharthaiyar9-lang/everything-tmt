// No 'use client' — Card itself has no interactivity. If a page wraps
// it in a <Link>, the interactivity lives in Next.js's Link component,
// not here.

import styles from './Card.module.css';

export default function Card({ children, className = '', as: Tag = 'div', ...props }) {
  // `as` lets a caller render this as a different element when needed
  // (e.g. Card wraps content inside a <Link>, which needs to be an <a>
  // under the hood) without duplicating all the card styling elsewhere.
  return (
    <Tag className={`${styles.card} ${className}`} {...props}>
      {children}
    </Tag>
  );
}