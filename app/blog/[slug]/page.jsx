import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Calendar, User, ChevronRight } from "lucide-react";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog";
import { extractHeadings } from "@/lib/toc";
import { mdxComponents } from "@/components/mdx";
import TableOfContents from "@/components/TableOfContents/TableOfContents";
import ReadingProgress from "@/components/ReadingProgress/ReadingProgress";
import styles from "./page.module.css";
import { SITE_AUTHOR } from "@/data/site";

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.frontmatter.title} | Everything TMT`,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;
  const headings = extractHeadings(content);
  const isGuest = frontmatter.author && frontmatter.author !== SITE_AUTHOR;

  return (
    <div className={styles.page}>
      <nav className={styles.breadcrumb}>
        <Link href="/blog">Blog</Link>
        <ChevronRight size={12} />
        <span>{frontmatter.title}</span>
      </nav>

      <div className={styles.layout}>
        <div className={styles.main}>
          <div className={styles.categoryRow}>
            <span className={styles.category}>{frontmatter.category}</span>
            {isGuest && (
              <span className={styles.guestTag}>Guest Contributor</span>
            )}
          </div>
          <h1 className={styles.title}>{frontmatter.title}</h1>

          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <Clock size={12} /> {frontmatter.readingTime}
            </span>
            <span className={styles.metaItem}>
              <Calendar size={12} /> {frontmatter.date}
            </span>
            <span className={styles.metaItem}>
              <User size={12} /> {frontmatter.author}
            </span>
          </div>

          <article id="article-content" className={styles.content}>
            <MDXRemote
              source={content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug],
                },
              }}
            />
          </article>
        </div>

        <aside className={styles.sidebar}>
          <ReadingProgress targetId="article-content" />
          <TableOfContents headings={headings} />
        </aside>
      </div>
    </div>
  );
}
