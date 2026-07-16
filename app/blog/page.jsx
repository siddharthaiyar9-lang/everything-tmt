import BlogCard from "@/components/BlogCard/BlogCard";
import { getAllBlogPosts } from "@/lib/blog";
import styles from "./page.module.css";

export const metadata = {
  title: "Blog | Everything TMT",
  description:
    "Analysis and commentary on technology law, privacy, and AI regulation.",
};

export default async function BlogPage({ searchParams }) {
  const { category } = await searchParams;
  const allPosts = getAllBlogPosts();

  const posts = category
    ? allPosts.filter((p) => p.category === category)
    : allPosts;

  return (
    <div className={styles.page}>
      <span className={styles.pill}>Blog</span>
      <h1 className={styles.heading}>Everything TMT, in full</h1>
      <p className={styles.subheading}>
        Analysis and commentary on technology law, privacy, and AI regulation —
        written in full here, not just linked out.
      </p>

      {category && (
        <div className={styles.activeFilter}>
          Showing: <strong>{category}</strong>
          <a href="/blog" className={styles.clearFilter}>
            Clear
          </a>
        </div>
      )}

      {posts.length === 0 ? (
        <p className={styles.empty}>No posts in this category yet.</p>
      ) : (
        <div className={styles.grid}>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
