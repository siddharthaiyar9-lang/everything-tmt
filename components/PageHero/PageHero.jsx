import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import styles from './PageHero.module.css';

// The full-width hero used on every main page. `text` can be a string or
// JSX (the Blog passes a paragraph with a link in it). Anything nested
// between the tags (buttons, a search box) shows under the text.
export default function PageHero({ icon: Icon, title, text, image, imagePosition, gradient, scrollTo, size, children }) {
  return (
    <section className={`${styles.hero} ${size === 'tall' ? styles.tall : ''}`} style={gradient ? { background: gradient } : undefined}>
      {image && (
        <Image src={image} alt="" fill priority sizes="100vw" className={styles.img} style={{ objectPosition: imagePosition || 'center' }} />
      )}
      <div className={styles.overlay} />
      <div className={styles.content}>
        {Icon && (
          <span className={styles.icon} aria-hidden="true">
            <Icon size={22} strokeWidth={1.75} />
          </span>
        )}
        <h1 className={styles.title}>{title}</h1>
        {text && <p className={styles.text}>{text}</p>}
        {children}
      </div>
      {scrollTo && (
        <a href={`#${scrollTo}`} className={styles.cue} aria-label="Scroll to content">
          <ChevronDown size={24} />
        </a>
      )}
    </section>
  );
}