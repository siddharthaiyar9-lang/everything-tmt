import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader/PageHeader';
import BlogCard from '@/components/BlogCard/BlogCard';
import ResourceCard from '@/components/ResourceCard/ResourceCard';
import { getAllBlogPosts } from '@/lib/blog';
import { VERTICALS, RESOURCES } from '@/data/verticals';
import styles from './page.module.css';

// Only the four slugs in data/verticals.js become pages. Anything else
// (for example /foo) returns a 404, and real routes like /about or /blog
// are untouched because static routes always win over dynamic ones.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(VERTICALS).map((vertical) => ({ vertical }));
}

export async function generateMetadata({ params }) {
  const { vertical } = await params;
  const v = VERTICALS[vertical];
  if (!v) return {};
  return { title: `${v.label} | Everything TMT`, description: v.description };
}

export default async function VerticalPage({ params }) {
  const { vertical } = await params;
  const v = VERTICALS[vertical];
  if (!v) notFound();

  const posts = getAllBlogPosts().filter((p) => Array.isArray(p.verticals) && p.verticals.includes(vertical));

  return (
    <div className={styles.page}>
      <PageHeader icon={v.icon} label={v.label}>
        <h1 className={styles.heading}>{v.label}</h1>
        <p className={styles.subheading}>{v.description}</p>
      </PageHeader>

      {posts.length === 0 ? (
        <p className={styles.empty}>Nothing published here yet.</p>
      ) : (
        <div className={styles.grid}>
          {posts.map((post) => (<BlogCard key={post.slug} post={post} />))}
        </div>
      )}

      {v.resources.length > 0 && (
        <>
          <div className={styles.sectionLabel}>Research and Resources</div>
          <div className={styles.grid}>
            {v.resources.map((id) => (<ResourceCard key={id} resource={RESOURCES[id]} />))}
          </div>
        </>
      )}
    </div>
  );
}