// Server-only. Combines every content type into ONE flat, uniform
// array so the search UI never needs to know or care where a result
// came from — it just renders {type, title, description, url}.
// This file can only be imported by Server Components (it reads MDX
// files from disk), which is why we build the index here and pass the
// finished result down as a plain prop, rather than importing this
// file inside SearchModal itself.
import { getAllExplainers } from "./mdx";
import { trackerEntries } from "@/data/tracker";
import { podcasts } from "@/data/podcasts";
import { newsletters } from "@/data/newsletters";

export function getSearchIndex() {
  const explainerItems = getAllExplainers().map((e) => ({
    type: "Knowledge Base",
    title: e.title,
    description: e.description,
    url: `/knowledge-base/${e.slug}`,
    tags: e.tags || [],
  }));

  const trackerItems = trackerEntries.map((t) => ({
    type: "AI Tracker",
    title: t.title,
    description: t.summary,
    url: "/tracker",
    tags: [t.regulator, t.status, t.policyArea],
  }));

  const podcastItems = podcasts.map((p) => ({
    type: "Podcast",
    title: p.title,
    description: p.guestLabel,
    url: "/podcast",
    tags: [],
  }));

  const newsletterItems = newsletters.map((n) => ({
    type: "Newsletter",
    title: n.title,
    description: n.category,
    url: n.url,
    tags: [n.category, n.platform],
  }));

  return [
    ...explainerItems,
    ...trackerItems,
    ...podcastItems,
    ...newsletterItems,
  ];
}
