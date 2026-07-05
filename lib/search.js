import { SYNONYM_GROUPS } from "@/data/searchSynonyms";

// Given the raw query, returns an array of every term worth searching
// for: the query itself, plus every term from any synonym group the
// query partially matches. "Partially matches" runs both directions
// (query contains the term, OR the term contains the query) so short
// queries like "ai" and longer ones like "data privacy" both work.
function expandQuery(query) {
  const terms = new Set([query]);

  for (const group of SYNONYM_GROUPS) {
    const hasOverlap = group.some(
      (term) => query.includes(term) || term.includes(query),
    );
    if (hasOverlap) {
      group.forEach((term) => terms.add(term));
    }
  }

  return Array.from(terms);
}

export function searchItems(items, query) {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return [];

  const searchTerms = expandQuery(trimmed);
  const results = [];

  for (const item of items) {
    const title = item.title?.toLowerCase() || "";
    const description = item.description?.toLowerCase() || "";
    const tags = (item.tags || []).map((t) => t?.toLowerCase() || "");

    // Find the BEST (lowest) score across all expanded search terms —
    // e.g. if "data privacy" expands to include "data protection", and
    // an item's title matches "data protection" directly, that still
    // counts as a title-level match (score 0), not a weaker one.
    let bestScore = null;

    for (const term of searchTerms) {
      const titleMatch = title.includes(term);
      const descriptionMatch = description.includes(term);
      const tagMatch = tags.some((tag) => tag.includes(term));

      if (titleMatch || descriptionMatch || tagMatch) {
        const score = titleMatch ? 0 : descriptionMatch ? 1 : 2;
        if (bestScore === null || score < bestScore) {
          bestScore = score;
        }
      }
    }

    if (bestScore !== null) {
      results.push({ ...item, score: bestScore });
    }
  }

  return results.sort((a, b) => a.score - b.score).slice(0, 20);
}
