import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Calendar, User, ChevronRight } from "lucide-react";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getExplainerBySlug, getAllExplainers } from "@/lib/mdx";
import { extractHeadings } from "@/lib/toc";
import { mdxComponents } from "@/components/mdx";
import TableOfContents from "@/components/TableOfContents/TableOfContents";
import ReadingProgress from "@/components/ReadingProgress/ReadingProgress";
import styles from "./page.module.css";

export function generateStaticParams() {
  return getAllExplainers().map((explainer) => ({ slug: explainer.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const explainer = getExplainerBySlug(slug);
  if (!explainer) return {};
  return {
    title: `${explainer.frontmatter.title} | Everything TMT`,
    description: explainer.frontmatter.description,
  };
}

export default async function ExplainerPage({ params }) {
  const { slug } = await params;
  const explainer = getExplainerBySlug(slug);

  if (!explainer) {
    notFound();
  }

  const { frontmatter, content } = explainer;
  const headings = extractHeadings(content);

  return (
    <div className={styles.page}>
      <nav className={styles.breadcrumb}>
        <Link href="/knowledge-base">Knowledge Base</Link>
        <ChevronRight size={12} />
        <span>{frontmatter.title}</span>
      </nav>

      <div className={styles.layout}>
        <div className={styles.main}>
          <div className={styles.category}>{frontmatter.category}</div>
          <h1 className={styles.title}>{frontmatter.title}</h1>

          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <Clock size={12} /> {frontmatter.readingTime}
            </span>
            <span className={styles.metaItem}>
              <Calendar size={12} /> Updated {frontmatter.date}
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
