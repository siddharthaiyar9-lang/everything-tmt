import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero/PageHero';
import BlogCard from '@/components/BlogCard/BlogCard';
import ExplainerCard from '@/components/ExplainerCard/ExplainerCard';
import ExternalWriteupCard from '@/components/ExternalWriteupCard/ExternalWriteupCard';
import ResourceCard from '@/components/ResourceCard/ResourceCard';
import ExpandableList from '@/components/ExpandableList/ExpandableList';
import { getAllBlogPosts } from '@/lib/blog';
import { getAllExplainers } from '@/lib/mdx';
import { research } from '@/data/research';
import { VERTICALS, TRACKERS } from '@/data/verticals';
import styles from './page.module.css';

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

function Row({ label, children }) {
  return (
    <section>
      <div className={styles.sectionLabel}>{label}</div>
      {children}
    </section>
  );
}

function ComingSoon() {
  return <p className={styles.comingSoon}>Coming soon</p>;
}

export default async function VerticalPage({ params }) {
  const { vertical } = await params;
  const v = VERTICALS[vertical];
  if (!v) notFound();

  const inVertical = (item) => Array.isArray(item.verticals) && item.verticals.includes(vertical);
  const posts = getAllBlogPosts().filter(inVertical);
  const explainers = getAllExplainers().filter(inVertical);
  const projects = research.filter(inVertical);

  return (
    <>
      <PageHero icon={v.icon} title={v.label} text={v.description} image={v.image} imagePosition={v.imagePosition} scrollTo="vertical-content" />

      <div id="vertical-content" className={styles.page}>
        <Row label="Latest writing">
          {posts.length === 0 ? (
            <ComingSoon />
          ) : (
            <ExpandableList limit={3} className={styles.grid}>
              {posts.map((post) => (<BlogCard key={post.slug} post={post} />))}
            </ExpandableList>
          )}
        </Row>

        <Row label="Explainers">
          {explainers.length === 0 ? (
            <ComingSoon />
          ) : (
            <div className={styles.grid}>
              {explainers.map((e) => (<ExplainerCard key={e.slug} explainer={e} />))}
            </div>
          )}
        </Row>

        <Row label="Research">
          {projects.length === 0 ? (
            <ComingSoon />
          ) : (
            <div className={styles.grid}>
              {projects.map((p) => (<ExternalWriteupCard key={p.url} piece={p} />))}
            </div>
          )}
        </Row>

        {v.trackers.length > 0 && (
          <Row label="Trackers">
            <div className={styles.grid}>
              {v.trackers.map((id) => (<ResourceCard key={id} resource={TRACKERS[id]} />))}
            </div>
          </Row>
        )}
      </div>
    </>
  );
}