import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export function getAllBlogPosts() {
  const filenames = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter } = matter(fileContent);

    return { slug, ...frontmatter };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getBlogPostBySlug(slug) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter, content } = matter(fileContent);

  return { slug, frontmatter, content };
}

// All published parts of one series, in reading order (part 1 first).
export function getSeriesPosts(series) {
  if (!series) return [];
  return getAllBlogPosts()
    .filter((p) => p.series === series)
    .sort((a, b) => (a.seriesPart || 0) - (b.seriesPart || 0));
}
