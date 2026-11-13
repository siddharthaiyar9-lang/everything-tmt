'use client';

import { useState, useId } from 'react';
import Image from 'next/image';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import styles from './TeamCard.module.css';

// Closed: photo and position. Open: name, credentials, bio and links.
// The links sit outside the button, because a link cannot live inside one.
export default function TeamCard({ member }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const initials = member.name.split(' ').map((w) => w[0]).slice(0, 2).join('');

  return (
    <div className={`${styles.card} ${open ? styles.open : ''}`}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${member.name}, ${member.position}`}
        onClick={() => setOpen(!open)}
      >
        <div className={styles.photo}>
          {member.photo ? (
            <Image src={member.photo} alt="" fill sizes="(max-width: 700px) 100vw, 320px" className={styles.photoImg} style={{ objectPosition: member.photoPosition || 'center 25%' }} />
          ) : (
            <span className={styles.initials} aria-hidden="true">{initials}</span>
          )}
        </div>
        <div className={styles.bar}>
          <span className={styles.position}>{member.position}</span>
          <ChevronDown size={18} className={styles.chevron} aria-hidden="true" />
        </div>
      </button>

      <div id={panelId} className={styles.panel} inert={!open}>
        <div className={styles.panelInner}>
          <div className={styles.panelContent}>
            <h3 className={styles.name}>{member.name}</h3>
            {member.credentials && <div className={styles.credentials}>{member.credentials}</div>}
            {member.about.map((paragraph, i) => (<p key={i} className={styles.about}>{paragraph}</p>))}
            {member.links && member.links.length > 0 && (
              <div className={styles.links}>
                {member.links.map((link) => (
                  <a key={link.href} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    {link.label} <ArrowUpRight size={12} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
