import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// All explainer .mdx files live here. Centralizing the path in one
// constant means if you ever reorganize content/, only this line changes.
const EXPLAINERS_DIR = path.join(process.cwd(), 'content', 'explainers');

// Returns metadata for every explainer, sorted newest first.
// Used by the homepage and the Knowledge Base listing page.
// Note: this does NOT parse the MDX body — just the frontmatter — since
// listing pages only need title/description/etc, not the full content.
// That keeps this fast even once you have dozens of explainers.
export function getAllExplainers() {
    const filenames = fs.readdirSync(EXPLAINERS_DIR).filter((f) => f.endsWith('.mdx'));
    console.log('FILES FOUND:', filenames); // ADD THIS LINE TEMPORARILY

  const explainers = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    const filePath = path.join(EXPLAINERS_DIR, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter } = matter(fileContent);

    return { slug, ...frontmatter };
  });

  return explainers.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Returns one explainer's frontmatter AND its raw MDX body content.
// Used by the individual article page — built in Step 5 — which will
// pass `content` into <MDXRemote> to actually render it.
export function getExplainerBySlug(slug) {
  const filePath = path.join(EXPLAINERS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter, content } = matter(fileContent);

  return { slug, frontmatter, content };
}