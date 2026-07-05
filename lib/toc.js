import GithubSlugger from "github-slugger";

export function extractHeadings(mdxSource) {
  const slugger = new GithubSlugger();
  const lines = mdxSource.replace(/\r\n/g, "\n").split("\n"); // CHANGED THIS LINE
  const headings = [];

  for (const line of lines) {
    const match = line.match(/^##\s+(.+)$/);
    if (match) {
      const text = match[1].replace(/\*\*/g, "").trim();
      const id = slugger.slug(text);
      headings.push({ text, id });
    }
  }

  return headings;
}
