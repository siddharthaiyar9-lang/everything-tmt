import Link from "next/link";
import { Clock } from "lucide-react";
import Card from "@/components/Card/Card";
import { SITE_AUTHOR } from "@/data/site";
import styles from "./BlogCard.module.css";

export default function BlogCard({ post }) {
  const isGuest = post.author && post.author !== SITE_AUTHOR;

  return (
    <Card as={Link} href={`/blog/${post.slug}`} className={styles.wrapper}>
      <div className={styles.tags}>
        <span className={styles.category}>{post.category}</span>
        {isGuest && <span className={styles.guestTag}>Guest Contributor</span>}
      </div>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.excerpt}>{post.description}</p>
      <div className={styles.meta}>
        <span className={styles.metaItem}>
          <Clock size={12} /> {post.readingTime}
        </span>
        {isGuest && <span className={styles.metaItem}>{post.author}</span>}
        <span>{post.date}</span>
      </div>
    </Card>
  );
}
