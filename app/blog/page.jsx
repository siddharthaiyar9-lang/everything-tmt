import BlogCard from "@/components/BlogCard/BlogCard";
import ExternalWriteupCard from "@/components/ExternalWriteupCard/ExternalWriteupCard";
import { getAllBlogPosts } from "@/lib/blog";
import { externalWriting } from "@/data/externalWriting";
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
      <h1 className={styles.heading}>The Everything TMT Blog</h1>
      <p className={styles.subheading}>
        Analysis and commentary on technology law, privacy, and AI regulation. 
        <br>
        To get these pieces straight to your email ID,{" "}
  <a
    href="https://everythingtmt.substack.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    subscribe to my Substack!
     </a>
    </br>
 
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

      {!category && externalWriting.length > 0 && (
        <>
          <div className={styles.sectionLabel}>Also Published Elsewhere</div>
          <div className={styles.grid}>
            {externalWriting.map((piece, i) => (
              <ExternalWriteupCard key={i} piece={piece} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
