// Single source of truth for "who counts as the site's primary author."
// Used to auto-detect guest posts — anything with a different `author`
// in its frontmatter gets tagged automatically, no extra field needed
// per post.
export const SITE_AUTHOR = "Siddharth Aiyar";
