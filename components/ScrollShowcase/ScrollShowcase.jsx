"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./ScrollShowcase.module.css";

const NAV_HEIGHT = 64; // matches the sticky Navbar
const FADE_START = 0.1; // fade begins once 15% of the block has scrolled up
const FADE_LENGTH = 0.6; // fully gone by the time 75% has scrolled up
const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

// Each block is a normal full-screen section. On scroll we measure how far
// each one has moved up past the navbar and fade it out accordingly. The
// opacity is set directly on the element, so scrolling doesn't re-render React.
export default function ScrollShowcase({ items }) {
  const blockRefs = useRef([]);

  useEffect(() => {
    let frame = 0;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    function update() {
      blockRefs.current.forEach((el) => {
        if (!el) return;
        if (reduceMotion) {
          el.style.opacity = "1";
          return;
        }
        const rect = el.getBoundingClientRect();
        const progress = (NAV_HEIGHT - rect.top) / rect.height;
        const fade = clamp((progress - FADE_START) / FADE_LENGTH, 0, 1);
        el.style.opacity = String(1 - fade);
        el.style.pointerEvents = fade > 0.7 ? "none" : "auto";
      });
    }

    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items.length]);

  return (
    <section>
      {items.map((item, i) => (
        <div
          key={item.id}
          ref={(el) => (blockRefs.current[i] = el)}
          className={styles.block}
        >
          <div className={styles.bg} style={{ background: item.gradient }}>
            {item.image && (
              <Image
                src={item.image}
                alt=""
                fill
                sizes="100vw"
                priority={i === 0}
                className={styles.bgImg}
              />
            )}
          </div>
          <div className={styles.overlay} />
          <div className={styles.content}>
            <div className={styles.label}>{item.label}</div>
            <h2 className={styles.heading}>{item.heading}</h2>
            <p className={styles.text}>{item.text}</p>
            <div className={styles.links}>
              {item.links.map((link) => (
                <Link key={link.href} href={link.href} className={styles.link}>
                  {link.label} <ArrowRight size={16} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
