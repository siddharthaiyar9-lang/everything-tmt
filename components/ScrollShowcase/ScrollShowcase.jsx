"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./ScrollShowcase.module.css";

const NAV_HEIGHT = 64; // matches the sticky Navbar
const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

// The outer track is N screens tall. Inside it, one sticky "stage" stays
// pinned while you scroll. We read how far through the track you are and
// turn that into a position between 0 and N-1. Each block's opacity depends
// on how close it is to that position, which gives the cross-fade.
export default function ScrollShowcase({ items }) {
  const trackRef = useRef(null);
  const stageRef = useRef(null);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    let frame = 0;

    function update() {
      const track = trackRef.current;
      const stage = stageRef.current;
      if (!track || !stage) return;
      const scrollable = track.offsetHeight - stage.offsetHeight;
      const scrolled = clamp(
        NAV_HEIGHT - track.getBoundingClientRect().top,
        0,
        scrollable,
      );
      const ratio = scrollable > 0 ? scrolled / scrollable : 0;
      setPosition(ratio * (items.length - 1));
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
    <section
      ref={trackRef}
      className={styles.track}
      style={{ height: `${items.length * 100}vh` }}
    >
      <div ref={stageRef} className={styles.stage}>
        {items.map((item, i) => {
          const distance = Math.abs(position - i);
          const opacity = clamp(1.5 - distance * 2, 0, 1);
          const shift = (i - position) * 40;
          return (
            <div
              key={item.id}
              className={styles.block}
              style={{
                opacity,
                pointerEvents: opacity > 0.5 ? "auto" : "none",
                zIndex: opacity > 0.5 ? 2 : 1,
              }}
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
              <div
                className={styles.content}
                style={{ transform: `translateY(${shift}px)` }}
              >
                <div className={styles.label}>{item.label}</div>
                <h2 className={styles.heading}>{item.heading}</h2>
                <p className={styles.text}>{item.text}</p>
                <div className={styles.links}>
                  {item.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={styles.link}
                    >
                      {link.label} <ArrowRight size={16} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
