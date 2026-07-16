import Link from "next/link";
import { Clock } from "lucide-react";
import Card from "@/components/Card/Card";
import styles from "./BlogCard.module.css";

export default function BlogCard({ post }) {
  return (
    <Card as={Link} href={`/blog/${post.slug}`} className={styles.wrapper}>
      <div className={styles.category}>{post.category}</div>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.excerpt}>{post.description}</p>
      <div className={styles.meta}>
        <span className={styles.metaItem}>
          <Clock size={12} /> {post.readingTime}
        </span>
        <span>{post.date}</span>
      </div>
    </Card>
  );
}
